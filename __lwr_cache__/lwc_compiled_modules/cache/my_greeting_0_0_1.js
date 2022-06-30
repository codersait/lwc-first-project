import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./greeting.html";

class Greeting extends LightningElement {
  constructor(...args) {
    super(...args);
    this.msg = void 0;
    this.names = void 0;
  }

  callParent() {
    const event = new CustomEvent('namechange', {
      detail: 'new Name'
    });
    this.dispatchEvent(event);
  }
  /*LWC compiler v2.17.0*/


}

_registerDecorators(Greeting, {
  publicProps: {
    msg: {
      config: 0
    },
    names: {
      config: 0
    }
  }
});

export default _registerComponent(Greeting, {
  tmpl: _tmpl
});