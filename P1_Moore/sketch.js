/**Sketch.js
 * Colin Moore
 * IGME-102:Project 1, 
 * Date Created: 10/2/23
 * Last Date updated: 10/6/23
 * Creates dog grid based on the buttons clicked and 
 * when the radio buttons selected updates the canavs 
 * in some way,radio buttons: when party is selected 
 * and user is within dog and clicked changes that dogs
 * color, if pink ears selected and the user is within 
 * a dog that has class of PortugueseWaterDog changes the 
 * dogs ears to pink, if generate is selected and user clicks 
 * inside canvas genrates a new dog with a random class and lasty 
 * if replace is slected and user has the mouse inside canvas and 
 * clicks on a dog replaces that dog with a new random dog. 
 * Buttons: first open program the random dog is displayed when the 
 * user clicks on the order button changes the dog grid
 * to have the base class first then portugueseWaterdog class, 
 * then golden retriver class then lastly the husky class; 
 * when the my favorite to least favorite dog breed button
 * is pressed creates grid of dogs with portugueseWaterdog class 
 * first since I have portugueseWaterdog, then AlskanHusky, then dog 
 * since the base class looks like a chihuahua, then goldenretriever class, 
 * lasty when the random order is called creates a grid of dogs with random 
 * classes and random color
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */
const gooddog=[];//good dog array
let colordog=["blue","yellow","brown","LightSalmon"];//colors for the dog array
let uim;//delcares a varibale for the dom elements



/**
 * setup :creates a canvas and also makes the array of gooddog, add items
 * into the array by called the randomdog function
 */
function setup() {
   createCanvas(425, 425);
   uim=new UImanger();//intials the varibale to class of that contains the dom elements
   randomchosen();//calls the random grid when opening program
  
  
}
/**
 * draw:loops through gooddog array and class the display 
 * based on the the buttons the user presses
 */
function draw(){
   background("grey");
   
   for(let d of gooddog){
      d.update();
      d.display();
   }

}
/**
 * mouseClicked: based on the radio option selected by the user the program changes with mouseX and mouseY,
 * if generate was selected and you click anywhere on canvas a new random class with that dog will be 
 * placed their, if replace was selected gets rid of the dogs that was originally their
 *  and replaces it with a random dog where the orginal dog was, if party was selected and the user has clicks the mouse when
 * the mouse is within the creature switches color of the dog to random, if the pink ears for portie was selected
 * then when the user is within the dog that has class of portie colors the porties ear pink
 */
function mouseClicked(){
 let currentuivalue=uim.radio.value();
 let found=false;
 console.log(currentuivalue);
 if(currentuivalue==="Generate" && mouseX<width && mouseY<height){
   gooddog.push(randomdog(mouseX,mouseY));
 }else{
   for(let d=0;d<gooddog.length&& found==false;d++){
      if(gooddog[d].mousewithin()){
         found=true;
         switch(currentuivalue){
            case "Party":
               let colorsd=random(colordog);
               gooddog[d].clickedmenu(colorsd);
               break;
            case "Pink ears for Portie":
               if(gooddog[d] instanceof PortugueseWaterdog){
                  console.log("filled ear?");
                  gooddog[d].pinkear=true;
               }
               break;
            case "Replace":
               let x=gooddog[d].x;
               let y=gooddog[d].y;
               gooddog[d]=randomdog(x,y);
               break;

         }
      }
   }
 }
   
}
/**
 * ownchoosenclass: creates a grid of dogs with my 
 * favorite dog class to my least favorite dog class
 */
function ownchosenclass(){
gooddog.splice(0);
console.log("Own Chosen class was called");
let currentdog=0;
for(let xcoord=60;xcoord<width;xcoord+=100){
   for(let ycoord=80;ycoord<height;ycoord+=80){
      switch(currentdog){
         case 0:
            gooddog.push(new PortugueseWaterdog(xcoord,ycoord,colordog[2]));
            break;
         case 1:
            gooddog.push(new AlaskanHusky(xcoord,ycoord,colordog[3]));
            break;
         case 2:
            gooddog.push(new Dog(xcoord,ycoord,colordog[0]));
            break;
         default:
            gooddog.push(new Goldenretriever(xcoord,ycoord,colordog[1]));
      }
   
   
   }
   currentdog++;
}
console.log("Favorite to least favorite?",gooddog);
return gooddog;
}
/**
 * 
 * orderedclass: makes a grid of dogs with the base class first, in the index after the base class is linked from top to 
 * bottom with the other three child classes
 */
function orderedclass(){
gooddog.splice(0);
console.log("OrderedClass was called");
let currentdog=0;
for(let xcoord=60;xcoord<width;xcoord+=100){
   for(let ycoord=80;ycoord<height;ycoord+=80){
      switch(currentdog){
         case 0:
            gooddog.push(new Dog(xcoord,ycoord,colordog[0]));
            break;
         case 1:
            gooddog.push(new PortugueseWaterdog(xcoord,ycoord,colordog[2]));
            break;
         case 2:
            gooddog.push(new Goldenretriever(xcoord,ycoord,colordog[1]));
            break;
         default:
            gooddog.push(new AlaskanHusky(xcoord,ycoord,colordog[3]));
            
      }
    
   }
   currentdog++;
}
console.log("orderder Gooddog?",gooddog);
return gooddog;

}
/**
 * randomchosen: creates a grid of dogs with random class
 */
function randomchosen(){
  gooddog.splice(0);
   console.log("RandomChoosen was called");
   for(let xcoord=60;xcoord<width;xcoord+=100){
      for(let ycoord=80;ycoord<height;ycoord+=80){
         gooddog.push(randomdog(xcoord,ycoord));

      }
  }
  console.log("gooddog random?",gooddog);

}

/**
 * randomdog:accpets and x location and y location and creates
 * dog with a random class based on the rann varibale and return that
 * to the gooddog array 
 * @param {number} x 
 * @param {number} y 
 */
function randomdog(x,y){
  console.log("RandomDog was called");
   let onedog=null;
  

   let colorsd=random(colordog);
   let rann=int(random(0,4));
   if(rann==0){
      onedog=new PortugueseWaterdog(x,y,colorsd);
   }
   else if(rann===1){
      onedog=new Goldenretriever(x,y,colorsd);
   }
   else if(rann===2){
      onedog=new AlaskanHusky(x,y,colorsd)

   }else if(rann===3){
      onedog=new Dog(x,y,colorsd);
   }
   return onedog;
}