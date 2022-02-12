# package-json-to-html
package.json to html text

# Install

```
npm install package-json-to-html
```

# Usage & Api

```javascript

var package_json_to_html = require("package-json-to-html");
var _package_json = require("../package.json");

var el = document.getElementById('my-container');

//package_json_to_html(pkg, options)
var s = package_json_to_html(_package_json);

el.innerHTML = s;

```
