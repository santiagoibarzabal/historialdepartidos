const players = require('../services/players');
const playerService  = require('../services/players');

const playerController = {
	index: (req, res) => {
        const players = playerService.findAll();
        players.sort((first, second) => {
             return second.difference - first.difference;
        });
		res.render('players/index', { players: players });
    },
    show: (req, res) => {
        const player = playerService.findOne(req.params.id);
		res.render('players/show', {player: player});
    },
    edit: (req, res) => {
        const player = playerService.findOne(req.params.id);
		res.render('players/edit', {player: player});
    },
    update: (req, res) => {
        const player = { ...req.body };
        playerService.updatePlayerData(player);
        res.redirect('/players');
    },
    delete: (req, res) => {
        const player = req.params.id;
        playerService.deletePlayer(player);
        res.redirect('/players');
    },
};

module.exports = playerController;