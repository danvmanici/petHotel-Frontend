import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SingUp from './components/SignUp/SingUpForm';
import { getOwners } from './services/ownerService';

function App() {
  // const getDataOwners = async () => {
  //   let owners = await getOwners();
  //   // console.log(owners);
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
