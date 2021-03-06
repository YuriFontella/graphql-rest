'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.decorate('QueryUser', {

    users: async () => {
      return await app.knex('users')
    },

    addUser: async (data) => {
      return await app.knex('users').insert(data).returning('*')
    },

    userByEmail: async (email) => {
      return await app.knex('users').where('email', email).first()
    }
  })
})