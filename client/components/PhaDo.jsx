import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Box, DropButton, Button } from 'grommet';
import { fetchPersonData } from '../redux/actions/actions.js';
import axios from 'axios';
import ParentAndChildren from './ParentAndChildren';
import PersonCard from './PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart'
class PhaDo extends PureComponent {
    render() {
        const {person, history} = this.props
        return(
            <Box
                align='center'
                key={person._id}
                wrap={true}
                overflow={{
                    'vertical': 'hidden',
                    'horizontal': 'auto'
                }}
                responsive={true}
            >
                <Box
                    direction="row"
                    justify="end"
                    align="center"
                    pad="medium"
                    fill="horizontal"
                >
                    <DropButton
                        label="Chọn số đời"
                        dropAlign={{ top: 'bottom', right: 'right' }}
                        dropContent={
                            <Box>
                                <Box pad="large" background="light-2">
                                    <Button
                                        label="2 đời"
                                        onClick={() => {}}
                                    />
                                </Box>
                                <Box pad="large" background="light-2">
                                    <Button
                                        label="3 đời"
                                        onClick={() => {}}
                                    />
                                </Box>
                            </Box>
                        }
                    />
                </Box>
                <Tree
                    label={
                        <Box align="center">
                            <PersonCard person={person} history={this.props.history}/>
                        </Box>
                    }

                >
                    <ParentAndChildren initPerson={person} history={history} level={1}/>
                </Tree>
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
