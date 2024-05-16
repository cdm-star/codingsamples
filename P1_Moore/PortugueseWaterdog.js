/**PortugueseWaterDog.js
 * Colin Moore
 * IGME-102: Project 1, 
 * Date Created: 10/2/23
 * Last Date updated: 10/4/23
 * Portuguese Water Dog class: another child class of the parent class dog, when its display
 * is called it draw the protuguese water dog class, also when the pink ears button is clicked
 *  makes the ears for this class pink
 */

class PortugueseWaterdog extends Dog{
    /**
     * constructor: used super to get parent paramters as 
     * well as the parameters for just this class
     * @param {number} x 
     * @param {number} y 
     * @param {string} _color 
     */
    constructor(x,y,_color){
        super(x,y,_color);
        this.size=50;
        this.pinkear=false;
       
    }
    /**
     * display: draw Portuguese Water dog
     */
    display(){
        fill(this.color);
        stroke("black");
  strokeWeight(3);
  //ellipse(200,220,30,40);
  ellipse(this.x,this.y,this.size-20,this.size-10);
  noStroke(); 
  //ellipse(200,200,50);
  ellipse(this.x,this.y-20,this.size);
 
    if(this.pinkear==true){
        this.pinkears();
    }else{
          //triangle(177,210,150,190,185,180);//(bottom,bottom,left,left,top,top)
   triangle(this.x-23,this.y-10,this.x-50,this.y-30,this.x-15,this.y-40);//(bottom,bottom,left,left,top,top)
   //triangle(223,210,250,190,215,180);
   triangle(this.x+23,this.y-10,this.x+50,this.y-30,this.x+15,this.y-40);
    }


    }
    /**
     * pinkears: turns the color pinky and redraws the ears 
     * so that the portuguese water dog has pink ears
     */
 pinkears(){
    this.pinkear=true;
 

    fill("pink");
    stroke("pink");

  //triangle(177,210,150,190,185,180);//(bottom,bottom,left,left,top,top)
   triangle(this.x-23,this.y-10,this.x-50,this.y-30,this.x-15,this.y-40);//(bottom,bottom,left,left,top,top)
  //triangle(223,210,250,190,215,180);
  triangle(this.x+23,this.y-10,this.x+50,this.y-30,this.x+15,this.y-40);
    }
}
