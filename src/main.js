import { Status } from './../src/randomuser.js';
import { Details } from './../src/randomuser.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#status-button').click(function() {

    (async () => {
      let getStatus = new Status();
      const response = await getStatus.getProfile();
      getElements(response);
    })();

    function getElements(response) {
      $('#profilePic').attr("src", response.results[0].picture.large);
      $('.name').text(`Name: ${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}`);
      $('.age').text(`Age: ${response.results[0].dob.age}`);
      $('.dob').text(`DOB: ${response.results[0].dob.date}`);
      $('.social').text(`SSN: ${response.results[0].id.value}`);
      $('.address').text(`Address: ${response.results[0].location.street.number} ${response.results[0].location.street.name}`);
      $('.city').text(`City: ${response.results[0].location.city}`);
      $('.state').text(`State: ${response.results[0].location.state}`);
      $('.country').text(`Country: ${response.results[0].location.country}`);
      $('.phone').text(`Phone: ${response.results[0].phone}`)
      $('.email').text(`Email: ${response.results[0].email}`)
    }
  });


  $('#detail-button').click(function() {
    const phone_number = $("#phone_number").val();
    const country_code = $("#country_code").val();

    (async () => {
      let getDetails = new Details();
      const detail = await getDetails.getProfileAgain(country_code, phone_number );
      getElementsAgain(detail);
    })();

    function getElementsAgain(detail) {
      $('.associates').text(`Associates: ${detail.belongs_to[0].name}`);
    }
  });
});
