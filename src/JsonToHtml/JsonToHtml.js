import React from "react";
import {Node} from "./Node";
import {ContainerNode} from "./ContainerNode";
import {NodePropTypes} from "./NodePropTypes";

export function JsonToHtml({document, config}) {
  return <Node node={document} config={config}/>;
}

ContainerNode.propTypes = {
  document: NodePropTypes.node,
  config: NodePropTypes.config,
};

