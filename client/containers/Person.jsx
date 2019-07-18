import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Anchor} from 'grommet';
// Remember our thunk this is where we will need to make use of it
import { fetchPersonData, loading } from '../redux/actions/actions.js';
// We gonna use lodash to map over our recipe object
import _ from 'lodash'
import PhaDo from '../components/PhaDo';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    // Fetch recipes when component is mounted
    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/person/' + this.props.person._id;
        this.props.fetchPerson(API_URL)
    }

    render() {
        const {person} = this.props
        return(
            <Box
                gap="medium"
                align="center"
                pad={{
                    bottom: "10px"
                }}
                background="#a3c4e4"
                fill
            >
                <Box>
                    <h1>{person.fullName}</h1>
                    <h1>{person.sex}</h1>
                </Box>
                <Box>
                    <h1>{person.fullName}</h1>
                    <h1>{person.sex}</h1>
                </Box>
                <Box>
                    <h1>{person.fullName}</h1>
                    <h1>{person.sex}</h1>
                </Box>
                <Box>
                    <h1>{person.fullName}</h1>
                    <h1>{person.sex}</h1>
                </Box>
                <Box>
                    {person.children &&
                        <PhaDo history={this.props.history}/>
                    }
                </Box>
            </Box>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        person: state.person,
        loading: state.loading
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPerson: (url) => dispatch(fetchPersonData(url)),
    loading: (loading) => dispatch(loading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
