import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ObjectSchema } from 'yup';

export interface FormField<T extends object> {
  name: keyof T;
  type: string;
  label: string;
  initialValue: T[keyof T];
  autoComplete?: string;
}

export interface AuthFormProps<T extends object> {
  title: string;
  fields: FormField<T>[];
  validationSchema: ObjectSchema<T>
  redirectElement: React.ReactNode;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  loading: boolean;
  error: string;
}

export class AuthForm<T extends object> extends React.Component<AuthFormProps<T>> {
  render() {
    const {
      title,
      fields,
      validationSchema,
      redirectElement,
      onSubmit,
      loading
    } = this.props;

    const initialValues: T = fields.reduce((acc: T, field: FormField<T>) => {
      acc[field.name] = field.initialValue;
      return acc;
    }, {} as T);

    return (
      <Container maxWidth="xs">
        <Grid container style={{ paddingTop: "1rem" }}>
          <Grid item>
            <Typography component="h1" variant="h4">
              {title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              <Form>
                <Grid container justify="space-between">
                  {
                    fields.map((field: FormField<T>) => {
                      const {
                        name,
                        type,
                        label,
                        autoComplete
                      } = field;

                      return (
                        <Grid item xs={12} key={`${name}`}>
                          <Field component={TextField} variant="outlined" margin="normal" disabled={loading} fullWidth
                            name={name} type={type} label={label} autoComplete={autoComplete}
                          />
                        </Grid>
                      );
                    })
                  }

                  <Grid item xs={9}>
                    {redirectElement}
                  </Grid>

                  <Grid item xs={3}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      {loading
                        ?
                        <CircularProgress size={24} color="inherit" />
                        :
                        title
                      }
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid >
      </Container>
    );
  }
};
