import React, { Component } from 'react';

class ClassComponentCourse  extends Component {
    // ES6 style
    // constructor(){
    //     super();
    //     this.state={
    //         message: 'Thank for Message'
    //     }
    //     // ES6 this for bind
    //     // this.changeMessage = this.changeMessage.bind(this)
    // }

    // ES7 style
    state = {
        message: 'Thank for Message'
    }

    changeMessage = () => {
        this.setState({
            message: 'Welcome'
        })
    }

    render() { 
        return (
            <div className='my-5'>
                <h3>Class Component</h3>
                <p>{ this.state.message }</p>
                {/* inline */}
                {/* <button className='btn btn-primary btn-sm' onClick={() => this.changeMessage()}>Change</button> */}
                <button className='btn btn-primary btn-sm' onClick={this.changeMessage}>Change</button>
            </div>
        );
    }
}
 
export default ClassComponentCourse;