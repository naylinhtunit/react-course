import React from 'react';
import FuncList2 from './FuncList2';

const FuncList = () => {
    // const names = ['mg mg', 'ko ko', 'aung aung']
    // Object array
    const names = [
        {
            age: 20,
            user: 'mg mg'
        },
        {
            age: 30,
            user: 'ko ko'
        },
        {
            age: 35,
            user: 'aung aung'
        }
    ]
  return (
    <div className='my-5'>
        <h3>Function Component</h3>
        {/* {names.map(name => <p>Name: { name.user } Age:{ name.age }</p>)} */}
        {names.map(name => <FuncList2 name={name} />)}
    </div>
  )
}

export default FuncList;