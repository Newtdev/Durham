import React from "react";
import { DashboardNav } from "../Dashboard/Components";

const FormsDownload = () => {
  React.useEffect(() => {
    console.log("Forms Download Page Loaded");
  }, []);

  return (
    <section>
      <article>
        <DashboardNav />
      </article>
      <h1>Forms Download Page</h1>
    </section>
  );
};

export default FormsDownload;
