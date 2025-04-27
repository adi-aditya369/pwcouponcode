import Link from "next/link"
import { Button } from "@/components/ui/button"
import RecentPosts from "@/components/recent-posts"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function CouponPage({ params }: PageProps) {
  // In a real application, you would fetch the post data based on the slug
  // For this example, we'll just handle two hardcoded posts

  let postData

  if (params.slug === "pw-coupon-code-new-maximum-discount") {
    postData = {
      title: "PW COUPON CODE New Maximum Discount",
      date: "February 6, 2025",
      content: `
        <p>PW Batch Coupon Code (read) and PW Store Coupon Code (RMY150) Use These Coupons for Your Purchase. Looking to save on your Physics Wallah courses?</p>
        <p>Physics Wallah (PW) is one of India's leading educational platforms offering comprehensive courses for various competitive exams. With our exclusive coupon codes, you can get significant discounts on their premium courses.</p>
        <h3>How to Use PW Coupon Codes</h3>
        <ol>
          <li>Visit the official Physics Wallah website</li>
          <li>Select your desired course</li>
          <li>Proceed to checkout</li>
          <li>Enter coupon code RMY150 in the designated field</li>
          <li>Enjoy your discount!</li>
        </ol>
        <p>Don't miss this limited-time offer to access quality education at reduced prices!</p>
      `,
    }
  } else if (params.slug === "pw-coupon-code-gate-99-limited-time-offer-physics-wallah") {
    postData = {
      title: "Pw Coupon Code GATE 99% Limited Time Offer Physics Wallah",
      date: "July 9, 2024",
      content: `
        <p>Physics Wallah offers top-tier GATE coaching across multiple engineering streams, ensuring comprehensive preparation. With the PW GATE coupon code, you can get up to 99% off on selected courses.</p>
        <p>The Graduate Aptitude Test in Engineering (GATE) is a highly competitive exam that requires dedicated preparation. Physics Wallah's GATE courses are designed by experts to help you crack this challenging exam.</p>
        <h3>Benefits of PW GATE Courses</h3>
        <ul>
          <li>Comprehensive study material</li>
          <li>Expert faculty guidance</li>
          <li>Regular mock tests</li>
          <li>Doubt clearing sessions</li>
          <li>Performance analysis</li>
        </ul>
        <p>Use coupon code PWGATE99 to avail this limited-time offer!</p>
      `,
    }
  } else {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header - Same as home page */}
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
              <h1 className="text-3xl font-bold text-zinc-700 mb-2">{postData.title}</h1>
              <p className="text-sm text-gray-500 mb-6">{postData.date}</p>

              <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: postData.content }} />

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
