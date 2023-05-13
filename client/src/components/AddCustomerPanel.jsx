import React from "react";
import Axios from 'axios';

const API = 'http://localhost:3000/leave_message';

const AddCustomerPanel = ({ setCustomerName, setCustomerMessage, customerMessageForm }) => {
  const onSubmit = async () => {
    //submit the message to the server;;;
    await Axios.post(API, customerMessageForm);
  }

  return (
    <div className="add-customer-container">
      <div className="comment-form">
        <input onChange={(e) => setCustomerName(e.target.value)} placeholder="customer name" type="text" />
        <input onChange={(e) => setCustomerMessage(e.target.value)} placeholder="leave us a message" type="text" />
        <button onClick={onSubmit} className="submit">Send</button>
      </div>
    </div>
  );
};

export default AddCustomerPanel;
