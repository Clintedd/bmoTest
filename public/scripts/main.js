'use strict';

// on click on the x, close map
function closeMap() {
  document.getElementById('myOverlay').style.display = 'none';
}

var restaurants = document.querySelector('.restaurants');

// use axios to get API data 
function getRestaurant(searched) {
  axios({
    method: 'GET',
    url: 'http://opentable.herokuapp.com/api/restaurants',
    params: {
      city: searched,
      per_page: 100
    }
  }).then(function (res) {
    var restaurantsArray = res.data.restaurants;
    console.log(restaurantsArray);
    restaurantsInfo(restaurantsArray);
  });
}

// Display restaurants of the searched city
function restaurantsInfo(restaurantsArray) {

  // For each item in the array, get the restaurants name, address, price range, image url, reservation url, longitude and latitude of the restaurant
  restaurantsArray.forEach(function (item) {
    var restName = document.createTextNode(item.name);
    var restAddress = document.createTextNode('Address: ' + item.address);
    var restPrice = document.createTextNode(item.price);
    var restImage = item.image_url;
    var restReserve = document.createTextNode('Reserve');
    var restMap = document.createTextNode('Location');

    // Generate dynamic HTML element

    var name = document.createElement('h3');
    name.appendChild(restName);

    var address = document.createElement('h4');
    address.appendChild(restAddress);

    var image = document.createElement('img');
    image.src = restImage;

    var price = document.createElement('p');
    price.appendChild(restPrice);

    var reserve = document.createElement('a');
    reserve.appendChild(restReserve);
    reserve.href = item.reserve_url;
    reserve.setAttribute('target', '_blank');

    var location = document.createElement('span');
    location.appendChild(restMap);
    location.classList.add('location');
    // On click on location, using geolocation to show the restaurant on Google Map
    location.addEventListener('click', function () {
      document.getElementById('myOverlay').style.display = 'block';
      var location = { lat: item.lat, lng: item.lng };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location
      });
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    });

    // Change price range to dollar signs to make it look nicer and change the color of the border and text accordingly
    if (price.innerHTML.includes(4)) {
      price.innerHTML = 'Price: $$$$';
      price.style.border = '1px solid gold';
      price.style.color = 'gold';
    } else if (price.innerHTML.includes(3)) {
      price.innerHTML = 'Price: $$$';
      price.style.border = '1px solid silver';
      price.style.color = 'silver';
    } else if (price.innerHTML.includes(2)) {
      price.innerHTML = 'Price: $$';
      price.style.border = '1px solid #cd7f32';
      price.style.color = '#cd7f32';
    } else if (price.innerHTML.includes(1)) {
      price.innerHTML = 'Price: $';
      price.style.border = '1px solid black';
      price.style.color = 'black';
    }

    var priceAndRes = document.createElement('div');
    priceAndRes.classList.add('price-res');

    priceAndRes.appendChild(price);
    priceAndRes.appendChild(location);
    priceAndRes.appendChild(reserve);

    var restEach = document.createElement('div');
    restEach.classList.add('restaurants-each');

    restEach.appendChild(name);
    restEach.appendChild(image);
    restEach.appendChild(address);
    restEach.appendChild(priceAndRes);

    // combine every data retrieved and populate in the restaurants div
    restaurants.appendChild(restEach);
  });
}

var searchCity = document.querySelector('form');

// On submit, use the user typed city to get restaurants data from api
searchCity.addEventListener('submit', function (e) {
  e.preventDefault();
  var searched = this[0].value;
  getRestaurant(searched);
});