import { Select } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

const MySelectField: React.FC<FieldAttributes<{}>> = ({ ...props }) => {
  const [field] = useField<{}>(props);
  return <Select {...field} />;
};

export default MySelectField;
