$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    const entryTitle = $('#entry-title').val();
    const entryBody = $('#entry-body').val();
    const entry = new Entry(entryTitle, entryBody)
    $('#published-entry').text(entry.getTeaser());
  });
});