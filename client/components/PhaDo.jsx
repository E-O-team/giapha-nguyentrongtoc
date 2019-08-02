import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Box, DropButton, Button } from 'grommet';
import { fetchPersonData } from '../redux/actions/actions.js';
import axios from 'axios';
import ParentAndChildren from './ParentAndChildren';
import PersonCard from './PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart'
class PhaDo extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            generationsToFetch: 4
        }
    }

    handleDropButton = (value) => {
        this.setState({
            generationsToFetch: value
        })
    }

    render() {
        const {person, history} = this.props

        return(
            <Box>
            <Box
                align="center"
                justify="center"
                pad="medium"
            >
                <DropButton
                    color='brand_2'
                    label={this.state.generationsToFetch+1 + ' đời'}
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <Box pad="small" background="brand_2" gap="small">
                                <Button
                                    label="2 đời"
                                    onClick={() => this.handleDropButton(1)}
                                />
                                <Button
                                    label="3 đời"
                                    onClick={() => this.handleDropButton(2)}
                                />
                                <Button
                                    label="4 đời"
                                    onClick={() => this.handleDropButton(3)}
                                />
                                <Button
                                    label="5 đời"
                                    onClick={() => this.handleDropButton(4)}
                                />
                                <Button
                                    label="6 đời"
                                    onClick={() => this.handleDropButton(5)}
                                />
                                <Button
                                    label="7 đời"
                                    onClick={() => this.handleDropButton(6)}
                                />
                        </Box>
                    }
                />
            </Box>
            <Box
                align='start'
                key={person._id}
                className='treeContainer'
                overflow={{
                    'vertical': 'hidden',
                    'horizontal': 'auto'
                }}
                responsive={true}
            >
                <Tree
                    lineColor={'#AD956E'}
                    lineWidth={"2px"}
                    lineBorderRadius={"10px"}
                    label={
                        <Box align="center">
                            <PersonCard person={person} history={this.props.history} Phado={true} partner={person.partner}/>
                        </Box>
                    }

                >
                    <ParentAndChildren initPerson={person} history={history} level={1} generationsToFetch={this.state.generationsToFetch}/>
                </Tree>
            </Box>
            </Box>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        person: state.person,
        loading: state.loading
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchRecipe
    fetchPersonData: (url) => dispatch(fetchPersonData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhaDo);
