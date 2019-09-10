import React, { Component } from "react";

import {
    MdSmartphone }      from 'react-icons/md';
import {
    FaUserAlt,
    FaRegAddressCard,
    FaPassport }        from 'react-icons/fa';

class MethodSection extends Component {
    render() {
        return (
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
                                            Một số thành viên trong gia đình
                                        </h4>
                                        <h5>Các trưởng phái, chi,...</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="testimonial-text text-center">
                                        <div className="testimonial-author-meta">
                                            <FaUserAlt className="more-info-icon" />
                                            <h5>Thành viên 1</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="testimonial-text text-center">
                                        <div className="testimonial-author-meta">
                                            <FaUserAlt className="more-info-icon" />
                                            <h5>Thành viên 2</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="testimonial-text text-center">
                                        <div className="testimonial-author-meta">
                                            <FaUserAlt className="more-info-icon" />
                                            <h5>Thành viên 3</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="testimonial-text text-center">
                                        <div className="testimonial-author-meta">
                                            <FaUserAlt className="more-info-icon" />
                                            <h5>Thành viên 4</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MethodSection;
