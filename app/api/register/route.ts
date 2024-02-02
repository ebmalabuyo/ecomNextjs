import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/utils/db";
import bcrypt from "bcryptjs"


const rounds : number = (parseInt(process.env.SALT_ROUNDS as string), 10)

export async function POST(request : any) {

    
    const {email, password} = await request.json()

    await dbConnect();

    const alreadyExists = await User.findOne({email})
    
    if (alreadyExists.email === email) {
        return new NextResponse("Email already Exists", {status: 400})

    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        email: email,
        password: hashedPassword
    })

    try{
        await newUser.save()
        return new NextResponse("User successfully saved", {status: 200 })

    }catch(error : any) {
        return new NextResponse(error, {status: 500})
    }


}