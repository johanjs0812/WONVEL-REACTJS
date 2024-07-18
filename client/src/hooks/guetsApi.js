import { useState } from 'react';
import axios from 'axios';
import { GUETS_ADD } from '../constants/apiConfig';

const useGuets = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

  const add = async (data) => {
    setLoading(true);
    setErr(null);

    try {
      const response = await axios.post(GUETS_ADD, data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setErr('Đã xảy ra lỗi khi đặt tour');
      setLoading(false);
      throw err;
    }
  };

  return { add, loading, err };
};

export default useGuets;
