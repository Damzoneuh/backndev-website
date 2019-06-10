import React, {Component} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class EditSlug extends Component{
    constructor(props){
        super(props);
        this.state = {
            slug: [],
            slugTitle: this.props.slug.title,
            slugText: this.props.slug.description,
            slugId: this.props.slug.id,
            message: null,
            e: null
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeTitle(e){
        this.setState({
            slugTitle: e.target.value
        })
    }
    handleChangeText(value){
        this.setState({
            slugText: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        axios.put('/admin/api/slug/update/' + this.state.slugId, {
            'title': this.state.slugTitle,
            'description': this.state.slugText
            }
        )
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
        const {slugText, slugTitle} = this.state;
        return(
            <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={slugTitle} className="form-control" onChange={(e) => this.handleChangeTitle(e)}/>
                </div>
                <div className="form-group">
                    <label>Text</label>
                    <ReactQuill value={slugText}
                                onChange={this.handleChangeText} />
                </div>
                <button className="btn btn-group btn-primary" >Save</button>
            </form>
        )
    }
}