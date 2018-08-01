import React from 'react';
import {shallow} from 'enzyme';
import {ContainerNode} from "./ContainerNode";

describe('Leaf Node', () => {

  const config = {
    paragraph: 'p',
    quote: 'blockquote',
  };

  it('should render properly', () => {
    const node = {type: "quote", nodes: []};
    const renderedNode = shallow(<ContainerNode node={node} config={config}/>);

    expect(renderedNode).toMatchSnapshot();
  });
});