import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/sign-up/">
        Sign Up
      </Link>
      <Link underline="hover" color="text.primary" href="/pets/">
        Pets
      </Link>
    </Breadcrumbs>
  );
}
