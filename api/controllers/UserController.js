/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addPoints: function (req,res) {
        if (!req.params.id || !parseInt(req.params.id)){
            res.json('Invalid user ID')
            return;
        }

        var userId = parseInt(req.params.id);
        var points = parseInt(req.query.points);
        
        if (!points){
            res.json('Invalid points')
        }
    

        User.findOne({id: userId}).exec (function (err, user){
            if (err) {res.json(err); return;}

            if (!user) {res.json('Invalid user ID'); return;}

            //TODO: add points to user points
            
        })

    }
};

