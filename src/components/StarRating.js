import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
  renderStars = (starValue) => {
    const totalStars = []

    for (let i = 0; i < starValue; i++){
      totalStars.push(<Star key = {i}/>)
    }

    return totalStars;

  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.renderStars(5)}
      </ul>
    );
  }
}

export default StarRating;