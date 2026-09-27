import React from "react";
import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <div className="flex-1 p-6 flex flex-col justify-start">
      <h1 className="text-3xl font-bold text-center mb-6">Student Lists!</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {students.map((student) => {
          const studentId = student.id || student.studentNumber;
          return (
            <div
              key={studentId}
              className="bg-emerald-100/70 border border-emerald-200 p-4 rounded-xl shadow-md w-72 flex flex-col justify-between text-sm"
            >
              <div>
                <p className="font-medium">
                  <span className="font-semibold">FullName:</span> {student.fullName}
                </p>
                <p className="font-medium">
                  <span className="font-semibold">Student Number:</span> {student.studentNumber}
                </p>
                <p className="font-medium">
                  <span className="font-semibold">Course:</span> {student.course}
                </p>
                <p className="font-medium">
                  <span className="font-semibold">Course Description:</span> {student.courseDescription}
                </p>
                {student.yearLevel && (
                  <p className="font-medium">
                    <span className="font-semibold">Year Level:</span> {student.yearLevel}
                  </p>
                )}
                {student.sex && (
                  <p className="font-medium">
                    <span className="font-semibold">Sex:</span> {student.sex}
                  </p>
                )}
              </div>
              <Link
                to={`/students/${studentId}`}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1 px-3 rounded-lg text-xs self-center transition-colors inline-block text-center"
              >
                View full details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
