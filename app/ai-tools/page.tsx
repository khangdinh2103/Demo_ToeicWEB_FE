"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, PenTool, Mic, Send, BookOpen, User, Bot, Volume2, MicOff, Play, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function AIToolsPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là AI Assistant của STAREDU. Tôi có thể giúp bạn về từ vựng, ngữ pháp, và các mẹo làm bài TOEIC. Bạn cần hỗ trợ gì?",
    },
  ])
  const [chatInput, setChatInput] = useState("")
  const [writingText, setWritingText] = useState("")
  const [writingFeedback, setWritingFeedback] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [speakingFeedback, setSpeakingFeedback] = useState("")

  const handleChatSend = () => {
    if (!chatInput.trim()) return

    const newMessages = [
      ...chatMessages,
      { role: "user", content: chatInput },
      {
        role: "assistant",
        content:
          "Đây là câu trả lời mẫu từ AI. Trong thực tế, đây sẽ là phản hồi từ AI dựa trên câu hỏi của bạn về TOEIC.",
      },
    ]
    setChatMessages(newMessages)
    setChatInput("")
  }

  const handleWritingCheck = () => {
    if (!writingText.trim()) return

    setWritingFeedback(`
**Phân tích văn bản của bạn:**

**Điểm mạnh:**
- Cấu trúc câu rõ ràng
- Sử dụng từ vựng phù hợp

**Cần cải thiện:**
- Một số lỗi ngữ pháp nhỏ
- Có thể sử dụng từ nối để làm văn bản mượt mà hơn

**Gợi ý cải thiện:**
- Thay "good" bằng "excellent" để tăng tính học thuật
- Sử dụng "Furthermore" thay vì "And" ở đầu câu
    `)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Start recording
      setTimeout(() => {
        setIsRecording(false)
        setSpeakingFeedback(`
**Phân tích Speaking của bạn:**

**Phát âm:** 8/10
- Phát âm rõ ràng, dễ hiểu
- Cần chú ý âm /th/ và /r/

**Ngữ điệu:** 7/10  
- Tự nhiên, có cảm xúc
- Có thể tăng tốc độ nói một chút

**Ngữ pháp:** 9/10
- Sử dụng đúng thì
- Cấu trúc câu phong phú

**Từ vựng:** 8/10
- Đa dạng, phù hợp chủ đề
- Có thể sử dụng thêm từ học thuật
        `)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">STAREDU</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600">
                Khóa học
              </Link>
              <Link href="/practice" className="text-gray-700 hover:text-blue-600">
                Luyện tập
              </Link>
              <Link href="/ai-tools" className="text-blue-600 font-medium">
                AI Tools
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Tools</h1>
          <p className="text-gray-600">Sử dụng công nghệ AI để cải thiện kỹ năng TOEIC của bạn</p>
        </div>

        <Tabs defaultValue="chatbot" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chatbot" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>AI Chatbot</span>
            </TabsTrigger>
            <TabsTrigger value="writing" className="flex items-center space-x-2">
              <PenTool className="h-4 w-4" />
              <span>Writing Coach</span>
            </TabsTrigger>
            <TabsTrigger value="speaking" className="flex items-center space-x-2">
              <Mic className="h-4 w-4" />
              <span>Speaking Partner</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chatbot">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Chat Interface */}
              <div className="lg:col-span-3">
                <Card className="h-[600px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                      AI Chatbot - TOEIC Assistant
                    </CardTitle>
                    <CardDescription>Hỏi đáp về từ vựng, ngữ pháp, và mẹo làm bài TOEIC</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {chatMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex items-start space-x-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-blue-600" : "bg-gray-600"}`}
                            >
                              {message.role === "user" ? (
                                <User className="h-4 w-4 text-white" />
                              ) : (
                                <Bot className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div
                              className={`p-3 rounded-lg ${message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                            >
                              {message.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Hỏi về từ vựng, ngữ pháp, hoặc mẹo làm bài..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                      />
                      <Button onClick={handleChatSend}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Questions */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Câu hỏi thường gặp</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    >
                      Phân biệt Present Perfect và Past Simple
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    >
                      Từ vựng về Business thường gặp
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    >
                      Mẹo làm Listening Part 3
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    >
                      Cách quản lý thời gian trong bài thi
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Thống kê</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Câu hỏi hôm nay:</span>
                      <Badge variant="secondary">12</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tổng câu hỏi:</span>
                      <Badge variant="secondary">156</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Chủ đề yêu thích:</span>
                      <Badge>Grammar</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="writing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PenTool className="h-5 w-5 text-green-600 mr-2" />
                    AI Writing Coach
                  </CardTitle>
                  <CardDescription>Viết văn bản và nhận phản hồi từ AI về ngữ pháp, từ vựng</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nhập văn bản cần kiểm tra:</label>
                    <Textarea
                      placeholder="Viết đoạn văn của bạn ở đây..."
                      value={writingText}
                      onChange={(e) => setWritingText(e.target.value)}
                      rows={10}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{writingText.length} ký tự</span>
                    <Button onClick={handleWritingCheck} disabled={!writingText.trim()}>
                      Kiểm tra văn bản
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phản hồi từ AI</CardTitle>
                </CardHeader>
                <CardContent>
                  {writingFeedback ? (
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap text-sm">{writingFeedback}</pre>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <PenTool className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Nhập văn bản và nhấn "Kiểm tra văn bản" để nhận phản hồi từ AI</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Writing Prompts */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Đề bài Writing thường gặp</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <div className="font-medium">Email xin việc</div>
                      <div className="text-sm text-gray-500">Viết email ứng tuyển vào một công ty</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <div className="font-medium">Báo cáo công việc</div>
                      <div className="text-sm text-gray-500">Viết báo cáo về dự án hoặc sự kiện</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <div className="font-medium">Thư phàn nàn</div>
                      <div className="text-sm text-gray-500">Viết thư khiếu nại về dịch vụ</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <div className="font-medium">Đề xuất cải thiện</div>
                      <div className="text-sm text-gray-500">Đề xuất cải thiện quy trình làm việc</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="speaking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mic className="h-5 w-5 text-purple-600 mr-2" />
                    AI Speaking Partner
                  </CardTitle>
                  <CardDescription>Luyện nói với AI và nhận phản hồi về phát âm, ngữ điệu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Recording Interface */}
                  <div className="text-center">
                    <div
                      className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 ${isRecording ? "bg-red-100 animate-pulse" : "bg-purple-100"}`}
                    >
                      <Button
                        size="lg"
                        variant={isRecording ? "destructive" : "default"}
                        className="w-20 h-20 rounded-full"
                        onClick={toggleRecording}
                      >
                        {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">
                      {isRecording ? "Đang ghi âm... Nhấn để dừng" : "Nhấn để bắt đầu ghi âm"}
                    </p>
                  </div>

                  {/* Speaking Topics */}
                  <div>
                    <h4 className="font-medium mb-3">Chủ đề Speaking:</h4>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Giới thiệu bản thân
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Mô tả công việc hiện tại
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Kế hoạch tương lai
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Sở thích cá nhân
                      </Button>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Nghe lại
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Ghi lại
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phản hồi từ AI</CardTitle>
                </CardHeader>
                <CardContent>
                  {speakingFeedback ? (
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap text-sm">{speakingFeedback}</pre>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Mic className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Ghi âm giọng nói của bạn để nhận phản hồi từ AI</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Speaking Statistics */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Thống kê Speaking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">25</div>
                    <div className="text-sm text-gray-600">Phiên luyện tập</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">8.2/10</div>
                    <div className="text-sm text-gray-600">Điểm phát âm TB</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">7.8/10</div>
                    <div className="text-sm text-gray-600">Điểm ngữ điệu TB</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">45min</div>
                    <div className="text-sm text-gray-600">Tổng thời gian</div>
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
