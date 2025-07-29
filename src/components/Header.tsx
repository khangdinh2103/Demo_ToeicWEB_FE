"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
  isLoggedIn?: boolean
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const navigate = useNavigate()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">TOEIC Master</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-blue-600">
              Trang chủ
            </button>
            <button onClick={() => navigate("/courses")} className="text-gray-700 hover:text-blue-600">
              Khóa học
            </button>
            <button onClick={() => navigate("/practice")} className="text-gray-700 hover:text-blue-600">
              Luyện tập
            </button>
            <button onClick={() => navigate("/ai-tools")} className="text-gray-700 hover:text-blue-600">
              AI Tools
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={() => navigate("/login")}>
                  Đăng nhập
                </Button>
                <Button onClick={() => navigate("/register")}>Đăng ký</Button>
              </>
            ) : (
              <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
