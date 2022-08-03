import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PetsPage = () => {
  return (
    <>
      Pets
      <div>
        <Link to="/pets/1">Pet 1</Link>
      </div>
      <div>
        <Link to="/pets/2">Pet 2</Link>
      </div>
      <Outlet />
    </>
  );
};

export default PetsPage;
