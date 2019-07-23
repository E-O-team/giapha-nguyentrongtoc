import React, { PureComponent } from 'react';
import { Box, Heading } from 'grommet';
import styled from 'styled-components';
import { choosePerson, fetchPersonData} from '../redux/actions/actions.js';
import { connect } from 'react-redux';
import Img from 'react-image'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
const StyleBox = styled(Box)`

`

class PersonCard extends React.PureComponent {
    constructor(props){
        super(props)
        this.state={
            partner: {}
        }
        this.checkPartner()
    }

    checkPartner = () => {
        const {partner} = this.props.person
        const {domain} = this.props
        if(typeof partner == 'string'){
            axios.get(domain + 'person/' + partner)
            .then(res => this.setState({
                partner: res.data.person
            }))
            .catch(err => console.log(err))
        }
    }

    handleChoosedPerson = () => {
        this.props.choosePerson(this.props.person)
        this.props.history.push('/people/' + this.props.person._id)
        // const API_URL = this.props.domain + 'person/' + this.props.person._id;
        // this.props.fetchPerson(API_URL)
    }



    render() {
        const { person } = this.props
        if(this.props.partner){
            var {partner} = this.props
        }else {
            var {partner} = this.state
        }
        const RenderImage = ({person}) => {
            if(person.image){
                return <Img className="personBoxImage" src={person.image.secure_url}/>
            }else if (person.sex == "nam") {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
            }else {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
            }
        }

        if(person.partner && this.props.Phado == true){
            return(
                <Box
                    className="coupleBox"
                    key={person._id}
                    align="center"
                    justify='center'
                    onClick={this.handleChoosedPerson}
                    border={{
                        color: 'blend',
                        size: 'small',
                        side: 'all',
                    }}
                    pad={{vertical: "5px"}}
                    direction='row'
                >
                    <Box align='center' justify='center' className="personBox" >
                        <RenderImage person={person}/>
                        <p>{person.fullName}</p>
                    </Box>
                    <Box align='center' justify='center' className="personBox">
                        <RenderImage person={partner}/>
                        <p>{partner.fullName}</p>
                    </Box>
                </Box>
            )
        }else{
            return (
                <Box
                    className="personBox"
                    key={person._id}
                    align="center"
                    onClick={this.handleChoosedPerson}

                    border={{
                        color: 'blend',
                        size: 'small',
                        side: 'all',
                    }}
                    pad={{vertical: "5px"}}
                >
                    <RenderImage person={person}/>
                    <p>{person.fullName}</p>
                </Box>
            );
        }


    }

}

const mapStateToProps = (state) => {
    return{
        domain: state.domain
    }
}

const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPerson: (url) => dispatch(fetchPersonData(url)),
    loading: (loading) => dispatch(loading(loading)),
    choosePerson: (person) => dispatch(choosePerson(person))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
