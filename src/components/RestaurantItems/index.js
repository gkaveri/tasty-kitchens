import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import CartContext from '../../context/CartContext'

import './index.css'

class RestaurantItems extends Component {
  state = {
    isItemAdded: true,
    itemQuantity: 1,
  }

  render() {
    const {restaurantItemDetails} = this.props
    const {imageUrl, cost, name, rating} = restaurantItemDetails
    const {isItemAdded, itemQuantity} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem, incrementItemQuantity, decrementItemQuantity} =
            value

          const onClickAddButton = async () => {
            this.setState({isItemAdded: false})
            addCartItem(restaurantItemDetails)
          }

          const onClickIncreaseQuantity = async () => {
            this.setState(prevState => ({
              itemQuantity: prevState.itemQuantity + 1,
            }))
            incrementItemQuantity(restaurantItemDetails)
          }

          const onClickDecreaseQuantity = async () => {
            if (itemQuantity > 1) {
              this.setState(prevState => ({
                itemQuantity: prevState.itemQuantity - 1,
              }))
            }
            if (itemQuantity === 1) {
              this.setState({isItemAdded: true})
            }
            decrementItemQuantity(restaurantItemDetails)
          }

          return (
            <li className="dishes-container" testid="foodItem">
              <img src={imageUrl} alt={name} className="dish-image" />
              <div>
                <h1 className="dish-name">{name}</h1>
                <p className="dish-cost">
                  ₹ <span>{cost}</span>
                </p>
                <div className="icon-and-rating-section">
                  <AiFillStar size={15} className="dish-icon" />
                  <p className="dish-rating">{rating}</p>
                </div>
                {isItemAdded && (
                  <button
                    aria-label="button"
                    type="button"
                    className="add-button"
                    onClick={onClickAddButton}
                  >
                    Add
                  </button>
                )}
                {!isItemAdded && (
                  <div className="quantity-container1">
                    <button
                      aria-label="button"
                      type="button"
                      className="quantity-controller"
                      onClick={onClickDecreaseQuantity}
                      testid="decrement-count"
                    >
                      <BsDashSquare
                        size={20}
                        className="quantity-control-icon"
                      />
                    </button>
                    <p className="quanitiy" testid="active-count">
                      {itemQuantity}
                    </p>
                    <button
                      aria-label="button"
                      type="button"
                      className="quantity-controller"
                      onClick={onClickIncreaseQuantity}
                      testid="increment-count"
                    >
                      <BsPlusSquare
                        size={20}
                        className="quantity-control-icon"
                      />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default RestaurantItems
