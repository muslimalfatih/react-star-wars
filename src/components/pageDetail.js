import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/index';
import { Link } from 'react-router';

class PageDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPeople(this.props.params.id)
  }

  render() {
    if(this.props.people == null) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="character-detail">
        <h3>{this.props.people.name}</h3>
        <p>Birth Year: {this.props.people.birth_year}</p>
        <p>Height: {this.props.people.height}</p>
        <p>Mass: {this.props.people.mass}</p>
        <p>Gender: {this.props.people.gender}</p>
        <p>Hair Color: {this.props.people.hair_color}</p>
        <p>Eye Color: {this.props.people.eye_color}</p>
        <p>Skin Color: {this.props.people.skin_color}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.peoples.post
  }
}

export default connect(mapStateToProps, { fetchPeople})(PageDetail);
