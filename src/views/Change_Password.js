/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header1 from "../components/HeaderWithIconPerson";
class ChangePassword extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header1>
          <div class="container">
            <div class="text-center logo">
              <a href="index.html">
                <img src="assets/theme/images/logo.png" alt="" />
              </a>
            </div>
          </div>
        </Header1>

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="bg-color2">
            <div class="container">
              <div class="col-md-3 col-sm-3">
                <div class="block-section text-center ">
                  <img
                    src="./assets/theme/images/people/4.jpg"
                    class="img-rounded"
                    alt=""
                  />
                  <div class="white-space-20"></div>
                  <h4>Jhone Doe</h4>
                  <div class="white-space-20"></div>
                  <ul class="list-unstyled">
                    <li>
                      <a href="my_alerts.html"> My Alerts </a>
                    </li>
                    <li>
                      <a href="my_notifications.html"> Notifications (5)</a>
                    </li>
                    <li>
                      <a href="change_password.html"> Change Password</a>
                    </li>
                  </ul>
                  <div class="white-space-20"></div>
                  <a
                    href="#"
                    class="btn  btn-line soft btn-theme btn-pill btn-block"
                  >
                    Đăng Job
                  </a>
                  <a
                    href="#"
                    class="btn  btn-line soft  btn-theme btn-pill btn-block"
                  >
                    Build Resume
                  </a>
                </div>{" "}
              </div>
              <div class="col-md-9 col-sm-9">
                {/*<!-- Block side right -->*/}
                <div class="block-section box-side-account">
                  <h3 class="no-margin-top">Change Password</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-7">
                      <form>
                        <div class="form-group">
                          <label>Old Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>New Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Re-type New Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn btn-theme btn-t-primary"
                          >
                            Change Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*<!-- end Block side right -->*/}
              </div>
            </div>
          </div>
        </div>
        {/*<!--end body-content -->*/}
        <Footer />
      </div>
    );
  }
}
export default ChangePassword;
