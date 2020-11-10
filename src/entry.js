function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function(body) {
  return this.body.split(" ").length;
}
Entry.prototype.letterCount = function(body) {
  return this.body.match(/[a-z]/gi).length;
}
