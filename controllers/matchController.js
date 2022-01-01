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
        const difference = Number(req.body.difference);
        
        matchService.saveMatchData(players, difference);
        res.redirect('/');
    }
};

module.exports = matchController;