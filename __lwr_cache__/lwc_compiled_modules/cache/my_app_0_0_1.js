import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";

class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.names = ['salih', 'serra', 'nilufer', 'kevser'];
    this.greetingMsg = 'hello i am greeting msg from app component';
  }

  get addNumber() {
    return 2 + 3;
  }

  nameChange(event) {
    this.name = event.detail;
  }
  /*LWC compiler v2.17.0*/


}

_registerDecorators(App, {
  fields: ["names", "greetingMsg"]
});

export default _registerComponent(App, {
  tmpl: _tmpl
});