function success (countryCode) {
  console.log(countryCode);
}

function error () {
  console.warn('An error occured');
}

plugins.country.get(success, error);