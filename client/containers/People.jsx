import React, { Component } from 'react';
import { Box, Anchor} from 'grommet';
import { connect } from 'react-redux';
import Img from 'react-image'
import './styles/People.css';
import { Link } from 'react-router-dom';
import PersonCard from '../components/PersonCard';
// Remember our thunk this is where we will need to make use of it
import { fetchPeople, peopleFetchData, choosePerson, } from '../redux/actions/actions.js';
const Background = 'https://res.cloudinary.com/giaphatocphamphu/image/upload/v1563523660/phadobg.png'
class People extends Component {

    componentDidMount() {
        this.props.fetchPeople()
    }

    handleChoosedPerson = (e) => {
        console.log(e.target.person);
    }

    render() {
        const { loading, people } = this.props
        if(loading || people.length == 0){
            return(
                <h1>LOADING...</h1>
            )
        }

        return(
            <Box
                justify="start"
                direction="row"
                gap="medium"
                align="center"
                pad="large"
                wrap={true}
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundSize: '150% 120%',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                {people.map(person => (
                    <Box
                        align="center"
                        justify="center"
                        pad="0px"
                        margin={{bottom: '5px'}}
                        key={person._id}
                    >
                        <PersonCard key={person._id} person={person} history={this.props.history} Phado={false}/>
                    </Box>
                ))}
            </Box>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        domain: state.domain,
        people: state.people,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => ({
    fetchPeople: () => dispatch(peopleFetchData()),
});


export default connect(mapStateToProps, mapDispatchToProps)(People);
