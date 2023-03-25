import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="container-wrap col">
        <h1 className="text-body-secondary">Welcome to Communications Ltd</h1>
        <div>
          <h2>About Us</h2>
          <p>
            Communications Ltd is a leading provider of communication services
            for businesses of all sizes. Our goal is to help our clients improve
            their communication capabilities and increase their productivity.
          </p>
          <h2>Services</h2>
          <ul>
            <li>VoIP Phone Systems</li>
            <li>Unified Communications</li>
            <li>Video Conferencing</li>
            <li>Contact Center Solutions</li>
          </ul>
          <h2>Contact Us</h2>
          <p>Want to learn more about our services? Contact us today!</p>
          <div>
            Communications Ltd 123 Main St Anytown, USA Phone: 555-555-5555
            Email: info@communicationsltd.com
          </div>
        </div>
        <footer>
          <p>2023 Communications Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
