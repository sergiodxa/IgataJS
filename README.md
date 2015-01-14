# IgataJS
Template engine who work with the HTML5 template tag.

Test coming soon!

## Install
Use NPM to install with the command:

```
npm i -S igatajs
```

## How to use
Import IgataJS inside your JS file using:

```javascript
var igatajs = require('igatajs');
```

In your HTML files create your templates:

```html
<template id="myTemplate">
  <h1>{{title}}</h1>
</template>
```

In your JS file now use IgataJS with these lines:

```
var template = igatajs('#myTemplate', {
  title: 'Hello world'
});
document.body.appendChild(template);
```

Now compile your JS using Browserify to create a browser compatible JS file.

Enjoy!

## Demo
To see a live demo go to this CodePen:


## License
The MIT License (MIT)

Copyright (c) 2015 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
