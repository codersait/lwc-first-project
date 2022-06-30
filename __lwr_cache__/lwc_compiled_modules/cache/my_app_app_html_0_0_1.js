import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _myGreeting from "my/greeting";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator, b: api_bind, c: api_custom_element, f: api_flatten} = $api;
  const {_m0} = $ctx;
  return api_flatten([api_element("h1", stc0, [api_text(api_dynamic_text($cmp.addNumber))]), api_iterator($cmp.names, function (name) {
    return api_element("h3", {
      key: api_key(1, name)
    }, [api_text(api_dynamic_text(name))]);
  }), api_custom_element("my-greeting", _myGreeting, {
    props: {
      "msg": $cmp.greetingMsg,
      "names": $cmp.names
    },
    key: 2,
    on: {
      "namechange": _m0 || ($ctx._m0 = api_bind($cmp.nameChange))
    }
  })]);
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
  tmpl.stylesheetToken = "my-app_app"
}
freezeTemplate(tmpl);
