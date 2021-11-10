import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Project extends Component {
    render() {
        return (
            <div className="project-item">
                <Link to={`/projects/${this.props.project.id}`} className="link">
                <h3 className="project-title">{this.props.project.name}</h3><br/>
                <img src={this.props.project.image_url} alt= "image" className="project-main"/>
                </Link>
                {/* <button onClick={() => this.setState({ likes: this.state.likes +1})} className="like-button">Like: {this.state.likes}</button> */}
        </div>
        );
    }
}

export default Project;
