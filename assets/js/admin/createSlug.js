import React, {Component} from 'react';
import ReactQuill from "react-quill";
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

export default class CreateSlug extends Component{
    constructor(props){
        super(props);
        this.state = {
            e: null,
            slugText: null,
            slugTitle: null,
            message: null
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
        axios.post('/admin/api/slug/create', {
            'title': this.state.slugTitle,
            'description': this.state.slugText
        })
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


    render() {
        const {slugTitle, slugText} = this.state;
        return (
            <form className="w-75" onSubmit={(e) => this.handleSubmit(e)}>
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
        );
    }

}