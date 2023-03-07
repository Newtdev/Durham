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

// React.createElement("h1", { style: { color: "black" } }, "Hello World");

function decodeHtml(html) {
  // var txt = React.createElement("textarea");
  // txt.innerHTML = html;
  return html.innerHTML.value;
}

// console.log(decodeHtml(encoded));

// const renderHTML = (rawHTML) =>
//   React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

// console.log(renderHTML("<p>&amp;nbsp;</p>"));
