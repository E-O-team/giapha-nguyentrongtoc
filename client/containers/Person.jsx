import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { fetchPeople, peopleFetchData } from '../actions/actions.js';
// We gonna use lodash to map over our recipe object
import _ from 'lodash'

class Person extends Component {
    constructor(props) {
        super(props);
    }

    // Fetch recipes when component is mounted
    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/people/';
        // I am setting some delay to simulate a real world request
        setTimeout(() => { this.props.fetchPeople(API_URL); }, 1000);
    }

    // renderPeople = people => {
    //
    // }

    render() {
        const {loading, people} = this.props
        if(loading || people.length == 0){
            return(
                <h1>LOADING...</h1>
            )
        }
        return people.map(person => (
            <h1 key={person._id}>{person.fullName}</h1>
        ))
    };
};

const mapStateToProps = (state) => {
    return {
        people: state.people,
        loading: state.loading
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPeople: (url) => dispatch(peopleFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
