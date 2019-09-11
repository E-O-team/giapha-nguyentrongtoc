import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ParentAndChildren from './ParentAndChildren';
import PersonCard from './PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart'
import PropTypes from 'prop-types';
import './PhaDo_style.less'
class PhaDo extends Component {
    constructor(props){
        super(props)
        this.state={
            generationsToFetch: 4,
            person: this.props.person || {}
        }
    }

    handleDropButton = (value) => {
        this.setState({
            generationsToFetch: value
        })
    }

    render() {
        const {person} = this.props

        return(
            <div className="phado-container">
                <Tree
                    lineColor={'#AD956E'}
                    lineWidth={"2px"}
                    lineBorderRadius={"10px"}
                    label={
                        <div className="person-container">
                            <PersonCard person={person} Phado={true} partner={this.state.person}/>
                        </div>
                    }
                >
                    <ParentAndChildren initPerson={person} level={1} generationsToFetch={this.state.generationsToFetch}/>
                </Tree>
            </div>
        )
    }

}
PhaDo.propTypes ={
    person: PropTypes.object,
}

export default PhaDo;
