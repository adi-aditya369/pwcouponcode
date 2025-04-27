import Link from "next/link"
import RecentPosts from "@/components/recent-posts"
import CouponPost from "@/components/coupon-post"
import { Search } from "lucide-react"
import FeaturedCoupon from "@/components/featured-coupon"

export default function PWSkillsCouponCodePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-zinc-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">PW COUPON CODE</h1>
          </div>

          <nav className="flex flex-wrap justify-center">
            <Link href="/" className="px-4 py-2 m-1">
              Home
            </Link>
            <Link href="/pw-coupon-code" className="px-4 py-2 m-1">
              PW COUPON CODE
            </Link>
            <Link href="/pw-coupon-code-neet" className="px-4 py-2 m-1">
              PW Coupon Code NEET
            </Link>
            <Link href="/pw-coupon-code-jee" className="px-4 py-2 m-1">
              PW Coupon Code JEE
            </Link>
            <Link href="/pw-coupon-code-upsc" className="px-4 py-2 m-1">
              PW Coupon Code UPSC
            </Link>
            <Link href="/pw-coupon-code-gate" className="px-4 py-2 m-1">
              PW Coupon Code GATE
            </Link>
            <Link href="/pw-coupon-code-ca" className="px-4 py-2 m-1">
              PW Coupon Code CA
            </Link>
            <Link href="/pw-skills-coupon-code" className="px-4 py-2 bg-zinc-800 m-1">
              PW Skills Coupon Code
            </Link>
            <Link href="/pw-coupon-code-iit-jam" className="px-4 py-2 m-1">
              PW Coupon Code IIT JAM
            </Link>
            <Link href="/pw-coupon-code-mba" className="px-4 py-2 m-1">
              PW Coupon Code MBA
            </Link>
            <Link href="/pw-coupon-code-for-banking" className="px-4 py-2 m-1">
              PW Coupon Code for Banking
            </Link>
            <Link href="/pw-coupon-code-for-study-material" className="px-4 py-2 m-1">
              PW Coupon Code for Study Material
            </Link>
            <Link href="/pw-vidyapeeth-coupon-code" className="px-4 py-2 m-1">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 mb-8 shadow-sm rounded-sm">
              <h1 className="text-3xl font-bold text-zinc-700 mb-4">PW Skills Coupon Code</h1>
              <p className="mb-6">
                Find the latest and exclusive coupon codes for PW Skills courses. PW Skills offers industry-oriented
                tech courses to help you build a successful career in technology.
              </p>
            </div>

            {/* Featured Coupon */}
            <FeaturedCoupon
              code="ADIYAD0002"
              title="EXCLUSIVE: Special Discount for PW Skills"
              description="Get maximum discount on all PW Skills tech courses with this exclusive coupon code"
            />

            <CouponPost
              title="PW Skills Web Development Course - 50% OFF"
              date="April 20, 2025"
              excerpt="Get 50% off on PW Skills Web Development course. Learn HTML, CSS, JavaScript, React, Node.js and more with industry experts..."
              slug="pw-skills-web-development-course"
            />

            <CouponPost
              title="PW Skills Data Science Program - Special Discount"
              date="March 15, 2025"
              excerpt="Master Data Science with PW Skills comprehensive program. Use our exclusive coupon code to get a special discount on this career-changing course..."
              slug="pw-skills-data-science-program"
            />
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <RecentPosts />
          </div>
        </div>
      </div>
    </main>
  )
}
