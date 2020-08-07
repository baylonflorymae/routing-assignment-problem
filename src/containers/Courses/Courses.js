import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./Courses.css";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
    show: false,
  };

  componentDidMount() {
    console.log(this.props);
    this.courseSelectorHandler();
  }

  courseSelectorHandler = () => {
    this.setState({ show: true });
  };

  render() {
    // console.log(this.props);
    const disabledInfo = { ...this.state.courses };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0;
    }

    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section
          className="Courses"
          onClick={() => this.courseSelectorHandler()}
        >
          {this.state.courses.map((course) => {
            return (
              <Link to={"/courses" + course.id} key={course.id}>
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
          <div>
            <Route
              path={this.props.match.params + "/:id"}
              exact
              render={() => (
                <Course
                  id={this.state.courses.id}
                  title={this.state.courses.title}
                />
              )}
            ></Route>
          </div>
        </section>
      </div>
    );
  }
}

export default Courses;
