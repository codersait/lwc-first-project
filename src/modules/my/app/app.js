import { LightningElement } from "lwc";
export default class App extends LightningElement {
    names = ['salih','serra','nilufer','kevser']
    greetingMsg = 'hello i am greeting msg from app component'
    get addNumber(){
        return 2+3
    }

    nameChange(event){
        this.name = event.detail
    }





}
