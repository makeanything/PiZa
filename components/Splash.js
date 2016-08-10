import React, { Component } from 'react'
// import { Link }, { Router } from 'react-router'

export default class Splash extends Component {
  componentWillMount() {
  }

  render() {
    let styles = {
      image: {
        display: 'block',
        borderRadius: '5px'
      },

      header: {
        position: 'absolute',
        fontFamily: 'futura',
        fontSize: '10em',
        webkitTextStroke: '4px black',
        color: 'white',
        marginTop: '96px',
        marginLeft: '2.5em',
      },

      descript: {
        position: 'absolute',
        color: 'white',
        marginTop: '-14.5em',
        marginLeft: '6em',
        textShadow: '5px 5px 2px #404040',
      }
    }
    return (
      <div>
        <h1 style={styles.header}>PiZa!
        <br/>
        Proudly Presents:</h1>
        <center>
          <img style={styles.image} src={'http://livesimply.me/wp-content/uploads/2015/10/Weekly-Food-Prep-A-Real-Life-Video-Guide.jpg'}/>
          <h1 style={styles.descript}>Get together in a commercial kitchen and
          <br/> prepare food for the entire week, as a community.
          <br/>
          <br/>
          Save Money, Have Time & Eat Healthier!
          </h1>
        </center>
      </div>
    )
  }
}
