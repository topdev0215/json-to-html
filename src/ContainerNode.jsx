import React from 'react';
import {getHtmlTag} from "./getHtmltag";
import {Node} from "./Node";

export function ContainerNode({node, config}) {
  const HtmlTag = getHtmlTag(config, node.type);
  return (
    <HtmlTag>
      {node.nodes.map((node, index) => <Node node={node} config={config} key={index}/>)}
    </HtmlTag>
  );
}
