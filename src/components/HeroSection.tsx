export function HeroSection() {
  return (
    <div className="relative h-[600px] castle-bg">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="floating mb-6">
              {/* <Sparkles className="h-16 w-16 text-yellow-400" /> */}
            </div>
            <h1 className="text-6xl font-bold mb-4 magic-sparkle bg-clip-text text-transparent">
              Where Innovation Meets Magic
            </h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Discover the technology that powers Disney's most magical experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}