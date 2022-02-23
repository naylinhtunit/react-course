import Axios from 'axios';
import React, { Component } from 'react';

class ClassRequestHttp extends Component { 
    
    state = {
        posts: [],
        msg: " ",
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    msg: 'Data Loading!'
                })
            })
    }

    render() { 
        // Destructuring
        const { posts, msg } = this.state
        return (
            <div className='my-5'>
                <h3>Class Component</h3>
                { msg ? <div>{ msg }</div> : null }
                { posts ? posts.map(post => <div className='container' key={post.id}>Title: { post.title }</div>) : null }
            </div>
        );
    }
}
 
export default ClassRequestHttp;