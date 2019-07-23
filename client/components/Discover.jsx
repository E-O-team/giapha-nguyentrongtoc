import React, { Component } from 'react';
import { Box } from 'grommet';
import { choosePerson, fetchPersonData} from '../redux/actions/actions.js';
import { connect } from 'react-redux';
class Discover extends Component {

    render() {
        return (
            <Box
                direction='row'
                fill
            >
                <Box style={{'flex': '1 1 auto'}}>
                    <Box
                        style={{'flex': '2 1 auto'}}
                        border={{
                            color: 'black',
                            size: 'xsmall',
                            side: 'bottom',
                        }}
                    >
                        <h4>sup</h4>
                    </Box>
                    <Box style={{'flex': '1.5 1 auto'}} >
                        <h4>sup</h4>
                    </Box>
                </Box>
                <Box
                    style={{'flex': '3 1 auto'}}
                    border={{
                        color: 'black',
                        size: 'xsmall',
                        side: 'left',
                    }}
                >
                    <h2>hi</h2>
                </Box>
            </Box>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => ({
    fetchPeople: (url) => dispatch(peopleFetchData(url)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Discover);
