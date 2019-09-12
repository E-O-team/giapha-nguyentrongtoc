import { Component }            from 'react';

import Head                     from 'next/head';
import {
    MdSmartphone }      from 'react-icons/md';
import {
    FaUserAlt,
    FaRegAddressCard,
    FaPassport }        from 'react-icons/fa';
import './chi_style.less';
import axios from 'axios';
import Link                 from 'next/link';

import PersonCard from './components/PersonCard';
export default class Chi5 extends Component {

    static async getInitialProps({ query ,req }) {
        const res = await axios({
            url: 'https://giapha-nguyentrongtoc.herokuapp.com/api/branch/1',
            method: 'GET',
        });
        return {
            people: res.data,
            branch: query.branch
        };
        // if(req){
        //     const res = await axios({
        //         url: '/api/branch/' + query.branch || 1,
        //         method: 'GET',
        //     });
        //     return {
        //         people: res.data,
        //         branch: query.branch
        //     };
        // }else{
        //     axios.get('/api/branch/' + query.branch)
        //     .then(res => { return {branch: query.branch, people: res.data}})
        //     .catch(err => console.log(err))
        //
        // }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         people: []
    //     }
    // }

    render() {
        const { branch } = this.props
        const people = this.props.people
        return(
            <div>
                <Head>
                    <title>Nguyễn Trọng Tộc || Chi {branch}</title>
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
                                                Một số thành viên trong chi {branch}
                                            </h4>
                                            <h5>giới thiệu về chi ... giới thiệu về chi ... giới thiệu về chi ...</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-container">
                                    {this.props.people.map((person, i) => {
                                        return(
                                            <PersonCard person={person} key={i}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}
