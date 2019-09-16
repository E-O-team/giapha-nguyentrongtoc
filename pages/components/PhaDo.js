import React, { Component }     from 'react';
import axios                    from 'axios';
import ParentAndChildren        from './ParentAndChildren';
import PersonCard               from './PersonCard';
import { Tree, TreeNode }       from 'react-organizational-chart'
import PropTypes                from 'prop-types';
import Button                   from '@material-ui/core/Button';
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
}));

class PhaDo extends Component {
    constructor(props){
        super(props)
        this.state={
            generationsToFetch: 10,
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
        return(
            <div>
                <section className="section-spacing download-button-container">
                    <PressyButton/>
                </section>
                <div className="phado-container">
                <PDFExport margin="2cm" ref={(component) => this.pdfExportComponent = component}>
                        <Tree
                            lineColor={'#AD956E'}
                            lineWidth={"2px"}
                            lineBorderRadius={"10px"}
                            label={
                                <div className="person-container">
                                    <PersonCard size={this.state.size} person={person} Phado={true} partner={this.state.person}/>
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
