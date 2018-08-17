import React from 'react';
import {getHtmlTag} from "./getHtmltag";
import {Node} from "./Node";
import {NodePropTypes} from "./NodePropTypes";

export function LeafNode({node, config}) {
  const HtmlTag = getHtmlTag(config, node.type);
  return <HtmlTag>{node.text}</HtmlTag>;
}

LeafNode.propTypes = NodePropTypes;
