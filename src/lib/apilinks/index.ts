const AUTH_BASEURL = process.env.API_AUTH_URL
// const ROOM_BASEURL = process.env.API_ROOMS_URL
// const RESERVATION_BASEURL = process.env.API_RESERVATION_URL
// const PRICE_BASEURL = process.env.API_PRICE_URL

export const urlSignup = () => `${AUTH_BASEURL}/signup`
export const urlSignin = () => `${AUTH_BASEURL}/signin`
export const urlSignout = () => `${AUTH_BASEURL}/signout`
export const urlRefresh = () => `${AUTH_BASEURL}/refresh`
export const urlForgot = () => `${AUTH_BASEURL}/forgotpassword`
