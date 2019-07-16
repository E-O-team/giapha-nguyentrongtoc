import React, { Component } from 'react';
import { Box, Anchor} from 'grommet';
import { connect } from 'react-redux';
import Img from 'react-image'
import './styles/People.css';
import { Link } from 'react-router-dom';
import PersonCard from '../components/PersonCard';
// Remember our thunk this is where we will need to make use of it
import { fetchPeople, peopleFetchData, choosePerson, } from '../redux/actions/actions.js';

class People extends Component {

    componentDidMount() {
        this.props.fetchPeople("http://localhost:3000/api/people")
    }

    handleChoosedPerson = (e) => {
        console.log(e.target.person);
    }

    render() {

        const RenderImage = ({person}) => {
            if(person.image){
                return <Img className="personBoxImage" src={person.image.secure_url}/>
            }else if (person.sex == "nam") {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
            }else {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
            }
        }

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
                pad="small"
            >
                {people.map(person => (
                    <PersonCard key={person._id} person={person} history={this.props.history}/>
                ))}
            </Box>
        )

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


export default connect(mapStateToProps, mapDispatchToProps)(People);
