import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/global.scss';

export default class App extends Component{
    render() {
        return(
            <div>Hello world</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));