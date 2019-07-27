import React, { Component } from 'react';
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext, Paragraph } from 'grommet';
import { Login } from 'grommet-icons';
import axios from 'axios';
import Discover from '../components/Discover';

class Home extends Component {

    render() {

            return(
                <Box height='100vh'>
                    <Box pad='medium' align='center' justify='center'>
                        <Heading level={4}>Gia Tộc Phạm Phú</Heading>
                        <Paragraph>Là một trang web gia phả về Tộc Phạm Cổ Mân.Lập gia phả là một truyền thống của dân tộc ta, cốt để con cháu biết tên tuổi </Paragraph>
                    </Box>
                </Box>
            )

    }

}

export default Home;
