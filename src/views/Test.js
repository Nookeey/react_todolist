import React from 'react';
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import UserPageTemplate from 'templates/UserPageTemplate';
import ProjectListTemplate from 'templates/ProjectListTemplate';

const Test = () => {
  return (
    <UserPageTemplate>
      <ProjectListTemplate>
        <h1>Test view</h1>
        <Link to="/">Home</Link>
      </ProjectListTemplate>
    </UserPageTemplate>
  )
}

export default Test;
