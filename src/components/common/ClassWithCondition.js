import React, { Component } from 'react';

class ClassWithCondition extends Component {
    
    state = { 
        message: true
     }

    render() { 

        // Method 1
        return this.state.message && <div>React</div>

        // Method 2 ternary operator
        // return this.state.message ? <div>React</div> : <div>Angular</div>

        // Method 3 element variable
        // let Condition
        // if (this.state.message) {
        //     Condition = <div>React</div>
        // }else{
        //     Condition = <div>Angular</div>
        // }

        // return Condition

        // Method 4
        // if(this.state.message){
        //     return (
        //         <div>React</div>
        //     )
        // }else{
        //     return(
        //         <div>Angular</div>
        //     )
        // }

        // return (
        //     <div>
        //         <p>React</p>
        //         <p>Angular</p>
        //     </div>
        // );
    }
}
 
export default ClassWithCondition;