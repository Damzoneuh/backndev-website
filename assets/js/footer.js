import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../sass/footer.scss';
import logoPath from '../img/Logo_BnD-neg-600.png';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer className="container-fluid dark-blue">
                <div className="row">
                    <div className="col-lg-6 col-12 global-address p-white">
                        <div className="wrap-address w-50">
                            <div className="address">
                                Back'n dev (Reb Damien)
                            </div>
                            <div className="address">
                                154 route des contamines
                            </div>
                            <div className="address">
                                74370 Arogonay
                            </div>
                            <div className="tel">
                                <i className="material-icons icon-small">
                                    phone_in_talk
                                </i>     06 31 12 51 86
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 logo-footer-wrap">
                        <img src={logoPath} alt="logo back'n dev" className="logo-footer"/>
                    </div>
                </div>
            </footer>
        )
    }
}

ReactDOM.render(<Footer/>, document.getElementById('footer'));