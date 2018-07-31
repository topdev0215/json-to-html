import React from 'react';
import {LeafNode} from "./LeafNode";
import {ContainerNode} from "./ContainerNode";

export function Node({node, ...props}) {
  if (isLeafNode(node)) {
    return <LeafNode node={node} {...props}/>
  }
  return <ContainerNode node={node} {...props}/>;
}

function isLeafNode(node) {
  return Boolean(node.text);
}
