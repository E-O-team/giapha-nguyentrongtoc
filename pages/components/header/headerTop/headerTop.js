import React, { Component } from 'react';

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString("vi-VN", {weekday: "long"}),
            time: "",
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString("vi-VN", {dateStyle: "full"})
        });
    }

    render() {
        const { time, date } = this.state
        return (
            <div className="themeix-header-top bg-color2">
                <div className="container">
                    <div className="d-flex justify-content-between themeix">
                        <div className="themeix-top-bar-left">
                            <p className="top-content">
                                <span>{time}</span>&nbsp; | &nbsp;
                                <span>{date}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;
