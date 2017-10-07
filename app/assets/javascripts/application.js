
//= require jquery
//= require fancybox
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


// $(document).ready(function() {
//   $("a.fancybox").fancybox();
// });

$(document).ready(function() {
  $("a.grouped_elements").fancybox({
      'transitionIn'  :   'elastic',
      'transitionOut' :   'elastic',
      'speedIn'       :   600,
      'speedOut'      :   200,
      'overlayShow'   :   false
  });
});

// //Google Maps: /////////////////////
// function initialize() {

/*
 function initMap() {


  var mapOptions = {
    zoom: 12
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
*/

/*
 var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map-canvas'), {
        //center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

    */
//   geocoder = new google.maps.Geocoder();
//   geocoder.geocode({
//      'address': $('#sale-container').data('address')}, //jquery to grab address in data-address
//     function (results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         console.log(results[0])
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//         map: map,
//         position: results[0].geometry.location })
//       };
//     }
//   );
// };

// function initMap() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBF71KrCs9vUJ-HtrLKTWQ6nKjffwhULZY&callback=initMap';
//   document.body.appendChild(script);
// }

//window.onload = initMap;

// Attempted Ajax using Rails
//   $('#fav-container').html("<%= escape_javascript render(@favorites) %>");



// $(document).ready(function() {

//   addToFavoritesBox();
//   favorited();
//   // signInShopper();
//   // signInLister();
//   // // signUpShopper();
//   // distance();
// });

// var addToFavoritesBox = function () {
//   $('#add-to-favorites a').on('click', function() {
//       $('#favorites-container').css('visibility', 'visible');
//       $('#add-to-favorites a').toggle();
//   });
// };

// // Turns star yellow and replaces text
// var toggleStar = function () {
//     $('#empty').toggle();
//     $('#filled').css('visibility', 'visible')
//     $('#filled').css('color', 'yellow')
//     $('#favorite-link').replaceWith('Favorite Added!');
// };

// // Saves a sale as a favorite:
// var favorited = function () {
//   $('a[           ]').on('click', function (event) {
//     event.preventDefault();
//       // console.log(this, "link");

//       var url = $(this).attr('href')
//       var saleId = $(this).attr('value')
//       var data = {estatesale_id: saleId}

//     $.ajax ({
//       url: url,
//       type: 'POST',
//       dataType: 'json',
//       data: data})

//     .done(function(response) {
//         console.log(response)
//         console.log("success")
//         toggleStar()
//         // $('#favorites').append(response);
//     })
//     .fail(function(response) {
//         console.log(response)
//         console.log("failure")
//     });
//   });
// };



// fav
// var signInShopper = function () {
//   $('#favorites-container a:first').on('click', function(event) {
//     event.preventDefault();

//     $.ajax ({
//       url: '/sessions/new'})
//     .done(function(response) {
//       console.log(response)
//       console.log("success")

//       //replaceWith not working!
//       $('#favorites-container').replaceWith(response);
//       $('#favorites-container').hide();
//     });
//   });
// };

// var signUpShopper = function () {
//   $('#favorites-container a:last').on('click', function(event) {
//     event.preventDefault();

//     $.ajax ({
//       url: '/shoppers/new'})

//     .done(function(response) {
//       console.log(response)
//       console.log("great success!")
//       $('#favorites-container').replaceWith(response);
//       // $('#favorites-container').hide();
//     });
//   });
// };

// // Need to have sign in redirect to new listing form!!

// var signInLister = function () {
//  $('#advertise-title a').on('click', function(event) {
//     event.preventDefault();

//     $.ajax ({
//       url: '/sessions/new'})

//     .done(function(response) {
//       console.log(response)
//       console.log("success")
//       $('#advertise-body').append(response);
//       $('#advertise-title').hide();
//       $('#lister-sign-up').hide();
//     });
//   });
// };


// var signUpShopper = function () {
//   $('#favorites-container a:last').on('click', function(event) {
//     event.preventDefault();

//     $.ajax ({
//       url: '/shoppers/new'})

//     .done(function(response) {
//       console.log(response)
//       console.log("great success!")
//       $('#sale-container').append(response);
//       $('#favorites-container').hide();
//     });
//   });
// };



// // Zip Code API Use:

// var distance = function () {
//   $('#distance-search').on('submit', function(e) {
//     e.preventDefault();

//     var data = $(this).serialize();

//     $.ajax ({
//       url: '/estatesales/zip',
//       data: data,
//       dataType: 'JSON',
//       method: 'POST'
//       })

//       .done(function(response) {
//         console.log(response)
//         $('#zip').val("");
//       })
//   });
// };

// //Company names populate index table from Kimono:

// // var companyNames = function () {
// //   $.ajax({
// //     url: "https://www.kimonolabs.com/api/3z5esdfc?apikey=xR6xG9LBXmtPuRvHkLcsBWcTQOwQjoX2",
// //     crossDomain: true,
// //     dataType: "jsonp",

// //     success: function(response){
// //     console.log(response)
// //       var collection = response.results.collection1;
// //       for (var i = 0; i < collection.length; i++){

// //          $(".name").append('<tr>' + '<td class="sale">' + collection[i].company_name.text + '</td>' + '</tr>');
// //       }},
// //     error: function(err){
// //           alert('error!' + err);
// //       }
// //   });
// // };


// // var addressInfo = function () {
// //    $.ajax({
// //   url:"https://www.kimonolabs.com/api/b96dqgl8?apikey=xR6xG9LBXmtPuRvHkLcsBWcTQOwQjoX2",
// //   crossDomain: true,
// //   dataType: "jsonp",

// //   success: function (response) {
// //     console.log(response) //test
// //     console.log("success!")
// //       var collection = response.results.collection1;

// //       for (var i = 0; i < collection.length; i++){

// //          $(".name").append('<tr>' + '<td="address">' + collection[i].address.text + '</td>' + '</tr>');
// //       }},
// //     error: function(err){
// //           alert('error!' + err);
// //       }
// //   });
// // };


// // Tried to get "dates" from kimono json data:

// // var startDate = function () {
// //    $.ajax({
// //   url:"https://www.kimonolabs.com/api/b96dqgl8?apikey=xR6xG9LBXmtPuRvHkLcsBWcTQOwQjoX2",
// //   crossDomain: true,
// //   dataType: "jsonp",

// //   success: function (response) {
// //     console.log(response) //test
// //     console.log("dates!")
// //       var collection = response.results.collection1;
// //       for (var i = 0; i < collection.length; i++){

// //          $(".name").append('<tr>' + '<td="dates">' + collection[i].start_date.text + '</td>' + '</tr>');
// //       }},
// //     error: function(err){
// //           alert('error!' + err);
// //       }
// //   });
// // };




//     //click handler on search button
//     // prevent default of search button
//     // use jquery to get data from search box
//     // use jquery to gather all existing zip codes from dom
//     //combine new zip code with old zip codes into one data object

//     // use ajax to send data on post request to some route on controller
//     // route on controller should then make computations via api
//     // controller should format response into json & return
//     // back to JS, .done functionality that will come iwht a response which will inclue the numbers you need to populate table
//     // within the .done, update each dom element with respective data from response



//     //get the zip code entered
//     //get the distance from zip code entered compared to DB zip codes
//     //populate sale table with distance values
// //     var zip_code1 = +$(this).closest('#zip').data('distance');

// //   });
// // };
