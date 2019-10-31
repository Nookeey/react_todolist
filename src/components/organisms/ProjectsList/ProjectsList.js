import React, { Component } from 'react';
import TableItem from '../../molecules/TableItem/TabelItem'

class ProjectsList extends Component {
  
  render() {
    // eslint-disable-next-line react/prop-types
    const { projects } = this.props

    return (
      // eslint-disable-next-line react/prop-types
      projects.map(({ id, name, status}) => (
        <TableItem 
          id={id}
          name={name}
          status={status}
          key={id}
        />
      ))
    );
  }

}

export default ProjectsList;