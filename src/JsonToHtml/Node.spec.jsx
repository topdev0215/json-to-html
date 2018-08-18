import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {LeafNode} from './LeafNode';
import {ContainerNode} from './ContainerNode';
import {Node} from './Node';

chai.use(chaiEnzyme());

describe('Node', () => {

  const config = {
    heading1: 'h1',
    quote: 'blockquote',
  };

  it('should render a leaf node when node has a text property', () => {
    const node = {type: 'heading1', text: 'This is an h1'};
    const renderedNode = shallow(<Node node={node} config={config}/>);

    expect(renderedNode.find(LeafNode)).to.be.present();
  });

  it('should render a container node when node does not have a text property', () => {
    const node = {type: 'quote', nodes: []};
    const renderedNode = shallow(<Node node={node} config={config}/>);

    expect(renderedNode.find(ContainerNode)).to.be.present();
  });
});
