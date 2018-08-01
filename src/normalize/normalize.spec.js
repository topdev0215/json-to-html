import {expect} from 'chai';
import {normalize} from './normalize';
import document from '../jsonExamples/document';
import documentWithInvalidNode from '../jsonExamples/documentWithInvalidNode';
import documentWithInvalidQuote from '../jsonExamples/documentWithInvalidQuote';

describe('normalize', () => {

  it('should remove nodes that have both text and nodes properties', () => {
    expect(normalize(documentWithInvalidNode)).to.deep.equal({
      type: 'document',
      nodes: [
        {
          type: 'paragraph',
          text: 'This is a valid paragraph',
        },
      ],
    })
  });

  it('should leave unchanged valid document', () => {
    expect(normalize(document)).to.deep.equal(document)
  });

  it('should allow user to define validation rules', () => {
    const validationRules = [
      node => node.type === "quote" && Boolean(node.text),
    ];

    expect(normalize(documentWithInvalidQuote, validationRules)).to.deep.equal({
      type: 'document',
      nodes: [
        {
          type: 'quote',
          nodes: [
            {
              type: 'paragraph',
              text: 'This is a valid quote',
            },
          ],
        },
      ],
    })
  });
});
