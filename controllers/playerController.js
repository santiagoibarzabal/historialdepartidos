const playersService  = require('../services/players');

const playerController = {
	index: (req, res) => {
        playersService.findAll()
            .then((players) => {
                res.render('players/index', { players: players });
            });
    },
    show: (req, res) => {
        playersService.findOne(req.params.id)
            .then((player) => {
                res.render('players/show', {player: player});
            });
    },
    edit: (req, res) => {
        playersService.findOne(req.params.id)
        .then((player) => {
            res.render('players/edit', {player: player});
        });
    },
    update: (req, res) => {
        const player = { ...req.body };
        player.avatar = req.file.filename;
        playersService.updatePlayerData(player) 
        .then(() => {
            res.redirect('/players');
        });;
        
    },
    delete: (req, res) => {
        playersService.deletePlayer(req.params.id)
        .then(() => {
            res.redirect('/players');
        });
    },
};

module.exports = playerController;