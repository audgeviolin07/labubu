"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Camera, Headphones, BookOpen, Shirt, Circle } from "lucide-react"
import { motion, useSpring, useTransform } from "motion/react"

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className?: string }) => {
  const y = useSpring(0, { stiffness: 100, damping: 15 })
  const rotate = useSpring(0, { stiffness: 100, damping: 15 })
  
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

export default function PhotoUploadHero() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find(file => file.type.startsWith('image/'))
    
    if (imageFile) {
      setSelectedFile(imageFile)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden py-20">
      {/* Floating Icons */}
      <FloatingIcon 
        icon={Headphones} 
        delay={0} 
        className="top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" 
      />
      <FloatingIcon 
        icon={BookOpen} 
        delay={0.5} 
        className="top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2" 
      />
      <FloatingIcon 
        icon={Shirt} 
        delay={1} 
        className="bottom-1/3 left-1/3 transform -translate-x-1/2 translate-y-1/2" 
      />
      <FloatingIcon 
        icon={Circle} 
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
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground font-display leading-none">
            Rate the{" "}
            <span className="bg-gradient-to-r from-matcha via-matcha-deep to-matcha-light bg-clip-text text-transparent">
              Performative
            </span>{" "}
            Male
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-body leading-relaxed">
            Upload a photo and let our community rate the performative masculinity vibes. 
            From indie coffee shop poses to "I read feminist theory" energy.
          </p>
        </motion.div>

        {/* Upload Area - Polaroid Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md mx-auto mb-12"
        >
          <div className="bg-card p-6 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div
              className={`relative h-80 border-4 border-dashed rounded-2xl transition-all duration-300 ${
                isDragging 
                  ? "border-matcha bg-gradient-to-br from-matcha-light/20 to-matcha/10 scale-105" 
                  : "border-border bg-gradient-to-br from-matcha-tint to-surface hover:border-matcha/60 hover:bg-gradient-to-br hover:from-matcha-light/10 hover:to-matcha/5"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                id="photo-upload"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {selectedFile ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-matcha/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Camera className="w-8 h-8 text-matcha" />
                    </div>
                    <p className="text-foreground font-medium mb-2">Photo Ready!</p>
                    <p className="text-sm text-text-secondary">{selectedFile.name}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-matcha/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Upload className="w-8 h-8 text-matcha" />
                    </div>
                    <p className="text-foreground font-medium mb-2">
                      Drop your photo here
                    </p>
                    <p className="text-sm text-text-secondary mb-4">
                      or click to browse files
                    </p>
                    <div className="text-xs text-text-secondary opacity-75">
                      JPG, PNG, GIF up to 10MB
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Polaroid bottom */}
            <div className="h-16 bg-card rounded-b-2xl flex items-center justify-center">
              <div className="text-sm text-text-secondary font-mono tracking-wider">
                {selectedFile ? "Ready to Rate" : "Drag & Drop Zone"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-matcha hover:bg-matcha-deep text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            disabled={!selectedFile}
          >
            {selectedFile ? "Start Rating Session" : "Upload Photo First"}
          </Button>
          
          <p className="text-sm text-text-secondary mt-4">
            Anonymous • No data stored • Just for fun
          </p>
        </motion.div>
      </div>
    </section>
  )
}