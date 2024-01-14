import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img src="" alt="not found" className="not-found-image" />
    <h1 className="page-not-found-heading">Page Not Found</h1>
    <p className="not-found-text">
      We are sorry, the page you requested could not be found.
    </p>
    <p className="not-found-text">Please go back to the home page</p>
    <Link to="/">
      <button type="button" className="home-page-redirection-button">
        Home Page
      </button>
    </Link>
  </div>
)
export default NotFound
