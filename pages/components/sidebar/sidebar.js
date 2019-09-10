import React, {Component} from 'react';
import axios              from 'axios';
import Link               from 'next/link'
import { withRouter }     from 'next/router';
import Router             from 'next/router';
import * as moment        from 'moment';
class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            posts: [],
            route: "",
            routeName: "",
        }
    }


    getPageTitle = () => {
        switch (this.props.router.route) {
            case "/products":
                this.setState({
                    routeName: "Sản phẩm vay",
                    route: "/products"
                })
                break;
            case "/share":
                this.setState({
                    routeName: "Chia sẻ kinh nghiệm",
                    route: "/share"
                })
                break;
            case "/share/[slug]":
                this.setState({
                    routeName: "Chia sẻ kinh nghiệm",
                    route: "/share"
                })
                break;
            case "/contact":
                this.setState({
                    routeName: "Liên hệ",
                    route: "/contact"
                })
                break;
            case "/terms":
                this.setState({
                    routeName: "Điều khoản",
                    route: "/terms"
                })
                break;
            case "/register":
                this.setState({
                    routeName: "Đăng kí vay",
                    route: "/register"
                })
                break;
            default:
                return null
        }
    }

    componentDidMount() {
        this.getPageTitle()
        axios.all([
            axios.get('/api/categories'),
            axios.get('/api/recent-posts')
        ])
        .then(axios.spread((categoriesRes, recentRes) => {
            this.setState({
                categories: categoriesRes.data,
                posts: recentRes.data
            })
        }))
        .catch(err => console.log(err))
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <section className="page-title-section section-spacing bg-color1">
                    <div className="container">
                        <div className="page-title-container">
                            <h1>{this.state.routeName}</h1>
                            <nav className="finance-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Trang chủ</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link href={this.state.route}><a>{this.state.routeName}</a></Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>

                <section className="service-details-section section-spacing bg-color1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 wow fadeIn" data-wow-duration="1s">
                                {children}
                            </div>
                            <div className="col-md-5 col-lg-4">
                                <div className="right-sidebar">
                                    <div className="sidebar-widget">
                                        <div className="form-group" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                            <button style={{width: "100%"}} type="submit" onClick={() => Router.push("https://mazilla.vn/page/help/")} className="btn-style-1 btn btn-primary">Cách thức hoạt động</button>
                                            <button style={{marginTop: "10%", width: "100%"}} type="submit" onClick={() => Router.push("/register")} className="btn-style-1 btn btn-primary">Đăng kí vay tiền</button>
                                        </div>
                                    </div>
                                    <div className="sidebar-recent sidebar-widget">
                                        <div className="sidebar-title">
                                            <h4>Bài đăng gần đây</h4>
                                        </div>
                                        {this.state.posts.map((post, i) => {
                                            const { title, publishedDate, slug } = post
                                            return(
                                                <div className="recent-container" key={i}>
                                                    <div className="recent-content">
                                                        <Link href="/share/[slug]" as={`/share/${slug}`}><a >{title}</a></Link>
                                                        <ul className="recent-meta list-inline">
                                                            <li className="list-inline-item">{moment(publishedDate).format("DD/MM/YYYY")}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {
                                    /*<div className="sidebar-title">
                                        <h4>Chuyên mục</h4>
                                    </div>
                                    <ul className="sidebar-category sidebar-widget list-group">
                                        {
                                            this.state.categories.map((category, i) => {
                                                return (<li className="list-group-item d-flex" key={i}>
                                                    <a href="#">{category.name}</a>
                                                </li>)
                                            })
                                        }
                                    </ul>*/
                                    }
                                    <div className="sidebar-widget sidebar-call-action">
                                        <img src="/static/images/quotes-logo.png" alt="quảng cáo"/>
                                        <a href="#">Đây là Quảng Cáo</a>
                                        <h3>Bấm vào đây để được iPad miễn phí!!!</h3>
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
export default withRouter(SideBar)
