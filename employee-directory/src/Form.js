import React, {Component} from 'react';

// Form Component
    // Update the state when a field in the Form is changed
    // On submit: the data will pass to the App state and update the Table
class Form extends Component {
    initialState = {
        name: '',
        position: ''
    }

    // Current State
    state = this.initialState

    // Custom Method to run on an input change
    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    // Custom method to call the handle submit function and pass the Form state through as the 'employee' parameter defined in App
        // Will reset the state to the initial state to clear the form after submission
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        // Grab the two properties from initial State
        const { name, position } = this.state;

        // The Form that is seen by the user
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    value={position}
                    onChange={this.handleChange} />
                <input type="button" value="Add" onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;