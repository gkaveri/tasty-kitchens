import {Component} from 'react'
import Header from '../Header'
import CartItems from '../CartItems'
import EmptyCartView from '../EmptyCartView'
import Footer from '../Footer'
import OrderSuccessView from '../OrderSuccessView'
import './index.css'

class Cart extends Component {
  state = {
    cartItemsData: [],
    isOrderSubmitted: false,
    totalAmount: 0,
  }

  componentDidMount() {
    const storedRestaurantItemsData = localStorage.getItem('cartData')
    const parseStoredData = JSON.parse(storedRestaurantItemsData)
    let total = 0
    if (parseStoredData !== null && parseStoredData !== undefined) {
      parseStoredData.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
      })
      console.log(total)
    }
    this.setState({cartItemsData: parseStoredData, totalAmount: total})
  }

  updateStatus = () => {
    const storedRestaurantItemsData = localStorage.getItem('cartData')
    const parseStoredData = JSON.parse(storedRestaurantItemsData)
    let total = 0
    if (parseStoredData.length !== 0) {
      parseStoredData.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
      })
      console.log(total)
    }
    this.setState({cartItemsData: parseStoredData, totalAmount: total})
  }

  onClickOrderNowButton = () => {
    this.setState({isOrderSubmitted: true})
    localStorage.clear('cartData')
  }

  renderCartView = () => {
    const {isOrderSubmitted, cartItemsData, totalAmount} = this.state

    return !isOrderSubmitted ? (
      <>
        <ul className="cart-items-container">
          <div className="cart-heading">
            <p className="cart-value">Item</p>
            <p className="cart-value">Quantity</p>
            <p className="cart-value">Price</p>
          </div>
          <ul className="cart-item">
            {cartItemsData.map(eachObject => (
              <CartItems
                key={eachObject.id}
                cartItemDetails={eachObject}
                updateStatus={this.updateStatus}
                testid={`cartItem-${eachObject.id}`}
              />
            ))}
          </ul>
          <hr
            style={{
              borderBottom: '2px dashed #000',
              marginTop: 0,
              width: '95%',
            }}
          />
          <div className="submit-section">
            <h1 className="order-total">Order Total:</h1>
            <div className="total-price-section">
              <p className="total-price" testid="total-price">
                ₹ {totalAmount}.00
              </p>
              <button
                type="button"
                onClick={this.onClickOrderNowButton}
                className="order-now-button"
              >
                Place Order
              </button>
            </div>
          </div>
        </ul>
        <Footer />
      </>
    ) : (
      <OrderSuccessView />
    )
  }

  renderView = () => {
    const {cartItemsData} = this.state
    if (cartItemsData.length !== 0) {
      return this.renderCartView()
    }
    return <EmptyCartView />
  }

  render() {
    const {cartItemsData} = this.state

    return (
      <>
        <Header />
        {cartItemsData === null ? <EmptyCartView /> : this.renderView()}
      </>
    )
  }
}

export default Cart
