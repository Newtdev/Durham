import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5To21 from "./Page5To21";
import Page22 from "./Page22";
import Page32 from "./Page32";
import Page36To38 from "./Page36To38";
import Page49 from "./Page49";
import Page51 from "./Page51";
import { pdf, Document, Page, Font } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import PDFMerger from "pdf-merger-js/browser";

// Font.register({
//   family: ["Times"],
//   src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
// });

function WrapAsPdfDoc(Component) {
  const stylesheet = {
    ["*"]: {
      fontSize: "12px",
      // fontFamily: "Times",
    },

    ["h1, h2, h3, h4, h5, h6"]: {
      fontSize: "12px",
    },
  };
  return (
    <Document>
      <Page
        style={{
          padding: "5%",
        }}
        wrap={false}
      >
        <Html stylesheet={stylesheet}>
          {" "}
          {ReactDOMServer.renderToStaticMarkup(<Component />)}
        </Html>
      </Page>
    </Document>
  );
}

export async function getPdf(fn = "myfile.pdf") {
  const Page1Blob = await pdf(WrapAsPdfDoc(Page1)).toBlob();
  const Page2Blob = await pdf(WrapAsPdfDoc(Page2)).toBlob();
  const Page3Blob = await pdf(WrapAsPdfDoc(Page3)).toBlob();
  const Page4Blob = await pdf(WrapAsPdfDoc(Page4)).toBlob();
  const Page5To21Blob = await pdf(WrapAsPdfDoc(Page5To21)).toBlob();
  const Page22Blob = await pdf(WrapAsPdfDoc(Page22)).toBlob();
  const Page32Blob = await pdf(WrapAsPdfDoc(Page32)).toBlob();
  const Page36To38Blob = await pdf(WrapAsPdfDoc(Page36To38)).toBlob();
  const Page49Blob = await pdf(WrapAsPdfDoc(Page49)).toBlob();
  const Page51Blob = await pdf(WrapAsPdfDoc(Page51)).toBlob();

  const merger = new PDFMerger();

  const files = [
    Page1Blob,
    Page2Blob,
    Page3Blob,
    Page4Blob,
    Page5To21Blob,
    Page22Blob,
    Page32Blob,
    Page36To38Blob,
    Page49Blob,
    Page51Blob,
  ];

  const file = "http://localhost:3000/public/file.pdf";

  await merger.add(Page1Blob);
  await merger.add(Page2Blob);
  await merger.add(Page3Blob);
  await merger.add(Page4Blob);
  await merger.add(Page5To21Blob);
  // await merger.add(file, "8 to 21");

  await merger.add(Page22Blob);
  // await merger.add(file, "23 to 31");

  await merger.add(Page32Blob);
  // await merger.add(file, "33 to 35");

  await merger.add(Page36To38Blob);
  // await merger.add(file, "39 to 48");

  await merger.add(Page49Blob);
  // await merger.add(file, 50);

  await merger.add(Page51Blob);

  await merger.save(fn);
}

export default {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5To21,
  Page22,
  Page32,
  Page36To38,
  Page49,
  Page51,
  getPdf,
};
