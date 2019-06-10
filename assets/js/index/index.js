import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/index.scss';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            slugs: [],
            isLoaded: false,
            e: null,
            slugId: null
        };
        this.getAllSlugs();
    }

    getAllSlugs(){
        axios.get('/api/slug')
            .then((res) => {
                this.setState({
                    slugs: res.data,
                    isLoaded: true,
                    slugId: null
                })
            })
            .catch(e => {
                this.setState({
                    e:e
                })
            });
    }

    getOneSlug(id){
        axios.get('/api/slug/' + id)
            .then((res) => {
                this.setState({
                    slugs: res.data,
                    slugId: id,
                    isLoaded: true
                })
            })
            .catch((e) => {
                this.setState({
                    e: e
                })
            })
    }

    handleSlugId(id){
        this.setState({
            isLoaded: false
        });
        this.getOneSlug(id);
    }

    render() {
        const {e,isLoaded, slugs, slugId} = this.state;
        if (e){
            return (
                <div>error</div>
            )
        }
        if (!isLoaded){
            return (
                <div className="container">
                    <div className="ring">
                        Loading
                        <span></span>
                    </div>
                </div>
            )
        }
        if (slugId && isLoaded){
            return (
                <div className="container">
                    <div className="row">
                        {slugs.success.id ?
                            <div className="col-12">
                                <div className="wrap-slug">
                                    <div className="title" key={slugs.success.id}>
                                        <h2>{slugs.success.title}</h2>
                                    </div>
                                    <div className="slug-content" dangerouslySetInnerHTML={{ __html: slugs.success.description }}>

                                    </div>
                                    <button className="btn btn-primary btn-group"
                                            onClick={() => this.getAllSlugs()}>Retour
                                    </button>
                                </div>
                            </div>
                        : ''}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        {slugs.success && slugs.success.length > 0? slugs.success.map((slug) => {
                            return (
                                <div className="col-lg-6 col-12" key={slug.id}>
                                    <div className="wrap-slug">
                                        <div className="title" >
                                            <h2>{slug.title}</h2>
                                        </div>
                                        <button className="btn btn-primary btn-group" onClick={() => this.handleSlugId(slug.id)}>Voir plus</button>
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

ReactDOM.render(<Index/>, document.getElementById('index'));