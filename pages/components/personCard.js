import React, { Component } from 'react';

import Head                     from 'next/head';
import {
    MdSmartphone }      from 'react-icons/md';
import {
    FaUserAlt,
    FaRegAddressCard,
    FaPassport }        from 'react-icons/fa';
import axios from 'axios';
import './personCard_style.less'
import Link                 from 'next/link'
import Router               from 'next/router'
class PersonCard extends Component {

    // handleClick = (slug) => {
    //     Router.push({
    //         pathname: "/person/" + slug,
    //     })
    // }

    render() {
        const { fullName, slug } = this.props.person
        return(
            <Link href="/person/[slug]" as={`/person/${slug}`}><a>
                <div className="hover-efect testimonial-text text-center feature-box">
                    <div className="testimonial-author-meta">
                        <FaUserAlt className="more-info-icon" />
                        <h5>{fullName}</h5>
                    </div>
                </div>
            </a></Link>

        )
    }

}

export default PersonCard;
