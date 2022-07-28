import axiosInstance from './axiosInstance';
import { Owner } from '../modules/Owner';

export const createOwner = async () => {
  const payload: Owner = {
    first_name: 'Ezio',
    last_name: 'Ezio',
    address: 'Cluj',
    mobile: '',
    email: 'ezio@gmail.ro',
  };

  try {
    await axiosInstance.post('owners/', payload);
  } catch (error) {
    console.log(error);
  }
};

export const getOwners = async () => {
  try {
    const response = await axiosInstance.get('owners/');
    return response.data;
  } catch (err) {
    console.log('err');
  }
};
