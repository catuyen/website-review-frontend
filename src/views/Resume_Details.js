/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
class Resume_Details extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header>
          {/*<!-- form search area-->*/}
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="logo text-center-sm inline">
                  {" "}
                  <a href="index.html">
                    <img src="assets/theme/images/logo.png" alt="" />
                    <div class="label-add">Resume</div>
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                {/*<!-- form search  -->*/}
                <form class="form-search-list">
                  <div class="row">
                    <div class="col-sm-5 col-xs-6">
                      <div class="form-group">
                        <label class="color-white">What</label>
                        <input
                          class="form-control"
                          placeholder="job title, skill or company name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-6">
                      <div class="form-group">
                        <label class="color-white">Where</label>
                        <input
                          class="form-control"
                          placeholder="city, province, or region"
                        />
                      </div>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                      <div class="form-group">
                        <label class="hidden-xs">&nbsp;</label>
                        <button class="btn btn-block btn-theme  btn-success">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <p class="text-right">
                    <a
                      href="#modal-advanced"
                      data-toggle="modal"
                      class="link-white"
                    >
                      Advanced Search
                    </a>
                  </p>
                </form>
                {/*<!-- end form search  -->*/}
              </div>
            </div>

            {/*<!-- modal Advanced search -->*/}
            <div class="modal fade" id="modal-advanced">
              <div class="modal-dialog ">
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
                      <h4 class="modal-title" id="myModalLabel">
                        Advanced Resume Search
                      </h4>
                    </div>
                    <div class="modal-body">
                      <h5>Tìm kiếm hồ sơ ứng tuyểns with</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>With all of these words</label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>With the exact phrase</label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label>None of these words</label>
                        <input type="text" class="form-control " name="text" />
                      </div>
                      <div class="white-space-10"></div>
                      <h5>Work Experience</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Title of last job </label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Years of work experience </label>
                            <select class="form-control">
                              <option value="">Any amount</option>
                              <option value="1-11">Less than 1 year</option>
                              <option value="12-24">1-2 years</option>
                              <option value="25-60">3-5 years</option>
                              <option value="61-120">6-10 years</option>
                              <option value="121">More than 10 years</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="white-space-10"></div>
                      <h5>Education</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>School name</label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Degree</label>
                            <select class="form-control">
                              <option value="">Any degree</option>
                              <option value="di">Diploma</option>
                              <option value="as">Associates</option>
                              <option value="ba">Bachelors</option>
                              <option value="ms">Masters</option>
                              <option value="doc">Doctorate</option>
                            </select>
                          </div>
                        </div>
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
                        Tìm kiếm hồ sơ ứng tuyển
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*<!-- end modal Advanced search -->*/}
          </div>
          {/*<!-- end form search area-->*/}
        </Header>

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          {/*<!-- link top -->*/}
          <div class="bg-color2 block-section-xs line-bottom">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 hidden-xs">
                  <div>Resume details :</div>
                </div>
                <div class="col-sm-6">
                  <div class="text-right">
                    <a href="#">&laquo; Go back to resume listings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- end link top -->*/}

          <div class="bg-color2">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  {/*<!-- box item details -->*/}
                  <div class="block-section box-item-details">
                    <div class="resume-block">
                      <div class="img-profile">
                        <img src="./assets/theme/images/people/7.jpg" alt="" />
                      </div>
                      <div class="desc">
                        <h2>Bryon Czoch</h2>
                        <h4>PHP Developer</h4>
                        <p>Chicago, IL</p>

                        <h3 class="resume-sub-title">
                          <span>Work Experience</span>
                        </h3>

                        <h4>PHP Developer</h4>
                        <h5>
                          Barcode Giant{" "}
                          <span class="color-white-mute"> - Chicago, IL</span>
                        </h5>
                        <p class="color-white-mute">
                          March 2014 to August 2014
                        </p>
                        <h5>Responsibilities :</h5>
                        <p>
                          Magento/PHP development for a Point-of-sale equiptment
                          dealer. I worked on setting up VMware ESX sandbox
                          developer environment. I also built their quote system
                          in Magento. They have 8 other websites that sell the
                          same equipment so I also worked on keeping them up to
                          date with the main website that brings in revenue.{" "}
                        </p>
                        <h5>Skills Used :</h5>
                        <p>
                          PHP, Javascript, XML, JSON, Linux Apache Mysql and
                          Python
                        </p>

                        <h4>Programmer/Analyst II</h4>
                        <h5>University of Chicago</h5>
                        <p class="color-white-mute">March 2012 to March 2014</p>
                        <p>
                          Extending/Customizing Zend Framework 2 based library
                          search resource portal (http://myportal.domain.com)
                          <br />
                          Maintaining legacy employee travel/training
                          requisition system and division hours site
                        </p>

                        <h4>Web Developer/System Administrator</h4>
                        <h5>American Nuclear Society</h5>
                        <p class="color-white-mute">March 2011 to March 2012</p>
                        <p>
                          Programming additions to the existing Ans.org website{" "}
                        </p>
                        <ul>
                          <li>
                            Supporting/migrating Wordpress blog
                            AnsNuclearCafe.org{" "}
                          </li>
                          <li>Setup, support of Linux servers</li>
                          <li>
                            Supporting operations of the organization w/ tech
                            knowledge{" "}
                          </li>
                        </ul>

                        <h3 class="resume-sub-title">
                          <span>Education</span>
                        </h3>
                        <h4>Bachelor in Computer Science</h4>
                        <h5>
                          Telkom University{" "}
                          <span class="color-white-mute">
                            - Bloomington, IN
                          </span>
                        </h5>

                        <h3 class="resume-sub-title">
                          <span>Additional Information</span>
                        </h3>
                        <h4>SKILLS:</h4>
                        <ul>
                          <li> PHP 5, Perl and Python scripting </li>
                          <li>Java</li>
                          <li>SQL, Mysql, MongoDB </li>
                          <li>
                            Revision control/source code management using
                            Mercurial, GIT, RCS/CVS{" "}
                          </li>
                          <li>JavaScript Libraries</li>
                          <li>Apache Solr search engine </li>
                          <li>Wordpress, Drupal, Joomla, Mambo, CMS </li>
                          <li>Adobe Photoshop & GIMP </li>
                          <li>
                            {" "}
                            Working in a Linux / Unix environment (shell
                            scripting and command line utilities)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*<!-- end box item details -->*/}
                </div>
                <div class="col-md-3">
                  {/*<!-- box affix right -->*/}
                  <div class="block-section " id="affix-box">
                    <div class="text-right">
                      <p>
                        <a
                          href="#"
                          class="btn btn-theme btn-line dark btn-block-xs"
                        >
                          Save Resume
                        </a>
                      </p>
                      <p>Updated: February 16, 2015</p>
                      <p>
                        <a
                          href="#modal-apply"
                          data-toggle="modal"
                          class="btn btn-theme btn-t-primary btn-block-xs"
                        >
                          Forward by Email
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          class="btn btn-theme btn-t-primary btn-block-xs"
                        >
                          Contact Bryon
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          class="btn btn-theme btn-t-primary btn-block-xs"
                        >
                          Download This Resume
                        </a>
                      </p>
                      <p>
                        Share This Resume <span class="space-inline-10"></span>{" "}
                        :
                      </p>
                      <p class="share-btns">
                        <a href="#" class="btn btn-primary">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-info">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="btn btn-danger">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="fa fa-pinterest"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*<!-- box affix right -->*/}
                </div>
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
export default Resume_Details;
