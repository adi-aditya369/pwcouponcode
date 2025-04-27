import Link from "next/link"
import { Button } from "@/components/ui/button"
import RecentPosts from "@/components/recent-posts"
import FeaturedCoupon from "@/components/featured-coupon"

export default function CouponCodePage() {
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
            {/* Add other navigation links as needed */}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <article className="bg-white p-6 shadow-sm rounded-sm">
              <h1 className="text-3xl font-bold text-zinc-700 mb-6">ADIYAD0002 - Exclusive Discount Code</h1>

              <FeaturedCoupon
                code="ADIYAD0002"
                title="EXCLUSIVE: Special Discount Code"
                description="Get maximum discount on all Physics Wallah courses with this exclusive coupon code"
              />

              <div className="prose max-w-none mb-6">
                <h2 className="text-2xl font-bold mt-6 mb-4">How to Use This Coupon Code</h2>
                <p>
                  This exclusive coupon code "ADIYAD0002" offers maximum discounts on Physics Wallah courses. Follow
                  these simple steps to redeem your discount:
                </p>

                <ol className="list-decimal pl-6 my-4">
                  <li className="mb-2">Visit the official Physics Wallah website or app</li>
                  <li className="mb-2">Choose your desired course or study material</li>
                  <li className="mb-2">Proceed to checkout</li>
                  <li className="mb-2">Enter the coupon code ADIYAD0002 in the coupon field</li>
                  <li className="mb-2">Apply the code and see your discount applied instantly</li>
                  <li className="mb-2">Complete your purchase at the discounted price</li>
                </ol>

                <h2 className="text-2xl font-bold mt-6 mb-4">Benefits of This Coupon</h2>
                <ul className="list-disc pl-6 my-4">
                  <li className="mb-2">Maximum discount on all Physics Wallah courses</li>
                  <li className="mb-2">Valid for all educational streams (JEE, NEET, UPSC, GATE, etc.)</li>
                  <li className="mb-2">Can be used for both online and offline courses</li>
                  <li className="mb-2">Works for new registrations and existing users</li>
                  <li className="mb-2">Limited time offer - use it before it expires!</li>
                </ul>

                <p className="mt-6">
                  Don't miss this opportunity to access high-quality education at a discounted price. Physics Wallah is
                  known for its excellent teaching methodology and comprehensive study materials that have helped
                  thousands of students achieve their academic goals.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="font-semibold">Note:</p>
                  <p>
                    This coupon code is valid for a limited time only. Use it before it expires to avail maximum
                    benefits.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <Link href="/">
                  <Button variant="outline">← Back to Home</Button>
                </Link>
              </div>
            </article>
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
