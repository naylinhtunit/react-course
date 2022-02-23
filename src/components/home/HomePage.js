import React from "react";
import ClassComponentCourse from "../common/ClassComponentCourse";
import Func from "../common/Func";
import ClassWithSet from "../common/ClassWithSet";
import Title from "../common/Title";
import ClassWithBinding from "../common/ClassWithBinding";
import ClassWithCondition from "../common/ClassWithCondition";
import ClassRequestHttp from "../common/ClassRequestHttp";
import FuncList from "../common/FuncList";
import ClassPostMethod from "../common/ClassPostMethod";
import ClassHandlingForm from "../common/ClassHandlingForm";
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
        {/* <Link to="/" className="btn btn-primary btn-lg mx-2">Home</Link>
        <Link to="/course" className="btn btn-primary btn-lg">Course</Link>
        <Link to="/about" className="btn btn-primary btn-lg mx-2">About</Link> */}
        <Title title="Home" />
        <Func />
        <FuncList />
        <ClassComponentCourse />
        <ClassWithSet />
        <ClassWithBinding />
        <ClassWithCondition />
        <ClassRequestHttp />
        <ClassPostMethod />
        <ClassHandlingForm />
    </div>
  )
}

export default HomePage;