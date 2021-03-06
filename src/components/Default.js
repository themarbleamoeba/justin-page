import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">404 Error</h1>
              <h1>Page Not Found</h1>
              <h3>
                The requested URL <span className="text-danger">{this.props.location.pathname}</span> {" "} does not exist
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
