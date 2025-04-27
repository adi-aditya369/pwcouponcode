import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CouponPostProps {
  title: string
  date: string
  excerpt: string
  slug: string
}

export default function CouponPost({ title, date, excerpt, slug }: CouponPostProps) {
  return (
    <article className="bg-white p-6 mb-8 shadow-sm rounded-sm">
      <h2 className="text-2xl font-bold text-zinc-700 mb-2">
        <Link href={`/${slug}`}>{title}</Link>
      </h2>
      <p className="text-sm text-gray-500 mb-4">{date}</p>

      <div className="mb-4">
        <p>{excerpt}</p>
      </div>

      <Link href={`/${slug}`}>
        <Button variant="default" className="bg-zinc-800 hover:bg-zinc-700">
          Read more
        </Button>
      </Link>
    </article>
  )
}
