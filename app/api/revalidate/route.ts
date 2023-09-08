import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")
  const tag = request.nextUrl.searchParams.get("phat")

  if (secret !== process.env.NODE_ENV) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 })
  }

  revalidatePath(tag)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
