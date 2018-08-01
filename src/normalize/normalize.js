import {isLeafNode} from "../utils/isLeafNode";

export function normalize(document) {
  if (isValidNode(document)) {
    return {...document, nodes: normalizeChildrenNodes(document.nodes)}
  }
  return {};
}

function normalizeChildrenNodes(nodes) {
  return nodes
      .filter(isValidNode)
      .map(normalizeValidNode);
}

function normalizeValidNode(node) {
  if (isLeafNode(node)) {
    return node;
  }
  return {...node, nodes: normalizeChildrenNodes(node.nodes)}
}

function isValidNode(node) {
  return !(Boolean(node.text) && Boolean(node.nodes));
}