const Account = require('../models/Account')

// Gets a list of all accounts
module.exports.listAccounts = async function (ctx, next) {
  const { name } = ctx.query
  const criteria = {}

  // If searching by name, filter by matching usernames (allow partial match)
  // Uses Regex to match within strings, 'i' for case-insensitive
  if (name) {
    criteria.username = { $regex: name, $options: 'i' }
  }

  const accounts = await Account.find(criteria)
  ctx.body = accounts
}

// Gets a single account by name
module.exports.getAccountByName = async function (ctx, next) {
  const { name } = ctx.params

  const account = await Account.findOne({ username: name })
  ctx.assert(account, 404, `Account not found for '${name}'`)

  ctx.body = account
}

// Creates a new account
module.exports.createAccount = async function (ctx, next) {
  const { body } = ctx.request
  const { username, password, emailAddress, mobileNumber } = body

  ctx.assert(username, 400, 'Username is required')
  ctx.assert(password, 400, 'Password is required')

  // Make sure the username is not already taken
  const existingAccount = await Account.findOne({ username })
  ctx.assert(!existingAccount, 400, `Username '${username}' is already taken`)

  const newAccount = await Account.create({
    username,
    password,
    emailAddress,
    mobileNumber
  })

  ctx.body = newAccount
  ctx.status = 201
}

// Updates a single account by name
module.exports.updateAccountByName = async function (ctx, next) {
  const { name } = ctx.params
  const { body } = ctx.request
  const { password, emailAddress, mobileNumber } = body

  const account = await Account.findOne({ username: name })
  ctx.assert(account, 404, `Account not found for '${name}'`)

  if (password) {
    account.password = password
  }
  if (emailAddress) {
    account.emailAddress = emailAddress
  }
  if (mobileNumber) {
    account.mobileNumber = mobileNumber
  }

  await account.save()
  ctx.body = account
}

// Deletes a single account by name
module.exports.deleteAccountByName = async function (ctx, next) {
  const { name } = ctx.params

  const account = await Account.findOne({ username: name })
  ctx.assert(account, 404, `Account not found for '${name}'`)

  await account.remove()
  ctx.body = account
}
