import React, { Component } from 'react';
import redPlanet from '../assets/planets/red-planet.svg';
// Loader by Sam Herbert
import Loader from '../assets/loader.svg'
import { User } from '../users/user';

const styles = {
  transition: 'all 0.3s ease-out'
}

export class Planet extends User {

  onClickPlanet() {
    this.setState({
      user: {
        points: this.state.user.points += 1
      },
      planet: {
        scale: this.state.planet.scale < 1 ? 1 : 0.9,
        height: "500px",
        width: "500px"
      }
    });

  }

  hideLoader() {
    this.setState({
      planet: {
        loaded: true,
        scale: 1,
        height: "500px",
        width: "500px"
      }
    });
  }

  render() {

    const loaderControler = this.state.planet.loaded == false ? <img src={ Loader }/> : (
      <div className="siimple-grid-row">
        <div className="siimple-grid-col siimple-grid-col--12">
          <h1>You have {this.state.user.points} points</h1>
        </div>
      </div> );

    return(
    <div>
      <div className="siimple-grid">
        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--12">
            <div style={{...styles, scale: this.state.planet.scale, transform: 'scale(' + this.state.planet.scale + ')'}}>
              <img className="planet"
                src={ redPlanet }
                height={ this.state.planet.height }
                width={ this.state.planet.width }
                onClick={ this.onClickPlanet.bind(this) }
                onLoad={ this.hideLoader.bind(this) }
                style={ { cursor: 'pointer' } }
              />
            </div>
          </div>
        </div>
            { loaderControler }
      </div>
    </div>
    );
  }
}
