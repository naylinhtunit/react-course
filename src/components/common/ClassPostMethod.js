import axios from 'axios';
import React, { Component } from 'react';

class ClassPostMethod extends Component {

    state = {
        title: '',
        body: '',
        userId: ''
    }

    handleChange = (e) => {
        this.setState({
            // key value style
            [e.target.name] : e.target.value
        })
        // console.log(this.state.title);
    }

    handleSubmit = (e) => {
        
        console.log(this.state);
        
        // for page not refresh
        e.preventDefault();
        
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(Response => {
            console.log(Response)
        })
        .catch(Error => {
            console.log(Error)
        })
    }

    render() { 
        // Destructuring
        const {title, body, userId} = this.state
        return (
            <div className='mb-5'>
                <h3>Class Component</h3>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='col-4 m-auto mb-3'>
                            <input type="text" name="title" value={title} onChange={this.handleChange} className='form-control' placeholder='Enter Title' />
                        </div>
                        <div className='col-4 m-auto mb-3'>
                            <input type="text" name="body" value={body} onChange={this.handleChange} className='form-control' placeholder='Enter body' />
                        </div>
                        <div className='col-4 m-auto mb-3'>
                            <input type="number" name="userId" value={userId} onChange={this.handleChange} className='form-control' placeholder='Enter user id' />
                        </div>
                        <div><button type="submit" className='btn btn-primary'>Submit</button></div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default ClassPostMethod;