import React from 'react';
import {getComponent} from './getComponent';
import {NodePropTypes} from './NodePropTypes';

export function LeafNode({node, config}) {
  const Component = getComponent(config, node.type);
  return <Component>{node.text}</Component>;
}

LeafNode.propTypes = NodePropTypes;
