/**Sketch.js
 * Colin Moore
 * IGME-102: Project 2
 * Date Created:  10/25/23
 * Last Date Updated: 11/2/23
 * creates a visualization of Monroe County New York 
 * and Fulton County Georgia, one maps white and 
 * depression and the other maps population 
 * the assisted and adults the subsets the 
 * first is all tracts the second 
 * is the people whose depression is greater than 
 * 18 and other is the percentgae of peoople whose is
 * less than 15% and lastly a checkbox to display the text of all the
 * things being displayed in the circles 
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */
const UIMG={};
const format={};
let tractlist=[];
let legend1;
let legend2;


/**
 * setup :
 */
function setup() {
   createCanvas(2000, 2000);
   numberformatting();
   mangers();
   legend1=loadImage("media/whiteandD.jpg");
   legend2=loadImage("media/pAandAD.jpg");
   loadJSON("media/gaPlacesHealthTracts.json", readTracts);


}
/**
 * uimanger: creartes dom elements
 */
function mangers(){
   createSpan("Country to map:");
   createP();
   UIMG.radio=createRadio();
   UIMG.radio.option("Fulton,GA");
   UIMG.radio.option("Monroe,NY");
   UIMG.radio.selected("Fulton,GA");
   createP();
   createSpan("Census Tract Health visualization controls:");
   createP();
   UIMG.sel=createSelect();
   UIMG.sel.option("map white and depression");
   UIMG.sel.option("map population,assisted and adults");
   UIMG.sel.selected("map white and depression");
   createP();
   UIMG.sel2=createSelect();
   UIMG.sel2.option("for all tracts");
   UIMG.sel2.option("if depression > 18");
   UIMG.sel2.option("if assisted < .15%");
   UIMG.sel2.selected("for all tracts");
   createP();
   UIMG.checkbox=createCheckbox("Show Details label",false);
}
/**
 * numberformatting: adds property to the global variable
 */
 function numberformatting(){
   format.num= new Intl.NumberFormat();
   format.pct= new Intl.NumberFormat("us-EN",{style:"percent"});
  

}
/**
 * updateViz: creates the legend call
 * the bring in the object literals based on the radio button 
 * of the two counties and also filter them based on the subsets 
 * for the second dropdown box
 */
function updateViz(){
background("Gray"); 

if(UIMG.radio.value()=="Fulton,GA"){
   loadJSON("media/gaPlacesHealthTracts.json", readTracts);
 }
 else{
   loadJSON("media/nyPlacesHealthTracts.json",readTracts);
 }
 
  
   let tracts=tractlist;
   
   switch(UIMG.sel2.selected()){
      case "if depression > 18":
        
         tracts=tractlist.filter(function(tract){
           return tract.outcomes.Depression>18;
         });
         break;
      case "if assisted < .15%":
        
         tracts=tractlist.filter(function(tract){
            return tract.assisted<.15;
         });
         break;
   }
   tracts.forEach(function(tract){
    
      tract.display();
      
   });
   
   textSize(40);
   text("Visualization Lengend",width-500,height-600);
   image(legend1,( width-legend1.width)-350,(height-legend1.height)-370);
   image(legend2,(width-legend2.width)-300,height-legend2.height);
   textSize(30);
   text("White: the light blue circle"+
   "\n"+"depression: the square",width-370,height-500);
   text("Population: the pink circle"+
   "\n"+"assisted: is the square"+
   "\n"+"adults is the oter circle",width-350,height-209);

}

/**
 * tractarray: creates an array and then calls the function print tract
 * @param {array} tractarray 
 */
 function readTracts(tractarray){
   //console.log("Tract array:",tractarray);
   tractlist=[];
      for(let i=0;i<tractarray.length;i++){
           tractlist[i]=new tract(tractarray[i],format);
      }
      
      updateViz();
   }

