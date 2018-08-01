import {expect} from 'chai';
import {normalize} from "./normalize";
import documentWithInvalidNode from '../jsonExamples/documentWithInvalidNode';
import document from '../jsonExamples/document';

describe('normalize', () => {

  it('should remove nodes that have both text and nodes properties', () => {
    expect(normalize(documentWithInvalidNode)).to.deep.equal({
      "type": "document",
      "nodes": [
        {
          "type": "paragraph",
          "text": "This is a valid paragraph"
        }
      ]
    })
  });

  it('should leave unchanged valid document', () => {
    expect(normalize(document)).to.deep.equal(document)
  });
});