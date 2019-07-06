import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/global.scss';
import SideBar from './elements/SideBar';
import Content from './elements/Content';
import axios from "axios";


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      skills: [],
      e: null,
      coffee: false,
      dataCoffee: []
    };
    axios.get('/api/cv')
        .then(data => {
          this.setState({
            data:data.data,
          });
            axios.get('/api/skills')
                .then(res => {
                    this.setState({
                        skills: res.data,
                        isLoaded: true
                    })
                })
                .catch(e => {
                    this.setState({
                        e: e
                    })
                });
        })
        .catch(e => {
          this.setState({
            e: e,
            isLoaded: true,
          })
        });
    this.toggleCoffee = this.toggleCoffee.bind(this);

  }

  toggleCoffee(){
      if (this.state.coffee){
          this.setState({
              coffee: false
          })
      }
      else {
          axios.get('/api/coffee')
              .then(res => {
                  this.setState({
                      coffee: true
                  })
              })
              .catch(e => {
                  this.setState({
                      coffee: true,
                      isLoaded: true,
                      dataCoffee: {status: 418, message: "I'm a teapot"}
                  });
              })

      }
  }

  render(){
    const {isLoaded, data, e, skills, coffee, dataCoffee} = this.state;
    if (!isLoaded || e){
      return(
          <div className="container">
            <div className="ring">
              Loading
              <span></span>
            </div>
          </div>
      )
    }
    if (coffee && dataCoffee){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 flex flex-column flex-item-center marg-top-10">
                        <h2 className="text-danger">Error</h2>
                        <div className="marg-top-10 flex flex-row flex-item-center">status code : <h4 className="text-blue padd-left-5">  {dataCoffee.status}</h4></div>
                        <div className="marg-top-10 flex flex-row flex-item-center">error message : <h4 className="text-info padd-left-5">  {dataCoffee.message}</h4></div>
                        <div className="marg-top-10 text-blue-harder"> We are sorry but our server refuse to make a coffee because it's a teapot</div>
                        <button className="marg-top-10 btn btn-group btn-primary" onClick={this.toggleCoffee}>Un thé ? </button>
                    </div>
                </div>
            </div>
        )
    }
    else
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-12">
            <Content data={data} skills={skills} toggleCoffee={this.toggleCoffee}/>
          </div>
          <div className="col-md-3 col-12">
            <SideBar />
          </div>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('cv'));

