import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from '../../molecules/ProjectListItem/ProjectListItem'

class ProjectsList extends Component {
  
  render() {
    const { projects } = this.props

    return (
      projects.map(({ id, name, status}) => (
        <ProjectListItem 
          id={id}
          name={name}
          status={status}
          key={id}
        />
      ))
    );
  }

}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  })).isRequired
}

export default ProjectsList;