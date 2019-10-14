import React from "react";
import homesData from "../data/homesData";

class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homesData,
      term: ""
    };
  }

  renderHomes = home => {
    return (
      <div className="home-row">
        <div className="home-card">
          <h4 className="home-card__name">{home.title}</h4>
          <img src={home.image} alt="Product" className="home-card__img" />

          <p className="home-card__price">Listing Price: $ {home.price}</p>
          <div className="home-card-info">
            <div className="home-card__amenities">
              <p className="home-card__amenities__text">
                Amenities: {home.amenities[0]}
              </p>
            </div>
            <div className="home-card__rooms">
              <p className="home-card__rooms__text">Rooms: {home.rooms}</p>
            </div>
          </div>
          <button className="btn btn--realtor">Contact Realtor</button>
        </div>
      </div>
    );
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    document.title = "Dream Home | Homes";
    const { term } = this.state;
    const filteredData = homesData.filter(home => {
      return home.city.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });

    return (
      <div className="homes-container">
        <div className="homes-filter-container">
          <div className="homes-filter">
            <input
              onChange={this.onChange}
              className="homes-filter__input"
              type="text"
              placeholder="Search By City..."
            />
          </div>
        </div>
        <div className="grid-container">
          {filteredData.map(home => {
            return this.renderHomes(home);
          })}
        </div>

        <section className="page-pagination-container">
          <ul className="page-pagination">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Homes;
