import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
      grandchildColor: 
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]
    
    for (i=0; i<count; i++) {
      colors.push(getReducedColor(colors[colors.length -1]))
    }
    return colors
  }

  handleClick = () => {
    const [c1, c2, c3] = this.generateColors()
    this.setState({
      color: c1,
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    const [c2, c3] = this.generateColors(2)
    this.setState({
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleGrandchildClick = (e) => {
    e.stopPropagation()
    const [c3] = this.generateColors(1)
    this.setState({
      grandchildColor: c3
    })
  }


  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} />
        <Tier2 color={this.state.childColor} />
      </div>
    )
  }
}







