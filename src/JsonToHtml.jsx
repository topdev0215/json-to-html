import React from "react";
import {Node} from "./Node";

export function JsonToHtml({document, config}) {
  return <Node node={document} config={config}/>;
}
