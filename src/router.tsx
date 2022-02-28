import { Routes, Route } from 'react-router-dom';

import authPages from './routes/index';
import Auth from './routes/authRouter';
import Login from './routes/Login/login';

// import EmailValidation from './routes/email-validation';
// import { useAuthProvider } from './providers/auth-provider';

function MainRouter() {
  //   const { isAuth, ready, lastLocation } = useAuthProvider();
  //   if (!ready) return null;
  return (
    <Routes>
      {/* <Route path="/email-validation" component={EmailValidation} /> */}
      {/* <Route path="/login" element={Login} /> */}
      {/* {!isAuth && <Redirect to="/auth/login" />} */}
      {/* {isAuth && <Route path="/" component={Dashboard} />}
      {isAuth && <Redirect to={lastLocation || `/dashboard/projects`} />} */}
    </Routes>
  );
}
export default MainRouter;
