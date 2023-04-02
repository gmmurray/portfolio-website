import {
  CONTACT_FORM_MESSAGE_LENGTH,
  ContactFormErrors,
  IContactFormValues,
} from '../types/contactForm';

import axios from 'axios';

export const submitContactForm = async (
  values: IContactFormValues,
): Promise<void> => {
  return await axios.post('/api/form', values);
};

export const validateContactForm = (
  values: IContactFormValues,
): ContactFormErrors => {
  const result: ContactFormErrors = {};

  if (isEmpty(values.name)) {
    result.name = 'Please enter your name';
  }

  if (isEmpty(values.message)) {
    result.message = 'Please enter your message';
  } else if (isTooLong(values.message)) {
    result.message = `Max characters is ${CONTACT_FORM_MESSAGE_LENGTH}`;
  }

  return result;
};

const isEmpty = (value?: string): boolean => value?.trim().length === 0;

const isTooLong = (value: string): boolean =>
  value.length > CONTACT_FORM_MESSAGE_LENGTH;
