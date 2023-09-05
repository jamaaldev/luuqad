import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/prisma"
import { UserSelectedTypeValid } from "@/validations/UserSelectedIsValid"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(options)
    if (!session) {
      return NextResponse.json(
        {
          error:
            "Hey, you're not authorized, what you doing here? Trying to be a hacker?",
        },
        { status: 401 },
      )
    }

    const userSelected: UserSelectedTypeValid = await req.json()
    const findSelected: UserSelectedTypeValid =
      await prisma.userSelected.findFirstOrThrow({
        where: { user_id: userSelected.user_id },
        select: {
          isSelected: true,
          user_id: true,
          id: true,
        },
      })
    if (findSelected != null) {
      await prisma.userSelected.update({
        where: {
          user_id: userSelected.user_id,
        },
        data: {
          isSelected: userSelected.isSelected,
        },
      })

      return NextResponse.json(
        {
          message: "Successfully Updated UserSelected",
        },
        { status: 200 },
      )
    }
  } catch (error) {
    // You might want to return a proper response in case of an error
    return NextResponse.json(
      {
        error: "Sorry, something went wrong.",
      },
      { status: 500 },
    )
  }
}
