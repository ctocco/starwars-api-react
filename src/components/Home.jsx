import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    people: [],
    species: [],
    number: null,
    loading: ""
  };

  componentDidMount = async number => {
    let responsePeople;
    let responseSpecies;

    try {
      responsePeople = await axios.get(`https://swapi.co/api/people/`, {
        params: {}
      });

      responseSpecies = await axios.get(`https://swapi.co/api/species/`, {
        params: {}
      });
    } catch (err) {
      console.log(err);
    }

    if (responsePeople === undefined) {
      this.setState({
        message: "Loading"
      });
    }

    if (responsePeople !== undefined) {
      this.setState({
        people: responsePeople.data.results
      });
      console.log(this.state.people);
    }
    if (responseSpecies !== undefined) {
      console.log(responseSpecies.data.results);
    }
  };

  render() {
    const { people } = this.state;
    const peopleList = people.length ? (
      people.map(person => {
        return <div className=" container card">{person.name}</div>;
      })
    ) : (
      <div className="center">No list yet</div>
    );

    return (
      <div>
        <h4 className="center">Star Wars API Home</h4>
        <h1>{this.state.message}</h1>
        {peopleList}
      </div>
    );
  }
}

export default Home;
