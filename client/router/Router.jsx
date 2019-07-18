import React from 'react';
import { Route, Link, HashRouter as Router, Redirect } from 'react-router-dom'
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext } from 'grommet';
import Home from '../containers/Home';
import Person from '../containers/Person';
import People from '../containers/People';
import { Login } from 'grommet-icons';
import { NavLink } from 'react-router-dom'
const theme = {
    global: {
        colors:{
            brand: '#f5d49e'
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

const AppBar = (props) => (
    <Box
        tag='header'
        direction="row"
        align="center"
        justify="between"
        background="#d5dcec"
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        style={{zIndex: '1'}}
        {...props}
    />
)


export default class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Grommet theme={theme} full>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box>
                                <AppBar>
                                    <Redirect to="/people"/>
                                    <NavLink to="/people">people</NavLink>
                                    <NavLink to="/">Home</NavLink>
                                    <Button icon={<Login />} onClick={() => {}} />
                                </AppBar>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/people" component={People}/>
                                <Route path="/people/:id" component={Person}/>
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </Router>
        )
    }
}
