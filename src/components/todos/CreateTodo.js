import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type='text'
              placeholder='add todo'
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    );
  };

};

// option 1: connect with mapDispatchToProps argument

// handleSubmit = (event) => {
//   event.preventDefault();
//   this.props.addTodo(this.state)
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData }),
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateTodo);

// option 2 (implemented): connect with no args returns dispatch as a prop to the wrapped component
export default connect()(CreateTodo);