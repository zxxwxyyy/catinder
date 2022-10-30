// ----- create function for when user click 'adpot me' button
function adpotMe(){
    window.open(catUrl);
  }

  function adoptArchiveCat(){
    window.open(filteredCats[j].url)
  }
  // ----- create mouseWheel event for user to scroll up/down for more information
  function mouseWheel(event) {
    posY -= event.delta /6;
    // console.log(posY)
    secondcatPhotos = !secondcatPhotos;
  }
  
  // ----- prevent from interrupt with mousePressed function, user can double clicked to like the current cat.
  // ----- if user like current cat, store it on the left side, and user can go to next page without losing this cat. 
  function doubleClicked(){
    // archiveCatname.remove()
    if(likeButtonMouseHovered == true){
    likeButtonMousePressed = !likeButtonMousePressed
    isArchive = true

    // ----- use j to store current i, and save on the left window. 
    j = i 
    let archiveImg = createImg(filteredCats[j].photos[0].medium);
    archiveImg.position(78, 425);
    archiveImg.size(250, 250);
    archiveImg.style('border-radius','20px')

    
    button2 = createButton(' adopt me! ')
    // button2.class('button');
    button2.style('font','Cursive')
    button2.style('font-size', '25px')
    button2.size(150, 50);
    button2.position(130, 678);
    button2.mousePressed(adoptArchiveCat);
    button2.style('font-weight', 'bold')
    button2.style('background-color', '#966fd6')
    button2.style('color', 'white')
    button2.style('border-radius', '16px')
    // archiveCatname = createP(filteredCats[j].name);
    // archiveCatname.position(78, 430);
    // archiveCatname.class('catname');
    // console.log(j)

  }
  }



  function createButtons(){
  // ----- create 2 interactive button. 
  // ----- when user click "adopt me", jump to adoption page;
  // ----- when user click "next cat!" jump to next cat
  // ----- create css class for generating button style
  button = createButton(' adopt me! ');
  button.class('button');
  button.size(50);
  button.position(445, 560);
  button.mousePressed(adpotMe);

  button1 = createButton(' next cat ');
  button1.class('button');
  button1.size(50);
  button1.position(445, 610);
  button1.mousePressed(nextCat);



  }