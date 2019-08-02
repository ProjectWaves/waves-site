import { useState } from 'react';

export const useForm = callback => {
  const [input, setInput] = useState({});

  const handleChange = event => {
    event.persist();
    setInput(input => ({ ...input, [event.target.name]: event.target.value }));
  };
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  return {
    handleChange,
    handleSubmit,
    input,
  };
};
