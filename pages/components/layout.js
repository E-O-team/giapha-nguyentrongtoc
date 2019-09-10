
import React, { Component } from 'react';
import Header               from './header/header.js';
import Footer               from './footer/footer';
import { withRouter }       from 'next/router';
import SideBar              from './sidebar/sidebar';

class Layout extends Component {
    render() {
        const LayoutThunk = ({children, route}) => {
            return(
                <div className='layout'>
                    {children}
                </div>
            )
            // if(route == '/'){
                // return(
                //     <div className='layout'>
                //         {children}
                //     </div>
                // )
            // }else{
            //     // render thêm sidebar nếu không phải trang home
            //     return(
            //         <div className="layout">
            //             <SideBar children={children}/>
            //         </div>
            //     )
            // }
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
