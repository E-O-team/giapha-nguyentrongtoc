import { Component }            from 'react';

import Head                     from 'next/head';
import {
    MdSmartphone }      from 'react-icons/md';
import {
    FaUserAlt,
    FaRegAddressCard,
    FaPassport }        from 'react-icons/fa';
import './chi_style.less';
import axios from 'axios';
import Link                 from 'next/link';
import './personCard_style.less'
export default class App extends Component {

    static async getInitialProps({query ,req }) {
        const res = await axios({
            url: '/api/branch/' + query.branch || 1,
            method: 'GET',
        });
        return {
            people: res.data,
            branch: query.branch
        };
    }

    render() {
        const { branch } = this.props
        return(
            <div>
                <Head>
                    <title>Nguyễn Trọng Tộc || Chi {branch}</title>
                </Head>
                <section
                    className="about-section section-spacing bg-color1 wow fadeIn"
                    data-wow-duration="1s"
                >
                    <div className="container" style={{paddingBottom: "25px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-10 m-auto">
                                        <div className="section-title text-center margin-bottom-60">
                                            <h4>
                                                Một số thành viên trong chi {branch}
                                            </h4>
                                            <h5>giới thiệu về chi ... giới thiệu về chi ... giới thiệu về chi ...</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-container">
                                    {this.props.people.map((person, i) => {
                                        const { fullName, slug } = person
                                        return(
                                            <Link key={i} href="/person/[slug]" as={`/person/${slug}`}><a>
                                                <div className="hover-efect testimonial-text text-center feature-box">
                                                    <div className="testimonial-author-meta">
                                                        <FaUserAlt className="more-info-icon" />
                                                        <h5>{fullName}</h5>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}
