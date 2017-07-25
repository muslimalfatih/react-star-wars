import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeoples } from '../actions/index';
import { Link } from 'react-router';


class PageIndex extends Component {
  componentWillMount() {
    this.props.fetchPeoples();
  }

  renderPeoples() {
    if(this.props.peoples.results == undefined) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      this.props.peoples.results.map((people, i) => {
        return (
          <li key={people.name} className="list-group-item">
            <Link to={`people/${i+1}`}>
              {people.name}
            </Link>
          </li>
        )
      })
    )
  }

  render() {

    if(this.props.peoples == null) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <h3>Star Wars Character</h3>
        {this.renderPeoples()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    peoples: state.peoples.post
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPeoples }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);
