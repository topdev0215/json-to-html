import {isLeafNode} from '../utils/isLeafNode';

export function normalize(document, userValidationRules = []) {
  if (isValidNode(document, userValidationRules)) {
    return {...document, nodes: normalizeChildrenNodes(document.nodes, userValidationRules)}
  }
  return {};
}

function normalizeChildrenNodes(nodes, userValidationRules) {
  return nodes
      .filter(node => isValidNode(node, userValidationRules))
      .map(node => normalizeValidNode(node, userValidationRules));
}

function normalizeValidNode(node, userValidationRules) {
  if (isLeafNode(node)) {
    return node;
  }
  return {...node, nodes: normalizeChildrenNodes(node.nodes, userValidationRules)}
}

function isValidNode(node, userValidationRules) {
  if (Boolean(node.text) && Boolean(node.nodes)) {
    return false;
  }
  return userValidationRules.every(rule => !rule(node));
}
