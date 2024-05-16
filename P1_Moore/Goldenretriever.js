/**Goldenretriever.js
 * Colin Moore
 * IGME-102:Project 1,
 * Date Created: 10/2/23
 * Last Date updated: 10/4/23
 * Golden retriever class: another child of the parent class dog, draws
 * golden retriver
 */

 class Goldenretriever extends Dog{
   /**
     * constructor: used super to get parent paramters as 
     * well as the parameters for just this class
     * @param {number} x 
     * @param {number} y 
     * @param {string} _color 
     */
    constructor(x,y,_color){
        super(x,y,_color);
        this.size=70;
        

    }
    /**
     * display:draws golden retriever
     */
    display(){
        fill(this.color);
        stroke("black");
        strokeWeight(3);
        //ellipse(200,220,40);
        ellipse(this.x,this.y,this.size-30);
        noStroke();
        //ellipse(200,200,70);
        ellipse(this.x,this.y-20,this.size);
       
       //triangle(140,230,178,175,178,210);//(left,left,top,top,bottom,bottom)
         triangle(this.x-60,this.y+10,this.x-22,this.y-45,this.x-22,this.y-10);//(left,left,top,top,bottom,bottom)
        // triangle(260,230,222,175,222,210);//(left,left,top,top,bottom,bottom)
        
        triangle(this.x+60,this.y+10,this.x+22,this.y-45,this.x+22,this.y-10);//(left,left,top,top,bottom,bottom)
        
    }
}

