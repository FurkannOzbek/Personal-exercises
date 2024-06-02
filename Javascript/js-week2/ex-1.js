/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }
  
  listings.forEach((listing) => console.log(listing.size));
  let arrayListings = listings.map((listing) => listing.price);
  let cheapListings = [];
  let expensiveListings = [];
  let parkingListings = [];
  listings.filter((listings) => {
    if (listings.price < 5000) cheapListings.push(listings.type);
    else if (listings.price > 5000)
      expensiveListings.push(parseInt(listings.price));
  });
  // console.log(cheapListings);
  // console.log(listings);
  // console.log(expensiveListings);

  listings.filter((listings) => {
    if (listings.facilities == "Parkering") {
      parkingListings.push(listings);
      // console.log(parkingListings);
    }
  });
  let elementArray = document.getElementById("myArray");
  elementArray.innerHTML() = listings;
}
generateListings(37);

function cheapListing() {}
