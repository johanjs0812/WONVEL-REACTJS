import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/slices/authSlice';
import { USER_LOGIN, USER_SIGNUP } from '../constants/apiConfig';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setError] = useState(null);
  const [signupError, setErrorsg] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(USER_LOGIN, {
        email: email,
        pass: password,
      });
      dispatch(loginSuccess());
      setLoading(false);
      return response.data;
    } catch (err) {
      setError('Email hoặc mật khẩu không chính xác');
      dispatch(loginFailure('Email hoặc mật khẩu không chính xác'));
      setLoading(false);
      throw err;
    }
  };

  const signup = async (username, phone, gmail, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(USER_SIGNUP, {
        full_name: username,
        phone_number: phone,
        email: gmail,
        pass: password
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setErrorsg('Số điện thọai hoặc gmail đã được sử dụng');
      setLoading(false);
      throw err;
    }
  };

  return { login, loading, loginError, signup, signupError };
};

export default useApi;
