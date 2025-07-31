"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, Clock, Star, Users, Play, ArrowLeft, CheckCircle, 
  Video, FileText, ChevronLeft, ChevronRight, Menu, X,
  Home, RotateCcw, Settings, HelpCircle
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import VideoPlayer from "@/components/VideoPlayer"
import ExercisePlayer from "@/components/ExercisePlayer"

// Same mock data as course detail page
const courseData = {
  "1": {
    id: 1,
    title: "TOEIC Cơ Bản",
    target: "300-450 điểm",
    price: "299,000đ",
    originalPrice: "399,000đ",
    lessons: 24,
    duration: "2 tháng",
    students: 1234,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    description: "Khóa học dành cho người mới bắt đầu với TOEIC, cung cấp nền tảng vững chắc về ngữ pháp, từ vựng và kỹ năng làm bài cơ bản.",
    features: ["Video bài giảng chi tiết", "Bài tập thực hành", "Test mini hàng tuần", "Hỗ trợ AI 24/7"],
    instructor: {
      name: "Thầy Nguyễn Văn A",
      title: "Chuyên gia TOEIC 10+ năm kinh nghiệm",
      avatar: "/placeholder-user.jpg",
      bio: "Thầy có hơn 10 năm kinh nghiệm giảng dạy TOEIC, đã giúp hơn 5000 học viên đạt điểm mục tiêu."
    }
  }
}

// Curriculum data with sequential access
const curriculumData = {
  "1": [
    {
      id: 1,
      title: "Tuần 1: Làm quen với TOEIC",
      description: "Hiểu cấu trúc đề thi và các dạng câu hỏi cơ bản",
      lessons: [
        {
          id: 1,
          title: "Giới thiệu về đề thi TOEIC",
          type: "video",
          duration: "15:30",
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Trong video này, chúng ta sẽ tìm hiểu về cấu trúc tổng quát của đề thi TOEIC, bao gồm 4 phần Listening và 3 phần Reading. Bạn sẽ được hướng dẫn cách phân bổ thời gian hiệu quả và chiến lược tổng thể để đạt điểm cao."
        },
        {
          id: 2,
          title: "Cấu trúc Part 1 - Photographs",
          type: "video",
          duration: "20:45",
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Part 1 là phần mở đầu của bài thi TOEIC với 6 câu hỏi về hình ảnh. Chúng ta sẽ học các chiến lược quan sát hình ảnh, dự đoán từ vựng có thể xuất hiện và cách loại trừ đáp án sai."
        },
        {
          id: 3,
          title: "Bài tập thực hành Part 1",
          type: "exercise",
          questions: 10,
          completed: false,
          content: "Áp dụng những kiến thức đã học về Part 1 thông qua 10 câu hỏi thực hành. Mỗi câu đều có giải thích chi tiết để bạn hiểu rõ lý do tại sao đáp án đó đúng."
        },
        {
          id: 4,
          title: "Từ vựng cơ bản - Workplace",
          type: "video",
          duration: "18:20",
          completed: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Học từ vựng cơ bản về môi trường làm việc - một chủ đề rất quan trọng trong TOEIC. Bao gồm các từ về văn phòng, thiết bị, hoạt động hàng ngày và giao tiếp công việc."
        }
      ]
    },
    {
      id: 2,
      title: "Tuần 2: Listening Skills",
      description: "Phát triển kỹ năng nghe hiểu và strategies cho Part 1-2",
      lessons: [
        {
          id: 5,
          title: "Chiến lược làm Part 2 - Question-Response",
          type: "video",
          duration: "25:10",
          completed: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Part 2 với 25 câu hỏi dạng hỏi-đáp là phần có thể cải thiện điểm nhanh nhất. Học cách nhận biết các dạng câu hỏi Wh-, Yes/No, và câu hỏi gián tiếp."
        },
        {
          id: 6,
          title: "Luyện nghe với native speakers",
          type: "video",
          duration: "30:00",
          completed: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Làm quen với các giọng nói khác nhau (Mỹ, Anh, Canada, Úc) và tốc độ nói thực tế trong đề thi TOEIC. Luyện tập nghe và bắt từ khóa quan trọng."
        },
        {
          id: 7,
          title: "Bài tập Part 1 & 2 tổng hợp",
          type: "exercise",
          questions: 20,
          completed: false,
          content: "Kết hợp luyện tập Part 1 và Part 2 với 20 câu hỏi đa dạng. Đây là cơ hội để bạn áp dụng tất cả những gì đã học trong 2 tuần đầu."
        }
      ]
    }
  ]
}

export default function LearnPage() {
  const params = useParams()
  const courseId = params.id as string
  const course = courseData[courseId as keyof typeof courseData]
  const curriculum = curriculumData[courseId as keyof typeof curriculumData] || []
  
  // Flatten all lessons for easy navigation
  const allLessons = curriculum.flatMap(week => week.lessons)
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const currentLesson = allLessons[currentLessonIndex]

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy bài học</h1>
          <Link href={`/courses/${courseId}`}>
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại khóa học
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const completedLessons = allLessons.filter(lesson => lesson.completed).length
  const progressPercentage = (completedLessons / allLessons.length) * 100

  const handleLessonComplete = () => {
    // Mark current lesson as completed
    allLessons[currentLessonIndex].completed = true
    
    // Auto advance to next lesson if available
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const goToNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  const getCurrentWeekInfo = () => {
    let lessonCount = 0
    for (const week of curriculum) {
      if (lessonCount + week.lessons.length > currentLessonIndex) {
        return {
          week: week,
          lessonInWeek: currentLessonIndex - lessonCount + 1
        }
      }
      lessonCount += week.lessons.length
    }
    return null
  }

  const weekInfo = getCurrentWeekInfo()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-white border-r overflow-hidden`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <Link href={`/courses/${courseId}`} className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="text-sm">Quay lại khóa học</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <h2 className="font-semibold text-lg">{course.title}</h2>
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Tiến độ</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="space-y-4">
            {curriculum.map((week, weekIndex) => {
              let lessonStartIndex = 0
              for (let i = 0; i < weekIndex; i++) {
                lessonStartIndex += curriculum[i].lessons.length
              }
              
              return (
                <div key={week.id} className="space-y-2">
                  <h3 className="font-medium text-sm text-gray-800">{week.title}</h3>
                  <div className="space-y-1">
                    {week.lessons.map((lesson, lessonIndex) => {
                      const globalIndex = lessonStartIndex + lessonIndex
                      const isActive = globalIndex === currentLessonIndex
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLessonIndex(globalIndex)}
                          className={`w-full flex items-center space-x-3 p-2 rounded-lg text-left transition-colors ${
                            isActive 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : lesson.type === 'video' ? (
                              <Video className="h-4 w-4 text-blue-500" />
                            ) : (
                              <FileText className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{lesson.title}</p>
                            <p className="text-xs text-gray-500">
                              {lesson.type === 'video' 
                                ? lesson.duration 
                                : `${lesson.questions} câu hỏi`
                              }
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!isSidebarOpen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
            <div>
              <h1 className="text-lg font-semibold">{currentLesson.title}</h1>
              {weekInfo && (
                <p className="text-sm text-gray-600">
                  {weekInfo.week.title} - Bài {weekInfo.lessonInWeek}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={currentLesson.completed ? "default" : "secondary"}>
              {currentLesson.completed ? "Đã hoàn thành" : "Đang học"}
            </Badge>
            <span className="text-sm text-gray-600">
              {currentLessonIndex + 1} / {allLessons.length}
            </span>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {currentLesson.type === 'video' && currentLesson.videoUrl && currentLesson.duration && (
              <VideoPlayer 
                lesson={{
                  id: currentLesson.id,
                  title: currentLesson.title,
                  duration: currentLesson.duration,
                  videoUrl: currentLesson.videoUrl,
                  completed: currentLesson.completed
                }} 
                onComplete={handleLessonComplete}
              />
            )}
            
            {currentLesson.type === 'exercise' && currentLesson.questions && (
              <ExercisePlayer 
                lesson={{
                  id: currentLesson.id,
                  title: currentLesson.title,
                  questions: currentLesson.questions,
                  completed: currentLesson.completed
                }} 
                onComplete={handleLessonComplete}
              />
            )}

            {/* Lesson Description */}
            {currentLesson.content && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Nội dung bài học</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{currentLesson.content}</p>
                </CardContent>
              </Card>
            )}

            {/* Lesson Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={goToPreviousLesson}
                    disabled={currentLessonIndex === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Bài trước
                  </Button>
                  
                  <div className="flex items-center space-x-3">
                    {!currentLesson.completed && (
                      <Button onClick={handleLessonComplete}>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Hoàn thành bài học
                      </Button>
                    )}
                    
                    <Button
                      onClick={goToNextLesson}
                      disabled={currentLessonIndex === allLessons.length - 1}
                    >
                      Bài tiếp theo
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="bg-white border-t px-6 py-3">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Tiến độ khóa học</span>
            <span>{Math.round(progressPercentage)}% hoàn thành</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>
    </div>
  )
}
