import React, { Component } from "react";
import {
    FaClock,
    FaHandHoldingUsd,
    FaMapMarkedAlt
}        from 'react-icons/fa';
import './featureSection_style.less'
class FeatureSection extends Component {
    render() {
        return (
            <section
                className="feature-section bg-color3 section-spacing wow fadeIn"
                data-wow-duration="1s"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="section-title margin-bottom-60 text-center">
                                <h3>Các hoạt động dòng họ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-box">
                                <div className="feature-images-container">
                                    <img className="feature-images" src="https://hophamvietnam.org/wp-content/uploads/2019/08/68515479_904402983293060_4080532863244566528_n.jpg"/>
                                </div>
                                <div className="feature-details">
                                    <h4>
                                        Thông tin về hoạt động 1
                                    </h4>
                                    <p>
                                        Một số thông tin về hoạt động 1, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ...., Một số thông tin về hoạt động 1, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ...., Một số thông tin về hoạt động 1, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ....,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-box">
                                <div className="feature-images-container">
                                    <img className="feature-images" src="https://hophamvietnam.org/wp-content/uploads/2019/08/69298189_904401856626506_3994581092953751552_n.jpg"/>
                                </div>
                                <div className="feature-details">
                                    <h4>
                                        Thông tin về hoạt động 2
                                    </h4>
                                    <p>
                                        Một số thông tin về hoạt động 2, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ...., Một số thông tin về hoạt động 2, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ....,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-box">
                                <div className="feature-images-container">
                                    <img className="feature-images" src="https://hophamvietnam.org/wp-content/uploads/2019/08/68674585_904402949959730_8022795211514052608_n.jpg"/>
                                </div>
                                <div className="feature-details">
                                    <h4>
                                        Thông tin về hoạt động 3
                                    </h4>
                                    <p>
                                        Một số thông tin về hoạt động 3, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ...., Một số thông tin về hoạt động 3, tổ chức vào ngày ..., nhân dịp..., ăn mừng các cháu ....,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;
