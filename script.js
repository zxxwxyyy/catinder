// ----- Liqian Zhang
// ----- creative coding midterm project - caTiner app
// ----- 

let i = 0;
let secondcatPhotos = false;
let button;
let button1;
let j = i;
let catDatas;
let button2;
let filteredCats;
let posY = 10;
let Y = 10;
let likeButton;
let likeButtonHovered; 
let likeButtonMouseHovered = false;
let likeButtonMousePressed = false;
let isArchive = false

function preload(){
  likeButton = loadImage("images/like.png")
  likeButtonHovered = loadImage("images/like1.png")
  caTinerlogo = loadImage("images/logo.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)

// ----- fetching information from petfinder api by using their template 
// ----- reference: https://github.com/petfinder-com/petfinder-js-sdk
  const client = new petfinder.Client({ apiKey: "sFsLLf4LjYw7RtMvLu8VRO6l8G3tjDV5NZSOU0EfKRJOecttnl", secret: "oReJDTAt2mxk3m4HiPH1Bhb80xssQVozsLWc0zk0" });
  client.animal.search({
    type: "Cat",
    breed: "Domestic Short hair",
    page: 1,
    limit: 100,
    // dataType: 'json',
    
  })
  .then((response) => {
     catDatas = response.data.animals;
    // console.log(catDatas)
    // ----- some cats doesn't have photos to display
    // ----- so I decide to use filter() to filter out cats' that have photos and only display them
    // ----- reference from office hour conversation with Prof. Cotter
     filteredCats = catDatas.filter(catDatas => catDatas.photos.length > 0);
    // console.log(filteredCats)
    printFirstCatImg();
    printCatgender();
    printCatage();
    printCatlocation();
    printCatinfo();
    printSecondcatimg();
    printPetfinderlogo();
    printCatname();


  })

}

function draw() {
  background(0);
  push();
  // ----- background cellphone surface, using class to display and also generate the style & background shadow of it, creating by using Class
  let surfaceBackground = new Infobox(440, Y, 520, 1350, 50);
  surfaceBackground.style();
  surfaceBackground.display();
  // console.log(backgroundSurface.y)
  pop();
  // ----- cat information background, creating by using Class
  fill(200);
  noStroke();
  let infoBackground = new Infobox(450, Y + 1185, 500, 65, 16);
  let inforBackground1 = new Infobox(450, Y + 608, 500, 65, 16);
  infoBackground.display();
  inforBackground1.display();
  // ----- interact with mouseWheel event. When mouseWheel(), meaning user scroll up/down. 
  // ----- using seconcatPhotos variable to detect if mouseWheel event. If yes, Y value includes posY
  // ----- I used to use solid number here but when mouseWheel(), they don't move smoothly. 
  // ----- I test for a bit, and notice if I store in a varible, eg. Y. And let Y = posY when mouseWheel, it works smooth. I'm not sure why
  if(secondcatPhotos){
    Y = posY;
    firstcatImg.position(450, posY + 103);
    catBreeds.position(500, posY + 1220);
    catNeutered.position(500, posY + 1190);
    catVaccine.position(750, posY + 1190);
    catSpecialneed.position(750, posY + 1220);

    if(filteredCats[i].photos.length > 1){
      nextcatImg.position(450, posY + 680);
    }
      else{
        noImgshow.position(450,  posY + 680);
      }
      petFinder.position(640, posY + 1270);
      catCity.position(750, posY + 610);
      catState.position(750, posY + 640);
      catAge.position(500, posY + 640);
      catGender.position(500, posY + 610);
      catName.position(460, posY + 60);
  }
  // ----- create 2 interactive button. 
  // ----- when user click "adopt me", jump to adoption page;
  // ----- when user click "next cat!" jump to next cat
  // ----- create css class for generating button style
  createButtons();

  // ----- Using class to create more interactive button object
  // ----- UI version of like button and next cat button.
  // ----- using contains function to detect if mouseX and mouseY is inside the button
  // ----- reflect from my week 4 assignment - csgoAimLab

  // let showLike = new Likebutton(890, Y + 1278, 45, 50);
  let showLike1 = new Likebutton(890, Y + 58, 45, 50);
  // showLike.contains(mouseX, mouseY);
  // showLike.display();
  showLike1.contains(mouseX, mouseY);
  showLike1.display();

  // ----- display app logo on center top
  image(caTinerlogo, 635, Y, 140, 70)
}

