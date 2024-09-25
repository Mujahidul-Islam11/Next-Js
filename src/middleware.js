import { NextResponse } from "next/server"


export const middleware = (request) =>{
    return NextResponse.redirect(new URL("/contact", request.url))
}

export const config = {
    matcher: "/user-profile"
}