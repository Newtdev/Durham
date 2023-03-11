import React from "react";

const ItemsPage = (props) => {
  console.log(props.form_fields.items);
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
      </div>
      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>Page No</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
