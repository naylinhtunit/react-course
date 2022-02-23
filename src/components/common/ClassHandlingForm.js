import React, { Component } from 'react';

class ClassHandlingForm extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }

    handleSubmit = (e) => {

        // for page not refresh
        e.preventDefault();

        alert(`Username: ${ this.state.username } Comment: ${ this.state.comment }`)
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    commentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    render() { 

        // Distructuring
        const { username, comment } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mb-5'>
                    <h3>Class Component</h3>
                    <div className='col-4 m-auto mb-3'>
                        <label className='form-label'>Username</label>
                        <input type="text" className='form-control' value={ username } onChange={ this.handleChange } />
                    </div>
                    <div className='col-4 m-auto mb-3'>
                        <label className='form-label'>Comment</label>
                        <input type="text" className='form-control' value={ comment } onChange={ this.commentChange } />
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}
 
export default ClassHandlingForm;