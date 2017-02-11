var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Trello'});
});

router.get('/boards', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var boards = [
        {id: 1, name: "Real Estate Board"},
        {id: 2, name: "Example: Real Estate Team Board"},
        {id: 3, name: "Clients"},
        {id: 4, name: "Freebies"},
        {id: 5, name: "Webinar Planner"},
        {id: 6, name: "To-Do List"},
        {id: 7, name: "Weekly Blog Planning"},
        {id: 8, name: "Newsletter Planning"},
        {id: 9, name: "More Planning"}
    ];
    res.send(JSON.stringify(boards));
});

router.get('/board/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    var boardId = req.param.id;
    var list = [
        {
            name: "Basics",
            cards: [
                {id: 1, content: "Welcome to Trello!!"},
                {id: 2, content: "This is card."},
                {id: 3, content: "Overall this is a list of cards."},
                {id: 4, content: "All these lists belongs to a board."}
            ]
        },

        {
            name: "Intermediate",
            cards: [
                {id: 1, content: "Remember everything is hardcoded on backend."},
                {id: 2, content: "So if you delete or create cards it will not persist the page reload."},
                {id: 3, content: "Everything is hardcoded. Everything !!"},
                {id: 4, content: "You can delete the card as well as delete the list."},
                {id: 5, content: "Delete/Create is temporary."},
            ]
        },

        {
            name: "Advance",
            cards: [
                {id: 1, content: "No matter which board you open you will get the same list of cards."},
                {id: 2, content: "Because i told you its is hard coded."},
                {id: 3, content: "Even for newly created board you will get the same list and cards."},
                {id: 4, content: "Well this is how it works.!!"},
                {id: 5, content: "One temporary card"},
                {id: 5, content: "That's All !!"},
                {id: 5, content: "Thank u !!"},

            ]
        }
    ];
    res.send(JSON.stringify(list));
});

module.exports = router;
