import React, { Component } from 'react';
import axios                from 'axios';
import Router               from 'next/router'
class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            message: "",
            buttonState: "Tư vấn vay tiền",
            errorMessage: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    validateForm = () => {
        const { name, phone, message } = this.state

        if(name !== "" && phone !== ""){
            return true
        }else{
            return false
        }
    }

    handleSend = (e) => {
        e.preventDefault()
        if(this.validateForm()){
            const { name, phone, message } = this.state;
            var data={
                "name": name,
                "phone": phone,
                "message": message,
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
        return (
            <section className="themeix-slider section-overlay bg-color2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="themeix-slider-content">
                                <h1 className="wow fadeIn"  data-wow-duration="1s">Nguyễn Trọng Tộc</h1>
                                <p className="wow fadeIn"  data-wow-duration="3s">“Con người có Tổ có Tông <br/> Như cây có cội như sông có nguồn”</p>
                                <div className="themeix-slider-btn wow fadeIn"  data-wow-duration="5s">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            {/*<div className="themeix-slider-content">
                                <h1 className="wow fadeIn"  data-wow-duration="1s">Bạn đang cần tư vấn ?</h1>
                                <p style={{fontSize: "15px", color: "red", margin: "5px 0px 0px 0px"}}>{this.state.errorMessage}</p>
                                <form className="wow fadeIn about-contact-form" action="#">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input id="name" onChange={this.handleChange}  type="text" className="form-control brd-fff" placeholder="Họ và tên"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input id="phone" onChange={this.handleChange} type="text" className="form-control brd-fff" placeholder="Số điện thoại"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea id="message" onChange={this.handleChange} rows="4" className="form-control brd-fff" placeholder="Lời nhắn"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit" onClick={this.handleSend} className="btn-style-1 btn btn-primary">{this.state.buttonState}</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;
