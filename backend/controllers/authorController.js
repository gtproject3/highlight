const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Author
            .find(req.query)
            .sort({ works_count: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    find: function (req, res) {
        db.Author
            .find(req.query)
            .sort({ works_count: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};

// Person.
//   find({ occupation: /host/ }).
//   where('name.last').equals('Ghost').
//   where('age').gt(17).lt(66).
//   where('likes').in(['vaporizing', 'talking']).
//   limit(10).
//   sort('-occupation').
//   select('name occupation').
//   exec(callback);