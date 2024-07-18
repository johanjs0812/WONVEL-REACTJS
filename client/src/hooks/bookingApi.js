import { useState } from 'react';
import axios from 'axios';
import { BOOKING_ADD } from '../constants/apiConfig';

const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const book = async (data) => {
    setLoading(true);
    setBookingError(null);

    try {
      const response = await axios.post(BOOKING_ADD, data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setBookingError('Đã xảy ra lỗi khi đặt tour');
      setLoading(false);
      throw err;
    }
  };

  return { book, loading, bookingError };
};

export default useBooking;
