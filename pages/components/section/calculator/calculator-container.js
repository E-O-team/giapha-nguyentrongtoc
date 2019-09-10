import React        from 'react';
import Slider       from '@material-ui/core/Slider';
import Input        from '@material-ui/core/Input';
import axios        from 'axios';
import AppBar       from '@material-ui/core/AppBar';
import Tabs         from '@material-ui/core/Tabs';
import Tab          from '@material-ui/core/Tab';
import RateCalculator   from './calculator';
import './calculator.less';

const TabPanel = (props) => {
    const { children, value, index } = props
    if(value == index){
        return <div className="container" style={{padding: "15px"}}>{children}</div>
    }else{
        return null
    }
}


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultMoney: 0,
            mortgageRate: 5,
            mortgageMaxLoan: 5000000000,
            mortgageMaxTime: 240,
            consumptionRate: 5,
            consumptionMaxLoan: 100000000,
            consumptionMaxTime: 36,
            value: 0
        }
    }

    componentDidMount() {
        axios.get("/api/interest-rate")
        .then(res => {
            let mortgageRate = res.data[0].mortgageRate
            let consumptionRate = res.data[0].consumptionRate
            this.setState({
                mortgageRate: mortgageRate,
                consumptionRate: consumptionRate
            })
        })
        .catch(err => console.log(err))
    }

    handleChangeTab = (event, newValue) => {
        this.setState({value: newValue})
    }

    render(){
        const { value } = this.state
        return(
            <section className="feature-section section-spacing wow fadeIn"  data-wow-duration="1s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="section-title text-center">
                                <h4>Ước tính lãi khoản vay</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <Tabs centered value={value} onChange={this.handleChangeTab} aria-label="simple tabs example">
                            <Tab label="Vay tiêu dùng" id={0} />
                            <Tab label="Vay thế chấp" id={1} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                                <RateCalculator
                                    type="tiêu dùng"
                                    rate={this.state.mortgageRate}
                                    maxTime={this.state.mortgageMaxTime}
                                    maxLoan={this.state.mortgageMaxLoan}
                                    step={50000000}
                                />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                                <RateCalculator
                                    type="thế chấp"
                                    rate={this.state.consumptionRate}
                                    maxTime={this.state.consumptionMaxTime}
                                    maxLoan={this.state.consumptionMaxLoan}
                                    step={5000000}
                                />
                        </TabPanel>
                    </div>
                </div>
            </section>
        )
    }
}
