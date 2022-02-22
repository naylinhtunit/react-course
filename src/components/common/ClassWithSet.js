import React, { Component } from 'react';

class ClassWithSet extends Component {
    state = { 
        count: 0
     }
     
    // ES7 style 
    Increment = () => {
        // this.state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        }, () => {console.log("CallBack value", this.state.count)})
        console.log(this.state.count)
    } 

    render() { 
        return (
            <div className='my-5'>
                <h3>Class Component</h3>
                <p>Count - { this.state.count }</p>
                <button className='btn btn-primary btn-sm' onClick={this.Increment}>Increament</button>
            </div>
        );
    }
}
 
export default ClassWithSet;