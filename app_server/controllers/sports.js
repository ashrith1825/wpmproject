/* GET sports pages */
const sportsList = (req, res) => {
    res.render('sports-list', {
        title: 'Sports List',
        sports: [
            { name: 'Football', description: 'The world\'s most popular sport' },
            { name: 'Basketball', description: 'A fast-paced indoor sport' },
            { name: 'Tennis', description: 'An elegant racket sport' }
        ]
    });
};

const playerInfo = (req, res) => {
    res.render('player-info', {
        title: 'Player Information',
        message: 'Player information page - Coming soon'
    });
};

const newsEvents = (req, res) => {
    res.render('news-events', {
        title: 'News & Events',
        message: 'Latest sports news and upcoming events'
    });
};

module.exports = {
    sportsList,
    playerInfo,
    newsEvents
};
