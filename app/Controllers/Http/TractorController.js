'use strict'

const Tractor = use('App/Models/Tractor')

class TractorController {
  async index ({ response }) {
    const tractors = await Tractor.all()
    return tractors
  }

  async store ({ request, response, auth }) {
    const dataTractor = request.all()
    const user = await auth.getUser()

    dataTractor.user_id = user.id

    const tractor = await Tractor.create(dataTractor)

    return tractor
  }
}

module.exports = TractorController
