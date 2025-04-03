import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Cynthia Chen</h2>
              <p className="text-sage-200 mt-2">Computer Science & Fintech Student</p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold mb-3">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sage-200 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/resume" className="text-sage-200 hover:text-white transition-colors">
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://linkedin.com/in/chenxcynthia"
                      className="text-sage-200 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/cynthiachenn"
                      className="text-sage-200 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:chenxycynthia@gmail.com"
                      className="text-sage-200 hover:text-white transition-colors"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-sage-700 mt-8 pt-8 text-center">
            <p className="text-sage-300">© {currentYear} Cynthia Chen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

