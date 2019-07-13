import React, { PureComponent } from 'react';
import axios from 'axios';
import { Box } from 'grommet';
import PersonCard from './PersonCard';
import { fetchPersonData, loading } from '../redux/actions/actions.js';
import { SteppedLineTo } from 'react-lineto';
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
        const level = this.props.level || 0
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
            return(
                <Box
                    align="center"
                >
                    {person.children.length > 0 &&
                        <Box direction="row" gap="medium">
                            {person.children.map((child, i) => {
                                return(
                                    <Box key={child._id} align="center">
                                        <PersonCard className={child._id} key={child._id} person={child} history={this.props.history}/>
                                        {child.children.length > 0 && <ParentAndChildren initPerson={child}/>}

                                    </Box>
                                )
                            })}
                        </Box>
                    }
                </Box>
            )
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
