"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Mic, PenTool, Target, Award, Play } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const features = [
    {
      icon: Target,
      title: "Test Đầu Vào",
      description: "Đánh giá trình độ và nhận đề xuất khóa học phù hợp",
    },
    {
      icon: BookOpen,
      title: "Khóa Học Theo Trình Độ",
      description: "Các khóa học từ cơ bản đến nâng cao với video và bài tập",
    },
    {
      icon: Brain,
      title: "AI Chatbot",
      description: "Hỗ trợ từ vựng và ngữ pháp 24/7",
    },
    {
      icon: PenTool,
      title: "Luyện Writing AI",
      description: "AI sửa ngữ pháp và cải thiện kỹ năng viết",
    },
    {
      icon: Mic,
      title: "Luyện Speaking AI",
      description: "Thực hành nói với AI và nhận phản hồi",
    },
    {
      icon: Award,
      title: "Luyện Đề TOEIC",
      description: "Luyện theo part hoặc full test với chấm điểm tự động",
    },
  ]

  const courses = [
    {
      title: "TOEIC Cơ Bản",
      target: "300-450 điểm",
      price: "299,000đ",
      lessons: 24,
      duration: "2 tháng",
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Basic",
    },
    {
      title: "TOEIC Trung Cấp",
      target: "450-650 điểm",
      price: "499,000đ",
      lessons: 36,
      duration: "3 tháng",
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Intermediate",
    },
    {
      title: "TOEIC Nâng Cao",
      target: "650-850 điểm",
      price: "699,000đ",
      lessons: 48,
      duration: "4 tháng",
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Advanced",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header isLoggedIn={isLoggedIn} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Chinh phục <span className="text-blue-600">TOEIC</span> với AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nền tảng học TOEIC thông minh với AI hỗ trợ cá nhân hóa, giúp bạn đạt điểm số mục tiêu một cách hiệu quả
            nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => navigate("/placement-test")}>
              <Target className="mr-2 h-5 w-5" />
              Làm Test Đầu Vào
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent"
              onClick={() => navigate("/courses")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Xem Khóa Học
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tính Năng Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Khóa Học Phổ Biến</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{course.target}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {course.title}
                    <span className="text-blue-600 font-bold">{course.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Play className="h-4 w-4 mr-1" />
                      {course.lessons} bài học
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full">Mua Ngay</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Học viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tỷ lệ đạt mục tiêu</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Khóa học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Hỗ trợ AI</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
