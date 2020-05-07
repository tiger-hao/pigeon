import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ObjectSchema } from 'yup';

export interface FormField<T> {
  name: keyof T;
  type: string;
  label: string;
  initialValue: any;
  autoComplete?: string;
}

export interface AuthFormProps<T extends object> {
  title: string;
  fields: FormField<T>[];
  validationSchema: ObjectSchema<T>
  redirectElement: React.ReactNode;
  onSubmit: (values: T) => void;
}

export class AuthForm<T extends object> extends React.Component<AuthFormProps<T>> {
  render() {
    const {
      title,
      fields,
      validationSchema,
      redirectElement,
      onSubmit
    } = this.props;

    const initialValues: T = fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue;
      return acc;
    }, {} as T);

    return (
      <Container maxWidth="xs">
        <Grid container>
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
                        <Grid item xs={12}>
                          <Field component={TextField} variant="outlined" margin="normal" fullWidth
                            name={name} type={type} label={label} autoComplete={autoComplete}
                          />
                        </Grid>
                      );
                    })
                  }

                  <Grid item>
                    {redirectElement}
                  </Grid>

                  <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                      {title}
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
