
// Logs each request that comes in
module.exports = () => async function logRequest (ctx, next) {
  await next()
  const timestamp = new Date().toLocaleTimeString()
  console.log(`[${timestamp}] ${ctx.ip} ${ctx.method} ${ctx.url} - ${ctx.status}`)
}
