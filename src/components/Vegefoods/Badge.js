import React, { Component } from 'react'

export default class Badge extends Component {
    render() {
        return (
            <div className="col-md-3 text-center d-flex align-self-stretch ">
                <div className="media block-6 services mb-md-0 mb-4">
                  <div className="icon bg-color-4 active d-flex justify-content-center align-items-center mb-2">
                    <span className={this.props.icon}></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading">{this.props.title}</h3>
                    <span>{this.props.description}</span>
                  </div>
                </div>
              </div>
        )
    }
}
