import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { YOURORDER_GET } from '../constants/apiConfig';

const useYourOrder = (userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getOrder = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${YOURORDER_GET}${userId}`);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Đã xảy ra lỗi khi đặt tour');
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getOrder();
    }
  }, [userId, getOrder]);

  return { data, loading, error };
};

export default useYourOrder;
