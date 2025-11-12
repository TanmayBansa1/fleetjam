import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
export default withAuth(
  async function proxy(req: NextRequest) {
    console.log("proxy", req.kindeAuth);
    return NextResponse.next();
  },
  {
    isReturnToCurrentPage: true,
    publicPaths: ["/"],
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|ogg|mp3|wav|m4a|mov|avi)).*)",
  ],
};
