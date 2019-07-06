import React, {Component} from 'react';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      isLoaded: true,
      skills: this.props.skills
    };
  }

  render(){
    const {data, skills} = this.props;
    const {isLoaded} = this.state;
    if (isLoaded && data && skills) {
      return (
          <div>
            <div className="padd-50 slug marg-top-10">
              <h3 className="text-grey">Damien Reb</h3>
              <h2 className="text-blue-harder">Développeur Op full stack</h2>
              <div className="text-grey marg-top-10">{data.header}</div>
            </div>
            <div className="paralax bg-php"></div>
            <div className="spacer-paralax"></div>
            <div className="padd-50 slug marg-top-10">
              <h4 className="text-blue-harder">Diplômes et formations</h4>
              {data.education.map((ed, key) => {
                return (
                    <div key={key}>
                      <div className="flex flex-item-center marg-top-10">
                        <div className="padd-5">{ed.title}</div>
                        <div className="text-blue padd-5">{ed.former}</div>
                        <div className="text-grey padd-5">{ed.date}</div>
                      </div>
                      <div className="marg-top-5 padd-5 text-info">
                        {ed.description}
                      </div>
                    </div>
                )
              })}
            </div>
            <div className="paralax bg-docker"></div>
            <div className="spacer-paralax"></div>
            <div className="padd-50 slug marg-top-10">
              <h4 className="text-blue-harder">Expériences professionnelles</h4>
                <a href="https://github.com/Damzoneuh" target="_blank" className="btn btn-primary btn-group">Lien vers mon dépôt git</a>
              {data.experience.map((ex, key) => {
                return (
                    <div key={key}>
                      <div className="flex flex-item-center marg-top-10">
                        <div className="padd-5">{ex.title}</div>
                        <div className="text-blue padd-5">{ex.society}</div>
                        <div className="padd-5">{ex.location}</div>
                        <div className="text-grey padd-5">{ex.date}</div>
                      </div>
                      <div className="marg-top-5 padd-5 text-info">
                        {ex.description}
                      </div>
                    </div>
                )
              })}

            </div>
            <div className="paralax bg-dc"></div>
            <div className="spacer-paralax"></div>
            <div className="padd-50 slug marg-top-10 marg-bot-10">
              <h4 className="text-blue-harder">Compétences</h4>
              {skills.skills.map((skill, key) => {
                return (
                    <div key={key}>
                      <div className="padd-5">{skill}</div>
                    </div>
                )
              })}
              <div className="flex-item-center flex justify-content-center marg-top-10">
                <button className="btn btn-primary btn-group marg-top-10" onClick={this.props.toggleCoffee}>Un café ?</button>
              </div>
            </div>
          </div>
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }
}
