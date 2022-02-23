import React from 'react';
import FuncList2 from './FuncList2';

const FuncList = () => {
    // const names = ['mg mg', 'ko ko', 'aung aung']
    // Object array
    const names = [
        {
            id: 1,
            age: 20,
            user: 'mg mg'
        },
        {
            id: 2,
            age: 30,
            user: 'ko ko'
        },
        {
            id: 3,
            age: 35,
            user: 'aung aung'
        }
    ]
  return (
    <div className='my-5'>
        <h3>Function Component</h3>
        {/* {names.map(name => <p>Name: { name.user } Age:{ name.age }</p>)} */}
        {names.map(name => <FuncList2 key={name.id} name={name} />)}
    </div>
  )
}

export default FuncList;