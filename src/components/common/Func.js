import React from 'react'

const Func = () => {
    function clickHandle(){
        console.log('Welcome')
    }
    return (
        <div>
            <h3>Function Component</h3>
            <button className='btn btn-primary btn-sm' onClick={clickHandle}>Click</button>
        </div>
    )
}

export default Func