import React, { PureComponent } from 'react';
import { Box } from 'grommet';
import { choosePerson } from '../redux/actions/actions.js';
import { connect } from 'react-redux';
import Img from 'react-image'
import { withRouter } from 'react-router-dom'

class PersonCard extends React.PureComponent {
    constructor(props){
        super(props)
    }

    handleChoosedPerson = () => {
        this.props.choosePerson(this.props.person)
        this.props.history.push('/people/' + this.props.person._id)
    }

    render() {
        const { person } = this.props
        const RenderImage = ({person}) => {
            if(person.image){
                return <Img className="personBoxImage" src={person.image.secure_url}/>
            }else if (person.sex == "nam") {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
            }else {
                return <Img className="personBoxImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
            }
        }
        return (
            <Box
                responsive={true}
                className="personBox"
                key={person._id}
                align="center"
                animation="slideUp"
                width="150px"
                height="150px"
                pad="small"
                onClick={this.handleChoosedPerson}
            >
                <RenderImage person={person}/>
                <h5>{person.fullName}</h5>
            </Box>
        );
    }

}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = {
    choosePerson,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
