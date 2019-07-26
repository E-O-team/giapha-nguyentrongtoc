import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Anchor, Heading} from 'grommet';
// Remember our thunk this is where we will need to make use of it
import { fetchPersonData, loading, choosePerson } from '../redux/actions/actions.js';
// We gonna use lodash to map over our recipe object
import _ from 'lodash'
import PhaDo from '../components/PhaDo';
import Img from 'react-image'
import dateFormat from 'dateformat';
import './styles/People.css';
import axios from 'axios';


const Background = 'https://res.cloudinary.com/giaphatocphamphu/image/upload/v1563523660/phadobg.png'
const RenderImage = ({person}) => {
    if(person.image){
        return <Img className="personPageImage" src={person.image.secure_url}/>
    }else if (person.sex == "nữ") {
        return <Img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
    }else {
        return <Img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
    }
}


class Person extends Component {
    constructor(props) {
        super(props);
        this.state={
            person: this.props.person,
            father: {},
            partner: {},
        }
    }

    // Fetch recipes when component is mounted
    componentDidMount() {
        // const API_URL = this.props.domain + 'person/' + this.props.person._id;
        // this.props.fetchPerson(API_URL)
        // this.fetchFather()
        // this.fetchPartner()
    }

    // fetchFather = () => {
    //     const {domain, person} = this.props
    //     const fatherAPI = domain + "person/" + person.parent
    //     axios.get(fatherAPI)
    //     .then(res => this.setState({
    //         father: res.data.person
    //     }))
    //     .catch(err => console.log(err))
    // }
    //
    // fetchPartner = () => {
    //     const {domain, person} = this.props
    //     console.log(person);
    //     var partnerAPI = domain
    //     if(person.sex == 'nam'){
    //         partnerAPI = domain + 'person/' + person.wife
    //     }else if (person.sex == 'nữ') {
    //         partnerAPI = domain + 'person/' + person.husband
    //     }
    //     axios.get(partnerAPI)
    //     .then(res => this.setState({
    //         partner: res.data.person
    //     }))
    //     .catch(err => console.log(err))
    // }

    handleChoosedPerson = (person) => {
        this.props.choosePerson(person)
        this.props.history.push('/people/' + person._id)
    }

    render() {
        const {person, parent} = this.props
        let fatherName = ''
        if(person.father){
            fatherName = person.parent.fullName
        }
        return(
            <Box
                className="personDetailPage"
                gap="medium"
                align="center"
                pad={{
                    bottom: "10px"
                }}
                wrap={true}
                fill="horizontal"

            >
                <Box
                    direction="row"
                    justify='center'
                    align='center'

                    fill='horizontal'
                    pad="large"
                    gap='large'
                    wrap={true}
                    key={person._id}
                >
                    <Box style={{flex: '1 1 300px'}} align="center" border={{size: 'large', color:'brand_2', side:'all'}} >
                        <RenderImage person={person}/>
                    </Box>
                    <Box background="brand_2" style={{flex: '1 1 300px'}} pad='medium'>
                        <Heading>{person.fullName}</Heading>
                        <Box height='3px' background='black' flex={{grow:1}}></Box>
                        <Box className='personDetail'>
                            <p>Họ và tên: <b>{person.fullName}</b></p>
                            <p>Giới tính: <b>{person.sex}</b></p>
                            <p>Ngày sinh: <b>{person.birth}</b></p>
                            <p>Đời: <b>{person.generation}</b></p>
                            {person.parent && <Box key={person.parent._id}><p key={person.parent._id}>Con ông: <b style={{'backgroundColor' : '#fc746c', 'cursor': 'pointer'}} onClick={() => this.handleChoosedPerson(this.props.person.parent)}>{this.props.person.parent.fullName}</b></p></Box>}
                            {person.partner && <Box key={person.partner._id}><p>Hôn nhân: <b style={{'backgroundColor' : '#fc746c', 'cursor': 'pointer'}} onClick={() => this.handleChoosedPerson(this.props.person.partner)}>{this.props.person.partner.fullName}</b></p></Box>}
                            <p>Thông tin: </p>
                            <div dangerouslySetInnerHTML={{ __html: person.information }} />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    {(person.children && person.sex !== 'nữ') > 0 &&
                        <PhaDo history={this.props.history}/>
                    }
                </Box>
            </Box>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        domain: state.domain,
        person: state.person,
        parent: state.person.parent,
        loadingState: state.loading
    };
}
// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPerson: (url) => dispatch(fetchPersonData(url)),
    loading: (loading) => dispatch(loading(loading)),
    choosePerson: (person) => dispatch(choosePerson(person))
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
