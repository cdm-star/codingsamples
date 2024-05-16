/**Dog.js
 * Colin Moore
 * IGME-102: Project 1, 
 * Date Created: 10/2/23
 * Last Date updated: 10/6/23
 * Dog class: Parent class of the other dog class,
 *  draws dog when dog.display is called, mousewithin method to check if the mouse is within
 * the dog, clickedmenu to change color of dog when the user has party selected and inside of the dog,
 * update moves the dogs randomly with random speed from the right sided of the canavs to the left and when get to the edge
 * reset the coordinates
 */

class Dog{
    /**
     * constructor: properties for parent class
     * @param {number} x 
     * @param {number} y 
     * @param {string} _color 
     */
    constructor(x,y,_color){
        this.x=x;
        this.y=y;
        this.color=_color;
        this.size=50;
        this.speed=random(0.1,0.5);

    }
    //display: draws the parent dog class
    display(){
        fill(this.color);
        stroke("black");
        strokeWeight(3);
        //ellipse(200,220,25);
        ellipse(this.x,this.y,this.size/2);
        noStroke(); 
        fill(this.color);
        //ellipse(200,220,50);
        ellipse(this.x,this.y-20,this.size);
        
      //triangle(177,210,150,160,185,180);//(bottom,bottom,left,left,top,top)
        triangle(this.x-23,this.y-10,this.x-50,this.y-60,this.x-15,this.y-40);
        //triangle(223,210,250,155,210,180);//(bottom,bottom,right,right,top)
       
        triangle(this.x+23,this.y-10,this.x+50,this.y-65,this.x+10,this.y-40);
    }
    /*
    * checkes to see if the mouse is within the dogs and returns true if is and 
    * false if not
    */
    mousewithin(){
      if((mouseX>=this.x-this.size/2)&&(mouseX<=this.x+this.size/2)&&(mouseY>=this.y-this.size/2)&&(mouseY<=this.y+this.size/2)){
        return true;
       }else{
        return false;
       }
    }
    /**
     *  clickedmenu: takes the array of colors from the sketch
     * and when the user has selected party and when the mouse is within the dog
     * and clicked changes the dogs color to random color and then updates display
     * @param {array} colordog 
     */
    clickedmenu(colordog){
        this.color=colordog;
        this.display();
        
    }
    /**
     * update: makes the dogs move from the right side to the left sized
     * of the canavs and when they get to the width set them back to the 
     * to further of the left side and then continues moving them again at diffenrent speeds
     */
    update(){
        this.x+=this.speed;
        if(this.x>width+60){
            this.x=-60;
        }
    }

}
