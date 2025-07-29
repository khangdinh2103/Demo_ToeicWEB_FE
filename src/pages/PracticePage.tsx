"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Target, Award, Play, Headphones, FileText, CheckCircle, TrendingUp, BarChart3 } from "lucide-react"
import Header from "../components/Header"

const PracticePage: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null)

  const toeicParts = [
    {
      part: "Part 1",
      name: "Photographs",
      description: "Mô tả hình ảnh",
      questions: 6,
      type: "Listening",
      icon: Headphones,
      difficulty: "Dễ",
      avgTime: "30 giây/câu",
      tips: "Tập trung vào chi tiết trong hình, chú ý thì hiện tại tiếp diễn",
    },
    {
      part: "Part 2",
      name: "Question-Response",
      description: "Hỏi đáp",
      questions: 25,
      type: "Listening",
      icon: Headphones,
      difficulty: "Trung bình",
      avgTime: "5 giây/câu",
      tips: "Chú ý từ khóa trong câu hỏi, loại trừ đáp án không liên quan",
    },
    {
      part: "Part 3",
      name: "Conversations",
      description: "Đối thoại",
      questions: 39,
      type: "Listening",
      icon: Headphones,
      difficulty: "Khó",
      avgTime: "30 giây/câu",
      tips: "Đọc trước câu hỏi, chú ý ngữ cảnh và chi tiết cụ thể",
    },
    {
      part: "Part 4",
      name: "Talks",
      description: "Bài nói chuyện",
      questions: 30,
      type: "Listening",
      icon: Headphones,
      difficulty: "Khó",
      avgTime: "30 giây/câu",
      tips: "Xác định loại bài nói, chú ý thông tin chi tiết và mục đích",
    },
    {
      part: "Part 5",
      name: "Incomplete Sentences",
      description: "Hoàn thành câu",
      questions: 30,
      type: "Reading",
      icon: FileText,
      difficulty: "Trung bình",
      avgTime: "20 giây/câu",
      tips: "Xác định loại từ cần điền, chú ý ngữ pháp và từ vựng",
    },
    {
      part: "Part 6",
      name: "Text Completion",
      description: "Hoàn thành đoạn văn",
      questions: 16,
      type: "Reading",
      icon: FileText,
      difficulty: "Trung bình",
      avgTime: "45 giây/câu",
      tips: "Đọc cả đoạn văn để hiểu ngữ cảnh, chú ý liên kết câu",
    },
    {
      part: "Part 7",
      name: "Reading Comprehension",
      description: "Đọc hiểu",
      questions: 54,
      type: "Reading",
      icon: FileText,
      difficulty: "Khó",
      avgTime: "1 phút/câu",
      tips: "Đọc câu hỏi trước, tìm thông tin trong văn bản, chú ý từ khóa",
    },
  ]

  const practiceStats = {
    totalQuestions: 1250,
    correctAnswers: 1050,
    accuracy: 84,
    averageTime: "45 giây/câu",
    strongParts: ["Part 1", "Part 5"],
    weakParts: ["Part 3", "Part 7"],
    recentScores: [650, 680, 720, 750, 780],
  }

  const mockTests = [
    {
      id: 1,
      name: "Full Test 1",
      questions: 200,
      duration: "120 phút",
      difficulty: "Trung bình",
      completed: false,
      bestScore: null,
    },
    {
      id: 2,
      name: "Full Test 2",
      questions: 200,
      duration: "120 phút",
      difficulty: "Khó",
      completed: true,
      bestScore: 750,
    },
    {
      id: 3,
      name: "Mini Test - Listening",
      questions: 50,
      duration: "30 phút",
      difficulty: "Dễ",
      completed: true,
      bestScore: 420,
    },
    {
      id: 4,
      name: "Mini Test - Reading",
      questions: 50,
      duration: "45 phút",
      difficulty: "Trung bình",
      completed: false,
      bestScore: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Luyện Tập TOEIC</h1>
          <p className="text-gray-600">Luyện tập theo từng part hoặc làm full test để cải thiện điểm số</p>
        </div>

        <Tabs defaultValue="parts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="parts">Luyện theo Part</TabsTrigger>
            <TabsTrigger value="tests">Full Test & Mini Test</TabsTrigger>
            <TabsTrigger value="stats">Thống kê</TabsTrigger>
          </TabsList>

          <TabsContent value="parts" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Target className="h-8 w-8 text-blue-600" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-600">Độ chính xác</p>
                      <p className="text-2xl font-bold">{practiceStats.accuracy}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-green-600" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-600">Thời gian TB</p>
                      <p className="text-2xl font-bold">{practiceStats.averageTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-600">Câu đã làm</p>
                      <p className="text-2xl font-bold">{practiceStats.totalQuestions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-600">Điểm gần nhất</p>
                      <p className="text-2xl font-bold">
                        {practiceStats.recentScores[practiceStats.recentScores.length - 1]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* TOEIC Parts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toeicParts.map((part, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow cursor-pointer ${
                    selectedPart === part.part ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedPart(selectedPart === part.part ? null : part.part)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <part.icon
                          className={`h-8 w-8 ${part.type === "Listening" ? "text-blue-600" : "text-green-600"}`}
                        />
                        <div>
                          <CardTitle className="text-lg">{part.part}</CardTitle>
                          <CardDescription className="text-sm">{part.name}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={part.type === "Listening" ? "default" : "secondary"}>{part.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">{part.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Số câu:</span>
                          <span className="ml-2 font-medium">{part.questions}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Độ khó:</span>
                          <Badge
                            variant="outline"
                            className={`ml-2 ${
                              part.difficulty === "Dễ"
                                ? "text-green-600"
                                : part.difficulty === "Trung bình"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {part.difficulty}
                          </Badge>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="text-gray-500">Thời gian TB:</span>
                        <span className="ml-2 font-medium">{part.avgTime}</span>
                      </div>

                      {selectedPart === part.part && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">💡 Mẹo làm bài:</h4>
                          <p className="text-sm text-blue-800">{part.tips}</p>
                        </div>
                      )}

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Luyện tập
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Xem lý thuyết
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Điểm mạnh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {practiceStats.strongParts.map((part, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="font-medium">{part}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Tốt
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Target className="h-5 w-5 mr-2" />
                    Cần cải thiện
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {practiceStats.weakParts.map((part, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                        <span className="font-medium">{part}</span>
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          Cần luyện
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockTests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <Badge variant={test.completed ? "default" : "secondary"}>
                        {test.completed ? "Đã làm" : "Chưa làm"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Số câu:</span>
                        <span className="ml-2 font-medium">{test.questions}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Thời gian:</span>
                        <span className="ml-2 font-medium">{test.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Độ khó:</span>
                        <Badge
                          variant="outline"
                          className={`ml-2 ${
                            test.difficulty === "Dễ"
                              ? "text-green-600"
                              : test.difficulty === "Trung bình"
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {test.difficulty}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-500">Điểm cao nhất:</span>
                        <span className="ml-2 font-medium">
                          {test.bestScore ? `${test.bestScore} điểm` : "Chưa có"}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        {test.completed ? "Làm lại" : "Bắt đầu"}
                      </Button>
                      {test.completed && (
                        <Button variant="outline" className="bg-transparent">
                          Xem kết quả
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Test Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Lịch thi đề xuất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium">Full Test hàng tuần</div>
                      <div className="text-sm text-gray-600">Thứ 7 hàng tuần - 2 tiếng</div>
                    </div>
                    <Button size="sm">Đặt lịch</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium">Mini Test hàng ngày</div>
                      <div className="text-sm text-gray-600">Mỗi ngày - 30 phút</div>
                    </div>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Đặt lịch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            {/* Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Tiến độ điểm số
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Điểm số gần đây:</span>
                    <div className="flex space-x-2">
                      {practiceStats.recentScores.map((score, index) => (
                        <Badge key={index} variant="outline">
                          {score}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ đến mục tiêu (850 điểm)</span>
                      <span>
                        {Math.round((practiceStats.recentScores[practiceStats.recentScores.length - 1] / 850) * 100)}%
                      </span>
                    </div>
                    <Progress value={(practiceStats.recentScores[practiceStats.recentScores.length - 1] / 850) * 100} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thống kê theo Part</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {toeicParts.slice(0, 4).map((part, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            {part.part} - {part.name}
                          </span>
                          <span>{Math.floor(Math.random() * 20) + 75}%</span>
                        </div>
                        <Progress value={Math.floor(Math.random() * 20) + 75} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Thời gian làm bài</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Listening trung bình:</span>
                      <span className="font-medium">28 giây/câu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Reading trung bình:</span>
                      <span className="font-medium">52 giây/câu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tổng thời gian:</span>
                      <span className="font-medium">108 phút</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thời gian còn lại:</span>
                      <span className="font-medium text-green-600">12 phút</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Thành tích
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-medium">Streak Master</div>
                    <div className="text-sm text-gray-600">7 ngày liên tiếp</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium">Accuracy Pro</div>
                    <div className="text-sm text-gray-600">85%+ chính xác</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-medium">Speed Demon</div>
                    <div className="text-sm text-gray-600">Nhanh hơn 90%</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-medium">Improver</div>
                    <div className="text-sm text-gray-600">+130 điểm</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default PracticePage
