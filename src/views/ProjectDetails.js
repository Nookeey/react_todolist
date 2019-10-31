import React, { Component } from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';

class ProjectDetails extends Component {
  state = {
    activeItem: {
      id: '',
      name: '',
      status: ''
    }
  }

  componentDidMount() {
    console.log(this.props);
    
  }

  render() {
    const { activeItem } = this.state

    return (
      <UserPageTemplate>
        <p>{ activeItem.id }</p>
        <p>{ activeItem.name }</p>
        <p>{ activeItem.status }</p>
      </UserPageTemplate>
    )
  }
}

export default ProjectDetails;