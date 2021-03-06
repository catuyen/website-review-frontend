/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
class Login_Admin extends React.Component {
  render() {
    return (
      <div class="wrapper">
        

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="block-section bg-color4">
            <div class="container">
              <div class="panel panel-md">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-12">
                      {/*<!-- buttons top -->*/}
                      <p>
                        <a href="#" class="btn btn-primary btn-theme btn-block">
                          <i class="fa fa-facebook pull-left bordered-right"></i>{" "}
                          Login with Facebook
                        </a>
                      </p>
                      <p>
                        <a href="#" class="btn btn-danger btn-theme btn-block">
                          <i class="fa fa-google-plus pull-left bordered-right"></i>{" "}
                          Login with Google
                        </a>
                      </p>
                      {/*<!-- end buttons top -->*/}

                      <div class="white-space-10"></div>
                      <p class="text-center">
                        <span class="span-line">OR</span>
                      </p>

                      {/*<!-- form login -->*/}
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
                          <div class="row">
                            <div class="col-xs-6">
                              <div class="checkbox flat-checkbox">
                                <label>
                                  <input type="checkbox" />
                                  <span class="fa fa-check"></span>
                                  Remember me?
                                </label>
                              </div>
                            </div>
                            <div class="col-xs-6 text-right">
                              <p class="help-block">
                                <a href="#myModal" data-toggle="modal">
                                  Forgot password?
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="form-group no-margin">
                          <button class="btn btn-theme btn-lg btn-t-primary btn-block">
                            Log In
                          </button>
                        </div>
                      </form>
                      {/*<!-- form login -->*/}
                    </div>
                  </div>
                </div>
              </div>

              <div class="white-space-10"></div>
            </div>
          </div>


          {/*<!-- modal forgot password -->*/}
          <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Forgot Password</h4>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Enter Your Email</label>
                      <input
                        type="email"
                        class="form-control "
                        name="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default btn-theme"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-success btn-theme">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*<!-- end modal forgot password -->*/}
        </div>
        {/*<!--end body-content -->*/}

      </div>
    );
  }
}
export default Login_Admin;
