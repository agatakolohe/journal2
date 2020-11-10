import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    const entryTitle = $('#entry-title').val();
    const entryBody = $('#entry-body').val();
    const entry = new Entry(entryTitle, entryBody);
    $('#published-entry').text(entry.getTeaser());
  });
});