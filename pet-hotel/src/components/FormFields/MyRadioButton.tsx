import { FormControlLabel, Radio } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

type MyRadioProps = { label?: string | undefined } & FieldAttributes<{}>;

const MyRadioButton: React.FC<MyRadioProps> = ({ ...props }) => {
  const [field] = useField<{}>(props);
  return (
    <>
      {!!props.label && (
        <FormControlLabel {...field} control={<Radio />} label={props.label} />
      )}
      {!props.label && <Radio {...field} />}
    </>
  );
};

export default MyRadioButton;
