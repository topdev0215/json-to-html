import {isLeafNode} from '../utils/isLeafNode';

export function normalize(document, userValidationRules = []) {
  const normalizedDocument = normalizeNode(document, userValidationRules);
  return normalizedDocument === undefined ? {} : normalizedDocument;
}

function normalizeNode(node, userValidationRules) {
  const childrenNormalizedNode = isLeafNode(node)
    ? node
    : {...node, nodes: normalizeChildrenNodes(node.nodes, userValidationRules)};
  if (isValidNode(childrenNormalizedNode, userValidationRules)) {
    return childrenNormalizedNode;
  }
  return undefined;
}


function normalizeChildrenNodes(nodes, userValidationRules) {
  return nodes
    .map(node => normalizeNode(node, userValidationRules))
    .filter(node => node !== undefined);
}

function isValidNode(node, userValidationRules) {
  if (Boolean(node.text) && Boolean(node.nodes)) {
    return false;
  }
  return userValidationRules.every(rule => !rule(node));
}
