import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import document from '../jsonExamples/document';
import {JsonToHtml} from "./JsonToHtml";

describe('Leaf Node', () => {

  const config = {
    document: 'div',
    heading1: 'h1',
    paragraph: 'p',
    quote: 'blockquote',
  };

  it('should render the expected html', () => {
    const renderedNode = shallow(<JsonToHtml document={document} config={config}/>);

    chai.expect(renderedNode.html()).to.equal(
      '<div>' +
        '<h1>A title</h1>' +
        '<p>This is a second paragraph of text</p>' +
        '<blockquote>' +
          '<p>This paragraph is nested within a quote</p>' +
        '</blockquote>' +
      '</div>'
    );
  });
});