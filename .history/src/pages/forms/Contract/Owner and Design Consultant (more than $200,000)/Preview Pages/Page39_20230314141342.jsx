import "./owner.css";
import { Footer } from "./Page1";

const OwnerDesignMore = () => {
  return (
    <div
      class=" border border-black flex flex-col justify-between"
      style={{
        height: "10in",
        paddingTop: "54pt",
        margin: "54pt 72pt 72pt 72pt",
      }}
    >
      {/* Page 39 */}
      <div>
        <p class="uj34 uj44">
          <span class="uj5 uj3">My commission expires:_______</span>
        </p>
        <p class="uj28">
          <span class="uj5 uj49 uj8"></span>
        </p>
      </div>
      <Footer page={39} />
    </div>
  );
};

export default OwnerDesignMore;
