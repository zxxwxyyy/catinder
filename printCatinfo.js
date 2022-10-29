// ----- fetching cat's information such as breeds, is sprayed or neutered from the api
// ----- using if() statement to detect if this cat is sprayed or neutered 
// ----- also print out information about if special care is needed and also vaccination information 
// ----- Using 'class' to generate style of each information
let catGender;
let catAge;
let catCity;
let catState;
let catBreeds;
let catNeutered;
let noImgshow;
let catVaccine;
let catSpecialneed;
let petFinder;
let catUrl;
let firstcatImg;
let catName;
let nextcatImg;

function printFirstCatImg(){
      // ----- create first cat image, using createImg() to create DOM elements(ONLY this function work!!)
      firstcatImg = createImg(filteredCats[i].photos[0].large);
      // console.log(firstcatImg)
      firstcatImg.position(450, Y + 103);
      firstcatImg.size(500, 500);
      firstcatImg.style('border-radius','20px')
      // console.log(firstcatImg)
      catUrl = filteredCats[i].url;
}

function printCatinfo(){
    catBreeds = createP(filteredCats[i].breeds.primary);
    catBreeds.position(500, Y + 1220);
    catBreeds.class('catinfo');
    // catBreeds.style('monospace')
    // catBreeds.style('font-weight','bold')
    // catBreeds.style('font-size', '20px')
    // catBreeds.style('color', '#966fd6')
    // console.log(filteredCats[i].attributes)
  
    if(filteredCats[i].attributes.sprayed_neutered = 'true'){
      catNeutered = createP('Sprayed & Neutered');
      catNeutered.position(500, Y + 1190);
      catNeutered.class('catinfo');
      // catNeutered.style('monospace')
      // catNeutered.style('font-weight','bold')
      // catNeutered.style('font-size', '20px')
      // catNeutered.style('color', '#966fd6')
    }else{
      catNeutered = createP('Not Sprayed & Neutered');
      catNeutered.position(500, Y + 1190);
      catNeutered.class('catinfo');
      // catNeutered.style('monospace')
      // catNeutered.style('font-weight','bold')
      // catNeutered.style('font-size', '20px')
      // catNeutered.style('color', '#966fd6')
    }
  
  if(filteredCats[i].attributes.shots_current = "true"){
    catVaccine = createP("Vaccinated");
    catVaccine.position(750, Y + 1190);
    catVaccine.class('catinfo');
    // catVaccine.style('monospace')
    // catVaccine.style('font-weight','bold')
    // catVaccine.style('font-size', '20px')
    // catVaccine.style('color', '#966fd6')
  }else{
    catVaccine = createP("NOT Vaccinated");
    catVaccine.position(750, Y + 1190);
    catVaccine.class('catinfo');
    // catVaccine.style('monospace')
    // catVaccine.style('font-weight','bold')
    // catVaccine.style('font-size', '20px')
    // catVaccine.style('color', '#966fd6')
  }
  
  if(filteredCats[i].attributes.special_needs == 'true'){
    catSpecialneed = createP("Special Care Needed");
    catSpecialneed.position(750, Y + 1220);
    catSpecialneed.class('catinfo');
    // catSpecialneed.style('monospace')
    // catSpecialneed.style('font-weight','bold')
    // catSpecialneed.style('font-size', '20px')
    // catSpecialneed.style('color', '#966fd6')
  }else{
    catSpecialneed = createP("No Special Needed");
    catSpecialneed.position(750, Y + 1220);
    catSpecialneed.class('catinfo');
    // catSpecialneed.style('monospace')
    // catSpecialneed.style('font-weight','bold')
    // catSpecialneed.style('font-size', '20px')
    // catSpecialneed.style('color', '#966fd6')
  }
  }
  
  // ----- pull 2nd image from the current cat; using if() statement to detect if it has.
  // ----- if not, using no image icon to display
  function printSecondcatimg(){
    if(filteredCats[i].photos.length > 1){
      nextcatImg = createImg(filteredCats[i].photos[1].large);
      nextcatImg.size(500, 500);
      nextcatImg.position(450, Y + 680)
      nextcatImg.style('border-radius','20px')

    }
      else{
        noImgshow = createImg('images/noimage.jpg');
        noImgshow.size(500, 500);
        noImgshow.style('border-radius','20px')
        noImgshow.position(450,  Y + 680);
      }
  }
  
  // ----- print out petfinder logo as agreement
  function printPetfinderlogo(){
    petFinder = createImg('https://www.petfinder.com//banner-images/widgets/42.jpg');
    petFinder.position(640, Y + 1270);
  }
  
  // ----- print out where the cat located 
  function printCatlocation(){
    catCity = createP('City: ' + filteredCats[i].contact.address.city);
    catCity.position(750, Y + 610);
    catCity.class('catinfo');
    // catCity.style('monospace')
    // catCity.style('font-weight','bold')
    // catCity.style('font-size', '20px')
    // catCity.style('color', '#966fd6')
    catState = createP('State: '+ filteredCats[i].contact.address.state);
    catState.position(750, Y + 640);
    catState.class('catinfo');
    // catState.style('monospace')
    // catState.style('font-weight','bold')
    // catState.style('font-size', '20px')
    // catState.style('color', '#966fd6')
  }
  // ----- print out cat's age
  function printCatage(){
    catAge = createP('Age: ' + filteredCats[i].age);
    // console.log(filteredCats[i].name)
    catAge.position(500, Y + 640);
    catAge.class('catinfo');
    // catAge.style('monospace')
    // catAge.style('font-weight','bold')
    // catAge.style('font-size', '20px')
    // catAge.style('color', '#966fd6')
  }
  // ----- print out cat's gender
  function printCatgender(){
    catGender = createP('Gender: ' + filteredCats[i].gender);
    // console.log(filteredCats[i].name)
    catGender.position(500, Y + 610);
    catGender.class('catinfo');
    // catGender.style('monospace')    
    // catGender.style('font-weight','bold')
    // catGender.style('font-size', '20px')
    // catGender.style('color', '#966fd6')
  }
  // ----- print out cat's name
  function printCatname(){
    catName = createP(filteredCats[i].name);
    // console.log(filteredCats[i].name)
    catName.position(460, Y + 60);
    catName.class('catname');
    // catName.style('color', '#966fd6')
    // catName.style('font-family', 'Fantasy')
    // // catName.style('monospace')
    // catName.style('font-size', '30px')
    // catName.style('color', 'black')
  }
