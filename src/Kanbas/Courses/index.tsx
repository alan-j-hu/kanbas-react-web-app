import { Routes, Route, Navigate } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">Course 1234</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h2>Home</h2>} />
            <Route path="Modules" element={<h2>Modules</h2>} />
            <Route path="Assignments" element={<h2>Assignments</h2>} />
            <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
);}
