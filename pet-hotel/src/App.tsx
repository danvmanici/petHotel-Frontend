import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SingUp from './components/SignUp/SingUpForm';
import { createOwner, getOwners } from './services/ownerService';

function App() {
  // const getDataOwners = async () => {
  //   let owners = await getOwners();
  //   // console.log(owners);
  // };

  // const register = async () => {
  //   await createOwner();
  // };

  // useEffect(() => {
  //   getDataOwners().catch(console.error);
  // }, []);

  return (
    <>
      <SingUp />
    </>
  );
}

export default App;
