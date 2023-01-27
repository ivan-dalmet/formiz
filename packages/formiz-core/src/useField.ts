import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { deepEqual } from "fast-equals";

import { getField } from "@/utils/form";
import { useStepContext } from "@/FormizStep";

import type {
  UseFieldConfig,
  FieldProps,
  Store,
  ExposedField,
  FieldValue,
} from "@/types";
import { useFormStore } from "./Formiz";
import { fieldInterfaceSelector } from "./selectors";
import {
  ERROR_USE_FIELD_MISSING_CONTEXT,
  ERROR_USE_FIELD_MISSING_NAME,
  ERROR_USE_FIELD_MISSING_PROPS,
} from "./errors";

export const useField = <
  Props extends FieldProps<any> = FieldProps<any>,
  Value = Exclude<Required<Props>["defaultValue"], null>
>(
  props: Props,
  config: UseFieldConfig<Value> = {}
): ExposedField<Value, Props> => {
  if (!props) {
    throw new Error(ERROR_USE_FIELD_MISSING_PROPS);
  }

  const _config: UseFieldConfig<Value> = {
    unstable_notifyOnChangePropsExclusions: undefined,
    required: false,
    validations: [],
    validationsAsync: [],
    formatValue: (v) => v,
    ...config,
  };
  const configRef = useRef(_config);
  configRef.current = _config;

  // Merge config and props
  const _props: Props = {
    ...props,
    formatValue: (v) => {
      const valueFormattedFromConfig = _config.formatValue
        ? _config.formatValue(v)
        : v;
      const valueFormattedFromProps = props.formatValue
        ? props.formatValue(valueFormattedFromConfig)
        : valueFormattedFromConfig;
      return valueFormattedFromProps;
    },
    validations: [...(_config.validations ?? []), ...(props.validations ?? [])],
    validationsAsync: [
      ...(_config.validationsAsync ?? []),
      ...(props.validationsAsync ?? []),
    ],
    required: props.required ?? _config.required,
    debounceValidationsAsync:
      props.debounceValidationsAsync ?? _config.debounceValidationsAsync,
  };

  const {
    name,
    defaultValue,
    validations = [],
    validationsAsync = [],
    debounceValidationsAsync = 200,
    required = false,
    formatValue = (v) => v,
    onValueChange = () => undefined,
    ...otherProps
  } = _props;

  const defaultValueRef = useRef(defaultValue);
  defaultValueRef.current = defaultValue;

  const debounceValidationsAsyncRef = useRef(debounceValidationsAsync);
  debounceValidationsAsyncRef.current = debounceValidationsAsync;

  if (!name) {
    throw new Error(ERROR_USE_FIELD_MISSING_NAME);
  }

  const useStore = useFormStore();

  if (!useStore) {
    throw new Error(ERROR_USE_FIELD_MISSING_CONTEXT);
  }

  const stepContext = useStepContext();
  const stepName = stepContext?.name;
  const isStepMountedRef = stepContext?.isStepMountedRef;

  const formatValueRef = useRef(formatValue);
  formatValueRef.current = formatValue;

  const fieldId = useId();
  const fieldIdRef = useRef(fieldId);
  fieldIdRef.current = fieldId;

  const storeActions = useStore(
    useCallback((state: Store) => state.actions, []),
    deepEqual
  );

  const formConnected = useStore(
    useCallback((state: Store) => state.connected, [])
  );

  // Get field from state
  const { value, ...exposedField } = useStore(
    useCallback(
      (state) => {
        const field = getField<Value>(state.fields, fieldId);

        let draft = fieldInterfaceSelector<Value | undefined>(state)({
          // Default
          name,
          value: undefined,
          formattedValue: undefined,
          initialValue: undefined,
          initialFormattedValue: undefined,
          id: fieldId,
          isTouched: false,
          requiredErrors: [],
          validationsErrors: [],
          validationsAsyncErrors: [],
          externalErrors: [],
          isPristine: true,
          isValidating: false,
          isDebouncing: false,
          // Field
          ...field,
        });

        if (!configRef.current.unstable_notifyOnChangePropsExclusions)
          return draft;

        configRef.current.unstable_notifyOnChangePropsExclusions.forEach(
          (key) => {
            delete draft[key];
          }
        );

        return draft;
      },
      [fieldId, name]
    ),
    deepEqual
  );

  const valueRef = useRef(value ?? null);
  valueRef.current = value ?? null;
  const requiredRef = useRef(required);
  requiredRef.current = required;
  const validationsRef = useRef(validations);
  validationsRef.current = validations;

  // Register / Unregister
  useEffect(
    function registerField() {
      if (!formConnected) {
        return () => {};
      }

      const fieldId = fieldIdRef.current;

      storeActions.registerField(
        fieldId,
        {
          name,
          stepName,
          value: valueRef.current,
        },
        {
          defaultValue: defaultValueRef.current,
          formatValue: formatValueRef.current,
          requiredRef,
          validationsRef,
        }
      );
      return () => {
        const isInStep = !!isStepMountedRef;
        const isStepBeingUnmounted = isInStep && !isStepMountedRef.current; // eslint-disable-line react-hooks/exhaustive-deps
        storeActions.unregisterField(fieldId, {
          persist: isStepBeingUnmounted,
        });
      };
    },
    [isStepMountedRef, name, stepName, storeActions, formConnected]
  );

  const validationsAsyncRef = useRef(validationsAsync);
  validationsAsyncRef.current = validationsAsync;

  const valueSerialized = JSON.stringify(value);
  const validationsAsyncDeps = JSON.stringify(
    validationsAsync.map((validation) => ({
      deps: validation.deps,
      message: validation.message,
    }))
  );
  useEffect(() => {
    // Update internal form on external field value update
    setInternalValue(valueRef.current);

    // Async Validations
    if (!validationsAsyncRef.current.length) {
      return;
    }

    const asyncValidateField = async () => {
      storeActions.updateField(fieldIdRef.current, {
        validationsAsyncErrors: [],
        isDebouncing: false,
        isValidating: true,
      });

      const validationsAsyncHandlers = validationsAsyncRef.current.map(
        async (validation) => {
          return {
            isValid:
              (!validation.checkFalsy &&
                !currentField?.formattedValue &&
                currentField?.formattedValue !== 0) ||
              (await validation.handler(
                currentField?.formattedValue,
                currentField?.value
              )),
            validation,
          };
        }
      );

      const validationsAsyncResults = await Promise.all(
        validationsAsyncHandlers
      );

      const validationsAsyncErrors = validationsAsyncResults
        .filter(({ isValid }) => !isValid)
        .map(({ validation }) => validation.message);

      storeActions.updateField(fieldIdRef.current, {
        validationsAsyncErrors,
        isValidating: false,
      });
    };

    const currentField = useStore.getState().fields.get(fieldIdRef.current);

    const shouldRunAsyncValidations =
      !currentField?.requiredErrors.length &&
      !currentField?.validationsErrors.length;

    if (!shouldRunAsyncValidations) {
      return;
    }

    storeActions.updateField(fieldIdRef.current, {
      isDebouncing: !!debounceValidationsAsyncRef.current,
    });

    let timeoutId: NodeJS.Timeout;
    if (debounceValidationsAsyncRef.current) {
      timeoutId = setTimeout(() => {
        asyncValidateField();
      }, debounceValidationsAsyncRef.current);
    } else {
      asyncValidateField();
    }

    return () => {
      clearTimeout(timeoutId);
      storeActions.updateField(fieldIdRef.current, {
        validationsAsyncErrors: [],
        isDebouncing: false,
      });
    };
  }, [storeActions, useStore, valueSerialized, validationsAsyncDeps]);

  const [internalValue, setInternalValue] = useState<FieldValue<Value>>(null);

  const deferredValue = useDeferredValue(internalValue);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;

  const setFieldValue = useMemo(
    () =>
      storeActions.getFieldSetValue<Value>({
        fieldId: fieldIdRef.current,
        onValueChange: onValueChangeRef.current,
        formatValue: formatValueRef.current,
      }),
    [storeActions]
  );

  const validationsDeps = JSON.stringify(
    validations.map((validation) => ({
      deps: validation.deps,
      message: validation.message,
    }))
  );
  const validationsDepsPrevRef = useRef(validationsDeps);

  useEffect(() => {
    if (
      (deferredValue !== undefined && deferredValue !== valueRef.current) ||
      validationsDepsPrevRef.current !== validationsDeps
    ) {
      setFieldValue(deferredValue);
    }
  }, [deferredValue, setFieldValue, validationsDeps]);

  return {
    value: internalValue,
    setValue: setInternalValue,
    setIsTouched: storeActions.getFieldSetIsTouched(fieldIdRef.current),
    otherProps,
    isRequired: !!required,
    ...exposedField,
  };
};
