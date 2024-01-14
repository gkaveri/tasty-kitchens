import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const offersApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Carousel extends Component {
  state = {
    offersData: [],
    apiStatus: offersApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({apiStatus: offersApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const offersApiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(offersApiUrl, options)
    const data = await response.json()
    const updatedData = data.offers.map(eachObject => ({
      id: eachObject.id,
      imageUrl: eachObject.image_url,
    }))
    this.setState({
      apiStatus: offersApiStatusConstants.success,
      offersData: updatedData,
    })
  }

  renderInProgressView = () => (
    <div className="loader-container" testid="restaurants-offers-loader">
      <Loader type="Oval" color="#f7931d" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {offersData} = this.state
    const settings = {
      dots: true,
      autoplay: true,
    }

    return (
      <ul className="slider-container">
        <Slider {...settings}>
          {offersData.map(eachOfferDetails => (
            <li key={eachOfferDetails.id} className="slick-slice">
              <img
                src={eachOfferDetails.imageUrl}
                alt="offer"
                className="offer-image"
              />
            </li>
          ))}
        </Slider>
      </ul>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case offersApiStatusConstants.success:
        return this.renderSuccessView()
      case offersApiStatusConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderView()}</div>
  }
}
export default Carousel
