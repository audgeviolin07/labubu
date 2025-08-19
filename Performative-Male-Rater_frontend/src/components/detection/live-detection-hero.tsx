"use client"

import { useState, useCallback, useRef, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Pause, Play, AlertCircle } from "lucide-react"
import { motion } from "motion/react"
import { InferenceEngine, CVImage } from "inferencejs"

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className?: string }) => {
  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.2, 
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-8 h-8 text-matcha" strokeWidth={1.5} />
    </motion.div>
  )
}

export default function LiveDetectionHero() {
  const [isStreaming, setIsStreaming] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [modelWorkerId, setModelWorkerId] = useState<string | null>(null)
  const [detectedObjects, setDetectedObjects] = useState<string[]>([])
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const inferEngine = useMemo(() => {
    return new InferenceEngine()
  }, [])

  useEffect(() => {
    if (!isModelLoading && !modelLoaded) {
      setIsModelLoading(true)
      setError(null)
      
      inferEngine
        .startWorker(
          "coco",
          3,
          "rf_EsVTlbAbaZPLmAFuQwWoJgFpMU82"
        )
        .then((id) => {
          setModelWorkerId(id)
          setModelLoaded(true)
          setIsModelLoading(false)
        })
        .catch((err) => {
          console.error("Failed to load model:", err)
          setError("Failed to load detection model. Please refresh and try again.")
          setIsModelLoading(false)
        })
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [inferEngine, isModelLoading, modelLoaded])

  const startWebcam = useCallback(async () => {
    try {
      setError(null)
      const constraints = {
        audio: false,
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "environment"
        }
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
          setIsStreaming(true)
        }
      }
    } catch (err) {
      console.error("Failed to access camera:", err)
      setError("Failed to access camera. Please ensure camera permissions are granted.")
    }
  }, [])

  const stopWebcam = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    setIsStreaming(false)
    setDetectedObjects([])
    
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }, [])

  const detectFrame = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || !modelWorkerId || !isStreaming) {
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const img = new CVImage(video)
      
      inferEngine.infer(modelWorkerId, img).then((predictions) => {
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const detectedClasses = new Set<string>()

        for (let i = 0; i < predictions.length; i++) {
          const prediction = predictions[i]
          detectedClasses.add(prediction.class)
          
          ctx.strokeStyle = prediction.color || "#00FF00"
          ctx.lineWidth = 3
          ctx.font = "16px sans-serif"
          
          const x = prediction.bbox.x - prediction.bbox.width / 2
          const y = prediction.bbox.y - prediction.bbox.height / 2
          
          ctx.strokeRect(x, y, prediction.bbox.width, prediction.bbox.height)
          
          const label = `${prediction.class} ${Math.round(prediction.confidence * 100)}%`
          const textWidth = ctx.measureText(label).width
          const textHeight = 20
          
          ctx.fillStyle = prediction.color || "#00FF00"
          ctx.fillRect(x, y - textHeight - 4, textWidth + 8, textHeight + 4)
          
          ctx.fillStyle = "#FFFFFF"
          ctx.fillText(label, x + 4, y - 6)
        }

        setDetectedObjects(Array.from(detectedClasses))
      }).catch((err) => {
        console.error("Detection error:", err)
      })
    }

    animationFrameRef.current = requestAnimationFrame(detectFrame)
  }, [inferEngine, modelWorkerId, isStreaming])

  useEffect(() => {
    if (isStreaming && modelWorkerId) {
      detectFrame()
    }
  }, [isStreaming, modelWorkerId, detectFrame])

  const toggleStream = useCallback(() => {
    if (isStreaming) {
      stopWebcam()
    } else {
      startWebcam()
    }
  }, [isStreaming, startWebcam, stopWebcam])

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden py-20">
      <FloatingIcon 
        icon={Camera} 
        delay={0} 
        className="top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" 
      />
      <FloatingIcon 
        icon={Camera} 
        delay={0.5} 
        className="top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2" 
      />
      <FloatingIcon 
        icon={Camera} 
        delay={1} 
        className="bottom-1/3 left-1/3 transform -translate-x-1/2 translate-y-1/2" 
      />
      <FloatingIcon 
        icon={Camera} 
        delay={1.5} 
        className="bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2" 
      />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground font-display leading-none">
            Live{" "}
            <span className="bg-gradient-to-r from-matcha via-matcha-deep to-matcha-light bg-clip-text text-transparent">
              Object
            </span>{" "}
            Detection
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-body leading-relaxed">
            Experience real-time object detection powered by Roboflow. 
            Point your camera at anything and watch AI identify objects instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card p-6 rounded-3xl shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-matcha-tint to-surface rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                playsInline
                muted
              />
              
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />

              {!isStreaming && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-20 h-20 bg-matcha/20 rounded-full flex items-center justify-center mb-4">
                    <Camera className="w-10 h-10 text-matcha" />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    {isModelLoading ? "Loading AI Model..." : "Ready to Start"}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {isModelLoading ? "This may take a moment..." : "Click below to begin detection"}
                  </p>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-red-50/10">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <p className="text-red-600 font-medium mb-2">Error</p>
                  <p className="text-sm text-red-500 max-w-md">{error}</p>
                </div>
              )}
            </div>

            {detectedObjects.length > 0 && (
              <div className="mt-4 p-4 bg-matcha/10 rounded-xl">
                <p className="text-sm font-medium text-foreground mb-2">Detected Objects:</p>
                <div className="flex flex-wrap gap-2">
                  {detectedObjects.map((obj, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-matcha/20 text-matcha-deep rounded-full text-sm font-medium"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={toggleStream}
            disabled={isModelLoading || (!modelLoaded && !isStreaming)}
            className="bg-matcha hover:bg-matcha-deep text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isModelLoading ? (
              <>Loading Model...</>
            ) : isStreaming ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Stop Detection
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start Detection
              </>
            )}
          </Button>
          
          <p className="text-sm text-text-secondary mt-4">
            Powered by Roboflow • Real-time AI • Privacy-first
          </p>
        </motion.div>
      </div>
    </section>
  )
}