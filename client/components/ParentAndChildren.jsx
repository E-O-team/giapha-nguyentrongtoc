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
        axios.get("http://localhost:3000/api/person/" + this.props.initPerson._id)
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
                <Box>
                    <h1>loading...</h1>
                </Box>
            );
        }else{
            // return(
            //     <Box
            //         align="center"
            //     >
            //         {tree.map((person, i) => {
            //             return(
            //                 <Box key={`level-${level}-${i}`}>
            //                     <PersonCard key={person._id} person={person} history={this.props.history}/>
            //                     {person.children.length > 0 && <ParentAndChildren initPerson={person.children} level={level+1} index={i}/>}
            //                 </Box>
            //             )
            //         })}
            //     </Box>
            // )


            if(person.children.length > 0){
                return(
                    <Box direction="row" justify="center">
                        {person.children.map((child, i) => {
                            return(
                                <TreeNode
                                    key={child._id}
                                    label={
                                        <Box align="center">
                                            <PersonCard className={child._id} key={child._id} person={child} history={this.props.history}/>
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




            // return(
            //     <div>
            //         {person.children.length > 0 &&
            //             <Box direction="row" justify="center">
            //                 {person.children.map((child, i) => {
            //                     if(!child.children.length > 0){
            //                         console.log(child.fullName);
            //                     }
            //                     return(
            //                         <TreeNode
            //                             key={child._id}
            //                             label={
            //                                 <Box align="center">
            //                                     <PersonCard className={child._id} key={child._id} person={child} history={this.props.history}/>
            //                                 </Box>
            //                             }
            //                         >
            //                             <RenderChild child={child}/>
            //                         </TreeNode>
            //                     )
            //                 })}
            //             </Box>
            //         }
            //     </div>
            // )
        }
    }

}

// const mapStateToProps = (state) => {
//     return {
//         person: state.person,
//         loading: state.loading
//     };
// }
//
// // anything returned from here will end up in the props
// const mapDispatchToProps = dispatch => ({
//     // Our thunk will be mapped to this.props.fetchRecipe
//     loading: (status) => dispatch(loading)
//     fetchPersonData: (url) => dispatch(fetchPersonData(url)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhaDo);
export default ParentAndChildren;
