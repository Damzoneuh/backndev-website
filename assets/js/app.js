import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './nav/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/global.scss';

export default class App extends Component{
    render() {
        return(
            <div>
                <Navbar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));