import {
  useCallback, useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import { Subscription } from 'rxjs';
import {
  defaultFormState,
  useFormContext,
} from './Formiz';
import { getFormValues } from './utils';
import {
  FormFields,
  UseFormProps,
  UseFormValues,
} from './types/form.types';

export const useForm = ({
  stateLevel = 'fields',
}: UseFormProps = {}): UseFormValues => {
  const {
    formStateRef, fieldsRef, formMethods, subjects,
  } = useFormContext();
  const [methods, setMethods] = useState(formMethods);
  const [formState, setFormState] = useState(formStateRef?.current ?? defaultFormState);
  const [fieldsState, setFieldsState] = useState<FormFields>(fieldsRef?.current ?? []);
  const subscriptionsRef = useRef<Array<Subscription>>([]);

  const subscribeOnFormUpdate = (subject: any) => {
    if (!subject || !['form', 'fields'].includes(stateLevel)) {
      return;
    }
    const subscription = subject
      .subscribe(setFormState, 100);
    subscriptionsRef.current.push(subscription);
  };

  const subscribeOnFieldsUpdate = (subject: any) => {
    if (!subject || !['fields'].includes(stateLevel)) {
      return;
    }
    const subscription = subject
      .subscribe(setFieldsState, 100);
    subscriptionsRef.current.push(subscription);
  };

  // Use the connect property to retrieve the state
  const connect = useCallback(({
    formMethods: _formMethods,
    subjects: _subjects,
  }) => {
    setMethods(_formMethods);
    subscribeOnFormUpdate(_subjects?.onFormUpdate);
    subscribeOnFieldsUpdate(_subjects?.onFieldsUpdate);
  }, []);

  // Subscribe (if not used with connect)
  useLayoutEffect(() => {
    subscribeOnFormUpdate(subjects?.onFormUpdate);
    subscribeOnFieldsUpdate(subjects?.onFieldsUpdate);
  }, []);

  // Clear all subscriptions at unmount
  useEffect(() => () => {
    subscriptionsRef.current.forEach((subscription) => subscription?.unsubscribe());
  }, []);

  const enabledSteps = formState.steps
    .filter((x) => x.isEnabled)
    .map(({
      name,
      isSubmitted,
      isValid,
      isVisited,
    }, index) => ({
      index,
      name,
      isSubmitted,
      isValid,
      isVisited,
    }))
    .map((x, index) => ({ ...x, index }));

  const currentStep = enabledSteps
    .find((x) => x.name === (formState.navigatedStepName || formState.initialStepName)) || null;

  return {
    ...methods,
    ...(['form', 'fields'].includes(stateLevel) ? {
      resetKey: formState.resetKey,
      isSubmitted: formState.isSubmitted,
      isValid: formState.isValid,
      isPristine: formState.isPristine,
      steps: enabledSteps,
      currentStep: currentStep || {},
      isStepValid: !!currentStep?.isValid,
      isStepSubmitted: !!currentStep?.isSubmitted,
      isFirstStep: enabledSteps[0]?.name === currentStep?.name,
      isLastStep: enabledSteps[enabledSteps.length - 1]?.name === currentStep?.name,
    } : {}),
    ...(['fields'].includes(stateLevel) ? {
      values: getFormValues(fieldsState),
    } : {}),
    __connect__: connect,
  };
};
