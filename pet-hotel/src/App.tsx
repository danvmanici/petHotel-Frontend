import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SingUp from './components/SingUpForm';
import { createOwner, getOwners } from './services/ownerService';

function App() {
  const getDataOwners = async () => {
    let owners = await getOwners();
    // console.log(owners);
  };

  const register = async () => {
    await createOwner();
  };

  useEffect(() => {
    getDataOwners().catch(console.error);
  }, []);

  return (
    <>
      {/* <div className="text-3xl font-bold underline">Hello</div>
      <button type="button" onClick={singUp}>
        Create
      </button> */}
      <div />
      <SingUp />
    </>
  );
}

export default App;
