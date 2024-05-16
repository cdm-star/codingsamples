/**tract.js
 * Colin Moore
 * IGME-102: Project 2
 * Date Created:  10/25/23
 * Last Date Updated: 11/2/23
 * tract class 
 * creates the string to be display on the text 
 * and creates the lat and lon for both counties 
 * and display either the white and derpession circle
 * or population,assisted and adults. 
 */


class tract{
   /**
    * constructor: set the properties for this class
    * @param {objectliteral} tract 
    */
   constructor(tract){
      for(let prop in tract){
         this[prop]=tract[prop];
      }
      this.white=this.white/this.population
      this.assisted=(this.assisted/this.population);
      this.adults=this.adults/this.population;
      if(this.county=="Fulton"){
         this.x=map(this.lon,-84.54,-84.19,100,width-100);
         this.y=map(this.lat,34.08,33.60,100,height-100);
      }else{
         this.x=map(this.lon,-77.96,-77.41,100,width-300);
         this.y=map(this.lat,43.33,42.96,100,height-600);
      }
      
      //console.log("this:",this);
   }
   /**
    * display: display a 
    * string based on the
    * lat and lon of the literal above and
    * circles when white and depression 
    * are selected in the 1 drop down menu 
    * or the other option display the
    *  population adults and the people assisted
    */
   display(){
    
      
      if(UIMG.sel.selected()=="map white and depression"){
         
         fill(24,209,191,120);//white
         ellipse(this.x,this.y,this.white*100);
         rectMode(CENTER);
         fill(99,0,255,85);//depression
         rect(this.x,this.y,this.outcomes.Depression);
      }else if(UIMG.sel.selected()=="map population,assisted and adults"){
         fill(225,0,219,120);//population
         ellipse(this.x,this.y,this.population/150);
         rectMode(CENTER);
         fill(225,170,20);//assisted
         rect(this.x,this.y,this.assisted*50);
         fill(0,225,85,112);//adults
         ellipse(this.x,this.y,this.adults*20);
      }
      fill(255,255,255,50);
      if(UIMG.checkbox.checked()){
         text(this.toString(),this.x,this.y);
      }
   
   }
   /**
    * toString: converts a
    * n array to a string 
    * and return it so 
    * can be used in display
    * @returns string
    */
   toString(){
     let string="population ";
     string+=format.num.format(this.population)+":"+" ";
     string+=format.pct.format(this.white)+" "+"white,";
     string+="\n"+format.pct.format(this.assisted)+" "+"assisted,";
     string+="\n"+format.pct.format(this.adults)+" "+"adults";
     string+="\n"+this.outcomes.Depression+"% "+"depression";
   
     return string;
      
   }
}