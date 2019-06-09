import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div>hello</div>
    }
}

ReactDOM.render(<Index/>, document.getElementById('index'));