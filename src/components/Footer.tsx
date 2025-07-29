import type React from "react"
import { BookOpen } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">TOEIC Master</span>
            </div>
            <p className="text-gray-400">Nền tảng học TOEIC thông minh với công nghệ AI tiên tiến</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Khóa học</h3>
            <ul className="space-y-2 text-gray-400">
              <li>TOEIC Cơ bản</li>
              <li>TOEIC Trung cấp</li>
              <li>TOEIC Nâng cao</li>
              <li>TOEIC Speaking & Writing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tính năng</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI Chatbot</li>
              <li>Luyện Writing</li>
              <li>Luyện Speaking</li>
              <li>Luyện đề</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@toeicmaster.com</li>
              <li>Phone: 1900-1234</li>
              <li>Địa chỉ: 123 Nguyễn Văn A, Q1, HCM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TOEIC Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
