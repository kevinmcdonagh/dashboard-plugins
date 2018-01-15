const plugin = require('dashboards/plugin').templated

const component = {
    template: 'template.html',
    __dirname
}

const configuration = () => {
    return {
        clock: {
            name: 'Clock'
        }
    }
}

module.exports = plugin(configuration, component)
