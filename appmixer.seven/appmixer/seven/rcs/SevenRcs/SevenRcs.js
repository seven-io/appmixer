const {Client, RcsResource} = require('@seven.io/client')

if (!globalThis.fetch) globalThis.fetch = require('node-fetch')

module.exports = {
    async receive(context) {
        const {from, text, to} = context.messages.in.content
        const client = new Client({apiKey: process.env.SEVEN_API_KEY, sentWith: 'Appmixer'})
        const params = {
            from,
            text,
            to,
        }

        console.log('params', params)

        const resource = new RcsResource(client)
        const response = await resource.dispatch(params)

        console.log('response', response)

        return context.sendJson({response}, 'out')
    }
}
