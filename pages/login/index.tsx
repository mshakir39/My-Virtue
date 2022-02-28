import React from 'react';
import Img from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useForm, NestedValue } from 'react-hook-form';

function index() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(data => {
    axios
      .post('/api/auth/login', data)
      .then(function (response) {
        const token = response.data.token;
        if (token) {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <section className="signup">
      <div className="">
        <div className="signup-content" style={{ display: 'flex', background: 'white', alignItems: 'center' }}>
          <div style={{ width: '50%', padding: '100px' }}>
            <h2 className="form-title">Sign in</h2>
            <form onSubmit={onSubmit} className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input type="email" id="email" {...register('userName')} placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input type="password" {...register('password')} id="pass" placeholder="Password" required />
              </div>

              <div className="form-group">
                <a href="#" className="term-service">
                  Don't have an account ?{' '}
                  <span style={{ color: '#6c63ff' }}>
                    <Link href="/register">Click Here</Link>
                  </span>
                </a>
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" value="Sign In" />
              </div>
            </form>
          </div>
          <div style={{ width: '50%' }}>
            <figure>
              <img src="Home/goLogin.svg" alt="sing up image" style={{ width: '400px', height: '400px' }} />
            </figure>
            {/* <a href="#" className="signup-image-link">
              I am already member
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
