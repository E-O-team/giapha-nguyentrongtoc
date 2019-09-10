import {useRouter}          from 'next/router'
import React, {Component}   from 'react';
import {withRouter}         from 'next/router';
import axios                from 'axios';
import Link                 from 'next/link'
import Router               from 'next/router';
import Head                 from 'next/head';
class Post extends Component {
    static async getInitialProps({req, query}) {
        const res = await axios({
            url: '/api/post/' + query.slug,
            method: 'GET'
        });

        return {post: res.data};
    }
    render() {
        const { title, author, publishedDate, image, content, categories, slug} = this.props.post
        return(
            <div>
                <Head>
                    <title>24hvay || {title}</title>
                    <meta name= "description"       content={content.brief}/>
                    <meta property="og:title"       content={title}/>
                    <meta property="og:description" content={content.brief}/>
                    <meta property="og:image"       content={`/static/images/${image.filename}`}/>
                    <meta property="og:site_name"   content="24hvay"/>
                </Head>
                <section className="service-details-section section-spacing bg-color1" style={{padding: "0px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 wow fadeIn"  data-wow-duration="1s">
                                <div className="post-wrapper-2">
                                    <div className="post-thumb">
                                        <img src={`/static/images/${image.filename}`} alt="post thumb"/>
                                    </div>
                                    <div className="post-details">
                                        <div className="post-content">
                                            <h4>{title}
                                            </h4>
                                            <ul className="post-meta list-inline">
                                               <li className="list-inline-item">bởi <Link href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1 mr-3" >{author.name.first}</a></Link></li>
                                               <li className="list-inline-item">chuyên mục {categories.map((category, i) => <Link href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1" href="#">{category.name}</a></Link>)}</li>
                                            </ul>
                                            <div dangerouslySetInnerHTML={{ __html: content.extended }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-meta-share d-flex justify-content-between highlight">
                                    <ul className="single-meta-details list-inline highlight">
                                        <li className="list-inline-item">Tags:</li>
                                        {categories.map((category, i) => {
                                            return(
                                                <li className="list-inline-item" key={i}>
                                                    <a href="#">{category.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ul className="single-share-details list-inline highlight">
                                        <li className="list-inline-item">Share</li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={() => Router.push("/register")} className="btn-style-1 btn btn-primary">Đăng kí vay tiền</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default withRouter(Post);
