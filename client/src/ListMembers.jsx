import React, { Component } from "react";

class ListMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="member">
          <p>{this.props.member}</p>
        </div>
      </>
    );
  }
}

export default ListMembers;
