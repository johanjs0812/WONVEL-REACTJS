import { useState, useCallback } from 'react';
import axios from 'axios';

const useApi = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError('Error fetching initial data');
      console.error('Error fetching initial data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const FILTER = useCallback(async (url) => {

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError('Error fetching filtered data');
      console.error('Error fetching filtered data:', error);
    } finally {
      setLoading(false);
    }

  }, []);

  const fetchDataById = useCallback(async (url) => {
    setLoading(true);
    setError(null);
    console.log('ko?', url)

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError('Error fetching initial data');
      console.error('Error fetching initial data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData, FILTER, fetchDataById };
};

export default useApi;
