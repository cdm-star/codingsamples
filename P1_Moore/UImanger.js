/**UI manger Class.js
 * Colin Moore
 * IGME-102:Project 1, 
 * Date Created: 10/2/23
 * Last Date updated: 10/4/23
 * Creates button when clicked on calls the different grid of dogs, also creates radio buttons when the user selects that option,
 * one that calls a base class method related to all dogs, one related to one dervived classes unqiue method,
 * one that generates a new dog and last one replaces a the dog that was clciekd with a diffenret class
 * of the dogs, also when each button by the user is pressed then it calls that function 
 * 
 */

class UImanger{
   constructor(){
      createP();
      this.radio= createRadio();
      this.radio.option("Party");
      this.radio.option("Pink ears for Portie");
      this.radio.option("Generate");
      this.radio.option("Replace");
      this.radio.selected("Party");
      createP();
      let buttonm=createButton("Fill with Random dog");
       buttonm.mouseClicked(randomchosen);
      createSpan("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
      let but2=createButton("Fill with orderd dogs");
      but2.mouseClicked(orderedclass);
      createSpan("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
      let but3= createButton("Fill with favorite to least favorite dog");
      but3.mouseClicked(ownchosenclass);
   }

}