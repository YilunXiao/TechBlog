// Home page, dashboard/login, users
const router = require('express').Router();
// const userRoutes = require('./user-routes');
// const blogRoutes = require('./blog-routes');
const mainRoutes = require('./main-routes');

// router.use('/users', userRoutes);
// router.use('/blogs', blogRoutes);
router.use('/', mainRoutes);


module.exports = router;