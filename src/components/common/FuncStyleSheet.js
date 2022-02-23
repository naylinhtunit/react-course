import React from 'react';
// style sheet 
import './cssStyle.css';
// module style
import style from './cssStyle.module.css';

const FuncStyleSheet = () => {
  return (
    <div className='mb-5'>
        <h3 className='styleSheet'>CSS Style Sheet</h3>
        <p className={ style.styleSheet }>CSS Module Style</p>
    </div>
  )
}

export default FuncStyleSheet;