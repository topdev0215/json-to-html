This library allows use to render HTML that you would have stored as JSON

# Get started

## How to install

Add this dependency to the package.json of your application.

```json
{
  "dependencies": {
    "json-to-html": "git+ssh://git@github.com/hirakawa0215/json-to-html.git"
  }
}
```

then

    $ yarn install

## Usage

### JsonToHtml

A document stored in JSON format could look like that:

```json
{
  "type": "document",
  "nodes": [
    {
      "type": "heading1",
      "text": "A title"
    },
    {
      "type": "paragraph",
      "text": "This is a first paragraph of text"
    },
    {
      "type": "quote",
      "nodes": [
        {
          "type": "paragraph",
          "text": "This paragraph is nested within a quote"
        }      
      ]
    }
  ]
}
```

```javascript
 import {JsonToHtml} from 'json-to-html';
 
 const config = {
   document: ({children}) => <div className="document">{children}</div>,
   heading1: 'h1',
   paragraph: 'p',
   quote: 'blockquote',
 };
 
 class App extends Component {
   render() {
     return (
       <JsonToHtml document={document} config={config}/>
     );
   }
 }
``` 

The example above would generate the following html:

```html
<div class="document">
    <h1>A title</h1>
    <p>This is a first paragraph of text</p>
    <blockquote>
        <p>This paragraph is nested within a quote</p>    
    </blockquote>
</div>
```

### normalize

This library exposes a method `normalize` that allows you to normalize a JSON document according to rules that
 you can provide. Invalid nodes are removed. There is one default rule that remove nodes that have both 
 text and nodes properties.
 
For example let's consider the following JSON document.
 
```json
 {
     "type": "document",
     "nodes": [
       {
         "type": "quote",
         "text": "This is an invalid quote"
       },
       {
         "type": "quote",
         "nodes": [
           {
             "type": "paragraph",
             "text": "This is a valid quote"
           }
         ]
       }
     ]
 }
```
 
We will define a rule that says that a node is not valid if it is a quote and that it doesn't have a 
property `nodes`. 
 
```javascript
 import {normalize} from './normalize';
 import documentWithInvalidQuote from '../jsonExamples/documentWithInvalidQuote';
 
 const validationRules = [
   node => node.type === 'quote' && Boolean(node.text),
 ];
 
 console.log(normalize(documentWithInvalidQuote, rules));
 /* {
    "type": "document",
    "nodes": [
      {
        "type": "quote",
        "nodes": [
          {
            "type": "paragraph",
            "text": "This is a valid quote"
          }
        ]
      }
    ]
  } */
``` 