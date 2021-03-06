/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
class JobPost1 extends React.Component {
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
            <h3 class="color-white text-center ">For Employers</h3>
            <p class="text-center ">
              <a href="#" class="link-white">
                Contact Sales &raquo;
              </a>
            </p>
            <div class="white-space-40"></div>
          </div>
        </Header>

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          {/*<!-- pricing 3 cols -->*/}
          <div class="block-section bg-color1 line-bottom">
            <div class="container ">
              {/*<!-- text centered -->*/}
              <div class="text-center">
                <strong class="text-uppercase">select your plan</strong>
                <h2>Plan pricing three columns no space.</h2>
                <div class="white-space-30"></div>
              </div>
              {/*<!-- text centered -->*/}

              <div class="row plan-nospace">
                <div class=" col-md-4 plan-item">
                  {/*<!-- plan box -->*/}
                  <div class="plan">
                    <div class="plan-title">
                      <h3>1 Job Posting</h3>
                    </div>

                    <div class="plan-price">
                      <span class="price ">$25</span>
                    </div>

                    <div class="plan-list">
                      <ul class="item-list list-unstyled">
                        <li>
                          <strong>1</strong> Credit
                        </li>
                        <li>
                          <strong>1 Year</strong> Credit Expires
                        </li>
                        <li>
                          <strong>Unable</strong> Search Resume
                        </li>
                      </ul>
                      <button
                        type="button"
                        class="btn btn-t-primary btn-theme btn-lg btn-square btn-block"
                      >
                        {" "}
                        Purchase
                      </button>
                    </div>
                  </div>
                  {/*<!-- plan box -->*/}
                </div>

                <div class=" col-md-4 plan-item">
                  {/*<!-- plan box -->*/}
                  <div class="plan popular">
                    <div class="plan-title">
                      <h3>5 Job Postings</h3>
                    </div>

                    <div class="plan-price">
                      <span class="price ">$35</span>
                    </div>

                    <div class="plan-list">
                      <ul class="item-list list-unstyled">
                        <li>
                          <strong>5</strong> Credits
                        </li>
                        <li>
                          <strong>1 Year</strong> Credit Expires
                        </li>
                        <li>
                          <strong>Enable</strong> Search Resume
                        </li>
                      </ul>
                      <button
                        type="button"
                        class="btn btn-t-primary btn-theme btn-lg btn-square btn-block"
                      >
                        {" "}
                        Purchase
                      </button>
                    </div>
                  </div>
                  {/*<!-- end plan box -->*/}
                </div>

                <div class=" col-md-4 plan-item">
                  {/*<!-- plan box -->*/}
                  <div class="plan">
                    <div class="plan-title">
                      <h3>20 Job Postings</h3>
                    </div>

                    <div class="plan-price">
                      <span class="price ">$45</span>
                    </div>

                    <div class="plan-list">
                      <ul class="item-list list-unstyled">
                        <li>
                          <strong>20</strong> Credits
                        </li>
                        <li>
                          <strong>1 Year</strong> Credit Expires
                        </li>
                        <li>
                          <strong>Enable</strong> Search Resume
                        </li>
                      </ul>
                      <button
                        type="button"
                        class="btn btn-t-primary btn-theme btn-lg btn-square btn-block"
                      >
                        {" "}
                        Purchase
                      </button>
                    </div>
                  </div>
                  {/*<!-- end plan box -->*/}
                </div>
              </div>

              <p class="text-center">
                <span class="span-line">Learn More</span>
              </p>
            </div>
          </div>
          {/*<!-- end pricing 3 cols -->*/}
          {/*<!-- block promo -->*/}
          <div class="block-section bg-color2 line-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-6 text-center-sm">
                  <h2>Đăng Job</h2>
                  <p>
                    Post your jobs directly to JobPlanet in minutes. You'll get
                    quality applicants sent directly to your inbox, no website
                    required.
                  </p>
                  <p>
                    <a
                      href="job_post_2.html"
                      class=" btn btn-theme btn-t-primary"
                    >
                      Post On JobPlanet
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Learn more about posting your jobs on JobPlanet
                    </a>
                  </p>
                </div>
                <div class="col-md-6 text-center hidden-sm hidden-xs">
                  <img src="./assets/theme/images/mac1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/*<!-- end block promo -->*/}
          {/*<!-- block promo -->*/}
          <div class="block-section bg-color1 line-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-6 text-center hidden-sm hidden-xs">
                  {" "}
                  <img src="./assets/theme/images/mac.png" alt="" />
                </div>
                <div class="col-md-6 text-center-sm">
                  <h2>Chi tiết Công ty</h2>
                  <p>
                    Post your jobs directly to JobPlanet in minutes. You'll get
                    quality applicants sent directly to your inbox, no website
                    required.
                  </p>
                  <p>
                    <a
                      href="company_page.html"
                      class=" btn btn-theme btn-t-primary"
                    >
                      Learn more about company pages
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*<!-- end block promo -->*/}
          {/*<!-- block promo -->*/}
          <div class="block-section bg-color2 line-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-6 text-center-sm">
                  <h2>Resume Search</h2>
                  <p>
                    Post your jobs directly to JobPlanet in minutes. You'll get
                    quality applicants sent directly to your inbox, no website
                    required.
                  </p>
                  <p>
                    <a
                      href="resume_list.html"
                      class=" btn btn-theme btn-t-primary"
                    >
                      Tìm kiếm hồ sơ ứng tuyển
                    </a>
                  </p>
                  <p>
                    <a href="#">Learn more about JobPlanet Resume</a>
                  </p>
                </div>
                <div class="col-md-6 text-center hidden-sm hidden-xs">
                  <img src="./assets/theme/images/mac2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/*<!-- end block promo -->*/}
          {/*<!-- block bottom -->*/}
          <div class="block-section bg-color1">
            <div class="container text-center">
              <strong class="text-uppercase">support</strong>
              <h2>Any questions?</h2>
              <div class="white-space-20"></div>
              <a href="#" class="btn btn-t-primary  btn-theme">
                Contact Us
              </a>
            </div>
          </div>
          {/*<!-- end block bottom -->*/}
        </div>
        {/*<!--end body-content -->*/}
        <Footer />
      </div>
    );
  }
}
export default JobPost1;
