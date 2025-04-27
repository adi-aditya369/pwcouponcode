"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturedCouponProps {
  code: string
  title: string
  description: string
}

export default function FeaturedCoupon({ code, title, description }: FeaturedCouponProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="mb-8 border-2 border-blue-500 shadow-md">
      <CardHeader className="bg-blue-50 pb-2">
        <CardTitle className="text-xl text-blue-700">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
          <div className="font-mono text-lg font-bold">{code}</div>
          <Button onClick={copyToClipboard} variant="outline" className="flex items-center gap-2">
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Code
              </>
            )}
          </Button>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Use this code during checkout to get exclusive discounts on Physics Wallah courses.
        </p>
      </CardContent>
    </Card>
  )
}
