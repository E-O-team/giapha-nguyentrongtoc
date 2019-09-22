import React, { Component }     from 'react';
import axios                    from 'axios';
import ParentAndChildren        from './ParentAndChildren';
import PersonCard               from './PersonCard';
import { Tree, TreeNode }       from 'react-organizational-chart'
import PropTypes                from 'prop-types';
import Button                   from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles }           from '@material-ui/core/styles';
import { PDFExport, savePDF }   from '@progress/kendo-react-pdf';
import './PhaDo_style.less'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

class PhaDo extends Component {
    constructor(props){
        super(props)
        this.state={
            generationsToFetch: 4,
            person: this.props.person || {},
            size: 1
        }
    }

    handleDropButton = (value) => {
        this.setState({
            generationsToFetch: value
        })
    }

    zoomIn = () => {
        this.setState({
            size: this.state.size + 0.1
        });
    }
    zoomOut = () => {
        this.setState({
            size: this.state.size - 0.1
        });
    }

    exportPDF = () => {
        this.pdfExportComponent.save();
    }

    render() {
        const {person} = this.props
        const PressyButton = () => {
            const classes = useStyles();
            return <Button variant="contained" onClick={this.exportPDF} className={classes.button}>Tải phả đồ</Button>
        }

        const ChooseGeneration = () => {
            const classes = useStyles();
            return(
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="generationsToFetch">số đời hiển thị:</InputLabel>
                    <Select
                        value={this.state.generationsToFetch}
                        onChange={(e) => this.setState({generationsToFetch: e.target.value})}
                        inputProps={{
                            name: 'generationsToFetch',
                            id: 'generationsToFetch',
                        }}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={30}>tất cả</MenuItem>
                    </Select>
                </FormControl>
                )
        }

        return(
            <div>
                <section className="section-spacing download-button-container">
                    <PressyButton/>
                    <ChooseGeneration/>
                </section>
                <div className="phado-container">
                <PDFExport margin="2cm" ref={(component) => this.pdfExportComponent = component}>
                        <Tree
                            lineColor={'#AD956E'}
                            lineWidth={"2px"}
                            lineBorderRadius={"10px"}
                            label={
                                <div className="person-container">
                                    <PersonCard size={this.state.size} person={person} Phado={true} partner={this.state.person.partner}/>
                                </div>
                            }
                        >
                            <ParentAndChildren size={this.state.size} initPerson={person} level={1} generationsToFetch={this.state.generationsToFetch}/>
                        </Tree>
                </PDFExport>
                </div>

            </div>
        )
    }
}
PhaDo.propTypes ={
    person: PropTypes.object,
}

export default PhaDo;
