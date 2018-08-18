import PropTypes from 'prop-types';

export const NodePropTypes = {
  node: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    nodes: PropTypes.array,
  }),
  config: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])),
};
