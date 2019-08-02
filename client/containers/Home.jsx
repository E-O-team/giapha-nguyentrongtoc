import React, { Component } from 'react';
import { Box, Button, Heading, Grommet, Text, Image, ResponsiveContext, Paragraph } from 'grommet';
import { Login } from 'grommet-icons';
import axios from 'axios';
import Discover from '../components/Discover';
import {withGetScreen} from 'react-getscreen'
class Home extends Component {

    render() {
        const Mobile = () => (
            <Box height='100vh'>
                <Box pad={{horizontal: 'large'}} gap='large' wrap={true}>
                    <Box elevation='large' background='#312C2C' pad='small' justify='center' align='center' width='medium' height='60px'><Heading margin='0px' size='32px' color='brand'>GIA TỘC PHẠM PHÚ</Heading></Box>
                    <Box elevation='large' background='brand_2' pad='small'><Paragraph size='xlarge' margin='0px'>Là một trang web gia phả về Tộc Phạm Cổ Mân.<br/>Lập gia phả là một truyền thống của dân tộc ta, cốt để con cháu biết tên tuổi </Paragraph></Box>
                </Box>
            </Box>
        )
        const Desktop = () => {
            return(
                <Box height='100vh'>
                    <Box pad={{horizontal: 'medium'}} gap='small' wrap={true}>
                        <Box elevation='large' background='#312C2C' pad='medium' width='medium' justify='center' align='center'><Heading margin='0px' size='30px' color='brand'>GIA TỘC PHẠM PHÚ</Heading></Box>
                        <Box elevation='large' background='brand_2' pad='medium' width='medium'><Paragraph  margin='0px'>Là một trang web gia phả về Tộc Phạm Cổ Mân. Lập gia phả là một truyền thống của dân tộc ta, cốt để con cháu biết tên tuổi </Paragraph></Box>
                    </Box>
                    {(this.props.isMobile()) && <h2>mobile</h2>}
                </Box>
            )
        }
        if (this.props.isMobile()) return <Mobile/>
        return <Desktop/>

    }

}




export default withGetScreen(Home);
