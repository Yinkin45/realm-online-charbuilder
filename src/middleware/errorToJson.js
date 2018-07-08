
// Serializes each error as a JSON response
module.exports = () => async function errorToJson (ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      endpoint: ctx.url,
      status: ctx.status,
      message: err.message
    }

    ctx.app.emit('error', err, ctx)
  }
}
