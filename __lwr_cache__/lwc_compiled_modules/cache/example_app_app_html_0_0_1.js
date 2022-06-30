import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator, f: api_flatten} = $api;
  return api_flatten([api_element("h1", stc0, [api_text(api_dynamic_text($cmp.addNumber))]), api_iterator($cmp.names, function (name) {
    return api_element("h3", {
      key: api_key(1, name)
    }, [api_text(api_dynamic_text(name))]);
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
  tmpl.stylesheetToken = "example-app_app"
}
freezeTemplate(tmpl);
