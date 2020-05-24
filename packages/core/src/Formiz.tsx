import * as React from 'react';
import {
  useLayoutEffect, useRef, useContext,
} from 'react';
import { Field } from './types/field.types';
import { useRefValue, getFormValues, useSubject } from './utils';
import {
  FormMethods, FormState, FormContextValue, FormizProps, FormFields, KeepValues,
} from './types/form.types';
import { StepState } from './types/step.types';
import * as formActions from './formActions';
import * as fieldsActions from './fieldsActions';

export const defaultFormActions: FormMethods = {
  submit: () => {},
  setFieldsValues: () => {},
};

export const defaultFormState: FormState = {
  resetKey: 0,
  isSubmitted: false,
  isValid: true,
  isPristine: true,
  steps: [],
  initialStepName: null,
  navigatedStepName: null,
};

export const FormContext = React.createContext<FormContextValue>({});
export const useFormContext = () => useContext(FormContext);

export const Formiz = ({
  autoForm = false,
  children = '',
  connect = {},
  onChange = () => {},
  onSubmit = () => {},
  onValidSubmit = () => {},
  onInvalidSubmit = () => {},
  onValid = () => {},
  onInvalid = () => {},
}: FormizProps) => {
  const formStateRef = useRef(defaultFormState);
  const fieldsRef = useRef<FormFields>([]);
  const keepValuesRef = useRef<KeepValues>({});
  const connectRef = useRefValue(connect.__connect__ || (() => {}));
  const onChangeRef = useRefValue(onChange);
  const onSubmitRef = useRefValue(onSubmit);
  const onValidSubmitRef = useRefValue(onValidSubmit);
  const onInvalidSubmitRef = useRefValue(onInvalidSubmit);
  const onValidRef = useRefValue(onValid);
  const onInvalidRef = useRefValue(onInvalid);
  const currentStepNameRef = useRefValue(
    formStateRef.current.navigatedStepName
    || formStateRef.current.initialStepName,
  );
  const currentStepRef: React.RefObject<StepState> = useRefValue(formStateRef.current.steps
    .find((x) => x.name === currentStepNameRef.current));

  const onFormUpdate = useSubject(formStateRef);
  const onFieldsUpdate = useSubject(fieldsRef);
  const onExternalFieldsUpdate = useSubject(fieldsRef);
  const onReset = useSubject(formStateRef);

  const checkFormValidity = (): boolean => {
    const isValid = fieldsRef.current
      .every((field: any) => !field?.errors?.length);

    if (isValid) {
      onValidRef.current();
    } else {
      onInvalidRef.current();
    }

    return isValid;
  };

  const checkStepValidity = (stepName: string): boolean => fieldsRef.current
    .filter((field) => field.stepName === stepName)
    .every((field: any) => !field?.errors?.length);

  const checkFormPristine = (): boolean => {
    const isPristine = fieldsRef.current
      .every((field: any) => field?.isPristine);
    return isPristine;
  };

  const updateFormState = (stateToUpdate: Partial<FormState>): void => {
    const newState = { ...formStateRef.current, ...stateToUpdate };
    if (JSON.stringify(newState) === JSON.stringify(formStateRef.current)) {
      return;
    }
    formStateRef.current = newState;
    onFormUpdate.push();
  };

  const goToStep = (stepName: string) => {
    const enabledSteps = formStateRef.current.steps
      .filter(({ isEnabled }) => isEnabled);
    const targetedStepIndex = enabledSteps
      .findIndex(({ name }) => name === stepName);

    if (targetedStepIndex < 0) {
      return;
    }

    updateFormState({
      navigatedStepName: enabledSteps[targetedStepIndex].name,
    });
  };

  const nextStep = () => {
    const enabledSteps = formStateRef.current.steps.filter((x) => x.isEnabled);
    const stepIndex = enabledSteps.findIndex((step) => step.name === currentStepNameRef.current);
    const isLastStep = stepIndex === enabledSteps.length - 1;

    if (isLastStep) {
      return;
    }

    updateFormState({
      navigatedStepName: enabledSteps[stepIndex + 1].name,
    });
  };

  const prevStep = () => {
    const enabledSteps = formStateRef.current.steps.filter((x) => x.isEnabled);
    const stepIndex = enabledSteps.findIndex((step) => step.name === currentStepNameRef.current);
    const isFirstStep = stepIndex === 0;

    if (isFirstStep) {
      return;
    }

    updateFormState({
      navigatedStepName: enabledSteps[stepIndex - 1].name,
    });
  };

  const submit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    const formatedValues = getFormValues(fieldsRef.current);

    if (formStateRef.current.isValid) {
      onValidSubmitRef.current(formatedValues);
    } else {
      onInvalidSubmitRef.current(formatedValues);
    }

    onSubmitRef.current(formatedValues);

    const { steps } = formStateRef.current;
    updateFormState({
      isSubmitted: true,
      steps: steps.map((step) => ({ ...step, isSubmitted: true })),
    });
  };

  const stepSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    updateFormState({
      steps: formStateRef.current.steps.map((step) => ({
        ...step,
        isSubmitted: step.name === currentStepNameRef.current ? true : step.isSubmitted,
      })),
    });

    if (!currentStepRef.current?.isValid) {
      return;
    }

    const enabledSteps = formStateRef.current.steps.filter((x) => x.isEnabled);
    const isLastStep = enabledSteps[enabledSteps.length - 1]?.name === currentStepNameRef.current;

    if (isLastStep) {
      submit();
      return;
    }

    nextStep();
  };

  const setFieldsValues = (objectOfValues = {}) => {
    fieldsRef.current = fieldsActions.setFieldsValues(fieldsRef.current, objectOfValues);
    onExternalFieldsUpdate.push();
  };

  const invalidateFields = (objectOfErrors = {}) => {
    fieldsRef.current = fieldsActions.setFieldsExternalErrors(fieldsRef.current, objectOfErrors);
    onExternalFieldsUpdate.push();
  };

  const getFieldStepName = (fieldName: string) => fieldsRef.current
    .find((field: Field) => fieldName === field.name)?.stepName ?? null;

  const validateForm = () => {
    updateFormState({
      isValid: checkFormValidity(),
      isPristine: checkFormPristine(),
      steps: formStateRef.current.steps.map((step) => ({
        ...step,
        isValid: checkStepValidity(step.name),
      })),
    });
  };

  const updateStep = (step: Partial<StepState>): void => {
    updateFormState(formActions.updateStep(formStateRef.current, step));
    validateForm();
  };

  const unregisterStep = (name: string): void => {
    formActions.unregisterStep(formStateRef.current, name);
    updateFormState({ isValid: checkFormValidity() });
    validateForm();
  };

  const registerField = (field: Field): void => {
    delete keepValuesRef.current[field.name];
    fieldsRef.current = fieldsActions.registerField(fieldsRef.current, field);
    onFieldsUpdate.push();
    onChangeRef.current(getFormValues(fieldsRef.current));
    validateForm();
  };

  const updateField = (field: Field): void => {
    fieldsRef.current = fieldsActions.updateField(fieldsRef.current, field);
    onFieldsUpdate.push();
    onChangeRef.current(getFormValues(fieldsRef.current));
    validateForm();
  };

  const unregisterField = (field: Field, shouldKeepValue: boolean): void => {
    if (shouldKeepValue) {
      keepValuesRef.current[field.name] = field.value;
    }
    fieldsRef.current = fieldsActions.unregisterField(fieldsRef.current, field.id);
    onFieldsUpdate.push();
    onChangeRef.current(getFormValues(fieldsRef.current));
    validateForm();
  };

  const reset = (): void => {
    updateFormState(formActions.resetForm(formStateRef.current));
    onReset.push();
  };

  const formMethods: FormMethods = {
    submit,
    submitStep: stepSubmit,
    setFieldsValues,
    invalidateFields,
    getFieldStepName,
    goToStep,
    nextStep,
    prevStep,
    reset,
  };

  // Connect
  useLayoutEffect(() => {
    connectRef.current({
      formMethods,
      subjects: {
        onFormUpdate,
        onFieldsUpdate,
        onExternalFieldsUpdate,
        onReset,
      },
    });
  }, []);

  return (
    <FormContext.Provider value={{
      actions: {
        updateStep,
        unregisterStep,
        registerField,
        updateField,
        unregisterField,
      },
      formMethods,
      keepValuesRef,
      subjects: {
        onFormUpdate,
        onFieldsUpdate,
        onExternalFieldsUpdate,
        onReset,
      },
    }}
    >
      {!autoForm
        ? children
        : (
          <form noValidate onSubmit={submit}>
            {children}
          </form>
        )}
    </FormContext.Provider>
  );
};
