import React from 'react';
import {Node} from './Node';
import {NodePropTypes} from './NodePropTypes';

export function JsonToHtml({document, config}) {
  return <Node node={document} config={config}/>;
}

JsonToHtml.propTypes = {
  document: NodePropTypes.node,
  config: NodePropTypes.config,
};
