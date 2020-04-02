'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.post('tractors', 'TractorController.store')
  Route.get('tractors', 'TractorController.index')
}).middleware(['auth'])
