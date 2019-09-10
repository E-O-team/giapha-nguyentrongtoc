import {useRouter}          from 'next/router'
import React, {Component}   from 'react';
import {withRouter}         from 'next/router';
import axios                from 'axios';
import Link                 from 'next/link'
import Router               from 'next/router';
import Head                 from 'next/head';
import {
    FaServer,
    FaPage4,
    FaRegCalendarTimes,
    FaRegHandshake,
    FaFlag,
    FaExclamationCircle
}        from 'react-icons/fa';
import "./person_style.less"
const RenderImage = ({person}) => {
    const { image, sex } = person
    if(image){
        return <img className="personPageImage" src={image.secure_url}/>
    }else if (sex == "nữ") {
        return <img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199104/iplgjeykuctemjmcqtfo.jpg"/>
    }else {
        return <img className="personPageImage" src="https://res.cloudinary.com/giaphatocphamphu/image/upload/v1530199129/jhl4nt2qd4txvwt3h7y0.jpg"/>
    }
}



class Person extends Component {
    static async getInitialProps({req, query}) {
        return {
            // person: res.data,
            slug: query.slug
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            person: {},
            parent: {},
            partner: {},
        }
    }

    componentDidMount() {
        console.log(this.props.slug);
        axios.get("/api/person/" + this.props.slug)
        .then(res => this.setState({person: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const { fullName, sex, birth, generation, parent, information, partner } = this.state.person
        return(
            <div>
                <Head>
                    <title>24hvay || {fullName}</title>
                    <meta property="og:title"       content={fullName}/>
                    <meta property="og:site_name"   content="Nguyễn Trọng Tộc"/>
                </Head>
                <section className="services-section bg-color3 section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="choose-us-container" style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                    <RenderImage person={this.state.person}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-accordion">
                                    <div className="faq-card card">
                                        <div className="card-header">
                                            <h3>{fullName}</h3>
                                            <div className="card-body">
                                                <p>Họ và tên: <b>{fullName}</b></p>
                                                <p>Giới tính: <b>{sex}</b></p>
                                                <p>Ngày sinh: <b>{birth}</b></p>
                                                <p>Đời: <b>{generation}</b></p>
                                                {parent && <div key={parent._id}><p key={parent._id}>Con ông: <Link href="/person/[slug]" as={`/person/${parent.slug}`}><a><b style={{ 'cursor': 'pointer'}} >{parent.fullName}</b></a></Link></p></div>}
                                                {partner && <div key={partner._id}><p>Hôn nhân: <Link href="/person/[slug]" as={`/person/${partner.slug}`}><a><b style={{'cursor': 'pointer'}}>{partner.fullName}</b></a></Link></p></div>}
                                                <p>Thông tin: </p>
                                                <div dangerouslySetInnerHTML={{ __html: information }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
        // return(
        //     <div>
                // <Head>
                //     <title>24hvay || {title}</title>
                //     <meta name= "description"       content={content.brief}/>
                //     <meta property="og:title"       content={title}/>
                //     <meta property="og:description" content={content.brief}/>
                //     <meta property="og:image"       content={`/static/images/${image.filename}`}/>
                //     <meta property="og:site_name"   content="24hvay"/>
                // </Head>
        //         <section className="service-details-section section-spacing bg-color1" style={{padding: "0px"}}>
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-md-12 col-lg-12 wow fadeIn"  data-wow-duration="1s">
        //                         <div className="post-wrapper-2">
        //                             <div className="post-thumb">
        //                                 <img src={`/static/images/${image.filename}`} alt="post thumb"/>
        //                             </div>
        //                             <div className="post-details">
        //                                 <div className="post-content">
        //                                     <h4>{title}
        //                                     </h4>
        //                                     <ul className="post-meta list-inline">
        //                                        <li className="list-inline-item">bởi <Link href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1 mr-3" >{author.name.first}</a></Link></li>
        //                                        <li className="list-inline-item">chuyên mục {categories.map((category, i) => <Link href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1" href="#">{category.name}</a></Link>)}</li>
        //                                     </ul>
        //                                     <div dangerouslySetInnerHTML={{ __html: content.extended }} />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="single-meta-share d-flex justify-content-between highlight">
        //                             <ul className="single-meta-details list-inline highlight">
        //                                 <li className="list-inline-item">Tags:</li>
        //                                 {categories.map((category, i) => {
        //                                     return(
        //                                         <li className="list-inline-item" key={i}>
        //                                             <a href="#">{category.name}</a>
        //                                         </li>
        //                                     )
        //                                 })}
        //                             </ul>
        //                             <ul className="single-share-details list-inline highlight">
        //                                 <li className="list-inline-item">Share</li>
        //                                 <li className="list-inline-item">
        //                                     <a href="#">
        //                                         <i className="fa fa-facebook"></i>
        //                                     </a>
        //                                 </li>
        //                                 <li className="list-inline-item">
        //                                     <a href="#">
        //                                         <i className="fa fa-twitter"></i>
        //                                     </a>
        //                                 </li>
        //                                 <li className="list-inline-item">
        //                                     <a href="#">
        //                                         <i className="fa fa-youtube"></i>
        //                                     </a>
        //                                 </li>
        //                                 <li className="list-inline-item">
        //                                     <a href="#">
        //                                         <i className="fa fa-google-plus"></i>
        //                                     </a>
        //                                 </li>
        //                                 <li className="list-inline-item">
        //                                     <a href="#">
        //                                         <i className="fa fa-linkedin"></i>
        //                                     </a>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                         <div className="form-group">
        //                             <button type="submit" onClick={() => Router.push("/register")} className="btn-style-1 btn btn-primary">Đăng kí vay tiền</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // )
    }

}

export default withRouter(Person);
