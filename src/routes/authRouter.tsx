import { Routes, Route } from 'react-router-dom';
import Login from './Login/login';
// import Signup from './signup';
// import ForgotPassword from './forgot-password';
// import ResetPassword from './reset-password';

function authRouter() {
  return (
    <Routes>
      <Route path="/login" element={Login} />
    </Routes>
  );
}

export default authRouter;
