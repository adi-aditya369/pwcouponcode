import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
        <div className="bg-white p-6 shadow-sm rounded-sm">
          <h1 className="text-3xl font-bold text-zinc-700 mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p>Last updated: April 27, 2025</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to PW Coupon Code. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person
              can be identified. We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul>
              <li>Identity Data: includes first name, last name, username or similar identifier</li>
              <li>Contact Data: includes email address and telephone numbers</li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system and platform, and other technology on the
                devices you use to access this website
              </li>
              <li>Usage Data: includes information about how you use our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests
              </li>
              <li>Where we need to comply with a legal obligation</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p>Email: privacy@pwcouponcode.example.com</p>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link href="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
