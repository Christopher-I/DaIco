const routes = require("next-routes")();

routes.add("/DaIcos/:address", "/daIcoDetails");
routes.add("/PreDaIco/:address", "/newPreDaico");
routes.add("/DaIcos/new", "/new");

module.exports = routes;
