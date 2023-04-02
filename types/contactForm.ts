export interface IContactFormValues {
  name: string;
  message: string;
  email?: string;
}

export const defaultContactFormValues: IContactFormValues = {
  name: '',
  message: '',
  email: undefined,
};

export type ContactFormErrors = Partial<
  Record<keyof IContactFormValues, string> & { submit: string }
>;

export const CONTACT_FORM_MESSAGE_LENGTH = 300;
