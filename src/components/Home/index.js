import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  AiOutlineLeftSquare,
  AiOutlineRightSquare,
  AiFillStar,
} from 'react-icons/ai'

import {BsFilterRight} from 'react-icons/bs'
import Header from '../Header'
import Carousel from '../Carousel'
import Footer from '../Footer'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    restaurantsData: [],
    apiStatus: apiStatusConstants.initial,
    activePage: 1,
    totalPageCount: 0,
    activeOptionId: sortByOptions[1].value,
  }

  componentDidMount() {
    this.getRestaurantsData()
  }

  getRestaurantsData = async () => {
    const {activeOptionId} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activePage} = this.state
    const limit = 9
    const offset = (activePage - 1) * limit
    const restaurantsApiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeOptionId}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(restaurantsApiUrl, options)
    const data = await response.json()
    const totalRecords = data.total
    const totalPages = Math.ceil(totalRecords / limit)
    const updatedData = data.restaurants.map(eachObject => ({
      costForTwo: eachObject.cost_for_two,
      cuisine: eachObject.cuisine,
      groupByTime: eachObject.group_by_time,
      hasOnlineDelivery: eachObject.has_online_delivery,
      hasTableBooking: eachObject.has_table_booking,
      id: eachObject.id,
      imageUrl: eachObject.image_url,
      isDeliveringNow: eachObject.is_delivering_now,
      location: eachObject.location,
      menuType: eachObject.menu_type,
      name: eachObject.name,
      opensAt: eachObject.opens_at,
      rating: eachObject.user_rating.rating,
      ratingColor: eachObject.user_rating.rating_color,
      ratingText: eachObject.user_rating.rating_text,
      totalReviews: eachObject.user_rating.total_reviews,
    }))

    this.setState({
      totalPageCount: totalPages,
      apiStatus: apiStatusConstants.success,
      restaurantsData: updatedData,
    })
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurantsData,
      )
    }
  }

  onClickRightArrow = () => {
    const {activePage, totalPageCount} = this.state
    if (activePage < totalPageCount) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurantsData,
      )
    }
  }

  renderSuccessView = () => {
    const {restaurantsData} = this.state

    return (
      <div className="resta">
        <ul className="restaurant-details-container">
          {restaurantsData.map(eachObject => (
            <Link
              to={`/restaurant/${eachObject.id}`}
              className="link"
              key={eachObject.id}
            >
              <li
                key={eachObject.id}
                testid="restaurant-item"
                className="restaurant-details-item"
              >
                <img
                  src={eachObject.imageUrl}
                  alt="restaurant"
                  className="restaurant-image"
                />
                <div className="restaurant-info">
                  <h1 className="restaurant-name">{eachObject.name}</h1>
                  <p className="food-type">{eachObject.cuisine}</p>
                  <div className="rating-section">
                    <AiFillStar size={15} className="star-icon" />
                    <p className="rating1">{eachObject.rating}</p>
                    <p className="reviews">
                      {eachObject.totalReviews}(Reviews)
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }

  renderInProgressView = () => (
    <div className="loader-container" testid="restaurants-offers-loader">
      <Loader type="Oval" color="#f7931d" height="50" width="50" />
    </div>
  )

  renderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderInProgressView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  onChangeSortBy = event => {
    this.setState({activeOptionId: event.target.value}, this.getRestaurantsData)
  }

  render() {
    const {activePage, totalPageCount, activeOptionId} = this.state

    return (
      <div className="home">
        <Header />
        <Carousel />
        <div className="popular-restaurants-container">
          <div className="text-sort-by-container">
            <h1 className="popular-restaurants-heading">Popular Restaurants</h1>
            <p className="popular-restaurants-text">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="sort-by-container">
            <BsFilterRight size={30} className="filter-icon" />
            <p className="sort-by-text">Sort by </p>
            <select
              onChange={this.onChangeSortBy}
              value={activeOptionId}
              className="options-container"
            >
              {sortByOptions.map(eachObject => (
                <option
                  key={eachObject.id}
                  className="select-option"
                  value={eachObject.value}
                >
                  {eachObject.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className="line" />
        {this.renderView()}
        <div className="pagination-container">
          <button
            aria-label="button"
            type="button"
            className="pagination-button"
            onClick={this.onClickLeftArrow}
            testid="pagination-left-button"
          >
            <AiOutlineLeftSquare size={30} className="icon" />
          </button>
          <p className="active-page" testid="active-page-number">
            {activePage}
          </p>
          <span className="of-text"> of </span>
          <p className="page-count">{totalPageCount}</p>
          <button
            aria-label="button"
            type="button"
            className="pagination-button"
            onClick={this.onClickRightArrow}
            testid="pagination-right-button"
          >
            <AiOutlineRightSquare size={30} className="icon" />
          </button>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home
