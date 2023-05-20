import type {
  Field,
  Fields,
  PartialField,
  ResetElement,
  ResetOptions,
} from "@/types";
import { isObject } from "@/utils/global";

const parseValues = <T>(values: Record<string, T>) =>
  Object.keys(values).reduce((acc, key) => parseValuesName(key, acc), values);

const parseValuesName = (name: string, values: any): any => {
  if (name.indexOf(".") < 0 && name.indexOf("[") < 0) {
    return values;
  }

  const value = values[name];
  const { [name]: deletedKey, ...nextValues } = values || {};
  const [current, ...otherNames] = name.split(".");
  const isArraySyntax = current.match(/\[([0-9]*)\]$/g);

  if (isArraySyntax) {
    const [currentName, , currentIndex] = current.split(/(\[|\])/g);
    const currentCollection = values[currentName] || [];

    if (otherNames.length) {
      const group = {
        ...(values[currentName] && isObject(values[currentName][currentIndex])
          ? values[currentName][currentIndex]
          : {}),
        [otherNames.join(".")]: value,
      };

      currentCollection[currentIndex] = parseValues(group);
    } else {
      currentCollection[currentIndex] = value;
    }

    return {
      ...nextValues,
      [currentName]: currentCollection,
    };
  }

  const group = {
    ...(isObject(values[current]) ? values[current] : {}),
    [otherNames.join(".")]: value,
  };

  return {
    ...nextValues,
    [current]: parseValues(group),
  };
};

export const getFormFlatValues = (fields: Fields) =>
  Array.from(fields.values()).reduce(
    (obj, field) => ({
      ...obj,
      [field.name]: field.formattedValue,
    }),
    {}
  );

export const getFormValues = (fields: Fields) => {
  const values = getFormFlatValues(fields);
  return parseValues(values);
};

export const getFormFields = <Selection>(
  flatFields: Record<string, Selection>
) => {
  return parseValues(flatFields);
};

export const getField = <Value = unknown, FormattedValue = Value>(
  fields: Fields,
  fieldId: string
) => fields.get(fieldId) as Field<Value, FormattedValue>;

export const getFieldIsValid = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>
) =>
  !field.requiredErrors.length &&
  !field.validationsErrors.length &&
  !field.validationsAsyncErrors.length &&
  !field.externalErrors.length;

export const getFieldIsPristine = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>
) => field.isPristine;

export const getFieldIsValidating = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>
) => field.isValidating;

export const getFieldIsExternalProcessing = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>
) => field.isExternalProcessing;

export const getFieldIsDebouncing = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>
) => field.isDebouncing;

export const getFieldIsProcessing = <Value, FormattedValue>(
  field: Field<Value, FormattedValue>,
  formIsReady: boolean = true
) =>
  !formIsReady ||
  getFieldIsDebouncing(field) ||
  getFieldIsValidating(field) ||
  getFieldIsExternalProcessing(field);

export const getFormIsValid = (fields: Fields) =>
  Array.from(fields).every(([, field]) => getFieldIsValid(field));

export const getFormIsValidating = (fields: Fields) =>
  Array.from(fields).some(([, field]) => getFieldIsValidating(field));

export const getFormIsDebouncing = (fields: Fields) =>
  Array.from(fields).some(([, field]) => getFieldIsDebouncing(field));

export const getFormIsProcessing = (fields: Fields, formIsReady: boolean) =>
  !formIsReady ||
  Array.from(fields).some(([, field]) => getFieldIsProcessing(field));

export const getFormIsPristine = (fields: Fields) =>
  Array.from(fields).every(([, field]) => getFieldIsPristine(field));

export const getStepIsValid = (stepName: string, fields: Fields) =>
  Array.from(fields)
    .filter(([, field]) => field.stepName === stepName)
    .every(([, field]) => getFieldIsValid(field));

export const getStepIsValidating = (stepName: string, fields: Fields) =>
  Array.from(fields)
    .filter(([, field]) => field.stepName === stepName)
    .some(([, field]) => getFieldIsValidating(field));

export const getStepIsDebouncing = (stepName: string, fields: Fields) =>
  Array.from(fields)
    .filter(([, field]) => field.stepName === stepName)
    .some(([, field]) => getFieldIsDebouncing(field));

export const getStepIsProcessing = (
  stepName: string,
  fields: Fields,
  formIsReady: boolean
) =>
  !formIsReady ||
  Array.from(fields)
    .filter(([, field]) => field.stepName === stepName)
    .some(([, field]) => getFieldIsProcessing(field));

export const getStepIsPristine = (stepName: string, fields: Fields) =>
  Array.from(fields)
    .filter(([, field]) => field.stepName === stepName)
    .every(([, field]) => getFieldIsPristine(field));

export const generateField = <Value>(
  fieldId: string,
  field: PartialField<Value> & Pick<Field<Value>, "name" | "value">
): Field<Value> => {
  return {
    formattedValue: field.value,
    defaultValue: field.value,
    isPristine: true,
    isTouched: false,
    isValidating: false,
    isExternalProcessing: false,
    isDebouncing: false,
    requiredErrors: [],
    validationsErrors: [],
    validationsAsyncErrors: [],
    externalErrors: [],
    requiredRef: field.requiredRef,
    validationsRef: field.validationsRef,
    formatValue: (v) => v,
    ...field,
    id: fieldId,
  };
};

export const isResetAllowed = (
  resetElement: ResetElement,
  resetOptions: ResetOptions
) =>
  (!resetOptions.only || resetOptions.only.includes(resetElement)) &&
  (!resetOptions.exclude || !resetOptions.exclude.includes(resetElement));
