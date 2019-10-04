import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}>
                        <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text text-center">
                        <p className="mb-5 pl-4 line">{this.props.comment}</p>
                        <p className="name">{this.props.name}</p>
                        <span className="position">{this.props.username}</span>
                    </div>
                </div>
            </div>
        )
    }
}
