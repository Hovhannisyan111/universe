import React from 'react';
import { BookOpen, SearchIcon, History, Bookmark as Bookmark2 } from 'lucide-react';

export default function Library() {
  const books = [
    { id: 1, title: "Data Structures and Algorithms", author: "Thomas H. Cormen", status: "Available", dueDate: null },
    { id: 2, title: "Introduction to Machine Learning", author: "Ethem Alpaydin", status: "Checked Out", dueDate: "2024-03-25" },
    { id: 3, title: "Modern Web Development", author: "Dino Esposito", status: "Available", dueDate: null },
    { id: 4, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", status: "Reserved", dueDate: "2024-03-20" },
  ];

  const recentlyReturned = [
    { id: 5, title: "Clean Code", author: "Robert C. Martin" },
    { id: 6, title: "Design Patterns", author: "Erich Gamma" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">University Library</h1>
        
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for books, authors, or topics..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Books */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-600" />
              Available Books
            </h2>
            <div className="bg-white rounded-xl shadow-md">
              {books.map((book) => (
                <div key={book.id} className="p-4 border-b last:border-b-0 hover:bg-blue-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{book.title}</h3>
                      <p className="text-gray-600">{book.author}</p>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        book.status === 'Available' ? 'bg-green-100 text-green-800' :
                        book.status === 'Checked Out' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {book.status}
                      </span>
                    </div>
                  </div>
                  {book.dueDate && (
                    <div className="mt-2 text-sm text-gray-500 flex items-center">
                      <History className="w-4 h-4 mr-1" />
                      Due: {book.dueDate}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recently Returned */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Bookmark2 className="mr-2 text-blue-600" />
              Recently Returned
            </h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              {recentlyReturned.map((book) => (
                <div key={book.id} className="p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-xl p-4">
                <h3 className="text-blue-800 font-medium">Total Books</h3>
                <p className="text-2xl font-bold text-blue-900">1,234</p>
              </div>
              <div className="bg-green-100 rounded-xl p-4">
                <h3 className="text-green-800 font-medium">Available</h3>
                <p className="text-2xl font-bold text-green-900">891</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}