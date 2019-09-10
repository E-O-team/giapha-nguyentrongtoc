import React, { Component }     from 'react';
import Head                     from 'next/head';
import axios                    from 'axios';
import Link                     from 'next/link'
class Products extends Component {

    static async getInitialProps({ req }) {
        const res = await axios({
            url: '/api/posts/',
            method: 'GET',
        });
        const checkCategory = (categories) => {
            if(categories.find(category => category.name.toLowerCase() == "sản phẩm vay")){
                return true
            }else{
                return false
            }
        }
        return {posts: res.data.filter(post => checkCategory(post.categories))};

    }

    render() {
        return (
            <div>
                <Head>
                    <title>24hvay || Sản Phẩm Vay</title>
                </Head>
                {this.props.posts.map((post, i) => {
                    const { title, author, content, image, slug, categories } = post
                    return(
                        <div className="post-wrapper-2" key={i}>
                           <div className="post-thumb">
                              <Link href="/share/[slug]" as={`/share/${slug}`}><a href="single.html"><img src={`/static/images/${image.filename}`} alt="post thumb" /></a></Link>
                           </div>
                           <div className="post-details">
                              <div className="post-content">
                                 <Link href="/share/[slug]" as={`/share/${slug}`}><a><h4 className="post-btn">{title}</h4></a></Link>
                                 <ul className="post-meta list-inline">
                                    <li className="list-inline-item">bởi <Link href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1 mr-3" >{author.name.first}</a></Link></li>
                                    <li className="list-inline-item">chuyên mục {categories.map((category, i, categoriesArray) => {
                                            if(i+1 !== categoriesArray.length){
                                                return <Link key={i} href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1" href="#">{category.name}, </a></Link>
                                            }else if (i+1 == categories.length) {
                                                return <Link key={i} href="/share/[slug]" as={`/share/${slug}`}><a className="ml-1" href="#">{category.name}</a></Link>
                                            }
                                        })}
                                    </li>
                                 </ul>
                                 <div dangerouslySetInnerHTML={{ __html: content.brief }} />
                                 <Link href="/share/[slug]" as={`/share/${slug}`}><a className="mt-1 post-btn btn btn-primary">Tiếp Tục Đọc .</a></Link>
                              </div>
                           </div>
                        </div>
                    )
                })}
            </div>

        );
    }

}

export default Products;
