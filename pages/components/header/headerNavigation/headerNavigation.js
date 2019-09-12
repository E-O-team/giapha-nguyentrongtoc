import React, { Component } from 'react';
import Link                 from 'next/link'
class HeaderNavigation extends Component {
    render() {
        return (
            <div className="themeix-header-navigation bg-color">
                <div className="container">
                    <div className="d-flex justify-content-between themeix">
                        <div className="themeix-logo">

                                <a className="themeix-brand" href="/">
                                    <h3 style={{color: "#2EA1B1", textDecoration: "underline"}}>Nguyễn Trọng Tộc</h3>
                                </a>

                        </div>
                        <nav className="themeix-menu">
                            <ul id="navigation-menu" className="slimmenu">
                                <li><a href="/">Trang chủ</a></li>
                                {/*<li>
                                    <Link href="/products"><a>Sản phẩm vay</a></Link>
                                    <ul>
                                        <li><Link href="/products"><a>Vay mua đất, mua nhà</a></Link></li>
                                        <li><Link href="/products"><a>Vay xây dựng nhà</a></Link></li>
                                        <li><Link href="/products"><a>Vay thế chấp tiêu dùng</a></Link></li>
                                        <li><Link href="/products"><a>Vay tín chấp</a></Link></li>
                                        <li><Link href="/products"><a>Phát hành thẻ tín dụng Visa</a></Link></li>
                                        <li><Link href="/products"><a>Vay bộ đội, công an, bác sỹ</a></Link></li>
                                        <li><Link href="/products"><a>Vay theo hóa đơn điện nước</a></Link></li>
                                        <li><Link href="/products"><a>Vay theo lương</a></Link></li>
                                    </ul>
                                </li>*/}
                                <li><Link href="/chi?branch=1"><a>Chi 1</a></Link></li>
                                <li><Link href="/chi?branch=2"><a>Chi 2</a></Link></li>
                                <li><Link href="/chi?branch=3"><a>Chi 3</a></Link></li>
                                <li><Link href="/chi?branch=4"><a>Chi 4</a></Link></li>
                                <li><Link href="/chi5"><a>Chi 5</a></Link></li>
                                <li><Link href="/contact"><a>Liên Hệ</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderNavigation;
