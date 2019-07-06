import React, {Component} from 'react';
import photo from '../img/photoCV.jpg';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row bg-dark scroll-bar">
          <div className="col-12">
            <div className="rounded-img">
                <img src={photo} alt="photo-cv"/>
            </div>
          </div>
            <div className="col-12 flex flex-row flex-between flex-item-center padd-10 text-white marg-top-10">
                <i className="fas fa-envelope"></i>
                damzoneuh74@gmail.com
            </div>
            <div className="col-12 flex flex-row flex-between flex-item-center padd-10 text-white">
                <i className="fas fa-map-marker-alt"></i>
                154 route des Contamines,<br/> 74370 Argonay
            </div>
            <div className="col-12 flex flex-row flex-between flex-item-center padd-10 text-white">
                <i className="fas fa-calendar-alt"></i>
                Né le 28/12/1986
            </div>
            <div className="col-12 flex flex-row flex-between flex-item-center padd-10 text-white">
                <i className="fas fa-car"></i>
                Permis A et B
            </div>
            <div className="col-12 flex flex-row flex-between flex-item-center padd-10 text-white">
                <i className="fas fa-phone"></i>
                06 31 12 51 86
            </div>
            <div className="separator"></div>
            <div className="col-12 text-white text-center">
                <h3>Langues</h3>
            </div>
            <div className="col-12">
                <div className="text-white">Français</div>
                <div className="progress bg-dark">
                    <div className="progress-bar b-100 " role="progressbar"  aria-valuenow="100"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="marg-top-10 text-white font-10">
                    Langue maternelle
                </div>
                <div className="text-white marg-top-10">Anglais</div>
                <div className="progress bg-dark">
                    <div className="progress-bar b-50" role="progressbar" aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="marg-top-10 text-white font-10">
                    Langage technique maîtrisé
                </div>

                </div>
                <div className="separator"></div>
                <div className="col-12 text-white">
                    <h3 className="text-center">Atouts</h3>
                    <div className="marg-top-10">
                        Dynamique
                    </div>
                    <div className="marg-top-10">
                        Motivé
                    </div>
                    <div className="marg-top-10">
                        Organisé
                    </div>
                    <div className="marg-top-10">
                        Passionné
                    </div>
                </div>
                <div className="separator"></div>
                <div className="col-12 text-white marg-bot-10">
                    <h3 className="text-center">
                        Centres d'interêts
                    </h3>
                    <div className="marg-top-10">Gaming</div>
                    <div className="marg-top-10">Boxe Thaï</div>
                    <div className="marg-top-10">Runing</div>
                </div>
            </div>
    )
  }
}
