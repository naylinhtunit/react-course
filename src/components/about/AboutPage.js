import React from 'react';
import Title from '../common/Title';
// import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='jumbotron'>
        {/* <Link to="/" className="btn btn-primary btn-lg mx-2">Home</Link>
        <Link to="/course" className="btn btn-primary btn-lg">Course</Link>
        <Link to="/about" className="btn btn-primary btn-lg mx-2">About</Link> */}
        <Title title="About" />   
    </div>
  )
}

export default AboutPage;