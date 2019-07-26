import React, {useEffect, createRef} from 'react';
import { Route, Link, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext, Form, FormField, TextInput, Drop, ThemeContext } from 'grommet';
import { Search } from 'grommet-icons';
import Home from '../containers/Home';
import Person from '../containers/Person';
import People from '../containers/People';
import Contact from '../containers/Contact';
import { Login } from 'grommet-icons';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { choosePerson, fetchPersonData} from '../redux/actions/actions.js';
import { connect } from 'react-redux';
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
class PeopleOrSearch extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search: '',
            searchResults: [],
            loading: false,
            dropVisible: false,
        }
        this.textInput = React.createRef();
    }


    handleChoosedPerson = (person) => {
        this.props.choosePerson(person)
        this.props.history.push('/people/' + person._id)
    }

    handleSearch = (value) => {
        let call;
        const once = (config = {}) => {
            if (call) {
                call.cancel("Only one request allowed at a time.");
            }
            call = axios.CancelToken.source();

            config.cancelToken = call.token
            return axios(config);
          }


        var config = {
            method: "get",
            url: 'https://giaphaphamphu-react-redux.herokuapp.com/api/search?name=' + this.state.search,
            timeout: 60000
        }

        setTimeout(() => {
            once(config)
            .then(response => {
                var results = response.data.people.map((person, index) => {
                    return {
                        label: person.fullName,
                        person: person,
                    }
                    // return person.fullName
                })
                this.setState({
                    searchResults: results,
                    dropVisible: false,
                })
            })
            .catch(error => {
                console.log(err => console.log(err));
            })
        }, 500)
        // const load = () =>{
        //     this.setState({
        //         search: value,
        //     },() => {
        //         if(this.state.search !== ''){
        //             axios.get('http://localhost:3000/api/search?name=' + this.state.search,{
        //                 cancelToken: source.token
        //             })
        //             .then(res => {
        //                 this.setState({
        //                     searchResults: res.data.people,
        //                     loading: false
        //                 }, () => console.log(this.state.searchResults))
        //             })
        //             .catch(thrown => {
        //                 if(axios.isCancel(thrown)) {
        //                     console.log('Request canceled', thrown.message);
        //                 }
        //             })
        //         }
        //     })
        // }

        // if(this.state.loading == true){
        //     source.cancel('Operation canceled by the user.');
        //     this.setState({
        //         loading: false
        //     }, () => load())
        // }else{
        //     load()
        // }

    }

    render(){
        if(this.props.location.pathname == '/people'){
            return(
                    <Box>

                            <ThemeContext.Extend
                                value={{
                                    formField:{
                                        border:{
                                            color:'brand_2'
                                        },
                                        extend:{
                                            borderBottom: '2.5px solid #AD956E',
                                        }
                                    },
                                    textInput:{
                                        suggestions:{
                                            extend:{
                                                backgroundColor: '#AD956E'
                                            }
                                        }
                                    }
                                }}
                            >
                            <FormField

                            >

                                <TextInput
                                    focusIndicator={false}
                                    value={this.state.search}
                                    onChange={(e) => {
                                        this.setState({
                                            search: e.target.value
                                        }, () => this.handleSearch())
                                    }}
                                    ref={this.textInput}
                                    suggestions={this.state.searchResults}
                                    dropHeight='medium'
                                    onSelect={(res) => this.handleChoosedPerson(res.suggestion.person)}
                                />

                            </FormField>
                            </ThemeContext.Extend>

                    </Box>

            )
        }else{
            return(
                <Heading level={5}>
                    <NavLink
                        to="/people"
                        activeStyle={{'color': '#e90129'}}
                        style={{'fontWeight': 'bold', 'color': 'black', 'textDecoration': 'none'}}
                    >
                        Thành Viên
                    </NavLink>
                </Heading>
            )
        }
    }

}

const mapStateToProps = () => {
    return{

    }
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    choosePerson: (person) => dispatch(choosePerson(person))
});
const PeopleOrSearchWithRouter = withRouter(PeopleOrSearch)
export default connect( mapStateToProps, mapDispatchToProps)(PeopleOrSearchWithRouter);
