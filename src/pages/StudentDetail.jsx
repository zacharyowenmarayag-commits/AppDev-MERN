import React from "react";
import { useParams, Link } from "react-router-dom";

function StudentDetail({ students }) {
  const { id } = useParams();

  const student = students.find(
    (s) => String(s.id) === String(id) || String(s.studentNumber) === String(id)
  );

  if (!student) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Student Not Found</h2>
        <Link
          to="/students"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
        >
          Back to Student List
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 flex justify-center items-center py-10 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-emerald-200">
        <h2 className="text-2xl font-bold text-center text-emerald-900 mb-6 border-b pb-3">
          Student Information
        </h2>

        <div className="space-y-3 text-gray-700 text-xs">
          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Full Name:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.fullName}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Student Number:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.studentNumber}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Course:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.course}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Course Description:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.courseDescription || "N/A"}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Year Level:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.yearLevel || "N/A"}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="font-semibold text-gray-600">Sex:</span>
            <span className="font-medium text-gray-900 mt-0.5">{student.sex || "N/A"}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/students"
            className="text-xs text-emerald-700 hover:text-emerald-900 font-medium hover:underline transition-colors"
          >
            ← Back to Student List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;
