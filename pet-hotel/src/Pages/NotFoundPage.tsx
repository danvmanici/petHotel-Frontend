import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, []);
  return <h1>NotFoundPage</h1>;
};

export default NotFoundPage;
