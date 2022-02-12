
//global variable, for html page, refer tpsvr @ npm.
package_json_to_html = require("../package-json-to-html.js");
_package_json = require("../package.json");

module.exports = {

	"default": function (done) {
		if (typeof window === "undefined") throw "disable for nodejs";

		document.getElementById('divResult3').innerHTML = '<div></div>';

		var el = document.getElementById('divResult3').firstChild;

		//package_json_to_html(pkg, options)
		var s = package_json_to_html(_package_json);

		el.innerHTML = s;

		done(false, "ui test");
	},

	"options/local": function (done) {
		if (typeof window === "undefined") throw "disable for nodejs";

		document.getElementById('divResult3').innerHTML = '<div></div>';

		var el = document.getElementById('divResult3').firstChild;

		var s = package_json_to_html(_package_json,
			{
				nameStyle: "background:yellow;display:inline-block;min-width:6em;",
				versionStyle: "color:red;",

				packageDir: "/local/main/node_modules/path/",
				rootPackageDir: "/local/main/",

				packageDirUrl: "http://localhost/url/main/node_modules/path/",

				localLabel: "user-local",
				localLabelTitle: "click for user-local",

			}
		);

		el.innerHTML = s;

		el.onclick = function (evt) {
			var target = evt.target;

			if (target.classList.contains("local-label")) {
				alert(target.previousSibling.href);
			}
		};


		done(false, "ui test");
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('package_json_to_html', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
