import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Library, 
  MessageSquare, 
  Bell,
  User,
  Clock,
  LogOut
} from 'lucide-react';

function App() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const courses = [
    { id: 1, name: "Introduction to Computer Science", time: "9:00 AM", room: "CS-101" },
    { id: 2, name: "Advanced Mathematics", time: "11:00 AM", room: "MATH-201" },
    { id: 3, name: "Physics Laboratory", time: "2:00 PM", room: "PHY-LAB" },
  ];

  const announcements = [
    { id: 1, title: "Campus Event", message: "Annual Tech Fair next week!" },
    { id: 2, title: "Library Notice", message: "Extended hours during finals" },
  ];

  const notifications = [
    { id: 1, message: "New grade posted in CS-101" },
    { id: 2, message: "Upcoming assignment due tomorrow" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <h1 className="text-2xl font-bold">Universe</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell 
                className="cursor-pointer hover:text-blue-200" 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
                  {notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-2 hover:bg-gray-50">
                      {notification.message}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <span className="hidden md:block">Arman Hovhannisyan</span>
              </div>
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
                  <a href="#profile" className="flex items-center px-4 py-2 hover:bg-gray-50">
                    <User size={16} className="mr-2" />
                    Profile
                  </a>
                  <a href="#settings" className="flex items-center px-4 py-2 hover:bg-gray-50">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="text-blue-600" />
              <h2 className="text-xl font-semibold">Today's Schedule</h2>
            </div>
            <div className="space-y-4">
              {courses.map(course => (
                <div key={course.id} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h3 className="font-medium">{course.name}</h3>
                  <p className="text-sm text-gray-600">{course.time} - Room {course.room}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.location.href = '#library'}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Library className="text-blue-600 mb-2" />
                <span>Library</span>
              </button>
              <button 
                onClick={() => window.location.href = '#calendar'}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="text-blue-600 mb-2" />
                <span>Calendar</span>
              </button>
              <button 
                onClick={() => window.location.href = '#courses'}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <BookOpen className="text-blue-600 mb-2" />
                <span>Courses</span>
              </button>
              <button 
                onClick={() => window.location.href = '#messages'}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MessageSquare className="text-blue-600 mb-2" />
                <span>Messages</span>
              </button>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
            <div className="space-y-4">
              {announcements.map(announcement => (
                <div key={announcement.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium">{announcement.title}</h3>
                  <p className="text-sm text-gray-600">{announcement.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Image */}
        <div