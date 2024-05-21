const AUTH_BASEURL = process.env.API_AUTH_URL
// const ROOM_BASEURL = process.env.API_ROOMS_URL
// const RESERVATION_BASEURL = process.env.API_RESERVATION_URL
// const PRICE_BASEURL = process.env.API_PRICE_URL

export const urlSignup = () => `${AUTH_BASEURL}/auth/signup`
export const urlSignin = () => `${AUTH_BASEURL}/auth/signin`
export const urlSignout = () => `${AUTH_BASEURL}/auth/signout`
export const urlRefresh = () => `${AUTH_BASEURL}/auth/refresh`
export const urlForgot = () => `${AUTH_BASEURL}/auth/forgotpassword`
export const urlSubmitOtp = () => `${AUTH_BASEURL}/auth/submitotp`

export const urlUserInfo = () => `${AUTH_BASEURL}/user`