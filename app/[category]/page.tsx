import Link from "next/link"
import RecentPosts from "@/components/recent-posts"
import { Search } from "lucide-react"
import FeaturedCoupon from "@/components/featured-coupon"
import CouponPost from "@/components/coupon-post"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

// List of valid categories
const validCategories = [
  "pw-coupon-code",
  "pw-coupon-code-neet",
  "pw-coupon-code-jee",
  "pw-coupon-code-upsc",
  "pw-coupon-code-gate",
  "pw-coupon-code-ca",
  "pw-coupon-code-iit-jam",
  "pw-coupon-code-mba",
  "pw-coupon-code-for-banking",
  "pw-coupon-code-for-study-material",
  "pw-vidyapeeth-coupon-code",
]

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  // Check if the category is valid
  if (!validCategories.includes(category)) {
    return notFound()
  }

  // Format the category title
  const formatCategoryTitle = (category: string) => {
    return category
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const categoryTitle = formatCategoryTitle(category)

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
            <Link
              href="/pw-coupon-code"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code" ? "bg-zinc-800" : ""}`}
            >
              PW COUPON CODE
            </Link>
            <Link
              href="/pw-coupon-code-neet"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-neet" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code NEET
            </Link>
            <Link
              href="/pw-coupon-code-jee"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-jee" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code JEE
            </Link>
            <Link
              href="/pw-coupon-code-upsc"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-upsc" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code UPSC
            </Link>
            <Link
              href="/pw-coupon-code-gate"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-gate" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code GATE
            </Link>
            <Link
              href="/pw-coupon-code-ca"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-ca" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code CA
            </Link>
            <Link href="/pw-skills-coupon-code" className="px-4 py-2 m-1">
              PW Skills Coupon Code
            </Link>
            <Link
              href="/pw-coupon-code-iit-jam"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-iit-jam" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code IIT JAM
            </Link>
            <Link
              href="/pw-coupon-code-mba"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-mba" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code MBA
            </Link>
            <Link
              href="/pw-coupon-code-for-banking"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-for-banking" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code for Banking
            </Link>
            <Link
              href="/pw-coupon-code-for-study-material"
              className={`px-4 py-2 m-1 ${category === "pw-coupon-code-for-study-material" ? "bg-zinc-800" : ""}`}
            >
              PW Coupon Code for Study Material
            </Link>
            <Link
              href="/pw-vidyapeeth-coupon-code"
              className={`px-4 py-2 m-1 ${category === "pw-vidyapeeth-coupon-code" ? "bg-zinc-800" : ""}`}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 mb-8 shadow-sm rounded-sm">
              <h1 className="text-3xl font-bold text-zinc-700 mb-4">{categoryTitle}</h1>
              <p className="mb-6">
                Find the latest and exclusive coupon codes for {categoryTitle} courses. Use these coupons to get
                discounts on your favorite Physics Wallah courses.
              </p>
            </div>

            {/* Featured Coupon */}
            <FeaturedCoupon
              code="ADIYAD0002"
              title={`EXCLUSIVE: Special Discount for ${categoryTitle}`}
              description={`Get maximum discount on all ${categoryTitle} courses with this exclusive coupon code`}
            />

            <CouponPost
              title={`${categoryTitle} - 50% OFF Limited Time Offer`}
              date="April 25, 2025"
              excerpt={`Get 50% off on ${categoryTitle} courses. Limited time offer with our exclusive coupon code...`}
              slug={`${category}-50-off`}
            />

            <CouponPost
              title={`${categoryTitle} - Special Batch Discount`}
              date="March 10, 2025"
              excerpt={`Join the special batch for ${categoryTitle} with our exclusive discount. Use our coupon code to save big...`}
              slug={`${category}-special-batch`}
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
