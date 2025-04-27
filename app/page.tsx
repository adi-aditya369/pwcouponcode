import Link from "next/link"
import { Search } from "lucide-react"
import CouponPost from "@/components/coupon-post"
import RecentPosts from "@/components/recent-posts"
import FeaturedCoupon from "@/components/featured-coupon"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-zinc-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">PW COUPON CODE</h1>
          </div>

          <nav className="flex flex-wrap justify-center">
            <Link href="/" className="px-4 py-2 bg-zinc-800 m-1">
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
            <Link href="/pw-skills-coupon-code" className="px-4 py-2 m-1">
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
            {/* Featured Coupon */}
            <FeaturedCoupon
              code="ADIYAD0002"
              title="EXCLUSIVE: Special Discount Code"
              description="Get maximum discount on all Physics Wallah courses with this exclusive coupon code"
            />

            <CouponPost
              title="PW COUPON CODE New Maximum Discount"
              date="February 6, 2025"
              excerpt="PW Batch Coupon Code (read) and PW Store Coupon Code (RMY150) Use These Coupons for Your Purchase. Looking to save ..."
              slug="pw-coupon-code-new-maximum-discount"
            />

            <CouponPost
              title="Pw Coupon Code GATE 99% Limited Time Offer Physics Wallah"
              date="July 9, 2024"
              excerpt="Physics Wallah offers top-tier GATE coaching across multiple engineering streams, ensuring comprehensive preparation. With the PW GATE coupon code, you ..."
              slug="pw-coupon-code-gate-99-limited-time-offer-physics-wallah"
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
