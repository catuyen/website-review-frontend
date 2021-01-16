import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import JobList from "./views/Job-List";
import JobDetails from "./views/Job_Details";
import JobPost1 from "./views/Job_Post_1";
import JobPost2 from "./views/Job_Post_2";
import MyAlert from "./views/My_Alert";
import MyNotifications from "./views/My_Notifications";
import ResumeDetails from "./views/Resume_Details";
import ResumeList from "./views/Resume_List";
import Shortcode from "./views/Shortcode";
import TermsPrivacy from "./views/Terms_Privacy";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogSinglePost from "./views/Blog_Single_Post";
import ChangePassword from "./views/Change_Password";
import CompanyPage from "./views/Company_Page";
import Contact from "./views/Contact";
import Error from "./views/Error_404";
import EmployeeProfile from "./views/Employee/Employee_Profile";
import EmployeeFollowing from "./views/Employee/Employee_Following";
import EmployeeChangePassword from "./views/Employee/Employee_Change_Password";
import EmployeeResume from "./views/Employee/Employee_Resume";
import EmployeeReviews from "./views/Employee/Employee_Reviews";
import ClientHome from "./views/ClientHome";
// Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    "fontSize": 18,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
        {/* <Router history={appHistory} routes={Routes} /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={ClientHome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/job-list" component={JobList} />
            <Route exact path="/job-details" component={JobDetails} />
            <Route exact path="/job-post-1" component={JobPost1} />
            <Route exact path="/job-post-2" component={JobPost2} />
            <Route exact path="/my-alerts" component={MyAlert} />
            <Route exact path="/my-notifications" component={MyNotifications} />
            <Route exact path="/resume-details" component={ResumeDetails} />
            <Route exact path="/resume-list" component={ResumeList} />
            <Route exact path="/shortcode" component={Shortcode} />
            <Route exact path="/terms-privacy" component={TermsPrivacy} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-single-post" component={BlogSinglePost} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/company-page" component={CompanyPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/error-404" component={Error} />
            <Route exact path="/employee-profile" component={EmployeeProfile} />
            <Route exact path="/employee-following" component={EmployeeFollowing} />
            <Route exact path="/client" component={ClientHome} />
            <Route
              exact
              path="/employee-change-password"
              component={EmployeeChangePassword}
            />
            <Route exact path="/employee-resume" component={EmployeeResume} />
            <Route exact path="/employee-reviews" component={ClientHome} />
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
