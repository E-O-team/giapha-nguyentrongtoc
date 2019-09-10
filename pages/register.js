import React, { Component }     from 'react';
import axios                    from 'axios';
import CurrencyInput            from 'react-currency-input';

import ReactTable               from 'react-table';
import 'react-table/react-table.css';
import Router                   from 'next/router';
import FormControlLabel         from '@material-ui/core/FormControlLabel';
import Checkbox                 from '@material-ui/core/Checkbox';
import options                  from '../static/common/js/cities';
import Head                     from 'next/head';
import Table                    from './components/listdocument/testTable';

export default class Register extends Component {

    static async getInitialProps({ query, req }) {
        const res = await axios({
            url: '/api/form-files',
            method: 'GET',
        });
        return {
            files: res.data,
            name: query.name,
            phone: query.phone,
            message: query.message,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || "",
            birthDate: "",
            email: "",
            phone: this.props.phone || "",
            loanMoney: null,
            city: "Không chọn",
            message: this.props.message || "",
            income: null,
            buttonState: "Gửi yêu cầu",
            errorMessage: "",
            files: this.props.files || [],
            checked: false,
        }
        this.Ref = React.createRef()
    }

    componentDidMount() {
        if(this.props.name){
            setTimeout(() => {
                this.Ref.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "start" })
            }, 1200)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    validateForm = () => {
        const { name, email, phone, checked } = this.state
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if(name !== "" && validateEmail(this.state.email) && phone !== "" && checked == true){
            return true
        }else{
            if(checked == false){
                this.setState({
                    errorMessage: "Vui lòng đồng ý với các điều khoản và dịch vụ của chúng tôi"
                })
            }else{
                this.setState({
                    errorMessage: "Vui lòng điền đầy đủ thông tin được đánh dấu *"
                }, () => false)
            }
        }
    }

    handleSend = (e) => {
        const { checked ,name, birthDate, email, phone, loanMoney, city, income, message } = this.state
        e.preventDefault()
        // kiểm tra form
        if(this.validateForm()){
            var data = {}
            if(city == "Không chọn"){
                data = {
                    name: name,
                    birthDate: birthDate,
                    email: email,
                    phone: phone,
                    loanMoney: loanMoney,
                    income: income,
                    message: message,
                }
            }else {
                data = {
                    name: name,
                    birthDate: birthDate,
                    email: email,
                    phone: phone,
                    loanMoney: loanMoney,
                    income: income,
                    message: message,
                    city: city
                }
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
                    this.setState({buttonState: "Đã xong!"}, () => setTimeout(() => {Router.push('/register')}, 1000))
                })
                .catch(function (response) {
                //handle error
                    console.log(response);
                });
            })
        }else{

        }
    }

    render() {
        const { name, birthDate, email, phone, message } = this.state
        return (
            <div  ref={this.Ref} className="container">
                <Head>
                    <title>24hvay || Đăng Kí Vay</title>
                </Head>

                    <div className="row">
                        <div className="col-md-12">
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label><b className="form-required">*</b> Họ và tên</label>
                                        <input id="name" value={name} placeholder="vd: Lê Đăng Khoa" type="text" className="form-control" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label><b className="form-required">*</b> Email</label>
                                        <input id="email" value={email} placeholder="vd: ledangkhoa420@gmail.com" type="email" className="form-control" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label><b className="form-required">*</b> Số điện thoại</label>
                                        <input id="phone" value={phone} placeholder="vd: 0905420420" type="text" className="form-control" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Ngày sinh</label>
                                        <input id="birthDate" placeholder="vd: 5/9/1983" type="date" className="form-control" onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Số tiền vay</label>
                                        <CurrencyInput placeholder="vd: 5,000,000₫" className="form-control" id="loanMoney" precision="0" suffix="₫" value={this.state.loanMoney} onChangeEvent={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Tỉnh thành phố</label>
                                        <select id="city" className="form-control" style={{backgroundColor: "#e5e5e5", borderColor: "#e5e5e5"}} onChange={this.handleChange}>
                                            <option defaultValue >Không chọn</option>
                                            {options.map((option, i) => <option key={i} label={option.label} value={option.value}>{option.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <textarea id="message" value={message} className="form-control" type="text" placeholder="Mục đích vay vốn" rows="8" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Thu nhập hiện tại của bạn</label>
                                        <CurrencyInput id="income" placeholder="vd: 5,000,000₫" className="form-control" precision="0" suffix="₫" value={this.state.income} onChangeEvent={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.checked}
                                                onChange={() => this.setState({checked: !this.state.checked})}
                                                value="checkedB"
                                                color="primary"
                                                />
                                        }
                                        label="Tôi đồng ý với các điều khoản của dịch vụ"
                                    />
                                </div>
                                <div className="form-row" style={{display: "flex", flexDirection: "column"}}>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-primary m-0" onClick={this.handleSend}>{this.state.buttonState}</button>
                                    </div>
                                    <label style={{marginTop: "10px", color: "red"}}>{this.state.errorMessage}</label>
                                </div>
                            </form>
                            <div className="table-container" style={{marginTop: "25px", marginBottom: "25px"}}>
                                <Table data={this.props.files}/>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}
