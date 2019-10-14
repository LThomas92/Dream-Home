import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  document.title = "Dream Home";
  return (
    <div className="container">
      <div className="landing-page-header">
        <div className="landing-page-header__box">
          <h1 className="landing-page-header__title">Dream Home</h1>
          <p className="landing-page-header__title__small">
            making home shopping a dream
          </p>
          <Link to="/homes">
            <button className="btn">Find Your Home</button>
          </Link>
        </div>
      </div>

      <div className="features-container">
        <h3 className="features-container__title">Features</h3>
        <div className="row">
          <div className="columns">
            <div className="features-content">
              <i className="fa fa-globe svc-logo" />
              <h4 className="features-content__title">Find Homes Worldwide</h4>
              <p className="features-content__text">
                We are available to help you find homes not only throughout the
                United States but, also around the world. We have clients in
                Europe, Africa and Japan just to name a few. We have expanded
                globally in the last 3 years.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="features-content">
              <i className="fa fa-phone svc-logo" />
              <h4 className="features-content__title">Fast Response Time</h4>
              <p className="features-content__text">
                Our Realtors are always working for you and we are only just a
                phone call, text or even social media direct message away. We
                pride ourselves on being able to stay in constant communication
                with our clients to make the purchasing process as seamless and
                stress-free as possible.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="features-content">
              <i className="fa fa-briefcase  svc-logo" />
              <h4 className="features-content__title">Experienced Realtors</h4>
              <p className="features-content__text">
                With over 15 years of experience our realtors know what they are
                doing. Many of our realtors have been selling homes in various
                locations throughout the world. Our experience will help to
                ensure that you are in good hands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <div className="reviews-section">
          <h3 className="reviews-section__title">Reviews</h3>
          <div className="review-card">
            <p>
              We felt very comfortable purchasing a new apartment in Manhattan
              with Dream Home. They helped us close on the apartment in only a
              week! I love the apartment!
              <cite>&nbsp;-Bob Jones</cite>
            </p>
            <div className="review-card__stars">
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
            </div>
          </div>
          <div className="review-card">
            <p>
              Dream Home has been a blast to work with! They are so quick and
              clear with their communication. They offered a great price on our
              first ever home and couldn't be happier!
              <cite>&nbsp;-Phil Smith</cite>
            </p>
            <div className="review-card__stars">
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
              <i className="fa fa-star review-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
