const Router = require('koa-router')

const AccountsController = require('../controllers/AccountsController')

const router = new Router({ prefix: '/accounts' })

// Gets a list of all accounts
router.get('/', AccountsController.listAccounts)

// Gets a single account by name
router.get('/:name', AccountsController.getAccountByName)

// Creates a new account
router.post('/', AccountsController.createAccount)

// Updates a single account by name
router.patch('/:name', AccountsController.updateAccountByName)

// Deletes a single account by name
router.delete('/:name', AccountsController.deleteAccountByName)

module.exports = router
