const routes = require("next-routes")();

routes.add("/DaIcos/:address", "/daIcoDetails");
routes.add("/DaIcos/new", "/new");

module.exports = routes;
