import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';

// import { GlobalStyle } from '@loadsy/shared-ui-components/styles/global.styles';
import Login from './routes/Login/login';
import App from './app';

ReactDOM.render(
  <StrictMode>
    <Routes>
      {/* <Route path="/email-validation" component={EmailValidation} /> */}
      {/* <Route path="/login" element={Login} /> */}
      {/* {!isAuth && <Redirect to="/auth/login" />} */}
      {/* {isAuth && <Route path="/" component={Dashboard} />}
      {isAuth && <Redirect to={lastLocation || `/dashboard/projects`} />} */}
    </Routes>
    {/* <App /> */}
  </StrictMode>,
  document.getElementById('root')
);
