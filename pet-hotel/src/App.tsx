import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import PetPage from './Pages/PetPage';
import PetsPage from './Pages/PetsPage';
import ProfilePage from './Pages/ProfilePage';
import SignUpPage from './Pages/SignUpPage';
import NotFoundPage from './Pages/NotFoundPage';
import ActiveLastBreadcrumb from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <ActiveLastBreadcrumb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/pets">
          <Route index element={<PetsPage />} />
          <Route path=":id" element={<PetPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
