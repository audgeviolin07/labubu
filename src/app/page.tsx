import { Button } from "@/components/ui/button";
import LiveDetectionHero from "@/components/detection/live-detection-hero";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { Camera, Brain, Shield } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 via-green-100 to-transparent font-mono">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-6">
          <div className="w-8 h-8 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
            ))}
          </div>
          <span className="text-xl font-medium text-black">Performative Rater</span>
        </div>
        
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-sm text-black">
          <a href="#features" className="cursor-pointer hover:text-gray-700">Product</a>
          <a href="#criteria" className="cursor-pointer hover:text-gray-700">Criteria</a>
          <a href="#about" className="cursor-pointer hover:text-gray-700">About</a>
        </nav>
        
        <a href="#features" className="no-underline">
          <Button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
            Analyze Now
          </Button>
        </a>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16 text-center">
        {/* Badge */}
        <div className="inline-block bg-white/30 text-black text-xs px-4 py-2 rounded-full mb-8 tracking-wide backdrop-blur-sm">
          Built by Real Women Lmao. 100K Views on Instagram
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
          AI that detects<br />
          performativity, real-time
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Get in front of the camera and receive ur performativity score<br />
        
        </p>

        {/* Feature Buttons */}
        <div id="features" className="flex flex-wrap justify-center gap-3 mb-16">
          <Button variant="outline" className="border-black text-black px-4 py-2 text-sm rounded-full bg-transparent hover:bg-black/10 flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Photo Analysis
          </Button>
          <Button variant="outline" className="border-black text-black px-4 py-2 text-sm rounded-full bg-transparent hover:bg-black/10 flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Behavior Design
          </Button>
          <Button variant="outline" className="border-black text-black px-4 py-2 text-sm rounded-full bg-transparent hover:bg-black/10 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Authenticity Scoring
          </Button>
        </div>

        {/* Live Detection Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto mb-16">
          <LiveDetectionHero />
        </div>

        {/* Rating Criteria Section */}
        <div id="criteria" className="mb-16">
          <NumberedBadgeCards />
        </div>

        {/* About Section */}
        <section id="about" className="mb-16 pt-8">
          <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-8">About</h2>
            <div className="text-left space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Performative Rater uses advanced AI to analyze behavioral patterns and detect performative tendencies in real-time. Our system examines visual cues, body language, and aesthetic choices to provide accurate performativity scores.
              </p>
              <p className="text-lg leading-relaxed">
                Built with cutting-edge computer vision and machine learning algorithms, we've trained our model on thousands of behavioral patterns to identify authentic vs. performative expressions with unprecedented accuracy.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're analyzing photo content, behavioral design patterns, or authenticity markers, our AI provides instant feedback to help you understand performativity in digital spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-lg text-black">Get Started with the Most Accurate Performativity Analysis</span>
          <a href="#features" className="no-underline">
            <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Get Started
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
}