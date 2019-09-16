import React, { Component } from 'react';

import Head                 from 'next/head';

import {
    FaUserAlt,
}                           from 'react-icons/fa';
import '../chi_style.less';
import axios                from 'axios';
import Link                 from 'next/link';
import './personCard_style.less'
import PropTypes from 'prop-types';
import { withRouter }       from 'next/router';

const RenderImage = ({person}) => {
    const { image, sex } = person
    if(image){
        return <img className="personPageImage" src={image.secure_url}/>
    }else if (sex == "nữ") {
        return <img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
    }else {
        return <img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
    }
}

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.person || {},
            partner: null,
            loading: true
        }
        if(this.props.router.route == '/person/[slug]'){
            this.checkPartner()
        }
    }

    checkPartner = () => {
        const {partner} = this.state.person
        if(typeof partner == 'string' ){
            axios.get('https://giapha-nguyentrongtoc.herokuapp.com/api/person-id/' + partner)
            .then(res => this.setState({
                partner: res.data,
                loading: false,
            }))
            .catch(err => console.log(err))
        }else if (typeof partner == 'object') {
            axios.get('https://giapha-nguyentrongtoc.herokuapp.com/api/person-id/' + partner._id)
            .then(res => this.setState({
                partner: res.data,
                loading: false,
            }))
            .catch(err => console.log(err))
        }
    }

    render() {
        if(this.state.partner !== undefined && this.props.Phado == true){
            // return(
            //     <Link href="/person/[slug]" as={`/person/${this.state.person.slug}`}><a>
            //         <div className="couplediv">
            //             <div align='center' justify='center' className="persondiv" >
            //                 {(this.state.person.sex == "nữ") ?
            //                     <div className="person-card person-img-container-female hover-efect text-center">
            //                         {(this.state.person.image)?
            //                             <img className="person-icon-image" src={this.state.person.image.secure_url}/>
            //                             :
            //                             <img className="person-icon-image" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
            //
            //                         }
            //                         <h6>{this.state.person.fullName}</h6>
            //                     </div>
            //                     :
            //                     <div className="person-card person-img-container-male hover-efect text-center">
            //                         {(this.state.person.image)?
            //                             <img className="person-icon-image" src={this.state.person.image.secure_url}/>
            //                             :
            //                             <img className="person-icon-image" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
            //                         }
            //                         <h6>{this.state.person.fullName}</h6>
            //                     </div>
            //                 }
            //             </div>
            //             {(this.state.partner !== null) &&
            //                 <div align='center' justify='center' className="persondiv">
            //                     {(this.state.partner.sex == "nữ") ?
            //                         <div className="person-card person-img-container-female hover-efect text-center">
            //                             {(this.state.partner.image)?
            //                                 <img className="person-icon-image" src={this.state.partner.image.secure_url}/>
            //                                 :
            //                                 <img className="person-icon-image" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
            //                             }
            //                             <h6>{this.state.partner.fullName}</h6>
            //                         </div>
            //                         :
            //                         <div className="person-card person-img-container-male hover-efect text-center">
            //                             {(this.state.partner.image)?
            //                                 <img className="person-icon-image" src={this.state.partner.image.secure_url}/>
            //                                 :
            //                                 <img className="person-icon-image" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
            //                             }
            //                             <h6>{this.state.partner.fullName}</h6>
            //                         </div>
            //                     }
            //                 </div>
            //             }
            //         </div>
            //     </a></Link>
            // )
            return(
                <Link href="/person/[slug]" as={`/person/${this.state.person.slug}`}><a>
                        {(this.state.person.sex == "nữ") ?
                            <div className="person-card person-img-container-female hover-efect text-center">
                                <h6>{this.state.person.fullName}</h6>
                            </div>
                            :
                            <div className="person-card person-img-container-male hover-efect text-center">
                                <h6>{this.state.person.fullName}</h6>
                            </div>
                        }
                </a></Link>
            )
        }else{
            return(
                <Link href="/person/[slug]" as={`/person/${this.state.person.slug}`}><a>
                        {(this.state.person.sex == "nữ") ?
                            <div className="listCard hover-efect text-center feature-box">
                                {(this.state.person.image)?
                                    <img className="person-icon-image" src={this.state.person.image.secure_url}/>
                                    :
                                    <FaUserAlt className="female person-icon-image" />
                                }
                                <h6 style={{color: "black"}}>{this.state.person.fullName}</h6>
                            </div>
                            :
                            <div className="listCard hover-efect text-center feature-box">
                                {(this.state.person.image)?
                                    <img className="person-icon-image" src={this.state.person.image.secure_url}/>
                                    :
                                    <FaUserAlt className="male person-icon-image" />
                                }
                                <h6 style={{color: "black"}}>{this.state.person.fullName}</h6>
                            </div>
                        }
                </a></Link>
            )
        }
    }

}
export default withRouter(PersonCard)
