import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import './index.css'

class CartItems extends Component {
  render() {
    const {cartItemDetails, updateStatus} = this.props
    const {cost, imageUrl, quantity, name} = cartItemDetails

    return (
      <CartContext.Consumer>
        {value => {
          const {decrementItemQuantity, incrementItemQuantity} = value

          const onClickMinusButton = () => {
            decrementItemQuantity(cartItemDetails)
            updateStatus()
          }

          const onClickPlusButton = () => {
            incrementItemQuantity(cartItemDetails)
            updateStatus()
          }

          return (
            <>
              <li className="items-container1" testid="cartItem">
                <div className="image-and-name">
                  <img
                    src={imageUrl}
                    alt="cart-item"
                    className="cart-item-image"
                  />
                  <h1 className="dish-name1">{name}</h1>
                </div>
                <div className="quantity-container">
                  <button
                    aria-label="button"
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickMinusButton}
                    testid="decrement-quantity"
                  >
                    <BsDashSquare
                      size={20}
                      className="quntity-controller-icon"
                    />
                  </button>
                  <p className="quantity-item" testid="item-quantity">
                    {quantity}
                  </p>
                  <button
                    aria-label="button"
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickPlusButton}
                    testid="increment-quantity"
                  >
                    <BsPlusSquare
                      size={20}
                      className="quntity-controller-icon"
                    />
                  </button>
                </div>
                <p className="total-order-price">₹ {cost * quantity}.00</p>
              </li>
              <li className="items-container2">
                <div className="image-and-name">
                  <img
                    src={imageUrl}
                    alt="dish-item"
                    className="cart-item-image"
                  />
                </div>
                <div className="name-controls-section1">
                  <h1 className="dish-name1">{name}</h1>
                  <div className="controls-container">
                    <button
                      aria-label="button"
                      type="button"
                      className="quantity-controller-button"
                      onClick={onClickMinusButton}
                      testid="decrement-quantity"
                    >
                      <BsDashSquare
                        size={20}
                        className="quntity-controller-icon"
                      />
                    </button>
                    <p className="quantity-item" testid="item-quantity">
                      {quantity}
                    </p>
                    <button
                      aria-label="button"
                      type="button"
                      className="quantity-controller-button"
                      onClick={onClickPlusButton}
                      testid="increment-quantity"
                    >
                      <BsPlusSquare
                        size={20}
                        className="quntity-controller-icon"
                      />
                    </button>
                  </div>
                  <p className="total-order-price">₹ {cost * quantity}.00</p>
                </div>
              </li>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartItems
