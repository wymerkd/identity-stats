
import { Status } from './../src/randomuser.js';
import { Details } from './../src/randomuser.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#detail-button').click(function() {
    $(".hide").fadeIn();
    const phone_number = $("#phone_number").val();
    const country_code = $("#country_code").val();

    (async () => {
      let getDetails = new Details();
      const detail = await getDetails.getProfileAgain(country_code, phone_number );
      getElementsAgain(detail);
    })();

    function getElementsAgain(detail) {
      $('.alias').text(`Alias: ${detail.belongs_to[0].name}`);
      $('.age_range').text(`Age Range: ${detail.belongs_to[0].age_range}`);
      $('.linkphone').text(`Hack Init Date: ${detail.belongs_to[0].link_to_phone_start_date}`);
      $('.addresses0').text(`Old Address: ${detail.current_addresses[0].street_line_1}`);
      $('.addresses1').text(`New Address: ${detail.current_addresses[1].street_line_1}`);
      $('.state1').text(`State: ${detail.current_addresses[0].state_code}`);
      $('.city1').text(`City: ${detail.current_addresses[0].city}`);
      $('.carrier').text(`Cell Carrier: ${detail.carrier}`);
      $('.associates0').text(`Associates: ${detail.associated_people[0].name}`);
      $('.associates1').text(`Associates: ${detail.associated_people[1].name}`);
      $('.associates2').text(`Associates: ${detail.associated_people[2].name}`);
      $('.associates3').text(`Associates: ${detail.associated_people[3].name}`);
      $('.associates4').text(`Associates: ${detail.associated_people[4].name}`);
      $('.associates5').text(`Associates: ${detail.associated_people[5].name}`);
      $('.associates6').text(`Associates: ${detail.associated_people[6].name}`);
      $('.associates7').text(`Associates: ${detail.associated_people[7].name}`);
      $('.associates8').text(`Associates: ${detail.associated_people[8].name}`);
    }
  });

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
});
