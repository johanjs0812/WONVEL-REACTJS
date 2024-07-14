import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../redux/slices/authSlice';

const useClearErrorsOnNavigation = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearErrors());
    }, [location, dispatch]);
};

export default useClearErrorsOnNavigation;
