import { Component }            from 'react';

import Head                     from 'next/head';
import {
    MdSmartphone }      from 'react-icons/md';
import {
    FaUserAlt,
    FaRegAddressCard,
    FaPassport }        from 'react-icons/fa';
import './chi_style.less'
import axios from 'axios';
import PersonCard from './components/personCard';
const data=['trung', 'tuấn', 'hùng', 'dũng', 'mẫn', 'nga', 'hà', 'hải', 'kiên', 'thành', 'tiến', 'khải', 'toàn', 'thủy', 'trang', 'ngân']

export default class App extends Component {

    static async getInitialProps({query ,req }) {
        const res = await axios({
            url: '/api/branch/' + query.branch,
            method: 'GET',
        });
        return {
            people: res.data,
            branch: query.branch
        };
    }

    render() {
        const { people, branch } = this.props
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
                                    {people.map((person, i) => {
                                        return(
                                            <PersonCard key={i} person={person}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )




        // return(
        //     <div>
        //         <Head>
        //             <title>Nguyễn Trọng Tộc || Chi 1</title>
        //         </Head>
        //         <section
        //             className="about-section section-spacing bg-color1 wow fadeIn"
        //             data-wow-duration="1s"
        //         >
        //             <div className="container" style={{paddingBottom: "25px"}}>
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <div className="row">
        //                             <div className="col-md-10 m-auto">
                                        // <div className="section-title text-center margin-bottom-60">
                                        //     <h4>
                                        //         Một số thành viên trong chi 1
                                        //     </h4>
                                        //     <h5>giới thiệu về chi ... giới thiệu về chi ... giới thiệu về chi ...</h5>
                                        // </div>
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="col-md-6 col-lg-3">
                                        // <div className="testimonial-text text-center feature-box">
                                        //     <div className="testimonial-author-meta">
                                        //         <FaUserAlt className="more-info-icon" />
                                        //         <h5>Thành viên 1</h5>
                                        //     </div>
                                        // </div>
        //                             </div>
        //                             <div className="col-md-6 col-lg-3">
        //                                 <div className="testimonial-text text-center feature-box">
        //                                     <div className="testimonial-author-meta">
        //                                         <FaUserAlt className="more-info-icon" />
        //                                         <h5>Thành viên 2</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-6 col-lg-3">
        //                                 <div className="testimonial-text text-center feature-box">
        //                                     <div className="testimonial-author-meta">
        //                                         <FaUserAlt className="more-info-icon" />
        //                                         <h5>Thành viên 3</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-6 col-lg-3">
        //                                 <div className="testimonial-text text-center feature-box">
        //                                     <div className="testimonial-author-meta">
        //                                         <FaUserAlt className="more-info-icon" />
        //                                         <h5>Thành viên 4</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // )
    };
}
