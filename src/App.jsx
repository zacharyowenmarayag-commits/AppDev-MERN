import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import initialStudentData from "./data/students.json";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import Card from "./components/identityCard";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Home</h1>
      <div className="flex flex-wrap justify-center">
        <Card
          title="React Basics"
          description="Learn how to create components and props."
          image="https://picsum.photos/300/200"
        />
        <Card
          title="Reusable Components"
          description="Build flexible components for scalability."
          image="https://picsum.photos/300/201"
        />
        <Card
          title="Modern UI Development"
          description="Combine React with Tailwind CSS for fast design."
          image="https://picsum.photos/300/202"
        />
      </div>
    </div>
  );
}

function App() {
  const [students, setStudents] = useState(initialStudentData);

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      { ...newStudent, id: Date.now() },
    ]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-emerald-50">
        <nav className="bg-emerald-200 px-8 py-3 flex gap-8 text-sm font-semibold text-emerald-900 border-b border-emerald-300 shadow-sm">
          <Link to="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <Link to="/students" className="hover:text-emerald-700 transition-colors">
            Student Lists
          </Link>
          <Link to="/add-student" className="hover:text-emerald-700 transition-colors">
            Add Students
          </Link>
        </nav>

        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/students"
              element={<StudentList students={students} />}
            />
            <Route
              path="/students/:id"
              element={<StudentDetail students={students} />}
            />
            <Route
              path="/add-student"
              element={<AddStudent onAddStudent={handleAddStudent} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;