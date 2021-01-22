/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header1 from "../components/HeaderWithIconPerson";
import apiMethods from "../http-client/api-methods";


const Company_List = () => {

  const [ data, setData ] = useState([]);

  const _getAllCompanies = async () => {
    await apiMethods.application.getAllCompanies()
      .then(result => result?.data)
      .then(result => {
        setData(result.listCompany);
        console.log(result.listCompany);
      })
      .catch(error => console.log(error.response));
  }

  useEffect(() => {
    _getAllCompanies();
  }, []);
  
  const SearchComponent = () => (<div>
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
                <h5>Find resumes with</h5>
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
                  Find Resumes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*<!-- end modal Advanced search -->*/}
    </div>
  </div>);

  return (
    <div class="wrapper">
      <Header>
        <SearchComponent />
      </Header>
      {/*<!-- body-content -->*/}
      <div class="body-content clearfix">
        <div class="bg-color2">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                {/*<!-- box listing  -->*/}
                <div class="block-section-sm box-list-area">
                  {/*<!-- top desc -->*/}
                  <div class="row hidden-xs">
                    <div class="col-sm-6 ">
                      <p>
                        <strong class="color-black">
                          All companies in United States
                        </strong>
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <p class="text-right">Companies 1 to 10 of {data?.length}</p>
                    </div>
                  </div>
                  {/*<!-- end top desc -->*/}

                  {/*<!-- listing -->*/}
                  <div class="box-list">
                    {
                      data.map((item, index) => {
                        return (
                          <div class="item">
                      <div class="row">
                        <div class="col-md-1 hidden-sm hidden-xs">
                          <div class="img-item">
                            <img
                              src="./assets/theme/images/people/1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-md-11">
                          <h3 class="no-margin-top">
                            <Link to={`/company-page/${item.id}`}>
                                {item.name}{" "}
                                <i class="fa fa-link color-white-mute font-1x"></i>
                            </Link>
                          </h3>
                          <h5>
                            <span class="color-black">{item.address}</span>
                          </h5>
                          <p>
                            Uploaded by -{" "}
                            <span class="color-white-mute">
                              {item.username}{" "}
                            </span>{" "}
                            <br />
                            Email: -{" "}
                            <span class="color-white-mute">
                              {item.email}
                            </span>
                            <br />
                            {item.description}
                          </p>
                          <div>
                            <a
                              href="#"
                              class="btn btn-xs btn-theme btn-default"
                            >
                              save company
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                        )
                      })
                    }
                  </div>
                  {/*<!-- end  listing -->*/}

                  {/*<!-- form get alert  -->*/}
                  <div class="get_alert">
                    <h4>Get new resumes for this search by email</h4>
                    <form>
                      <div class="row">
                        <div class="col-md-9">
                          <div class="form-group">
                            <label>My Email</label>
                            <input
                              class="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label class="hidden-sm hidden-xs ">&nbsp;</label>
                            <button class="btn btn-theme btn-success btn-block">
                              Activate
                            </button>
                          </div>
                        </div>
                      </div>
                      <small>You can cancel email alerts at any time.</small>
                    </form>
                  </div>
                  {/*<!-- end form get alert  -->*/}

                  {/*<!-- pagination -->*/}
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
                  {/*<!-- pagination -->*/}
                </div>
                {/*<!-- end  box listing  -->*/}
              </div>
              <div class="col-md-3">
                <div class="block-section-sm side-right">
                  {/*<!-- filter   -->*/}
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

                  {/*<!-- filter   -->*/}
                  <div class="result-filter">
                    <h5 class="no-margin-top font-bold margin-b-20 ">
                      <a href="#s_collapse_1" data-toggle="collapse">
                        Education{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_1">
                      <div class="list-area">
                        <ul class="list-unstyled">
                          <li>
                            <a href="#">Doctorate</a> (16947)
                          </li>
                          <li>
                            <a href="#">Masters</a> (13915)
                          </li>
                          <li>
                            <a href="#">Bachelors</a> (9398)
                          </li>
                          <li>
                            <a href="#">Associates</a> (4112)
                          </li>
                          <li>
                            <a href="#">Diploma</a> (1864)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a href="#s_collapse_5" data-toggle="collapse">
                        Years of work experience{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_5">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">Less than 1 year </a> (558)
                          </li>
                          <li>
                            <a href="#">1-2 years </a> (438)
                          </li>
                          <li>
                            <a href="#">3-5 years </a> (313)
                          </li>
                          <li>
                            <a href="#">6-10 years</a> (169)
                          </li>
                          <li>
                            <a href="#">More than 10 years </a> (156)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 class="font-bold  margin-b-20">
                      <a href="#s_collapse_2" data-toggle="collapse">
                        Job Titles{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>{" "}
                      </a>
                    </h5>
                    <div class="collapse in" id="s_collapse_2">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">Software Engineer</a> (558)
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
                        Companies{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>{" "}
                      </a>{" "}
                    </h5>
                    <div class="collapse in" id="s_collapse_3">
                      <div class="list-area">
                        <ul class="list-unstyled ">
                          <li>
                            <a href="#">Self Employed</a> (558)
                          </li>
                          <li>
                            <a href="#">Freelance</a> (438)
                          </li>
                          <li>
                            <a href="#">IBM </a> (313)
                          </li>
                          <li>
                            <a href="#">Bank of America </a> (169)
                          </li>
                          <li>
                            <a href="#">The University of Texas at Austin </a>{" "}
                            (156)
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
                        class="collapsed"
                        data-toggle="collapse"
                      >
                        Location{" "}
                        <i class="fa ic-arrow-toogle fa-angle-right pull-right"></i>
                      </a>{" "}
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
                  {/*<!-- end filter   -->*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- modal need login -->*/}
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
        {/*<!-- end modal  need login -->*/}

        {/*<!-- modal need login -->*/}
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
        {/*<!-- end modal  need login -->*/}
      </div>
      {/*<!--end body-content -->*/}
      <Footer />
    </div>
  );
}
export default Company_List;
