var Suit = require('../models/suit'); 
 
// List of all Suits 
exports.suit_list = async function(req, res) { 
    try{ 
        theSuit = await Suit.find(); 
        res.send(theSuit); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Suit. 
exports.suit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit detail: ' + req.params.id); 
}; 
 
// Handle Suit create on POST. 
exports.suit_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit create POST'); 
}; 
 
// Handle Suit delete form on DELETE. 
exports.suit_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit delete DELETE ' + req.params.id); 
}; 
 
// Handle Suit update form on PUT. 
exports.suit_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit update PUT' + req.params.id); 
}; 