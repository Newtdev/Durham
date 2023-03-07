import React from "react";

function htmlencode(str) {
  return str.replace(/[&<>"']/g, function ($0) {
    return (
      "&" +
      { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] +
      ";"
    );
  });
}

// decodeHtml(input)

const encoded = htmlencode(
  "<div><h1>Test</h1><h2>Test 1</h2><p>It's a unit test</p></div>"
);

function decodeHtml(html) {
  var txt = React.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

console.log(decodeHtml(encoded));
