const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'openMusik2',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const newSongsHandler = new SongsHandler(service, validator);
    server.route(routes(newSongsHandler));
  },
};
