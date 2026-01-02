"use client";
import { useState, useEffect } from "react";

import Login from "@/components/admin/Login";
import SignUp from "@/components/admin/SignUp";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // On page load, check if user is logged in (replace with real auth)
  useEffect(() => {
    if (!isAuthenticated) setShowLogin(true);
  }, [isAuthenticated]);

  // Sample Reservations Data
  const reservations = [
    {
      id: 1,
      name: "John Doe",
      room: "Deluxe",
      checkIn: "2026-01-05",
      checkOut: "2026-01-07",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Jane Smith",
      room: "Suite",
      checkIn: "2026-01-10",
      checkOut: "2026-01-12",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mike Johnson",
      room: "Standard",
      checkIn: "2026-01-15",
      checkOut: "2026-01-17",
      status: "Cancelled",
    },
  ];

  if (!isAuthenticated) {
    return (
      <>
        <Login
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLoginSuccess={() => setIsAuthenticated(true)}
        />
        <SignUp
          isOpen={showSignup}
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          onSignupSuccess={() => setIsAuthenticated(true)}
        />
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <ul className="flex flex-col gap-3">
          <li className="hover:text-blue-600 cursor-pointer">Reservations</li>
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-700">Name</th>
                <th className="p-3 text-left text-gray-700">Room</th>
                <th className="p-3 text-left text-gray-700">Check-In</th>
                <th className="p-3 text-left text-gray-700">Check-Out</th>
                <th className="p-3 text-left text-gray-700">Status</th>
                <th className="p-3 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.room}</td>
                  <td className="p-3">{r.checkIn}</td>
                  <td className="p-3">{r.checkOut}</td>
                  <td className="p-3">{r.status}</td>
                  <td className="p-3 flex gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
