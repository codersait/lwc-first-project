function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "h1" + shadowSelector + " {color: red;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];