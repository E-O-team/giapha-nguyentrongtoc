import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { fetchPersonData } from '../redux/actions/actions.js';
import axios from 'axios';
import Tree from 'react-vertical-tree'
import ParentAndChildren from './ParentAndChildren';
import PersonCard from './PersonCard';
import { SteppedLineTo } from 'react-lineto';
class PhaDo extends PureComponent {
    render() {
        const {person, history} = this.props
        return(
            <Box align='center' key={person._id}>
                <ParentAndChildren initPerson={person} history={history}/>
            </Box>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        person: state.person,
        loading: state.loading
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPersonData: (url) => dispatch(fetchPersonData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhaDo);
