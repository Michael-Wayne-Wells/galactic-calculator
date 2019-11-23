import {User} from './calc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#user-info").submit(function(event) {
    event.preventDefault();
    const userName = $('#user-name').val();
    const userAge = parseFloat($('#user-age').val());
    const userDeathAge = parseFloat($('#user-death-age').val());
    let aging = parseFloat($('#aging-selector').val());
    let planetName = $('#aging-selector option:selected').text();
    let user = new User(userName, userAge, userDeathAge, aging);
    if (userAge > user.death) {
      $(".expired").show();
    } else {
      $('.welcome').show();
    }
    $('.welcome-name').text(user.name);
    $('.current-age').text(user.planetAge());
    $('.years-left').text(user.deathClock());
    $('.planet-name').text(planetName);
    $('.age-calc').show();
    $('.results').show();
    $('.user-entry').hide();
  });
});
