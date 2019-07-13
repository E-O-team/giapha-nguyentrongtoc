import React, { Component } from 'react';
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext } from 'grommet';
import { Login } from 'grommet-icons';

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
        background="brand"
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        elevation='medium'
        style={{zIndex: '1'}}
        {...props}
    />
)

class Home extends Component {
    render() {
        return(
            <h1>home bi1tc2h!</h1>
        )
    }

}

export default Home;
