function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".msg" + shadowSelector + " {color: purple;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];