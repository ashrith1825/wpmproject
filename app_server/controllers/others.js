/* GET home page */
const home = (req, res) => {
    res.render('index', {
        title: 'Sports Central Portal',
        message: 'Welcome to Sports Central Portal'
    });
};

/* GET about page */
const about = (req, res) => {
    res.render('about', {
        title: 'About',
        message: 'About Sports Central Portal'
    });
};

module.exports = {
    home,
    about
};
