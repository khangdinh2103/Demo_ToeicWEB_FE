"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Brain, Mic, PenTool, Target, Award, Play, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState("toeic-4-skills")
  const [currentLevel, setCurrentLevel] = useState("lr-1-295-sw-1-99")
  const [targetLevel, setTargetLevel] = useState("lr-600-sw-200")

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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "TOEIC Trung Cấp",
      target: "450-650 điểm",
      price: "499,000đ",
      lessons: 36,
      duration: "3 tháng",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "TOEIC Nâng Cao",
      target: "650-850 điểm",
      price: "699,000đ",
      lessons: 48,
      duration: "4 tháng",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">STAREDU</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Trang chủ
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600">
                Khóa học
              </Link>
              <Link href="/practice" className="text-gray-700 hover:text-blue-600">
                Luyện tập
              </Link>
              <Link href="/ai-tools" className="text-gray-700 hover:text-blue-600">
                AI Tools
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                  <Link href="/login">
                    <Button variant="ghost">Đăng nhập</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Đăng ký</Button>
                  </Link>
                </>
              ) : (
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

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
            <Link href="/placement-test">
              <Button size="lg" className="text-lg px-8 py-3">
                <Target className="mr-2 h-5 w-5" />
                Làm Test Đầu Vào
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                <BookOpen className="mr-2 h-5 w-5" />
                Xem Khóa Học
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Recommendation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tìm Khóa Học Phù Hợp</h2>
            <p className="text-blue-100 text-lg">Chọn kỹ năng, trình độ hiện tại và mục tiêu để nhận đề xuất khóa học tốt nhất</p>
          </div>

          {/* Skills Tabs */}
          <Tabs value={selectedSkills} onValueChange={setSelectedSkills} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/10 backdrop-blur-sm border border-white/20 p-1">
                <TabsTrigger 
                  value="toeic-listening-reading" 
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                >
                  TOEIC Listening & Reading
                </TabsTrigger>
                <TabsTrigger 
                  value="toeic-speaking-writing" 
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                >
                  TOEIC Speaking & Writing
                </TabsTrigger>
                <TabsTrigger 
                  value="toeic-4-skills" 
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
                >
                  TOEIC 4 kỹ năng
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="toeic-listening-reading" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Trình độ của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "lr-1-295", label: "TOEIC LR 1–295", isSelected: true },
                      { id: "lr-300-595", label: "TOEIC LR 300–595", isSelected: false },
                      { id: "lr-600-650", label: "TOEIC LR 600–650", isSelected: false }
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setCurrentLevel(level.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          currentLevel === level.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <Link href="/placement-test" className="text-blue-200 hover:text-white underline text-sm">
                      Bạn chưa rõ trình độ bản thân? Kiểm tra đầu vào
                    </Link>
                  </div>
                </div>

                {/* Target Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Mục tiêu của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "lr-300", label: "TOEIC LR 300", isSelected: false },
                      { id: "lr-600", label: "TOEIC LR 600", isSelected: true },
                      { id: "lr-800", label: "TOEIC LR 800+", isSelected: false }
                    ].map((target) => (
                      <button
                        key={target.id}
                        onClick={() => setTargetLevel(target.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          targetLevel === target.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {target.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="toeic-speaking-writing" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Trình độ của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "sw-1-99", label: "TOEIC SW 1–99", isSelected: true },
                      { id: "sw-100-199", label: "TOEIC SW 100–199", isSelected: false },
                      { id: "sw-200-250", label: "TOEIC SW 200–250", isSelected: false }
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setCurrentLevel(level.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          currentLevel === level.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <Link href="/placement-test" className="text-blue-200 hover:text-white underline text-sm">
                      Bạn chưa rõ trình độ bản thân? Kiểm tra đầu vào
                    </Link>
                  </div>
                </div>

                {/* Target Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Mục tiêu của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "sw-100", label: "TOEIC SW 100", isSelected: false },
                      { id: "sw-200", label: "TOEIC SW 200", isSelected: true },
                      { id: "sw-300", label: "TOEIC SW 300+", isSelected: false }
                    ].map((target) => (
                      <button
                        key={target.id}
                        onClick={() => setTargetLevel(target.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          targetLevel === target.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {target.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="toeic-4-skills" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Trình độ của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "lr-1-295-sw-1-99", label: "TOEIC LR 1–295 & SW 1–99", isSelected: true },
                      { id: "lr-300-595-sw-100-199", label: "TOEIC LR 300–595 & SW 100–199", isSelected: false },
                      { id: "lr-600-650-sw-200-250", label: "TOEIC LR 600–650 & SW 200–250", isSelected: false }
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setCurrentLevel(level.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          currentLevel === level.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <Link href="/placement-test" className="text-blue-200 hover:text-white underline text-sm">
                      Bạn chưa rõ trình độ bản thân? Kiểm tra đầu vào
                    </Link>
                  </div>
                </div>

                {/* Target Level Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Mục tiêu của tôi</h3>
                  <div className="space-y-3">
                    {[
                      { id: "lr-300-sw-100", label: "TOEIC LR 300 & SW 100", isSelected: false },
                      { id: "lr-600-sw-200", label: "TOEIC LR 600 & SW 200", isSelected: true },
                      { id: "lr-800-sw-300", label: "TOEIC LR 800+ & SW 300+", isSelected: false }
                    ].map((target) => (
                      <button
                        key={target.id}
                        onClick={() => setTargetLevel(target.id)}
                        className={`w-full p-4 rounded-lg text-center font-medium transition-all ${
                          targetLevel === target.id
                            ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {target.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Path */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-8">Lộ trình học đề xuất</h3>
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Chapter 1 */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">★</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs">
                      <h4 className="font-bold mb-2">Chặng 1</h4>
                      <p className="text-sm mb-2">TOEIC 4 kỹ năng Nền tảng</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="hidden lg:block h-6 w-6 text-white/60" />

                  {/* Chapter 2 */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-sm">★</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs">
                      <h4 className="font-bold mb-2">Chặng 2</h4>
                      <p className="text-sm mb-2">TOEIC 4 kỹ năng Trung cấp</p>
                    </div>
                  </div>
                </div>

                {/* Course Summary */}
                <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-sm">2 chặng</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <Play className="h-5 w-5" />
                    <span className="text-sm">Gồm 9 khóa học nhỏ</span>
                  </div>
                  <div className="bg-yellow-500 text-yellow-900 rounded-lg p-4 font-bold">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span className="text-sm">Cam kết mục tiêu đầu ra</span>
                    </div>
                    <div className="text-xs mt-1">TOEIC LR 600 & SW 200</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link href="/courses">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                      Bắt đầu học ngay
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">STAREDU</span>
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
            <p>&copy; 2024 STAREDU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
