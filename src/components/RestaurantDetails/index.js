import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiFillStar} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import RestaurantItems from '../RestaurantItems'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}
class RestaurantDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    restaurantData: [],
    restaurantItemsData: [],
  }

  componentDidMount() {
    this.getRestaurantData()
  }

  getRestaurantData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = {
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      imageUrl: data.image_url,
      itemsCount: data.items_count,
      location: data.location,
      foodItem: data.food_items,
      name: data.name,
      rating: data.rating,
      opensAt: data.opens_at,
      reviewsCount: data.reviews_count,
      id: data.id,
    }
    const itemsData = updatedData.foodItem.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      cost: eachObject.cost,
      rating: eachObject.rating,
      imageUrl: eachObject.image_url,
      foodType: eachObject.food_type,
      quantity: 1,
    }))
    this.setState({
      apiStatus: apiStatusConstants.success,
      restaurantData: updatedData,
      restaurantItemsData: itemsData,
    })
  }

  renderRestaurantDataView = () => {
    const {restaurantData} = this.state
    const {
      costForTwo,
      cuisine,
      imageUrl,
      location,
      name,
      rating,
      reviewsCount,
    } = restaurantData

    return (
      <div className="restaurant-bg-container">
        <img src={imageUrl} alt="restaurant" className="restaurant-image1" />
        <div>
          <h1 className="restaurant-name1">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <p className="location">{location}</p>
          <div className="cost-rating-section">
            <div className="rating-sec">
              <div className="icon-rating-section">
                <AiFillStar size={15} className="star" />
                <p className="rating">{rating}</p>
              </div>
              <p className="rating-count">({reviewsCount} Rating)</p>
            </div>
            <div className="cost-for-two-container">
              <p className="cost-for-two">₹ {costForTwo}</p>
              <p className="cost-for-two-text">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="restaurant-details-loader">
      <Loader type="Oval" color="#f7931d" height="50" width="50" />
    </div>
  )

  renderRestaurantDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantDataView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderRestaurantItemsDataView = () => {
    const {restaurantItemsData} = this.state

    return (
      <ul className="restaurant-item-container">
        {restaurantItemsData.map(eachRestaurantItem => (
          <RestaurantItems
            key={eachRestaurantItem.id}
            restaurantItemDetails={eachRestaurantItem}
          />
        ))}
      </ul>
    )
  }

  renderRestaurantItemsDataLoadingView = () => (
    <div className="loader-container" testid="restaurants-list-loader">
      <Loader type="Oval" color="#f7931d" height="50" width="50" />
    </div>
  )

  renderRestaurantItemsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantItemsDataView()
      case apiStatusConstants.inProgress:
        return this.renderRestaurantItemsDataLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div>{this.renderRestaurantDetailsView()}</div>
        <div>{this.renderRestaurantItemsView()}</div>
        <Footer />
      </div>
    )
  }
}
export default RestaurantDetails
