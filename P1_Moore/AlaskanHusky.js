/**AlaskanHusky.js
 * Colin Moore
 * IGME-102: Project 1
 * Date Created: 10/2/23
 * Last Date updated: 10/4/23
 * AlaskanHusky Class: is a child of the base class dog,
 * draws alakskan husky when displayed is called
 */

 class AlaskanHusky extends Dog{
    /**
     * constructor: used super to get parent paramters as 
     * well as the parameters for just this class
     * @param {number} x 
     * @param {number} y 
     * @param {string} _color 
     */
    constructor(x,y,_color){
        super(x,y,_color);
        this.size=60;
       
    }
    /**
     * display: draws husky
     */
    display(){
        fill(this.color);
        stroke("black");
        strokeWeight(3);
        //ellipse(200,220,30);
         ellipse(this.x,this.y,this.size/2);
         noStroke();
        //ellipse(200,200,60);
         ellipse(this.x,this.y-20,this.size);
 
         //triangle(175,190,185,150,195,190);
        triangle(this.x-25,this.y-30,this.x-15,this.y-70,this.x-5,this.y-30);
        // triangle(225,190,215,150,205,190);
        triangle(this.x+25,this.y-30,this.x+15,this.y-70,this.x+5,this.y-30);
    }
}
