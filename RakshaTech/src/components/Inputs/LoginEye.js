import React, { useState } from "react";
import "./LoginEye.css";

function LoginEye() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="container">
      <h2>Email Password</h2>

      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="col-md-4 control-label">Email</label>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="formInput"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Password</label>
                  <div className="col-md-6 pwd_Container">
                    <input
                      id="password-field"
                      type={passwordShown ? "text" : "password"}
                      className="formInput "
                      name="password"
                      // value="secret"
                      onChange={(e)=>(e.target.value)}
                    />
                    <span
                      onClick={() => setPasswordShown(!passwordShown)}
                      className={`toggle-password fa fa-fw ${
                        passwordShown ? "fa-eye" : "fa-eye-slash"
                      } field-icon `}
                    ></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginEye;
