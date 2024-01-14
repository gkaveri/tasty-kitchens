import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantDetails from './components/RestaurantDetails'

import CartContext from './context/CartContext'
import './App.css'

class App extends Component {
  state = {toggler: false}

  openToggler = () => {
    this.setState({toggler: true})
  }

  closeToggler = () => {
    this.setState({toggler: false})
  }

  addCartItem = itemDetails => {
    const {cost, id, imageUrl, name, quantity} = itemDetails

    const storedData = JSON.parse(localStorage.getItem('cartData'))
    if (storedData === null) {
      const cartObject = {id, imageUrl, cost, name, quantity}
      localStorage.setItem('cartData', JSON.stringify([cartObject]))
    } else {
      const findObject = storedData.find(eachObject => eachObject.id === id)
      if (findObject === undefined) {
        const cartObject = {id, imageUrl, cost, name, quantity}
        storedData.push(cartObject)
        localStorage.setItem('cartData', JSON.stringify(storedData))
      } else {
        this.incrementItemQuantity(itemDetails)
      }
    }
  }

  removeCartItem = (storedData, id) => {
    const updatedData = storedData.filter(eachObject => {
      if (eachObject.id === id) {
        return eachObject.id !== id
      }
      return eachObject
    })
    return updatedData
  }

  decreaseItemQuantity = (storedData, id) => {
    const updatedData = storedData.map(eachObject => {
      if (eachObject.quantity > 1) {
        if (eachObject.id === id) {
          const updatedQuantity = eachObject.quantity - 1
          return {...eachObject, quantity: updatedQuantity}
        }
        return eachObject
      }
      return eachObject
    })
    return updatedData
  }

  decrementItemQuantity = itemDetails => {
    const {id} = itemDetails

    const storedData = JSON.parse(localStorage.getItem('cartData'))
    console.log(storedData)

    const findObject = storedData.find(eachObject => eachObject.id === id)
    if (findObject.quantity === 1) {
      const updatedData = this.removeCartItem(storedData, id)
      console.log(updatedData)
      localStorage.setItem('cartData', JSON.stringify(updatedData))
    } else {
      const updatedData = this.decreaseItemQuantity(storedData, id)
      console.log(updatedData)
      localStorage.setItem('cartData', JSON.stringify(updatedData))
    }
  }

  incrementItemQuantity = itemDetails => {
    const {id} = itemDetails
    const storedData = JSON.parse(localStorage.getItem('cartData'))

    const updatedArray = storedData.map(eachObject => {
      if (eachObject.id === id) {
        const updatedQuantity = eachObject.quantity + 1
        return {...eachObject, quantity: updatedQuantity}
      }
      return eachObject
    })
    localStorage.setItem('cartData', JSON.stringify(updatedArray))
  }

  render() {
    const {toggler} = this.state

    return (
      <CartContext.Provider
        value={{
          toggler,
          openToggler: this.openToggler,
          closeToggler: this.closeToggler,
          addCartItem: this.addCartItem,
          decrementItemQuantity: this.decrementItemQuantity,
          incrementItemQuantity: this.incrementItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
