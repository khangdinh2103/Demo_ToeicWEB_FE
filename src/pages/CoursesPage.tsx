"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Clock, Users, Star, Search, Filter } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")

  const courses = [
    {
      id: 1,
      title: "TOEIC Cơ Bản - Từ 0 đến 450 điểm",
      description: "Khóa học dành cho người mới bắt đầu, xây dựng nền tảng vững chắc",
      level: "Cơ bản",
      target: "300-450 điểm",
      price: "299,000đ",
      originalPrice: "399,000đ",
      lessons: 24,
      duration: "2 tháng",
      students: 1250,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Basic",
      instructor: "Thầy Minh Tuấn",
      features: ["24 video bài giảng", "200+ bài tập", "Tài liệu PDF", "Hỗ trợ 24/7"],
      bestseller: true,
    },
    {
      id: 2,
      title: "TOEIC Trung Cấp - 450 đến 650 điểm",
      description: "Nâng cao kỹ năng và chiến lược làm bài hiệu quả",
      level: "Trung cấp",
      target: "450-650 điểm",
      price: "499,000đ",
      originalPrice: "699,000đ",
      lessons: 36,
      duration: "3 tháng",
      students: 980,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Intermediate",
      instructor: "Cô Lan Anh",
      features: ["36 video bài giảng", "400+ bài tập", "Mock tests", "Phân tích chi tiết"],
      popular: true,
    },
    {
      id: 3,
      title: "TOEIC Nâng Cao - 650 đến 850+ điểm",
      description: "Hoàn thiện kỹ năng để đạt điểm số cao nhất",
      level: "Nâng cao",
      target: "650-850+ điểm",
      price: "699,000đ",
      originalPrice: "999,000đ",
      lessons: 48,
      duration: "4 tháng",
      students: 756,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Advanced",
      instructor: "Thầy Đức Anh",
      features: ["48 video bài giảng", "600+ bài tập", "Advanced strategies", "1-on-1 coaching"],
    },
    {
      id: 4,
      title: "TOEIC Speaking & Writing",
      description: "Chuyên sâu về kỹ năng nói và viết trong TOEIC",
      level: "Trung cấp",
      target: "Speaking & Writing",
      price: "599,000đ",
      originalPrice: "799,000đ",
      lessons: 30,
      duration: "2.5 tháng",
      students: 432,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+SW",
      instructor: "Cô Thu Hà",
      features: ["30 video bài giảng", "AI Speaking practice", "Writing feedback", "Live sessions"],
    },
    {
      id: 5,
      title: "TOEIC Listening Mastery",
      description: "Chinh phục phần Listening với các kỹ thuật chuyên sâu",
      level: "Tất cả",
      target: "Listening Skills",
      price: "399,000đ",
      originalPrice: "549,000đ",
      lessons: 20,
      duration: "1.5 tháng",
      students: 623,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Listening",
      instructor: "Thầy Hoàng Nam",
      features: ["20 video bài giảng", "Audio materials", "Listening strategies", "Practice tests"],
    },
    {
      id: 6,
      title: "TOEIC Reading Strategies",
      description: "Nâng cao tốc độ đọc và hiểu văn bản hiệu quả",
      level: "Tất cả",
      target: "Reading Skills",
      price: "399,000đ",
      originalPrice: "549,000đ",
      lessons: 18,
      duration: "1.5 tháng",
      students: 567,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300&text=TOEIC+Reading",
      instructor: "Cô Mai Linh",
      features: ["18 video bài giảng", "Reading techniques", "Time management", "Vocabulary building"],
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "under-500k" && Number.parseInt(course.price.replace(/[^\d]/g, "")) < 500000) ||
      (selectedPrice === "500k-700k" &&
        Number.parseInt(course.price.replace(/[^\d]/g, "")) >= 500000 &&
        Number.parseInt(course.price.replace(/[^\d]/g, "")) <= 700000) ||
      (selectedPrice === "over-700k" && Number.parseInt(course.price.replace(/[^\d]/g, "")) > 700000)

    return matchesSearch && matchesLevel && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Khóa Học TOEIC</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Chọn khóa học phù hợp với trình độ và mục tiêu của bạn. Được thiết kế bởi các chuyên gia hàng đầu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm">Học viên</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Đạt mục tiêu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-sm">Đánh giá TB</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn trình độ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trình độ</SelectItem>
                <SelectItem value="Cơ bản">Cơ bản</SelectItem>
                <SelectItem value="Trung cấp">Trung cấp</SelectItem>
                <SelectItem value="Nâng cao">Nâng cao</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Khoảng giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả giá</SelectItem>
                <SelectItem value="under-500k">Dưới 500k</SelectItem>
                <SelectItem value="500k-700k">500k - 700k</SelectItem>
                <SelectItem value="over-700k">Trên 700k</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Bộ lọc khác
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {course.bestseller && <Badge className="bg-orange-500 hover:bg-orange-600">Bestseller</Badge>}
                  {course.popular && <Badge className="bg-green-500 hover:bg-green-600">Phổ biến</Badge>}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{course.target}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-sm mb-3">{course.description}</CardDescription>
                    <div className="text-sm text-gray-600 mb-2">
                      Giảng viên: <span className="font-medium">{course.instructor}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1" />
                    {course.lessons} bài
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students} đánh giá)</span>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Nội dung khóa học:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600">
                        Tiết kiệm{" "}
                        {Number.parseInt(course.originalPrice.replace(/[^\d]/g, "")) -
                          Number.parseInt(course.price.replace(/[^\d]/g, ""))}
                        đ
                      </div>
                    </div>
                    <Button>Mua ngay</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">Không tìm thấy khóa học phù hợp</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedLevel("all")
                setSelectedPrice("all")
              }}
            >
              Xóa bộ lọc
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Chưa chắc chắn khóa học nào phù hợp?</h2>
          <p className="text-xl mb-6">Làm bài test đầu vào để nhận đề xuất khóa học cá nhân hóa</p>
          <Button size="lg" variant="secondary">
            Làm test đầu vào miễn phí
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default CoursesPage
