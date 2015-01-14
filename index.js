var igatajs = function (templateID, dataSet, opening, closing) {
  try {
    // check if the templateID is a valid string
    if (typeof templateID !== 'string') {
      return new Error('The template id must be a string.');
    }
    // check if dataSet is defined and is a valid object
    if (dataSet && typeof dataSet !== 'object') {
      return new Error('The dataset must be an object.');
    }
    // check if the opening symbol is defined and is a string
    if (opening && typeof opening !== 'string') {
      return new Error('The opening symbol must be a string.');
    }
    // check if the closing symbol is defined and is a string
    if (closing && typeof closing !== 'string') {
      return new Error('The closing symbol must be a string.');
    }

    // if the opening or closing symbol isn't defined there are equal to {{ and }}
    var opening = opening || '{{';
    var closing = closing || '}}';

    // function to put the dataSet inside the template
    function parseString(string, dataSet, opening, closing) {
      try {
        var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
        var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
        var r = new RegExp(open + '(.+?)' + close, 'g')
        var matches = string.match(r) || [];

        matches.forEach(function(match) {
          var key = match.substring(opening.length, match.length - closing.length).trim();//chop {{ and }}
          var value = typeof dataSet[key] == 'undefined' ? '' : dataSet[key];
          string = string.replace(match, value);
        });

        return string;
      } catch (err) {
        return err;
      }
    }

    // add # if the templateID does not have it
    if (templateID.indexOf('#') === -1) {
      templateID = '#' + templateID;
    }

    // get the template
    var template = document.querySelector(templateID);
    var clone;

    // if the user pass a dataSet, replace it in the clone
    if (dataSet) {
      // get the innerHTML as string
      clone    = template.innerHTML.trim()
      clone = parseString(clone, dataSet, opening, closing);
      // create de dom parser
      var parser = new DOMParser();

      // parse clone to DOM Element
      clone = parser.parseFromString(clone, 'text/html').all[2]

      // get the correct element
      clone = clone.children[0]
    } else {
      clone = document.importNode(template.content, true)
    }

    // return the clone
    return clone;
  } catch (err) {
    return err;
  }
}

module.exports = igatajs;