import React from 'react'

const AddCustomerPanel = () => {
  return (
    <div className='add-customer-container'>
      <div className="comment-form">
        <input placeholder='customer name' type="text" />
        <input placeholder='leave us a message' type="text" />
        <button className="submit">Send</button>
      </div>
    </div>
  )
}

export default AddCustomerPanel
