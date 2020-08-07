import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/users"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: "#09BCF0",
                      textDecoration: "underLine",
                    }}
                  >
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses"> Courses </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <ol style={{ textAlign: "left" }}>
              <p>
                1 Add Routes to load "Users" and "Courses" on different pages
                (by entering a URL, without NavLinks)
              </p>
              <p>
                2 Add a simple navigation with two NavLinks => One leading to
                "Users", one leading to "Courses"
              </p>
              <p>
                3 Make the courses in "Courses" clickable by adding a NavLink
                and load the "Course" component in the place of "Courses"
                (without passing any data for now)
              </p>
              <p>
                4 Pass the course ID to the "Course" page and output it there
              </p>
              <p>
                5 Pass the course title to the "Course" page - pass it as a
                param or score bonus points by passing it as query params (you
                need to manually parse them though!)
              </p>
              <p>
                6 Load the "Course" component as a nested component of "Courses"
              </p>
              <p>7 Add a 404 error page and render it for any unknown routes</p>
              <p>
                8 Redirect requests to /all-courses to /courses (=> Your
                "Courses" page)
              </p>
            </ol>
          </div>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/:id" component={Course} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
