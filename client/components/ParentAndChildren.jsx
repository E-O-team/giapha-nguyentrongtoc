import React, { PureComponent } from 'react';
import axios from 'axios';
import { Box } from 'grommet';
import PersonCard from './PersonCard';
import { fetchPersonData, loading } from '../redux/actions/actions.js';
import { Tree, TreeNode } from 'react-organizational-chart'
class ParentAndChildren extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            loading: true,
            person: {}
        }
    }

    getChildren = () => {
        axios.get("https://giaphaphamphu-react-redux.herokuapp.com/api/person/" + this.props.initPerson._id)
        .then(res => this.setState({
            loading: false,
            person: res.data.person
        }))
        .catch(err => console.log(err))
    }

    componentWillMount() {
        this.getChildren()
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.initPersonId !== prevProps.initPersonId){
    //         console.log('does not run');
    //     }
    // }

    render() {
        const {person} = this.state
        const {level, generationsToFetch} = this.props
        const RenderChild = ({child}) => {
            return <ParentAndChildren initPerson={child} level={level + 1} generationsToFetch={generationsToFetch}/>
        }


        if(this.state.loading){
            return (
                <Box align='center'>
                    <h2>đang tải...</h2>
                </Box>
            );
        }else{
            if(person.children.length > 0){
                return(
                    <Box direction="row" justify="center">
                        {person.children.map((child, i) => {
                            return(
                                <TreeNode
                                    key={child._id}
                                    label={
                                        <Box align="center">
                                            <PersonCard className={child._id} key={child._id} person={child} history={this.props.history} Phado={true}/>
                                        </Box>
                                    }
                                >
                                    {(child.children.length > 0 && this.props.level < generationsToFetch ) ?
                                        <RenderChild child={child}/>
                                        :
                                        null
                                    }
                                </TreeNode>
                            )
                        })}
                    </Box>
                )
            }else{
                return null
            }
        }
    }

}
export default ParentAndChildren;
