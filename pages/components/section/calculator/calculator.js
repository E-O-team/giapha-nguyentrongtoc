import React, { useState }  from 'react';
import Slider               from '@material-ui/core/Slider';
import Input                from '@material-ui/core/Input';
import TextField            from '@material-ui/core/TextField';
import {
    withStyles,
    makeStyles,
    styled,
}                           from '@material-ui/core/styles';
import CurrencyInput        from 'react-currency-input';
const formatter = new Intl.NumberFormat('it-IT', {
    localeMatcher: "lookup",
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

const RateCalculator = (props) => {
    const { maxTime, maxLoan, rate, step } = props
    const [loan, setLoan] = useState(maxLoan/4);
    const [time, setTime] = useState(maxTime/4);

    const handleSliderChange = (event, value) => {
        if(event.target.accessKey == "tiền"){
            setLoan(value)
        }else if (event.target.accessKey == "thời gian") {
            setTime(value)
        }
    };

    const handleTimeInputChange = event => {
        setTime(Number(event.target.value))
    };

    const handleMoneyInputChange = (event, maskedvalue, floatvalue) => {
        setLoan(Number(floatvalue))
    }
    const handleTimeBlur = (event) => {
        if (time < 0) {
            setTime(0)
        } else if (time > maxTime) {
            setTime(maxTime)
        }
    };

    const handleBlur = (event) => {
        if (event.target.id == "thời gian") {
            if (time < 0) {
                setTime(0)
            } else if (time > maxTime) {
                setTime(maxTime)
            }
        }else{
            if (loan < 0) {
                setLoan(0)
            } else if (loan > maxLoan) {
                setLoan(maxLoan)
            }
        }
    };

    const InputCurrency = (props) => (
        <InputMask
            mask="999,999,999,999"
            maskChar=""
            value={loan}
            onChange={handleMoneyInputChange}
        >
            {() => <Input type="number"/>}
        </InputMask>
    )

    return (
        <div>
            <div className="row">
                <div className="container col-lg-5">
                    <div className="row-input">
                        <p>Số tiền vay</p>
                        <div className="sliderInput">
                            <div style={{padding: "0px", marginRight: "10px"}} className="MuiInputBase-root MuiInput-root MuiInput-underline input MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-marginDense">
                                <CurrencyInput style={{border: "none", paddingLeft: "0px", paddingRight: "0px", textAlign:"right", width:"100px"}} className="MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense" onBlur={handleBlur} id="tiền" className="form-control" id="loanMoney" precision="0" value={loan} onChangeEvent={handleMoneyInputChange}/>
                            </div>
                            <p>₫</p>
                        </div>
                    </div>
                    <Slider
                        accessKey="tiền"
                        value={typeof loan === 'number' ? loan : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={0}
                        max={maxLoan}
                        step={step}
                    />


                    <div className="row-input">
                        <p>Thời gian vay</p>
                        <div className="sliderInput">
                            <Input
                                id="thời gian"
                                fullWidth={false}
                                className="input"
                                value={time}
                                margin="dense"
                                onChange={handleTimeInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: maxTime,
                                    type: 'text',
                                    'aria-labelledby': 'input-slider',
                                }}
                                style={{marginRight:"10px", width:"63px"}}
                            />
                            <p>Tháng</p>
                        </div>

                    </div>
                    <Slider
                        accessKey="thời gian"
                        value={typeof time === 'number' ? time : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={0}
                        max={maxTime}
                    />
                    <p>Lãi suất vay: <b>{rate}%</b></p>

                </div>
                <div className="container col-lg-5">
                    <div className="results-container">
                        <p>Tiền gốc trả hàng tháng</p>
                        <b>{formatter.format(Math.round(loan/time))}</b>
                    </div>
                    <div className="breaker"/>
                    <div className="results-container">
                        <p>Tiền lãi trả hàng tháng</p>
                        <b>{formatter.format(Math.round(loan * rate / 100 * 30 / 365))}</b>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RateCalculator
