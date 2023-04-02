import { Button, Dialog, DialogContent, Grid, TextField } from '@mui/material';
import {
  ContactFormErrors,
  IContactFormValues,
  defaultContactFormValues,
} from '../types/contactForm';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  submitContactForm,
  validateContactForm,
} from '../util/submitContactForm';

import DialogTitleWithClose from './DialogTitleWithClose';
import { LoadingButton } from '@mui/lab';

export type ContactContextValue = {
  openContactForm: () => any;
};

export const defaultContactContextValue: ContactContextValue = {
  openContactForm: () => {},
};

export const ContactContext = createContext<ContactContextValue>(
  defaultContactContextValue,
);

export const useContactForm = () => useContext(ContactContext);

export const ContactProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<IContactFormValues>({
    ...defaultContactFormValues,
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [formLoading, setFormLoading] = useState(false);

  const handleFormValueChange = useCallback(
    (key: keyof IContactFormValues, value: any) => {
      setFormValues(state => ({ ...state, [key]: value }));
    },
    [],
  );

  const handleCloseForm = useCallback(() => {
    setFormValues({ ...defaultContactFormValues });
    setFormErrors({});
    setFormLoading(false);
    setOpen(false);
  }, []);

  const handleFormSubmit = useCallback(async () => {
    setFormErrors({});
    const validationErrors = validateContactForm(formValues);

    if (Object.values(validationErrors).some(err => !!err)) {
      return setFormErrors(validationErrors);
    }

    try {
      setFormLoading(true);
      await submitContactForm(formValues);
      handleCloseForm();
    } catch (error) {
      console.log(error);
      setFormErrors(state => ({ ...state, submit: 'error saving response' }));
    } finally {
      setFormLoading(false);
    }
  }, [formValues, handleCloseForm]);

  const contextValue: ContactContextValue = {
    openContactForm: () => setOpen(true),
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
      <Dialog open={open} onClose={handleCloseForm} maxWidth="md" fullWidth>
        <DialogTitleWithClose onClose={handleCloseForm} title="Contact" />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                value={formValues.name}
                onChange={e => handleFormValueChange('name', e.target.value)}
                fullWidth
                error={!!formErrors.name}
                helperText={formErrors.name}
                variant="standard"
                label="Name*"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formValues.email}
                onChange={e => handleFormValueChange('email', e.target.value)}
                fullWidth
                error={!!formErrors.email}
                helperText={formErrors.email}
                variant="standard"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={formValues.message}
                onChange={e => handleFormValueChange('message', e.target.value)}
                fullWidth
                error={!!formErrors.message}
                helperText={formErrors.message}
                variant="standard"
                label="Message*"
                multiline
                minRows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                loading={formLoading}
                onClick={handleFormSubmit}
                variant="contained"
                disableElevation
              >
                Save
              </LoadingButton>
              <Button
                disabled={formLoading}
                onClick={handleCloseForm}
                variant="outlined"
                sx={{ ml: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </ContactContext.Provider>
  );
};
