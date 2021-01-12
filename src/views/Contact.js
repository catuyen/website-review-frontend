/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
class Contact extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header>
          {" "}
          <div class="container">
            <div class="text-center logo no-margin-bottom">
              {" "}
              <a href="index.html">
                <img src="assets/theme/images/logo.png" alt="" />
              </a>
            </div>
            <h3 class="color-white text-center ">Contact Us</h3>
            <div class="white-space-50"></div>
          </div>
        </Header>
        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="bg-color1 block-section line-bottom">
            <div class="container">
              <h2 class="text-center">
                We're here to help in any way we can.
                <br />
                <small>
                  {" "}
                  Please submit your request below and we'll get back to you
                  shortly.
                </small>
              </h2>
              <div class="white-space-20"></div>
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  {/*<!-- form contact -->*/}
                  <form>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value="your@email.com"
                        readonly="readonly"
                      />
                    </div>
                    <div class="form-group">
                      <label>Subject</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Message</label>
                      <textarea class="form-control" rows="6"></textarea>
                    </div>
                    <div class="form-group text-center">
                      <div class="white-space-10"></div>
                      <button
                        type="submit"
                        class="btn btn-theme btn-lg btn-long btn-t-primary btn-pill"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                  {/*<!-- end form contact -->*/}
                  <div class="white-space-10"></div>
                  <p class="text-center">
                    <span class="span-line">OR</span>
                  </p>
                  {/*<!-- box with icon -->*/}
                  <div class="row">
                    <div class="col-md-6">
                      <div class="box-ic-center ">
                        <i class="fa fa-phone ic-box"></i>
                        <h4>Phone</h4>
                        <p>+(62) 1234-123-21</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="box-ic-center ">
                        <i class="fa fa-skype ic-box"></i>
                        <h4>Skype</h4>
                        <p>your.username</p>
                      </div>
                    </div>
                  </div>{" "}
                  {/*<!-- end box with icon -->*/}
                </div>
              </div>
            </div>
          </div>
          {/*<!-- link map toogle -->*/}
          <div class="bg-color2 block-section-xs line-bottom">
            <div class="container text-center">
              <a href="#map-toogle" id="btn-map-toogle" data-toggle="collapse">
                Check Our Office
              </a>
            </div>
          </div>{" "}
          {/*<!-- end link map toogle -->*/}
          {/*<!-- block map -->*/}
          <div class="collapse" id="map-toogle">
            <div class=" bg-color2" id="map-area">
              <div class="container">
                {/*<!-- map description -->*/}
                <div class="marker-description">
                  <div class="inner">
                    <h4 class="no-margin-top">Office Location</h4>
                    Central Jakarta No 1234, Jakarta, Indonesia
                  </div>
                </div>
                {/*<!-- end map description -->*/}
              </div>
              <div class="map-area-detail">
                {/*<!-- change the data lat and lang here -->*/}
                <div
                  class="box-map-detail"
                  id="map-detail-job"
                  data-lat="48.856318"
                  data-lng="2.351866"
                ></div>
              </div>
            </div>
          </div>
          {/*<!-- end block map -->*/}
        </div>
        {/*<!--end body-content -->*/}

        <Footer />
      </div>
    );
  }
}
export default Contact;
