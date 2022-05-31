import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

import "./PageNotFound.css";

function PageNotFound() {
  const sessionUser = useSelector((state) => state.session.user);

  let decideView;

  if (sessionUser) {
    decideView = (
      <div className="page-not-found-container">
        <div className="page-not-found-stuff">
          <div>
            <h1 className="pnf-h1">Oops!</h1>
            <p className="page-not-found">
              We can't seem to find the page you're looking for.
            </p>
            <p className="error-code-404">Error code: 404</p>
            <p>Here are some helpful links instead:</p>
            <div className="pnf-visit-these">
              <Link to="/">Find Your Next Vacation</Link>
              <Link to="/bookings">View Upcoming Trips</Link>
            </div>
          </div>
          <img
            className="img404"
            src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
            alt="404 bnb"
          />
        </div>
      </div>
    );
  } else {
    decideView = (
      <div className="page-not-found-container">
        <div className="page-not-found-stuff">
          <div>
            <h1 className="pnf-h1">FORBIDDEN</h1>
            <p className="page-not-found">
              You don't have access to view this page.
            </p>
            <p className="error-code-404">Error code: 403</p>
            <p>
              Click on the Log In or Sign Up buttons right above to access this
              page!
            </p>
            <p>Alternatively, you can go back to browsing here:</p>
            <div className="pnf-visit-these">
              <Link to="/discover-page">Click Here To Continue Browsing</Link>
            </div>
          </div>
          <img
            className="img404"
            src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
            alt="404 bnb"
          />
        </div>
      </div>
    );
  }

  return <div>{decideView}</div>;
}

export default PageNotFound;
