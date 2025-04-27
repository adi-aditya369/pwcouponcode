import Link from "next/link"

export default function RecentPosts() {
  const recentPosts = [
    {
      title: "EXCLUSIVE: Special Discount Code ADIYAD0002",
      slug: "/",
    },
    {
      title: "PW COUPON CODE New Maximum Discount",
      slug: "pw-coupon-code-new-maximum-discount",
    },
    {
      title: "Pw Coupon Code GATE 99% Limited Time Offer Physics Wallah",
      slug: "pw-coupon-code-gate-99-limited-time-offer-physics-wallah",
    },
  ]

  return (
    <div className="bg-white p-6 shadow-sm rounded-sm">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>

      <ul className="space-y-4">
        {recentPosts.map((post, index) => (
          <li key={index}>
            <Link href={`/${post.slug}`} className="text-blue-500 hover:text-blue-700">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
        <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-700">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
