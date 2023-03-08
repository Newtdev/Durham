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
  "<p>Hello<strong> World</strong></p><p><strong>Next Line</strong></p>"
);

console.log(encoded);

// React.createElement("h1", { style: { color: "black" } }, "Hello World");

// function decodeHtml(html) {
//   var txt = React.createElement("textarea");
//   txt.innerHTML = html;
//   return html.innerHTML.value;
// }

// console.log(decodeHtml(encoded));

// const renderHTML = (rawHTML) =>
//   React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

// console.log(renderHTML("<p>&amp;nbsp;</p>"));

const locations = [
  { section: "location", field_name: "projectState0", field_value: "Arizona" },
  { section: "location", field_name: "projectState0", field_value: "Arizona" },
];
