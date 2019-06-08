import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../sass/global.scss';

export default class Index extends Component{
    render() {
        return(
            <div>Hello world</div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));