const AUTH_BASEURL = process.env.API_AUTH_URL
const AUTH_BASEURL_CLIENT = process.env.NEXT_PUBLIC_API_AUTH_URL
const ROOM_BASEURL = process.env.API_ROOMS_URL
// const RESERVATION_BASEURL = process.env.API_RESERVATION_URL
// const PRICE_BASEURL = process.env.API_PRICE_URL

export const urlSignup = () => `${AUTH_BASEURL}/auth/signup`
export const urlSignin = () => `${AUTH_BASEURL}/auth/signin`
export const urlSignout = () => `${AUTH_BASEURL}/auth/signout`
export const urlRefresh = () => `${AUTH_BASEURL}/auth/refresh`
export const urlForgot = () => `${AUTH_BASEURL}/auth/forgotpassword`
export const urlSubmitOtp = () => `${AUTH_BASEURL}/auth/submitotp`
export const urlUpdatePassword = () => `${AUTH_BASEURL}/auth/updatepassword`
export const urlVerifyEmail = () => `${AUTH_BASEURL_CLIENT}/auth/verifyemail`
export const urlSendVerification = () => `${AUTH_BASEURL}/auth/sendverification`
export const urlUserInfo = () => `${AUTH_BASEURL}/user`

export const urlGetRooms = () => `${ROOM_BASEURL}/rooms`
export const urlGetRoomById = (id: string) => `${ROOM_BASEURL}/rooms/${id}`
