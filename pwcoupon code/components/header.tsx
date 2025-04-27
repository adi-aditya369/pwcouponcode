import Link from "next/link"
import { Search } from "lucide-react"

interface HeaderProps {
  currentPath?: string
}

export default function Header({ currentPath = "" }: HeaderProps) {
  return (
    <header className="bg-zinc-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">PW COUPON CODE</h1>
        </div>

        <nav className="flex flex-wrap justify-center">
          <Link href="/" className={`px-4 py-2 m-1 ${currentPath === "/" ? "bg-zinc-800" : ""}`}>
            Home
          </Link>
          <Link
            href="/pw-coupon-code"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code" ? "bg-zinc-800" : ""}`}
          >
            PW COUPON CODE
          </Link>
          <Link
            href="/pw-coupon-code-neet"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-neet" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code NEET
          </Link>
          <Link
            href="/pw-coupon-code-jee"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-jee" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code JEE
          </Link>
          <Link
            href="/pw-coupon-code-upsc"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-upsc" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code UPSC
          </Link>
          <Link
            href="/pw-coupon-code-gate"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-gate" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code GATE
          </Link>
          <Link
            href="/pw-coupon-code-ca"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-ca" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code CA
          </Link>
          <Link
            href="/pw-skills-coupon-code"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-skills-coupon-code" ? "bg-zinc-800" : ""}`}
          >
            PW Skills Coupon Code
          </Link>
          <Link
            href="/pw-coupon-code-iit-jam"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-iit-jam" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code IIT JAM
          </Link>
          <Link
            href="/pw-coupon-code-mba"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-mba" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code MBA
          </Link>
          <Link
            href="/pw-coupon-code-for-banking"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-for-banking" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code for Banking
          </Link>
          <Link
            href="/pw-coupon-code-for-study-material"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-coupon-code-for-study-material" ? "bg-zinc-800" : ""}`}
          >
            PW Coupon Code for Study Material
          </Link>
          <Link
            href="/pw-vidyapeeth-coupon-code"
            className={`px-4 py-2 m-1 ${currentPath === "/pw-vidyapeeth-coupon-code" ? "bg-zinc-800" : ""}`}
          >
            PW Vidyapeeth Coupon Code
          </Link>
        </nav>

        <div className="flex justify-end mt-4">
          <button aria-label="Search" className="text-white">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
