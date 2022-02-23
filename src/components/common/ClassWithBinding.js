import React, { Component } from 'react';

class ClassWithBinding extends Component {
    
    // ES6 style
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
        // ES6 bind method
        // this.handleChange = this.handleChange.bind(this)
    }
    
    // ES7 method
    handleChange = () => {
        this.setState({
            message: 'Work from home'
        })
    }

    render() { 
        return (
            <div>
                <h3>Class Component</h3>
                <p>{ this.state.message }</p>
                {/* inline style */}
                {/* <button className='btn btn-primary btn-sm' onClick={() => this.handleChange}>Click</button> */}
                <button className='btn btn-primary btn-sm' onClick={this.handleChange}>Click</button>
            </div>
        );
    }
}
 
export default ClassWithBinding;