import React, { Component } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart'
export default class ParentAndChildren extends Component {

    // static async getInitialProps({req}){
    //     if(req){
    //         const res = await axios({
    //             url: '/api/branch/' + query.branch || 1,
    //             method: 'GET',
    //         });
    //         return {person: res.data, loading: false,}
    //     }else{
    //         // this.getChildren()
    //         axios.get("/api/person/" + this.props.person.slug)
    //         .then(res => this.setState({
    //             loading: false,
    //             person: res.data
    //         }))
    //         .catch(err => console.log(err))
    //         return {}
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            person: {},
        }
    }

    componentDidMount() {
        this.getChildren()
    }

    getChildren = () => {
        axios.get("/api/person/" + this.props.initPerson.slug)
        .then(res => this.setState({
            loading: false,
            person: res.data
        }))
        .catch(err => console.log(err))
    }

    render() {
        const {person} = this.state
        const {level, generationsToFetch} = this.props
        const RenderChild = ({child}) => {
            return <ParentAndChildren initPerson={child} level={level + 1} generationsToFetch={generationsToFetch}/>
        }


        if(this.state.loading == true){
            return (
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <h2>đang tải...</h2>
                </div>
            );
        }else{
            if(person.children.length > 0){
                return(
                    <div style={{display: 'flex', flexDirection: "row", justifyContent: "center"}}>
                        {person.children.map((child, i) => {
                            return(
                                <TreeNode
                                    key={child._id}
                                    label={
                                        <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                                            <PersonCard className={child._id} key={child._id} person={child} history={this.props.history} Phado={true}/>
                                        </div>
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
                    </div>
                )
            }else{
                return null
            }
        }
    }
}
