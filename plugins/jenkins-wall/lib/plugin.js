const plugin = require('dashboards/plugin').templated
const generateViewState = require('./data-source')

const component = {
    template: 'template.html',
    __dirname
}

const configuration = () => {
    return {
        jenkins_wall: {
            name: 'Jenkins Wall',
            template: {
                view_name: plugin.createStringField('View name'),
                user: plugin.createStringField('User'),
                token: plugin.createStringField('Token'),
                base_url: plugin.createStringField('Base URL')
            }
        }
    }
}

module.exports = plugin(configuration, component, generateViewState)
