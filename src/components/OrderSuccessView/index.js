import React from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const OrderSuccessView = () => {
  const history = useHistory()

  const handleClick = () => {
    // Redirect to the home page
    history.push('/')
  }

  return (
    <div className="successful-view">
      <img
        src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?w=740&t=st=1705226081~exp=1705226681~hmac=c006c6a27823c1a70e384176e71f33dbe41ea923beba095fbaba3c3deea25eeb"
        className="success-icon"
        alt="Success Icon"
      />
      <h1 className="payment">Payment Successful</h1>
      <p className="para">Thank you for ordering Your payment is successfully completed."</p>
      <button type="button" className="back-btn" onClick={handleClick}>
        Go To Home Page
      </button>
    </div>
  )
}

export default OrderSuccessView
