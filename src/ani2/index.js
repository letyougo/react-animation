import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import 'animate.css'

export default class Animate extends Component{
	render() {
		return (
			<div ref>
				{this.props.children}
			</div>
		);
	}
	
	componentDidMount() {
		let dom = ReactDOM.findDOMNode(this)
		dom.classList.add('animated', 'bounceInLeft')
	}
	
}