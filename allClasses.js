// ----- create class for information background rectangle
class Infobox {
    constructor(x, y, w, h, tl){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.tl = tl;
    }
  
    display(){
      rect(this.x, this.y, this.w, this.h, this.tl);
    }
  
    style(){
    // ----- using drawing context to create shadow behind
    drawingShadow();
    // ----- background cellphone surface
    strokeWeight(10);
    stroke(30);
    fill(255);
    }

  
  }
  
  
  function drawingShadow(){
    let offsetX = map(5, 10, width, 1, -20);
    let offsetY = map(5, 10, height, 1, -20);
    drawingContext.shadowOffsetX = offsetX;
    drawingContext.shadowOffsetY = offsetY;
    drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = color(150, 111, 214);
  }

// ----- create class for like button
  class Likebutton{
    constructor(x1, y1, w1, h1){  
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
  }
  
  // ----- using contain to detect is mouse is hover and change color of the button. 
  display(){
    if(likeButtonMouseHovered == false){
    image(likeButton, this.x1, this.y1, this.w1, this.h1)
   }
  else{
    image(likeButtonHovered, this.x1, this.y1, this.w1, this.h1)
  }
  
  if(likeButtonMousePressed == true ){
    image(likeButtonHovered, this.x1, this.y1, this.w1, this.h1)
    
  }

  // ----- using isArchive to detect if user 'like' the cat, if they like, store current cat at left window. 
  if(isArchive){
    push()
    let archiveBackground = new Infobox(65, 415, 276, 320, 30);
    archiveBackground.style();
    archiveBackground.display();
    pop()

  }

  }
  // ----- using contain to detect if mouse is hover the like button
  // ----- I used this in my week 4 csgo aimlab and I thought this could work in this case
  // ----- OFC it did work!!1
  contains(px, py){
      let d = dist(mouseX, mouseY, this.x1, this.y1);
      if(d < this.w1){
        likeButtonMouseHovered = true
        // nextButtonMouseHovered = true
      }else{
        likeButtonMouseHovered = false   
        // nextButtonMouseHovered = false 
      }
    }
  
    
  }
  