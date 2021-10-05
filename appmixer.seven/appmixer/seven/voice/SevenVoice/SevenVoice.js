const Sms77Client = require('sms77-client')

if (!globalThis.fetch) globalThis.fetch = require('node-fetch')

module.exports = {
    async receive(context) {
        const {from, text, to} = context.messages.in.content
        const client = new Sms77Client(process.env.SEVEN_API_KEY, 'AppMixer')
        const params = {
            from,
            json: true,
            text,
            to,
        }

        console.log('params', params)

        const response = await client.voice(params)

        console.log('response', response)

        return context.sendJson({response}, 'out')
    }
}
