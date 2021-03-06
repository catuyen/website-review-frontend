/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import apiMethods from "../http-client/api-methods";
const JobList = ({ disabled = false }) => {

  const [data, setData] = useState([]);

  const _getAllJobs = async () => {
    await apiMethods.application.getAllJobs()
      .then(result => result?.data?.result)
      .then(result => {
        setData(result);
      })
      .catch(error => console.log(error.response));
  }

  useEffect(() => {
    _getAllJobs();
  }, []);

  return (
    <div class="wrapper">
      {!disabled ? <Header
        searchbox={
          //   <!-- form search area-->
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                {/* <!-- logo --> */}
                <div class="logo text-center-sm">
                  {" "}
                  <a href="index.html">
                    <img src="assets/theme/images/logo.png" alt="" />
                  </a>
                </div>
              </div>

              <div class="col-md-8">
                {/* <!-- form search --> */}
                <form class="form-search-list">
                  <div class="row">
                    <div class="col-sm-5 col-xs-6 ">
                      <div class="form-group">
                        <label class="color-white">What</label>
                        <input
                          class="form-control"
                          placeholder="job title, keywords or company name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-6 ">
                      <div class="form-group">
                        <label class="color-white">Where</label>
                        <input
                          class="form-control"
                          placeholder="city, province, or region"
                        />
                      </div>
                    </div>
                    <div class="col-sm-2 col-xs-12 ">
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
                {/* <!-- form search --> */}
              </div>
            </div>

            {/* <!-- modal Advance/d search --> */}
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
                        Advanced Job Search
                      </h4>
                    </div>
                    <div class="modal-body">
                      <h5>Find Jobs</h5>
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
                              class="form-control"
                              name="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Show jobs of type</label>
                        <select class="form-control">
                          <option value="all">All job types</option>
                          <option value="fulltime">Full-time</option>
                          <option value="parttime">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="internship">Internship</option>
                          <option value="temporary">Temporary</option>
                        </select>
                      </div>
                      <div class="white-space-10"></div>
                      <h5>Where and When</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Radius </label>
                            <select id="radius" class="form-control">
                              <option value="0">only in</option>
                              <option value="5">within 5 kilometers </option>
                              <option value="10">
                                within 10 kilometers{" "}
                              </option>
                              <option value="15">
                                within 15 kilometers{" "}
                              </option>
                              <option selected="" value="25">
                                within 25 kilometers{" "}
                              </option>
                              <option value="50">
                                within 50 kilometers{" "}
                              </option>
                              <option value="100">
                                within 100 kilometers{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Of </label>
                            <input
                              type="text"
                              class="form-control"
                              maxlength="250"
                              value="United States"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Age - Jobs published </label>
                            <select class="form-control">
                              <option value="any">anytime</option>
                              <option value="15">within 15 days</option>
                              <option value="7">within 7 days</option>
                              <option value="3">within 3 days</option>
                              <option value="1">since yesterday</option>
                              <option value="last">
                                since my last visit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Display</label>
                            <select class="form-control">
                              <option selected="" value="10">
                                10
                              </option>
                              <option value="20">20</option>
                              <option value="30">30</option>
                              <option value="50">50</option>
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
                        Find Jobs
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- end modal forgot password --> */}
          </div>
        }
      ></Header> : <div />}
      {/*<!-- body-content -->*/}
      <div class="body-content clearfix">
        <div>
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                {/* <!-- box listing --> */}
                <div class="block-section-sm box-list-area">
                  {/* <!-- desc top --> */}
                  <div class="row hidden-xs">
                    <div class="col-sm-6  ">
                      <p>
                        <strong class="color-black">
                          Top Jobs
                        </strong>
                      </p>
                    </div>
                    <div class="col-sm-6">
                      {!disabled ? <p class="text-right">Jobs 1 to 10 of 578</p> : <div />}
                    </div>
                  </div>
                  {/* <!-- end desc top --> */}

                  {/* <!-- item list -->   */}
                  <div class="box-list">
                    {/* <!-- item list --> */}
                    {data.length && data.map((item, index) => {
                      return (
                        <div class="item">
                          <div class="row">
                            <div class="col-md-1 hidden-sm hidden-xs">
                              <div class="img-item">
                                <img
                                  src={`./assets/theme/images/company-logo/${index % 5 + 1}.jpg`}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="col-md-11">
                              <h3 class="no-margin-top">
                                <Link to={`/job-details/${item._id}`}>
                                  {item.name}{" "}
                                  <i class="fa fa-link color-white-mute font-1x"></i>
                                </Link>
                              </h3>
                              <h5>
                                <span class="color-black">{item.salary} </span>
                                <span class="rate">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-half-o"></i>
                                </span>
                                <a href="#">{item.rating} Reviews</a>-{" "}
                                <span class="color-white-mute">
                                  {" "}
                                  {item.address}
                                </span>
                              </h5>
                              <p class="text-truncate ">
                                SQL and PHP. Experience with PHP Storm IDE
                                preferred. Our client is growing their team and is
                                in immediate need of a PHP Developer.
                          </p>
                              <div>
                                <span class="color-white-mute">{item.dueDate}</span> -
                            <a
                                  href="#need-login"
                                  data-toggle="modal"
                                  class="btn btn-xs btn-theme btn-default"
                                >
                                  save job
                            </a>{" "}
                            -
                            <a
                                  href="#modal-email"
                                  data-toggle="modal"
                                  class="btn btn-theme btn-xs btn-default"
                                >
                                  email
                            </a>{" "}
                            -
                            <a
                                  href="#"
                                  class="btn btn-theme btn-xs btn-default"
                                >
                                  more ...
                            </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    {/* <!-- end item list --> */}
                  </div>

                  {/* <!-- form get alert --> */}
                  <div class="get_alert">
                    <h4>
                      Nhận cập nhật qua email về{" "}
                      <span class=" ">các công việc mới nhất</span>
                    </h4>
                    <form>
                      <div class="row">
                        <div class="col-md-9">
                          <div class="form-group">
                            <label>Email của tôi</label>
                            <input
                              class="form-control"
                              placeholder="Nhập Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label class="hidden-sm hidden-xs ">&nbsp;</label>
                            <button class="btn btn-theme btn-success btn-block">
                              Gửi
                            </button>
                          </div>
                        </div>
                      </div>
                      <small>Bạn có thể huỷ thông báo qua email bất cứ lúc nào.</small>
                    </form>
                  </div>
                  {/* <!-- end form get alert --> */}

                  {/* <!-- pagination --> */}
                  <nav>
                    <ul class="pagination pagination-theme  no-margin">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&larr;</span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <span>...</span>
                      </li>
                      <li>
                        <a href="#">50</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- pagination --> */}
                </div>
                {/* <!-- end box listing --> */}
              </div>
              <div class="col-md-3">
                <div class="block-section-sm side-right">
                  <div class="row">
                    <div class="col-xs-6">
                      <p>
                        <strong>Sort by: </strong>
                      </p>
                    </div>
                    <div class="col-xs-6">
                      <p class="text-right">
                        <strong>Relevance</strong> -{" "}
                        <a href="#" class="link-black">
                          <strong>Date</strong>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="result-filter">
                    <h5 class="no-margin-top font-bold margin-b-20 ">
                      <a href="#s_collapse_1" data-toggle="collapse">
                        Salary Estimate{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>{" "}
                      </a>
                    </h5>
                    <div class="collapse in" id="s_collapse_1">
                      <div class="list-area">
                        <ul class="list-unstyled">
                          <li>
                            <a href="#">$50,000+</a> (16947)
                          </li>
                          <li>
                            <a href="#">$70,000+</a> (13915)
                          </li>
                          <li>
                            <a href="#">$90,000+</a> (9398)
                          </li>
                          <li>
                            <a href="#">$110,000+</a> (4112)
                          </li>
                          <li>
                            <a href="#">$130,000+</a> (1864)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a href="#s_collapse_5" data-toggle="collapse">
                        Job Type{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_5">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">Full-time </a> (558)
                          </li>
                          <li>
                            <a href="#">Part-time </a> (438)
                          </li>
                          <li>
                            <a href="#">Contract </a> (313)
                          </li>
                          <li>
                            <a href="#">Internship</a> (169)
                          </li>
                          <li>
                            <a href="#">Temporary </a> (156)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a href="#s_collapse_2" data-toggle="collapse">
                        Title{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_2">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">web developer</a> (558)
                          </li>
                          <li>
                            <a href="#">PHP Developer</a> (438)
                          </li>
                          <li>
                            <a href="#">Software Engineer </a> (313)
                          </li>
                          <li>
                            <a href="#">Senior Software Engineer </a> (169)
                          </li>
                          <li>
                            <a href="#">Front End Developer </a> (156)
                          </li>
                          <li>
                            <a href="#">More ... </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a href="#s_collapse_3" data-toggle="collapse">
                        Company{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_3">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">Unlisted Company</a> (558)
                          </li>
                          <li>
                            <a href="#">CyberCoders</a> (438)
                          </li>
                          <li>
                            <a href="#">Smith & Keller </a> (313)
                          </li>
                          <li>
                            <a href="#">Robert Half Technology </a> (169)
                          </li>
                          <li>
                            <a href="#">Jobspring Partners </a> (156)
                          </li>
                          <li>
                            <a href="#">More ... </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a
                        href="#s_collapse_4"
                        data-toggle="collapse"
                        class="collapsed"
                      >
                        Location{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>{" "}
                      </a>
                    </h5>
                    <div class="collapse" id="s_collapse_4">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">New York, NY </a> (558)
                          </li>
                          <li>
                            <a href="#">San Francisco, CA </a> (438)
                          </li>
                          <li>
                            <a href="#">Washington, DC </a> (313)
                          </li>
                          <li>
                            <a href="#">Chicago, IL</a> (169)
                          </li>
                          <li>
                            <a href="#">Austin, TX </a> (156)
                          </li>
                          <li>
                            <a href="#">More ... </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- modal need login --> */}
        <div class="modal fade" id="need-login">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header text-center">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">You must login to save jobs</h4>
              </div>
              <div class="modal-footer text-center">
                <a href="#" class="btn btn-default btn-theme">
                  Login
                </a>
                <a href="#" class="btn btn-success btn-theme">
                  Create account (it's free)
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end modal  need login --> */}

        {/* <!-- modal need login --> */}
        <div class="modal fade" id="modal-email">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <form>
                <div class="modal-header ">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">
                    Send this job to yourself or a friend:
                  </h4>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label>From my email address</label>
                    <input
                      type="email"
                      class="form-control "
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="form-group">
                    <label>To email address</label>
                    <input
                      type="email"
                      class="form-control "
                      placeholder="Enter Email"
                    />
                  </div>

                  <div class="form-group">
                    <label>Comment (optional)</label>
                    <textarea
                      class="form-control"
                      rows="6"
                      placeholder="Something Comment"
                    ></textarea>
                  </div>
                  <div class="checkbox flat-checkbox">
                    <label>
                      <input type="checkbox" />
                      <span class="fa fa-check"></span>
                      Send a copy to my email address?
                    </label>
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
        {/* <!-- end modal  need login -->         */}
      </div>{" "}
      {/*<!--end body-content -->*/}
      {!disabled ? <Footer></Footer> : <div />}
    </div>
  );
}
export default JobList;
