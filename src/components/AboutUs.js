import React from "react";

const AboutUs = () => {
  document.title = "Dream Home | About Us";
  return (
    <div className="aboutus-container">
      <div className="aboutus-image-section">
        <img
          alt="About Us"
          className="aboutus-section__image"
          src="https://i.imgur.com/xbOpsHE.jpg"
        />
      </div>
      <div className="aboutus-text-container">
        <div className="aboutus-text">
          <h3 className="aboutus-text__heading">Why Choose Us?</h3>
          <p className="aboutus-text__content">
            Etiam vitae lacus ut lectus euismod pellentesque. Sed blandit lacus
            vel nulla fringilla consectetur. Nullam eleifend libero arcu, et
            vestibulum quam semper ac. Sed eu massa nunc. Donec augue nunc,
            rhoncus a ipsum sit amet, placerat faucibus turpis.
          </p>
          <p className="aboutus-text__content">
            Etiam vitae lacus ut lectus euismod pellentesque. Sed blandit lacus
            vel nulla fringilla consectetur. Nullam eleifend libero arcu, et
            vestibulum quam semper ac. Sed eu massa nunc. Donec augue nunc,
            rhoncus a ipsum sit amet, placerat faucibus turpis.
          </p>
          <p className="aboutus-text__content">
            Etiam vitae lacus ut lectus euismod pellentesque. Sed blandit lacus
            vel nulla fringilla consectetur. Nullam eleifend libero arcu, et
            vestibulum quam semper ac. Sed eu massa nunc. Donec augue nunc,
            rhoncus a ipsum sit amet, placerat faucibus turpis.
          </p>
          <div className="aboutus-text__content">
            <h4>Contact Information</h4>
            <p>
              <i className="fa fa-map contact-icons" />
              503 Thompson St. New York, NY 10033
            </p>
            <p>
              <i className="fa fa-phone-square contact-icons" />
              212-443-5567
            </p>
            <p>
              <i className="fa fa-envelope contact-icons" />
              agent@dreamhome.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
