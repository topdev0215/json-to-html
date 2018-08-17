import React from 'react';
import {getHtmlTag} from "./getHtmltag";
import {Node} from "./Node";
import {NodePropTypes} from "./NodePropTypes";

export function ContainerNode({node, config}) {
  const HtmlTag = getHtmlTag(config, node.type);
  return (
    <HtmlTag>
      {node.nodes.map((node, index) => <Node node={node} config={config} key={index}/>)}
    </HtmlTag>
  );
}

ContainerNode.propTypes = NodePropTypes;
