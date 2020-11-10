function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
}
Entry.prototype.letterCount = function() {
  return this.body.match(/[a-z]/gi).length;
}
Entry.prototype.getTeaser = function() {
   return this.body.split(" ").slice(0,8).join(" ") + "...";
}
