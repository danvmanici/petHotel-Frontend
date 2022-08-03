import React from 'react';
import { useParams } from 'react-router-dom';

const PetPage = () => {
  const { id } = useParams();
  return <div>my pet is {id}</div>;
};

export default PetPage;
