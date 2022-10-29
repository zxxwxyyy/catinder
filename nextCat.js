// ----- when display next cat, I decide to remove all current information, and use i = (i+1)%filteredCats.length to go to next cat.
// ----- this also create a loop for all filtered cat. 
// ----- jump to the next cat, by remove all current DOM, and create new Dom elements of the next cat.
function nextCat(){
  likeButtonMousePressed = false
      if(filteredCats[i].photos.length > 1){
      nextcatImg.remove();
    }
      else{
      noImgshow.remove();
      }
    i = (i + 1) % filteredCats.length;
    firstcatImg.remove();
    catAge.remove();
    catName.remove();
    catGender.remove();
    catCity.remove();
    catState.remove();
    catBreeds.remove();
    catNeutered.remove();
    catVaccine.remove();
    catSpecialneed.remove();
    petFinder.remove();
    printFirstCatImg();
    printCatname();
    printCatgender();
    printCatage(); 
    printCatlocation();
    printCatinfo();
    printSecondcatimg();
    printPetfinderlogo();
  }
  
  