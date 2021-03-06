/* eslint-disable react/style-prop-object */
import React, { Component } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
class Login extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header></Header>

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="block-section bg-color4">
            <div class="container">
              <div class="panel panel-md">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-12">
                      {/* <!-- buttons top --> */}
                      <p>
                        <a href="#" class="btn btn-primary btn-theme btn-block">
                          <i class="fa fa-facebook pull-left bordered-right"></i>{" "}
                          Register with Facebook
                        </a>
                      </p>
                      <p>
                        <a href="#" class="btn btn-danger btn-theme btn-block">
                          <i class="fa fa-google-plus pull-left bordered-right"></i>{" "}
                          Register with Google
                        </a>
                      </p>
                      {/* <!-- end buttons top --> */}

                      <div class="white-space-10"></div>
                      <p class="text-center">
                        <span class="span-line">OR</span>
                      </p>

                      {/* <!-- form login --> */}
                      <form>
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                        <div class="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Your Password"
                          />
                        </div>
                        <div class="form-group">
                          <label>Re-type Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Re-type Your Password"
                          />
                        </div>
                        <div class="white-space-10"></div>
                        <div class="form-group no-margin">
                          <button class="btn btn-theme btn-lg btn-t-primary btn-block">
                            Register
                          </button>
                        </div>
                      </form>

                      {/* <!-- form login --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div class="white-space-20"></div>
              <div class="text-center color-white">
                By creating an account, you agree to JobPlanet <br />
                <a href="#" class="link-white">
                  <strong>Terms of Service</strong>
                </a>{" "}
                and consent to our{" "}
                <a href="#" class="link-white">
                  <strong>Privacy Policy</strong>
                </a>
                .
              </div>
            </div>
          </div>

          <div class="block-section bg-color2">
            <div class="container text-center">
              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <i class="fa fa-question fa-5x box-icon"></i>
                  <h2 class=""> Why create an account?</h2>
                  <hr />
                  <p>
                    <i class="fa fa-check"></i> Manage, create and delete your
                    job alerts
                  </p>
                  <p>
                    <i class="fa fa-check"></i> Access your saved jobs and notes
                    from any computer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!--end body-content -->*/}

        <Footer></Footer>
      </div>
    );
  }
}
export default Login;
