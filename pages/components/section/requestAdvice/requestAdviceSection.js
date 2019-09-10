import React, { Component } from 'react';
import CurrencyInput        from 'react-currency-input';
import axios                from 'axios';
import Router               from 'next/router'
export default class RequestAdviceSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            loanMoney: null,
            message: "",
            buttonState: "Tư vấn vay tiền",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            errorMessage: ""
        })
    }

    validateForm = () => {
        const { name, email, phone } = this.state
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if(name !== "" && validateEmail(this.state.email) && phone !== ""){
            return true
        }else{
            this.setState({
                errorMessage: "Vui lòng điền đầy đủ thông tin được đánh dấu *"
            }, () => false)
        }
    }

    handleSend = (e) => {
        e.preventDefault()
        if(this.validateForm()){
            const { name, phone, email, message, loanMoney } = this.state;
            var data={
                "name": name,
                "phone": phone,
                "email": email,
                "loanMoney": loanMoney,
                "message": message
            }
            this.setState({
                buttonState: "Đang gửi...",
                errorMessage: "",
            }, () => {
                axios({
                    method: 'post',
                    url: '/api/enquiry',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then((res) => {
                //handle success
                    this.setState({buttonState: "Đã xong!"}, () => {
                        Router.push({
                            pathname: "/register",
                            query: {
                                name: name,
                                phone: phone,
                                email: email,
                                loanMoney: loanMoney,
                                message: message
                            },
                        })
                    })
                })
                .catch(function (response) {
                //handle error
                    console.log(response);
                });
            })
        }else{
            this.setState({
                errorMessage: "Vui lòng điền đầy đủ thông tin!!!"
            })
        }
    }


    render() {
        const { name, email, phone, loanMoney, message, buttonState, errorMessage } = this.state
        return (
            <section className="about-contact-section d-flex justify-content-between themeix-highlight">
                <div className="about-contact-thumbnails themeix-highlight">
                </div>
                <div className="about-contact-content section-spacing bg-color4 themeix-highlight wow fadeIn"  data-wow-duration="1s">>
                    <div className="about-before-skew bg-color4"></div>
                    <div className="container-fluid">
                        <div className="section-title margin-bottom-20 section-inverse">
                            <span>Liên hệ chúng tôi</span>
                            <h4>Yêu cầu tư vấn</h4>
                            <p style={{color: "red"}}>{errorMessage}</p>
                        </div>
                        <form className="about-contact-form" action="#">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="name" value={name} onChange={this.handleChange} type="text" className="form-control" placeholder="Họ và tên"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="email" value={email} onChange={this.handleChange} type="text" className="form-control" placeholder="Địa chỉ Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="phone" value={phone} onChange={this.handleChange} type="text" className="form-control" placeholder="Số điện thoại"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <CurrencyInput id="loanMoney" value={loanMoney} onChangeEvent={this.handleChange} precision="0" suffix="₫" type="text" className="form-control" placeholder="Số tiền cần vay"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea id="message" value={message} onChange={this.handleChange} rows="4" className="form-control" placeholder="Lời nhắn"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit" onClick={this.handleSend} className="btn-style-1 btn btn-primary">{buttonState}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
