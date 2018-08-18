import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {getComponent} from './getComponent';

describe('Get Html Tag', () => {

  it('should return component associated to the node type in config', () => {
    const config = {
      paragraph: 'p',
    };

    expect(getComponent(config, 'paragraph')).to.equal('p');
  });

  it('should return a default component when node type is not present in config', () => {
    const Component = getComponent({}, 'lorem');

    expect(shallow(<Component/>).html()).to.equal('<div class="type-not-present-in-config"></div>');
  });
});
