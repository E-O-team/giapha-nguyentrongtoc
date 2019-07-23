import React from 'react';
import { Route, Link, HashRouter as Router, Redirect } from 'react-router-dom'
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext } from 'grommet';
import Home from '../containers/Home';
import Person from '../containers/Person';
import People from '../containers/People';
import Contact from '../containers/Contact';
import { Login } from 'grommet-icons';
import { NavLink } from 'react-router-dom'
const logo = 'https://res-console.cloudinary.com/giaphatocphamphu/thumbnails/v1/image/upload/v1563458760/bG9nbw==/drilldown'
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
        }
    },
};

const AppBar = (props) => (
    <Box
        direction="row"
        align="center"
        background='brand'
        elevation='medium'
        pad={{horizontal: 'medium'}}
        style={{ zIndex: '1' }}
        {...props}
    />
)


export default class AppRouter extends React.Component{

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
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


    render(){
        return(
            <Router>
                <Grommet theme={theme} full>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box background='brand'>
                                <AppBar>
                                    <Box style={{'flex': '1 1 300px'}} align='start'>
                                        <Heading level={4}>
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
                                        <Heading level={4}>
                                            <NavLink
                                                to="/people"
                                                activeStyle={{'color': '#e90129'}}
                                                style={{'fontWeight': 'bold', 'color': 'black', 'textDecoration': 'none'}}
                                            >
                                                Thành Viên
                                            </NavLink>
                                        </Heading>
                                    </Box>
                                    <Box style={{'flex': '1 1 300px'}} align='end'>
                                        <Heading level={4}>
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
