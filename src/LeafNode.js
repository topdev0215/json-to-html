import React from 'react';
import {getHtmlTag} from "./getHtmltag";

export function LeafNode({node, config}) {
  const HtmlTag = getHtmlTag(config, node.type);
  return <HtmlTag>{node.text}</HtmlTag>;
}
