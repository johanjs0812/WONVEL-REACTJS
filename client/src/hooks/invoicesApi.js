import { useState } from 'react';
import axios from 'axios';
import { INVOICES_ADD } from '../constants/apiConfig';

const useInvoices = () => {
  const [loading, setLoading] = useState(false);
  const [errInvoices, setInverr] = useState(null);

  const add = async (data) => {
    setLoading(true);
    setInverr(null);

    try {
      const response = await axios.post(INVOICES_ADD, data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setInverr('Đã xảy ra lỗi khi thêm hóa đơn');
      setLoading(false);
      throw err;
    }
  };

  return { add, loading, errInvoices };
};

export default useInvoices;
