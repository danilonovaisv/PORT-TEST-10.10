export default function Header() {
  return (
    <header className="banner fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="px-6 py-6">
        <a 
          href="/" 
          className="text-black text-xl font-medium pointer-events-auto hover:text-blue-600 transition-colors"
        >
          Lo&Behold
        </a>
      </div>
    </header>
  )
}