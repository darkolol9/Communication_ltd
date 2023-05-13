import React from "react";

const CustomerCards = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id} className="customer-card">
            <div className="customer-name user">{message.customer_name}</div>
            <div
              className="customer-msg user"
              dangerouslySetInnerHTML={{"__html" : message.message}}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomerCards;
