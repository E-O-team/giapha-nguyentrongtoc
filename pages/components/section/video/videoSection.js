import React, { Component } from 'react';

class VideoSection extends Component {
    render() {
        return (
            <section className="Video-section bg-color1 section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-thumbnails">
                                <img src="/static/common/images/video-bg.jpg" alt="video image" />
                                <div className="video-thumbnails-img js-modal-btn" data-video-id="7TUOI23spt0">
                                    <img src="/static/common/images/video-play-logo.png" alt="video play logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn"  data-wow-duration="1s">
                            <div className="section-title margin-bottom-30">
                                <h4>Kết quả đạt được</h4>
                                <p>Sự tin tưởng của các bạn làm nên thành công của chúng tôi.</p>
                            </div>
                            <ul className="section-list list-inline">
                                <li><b>31,377</b> chuyên gia đã đăng ký.</li>
                                <li><b>1.512.215</b> Yêu cầu tư vấn sản phẩm tài chính</li>
                                <li><b>2.123.196</b> Lượt truy cập hàng tháng</li>
                                <li><b>9.731</b> Bài chia sẻ kinh nghiệm, bí quyết tư vấn</li>
                                <li><b>1.342</b> Sản phẩm tài chính được so sánh</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoSection;