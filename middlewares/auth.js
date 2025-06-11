import { expressjwt } from "express-jwt";

const auth = expressjwt({
    secret:process.env.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty:'auth'
})

export default auth;