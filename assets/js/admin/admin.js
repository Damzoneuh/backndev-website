import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/admin.scss';
import axios from 'axios';

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
            slugDescription: null
        };
        this.getAllSlugs = this.getAllSlugs.bind(this);
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

    render(){
        const {slugs, e, isLoaded, slugId, oneSlug} = this.state;
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
        else {
            return (
                <div className="container">
                    <div className="row">
                        {slugs.length > 0 ? slugs.map((slug) => {
                            return(
                                <div className="col-12">
                                    <div className="wrap-slug flex-row justify-content-between">
                                        <div className="title" key={slug.id}>
                                            <h2>{slug.title}</h2>
                                        </div>
                                        <button className="btn btn-group btn-primary" onClick={() => this.handleEditSlug(slug.id)}>Edit</button>
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