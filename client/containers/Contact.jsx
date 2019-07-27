import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
class Contact extends Component {

    render() {
        return (
            <Box pad='medium' height='100vh' align='center' justify='center'>
                <Heading level={3}>Mọi thông tin và phản hồi vui lòng liên lạc</Heading>
                <Heading level={5}>Họ và tên: Phạm Quang Mẫn</Heading>
                <Heading level={5}>Email: quangman1404@gmail.com</Heading>
                <Heading level={5}>Số điện thoại: 0905020599</Heading>
            </Box>
        );
    }

}

export default Contact;
