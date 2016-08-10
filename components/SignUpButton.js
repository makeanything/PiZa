import React, { Component } from 'react'

export default class SignUpButton extends Component {
  render() {
    let styles = {
      button: {
        position: 'absolute',
        marginTop: '-6.4em',
        marginLeft: '-4em',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '5%',
        backgroundColor: '#66a3ff',
        color: 'white',
        fontWeight: 'bold',
        // webkitTextStroke: '2px black',
        fontSize: '4em',
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '1em',
        paddingBottom: '1em',
        boxShadow: '10px 10px 5px #404040'

      }
    }

    return(
      <center>
        <a style={styles.button} href={'https://goo.gl/forms/6rizkaEuvVdITBMv2'}>Sign Me Up!</a>
      </center>
    )
  }
}
