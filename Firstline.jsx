import React, { Component } from 'react'
import './index.css'

export default class Firstline extends Component {
    render() {
        return (
            <div className='fistline'>
                {this.props.children}
            </div>
        )
    }
}
