import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./greeting.css";

import _implicitScopedStylesheets from "./greeting.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "msg": true
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator, b: api_bind, f: api_flatten} = $api;
  const {_m0} = $ctx;
  return api_flatten([api_element("div", stc0, [api_text(api_dynamic_text($cmp.msg))]), api_iterator($cmp.names, function (name) {
    return api_element("p", {
      key: api_key(1, name)
    }, [api_text("i love " + api_dynamic_text(name))]);
  }), api_element("button", {
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.callParent))
    }
  }, [api_text("pass data to app comp")])]);
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "my-greeting_greeting"
}
freezeTemplate(tmpl);
