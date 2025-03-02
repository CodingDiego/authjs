import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/dashboard", "/"];
const publicRoutes = ["/login"]

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone()
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
        url.pathname = "/login";
        return NextResponse.redirect(url)
    }

    if (isPublicRoute && session?.userId) {
        url.pathname = "/dashboard";
        return NextResponse.redirect(url)
    }
    return NextResponse.next()
}