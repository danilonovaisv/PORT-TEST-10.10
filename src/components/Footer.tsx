export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
              let us tell<br />
              your story
            </h3>
          </div>
          <div className="flex flex-col justify-end">
            <div className="text-right">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-[#0057FF] text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                let's talk
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center">
                Brand & Strategy
                <span className="w-2 h-2 bg-[#0057FF] rounded-full ml-2"></span>
              </h4>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center">
                Campaigns & Marketing
                <span className="w-2 h-2 bg-[#0057FF] rounded-full ml-2"></span>
              </h4>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center">
                Websites & Tech Products
                <span className="w-2 h-2 bg-[#0057FF] rounded-full ml-2"></span>
              </h4>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Join the ranks of legendary brands driving change.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">VISA</span>
              <span className="text-gray-400 text-sm">Magic</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}