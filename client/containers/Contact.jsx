import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import {withGetScreen} from 'react-getscreen'
import { FormNextLink, UserManager, MailOption, Phone } from 'grommet-icons';
import './styles/Contact.css';
class Contact extends Component {

    render() {
        const Mobile = () => (
            <Box height='100vh' justify='start' align='center'>
                <Box pad={{horizontal: 'large'}} gap='large'>
                    <Box direction='row' align='center' width='medium' elevation='large' background='link'><FormNextLink size='28px'/><Heading size='24px' margin='xsmall'><a style={{textDecoration: 'none', color: '#444444'}} href='https://docs.google.com/forms/d/e/1FAIpQLScYin2kzRf4L-Io3fM1fTX4DdDteli9axx7WHoLc0jqP0h6BA/viewform?usp=sf_link'> Điền đơn nhập liệu online</a></Heading></Box>
                    <Box width='medium' gap='xsmall' background='brand_2' elevation='large'>
                        <Heading level={3} margin='xsmall'>Để biết thêm thông tin chi tiết hoặc phản hồi, vui lòng liên lạc</Heading>
                        <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                            <Box direction='row' align='center' gap='2px'>
                                <UserManager color='#444444'/><Heading size='15px' margin={{vertical: '10px'}}>Họ và tên:</Heading>
                            </Box>
                            <Box background='link' margin={{right: '6px'}} >
                                <Heading size='15px' margin={{horizontal: '6px', vertical: 'none'}}>Phạm Quang Mẫn</Heading>
                            </Box>
                        </Box>
                        <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                            <Box direction='row' align='center' gap='2px'>
                                <MailOption color='#444444'/><Heading size='15px' margin={{vertical: '10px'}}>Email:</Heading>
                            </Box>
                            <Box background='link' margin={{right: '6px'}} >
                                <Heading size='15px' margin={{horizontal: '6px', vertical: 'none'}}>quangman1404@gmail.com</Heading>
                            </Box>
                        </Box>
                        <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                            <Box direction='row' align='center' gap='2px'>
                                <Phone color='#444444'/><Heading size='15px' margin={{vertical: '10px'}}>Số điện thoại:</Heading>
                            </Box>
                            <Box background='link' margin={{right: '6px'}} >
                                <Heading size='15px' margin={{horizontal: '6px', vertical: 'none'}}>0905020599</Heading>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
        const Desktop = () => {
            return(
                <Box height='100vh' justify='start'>
                    <Box pad='medium' gap='small'>
                        <Box width='medium' elevation='large' background='blend'><Heading className='Link' level={5} margin='xsmall'><a style={{textDecoration: 'none', color: 'black'}} href='https://docs.google.com/forms/d/e/1FAIpQLScYin2kzRf4L-Io3fM1fTX4DdDteli9axx7WHoLc0jqP0h6BA/viewform?usp=sf_link'> Nhấp vào đây để điền đơn nhập liệu online</a></Heading></Box>
                        <Box width='medium' gap='xsmall' background='brand_2' elevation='large'>
                            <Heading level={3} margin='xsmall'>Để biết thêm thông tin chi tiết hoặc phản hồi, vui lòng liên lạc</Heading>
                            <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                                <Box direction='row' align='center' gap='2px'>
                                    <UserManager color='#444444'/><Heading level={4} margin={{vertical: '15px'}}>Họ và tên:</Heading>
                                </Box>
                                <Box background='link' margin={{right: '6px'}} >
                                    <Heading level={5} margin={{horizontal: '6px', vertical: 'none'}}>Phạm Quang Mẫn</Heading>
                                </Box>
                            </Box>
                            <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                                <Box direction='row' align='center' gap='2px'>
                                    <MailOption color='#444444'/><Heading level={4} margin={{vertical: '15px'}}>Email:</Heading>
                                </Box>
                                <Box background='link' margin={{right: '6px'}} >
                                    <Heading level={5} margin={{horizontal: '6px', vertical: 'none'}}>quangman1404@gmail.com</Heading>
                                </Box>
                            </Box>
                            <Box direction='row' justify='between' align='center' margin={{left: '6px'}}>
                                <Box direction='row' align='center' gap='2px'>
                                    <Phone color='#444444'/><Heading level={4} margin={{vertical: '15px'}}>Số điện thoại:</Heading>
                                </Box>
                                <Box background='link' margin={{right: '6px'}} >
                                    <Heading level={5} margin={{horizontal: '6px', vertical: 'none'}}>0905020599</Heading>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )
        }
        if (this.props.isMobile()) return <Mobile/>
        return <Desktop/>
    }

}

export default withGetScreen(Contact);
