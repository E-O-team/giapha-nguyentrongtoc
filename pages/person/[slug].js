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
import PhaDo from '../components/PhaDo';
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
        const res = await axios({
            url: 'http://localhost:3000/api/person/' + query.slug,
            method: 'GET',
        });
        return {
            person: res.data,
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
        axios.get("/api/person/" + this.props.slug)
        .then(res => this.setState({person: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const { fullName, sex, birth, generation, parent, information, partner } = this.props.person
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
                <section className="section-spacing">
                    {this.state.person !== {} && <PhaDo person={this.props.person}/>}
                </section>
            </div>
        )

    }

}

export default withRouter(Person);
