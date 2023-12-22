import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../components/Shared/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    // Check Loading
    if(loading){
        return <Loader/>
    }

    // Check User
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoutes;