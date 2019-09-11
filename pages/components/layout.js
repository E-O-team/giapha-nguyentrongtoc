
import React, { Component } from 'react';
import Header               from './header/header.js';
import Footer               from './footer/footer';
import { withRouter }       from 'next/router';

class Layout extends Component {
    render() {
        const LayoutThunk = ({children, route}) => {
            return(
                <div className='layout'>
                    {children}
                </div>
            )
        }
        const { children } = this.props;
        return(
            <div>
                <Header/>
                <LayoutThunk children={children} route={this.props.router.route}/>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Layout)
