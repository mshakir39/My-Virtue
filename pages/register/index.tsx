import React from 'react';
import Img from 'next/image';
import Link from 'next/link';
function index() {
  return (
    <section className="signup">
      <div className="">
        <div className="signup-content" style={{ display: 'flex', background: 'white', alignItems: 'center' }}>
          <div style={{ width: '50%', padding: '100px' }}>
            <h2 className="form-title">Sign up</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input type="email" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input type="password" name="pass" id="pass" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
              </div>
              <div className="form-group">
                <a href="#" className="term-service">
                  I already have an account ? {''}
                  <span style={{ color: '#6c63ff' }}>
                    <Link href="/login">Click Here</Link>
                  </span>
                </a>
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
              </div>
            </form>
          </div>
          <div style={{ width: '50%' }}>
            <figure>
              <img src="Home/goRegister.svg" alt="sing up image" style={{ width: '400px', height: '400px' }} />
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
