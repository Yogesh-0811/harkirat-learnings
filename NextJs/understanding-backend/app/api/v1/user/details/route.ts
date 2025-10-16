import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "Yogesh",
        email: "yogesh@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        user: "Yogesh",
        email: "yogesh@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        user: "Yogesh",
        email: "yogesh@gmail.com"
    })
}