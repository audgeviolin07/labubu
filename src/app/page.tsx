import { Button } from "@/components/ui/button";
import LiveDetectionHero from "@/components/detection/live-detection-hero";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-300 font-mono">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
            ))}
          </div>
          <span className="text-xl font-medium text-black">performative rater</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm text-gray-700">
          <span className="cursor-pointer hover:text-black">PRODUCTS</span>
          <span className="cursor-pointer hover:text-black">DEVELOPERS</span>
          <span className="cursor-pointer hover:text-black">PRICING</span>
          <span className="cursor-pointer hover:text-black">RESOURCES</span>
        </nav>
        
        <Button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
          ANALYZE NOW
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16 text-center">
        {/* Badge */}
        <div className="inline-block bg-gray-300 text-black text-xs px-3 py-1 rounded-full mb-8 uppercase tracking-wide">
          NEW - READ THE AI PERFORMATIVITY ANNOUNCEMENT BLOG
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
          AI that detects how<br />
          performative you are, in real-time
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          stand in front of the camera and get ur performativity score<br />
        
        </p>

        {/* Feature Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            📸 PHOTO ANALYSIS
          </Button>
          <Button variant="outline" className="border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white">
            🎨 BEHAVIOR DESIGN
          </Button>
          <Button variant="outline" className="border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white">
            📊 AUTHENTICITY SCORING
          </Button>
          <Button variant="outline" className="border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white">
            🤖 CONVERSATIONAL AI
          </Button>
        </div>

        {/* Live Detection Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto mb-16">
          <LiveDetectionHero />
        </div>

        {/* Rating Criteria Section */}
        <div className="mb-16">
          <NumberedBadgeCards />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-lg text-black">Get started with the most expressive performativity analysis</span>
          <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            SIGN UP FOR FREE
          </Button>
        </div>
      </main>
    </div>
  );
}