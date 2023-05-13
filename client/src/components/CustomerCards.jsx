import React from "react";

const CustomerCards = ({ customers }) => {
  return (
    <div>
      {customers.map((customer) => {
        return (
          <div className="customer-card">
            <div className="customer-name user">{customer.name}</div>
            <div
              className="customer-msg user"
              dangerouslySetInnerHTML={{"__html" : customer.message}}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomerCards;
