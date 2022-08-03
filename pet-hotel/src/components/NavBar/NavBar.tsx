import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './NavBar.css';
import AppsIcon from '@mui/icons-material/Apps';
import logo from '../../images/logoCat.jpg';
import { Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__left">
        <IconButton>
          <AppsIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>

        <Button
          startIcon={<img src={logo} alt="logo" width="55px" />}
          style={{
            color: 'white',
            textTransform: 'capitalize',
            padding: '0.2rem',
            fontSize: 30,
            paddingLeft: '2rem',
            paddingRight: '2rem',
          }}
        >
          Pet Hotel
        </Button>
      </section>
      <section className="navbar__center">
        <Breadcrumbs aria-label="breadcrumb" separator="">
          <Link underline="hover" color="white" href="/">
            Home
          </Link>
          <Link underline="hover" color="white" href="/sign-up/">
            Sign Up
          </Link>
          <Link underline="hover" color="white" href="/pets/">
            Pets
          </Link>
        </Breadcrumbs>
      </section>
      <section className="navbar__right">
        <IconButton>
          <NotificationsIcon fontSize="medium" sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <AccountCircleIcon fontSize="medium" sx={{ color: 'white' }} />
        </IconButton>
      </section>
    </nav>
  );
};

export default NavBar;
