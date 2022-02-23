import React from 'react';

const FuncList2 = (props) => {
    console.log(props)

    // object destructuring
    const {name} = props
  return (
    <div>
        {/* <p>Name: { props.name.user } Age: { props.name.age }</p> */}
        <p>Name: { name.user } Age: { name.age }</p>
    </div>
  )
}

export default FuncList2;