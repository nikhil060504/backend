import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req,res)=>{
// get user detail from frontend
// validation -not empty
// check if user already exists: username,email
// upload them to cloudinary
// create user object - create entry in db
// remove password and refresh token field from response
// check foe user creation
// return res

const {fullName,email,username,password}=req.body
console.log("email:",email);

if([fullName,email,username,password].some((field)=> field?.trim()==="")
){
   throw new ApiError(400,"All fields are required")
   
}
User.findOne({
   $or:[{username},{email}]
})
if(existedUser){
   throw new ApiError(400,"User already exists")
}
const avatarLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path;
if(!avatarLocalpath){
   throw new ApiError(400,"Avatar is required")
}
const avatar = await uploadCloudinary(avatarLocalPath)
const coverImage = await uploadCloudinary(coverImageLocalPath)

if(!avatar){
   throw new ApiError(400,"Avatar is required")
}
const user = await User.create({
   fullName,
   email,
   username,
   password,
   avatar:avatar.url,
   coverImage: coverImage.url || "",
})
const createdUser = await User.findById(user._id).select(
   "-password -refreshToken"
)
if(!createdUser){
   throw new ApiError(404,"User not found")
}
res.status(201).json(
   new ApiResponse(200,createdUser,"User Registered Successfully")
) // 
   })

export {registerUser}