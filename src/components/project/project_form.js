import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addProject } from '../../actions/project_actions';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ProjectForm extends Component {
    state = {
        name: "",
        description: "",
        image_url: "",
        github_url: "",
        demo_vid: ""
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    handleSelect = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProject(this.state)
        this.props.history.push('/portfolio');
    }

    render() {
        return (
            <div className='project-form'>
                <h4>Add a new project</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Project Name:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.name} name="name"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image Link:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.image_url} name="image_url"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>GitHub Repository Link:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.github_url} name="github_url"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Link to Video Demo:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.demo_vid} name="demo_vid"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add New Project
                    </Button>

                </Form>
            </div>
        );
    }
}


export default connect(null, { addProject })(ProjectForm);
