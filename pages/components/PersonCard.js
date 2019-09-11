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
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.person || {}
        }
    }
    render() {
        return(
            <Link href="/person/[slug]" as={`/person/${this.state.person.slug}`}><a>
                <div className="hover-efect testimonial-text text-center feature-box">
                    <div className="testimonial-author-meta">
                        <FaUserAlt className="more-info-icon" />
                        <h5>{this.state.person.fullName}</h5>
                    </div>
                </div>
            </a></Link>
        )
    }

}
// const PersonCard = (props) => {
//     const { slug, fullName } = props.person
//     return(
//         <Link href="/person/[slug]" as={`/person/${slug}`}><a>
//             <div className="hover-efect testimonial-text text-center feature-box">
//                 <div className="testimonial-author-meta">
//                     <FaUserAlt className="more-info-icon" />
//                     <h5>{fullName}</h5>
//                 </div>
//             </div>
//         </a></Link>
//     )
// }

// PersonCard.PropTypes ={
//     person: PropTypes.object,
// }

export default PersonCard
