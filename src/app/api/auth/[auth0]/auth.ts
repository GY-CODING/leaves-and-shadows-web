import { initAuth0 } from '@auth0/nextjs-auth0'

console.log(`AUTH0_SECRET: ${process.env.AUTH0_SECRET}`)
console.log(`AUTH0_ISSUER_BASE_URL: ${process.env.AUTH0_ISSUER_BASE_URL}`)
console.log(`AUTH0_BASE_URL: ${process.env.AUTH0_BASE_URL}`)
console.log(`AUTH0_CLIENT_ID: ${process.env.AUTH0_CLIENT_ID}`)
console.log(`AUTH0_CLIENT_SECRET: ${process.env.AUTH0_CLIENT_SECRET}`)
export default initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
})
