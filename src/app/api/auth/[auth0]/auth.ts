import { initAuth0 } from '@auth0/nextjs-auth0'

console.log(`secret: ${process.env.AUTH0_SECRET}`)
console.log(`issuerBaseURL: ${process.env.AUTH0_ISSUER_BASE_URL}`)
console.log(`baseURL: ${process.env.AUTH0_BASE_URL}`)
console.log(`clientID: ${process.env.AUTH0_CLIENT_ID}`)
console.log(`clientSecret: ${process.env.AUTH0_CLIENT_SECRET}`)
export default initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
})
