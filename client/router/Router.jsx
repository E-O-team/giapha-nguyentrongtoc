import React, {useEffect, createRef} from 'react';
import { Route, Link, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext, Form, FormField, TextInput, Drop } from 'grommet';
import { Search } from 'grommet-icons';
import Home from '../containers/Home';
import Person from '../containers/Person';
import People from '../containers/People';
import Contact from '../containers/Contact';
import { Login } from 'grommet-icons';
import { NavLink } from 'react-router-dom'
import PeopleOrSearchWithRouter from '../components/PeopleOrSearchWithRouter';
import axios from 'axios';
const logo = 'https://res-console.cloudinary.com/giaphatocphamphu/thumbnails/v1/image/upload/v1563458760/bG9nbw==/drilldown'
const Background = 'https://res.cloudinary.com/giaphatocphamphu/image/upload/v1563523660/phadobg.png'
const theme = {
    global: {
        colors:{
            background: '#fafbf6',
            accent_4: '#e90129',
            brand: '#F5D49E',
            brand_2: '#BB925E',
            brand_3: '#D4A972',
            accent_1: '#E493A3',
            accent_2: '#F5F19E',
            blend: '#AD956E',
            text:{
                dark: 'black',
            },
            border: '#e1e1dd',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
        breakpoints: {
            small:{
                value: '768',
                borderSize: {
                    small: '1.5px',
                },
            },
            large:{
                value: '1200',
                borderSize:{
                    small: '2px',
                }
            }
        },
        // focus:{
        //     border:{
        //         color:'brand_2'
        //     }
        // },
        // control:{
        //     border:{
        //         color: 'brand_2'
        //     }
        // },
        // formField:{
        //     border:{
        //         color: 'brand_2'
        //     },
        //     focus:{
        //         border:{
        //             color: 'blend'
        //         }
        //     }
        // },
    },
};

const AppBar = (props) => {
    return(
        <Box
            direction="row"
            align="center"
            pad={{horizontal: 'medium'}}
            style={{ zIndex: '1' }}
            {...props}
        />
    )
}



export default class AppRouter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            search: '',
            searchResults: [],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth + "px", height: window.innerHeight +'px' });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.search !== nextState.search){
            return false
        }
    }

    render(){



        return(
            <Router>
                <Grommet theme={theme}>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box background='brand'
                                style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: '150% 120%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundAttachment: 'fixed',

                                }}
                            >
                                <AppBar >
                                    <Box style={{'flex': '1 1 300px'}} align='start'>
                                        <Heading level={5}>
                                            <NavLink
                                                exact
                                                to="/"
                                                activeStyle={{'color': '#e90129'}}
                                                style={{'fontWeight': 'bold', 'color': 'black', 'textDecoration': 'none'}}
                                            >
                                                GIA TỘC PHẠM PHÚ
                                            </NavLink>
                                        </Heading>
                                    </Box>
                                    <Box style={{'flex': '1 1 300px'}} align='center'>
                                        <PeopleOrSearchWithRouter/>

                                    </Box>
                                    <Box style={{'flex': '1 1 300px'}} align='end'>
                                        <Heading level={5}>
                                            <NavLink
                                                to="/contact"
                                                activeStyle={{'color': '#e90129'}}
                                                style={{'fontWeight': 'bold', 'color': 'black', 'textDecoration': 'none'}}
                                            >
                                                Liên Hệ
                                            </NavLink>
                                        </Heading>
                                    </Box>
                                </AppBar>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/people" component={People}/>
                                <Route path="/people/:id" component={Person}/>
                                <Route path="/contact" component={Contact}/>
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </Router>
        )
    }
}
