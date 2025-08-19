import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-300 font-mono">
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
          Upload photos or use your camera to get instant feedback on<br />
          performativity levels, authenticity scores, and behavioral insights
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

        {/* Demo Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Photo analysis</span>
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                📷
              </div>
              <p>Upload a photo or use your camera to analyze performativity levels</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button variant="outline" className="text-sm">
                🔄 Randomize photo
              </Button>
              <Button variant="outline" className="text-sm">
                ✏️ Rewrite analysis
              </Button>
            </div>
            <span className="text-sm text-gray-500">0/500</span>
          </div>
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