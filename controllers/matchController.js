const matchService  = require('../services/matches');

const matchController = {
    create: (req, res) => {
		res.render('matches/create');
    },
    store: (req, res) => {
        const players = {
            ...req.body
        } 
        delete players.difference;
        delete players.date;
        const difference = Number(req.body.difference);
        const date = req.body.date;
        matchService.saveMatchData(players, difference, date);
        res.redirect('/');
    }
};

module.exports = matchController;