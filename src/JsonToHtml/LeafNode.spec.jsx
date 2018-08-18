import React from 'react';
import {shallow} from 'enzyme';
import {LeafNode} from './LeafNode';

describe('Leaf Node', () => {

  const config = {
    heading1: 'h1',
  };

  it('should render properly', () => {
    const node = {type: 'heading1', text: 'This is an h1'};
    const renderedNode = shallow(<LeafNode node={node} config={config}/>);

    expect(renderedNode).toMatchSnapshot();
  });
});
