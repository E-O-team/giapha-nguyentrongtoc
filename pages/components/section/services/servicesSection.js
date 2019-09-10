import React, { Component } from 'react';
import {
    FaServer,
    FaPage4,
    FaRegCalendarTimes,
    FaRegHandshake,
    FaFlag,
    FaExclamationCircle
}        from 'react-icons/fa';

class ServicesSection extends Component {
    render() {
        return (
            <section style={{paddingBottom: "20px"}} className="services-section bg-color3 section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="section-title margin-bottom-60 text-center">
                                <h4>Một số thông tin chi tiết về tộc</h4>
                                <p>tiêu đề phụ điền tại đây</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="choose-us-container">
                                <div className="choose-us-row">
                                    <div className="choose-us-logo">
                                        <FaRegCalendarTimes alt="choose logo"/>
                                    </div>
                                    <div className="choose-us-content">
                                        <h4>Lịch sử lâu đời</h4>
                                        <p>Đời một của tộc là ông Nguyễn ... sinh năm ... cự tại ...</p>
                                    </div>
                                </div>
                                <div className="choose-us-row">
                                    <div className="choose-us-logo">
                                        <FaPage4 alt="choose logo"/>
                                    </div>
                                    <div className="choose-us-content">
                                        <h4>Gồm 4 chi</h4>
                                        <p>Giới thiệu ngắn gọn về các chi trong tộc</p>
                                    </div>
                                </div>
                                <div className="choose-us-row">
                                    <div className="choose-us-logo">
                                        <FaRegHandshake alt="choose logo"/>
                                    </div>
                                    <div className="choose-us-content">
                                        <h4>Lý do thành lập trang</h4>
                                        <p>Giới thiệu ngắn gọn về lý do thành lập trang</p>
                                    </div>
                                </div>
                                <div className="choose-us-row">
                                    <div className="choose-us-logo">
                                        <FaServer alt="choose logo"/>
                                    </div>
                                    <div className="choose-us-content">
                                        <h4>Cách thức hoạt động?</h4>
                                        <p>Trang web sẽ luôn cập nhập thông tin của tộc ta, để giữ gìn ...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="faq-accordion">
                                <div className="faq-card card">
                                    <div className="card-header">
                                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                                            <FaFlag/> Cách sử dụng?
                                        </button>
                                        <div className="card-body">
                                            Sử dụng trang web này để tìm hiểu thông tin về tộc cũng như tra cứu cây gia phả của tộc,...
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-card card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                            <FaExclamationCircle/> Các thành viên cần chú ý!
                                        </button>
                                        <div className="card-body">
                                            Điền thêm nội dung tại đây
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

export default ServicesSection;
