import React from "react";
import { htmlEncode } from "../helpers";

const CustomerCards = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id} className="customer-card">
            <div className="customer-name user">
              name : {message.customer_name}
            </div>
            <div
              className="customer-msg user"
              //if we encode the message.message field, we bypass the XSS injection problem
              dangerouslySetInnerHTML={{ __html: message.message }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomerCards;
