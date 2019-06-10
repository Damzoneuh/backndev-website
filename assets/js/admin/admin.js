import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/admin.scss';
import axios from 'axios';
import EditSlug from './editSlug';
import CreateSlug from './createSlug';

export default class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            e: null,
            isLoaded: false,
            slugs: [],
            slugId: null,
            oneSlug: null,
            slugTitle: null,
            slugDescription: null,
            add: false,
            message: null
        };
        this.getAllSlugs = this.getAllSlugs.bind(this);
        this.clearEdit = this.clearEdit.bind(this);
        this.addSlug = this.addSlug.bind(this);
        this.clearAdd = this.clearAdd.bind(this);
        this.deleteSlug = this.deleteSlug.bind(this);
        this.getAllSlugs();
    }

    getAllSlugs(){
        axios.get('/api/slug')
            .then((res) => {
                this.setState({
                    slugs: res.data.success,
                    isLoaded:true
                })
            })
            .catch(e => {
                this.setState({
                    e: e
                })
            })
    }

    handleEditSlug(id){
        this.setState({
            slugId: id
        })
    }

    clearEdit(){
        this.setState({
            slugId: null
        })
    }

    addSlug(){
        this.setState({
            add: true
        })
    }

    clearAdd(){
        this.setState({
            add: false
        });
        this.forceUpdate()
    }

    deleteSlug(id){
        axios.delete('/admin/api/slug/delete/' + id)
            .then(res => {
                this.setState({
                    message: res
                })
            })
            .catch(e => {
                this.setState({
                    e: e
                })
            })
    }

    render(){
        const {slugs, e, isLoaded, slugId, add} = this.state;
        if (!isLoaded){
            return (
                <div>Loading</div>
            )
        }
        if (e){
            return (
                <div>error</div>
            )
        }
        if (add) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-group btn-primary" onClick={this.clearAdd}>Go back</button>
                        </div>
                        <div className="col-12">
                            <div className="wrap-slug flex-row align-items-center justify-content-center">
                                <CreateSlug/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-group btn-primary" onClick={this.addSlug}>
                                <i
                                className="material-icons">
                                add_circle
                                </i> Add slug
                            </button>
                        </div>
                        {slugs.length > 0 ? slugs.map((slug) => {
                            return(
                                <div className="col-12">
                                    <div className="wrap-slug flex-row justify-content-between">
                                        <div className="title" key={slug.id}>
                                            <h2>{slug.title}</h2>
                                        </div>
                                        {slugId ?
                                            <button className="btn btn-group btn-primary"
                                                    onClick={this.clearEdit}>Hide</button>
                                            : <div>
                                                <button className="btn btn-group btn-primary marg-1"
                                                           onClick={() => this.handleEditSlug(slug.id)}>Edit</button>
                                                <button className="btn btn-group btn-danger" onClick={() => this.deleteSlug(slug.id)}>Delete</button>
                                            </div>
                                        }
                                        {slugId === slug.id ? <EditSlug slug={slug}/> : ''}
                                    </div>
                                </div>
                            )
                        }) : ''}

                    </div>
                </div>
            )
        }
    }
}

ReactDOM.render(<Admin />, document.getElementById('admin'));