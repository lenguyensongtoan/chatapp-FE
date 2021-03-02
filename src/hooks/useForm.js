import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { isFunction } from 'lodash';

const Index = () => {
  const [handleSubmitOrig, setHandleSubmitOrig] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { register, getValues, setValue, handleSubmit, setError, watch, errors, control, reset, clearErrors } = useForm(
    {}
  );

  const formSubmit = handleSubmit((data) => {
    isFunction(handleSubmitOrig) && handleSubmitOrig(data);
  });

  const registerHandleSubmit = (funcCallback) => {
    setHandleSubmitOrig(() => funcCallback);
  };

  return {
    register,
    submit: formSubmit,
    watch,
    errors,
    registerHandleSubmit,
    control,
    setValue,
    reset,
    getValues,
    setLoading,
    isLoading,
    setError,
    clearErrors,
  };
};

export default Index;
