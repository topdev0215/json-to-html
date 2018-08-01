import React from 'react';
import {LeafNode} from "./LeafNode";
import {ContainerNode} from "./ContainerNode";
import {isLeafNode} from "../utils/isLeafNode";

export function Node({node, ...props}) {
  if (isLeafNode(node)) {
    return <LeafNode node={node} {...props}/>
  }
  return <ContainerNode node={node} {...props}/>;
}
