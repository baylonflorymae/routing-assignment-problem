import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Course extends Component {
  state = {
    courses: null,
  };

  componentDidMount() {
    // console.log("Component Did Mount", this.props);
    this.loadCourse();
  }

  componentDidUpdate() {
    // console.log("Component Did Update", this.props);
    this.loadCourse();
  }

  loadCourse = () => {
    if (this.props.match.params.id) {
      if (
        !this.state.loadCourse ||
        (this.state.loadCourse && this.state.loadCourse.id) !==
          +this.props.match.params.id
      ) {
        axios.get("/courses/" + this.props.match.params.id).then((response) => {
          console.log(response);
          this.setState({ loadCourse: response.data });
        });
      }
    }
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/users" />;
    }
    return (
      <div onClick={this.props.clicked}>
        {redirect}
        <h1>{this.props.title}</h1>
        <p>
          <strong>
            You selected the Course with ID: {this.props.match.params.id}
          </strong>
        </p>
      </div>
    );
  }
}

export default Course;
