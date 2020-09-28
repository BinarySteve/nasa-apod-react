import React from 'react'

function Nasa() {
    // Create url for api with api_key
const url = 'https://api.nasa.gov/planetary/apod?api_key=jNkMOLe3jzlqbHuXq0fPINu3hw3OTT59JW8Q2HDn&date=2009-10-10';
//get todays date
const d = new Date();

// Get the DOM elements we need to change
// const image = $('#imageHolder');
// const explanation = $('#explanation');
// let invis = $(".container-fluid");
// //create a loading function
// $(document).ready(function() {
// 	invis.css('display', 'none');
// 	setTimeout(function(){
// 		$('body').addClass('loaded');
// 		$('#loader').css('display','none');
// 		invis.css('display', 'block')
// 	}, 7000);
	
// });

// Make a request for the image data from the NASA API
fetch(url)
  // check for response
  .then(response => {
    if (response.ok) {
    return response.json();
  }
    
    throw Error(response.statusText);
  })
 
  .then(json => {
    console.log(json.url);
// $('#apodDate').html('NASA Astronomy Picture of the Day <br>' + d.toDateString()).css('font-family', 'Coiny');
//     image.attr('src', json.url);
//     explanation.html(json.explanation).css('font-family', 'Quicksand');
    
  })
  
  .catch(err => console.log(err.message));
    return (
        <div>
           {d.toDateString()}
        </div>
    )
}

export default Nasa;
