const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
<<<<<<< HEAD
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new','/campaigns/requests/new')
=======
    .add('/campaigns/:address/requests', '/campaigns/requests/index');
>>>>>>> c2fb56591abbd9722a8892de64cbb247a528ebb8

module.exports = routes;