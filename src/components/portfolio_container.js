import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/project_actions'
import Project from './project/project'

class Portfolio extends Component {

    componentDidMount(){
        this.props.fetchProjects()
    }

    render() {
        const projects = this.props.projects.map(( project, i ) => <Project key={i} project={ project } />)
debugger
        return (
            <div>
                { projects }
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
      projects: state.projects
    }
  }
  
  
export default connect(mapStateToProps, { fetchProjects })(Portfolio)