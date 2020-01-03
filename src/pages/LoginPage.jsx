import React, { Component } from 'react'
import ButtonAction from '../components/ButtonAction'

class Login extends Component {
  render() {
    return (
      <div className='hold-transition login-page'>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Guru</b>Ahli</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className='col-4'>
                  <ButtonAction title='Submit' class='btn btn-block btn-primary' url='/'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login