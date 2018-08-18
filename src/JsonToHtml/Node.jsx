import React from 'react';
import {LeafNode} from './LeafNode';
import {ContainerNode} from './ContainerNode';
import {isLeafNode} from '../utils/isLeafNode';
import {NodePropTypes} from './NodePropTypes';

export function Node({node, config}) {
  if (isLeafNode(node)) {
    return <LeafNode node={node} config={config}/>;
  }
  return <ContainerNode node={node} config={config}/>;
}

Node.propTypes = NodePropTypes;
