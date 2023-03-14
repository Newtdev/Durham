import React from "react";
import "./itemsList.css";

const ItemsPage = (props) => {
  let itemsList = [];

  // if (props?.form_fields?.items) {
  //   itemsList = JSON.parse(props.form_fields.items);
  // }
  //   console.log(itemsList);

  return (
    <div
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      className=" flex flex-col justify-between h-full"
    >
      <div>
        <p class="c58 c23 c305" id="h.2et92p0">
          <span class="c51">2.1 PROPOSAL CONTENTS</span>
        </p>
        <p class="c23 c179">
          <span class="c22 c80">
            Vendors shall populate all attachments of this RFP that require the
            Vendor to provide information and include an authorized signature
            where requested. Vendor RFP responses shall include the following
            items and those attachments should be arranged in the following
            order:
          </span>
        </p>
        <div className="ml-6">
          <ol
            type="a"
            className={`c14 laparent ${props.nottoBeHighlighted} `}
            style={{
              fontFamily: "Arial",
              fontSize: "10pt",
            }}
          >
            {itemsList?.map((item, index) => (
              <li class="c201 c23">
                {/* <span class="c21 ml-2">{item.item}</span> */}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-4  mx-auto">
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
