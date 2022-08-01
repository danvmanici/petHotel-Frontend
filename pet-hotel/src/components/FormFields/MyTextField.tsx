import { TextField } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

interface MUITextField {
  label?: string | undefined;
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
  margin?: 'dense' | 'normal' | 'none' | undefined;
  size?: 'small' | 'medium' | undefined;
  type?: 'password' | undefined;
}

type MyTextFieldProps = MUITextField & FieldAttributes<{}>;

const MyTextField: React.FC<MyTextFieldProps> = ({ ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const variant = !!props.variant ? props.variant : 'outlined';
  const size = !!props.size ? props.size : 'small';

  return (
    <TextField
      fullWidth
      placeholder={props.placeholder}
      label={props.label}
      variant={variant}
      margin={props.margin}
      size={size}
      type={props.type}
      sx={{
        '& label': {
          '&.Mui-focused': {
            color: 'green',
          },
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
      }}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default MyTextField;
