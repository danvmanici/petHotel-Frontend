import axiosInstance from './axiosInstance';
import { Owner } from '../interfaces/Owner';

export const registerOwner = async (data: Owner) => {
  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
    confirm_password: data.confirmPassword,
  };
  try {
    let response = await axiosInstance.post('owners/', payload);
    return response.data;
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
