import { LightningElement,api } from "lwc";
export default class Greeting extends LightningElement {
 @api msg
 @api names

 callParent(){
    const event = new CustomEvent('namechange',{
        detail:'new Name'
    })
    this.dispatchEvent(event)
 }

}
