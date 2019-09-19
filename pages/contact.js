import React, { Component }     from 'react';
import Head                     from 'next/head';
import {
    FaServer,
    FaPage4,
    FaRegCalendarTimes,
    FaRegHandshake,
    FaFlag,
    FaExclamationCircle,
    FaUserAlt
}                               from 'react-icons/fa';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>24hvay || Liên Hệ</title>
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
                                                Thông tin liên hệ
                                            </h4>
                                            <h5>Trang Web này được lập với một mục đích giúp cho những người mang dòng họ Nguyễn Trọng tại Xã Cẩm Duệ, Huyện Cẩm Xuyên – Hà Tĩnh hoặc có gốc tích với dòng họ Nguyễn Trọng tại đây có thể truy cập để tìm hiểu, có được những thông tin tối thiểu về sự ra đời, nguồn gốc của dòng họ mình cùng các mối liên hệ với các chi, ngành khác trong dòng tộc.<br/><br/> Trong thời gian tới trang Web này cũng sẽ tập hợp và đăng tải danh sách những người con thành đạt của dòng họ Nguyễn Trọng để con, cháu trong dòng họ lấy đó làm gương mà gắng sức tu dưỡng, học tập, công tác, làm rạng danh thêm cho dòng họ Nguyễn Trọng. Mọi thư từ liên lạc, thông tin, tư liệu, bài viết xin vui lòng gửi về</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="testimonial-text text-center">
                                            <div className="testimonial-author-meta">
                                                <FaUserAlt className="more-info-icon" />
                                                <h5>Tộc Trưởng Chi 4</h5>
                                                <h6>Ông Nguyễn Trọng Tài</h6>
                                                <p>DĐ 0359590370</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="testimonial-text text-center">
                                            <div className="testimonial-author-meta">
                                                <FaUserAlt className="more-info-icon" />
                                                <h5>Người cập nhật thông tin</h5>
                                                <h6>Ông Nguyễn Trọng Việt</h6>
                                                <p> DĐ 0918051897, Email: Nguyentrongviet1980@gmail.com </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{margin: "25px"}} className="row">
                                    <div className="col-md-10 m-auto">
                                        <div className="section-title text-center margin-bottom-60">
                                            <h6>
                                                Xin Trân Trọng Cảm Ơn!
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}
