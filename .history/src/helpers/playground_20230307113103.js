function htmlencode(str) {
  return str.replace(/[&<>"']/g, function ($0) {
    return (
      "&" +
      { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] +
      ";"
    );
  });
}

const encoded = htmlencode(
  <div>
    <h1>Test</h1>
    <h2>Test 1</h2>
    <p>It's a unit test</p>
  </div>
);

console.log("encoded html = ", encoded);
