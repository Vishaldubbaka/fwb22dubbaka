// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"Suit", '); 
    res.write('  "verbs":["GET","POST","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
}; 