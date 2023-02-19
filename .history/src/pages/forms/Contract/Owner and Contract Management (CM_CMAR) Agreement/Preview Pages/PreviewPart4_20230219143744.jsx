import React from "react";
import "./PreviewPages.css";

const PreviewPart4 = () => {
  return (
    <>
      {/* <div id="pf1f" class="pf w0 h0" data-page-no="1f">
        <div class="pc pc1f w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws7">
            5.3<span class="_ _e"> </span>General<span class="_ _6"> </span>
            Provisions<span class="_ _14"> </span>Regarding
            <span class="_ _6"></span>Changes<span class="_ _14"> </span>in
            <span class="_ _6"> </span>Contractor<span class="_ _14"> </span>
            Work.<span class="_ _18"></span>In<span class="_"> </span>the
            <span class="_"> </span>event<span class="_"></span>the
            <span class="_"> </span>work<span class="_"> </span>included
            <span class="_"> </span>in<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws10f">
            original<span class="_ _19"> </span>contract
            <span class="_ _19"></span>issued<span class="_ _19"> </span>to
            <span class="_ _19"> </span>a<span class="_ _19"> </span>contractor
            <span class="_ _19"> </span>is<span class="_"> </span>changed,
            <span class="_"> </span>or<span class="_"></span>new
            <span class="_"> </span>contracts<span class="_"> </span>are
            <span class="_"> </span>issued,<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>notify<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws11b">
            Owner<span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _6"> </span>change<span class="_ _14"> </span>or
            <span class="_ _14"> </span>the<span class="_ _6"> </span>new
            <span class="_"> </span>contract,<span class="_"> </span>including
            <span class="_"> </span>the<span class="_"> </span>nature
            <span class="_"> </span>and<span class="_"> </span>reason
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>change<span class="_"> </span>or
            <span class="_"> </span>new<span class="_"></span>contract
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws13f">
            and<span class="_ _19"> </span>the<span class="_ _19"> </span>
            associated<span class="_ _19"> </span>cost.
            <span class="_ _17"></span>Regardless<span class="_ _19"> </span>of
            <span class="_ _19"> </span>whether<span class="_"> </span>the
            <span class="_"> </span>change<span class="_"> </span>or
            <span class="_"> </span>new<span class="_"></span>contract
            <span class="_"> </span>is<span class="_"> </span>believed
            <span class="_"> </span>to<span class="_"> </span>result
            <span class="_"> </span>in<span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws6c">
            increase<span class="_ _12"> </span>or<span class="_ _12"> </span>
            decrease<span class="_ _12"> </span>in<span class="_ _12"> </span>
            the<span class="_ _12"> </span>GMP<span class="_ _4"></span>.
            <span class="_ _18"></span>The<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>and<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>review
            <span class="_ _12"> </span>all<span class="_ _12"> </span>changes
            <span class="_ _12"> </span>or<span class="_ _12"> </span>new
            <span class="_ _12"> </span>contracts<span class="_ _12"> </span>
            that<span class="_"> </span>were
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws98">
            not<span class="_ _12"> </span>incorporated
            <span class="_ _12"></span>into<span class="_ _12"> </span>a
            <span class="_ _12"> </span>change<span class="_ _12"> </span>order
            <span class="_ _12"> </span>between<span class="_ _12"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"> </span>CM<span class="_"></span>or
            <span class="_"> </span>resulted<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>use
            <span class="_"> </span>of<span class="_"></span>either
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>CM’<span class="_ _0"></span>s
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws140">
            contingencies<span class="_ _19"> </span>at
            <span class="_ _19"></span>the<span class="_ _19"> </span>conclusion
            <span class="_ _19"></span>of<span class="_ _19"> </span>the
            <span class="_ _19"> </span>Project<span class="_ _19"> </span>in
            <span class="_ _19"> </span>order<span class="_ _19"> </span>to
            <span class="_ _19"> </span>determine<span class="_ _19"> </span>
            whether<span class="_ _19"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>is<span class="_"></span>entitled
            <span class="_"> </span>to<span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            reduction in the cost of work portion of the GMP
            <span class="_ _0"></span>
            as it is defined in Paragraph 7.4.1.
          </div>
          <div class="t m0 x6 h2 y76 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 6</div>
          <div class="t m0 x13 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
            OWNER’S RESPONSIBILITIES
          </div>
          <div class="t m0 x7 h2 y77 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws141">
            6.1<span class="_ _e"> </span>The<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>provide
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>complete
            <span class="_"> </span>information<span class="_"> </span>regarding
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _3"></span>’s<span class="_"></span>requirements
            <span class="_"> </span>for<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws0">Project.</div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws7e">
            6.2<span class="_ _e"> </span>The<span class="_ _15"> </span>Owner
            <span class="_ _15"> </span>shall<span class="_ _15"> </span>examine
            <span class="_ _15"> </span>information<span class="_ _15"></span>
            submitted<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>and
            <span class="_"> </span>shall<span class="_"></span>render
            <span class="_"> </span>decisions<span class="_"> </span>thereto
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws0">
            promptly<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 wsdd">
            6.3<span class="_ _e"> </span>The<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>
            contract<span class="_ _12"> </span>with<span class="_ _12"> </span>
            a<span class="_ _12"> </span>Design<span class="_ _12"> </span>
            Consultant<span class="_ _12"> </span>to<span class="_ _12"> </span>
            furnish<span class="_"> </span>design<span class="_"> </span>
            counseling<span class="_"> </span>services<span class="_"> </span>as
            <span class="_"> </span>may<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
            necessary for the Project.
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            6.4<span class="_ _e"> </span>The Owner shall furnish insurance for
            the Project only as specified in <span class="_ _20"></span>Article
            8.
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 wsa2">
            6.5<span class="_ _e"> </span>If<span class="_ _1f"> </span>the
            <span class="_ _1f"></span>Owner<span class="_ _1f"> </span>observes
            <span class="_ _1f"></span>or<span class="_ _1f"> </span>otherwise
            <span class="_"> </span>becomes<span class="_"> </span>aware
            <span class="_"> </span>of<span class="_"></span>any
            <span class="_"> </span>fault<span class="_"> </span>or
            <span class="_"></span>defect<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>Project
            <span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            nonconformity with the Contract Documents, the Owner shall give
            prompt written notice thereof to the CM.
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws142">
            6.6<span class="_ _e"> </span>The<span class="_"> </span>Owner
            <span class="_"></span>shall<span class="_"> </span>furnish
            <span class="_"> </span>required<span class="_"> </span>information
            <span class="_"> </span>and<span class="_"> </span>approvals
            <span class="_"> </span>and<span class="_"> </span>perform
            <span class="_"> </span>its<span class="_"></span>responsibilities
            <span class="_ _6"> </span>and
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws4">
            activities<span class="_"> </span>in<span class="_"> </span>a
            <span class="_"></span>timely<span class="_"> </span>manner
            <span class="_"> </span>to<span class="_"></span>facilitate
            <span class="_"> </span>orderly<span class="_"> </span>progress
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>W<span class="_ _0"></span>ork
            <span class="_ _f"> </span>in<span class="_ _f"></span>cooperation
            <span class="_ _f"> </span>with<span class="_ _f"></span>the
            <span class="_ _10"> </span>CM,<span class="_ _f"> </span>consistent
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws143">
            with<span class="_ _15"> </span>this<span class="_ _15"> </span>
            Agreement,<span class="_ _15"> </span>and<span class="_"> </span>in
            <span class="_"> </span>accordance<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>planning
            <span class="_"> </span>and<span class="_"> </span>scheduling
            <span class="_"> </span>requirements<span class="_"></span>and
            <span class="_"> </span>budgetary
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
            restraints of the Project as determined by the CM.
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws144">
            6.7<span class="_ _e"> </span>The<span class="_ _19"> </span>Owner
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>retain
            <span class="_ _19"> </span>a<span class="_ _19"> </span>Design
            <span class="_ _19"> </span>Consultant<span class="_"> </span>whose
            <span class="_"> </span>services,<span class="_"> </span>duties
            <span class="_"> </span>and<span class="_"> </span>responsibilities
            <span class="_"> </span>shall<span class="_"></span>be
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws145">
            described<span class="_ _19"> </span>in<span class="_"> </span>a
            <span class="_"> </span>written<span class="_"> </span>Agreement
            <span class="_"> </span>between<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"></span>Design<span class="_"> </span>Consultant.
            <span class="_ _1d"></span>The<span class="_"> </span>services,
            <span class="_"> </span>duties,<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws22">
            responsibilities<span class="_"> </span>of<span class="_"> </span>
            the<span class="_"> </span>Design<span class="_"> </span>Consultant
            <span class="_"> </span>set<span class="_"> </span>out
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>agreement<span class="_"> </span>between
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"></span>Design
            <span class="_"> </span>Consultant
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws18">
            shall<span class="_ _12"> </span>be<span class="_ _12"> </span>
            compatible<span class="_"> </span>and<span class="_"> </span>
            consistent<span class="_"> </span>with<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"> </span>Contract
            <span class="_"></span>Documents.<span class="_ _1c"> </span>The
            <span class="_"> </span>Owner<span class="_"> </span>shall,
            <span class="_"> </span>in<span class="_"></span>its
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws16">
            agreement<span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>Design<span class="_"> </span>Consultant,
            <span class="_"> </span>require<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"> </span>Design
            <span class="_"></span>Consultant<span class="_"> </span>perform
            <span class="_"> </span>its<span class="_"> </span>services
            <span class="_"> </span>in<span class="_"></span>cooperation
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws42">
            with<span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>consistent<span class="_"> </span>with
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>and<span class="_"> </span>in
            <span class="_ _f"> </span>accordance<span class="_ _f"> </span>with
            <span class="_ _f"> </span>the<span class="_ _f"> </span>planning,
            <span class="_ _f"> </span>scheduling<span class="_ _f"> </span>and
            <span class="_ _f"> </span>budgetary
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            requirements of the Project as determined by the Owner and
            documented by the CM.
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws9a">
            6.8<span class="_ _e"> </span>The<span class="_ _19"> </span>Owner
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>approve
            <span class="_ _19"> </span>the<span class="_"> </span>Project
            <span class="_"> </span>and<span class="_"> </span>Construction
            <span class="_"> </span>Budget<span class="_"> </span>and
            <span class="_"> </span>any<span class="_"> </span>subsequent
            <span class="_"> </span>revisions<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
            provided in Paragraph 3.2.3.2 of this
            <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws115">
            6.9<span class="_ _e"> </span>If<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>contracts
            <span class="_"> </span>separately<span class="_"> </span>with
            <span class="_ _f"> </span>any<span class="_ _f"> </span>other
            <span class="_ _f"> </span>parties,<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>shall
            <span class="_ _10"> </span>cause<span class="_ _f"> </span>all
            <span class="_ _f"> </span>such<span class="_ _f"> </span>Agreements
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws1">
            to be compatible and consistent with this
            <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws146">
            6.10<span class="_ _27"> </span>At<span class="_"> </span>the
            <span class="_"></span>request<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM,
            <span class="_ _19"> </span>sufficient<span class="_ _5"> </span>
            copies<span class="_ _19"> </span>of<span class="_ _19"> </span>
            interim<span class="_ _19"> </span>and<span class="_ _19"> </span>
            bidding<span class="_ _19"> </span>drawings,
            <span class="_ _19"></span>specifications
            <span class="_ _19"> </span>and
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws88">
            contract<span class="_ _6"> </span>documents
            <span class="_ _14"></span>shall<span class="_ _6"> </span>be
            <span class="_ _14"> </span>furnished<span class="_ _6"> </span>to
            <span class="_ _14"> </span>or<span class="_ _14"> </span>printed
            <span class="_ _6"> </span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>at
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>expense.
            <span class="_ _18"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>be
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws4">
            solely<span class="_"> </span>responsible<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"> </span>cost
            <span class="_"></span>of<span class="_"> </span>any
            <span class="_"> </span>drawings,<span class="_ _f"></span>
            specifications<span class="_ _f"> </span>and
            <span class="_ _f"></span>contract<span class="_ _f"> </span>
            documents<span class="_ _f"></span>required
            <span class="_ _f"> </span>after<span class="_ _f"> </span>bidding
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws1">the Project.</div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws147">
            6.1<span class="_ _20"></span>1<span class="_ _2a"> </span>The
            <span class="_ _19"></span>Owner<span class="_ _19"> </span>or
            <span class="_"> </span>Design<span class="_"> </span>Consultant
            <span class="_"> </span>shall<span class="_"> </span>in
            <span class="_"> </span>a<span class="_"></span>timely
            <span class="_"> </span>manner<span class="_"> </span>secure,
            <span class="_"> </span>submit<span class="_"> </span>and
            <span class="_"> </span>pay<span class="_"> </span>for
            <span class="_"></span>necessary
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws42">
            approvals,<span class="_"> </span>easements,<span class="_"> </span>
            assessments,<span class="_"> </span>permits
            <span class="_ _f"></span>and<span class="_ _f"> </span>charges
            <span class="_ _f"> </span>required<span class="_ _f"> </span>for
            <span class="_ _f"> </span>the<span class="_ _f"> </span>
            construction,<span class="_ _f"></span>use
            <span class="_ _10"> </span>or<span class="_ _f"> </span>occupancy
            <span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws1">
            permanent structures, or for permanent changes in existing
            facilities.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">31</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      <div id="pf20" class="pf w0 h0" data-page-no="20">
        <div class="pc pc20 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfYklEQVR42uza0QmAMBBEQU/sv+KD9SMdGDAaZkpYMPiMleQAAACACacJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAAtKUJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAAtKUJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEvYUXcbAcCpjrXhvyqJFWD9o1hlBAB4zDstLOfeEgAAgFmXCeA7fHMF2MP4G8Wp/ubawHLuLQEAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCd3t2bAJRDANRkAX337IucAEXGGzpM1PCBoKHAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAAAzLRNAH0mMAOCqA0zkbwkAAMApf0topKqMAPAB+2Ppqt9cG3jO3xIAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAACYaZkA+khiBABXHWAif0sAAABO+VtCI1VlBIAP2B9LV/3m2sBz/pYAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAADATMsE0EcSIwC46gAT+VsCAABwyt8SGqkqIwB8wP5Yuuo31wae87cEAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAZlomgD6SGAHAVQeYyN8SAACAU/6W0EhVGQHgA/bH0lW/uTbwnL8lAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAMNMyAfSRxAgArjrARP6WAAAAnEpVWQEAAIAT/pYAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAA/JHECAAAAJz6AQbxP2b4kFLxAAAAAElFTkSuQmCC"
          />
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws148">
            6.12<span class="_ _27"> </span>The<span class="_ _19"> </span>Owner
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>furnish
            <span class="_ _19"> </span>evidence<span class="_ _19"></span>
            satisfactory<span class="_ _19"> </span>to
            <span class="_ _19"></span>the<span class="_ _19"> </span>CM
            <span class="_ _19"> </span>that<span class="_ _19"> </span>
            sufficient<span class="_ _19"></span>funds
            <span class="_ _19"> </span>are<span class="_ _19"> </span>available
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws4">
            committed<span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>entire<span class="_"> </span>cost
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>Project.<span class="_ _18"> </span>The
            <span class="_"> </span>Owner<span class="_"> </span>may
            <span class="_"></span>authorize<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>to
            <span class="_ _f"> </span>proceed<span class="_ _f"> </span>with
            <span class="_ _f"> </span>the<span class="_ _f"> </span>work
            <span class="_ _f"> </span>on
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 wsa9">
            the<span class="_ _6"> </span>Project<span class="_ _14"> </span>in
            <span class="_ _6"> </span>discrete<span class="_"> </span>phases
            <span class="_"> </span>if<span class="_"> </span>all
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>funds<span class="_"></span>required
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>entire<span class="_"> </span>Project
            <span class="_"> </span>are<span class="_"> </span>not
            <span class="_"> </span>identified<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"> </span>time
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
            this <span class="_ _1"></span>Agreement is executed by the parties.
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws149">
            6.13<span class="_ _27"> </span>The<span class="_ _19"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _19"> </span>its
            <span class="_ _19"> </span>representatives
            <span class="_ _19"></span>and<span class="_ _19"> </span>
            consultants,<span class="_ _19"></span>including
            <span class="_ _19"> </span>Design<span class="_"> </span>
            Consultants,<span class="_"> </span>shall<span class="_"> </span>
            endeavor<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            communicate with the Contractors only through the CM.
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 wsec">
            6.14<span class="_ _27"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>shall<span class="_"> </span>send
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>and
            <span class="_"> </span>shall<span class="_"> </span>require
            <span class="_"> </span>the<span class="_"> </span>Design
            <span class="_"> </span>Consultant<span class="_"> </span>to
            <span class="_"> </span>send<span class="_"> </span>the
            <span class="_ _f"></span>CM<span class="_ _f"> </span>copies
            <span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws1">
            all notices and communications sent to or received by the Owner or
            Design Consultant relating to the Project.
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws14a">
            6.15<span class="_ _27"> </span>The<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>
            designate,<span class="_"> </span>in<span class="_"> </span>writing,
            <span class="_"> </span>an<span class="_"> </span>officer
            <span class="_ _20"></span>,<span class="_"> </span>employee
            <span class="_"> </span>or<span class="_"> </span>other
            <span class="_"> </span>authorized<span class="_"> </span>
            representatives<span class="_"> </span>to<span class="_"> </span>act
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws77">
            in<span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>behalf
            <span class="_"> </span>with<span class="_"> </span>respect
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>Project.<span class="_ _1c"> </span>This
            <span class="_"> </span>representative<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>available
            <span class="_"> </span>during<span class="_"> </span>working
            <span class="_"> </span>hours
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 wsa6">
            and<span class="_"> </span>as<span class="_"> </span>often
            <span class="_"></span>as<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"></span>required
            <span class="_"> </span>to<span class="_"> </span>render
            <span class="_"> </span>decisions<span class="_"> </span>and
            <span class="_"> </span>furnish<span class="_"> </span>information
            <span class="_"> </span>so<span class="_"> </span>as
            <span class="_"> </span>not<span class="_"> </span>to
            <span class="_"></span>delay<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Project.
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws98">
            The<span class="_ _12"> </span>CM<span class="_ _12"> </span>
            acknowledges<span class="_ _12"> </span>that
            <span class="_ _12"></span>some<span class="_ _12"> </span>changes
            <span class="_ _12"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>scope<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_"> </span>Project
            <span class="_"> </span>may<span class="_"></span>require
            <span class="_"> </span>approval<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Board
            <span class="_"></span>of
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws4e">
            Education.<span class="_ _6"> </span>The<span class="_ _14"> </span>
            CM<span class="_ _6"> </span>shall<span class="_ _14"> </span>notify
            <span class="_ _6"> </span>the<span class="_ _14"> </span>Owner
            <span class="_ _14"> </span>in<span class="_ _6"> </span>writing
            <span class="_ _14"> </span>of<span class="_"> </span>any
            <span class="_"> </span>deadlines<span class="_"> </span>for
            <span class="_"> </span>responses<span class="_"> </span>and
            <span class="_"> </span>how<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _3"></span>’s
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            failure to respond by the stated deadline will impact the Project
            schedule.
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws89">
            6.16<span class="_ _27"> </span>The<span class="_ _6"> </span>Owner
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>make
            <span class="_ _14"> </span>payments<span class="_ _6"> </span>to
            <span class="_ _14"> </span>the<span class="_"> </span>CM
            <span class="_"></span>on<span class="_"> </span>the
            <span class="_"> </span>basis<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>Contractors’
            <span class="_"> </span>payment<span class="_"> </span>applications
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws61">
            that<span class="_"> </span>are<span class="_"> </span>certified
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>and
            <span class="_"> </span>on<span class="_"></span>the
            <span class="_"> </span>basis<span class="_"> </span>of
            <span class="_"></span>the<span class="_ _6"> </span>CM’s
            <span class="_ _6"> </span>invoices<span class="_ _14"> </span>for
            <span class="_ _6"> </span>its<span class="_ _14"> </span>services
            <span class="_ _6"> </span>performed.<span class="_ _13"> </span>
            Prior<span class="_ _6"></span>to
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws26">
            payment<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>the<span class="_"></span>Design
            <span class="_"> </span>Consultant<span class="_"> </span>shall
            <span class="_"> </span>review<span class="_"> </span>and
            <span class="_"></span>approve<span class="_"> </span>the
            <span class="_ _f"> </span>contractors’<span class="_ _f"> </span>
            pay<span class="_ _f"></span>applications<span class="_ _f"> </span>
            in
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
            accordance with Paragraphs 3.5.3.5 and 3.5.3.6.
          </div>
          <div class="t m0 x6 h2 ye ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 7</div>
          <div class="t m0 x14 h3 y7b ff2 fs0 fc0 sc0 ls0 ws1">
            COMPENSA<span class="_ _20"></span>TION FOR CM SERVICES
            <span class="_ _20"></span>AND P<span class="_ _1"></span>A
            <span class="_ _20"></span>YMENT
          </div>
          <div class="t m0 x7 h2 y18 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1<span class="_ _e"> </span>Guaranteed Maximum Price
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.1<span class="_ _16"> </span>The Owner and CM agree that the
            Guaranteed Maximum Price shall be _F1<span class="_ _4"></span>1
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            F1<span class="_ _20"></span>1______________________
            <span class="_ _12"></span>dollars<span class="_ _12"> </span>
            ($F12____________)<span class="_ _12"></span>for
            <span class="_ _12"> </span>this<span class="_ _12"> </span>Project.{" "}
            <span class="_ _12"> </span>The<span class="_ _12"> </span>parties
            <span class="_ _12"> </span>further<span class="_ _12"></span>agree
            <span class="_ _12"> </span>that
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws4">
            in<span class="_"> </span>the<span class="_"> </span>event
            <span class="_"></span>the<span class="_"> </span>bids
            <span class="_"> </span>received<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>work,<span class="_ _f"> </span>including
            <span class="_ _f"> </span>all<span class="_ _f"> </span>of
            <span class="_ _f"> </span>the<span class="_ _f"></span>alternates
            <span class="_ _f"> </span>accepted<span class="_ _10"></span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws26">
            pursuant<span class="_ _6"> </span>to<span class="_ _14"> </span>
            Article<span class="_"> </span>3.4<span class="_"> </span>of
            <span class="_"></span>this<span class="_"> </span>Agreement
            <span class="_"> </span>exceed<span class="_"> </span>the
            <span class="_"> </span>line<span class="_"></span>item
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>GMP<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>cost
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>the
            <span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws15">
            shall<span class="_ _12"> </span>be<span class="_ _12"> </span>
            solely<span class="_ _12"> </span>responsible
            <span class="_ _12"></span>for<span class="_"> </span>the
            <span class="_"> </span>additional<span class="_"> </span>cost
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>work,<span class="_"></span>unless
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>is<span class="_"> </span>terminated
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            pursuant<span class="_ _19"> </span>to<span class="_ _19"> </span>
            Paragraph<span class="_ _19"> </span>7.1.1.1.
            <span class="_ _19"> </span>In<span class="_ _6"> </span>the
            <span class="_ _14"></span>event<span class="_ _14"> </span>that
            <span class="_ _6"> </span>the<span class="_ _14"> </span>bids
            <span class="_ _6"> </span>received<span class="_ _14"> </span>by
            <span class="_ _6"> </span>the<span class="_ _14"> </span>CM
            <span class="_ _6"> </span>for<span class="_ _14"> </span>the
            <span class="_ _14"> </span>work,<span class="_ _6"> </span>
            including<span class="_ _14"></span>all
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws13">
            alternatives<span class="_"> </span>accepted<span class="_"> </span>
            by<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>are
            <span class="_"> </span>less<span class="_"></span>than
            <span class="_"> </span>the<span class="_"> </span>line
            <span class="_"></span>item<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>GMP
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>cost<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work,
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
            remaining<span class="_ _15"> </span>funds
            <span class="_ _15"></span>shall<span class="_ _15"> </span>be
            <span class="_ _15"> </span>added<span class="_ _15"> </span>to
            <span class="_ _15"> </span>the<span class="_ _15"> </span>Owner
            <span class="_ _3"></span>’s<span class="_ _1c"> </span>contingency
            <span class="_ _1"></span>. <span class="_ _1c"> </span>The
            <span class="_ _1a"> </span>scope<span class="_ _1c"> </span>of
            <span class="_ _15"> </span>work<span class="_ _15"> </span>included
            <span class="_ _15"> </span>in<span class="_ _15"> </span>the
            <span class="_ _19"> </span>bid
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 wsbc">
            documents,<span class="_ _12"> </span>including
            <span class="_"></span>any<span class="_"> </span>alternates
            <span class="_"> </span>accepted<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _20"></span>,<span class="_"> </span>shall
            <span class="_"></span>form<span class="_"> </span>the
            <span class="_"> </span>basis<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>to<span class="_"> </span>be
            <span class="_"> </span>performed
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            by<span class="_ _6"> </span>the<span class="_ _14"> </span>CM.
            <span class="_ _12"> </span>The<span class="_ _12"> </span>CM
            <span class="_ _12"></span>and<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>agree<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>line
            <span class="_ _12"> </span>items<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_ _12"> </span>GMP
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>consist
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>cost<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work,
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            CM’s<span class="_ _12"> </span>contingency
            <span class="_ _4"></span>,<span class="_ _12"> </span>and
            <span class="_ _12"> </span>general<span class="_"> </span>
            conditions,<span class="_"> </span>CM’s<span class="_"> </span>fee.{" "}
            <span class="_"> </span>The<span class="_"></span>CM
            <span class="_"> </span>and<span class="_"> </span>Owner
            <span class="_"></span>further<span class="_"> </span>agree
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>dollar<span class="_"></span>values
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1">
            for the line items in the GMP stated abov<span class="_ _0"></span>e
            consist of the:
          </div>
          <div class="c x15 ya8 w2 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
              Cost of Work
            </div>
          </div>
          <div class="c x17 ya8 w3 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">$F13____</div>
          </div>
          <div class="c x15 yaa w2 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
              CM construction contingency
            </div>
          </div>
          <div class="c x17 yaa w3 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">$F14____</div>
          </div>
          <div class="c x15 yab w2 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
              General Conditions
            </div>
          </div>
          <div class="c x17 yab w3 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">$F15____</div>
          </div>
          <div class="c x15 yac w2 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
              CM’s fee for preconstruction services
            </div>
          </div>
          <div class="c x17 yac w3 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">$F16____</div>
          </div>
          <div class="c x15 yad w2 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
              Construction and post-construction services
            </div>
          </div>
          <div class="c x17 yad w3 h6">
            <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">$F17____</div>
          </div>
          <div class="t m0 x3 h3 yae ff2 fs0 fc0 sc0 ls0 ws34">
            7.1.1.1<span class="_ _1c"> </span>The<span class="_"> </span>
            parties<span class="_"> </span>agree<span class="_"> </span>that
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>event<span class="_"> </span>the
            <span class="_"> </span>bids<span class="_"></span>received
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>work,
            <span class="_"> </span>including<span class="_ _12"> </span>all
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 yaf ff2 fs0 fc0 sc0 ls0 ws56">
            alternates<span class="_ _12"> </span>accepted
            <span class="_ _12"></span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _1"></span>,
            <span class="_ _12"> </span>pursuant<span class="_ _12"> </span>to
            <span class="_"> </span>Article<span class="_"> </span>3.4
            <span class="_"> </span>of<span class="_"></span>this
            <span class="_"> </span>Agreement<span class="_"> </span>exceed
            <span class="_"> </span>the<span class="_"> </span>line
            <span class="_"></span>item<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>GMP
          </div>
          <div class="t m0 x3 h3 yb0 ff2 fs0 fc0 sc0 ls0 ws1">
            for<span class="_ _12"> </span>the<span class="_ _12"> </span>cost
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>work,<span class="_ _12"> </span>then
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>have
            <span class="_"></span>the<span class="_"> </span>right
            <span class="_"> </span>to<span class="_"></span>terminate
            <span class="_"> </span>this<span class="_"> </span>Agreement.{" "}
            <span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>provide
          </div>
          <div class="t m0 x3 h3 yb1 ff2 fs0 fc0 sc0 ls0 ws10">
            the<span class="_"> </span>Owner<span class="_"> </span>with
            <span class="_"></span>notice<span class="_"> </span>of
            <span class="_"> </span>intent<span class="_"></span>to
            <span class="_"> </span>terminate<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>this
            <span class="_"></span>provision<span class="_"> </span>within
            <span class="_ _12"> </span>fifteen<span class="_ _12"> </span>(15)
            <span class="_ _12"> </span>days<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM’
            <span class="_ _0"></span>s
          </div>
          <div class="t m0 x3 h3 yb2 ff2 fs0 fc0 sc0 ls0 ws1">
            receipt<span class="_ _12"> </span>of<span class="_ _12"> </span>
            bids<span class="_ _12"> </span>for<span class="_"> </span>the
            <span class="_"></span>Project. <span class="_"> </span>Prior
            <span class="_"> </span>to<span class="_"> </span>a
            <span class="_"> </span>termination<span class="_"></span>pursuant
            <span class="_"> </span>to<span class="_"> </span>this
            <span class="_"></span>provision<span class="_"> </span>becoming
            <span class="_"> </span>ef<span class="_ _1"></span>fective,
            <span class="_"> </span>the<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 yb3 ff2 fs0 fc0 sc0 ls0 ws14b">
            and<span class="_ _15"> </span>CM<span class="_ _15"> </span>will
            <span class="_"> </span>review<span class="_"> </span>the
            <span class="_"></span>list<span class="_"> </span>of
            <span class="_"> </span>alternates,<span class="_"> </span>other
            <span class="_"> </span>modifications<span class="_"> </span>or
            <span class="_"> </span>value<span class="_"> </span>engineering
            <span class="_"> </span>requests<span class="_"> </span>in
            <span class="_"> </span>order<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 yb4 ff2 fs0 fc0 sc0 ls0 ws23">
            determine<span class="_"> </span>whether<span class="_"> </span>an
            <span class="_"> </span>Agreement<span class="_"> </span>can
            <span class="_"></span>be<span class="_"> </span>reached
            <span class="_"> </span>between<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"> </span>CM<span class="_"></span>regarding
            <span class="_"> </span>a<span class="_"> </span>modified
            <span class="_"> </span>scope<span class="_"> </span>of
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">32</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      {/* <div id="pf21" class="pf w0 h0" data-page-no="21">
        <div class="pc pc21 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws1">
            work<span class="_ _6"> </span>or<span class="_ _14"> </span>an
            <span class="_ _6"></span>adjustment<span class="_ _14"> </span>to
            <span class="_ _14"> </span>the<span class="_ _6"> </span>GMP
            <span class="_ _4"></span>.<span class="_ _6"> </span>In
            <span class="_ _14"> </span>the<span class="_ _6"></span>event
            <span class="_ _14"> </span>an<span class="_ _6"> </span>Agreement
            <span class="_ _14"> </span>regarding<span class="_ _12"></span>the
            <span class="_ _12"> </span>modified<span class="_ _12"> </span>
            scope<span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>work
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            and/or<span class="_ _6"> </span>a<span class="_ _12"> </span>
            revision<span class="_ _12"> </span>to<span class="_ _12"> </span>
            the<span class="_ _12"> </span>GMP<span class="_ _12"> </span>cannot
            <span class="_ _12"> </span>be<span class="_ _12"> </span>reached
            <span class="_ _12"> </span>within<span class="_ _12"></span>fifteen
            <span class="_ _12"> </span>(15)<span class="_ _12"> </span>days
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _3"></span>’s
            receipt<span class="_ _12"> </span>of<span class="_ _12"> </span>
            notice<span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws1">
            intent to terminate pursuant to this section, then the termination
            shall become immediately ef<span class="_ _1"></span>fective.
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws4">
            7.1.1.2<span class="_ _1c"> </span>The<span class="_"> </span>
            parties<span class="_"> </span>specifically<span class="_"> </span>
            agree<span class="_"> </span>that<span class="_"> </span>none
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>provisions<span class="_"> </span>in
            <span class="_"> </span>Article<span class="_"> </span>10
            <span class="_"> </span>shall<span class="_ _f"></span>apply
            <span class="_ _f"> </span>to<span class="_ _f"> </span>any
            <span class="_ _f"> </span>termination
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws20">
            of<span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"></span>pursuant<span class="_"> </span>to
            <span class="_"> </span>section<span class="_ _6"> </span>7.1.1.1,
            <span class="_ _14"></span>but<span class="_ _6"> </span>the
            <span class="_ _14"> </span>CM<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>be<span class="_ _14"> </span>entitled
            <span class="_ _6"> </span>to<span class="_ _14"> </span>payment
            <span class="_ _6"> </span>for<span class="_ _14"> </span>work
            <span class="_ _6"> </span>actually
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws4">
            performed<span class="_"> </span>through<span class="_"> </span>the
            <span class="_"> </span>procurement<span class="_"> </span>phase
            <span class="_ _f"> </span>(section<span class="_ _f"> </span>3.4)
            <span class="_ _f"> </span>pursuant<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _f"> </span>
            compensation<span class="_ _10"> </span>set
            <span class="_ _f"></span>forth<span class="_ _f"> </span>in
            <span class="_ _f"> </span>Paragraph
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            7.4.1;<span class="_ _12"> </span>however<span class="_ _1"></span>,
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>not<span class="_ _12"> </span>be
            <span class="_ _12"> </span>compensated<span class="_ _12"></span>
            for<span class="_ _12"> </span>any<span class="_ _12"> </span>
            services<span class="_"> </span>provided<span class="_"> </span>
            after<span class="_"> </span>the<span class="_"> </span>date
            <span class="_"></span>of<span class="_"> </span>termination.
            <span class="_"> </span>In<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws10">
            event<span class="_"> </span>a<span class="_"> </span>modified
            <span class="_"></span>scope<span class="_"> </span>of
            <span class="_"> </span>work<span class="_"></span>and/or
            <span class="_"> </span>a<span class="_"> </span>revision
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>GMP<span class="_ _12"> </span>is
            <span class="_ _12"> </span>agreed<span class="_ _12"> </span>upon
            <span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>parties,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>modified
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws1">
            scope<span class="_ _19"> </span>shall<span class="_ _19"> </span>
            form<span class="_ _19"> </span>the<span class="_ _19"> </span>basis
            <span class="_ _19"> </span>of<span class="_ _19"> </span>the
            <span class="_ _19"> </span>work<span class="_ _19"> </span>to
            <span class="_ _19"> </span>be<span class="_ _19"> </span>performed
            <span class="_ _19"> </span>by<span class="_ _19"> </span>the
            <span class="_ _19"> </span>CM<span class="_ _19"> </span>for
            <span class="_ _19"> </span>the<span class="_ _19"> </span>
            established<span class="_ _14"> </span>GMP<span class="_ _4"></span>
            . <span class="_ _6"> </span>The<span class="_ _14"> </span>CM
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws9b">
            construction<span class="_ _6"> </span>contingency
            <span class="_ _1"></span>,<span class="_ _6"> </span>general
            <span class="_ _14"> </span>conditions,<span class="_ _6"> </span>
            and/or<span class="_ _14"></span>CM’s<span class="_ _6"> </span>fee
            <span class="_ _6"> </span>for<span class="_ _14"> </span>
            construction<span class="_ _6"></span>may
            <span class="_ _14"> </span>be<span class="_ _14"> </span>reduced
            <span class="_ _6"> </span>by<span class="_"> </span>mutual
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1">
            consent<span class="_ _12"> </span>of<span class="_ _12"> </span>
            both<span class="_ _12"> </span>parties<span class="_ _12"> </span>
            in<span class="_ _12"> </span>order<span class="_ _12"> </span>to
            <span class="_ _12"> </span>provide<span class="_ _12"> </span>
            funding<span class="_ _12"> </span>for<span class="_ _12"> </span>
            the<span class="_ _12"> </span>Project.
            <span class="_ _12"> </span>The<span class="_ _12"> </span>CM
            <span class="_ _12"></span>and<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>
            document<span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws22">
            changes<span class="_ _12"> </span>to<span class="_ _12"> </span>the
            <span class="_ _12"> </span>GMP<span class="_ _4"></span>,
            <span class="_"></span>scope<span class="_"> </span>of
            <span class="_"> </span>work,<span class="_"></span>cost
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>general
            <span class="_"> </span>conditio<span class="_ _0"></span>ns,
            <span class="_"> </span>CM<span class="_"> </span>fee,
            <span class="_"> </span>or<span class="_"></span>CM
            <span class="_"> </span>contingency<span class="_"> </span>prior
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws1">
            the<span class="_ _6"> </span>Owner<span class="_ _14"> </span>
            issuing<span class="_ _6"> </span>notice<span class="_ _14"> </span>
            to<span class="_ _6"> </span>proceed<span class="_ _14"> </span>with
            <span class="_ _14"> </span>the<span class="_ _6"> </span>work.
            <span class="_ _14"> </span>Any<span class="_ _6"> </span>reduction
            <span class="_ _14"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>cost<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>as<span class="_ _12"> </span>a
            <span class="_ _12"> </span>result<span class="_ _12"> </span>of
            <span class="_ _12"> </span>a
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
            modification of the Project scope shall be added to the Owner
            <span class="_ _3"></span>’s<span class="_ _0"></span> contingency
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws4">
            7.1.1.3<span class="_"> </span>In<span class="_"> </span>the
            <span class="_"></span>event<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>does
            <span class="_"> </span>not<span class="_"> </span>request
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>to<span class="_"></span>establish
            <span class="_"> </span>a<span class="_"> </span>Guaranteed
            <span class="_ _f"> </span>Maximum<span class="_ _f"></span>Price
            <span class="_ _f"> </span>or<span class="_ _f"> </span>does
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws14c">
            not<span class="_ _12"> </span>accept<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"> </span>Guaranteed
            <span class="_"> </span>Maximum<span class="_"> </span>Price,
            <span class="_"> </span>but<span class="_"> </span>chooses
            <span class="_"> </span>to<span class="_"> </span>pro
            <span class="_ _0"></span>ceed<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"></span>Project,
            <span class="_"> </span>then<span class="_"> </span>all
            <span class="_"> </span>provisions
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws6d">
            of<span class="_ _12"> </span>this<span class="_ _12"> </span>
            Agreement<span class="_ _12"> </span>regarding
            <span class="_ _12"></span>the<span class="_ _12"> </span>Guaranteed
            <span class="_ _12"></span>Maximum<span class="_ _12"> </span>Price
            <span class="_"> </span>and<span class="_"> </span>adjustments
            <span class="_"> </span>thereto<span class="_"> </span>shall
            <span class="_"> </span>become<span class="_"> </span>null
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws139">
            void.<span class="_ _13"> </span>In<span class="_ _6"> </span>the
            <span class="_ _6"> </span>event<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>is
            <span class="_"> </span>terminated<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>this
            <span class="_"></span>provision,<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>only<span class="_"></span>be
            <span class="_"> </span>entitled<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws50">
            receive<span class="_ _19"> </span>compensation
            <span class="_ _19"></span>for<span class="_ _19"> </span>services
            <span class="_ _19"> </span>as<span class="_ _19"> </span>outlined
            <span class="_"> </span>in<span class="_"> </span>Article
            <span class="_"> </span>10.<span class="_ _13"></span>All
            <span class="_"> </span>other<span class="_"> </span>provisions
            <span class="_"> </span>of<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>shall
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws4">
            remain<span class="_"> </span>in<span class="_"> </span>full
            <span class="_"></span>force<span class="_"> </span>and
            <span class="_"> </span>effect,<span class="_"> </span>with
            <span class="_ _f"> </span>all<span class="_ _f"> </span>Project
            <span class="_ _f"> </span>costs<span class="_ _f"> </span>being
            <span class="_ _f"> </span>reimbursed<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"> </span>by<span class="_ _10"></span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>in
            <span class="_ _f"> </span>accordance
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
            with this <span class="_ _1"></span>Agreement without the
            limitations imposed by Paragraph 12.1.5 thereof.
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws14d">
            7.1.1.4.<span class="_"> </span>In<span class="_ _12"> </span>the
            <span class="_ _12"> </span>event<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            Guaranteed<span class="_ _12"> </span>Maximum
            <span class="_ _12"></span>Price<span class="_"> </span>is
            <span class="_"> </span>accepted<span class="_ _f"> </span>by
            <span class="_ _10"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _f"></span>a
            <span class="_ _f"> </span>change<span class="_ _10"> </span>order
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws10">
            completed<span class="_"> </span>and<span class="_"> </span>executed
            <span class="_"> </span>by<span class="_"> </span>both
            <span class="_"></span>parties<span class="_"> </span>to
            <span class="_"> </span>this<span class="_"></span>Agreement
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>become<span class="_"> </span>responsible
            <span class="_ _12"></span>for<span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws42">
            means,<span class="_"> </span>methods,<span class="_"> </span>
            sequences,<span class="_"> </span>and<span class="_"> </span>
            procedures<span class="_"> </span>used<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>construction
            <span class="_"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Project<span class="_ _f"> </span>and
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>proceed
            <span class="_ _f"> </span>with
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            the CM’s basic services.
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws14e">
            7.1.1.5<span class="_ _1f"> </span>Construction
            <span class="_ _1f"></span>contracts<span class="_ _1f"> </span>for
            <span class="_ _1f"> </span>the<span class="_ _1f"> </span>Work
            <span class="_ _1a"> </span>required<span class="_ _1f"> </span>for
            <span class="_ _1f"> </span>the<span class="_ _1f"> </span>Project
            <span class="_ _1f"> </span>shall<span class="_ _1f"> </span>be
            <span class="_ _1f"> </span>between<span class="_ _1f"> </span>the
            <span class="_ _1f"> </span>CM<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws14f">
            Contractors.<span class="_ _17"> </span>The
            <span class="_ _19"></span>CM<span class="_ _19"> </span>shall
            <span class="_ _19"> </span>request<span class="_ _19"> </span>and
            <span class="_ _19"> </span>receive<span class="_ _19"> </span>bids
            <span class="_ _19"> </span>for<span class="_ _19"> </span>each
            <span class="_ _19"> </span>contract<span class="_ _19"> </span>and
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>solicit
            <span class="_ _19"> </span>and<span class="_ _19"> </span>award
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 wsd2">
            contracts<span class="_ _6"> </span>in<span class="_ _14"> </span>
            accordance<span class="_ _6"> </span>with<span class="_ _14"></span>
            N.C.<span class="_ _6"> </span>Gen.<span class="_ _14"> </span>Stat.
            <span class="_"> </span>§<span class="_"> </span>128.1,
            <span class="_"></span>143-128.2<span class="_"> </span>to
            <span class="_"> </span>-128.4<span class="_"> </span>and
            <span class="_"> </span>143-135.8.<span class="_ _18"> </span>The
            <span class="_"> </span>contractor
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws10">
            and<span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>comply<span class="_"> </span>in
            <span class="_"> </span>all<span class="_"></span>respects
            <span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _3"></span>’s
            <span class="_"></span>MBE<span class="_"> </span>policies,
            <span class="_"> </span>rules<span class="_"> </span>and
            <span class="_"> </span>regulations.<span class="_"> </span>T
            <span class="_ _0"></span>he<span class="_"> </span>CM
            <span class="_"> </span>shall
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws26">
            enter<span class="_"> </span>into<span class="_"> </span>contracts
            <span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>lowest<span class="_"> </span>responsible
            <span class="_"> </span>and<span class="_"> </span>responsive
            <span class="_"> </span>bidders<span class="_"> </span>within
            <span class="_"> </span>sixty<span class="_"> </span>(60)
            <span class="_"> </span>days<span class="_ _f"> </span>after
            <span class="_ _f"> </span>notice<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws5b">
            approval<span class="_ _12"> </span>of<span class="_ _12"> </span>
            the<span class="_ _12"> </span>GMP<span class="_ _12"> </span>by
            <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner;
            <span class="_ _12"> </span>however<span class="_ _1"></span>,
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"></span>shall<span class="_ _12"> </span>not
            <span class="_ _12"> </span>be<span class="_"> </span>entitled
            <span class="_"> </span>to<span class="_"></span>additional
            <span class="_"> </span>time<span class="_"> </span>to
            <span class="_"> </span>complete<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws56">
            Project<span class="_ _12"> </span>due<span class="_ _12"> </span>to
            <span class="_ _12"> </span>any<span class="_ _12"> </span>delay
            <span class="_ _12"> </span>in<span class="_ _12"> </span>entering
            <span class="_ _12"> </span>into<span class="_ _12"> </span>
            contracts<span class="_ _12"> </span>with<span class="_ _12"></span>
            a<span class="_ _12"> </span>bidder<span class="_"> </span>unless
            <span class="_"> </span>the<span class="_"> </span>delay
            <span class="_"></span>is<span class="_"> </span>due
            <span class="_"> </span>solely<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>actions
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws1">
            or inactions of the Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws10">
            7.1.1.6<span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"></span>may<span class="_"> </span>perform
            <span class="_"> </span>a<span class="_ _12"></span>portion
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>work<span class="_ _12"> </span>only
            <span class="_ _12"> </span>if<span class="_ _12"> </span>(1)
            <span class="_ _12"> </span>bidding<span class="_ _12"> </span>
            produces<span class="_ _12"> </span>no<span class="_ _12"> </span>
            responsible,<span class="_ _12"> </span>responsive
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws2c">
            bidder<span class="_"> </span>for<span class="_"> </span>that
            <span class="_"></span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work,
            <span class="_"> </span>the<span class="_"> </span>lowest,
            <span class="_"> </span>responsive,<span class="_"> </span>
            responsible<span class="_"> </span>bidder<span class="_"> </span>
            will<span class="_"> </span>not<span class="_"> </span>execute
            <span class="_"></span>a<span class="_ _f"> </span>contract
            <span class="_ _f"> </span>for
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws26">
            the<span class="_"> </span>bid<span class="_"> </span>portion
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>work,<span class="_"></span>or
            <span class="_"> </span>a<span class="_"> </span>contractor
            <span class="_"></span>defaults<span class="_"> </span>and
            <span class="_"> </span>a<span class="_"></span>pre-qualified
            <span class="_ _f"> </span>replacement<span class="_ _f"></span>
            cannot<span class="_ _f"> </span>be<span class="_ _f"> </span>
            obtained<span class="_ _f"> </span>in<span class="_ _f"> </span>a
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws119">
            timely<span class="_ _6"> </span>manner<span class="_ _1"></span>,
            <span class="_ _14"> </span>and<span class="_ _6"> </span>(2)
            <span class="_ _14"></span>the<span class="_ _14"> </span>Owner
            <span class="_ _6"> </span>approves<span class="_ _14"> </span>of
            <span class="_ _6"> </span>the<span class="_ _14"> </span>CM’s
            <span class="_ _6"> </span>self-performing
            <span class="_ _6"> </span>of<span class="_ _14"></span>the
            <span class="_"> </span>work.<span class="_"> </span>In
            <span class="_"></span>the<span class="_"> </span>event
            <span class="_"> </span>the<span class="_"></span>CM
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws4">
            self-performs<span class="_"> </span>a<span class="_"> </span>
            portion<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"></span>either
            <span class="_"> </span>method<span class="_ _f"> </span>noted
            <span class="_ _f"> </span>above,<span class="_ _f"> </span>it
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
            <span class="_ _f"> </span>paid<span class="_ _10"> </span>for
            <span class="_ _f"> </span>the<span class="_ _f"> </span>direct
            <span class="_ _f"> </span>cost
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws21">
            of<span class="_ _12"> </span>the<span class="_"> </span>work
            <span class="_"></span>with<span class="_"> </span>no
            <span class="_"> </span>reimbursement<span class="_"> </span>for
            <span class="_"> </span>office<span class="_"> </span>overhead
            <span class="_"> </span>or<span class="_"> </span>for
            <span class="_"> </span>any<span class="_"></span>o
            <span class="_ _0"></span>ther<span class="_"> </span>work
            <span class="_"></span>otherwise<span class="_"> </span>included
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>general
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws4">
            conditions.<span class="_"> </span>The<span class="_"> </span>fee
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>will
            <span class="_"> </span>be<span class="_"></span>at
            <span class="_"> </span>the<span class="_"> </span>same
            <span class="_ _f"></span>CM<span class="_ _f"> </span>fee
            <span class="_ _f"> </span>percentage<span class="_ _f"> </span>
            stated<span class="_ _f"></span>in<span class="_ _f"> </span>7.4.1.
            <span class="_ _10"> </span>This<span class="_ _f"> </span>paragraph
            <span class="_ _f"> </span>shall
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1">
            not govern compensation for work self-performed by the CM pursuant
            to Paragraph 5.2.
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws4">
            7.1.1.7<span class="_"> </span>The<span class="_"> </span>Guaranteed
            <span class="_"> </span>Maximum<span class="_"> </span>Price
            <span class="_"> </span>is<span class="_"> </span>the
            <span class="_"></span>total<span class="_"> </span>cost
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>Project,<span class="_"> </span>as
            <span class="_"></span>defined<span class="_ _f"> </span>herein.
            <span class="_ _1c"></span>The<span class="_ _f"> </span>Guaranteed
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws150">
            Maximum<span class="_ _15"> </span>Price<span class="_ _15"> </span>
            includes<span class="_ _15"> </span>the<span class="_ _15"> </span>
            cost<span class="_ _15"> </span>of<span class="_ _15"> </span>labor
            <span class="_ _1"></span>,<span class="_ _15"> </span>equipment,
            <span class="_"> </span>supplies,<span class="_"> </span>materials,
            <span class="_"> </span>services<span class="_"> </span>and
            <span class="_"> </span>allowances<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws33">
            complete<span class="_ _15"> </span>the<span class="_ _15"> </span>
            Project.<span class="_ _23"> </span>The<span class="_ _15"> </span>
            cost<span class="_ _15"> </span>data<span class="_ _15"> </span>
            shall<span class="_ _15"> </span>be<span class="_ _15"> </span>
            directly<span class="_ _15"> </span>correlated
            <span class="_ _15"></span>to<span class="_ _15"> </span>the
            <span class="_"> </span>specific<span class="_"> </span>design
            <span class="_"> </span>drawings<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws15">
            specifications<span class="_ _12"> </span>in<span class="_"> </span>
            existence<span class="_"> </span>at<span class="_"> </span>the
            <span class="_"></span>time<span class="_"> </span>the
            <span class="_"> </span>Guaranteed<span class="_"> </span>Maximum
            <span class="_"> </span>Price<span class="_"> </span>is
            <span class="_"> </span>prepared.<span class="_ _1c"> </span>The
            <span class="_"> </span>assumptions<span class="_"> </span>used
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 wsf5">
            the<span class="_ _6"> </span>preparation
            <span class="_ _14"> </span>of<span class="_ _6"> </span>the
            <span class="_"> </span>Guaranteed<span class="_"> </span>Maximum
            <span class="_"> </span>Price<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>identified
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>as
            <span class="_"></span>part<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>Guaranteed
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws1">
            Maximum Price documentation, and incorporated into the change order
            establishing the GMP<span class="_ _2b"></span>.
          </div>
          <div class="t m0 x8 h3 y66 ff2 fs0 fc0 sc0 ls0 ws22">
            The<span class="_ _12"> </span>GMP<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>include<span class="_ _12"> </span>the
            <span class="_ _12"> </span>cost<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work,
            <span class="_"> </span>CM’s<span class="_"></span>general
            <span class="_"> </span>conditions,<span class="_"> </span>bo
            <span class="_ _0"></span>nds/insurance,<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"> </span>fee
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws4">
            for<span class="_"> </span>construction<span class="_"> </span>and
            <span class="_"> </span>post-construction<span class="_"> </span>
            phase<span class="_"> </span>basic<span class="_"> </span>services.
            <span class="_ _18"> </span>The<span class="_"> </span>GMP
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>also
            <span class="_ _f"> </span>include<span class="_ _f"> </span>a
            <span class="_ _f"> </span>CM<span class="_ _f"> </span>construction
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">33</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf22" class="pf w0 h0" data-page-no="22">
        <div class="pc pc22 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 wsc1">
            contingency<span class="_ _6"> </span>fund.
            <span class="_ _13"></span>The<span class="_ _6"> </span>CM
            <span class="_ _14"> </span>construction<span class="_"> </span>
            contingency<span class="_"></span>fund<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>contingency
            <span class="_"> </span>fund<span class="_"> </span>shall
            <span class="_"> </span>only<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws8d">
            utilized<span class="_ _6"> </span>as<span class="_"> </span>
            outlined<span class="_"> </span>in<span class="_"> </span>Paragraphs
            <span class="_"> </span>7.1.1.7.1,<span class="_"> </span>and
            <span class="_"> </span>7.1.1.7.2.<span class="_ _18"> </span>The
            <span class="_"> </span>CM’s<span class="_"> </span>fee
            <span class="_"></span>shall<span class="_"> </span>be
            <span class="_"> </span>paid<span class="_"></span>pursuant
            <span class="_"> </span>to<span class="_"> </span>Section
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws1">
            7.4. The general conditions shall be reim<span class="_ _0"></span>
            bursed as described in 7.1.1.7.3.
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws14">
            7.1.1.7.1<span class="_ _18"> </span>Unless
            <span class="_ _12"></span>otherwise<span class="_ _12"> </span>
            agreed<span class="_ _12"></span>in<span class="_ _12"> </span>
            writing,<span class="_ _12"> </span>the<span class="_ _12"> </span>
            CM’s<span class="_ _12"> </span>construction
            <span class="_ _12"> </span>contingency<span class="_ _12"></span>
            may<span class="_"> </span>be<span class="_"> </span>used
            <span class="_"></span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 wsc0">
            expedite<span class="_ _6"> </span>the<span class="_ _14"> </span>
            work,<span class="_ _6"> </span>address<span class="_ _14"> </span>
            scheduling<span class="_ _6"> </span>and<span class="_ _14"> </span>
            coordination<span class="_ _14"> </span>problems,
            <span class="_ _6"></span>respond<span class="_ _14"> </span>to
            <span class="_ _6"> </span>a<span class="_ _14"> </span>default
            <span class="_ _6"> </span>by<span class="_"> </span>a
            <span class="_"> </span>non-bonded
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws151">
            contractor<span class="_ _1"></span>,<span class="_ _6"> </span>and
            <span class="_ _14"> </span>repair<span class="_ _6"> </span>damaged
            <span class="_ _14"> </span>work<span class="_ _6"> </span>in
            <span class="_"> </span>place<span class="_"> </span>where
            <span class="_"></span>the<span class="_"> </span>responsible
            <span class="_"> </span>contractor<span class="_"> </span>cannot
            <span class="_"> </span>be<span class="_"> </span>identified
            <span class="_"> </span>by<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 wsa4">
            CM<span class="_"> </span>after<span class="_"> </span>reasonable
            <span class="_"> </span>efforts<span class="_"> </span>to
            <span class="_"> </span>identify<span class="_"> </span>the
            <span class="_"></span>responsible<span class="_"> </span>party
            <span class="_ _4"></span>.<span class="_ _1c"> </span>The
            <span class="_"> </span>CM’s<span class="_"></span>construction
            <span class="_"> </span>contingency<span class="_"></span>may
            <span class="_"> </span>also<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws4">
            used<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>to
            <span class="_"> </span>correct<span class="_"></span>design
            <span class="_ _f"> </span>issues<span class="_ _f"> </span>that
            <span class="_ _f"> </span>reasonably<span class="_ _f"> </span>
            should<span class="_ _f"> </span>have<span class="_ _f"> </span>been
            <span class="_ _10"> </span>discovered<span class="_ _f"></span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"></span>during<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws59">
            performance<span class="_ _12"> </span>of
            <span class="_ _12"> </span>its<span class="_ _12"> </span>
            obligations<span class="_ _12"></span>pursuant
            <span class="_ _12"> </span>to<span class="_ _12"> </span>Paragraphs
            <span class="_ _12"> </span>3.3.1.5<span class="_ _12"></span>and
            <span class="_"> </span>3.3.1.6,<span class="_"> </span>correct
            <span class="_"> </span>scope<span class="_"> </span>gaps
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>bidding
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws42">
            of<span class="_"> </span>the<span class="_"> </span>Project,
            <span class="_"></span>correct<span class="_"> </span>code,
            <span class="_"> </span>regulatory<span class="_"> </span>and
            <span class="_"> </span>other<span class="_"> </span>items
            <span class="_"> </span>identified<span class="_"> </span>by
            <span class="_"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _f"> </span>in<span class="_ _f"> </span>writing
            <span class="_ _f"> </span>prior<span class="_ _f"> </span>to
            <span class="_ _f"> </span>bidding<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 wse">
            Project,<span class="_"> </span>correct<span class="_"> </span>items
            <span class="_"> </span>identified<span class="_"> </span>in
            <span class="_ _12"> </span>change<span class="_ _12"> </span>orders
            <span class="_ _12"> </span>or<span class="_ _12"> </span>request
            <span class="_ _12"> </span>for<span class="_ _12"> </span>
            information<span class="_ _12"> </span>arising
            <span class="_ _12"></span>on<span class="_ _12"> </span>previous
            <span class="_ _12"> </span>uses<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws56">
            same<span class="_ _12"> </span>prototype
            <span class="_ _12"> </span>design,<span class="_ _12"> </span>and
            <span class="_ _12"> </span>any<span class="_ _12"> </span>issues
            <span class="_ _12"> </span>that<span class="_ _12"> </span>are
            <span class="_ _12"> </span>the<span class="_ _12"> </span>fault
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_"> </span>CM.<span class="_ _1c"></span>The
            <span class="_"> </span>CM’s<span class="_"> </span>use
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>CM’<span class="_ _1"></span>s
            <span class="_"> </span>construction
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 wsf7">
            contingency<span class="_ _12"> </span>fund
            <span class="_ _12"></span>shall<span class="_ _12"> </span>be
            <span class="_"> </span>documented<span class="_"> </span>in
            <span class="_"> </span>writing<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>and<span class="_"> </span>approved
            <span class="_"></span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>in
            <span class="_"> </span>writing<span class="_"> </span>prior
            <span class="_"></span>to<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws56">
            CM<span class="_ _12"> </span>billing<span class="_ _12"> </span>for
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work.
            <span class="_ _12"> </span>The<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>not
            <span class="_ _12"> </span>be<span class="_ _12"> </span>entitled
            <span class="_ _12"> </span>to<span class="_ _12"> </span>receive
            <span class="_ _12"> </span>any<span class="_"> </span>fee
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>use<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM’s
            <span class="_"> </span>contingency<span class="_ _4"></span>.
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws152">
            In<span class="_ _19"> </span>the<span class="_"> </span>event
            <span class="_"></span>of<span class="_"> </span>a
            <span class="_"> </span>default<span class="_"></span>by
            <span class="_"> </span>a<span class="_"> </span>contractor
            <span class="_ _1"></span>,<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>shall
            <span class="_"> </span>not<span class="_"> </span>use
            <span class="_"></span>the<span class="_"> </span>CM’s
            <span class="_"> </span>co<span class="_ _0"></span>ntingency
            <span class="_"> </span>to<span class="_"> </span>cover
            <span class="_"> </span>any<span class="_"> </span>costs
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws4">
            covered<span class="_"> </span>by<span class="_"> </span>a
            <span class="_"></span>performance<span class="_"> </span>or
            <span class="_"> </span>payment<span class="_"> </span>bond
            <span class="_"> </span>provided<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>contractor
            <span class="_"> </span>or<span class="_ _f"> </span>covered
            <span class="_ _f"> </span>by<span class="_ _f"> </span>a
            <span class="_ _f"> </span>program<span class="_ _f"> </span>paid
            <span class="_ _f"> </span>for<span class="_ _f"> </span>by
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws4">
            the<span class="_"> </span>CM<span class="_"> </span>to
            <span class="_"></span>insure<span class="_"> </span>the
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>contractors.
            <span class="_ _18"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>vigorously
            <span class="_"> </span>pursue<span class="_"> </span>reimbursement
            <span class="_ _f"> </span>of<span class="_ _f"></span>all
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws1">
            expenses from the contractor<span class="_ _3"></span>’s surety or
            through the program p<span class="_ _0"></span>rovided by the CM.
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 wsb2">
            7.1.1.7.2<span class="_ _19"> </span>Unless
            <span class="_ _19"></span>otherwise<span class="_ _19"> </span>
            agreed<span class="_ _19"></span>in<span class="_"> </span>writing,
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>contingency
            <span class="_"> </span>fund<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>used
            <span class="_"></span>to<span class="_"> </span>correct
            <span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws10f">
            design<span class="_ _19"> </span>issues<span class="_ _19"> </span>
            that<span class="_ _19"> </span>could<span class="_ _19"> </span>not
            <span class="_ _19"> </span>reasonably<span class="_"> </span>have
            <span class="_"> </span>been<span class="_"> </span>discovered
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>during
            <span class="_"></span>the<span class="_"> </span>performance
            <span class="_"> </span>of<span class="_"> </span>its
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws153">
            obligations<span class="_ _12"> </span>during
            <span class="_ _12"></span>the<span class="_ _12"> </span>design
            <span class="_"> </span>and<span class="_"> </span>bidding
            <span class="_"> </span>phases,<span class="_"> </span>and
            <span class="_"> </span>any<span class="_"></span>changes
            <span class="_"> </span>requested<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>.<span class="_ _15"> </span>The
            <span class="_"> </span>use<span class="_"></span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws65">
            Owner<span class="_ _3"></span>’s<span class="_"> </span>contingency
            <span class="_"> </span>fund<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>documented
            <span class="_"> </span>in<span class="_"> </span>writing
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>and
            <span class="_"> </span>approved<span class="_"></span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>in<span class="_"> </span>writing
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            prior to the CM billing for the work.
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws154">
            7.1.1.7.3<span class="_ _19"> </span>The<span class="_ _19"> </span>
            General<span class="_ _19"> </span>Conditions
            <span class="_ _19"></span>shall<span class="_ _19"> </span>be
            <span class="_ _19"> </span>paid<span class="_ _19"> </span>as
            <span class="_ _19"> </span>a<span class="_ _19"> </span>
            reimbursable<span class="_ _19"></span>expense
            <span class="_ _19"> </span>in<span class="_ _19"> </span>an
            <span class="_"> </span>amount<span class="_"> </span>that
            <span class="_"></span>shall<span class="_"> </span>not
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws66">
            exceed<span class="_"> </span>the<span class="_"> </span>amount
            <span class="_"></span>included<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>GMP
            <span class="_ _2b"></span>.<span class="_ _13"> </span>The
            <span class="_"></span>Owner<span class="_"> </span>and
            <span class="_"> </span>CM<span class="_"></span>agree
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"></span>items<span class="_"> </span>to
            <span class="_"> </span>be<span class="_"></span>reimbursed
            <span class="_ _12"> </span>as
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws47">
            general<span class="_"> </span>conditions<span class="_"> </span>are
            <span class="_"> </span>indicated<span class="_"> </span>in
            <span class="_"></span>Appendix<span class="_"> </span>E.
            <span class="_ _17"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>reserves<span class="_"> </span>the
            <span class="_"> </span>right<span class="_"> </span>to
            <span class="_"> </span>take<span class="_"></span>Ownership
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws155">
            possession<span class="_ _15"> </span>of<span class="_ _15"> </span>
            any<span class="_"> </span>equipment<span class="_"> </span>or
            <span class="_"></span>other<span class="_"> </span>item
            <span class="_"> </span>purchased<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>as<span class="_"> </span>part
            <span class="_"></span>of<span class="_"> </span>general
            <span class="_"> </span>conditions<span class="_"> </span>at
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws7">
            conclusion<span class="_ _6"> </span>of<span class="_ _14"> </span>
            the<span class="_ _6"> </span>Project.<span class="_ _13"> </span>
            The<span class="_ _6"> </span>CM<span class="_ _14"> </span>shall
            <span class="_ _14"> </span>be<span class="_ _6"> </span>notified
            <span class="_ _14"> </span>of<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>intent<span class="_"> </span>to
            <span class="_"></span>take<span class="_"> </span>possession
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            items prior to final payment.
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws38">
            7.1.1.8<span class="_ _1c"> </span>The<span class="_ _6"> </span>
            Guaranteed<span class="_ _6"> </span>Maximum<span class="_"> </span>
            Price<span class="_"> </span>shall<span class="_"> </span>include
            <span class="_"> </span>those<span class="_"> </span>taxes
            <span class="_"> </span>applicable<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"> </span>Project.
            <span class="_ _18"></span>Any<span class="_"> </span>sales
            <span class="_"> </span>tax
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws98">
            refunds<span class="_ _12"> </span>paid<span class="_ _12"> </span>
            to<span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>be
            <span class="_ _12"> </span>exclusively<span class="_ _12"></span>
            for<span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _3"></span>’s<span class="_ _12"> </span>use
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_"></span>not<span class="_"> </span>in
            <span class="_"> </span>any<span class="_"></span>way
            <span class="_"> </span>reduce<span class="_"> </span>the
            <span class="_"></span>cost
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            of the Project or impact the Guaranteed Maximum Price.
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws24">
            7.1.1.9<span class="_ _1c"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>may<span class="_"> </span>change
            <span class="_"></span>the<span class="_"> </span>scope
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>Project<span class="_"> </span>or
            <span class="_"></span>a<span class="_ _12"> </span>part
            <span class="_ _12"> </span>thereof<span class="_ _12"> </span>and
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            Guaranteed<span class="_ _12"></span>Maximum
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws1">
            Price shall then be adjusted as provided in Paragraph 7.1.3.
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws5c">
            7.1.1.10<span class="_"> </span>In<span class="_"> </span>the
            <span class="_ _15"></span>event<span class="_ _15"> </span>that
            <span class="_ _15"> </span>the<span class="_ _15"> </span>cost
            <span class="_ _15"> </span>of<span class="_ _15"> </span>the
            <span class="_ _15"> </span>Project<span class="_ _15"> </span>
            exceeds<span class="_ _15"></span>the<span class="_ _15"> </span>
            Guaranteed<span class="_ _15"></span>Maximum
            <span class="_ _15"> </span>Price<span class="_ _15"> </span>and
            <span class="_ _15"> </span>any
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws156">
            adjustments<span class="_ _12"> </span>therein
            <span class="_ _12"></span>(such<span class="_ _12"> </span>as
            <span class="_ _12"> </span>allowances,<span class="_ _12"> </span>
            architectural<span class="_ _12"></span>errors,
            <span class="_ _12"> </span>or<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>requested<span class="_"> </span>
            changes)<span class="_"> </span>as<span class="_"> </span>may
            <span class="_"></span>be<span class="_"> </span>due
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws89">
            pursuant<span class="_ _6"> </span>to<span class="_ _14"> </span>the
            <span class="_ _6"> </span>terms<span class="_ _14"> </span>hereof,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>continue
            <span class="_"> </span>to<span class="_"> </span>perform
            <span class="_"> </span>at<span class="_"></span>no
            <span class="_"> </span>additional<span class="_"> </span>cost
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>until
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 wsee">
            Project,<span class="_ _12"> </span>defined
            <span class="_ _12"></span>by<span class="_ _12"> </span>this
            <span class="_ _12"> </span>Agreement<span class="_ _12"> </span>and
            <span class="_ _12"> </span>attachments<span class="_ _12"> </span>
            hereto,<span class="_ _12"></span>is<span class="_"> </span>complete
            <span class="_"> </span>and<span class="_"></span>achieves
            <span class="_"> </span>final<span class="_"> </span>completion.
            <span class="_ _1c"> </span>The
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws51">
            CM<span class="_ _12"> </span>shall<span class="_ _12"> </span>be
            <span class="_ _12"> </span>responsible<span class="_ _12"></span>
            for<span class="_ _12"> </span>paying<span class="_ _12"> </span>all
            <span class="_ _12"> </span>costs<span class="_ _12"> </span>and
            <span class="_ _12"> </span>expenses,<span class="_ _12"> </span>in
            <span class="_ _12"> </span>accordance<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>terms
            <span class="_"></span>of<span class="_"> </span>this
            <span class="_"> </span>Agreement,
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws6e">
            that<span class="_"> </span>may<span class="_"> </span>be
            <span class="_"></span>necessary<span class="_"> </span>to
            <span class="_"> </span>complete<span class="_"> </span>the
            <span class="_"> </span>Project,<span class="_"> </span>even
            <span class="_ _6"> </span>if<span class="_ _14"> </span>such
            <span class="_ _6"> </span>amounts<span class="_ _14"> </span>are
            <span class="_ _6"> </span>in<span class="_ _14"> </span>excess
            <span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _14"> </span>Guaranteed
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws1">
            Maximum Price.
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.2<span class="_ _16"> </span>Cost of the Project
          </div>
          <div class="t m0 x8 h3 y5a ff2 fs0 fc0 sc0 ls0 ws5d">
            The<span class="_"> </span>term<span class="_"> </span>“cost
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>Project”<span class="_ _f"></span>shall
            <span class="_ _f"> </span>include<span class="_ _f"> </span>all
            <span class="_ _f"> </span>amounts<span class="_ _f"> </span>paid
            <span class="_ _f"> </span>by<span class="_ _10"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _10"></span>for<span class="_ _f"> </span>
            construction
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws3a">
            and<span class="_"> </span>post-construction<span class="_"> </span>
            phase<span class="_"> </span>basic<span class="_"> </span>services
            <span class="_"> </span>provided<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>in<span class="_"> </span>Paragraphs
            <span class="_"> </span>3.5<span class="_"> </span>and
            <span class="_"> </span>3.6<span class="_"></span>and
            <span class="_"> </span>payment<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 wscc">
            all<span class="_ _6"> </span>separate<span class="_ _14"> </span>
            Contractors,<span class="_"> </span>suppliers<span class="_"></span>
            and<span class="_"> </span>equipment<span class="_"> </span>lessors
            <span class="_"> </span>for<span class="_"> </span>all
            <span class="_"></span>work,<span class="_"> </span>material,
            <span class="_"> </span>and<span class="_"> </span>equipment
            <span class="_"> </span>supplied<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
            the Project including general conditions items.
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.2.1<span class="_ _1c"> </span>The cost of the Project shall not
            include the following:
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">34</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf23" class="pf w0 h0" data-page-no="23">
        <div class="pc pc23 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.2.1.1 The CM’<span class="_ _1"></span>s fee for Basic Services;
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws157">
            7.1.2.1.2<span class="_"> </span>All<span class="_"> </span>
            professional<span class="_"> </span>fees<span class="_"> </span>paid
            <span class="_ _6"> </span>by<span class="_ _14"> </span>the
            <span class="_ _6"> </span>Owner<span class="_ _14"> </span>to
            <span class="_ _6"> </span>the<span class="_ _14"> </span>Design
            <span class="_ _14"> </span>Consultant<span class="_ _6"></span>or
            <span class="_ _14"> </span>other<span class="_ _6"> </span>
            consultants<span class="_ _14"> </span>retained
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
            directly by the Owner;
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws4">
            7.1.2.1.3<span class="_"> </span>All<span class="_"> </span>costs
            <span class="_"> </span>paid<span class="_"> </span>directly
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>to
            <span class="_"> </span>contractors<span class="_"> </span>or
            <span class="_"> </span>suppliers<span class="_"> </span>retained
            <span class="_"> </span>directly<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            outside the scope of the Guaranteed Maximum Price;
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.2.1.4 <span class="_ _1"></span>All
            <span class="_ _1"></span>Additional Services costs as defined
            herein; or
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.2.1.5 <span class="_ _1"></span>All other costs identified as
            being not within the Guaranteed Maximum Price.
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws42">
            7.1.2.2<span class="_ _1c"> </span>The<span class="_"> </span>cost
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>Project<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"></span>further
            <span class="_"> </span>defined<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>change
            <span class="_"></span>order<span class="_ _f"> </span>identifying
            <span class="_ _f"></span>the<span class="_ _f"> </span>scope
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>work
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws21">
            and<span class="_"> </span>the<span class="_"> </span>final
            <span class="_"></span>Guaranteed<span class="_"> </span>Maximum
            <span class="_"> </span>Price.<span class="_ _1c"> </span>If
            <span class="_"> </span>the<span class="_"> </span>requirements
            <span class="_"> </span>of<span class="_"> </span>this
            <span class="_"> </span>Paragraph<span class="_"> </span>7.1.2
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"> </span>documentation
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws158">
            required<span class="_ _6"> </span>by<span class="_"> </span>the
            <span class="_"> </span>change<span class="_"> </span>order
            <span class="_"></span>establishing<span class="_"> </span>the
            <span class="_"> </span>Guaranteed<span class="_"> </span>Maximum
            <span class="_"> </span>Price<span class="_"> </span>differ
            <span class="_ _20"></span>,<span class="_"> </span>then
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>shall<span class="_"> </span>identify
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws26">
            and<span class="_"> </span>explain<span class="_"> </span>the
            <span class="_"></span>difference,<span class="_"> </span>but
            <span class="_ _f"> </span>the<span class="_ _f"> </span>
            documentation<span class="_ _f"></span>provided
            <span class="_ _f"> </span>in<span class="_ _f"> </span>accordance
            <span class="_ _f"> </span>with<span class="_ _f"> </span>change
            <span class="_ _f"> </span>order<span class="_ _f"> </span>
            establishing<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws39">
            final<span class="_"> </span>Guaranteed<span class="_"> </span>
            Maximum<span class="_"> </span>Price<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>the
            <span class="_"></span>basis<span class="_"> </span>for
            <span class="_"> </span>determining<span class="_"> </span>the
            <span class="_"> </span>scope<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>Guaranteed
            <span class="_"> </span>Maximum
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws0">Price.</div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.3<span class="_ _16"> </span>Adjustments to the Guaranteed
            Maximum Price
          </div>
          <div class="t m0 x8 h3 yc ff2 fs0 fc0 sc0 ls0 wsa4">
            The<span class="_ _12"> </span>CM<span class="_"> </span>
            understands,<span class="_"> </span>confirms<span class="_"> </span>
            and<span class="_"> </span>agrees<span class="_"> </span>that
            <span class="_"></span>its<span class="_"> </span>responsibility
            <span class="_"> </span>hereunder<span class="_"> </span>is
            <span class="_"> </span>to<span class="_"></span>construct
            <span class="_"> </span>the<span class="_"> </span>Project
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws66">
            in<span class="_"> </span>accordance<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>drawings
            <span class="_"> </span>and<span class="_"> </span>specifications.
            <span class="_ _1d"> </span>It<span class="_"></span>is
            <span class="_"> </span>recognized<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            Guaranteed<span class="_ _12"> </span>Maximum
            <span class="_ _12"></span>Price
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws26">
            may<span class="_"> </span>be<span class="_"> </span>determined
            <span class="_"></span>based<span class="_"> </span>upon
            <span class="_"> </span>incomplete<span class="_"> </span>design
            <span class="_"> </span>documents<span class="_"> </span>and
            <span class="_ _f"> </span>in<span class="_ _f"> </span>those
            <span class="_ _f"> </span>instances<span class="_ _f"> </span>in
            <span class="_ _f"> </span>which<span class="_ _f"> </span>the
            <span class="_ _f"> </span>drawings
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws4">
            and<span class="_"> </span>specifications<span class="_"> </span>are
            <span class="_"> </span>not<span class="_"> </span>complete
            <span class="_"></span>at<span class="_"> </span>the
            <span class="_"> </span>time<span class="_"></span>the
            <span class="_"> </span>Guaranteed<span class="_"> </span>Maximum
            <span class="_ _f"> </span>Price<span class="_ _f"> </span>is
            <span class="_ _f"> </span>established,<span class="_ _f"> </span>
            the<span class="_ _f"> </span>CM<span class="_ _f"> </span>shall
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws6a">
            exercise<span class="_"> </span>reasonable<span class="_"> </span>
            care<span class="_"> </span>and<span class="_"> </span>judgment
            <span class="_"> </span>to<span class="_"> </span>determine
            <span class="_"> </span>the<span class="_"> </span>intent
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>design<span class="_"> </span>and
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>
            calculate<span class="_ _19"></span>the
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws36">
            Guaranteed<span class="_ _6"> </span>Maximum
            <span class="_ _14"></span>Price<span class="_ _6"> </span>on
            <span class="_ _14"> </span>the<span class="_ _6"> </span>basis
            <span class="_ _14"> </span>of<span class="_"> </span>the
            <span class="_"> </span>quality<span class="_"></span>of
            <span class="_"> </span>construction,<span class="_"> </span>
            materials,<span class="_"> </span>and<span class="_"> </span>
            finishes<span class="_"> </span>that<span class="_"> </span>can
            <span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1e">
            reasonably<span class="_"> </span>inferred<span class="_"> </span>
            from<span class="_"> </span>the<span class="_"> </span>design
            <span class="_"></span>documents<span class="_"> </span>or
            <span class="_"> </span>other<span class="_"> </span>specified
            <span class="_"> </span>sources.<span class="_ _1d"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>determine<span class="_"> </span>unit
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws66">
            prices<span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>cost<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>Project
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_"> </span>make<span class="_ _12"> </span>those
            <span class="_ _12"> </span>assumptions<span class="_ _12"></span>
            regarding<span class="_ _12"> </span>the<span class="_ _12"> </span>
            Project<span class="_ _12"> </span>scope<span class="_ _12"> </span>
            and<span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws85">
            quality<span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>intended<span class="_ _12"> </span>
            construction<span class="_ _12"> </span>as
            <span class="_ _12"></span>may<span class="_ _12"> </span>be
            <span class="_"> </span>necessary<span class="_"> </span>to
            <span class="_"> </span>fully<span class="_"> </span>document
            <span class="_"> </span>the<span class="_"> </span>Guaranteed
            <span class="_"> </span>Maximum<span class="_"> </span>Price.
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws10">
            The<span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>use<span class="_"></span>the
            <span class="_ _12"> </span>most<span class="_ _12"> </span>recently
            <span class="_ _12"> </span>approved<span class="_ _12"></span>
            Project<span class="_ _12"> </span>scope<span class="_ _12"> </span>
            in<span class="_ _12"> </span>determining<span class="_ _12"></span>
            whether<span class="_ _12"> </span>or<span class="_ _12"> </span>not
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws4">
            scope<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>Project<span class="_"> </span>or
            <span class="_"> </span>a<span class="_"></span>part
            <span class="_"> </span>thereof<span class="_"> </span>has
            <span class="_"></span>been<span class="_"> </span>changed
            <span class="_"> </span>and<span class="_"></span>in
            <span class="_"> </span>determining<span class="_"> </span>
            entitlement<span class="_ _f"> </span>to<span class="_ _f"> </span>
            an<span class="_ _f"> </span>adjustment<span class="_ _f"> </span>to
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws159">
            the<span class="_ _6"> </span>Guaranteed<span class="_ _14"> </span>
            Maximum<span class="_ _6"> </span>Price.<span class="_ _13"> </span>
            A<span class="_"> </span>determination<span class="_"> </span>
            regarding<span class="_"> </span>all<span class="_"> </span>requests
            <span class="_"> </span>for<span class="_"> </span>adjustment
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"> </span>Guaranteed
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 wsfa">
            Maximum<span class="_ _19"> </span>Price<span class="_ _19"> </span>
            shall<span class="_ _19"> </span>be<span class="_"> </span>made
            <span class="_"> </span>in<span class="_"> </span>writing
            <span class="_"></span>within<span class="_"> </span>thirty
            <span class="_"> </span>(30)<span class="_"> </span>days
            <span class="_"> </span>from<span class="_"></span>the
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"></span>a<span class="_"> </span>written
            <span class="_"> </span>request<span class="_"> </span>for
            <span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws0">adjustment.</div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws4">
            7.1.3.1<span class="_ _1c"> </span>The<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>adjustment
            <span class="_"> </span>to<span class="_"> </span>increase
            <span class="_"> </span>or<span class="_"> </span>decrease
            <span class="_"> </span>the<span class="_"> </span>Guaranteed
            <span class="_ _f"> </span>Maximum<span class="_ _f"></span>Price
            <span class="_ _f"> </span>resulting<span class="_ _f"> </span>from
            <span class="_ _f"> </span>a
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws1">
            change in the Project shall be determined in one or more of the
            following ways:
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.3.1.1 By mutual acceptance of a lump sum, properly itemized and
            supported by cost data; or
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.3.1.2 By unit prices defined and listed in the GMP
            <span class="_ _0"></span>
            documentation; or
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 wsa9">
            7.1.3.1.3<span class="_ _6"> </span>If<span class="_ _14"> </span>
            neither<span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _14"> </span>methods<span class="_ _6"> </span>set
            <span class="_ _14"> </span>forth<span class="_"> </span>in
            <span class="_"></span>7.1.3.1.1<span class="_"> </span>or
            <span class="_"> </span>7.1.3.1.2<span class="_"> </span>is
            <span class="_"> </span>agreed<span class="_"> </span>upon
            <span class="_"> </span>by<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_ _20"></span>,
            <span class="_"></span>the<span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws4">
            provided<span class="_"> </span>it<span class="_"> </span>receives
            <span class="_"> </span>a<span class="_"> </span>written
            <span class="_ _f"> </span>order<span class="_ _f"> </span>signed
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _1"></span>,
            <span class="_ _10"></span>shall<span class="_ _f"> </span>promptly
            <span class="_ _f"> </span>proceed<span class="_ _f"> </span>with
            <span class="_ _f"> </span>the<span class="_ _f"> </span>work
            <span class="_ _10"> </span>involved.<span class="_ _1c"> </span>The
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws42">
            cost<span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>work<span class="_"> </span>shall
            <span class="_"> </span>then<span class="_"></span>be
            <span class="_ _f"> </span>determined<span class="_ _f"> </span>on
            <span class="_ _f"> </span>a<span class="_ _f"> </span>time
            <span class="_ _f"></span>and<span class="_ _f"> </span>material
            <span class="_ _10"> </span>basis<span class="_ _f"> </span>pursuant
            <span class="_ _f"> </span>to<span class="_ _f"> </span>Article
            <span class="_ _f"> </span>5.<span class="_ _1c"> </span>Choice
            <span class="_ _10"> </span>of<span class="_ _f"> </span>this
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws15">
            method<span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"></span>restrict<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>from<span class="_"> </span>disputing
            <span class="_"> </span>the<span class="_"> </span>justification
            <span class="_"> </span>or<span class="_"> </span>right
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>to
            <span class="_"> </span>an<span class="_"></span>increase
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws8d">
            in<span class="_"> </span>the<span class="_"> </span>Guaranteed
            <span class="_"></span>Maximum<span class="_"> </span>Price
            <span class="_"> </span>due<span class="_"> </span>to
            <span class="_"> </span>such<span class="_"></span>work.
            <span class="_ _18"> </span>In<span class="_"> </span>such
            <span class="_"> </span>case,<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>keep<span class="_ _f"></span>and
            <span class="_ _f"> </span>present<span class="_ _f"> </span>in
            <span class="_ _f"> </span>such
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 wsa6">
            form<span class="_"> </span>as<span class="_"> </span>may
            <span class="_"></span>be<span class="_"> </span>agreeable
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>an
            <span class="_ _f"> </span>itemized<span class="_ _f"> </span>
            accounting<span class="_ _f"> </span>together
            <span class="_ _f"></span>with<span class="_ _10"> </span>
            appropriate<span class="_ _f"></span>supporting
            <span class="_ _f"> </span>data<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws1">
            the actual cost of the Project.
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 wsfc">
            7.1.3.2<span class="_ _1c"> </span>If<span class="_ _12"> </span>the
            <span class="_ _12"> </span>unit<span class="_ _12"> </span>prices
            <span class="_ _12"> </span>are<span class="_"> </span>stated
            <span class="_"> </span>and<span class="_"> </span>if
            <span class="_"></span>the<span class="_"> </span>quantities
            <span class="_"> </span>originally<span class="_"> </span>
            contemplated<span class="_"></span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>are
            <span class="_"> </span>so<span class="_"> </span>changed
            <span class="_"></span>in
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws4">
            a<span class="_"> </span>proposed<span class="_"> </span>change
            <span class="_"></span>order<span class="_"> </span>or
            <span class="_"> </span>as<span class="_"></span>a
            <span class="_"> </span>result<span class="_"> </span>of
            <span class="_ _f"></span>several<span class="_ _f"> </span>change
            <span class="_ _f"> </span>orders<span class="_ _f"> </span>that
            <span class="_ _f"> </span>application<span class="_ _f"> </span>of
            <span class="_ _10"> </span>the<span class="_ _f"> </span>agreed
            <span class="_ _f"> </span>unit<span class="_ _f"> </span>prices
            <span class="_ _f"> </span>to
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws1f">
            the<span class="_ _12"> </span>quantities
            <span class="_ _12"> </span>or<span class="_ _12"> </span>work
            <span class="_ _12"> </span>proposed<span class="_"> </span>cause
            <span class="_"> </span>substantial<span class="_"> </span>inequity
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>or
            <span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>the<span class="_"> </span>applicable
            <span class="_"> </span>unit<span class="_"> </span>prices
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws1">
            and Guaranteed Maximum Price shall be adjusted.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">35</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      <div id="pf24" class="pf w0 h0" data-page-no="24">
        <div class="pc pc24 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws41">
            7.1.3.3<span class="_ _1c"> </span>Should<span class="_ _6"> </span>
            concealed<span class="_ _6"> </span>or<span class="_ _14"> </span>
            unknown<span class="_ _14"> </span>physical
            <span class="_ _6"></span>conditions<span class="_ _14"> </span>be
            <span class="_"> </span>encountered<span class="_"> </span>that
            <span class="_"> </span>differ<span class="_"> </span>materially
            <span class="_"> </span>from<span class="_"> </span>those
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws21">
            identified<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>drawings<span class="_"> </span>or
            <span class="_"> </span>specifications,<span class="_"> </span>the
            <span class="_"> </span>Guaranteed<span class="_"> </span>Maximum
            <span class="_"> </span>Price<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"></span>adjusted
            <span class="_"> </span>by<span class="_"> </span>change
            <span class="_"> </span>order
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1">
            in accordance with Paragraph<span class="_"> </span>5.2.2.
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1f">
            7.1.3.4<span class="_ _1c"> </span>The<span class="_ _12"> </span>
            Design<span class="_ _12"> </span>Consultant
            <span class="_ _12"></span>shall<span class="_ _12"> </span>have
            <span class="_ _12"> </span>the<span class="_"> </span>authority
            <span class="_"> </span>to<span class="_"></span>order
            <span class="_"> </span>minor<span class="_"> </span>changes
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>Project<span class="_"> </span>consistent
            <span class="_"> </span>with
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws66">
            the<span class="_"> </span>intent<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>drawings
            <span class="_"> </span>and<span class="_"></span>specifications
            <span class="_ _12"> </span>and<span class="_ _12"></span>not
            <span class="_ _12"> </span>involving<span class="_ _12"> </span>an
            <span class="_ _12"> </span>adjustment<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            Guaranteed<span class="_ _12"> </span>Maximum
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws66">
            Price<span class="_"> </span>or<span class="_"> </span>change
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_ _12"> </span>construction<span class="_ _12"> </span>
            completion<span class="_ _12"></span>date.
            <span class="_ _18"> </span>Such<span class="_ _12"> </span>changes
            <span class="_ _12"> </span>may<span class="_ _12"> </span>be
            <span class="_ _12"> </span>affected<span class="_ _12"> </span>by
            <span class="_ _12"> </span>written<span class="_ _12"> </span>order
            <span class="_ _12"> </span>only
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            and shall be signed by the Owner and the CM prior to the work being
            performed.
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws18">
            7.1.3.5<span class="_ _1c"> </span>In<span class="_ _12"> </span>the
            <span class="_ _12"> </span>event<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>bids
            <span class="_ _12"> </span>for<span class="_ _12"> </span>the
            <span class="_ _12"> </span>construction<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>Project
            <span class="_"></span>are<span class="_"> </span>less
            <span class="_"> </span>than<span class="_"></span>the
            <span class="_"> </span>line<span class="_"> </span>item(s)
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>GMP
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws10">
            for<span class="_"> </span>the<span class="_"> </span>construction
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>Project,<span class="_"> </span>the
            <span class="_"></span>GMP<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>reduced
            <span class="_"> </span>dollar<span class="_"> </span>for
            <span class="_"> </span>dollar<span class="_"> </span>to
            <span class="_"></span>reflect<span class="_ _12"> </span>the
            <span class="_ _12"> </span>savings.<span class="_ _18"> </span>The
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
            parties agree that any savings based upon the receipt of bids shall
            be retained solely by the Owner<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.4<span class="_ _16"> </span>Unused Funds
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 wsbd">
            7.1.4.1<span class="_ _1c"> </span>In<span class="_ _6"> </span>the
            <span class="_ _14"> </span>event<span class="_ _6"> </span>that
            <span class="_ _14"> </span>there<span class="_ _6"> </span>are
            <span class="_ _14"> </span>any<span class="_ _6"> </span>funds
            <span class="_ _14"> </span>remaining<span class="_ _14"></span>in
            <span class="_ _6"> </span>any<span class="_ _14"> </span>
            contingency<span class="_ _20"></span>,<span class="_"> </span>those
            <span class="_"> </span>funds<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>retained
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            solely by the Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 wsa9">
            7.1.4.2<span class="_ _1c"> </span>In<span class="_"> </span>the
            <span class="_"> </span>event<span class="_"> </span>that
            <span class="_"></span>all<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>funds
            <span class="_"> </span>allocated<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"> </span>CM’
            <span class="_ _1"></span>s<span class="_"> </span>general
            <span class="_"> </span>conditions<span class="_"> </span>are
            <span class="_"> </span>not<span class="_"> </span>used,
            <span class="_"> </span>the<span class="_"></span>Owner
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            shall retain all of those funds.
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 wsce">
            7.1.4.3<span class="_ _1c"> </span>In<span class="_ _12"> </span>the
            <span class="_ _12"> </span>event<span class="_"> </span>that
            <span class="_"> </span>there<span class="_"> </span>are
            <span class="_"></span>unused<span class="_"> </span>allowances
            <span class="_"> </span>or<span class="_"> </span>other
            <span class="_"> </span>cost<span class="_"></span>of
            <span class="_"> </span>work<span class="_"> </span>funds,
            <span class="_"></span>all<span class="_"> </span>of
            <span class="_"> </span>those<span class="_"></span>funds,
            <span class="_"> </span>plus<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
            associated CM fee, shall be retained by the Owner
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws1">
            7.1.4.4<span class="_ _1c"> </span>In the event that the bids for
            the construction of the Project are less than the line item(s) in
            the GM<span class="_ _0"></span>P
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws1">
            for the construction of the Project, the Owner
            <span class="_ _3"></span>’s contingency sha
            <span class="_ _0"></span>ll be increased dollar for dollar to
            reflect the
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            savings. The parties agree that any savi<span class="_ _0"></span>
            ngs based upon the receipt of bids shall be retained solely by the
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws0">Owner</div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws1">
            7.4<span class="_ _e"> </span>Lump Sum
          </div>
          <div class="t m0 x8 h3 y1d ff2 fs0 fc0 sc0 ls0 wsc">
            The<span class="_ _12"> </span>Owner<span class="_ _12"> </span>
            shall<span class="_ _12"> </span>compensate
            <span class="_ _12"></span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>for<span class="_ _12"> </span>Basic
            <span class="_ _12"> </span>Services<span class="_"> </span>on
            <span class="_"> </span>the<span class="_"></span>basis
            <span class="_"> </span>of<span class="_"> </span>a
            <span class="_"></span>Lump<span class="_"> </span>Sum
            <span class="_"> </span>in<span class="_"></span>accordance
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws1">
            with the terms and conditions of this
            <span class="_ _20"></span>Agreement as follows:
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            7.4.1<span class="_ _16"> </span>Compensation for Basic Services
          </div>
          <div class="t m0 x8 h3 y6b ff2 fs0 fc0 sc0 ls0 ws15a">
            The<span class="_ _19"> </span>CM<span class="_ _19"> </span>shall
            <span class="_ _19"> </span>be<span class="_ _19"> </span>
            compensated<span class="_ _19"> </span>for
            <span class="_ _19"></span>performing<span class="_"> </span>Basic
            <span class="_"> </span>Services<span class="_"> </span>described
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>pre-design<span class="_"> </span>phase
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 wsbb">
            (Paragraph<span class="_ _12"> </span>3.2),
            <span class="_ _12"></span>design<span class="_ _12"> </span>phase
            <span class="_ _12"> </span>(Paragraph<span class="_ _12"> </span>
            3.3)<span class="_ _12"></span>and<span class="_"> </span>the
            <span class="_"> </span>procurement<span class="_"> </span>phase
            <span class="_"> </span>(Paragraph<span class="_"> </span>3.4)
            <span class="_"> </span>for<span class="_ _1c"> </span>a
            <span class="_"> </span>total<span class="_"></span>lump
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 wse">
            sum<span class="_ _19"> </span>in<span class="_ _19"> </span>the
            <span class="_"> </span>amount<span class="_"> </span>of
            <span class="_"></span>F18________________________________________
            <span class="_ _1d"></span>dollars<span class="_"> </span>
            ($F19________)<span class="_"></span>that
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws15b">
            shall<span class="_ _6"> </span>be<span class="_ _14"> </span>
            divided<span class="_ _6"> </span>by<span class="_ _14"> </span>the
            <span class="_ _14"> </span>number<span class="_"> </span>of
            <span class="_"> </span>months<span class="_"> </span>scheduled
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>basic<span class="_"> </span>services
            <span class="_"> </span>in<span class="_"> </span>Paragraphs
            <span class="_"> </span>3.2,<span class="_"> </span>3.3
            <span class="_"> </span>and<span class="_"> </span>3.4
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws34">
            and<span class="_"> </span>paid<span class="_"> </span>in
            <span class="_"></span>equal<span class="_"> </span>monthly
            <span class="_"> </span>installments<span class="_"> </span>as
            <span class="_"> </span>the<span class="_"> </span>services
            <span class="_"> </span>are<span class="_"></span>performed.
            <span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_ _12"> </span>be
            <span class="_ _12"></span>compensated<span class="_ _12"> </span>
            for
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 wsd9">
            performing<span class="_"> </span>basic<span class="_"> </span>
            services<span class="_"> </span>described<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>construction
            <span class="_"> </span>phase<span class="_"> </span>(Paragraph
            <span class="_"> </span>3.5)<span class="_"> </span>and
            <span class="_ _f"> </span>post-construction
            <span class="_ _f"></span>phase
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 wsf5">
            (Paragraph<span class="_ _6"> </span>3.6)<span class="_"> </span>for
            <span class="_"> </span>a<span class="_"> </span>total
            <span class="_"></span>lump<span class="_"> </span>sum
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>amount<span class="_"> </span>of
            <span class="_"></span>F20_____________<span class="_"> </span>
            dollars<span class="_"></span>($_F21_______).
            <span class="_ _18"> </span>In<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws66">
            event<span class="_"> </span>there<span class="_"> </span>are
            <span class="_"></span>changes<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>that<span class="_ _12"> </span>require
            <span class="_ _12"> </span>an<span class="_ _12"> </span>adjustment
            <span class="_ _12"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM’s<span class="_ _12"> </span>
            constructio<span class="_ _0"></span>n/post-construction
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws42">
            fee,<span class="_"> </span>the<span class="_"> </span>fee
            <span class="_"></span>adjustment<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>based
            <span class="_"> </span>upon<span class="_"></span>F22______%
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>cost<span class="_ _f"> </span>of
            <span class="_ _f"></span>the<span class="_ _f"> </span>work
            <span class="_ _f"> </span>added<span class="_ _f"> </span>or
            <span class="_ _f"> </span>deleted<span class="_ _f"> </span>from
            <span class="_ _10"> </span>the
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 wsb4">
            Project.<span class="_ _18"> </span>The<span class="_ _12"> </span>
            fee<span class="_ _12"> </span>for<span class="_ _12"> </span>these
            <span class="_ _12"> </span>phases<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>paid
            <span class="_"></span>in<span class="_"> </span>proportion
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>percentage<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>actual
            <span class="_"></span>cost<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws6e">
            paid<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>.
            <span class="_ _13"> </span>The<span class="_ _6"> </span>cost
            <span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _6"> </span>work<span class="_ _14"> </span>as
            <span class="_ _14"> </span>used<span class="_ _6"> </span>in
            <span class="_ _14"> </span>this<span class="_ _6"> </span>section
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>be
            <span class="_ _14"> </span>the<span class="_ _14"> </span>total
            <span class="_ _6"> </span>dollar<span class="_ _14"> </span>amount
            <span class="_ _6"> </span>of<span class="_ _14"> </span>the
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 wsf7">
            construction<span class="_ _12"> </span>contracts
            <span class="_ _12"></span>awarded<span class="_ _12"> </span>by
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>to<span class="_"></span>contractors
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>work,
            <span class="_"></span>minus<span class="_"> </span>any
            <span class="_"> </span>unused
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws2c">
            allowances<span class="_"> </span>or<span class="_"> </span>other
            <span class="_"> </span>deductive<span class="_"> </span>change
            <span class="_"> </span>orders.<span class="_ _18"> </span>The
            <span class="_ _f"> </span>CM’s<span class="_ _f"> </span>
            contingency<span class="_ _f"> </span>shall
            <span class="_ _f"></span>not<span class="_ _f"> </span>be
            <span class="_ _f"> </span>included<span class="_ _f"> </span>in
            <span class="_ _f"> </span>the<span class="_ _f"> </span>calculation
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws5f">
            or<span class="_ _12"> </span>payment<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM’s
            <span class="_ _12"> </span>fee.<span class="_ _18"> </span>Progress
            <span class="_ _12"> </span>payments<span class="_ _12"></span>for
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>performed<span class="_ _12"></span>by
            <span class="_"> </span>the<span class="_"> </span>contractors
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>paid<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws13d">
            the<span class="_ _19"> </span>work<span class="_"> </span>is
            <span class="_"></span>performed<span class="_"> </span>and
            <span class="_"> </span>approved<span class="_"> </span>in
            <span class="_"> </span>accordance<span class="_"> </span>with
            <span class="_"> </span>this<span class="_"> </span>Agreement.
            <span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>acknowledges<span class="_"> </span>that
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws32">
            Owner<span class="_ _6"> </span>only<span class="_ _14"> </span>has
            <span class="_ _6"> </span>funds<span class="_ _14"> </span>for
            <span class="_ _14"> </span>the<span class="_ _6"> </span>basic
            <span class="_ _14"> </span>services<span class="_"> </span>in
            <span class="_"> </span>Paragraphs<span class="_"> </span>3.2,
            <span class="_"> </span>3.3,<span class="_"> </span>and
            <span class="_"></span>3.4<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"></span>time
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>is
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws4">
            being<span class="_"> </span>executed<span class="_"> </span>and
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>is
            <span class="_"> </span>not<span class="_"></span>authorized
            <span class="_"> </span>to<span class="_"> </span>perform
            <span class="_"> </span>any<span class="_"> </span>services
            <span class="_ _f"> </span>in<span class="_ _f"> </span>Paragraphs
            <span class="_ _f"> </span>3.5<span class="_ _f"> </span>and
            <span class="_ _f"> </span>3.6<span class="_ _f"> </span>or
            <span class="_ _10"></span>any
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws1">
            other provisions of this <span class="_ _1"></span>Agreement without
            the express written permission of the Owner
            <span class="_ _20"></span>.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">36</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      <div id="pf25" class="pf w0 h0" data-page-no="25">
        <div class="pc pc25 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 wsab">
            7.4.2<span class="_"> </span>Payments
          </div>
          <div class="t m0 x8 h3 y20 ff2 fs0 fc0 sc0 ls0 ws13a">
            Payments<span class="_ _6"> </span>to<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM<span class="_ _14"> </span>shall
            <span class="_ _14"> </span>be<span class="_ _6"> </span>made
            <span class="_ _14"> </span>monthly<span class="_ _20"></span>,
            <span class="_ _14"> </span>not<span class="_ _6"> </span>later
            <span class="_ _14"> </span>than<span class="_"> </span>forty-five
            <span class="_"> </span>(45)<span class="_"> </span>days
            <span class="_"> </span>after<span class="_"> </span>receipt
            <span class="_"> </span>of<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1">
            CM’s Invoice by the Owner<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 wsc6">
            7.4.2.2<span class="_ _1c"> </span>Payments
            <span class="_ _12"></span>due<span class="_ _12"> </span>to
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>that<span class="_ _12"> </span>are
            <span class="_ _12"> </span>unpaid<span class="_ _12"> </span>for
            <span class="_ _12"> </span>more<span class="_ _12"> </span>than
            <span class="_ _12"> </span>forty-five<span class="_ _12"> </span>
            (45)<span class="_ _12"></span>days<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>due
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws1">
            CM’s invoice shall not bear interest from
            <span class="_ _0"></span>the due date.
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            7.4.3<span class="_ _16"> </span>Compensation for
            <span class="_ _1"></span>Additional Services
          </div>
          <div class="t m0 x8 h3 y13 ff2 fs0 fc0 sc0 ls0 wsa4">
            The<span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>be<span class="_"> </span>compensated,
            <span class="_"> </span>and<span class="_"> </span>payments
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>made<span class="_"></span>for
            <span class="_"> </span>performing<span class="_"> </span>Additional
            <span class="_"> </span>Services<span class="_"> </span>in
            <span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1">
            amount and on terms mutually agreeable between the Owner and CM.
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws1">
            7.4.4<span class="_ _16"> </span>Auditing Rights
          </div>
          <div class="t m0 x8 h3 y78 ff2 fs0 fc0 sc0 ls0 ws7">
            The<span class="_ _6"> </span>CM<span class="_ _14"> </span>shall
            <span class="_ _6"> </span>keep<span class="_ _14"> </span>all
            <span class="_ _14"> </span>records<span class="_ _6"> </span>and
            <span class="_"> </span>supporting<span class="_"> </span>
            documentation<span class="_"> </span>which<span class="_"> </span>
            concern<span class="_"> </span>or<span class="_"> </span>relate
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>work,
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws15c">
            general<span class="_"> </span>conditions,<span class="_"> </span>or
            <span class="_"> </span>other<span class="_"> </span>monies
            <span class="_"></span>paid<span class="_"> </span>hereunder
            <span class="_"> </span>for<span class="_"> </span>a
            <span class="_"> </span>minimum<span class="_"></span>of
            <span class="_"> </span>three<span class="_"> </span>(3)
            <span class="_"></span>years<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>date
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws3a">
            termination<span class="_"> </span>of<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"> </span>date
            <span class="_"></span>the<span class="_"> </span>Project
            <span class="_"> </span>achieves<span class="_"> </span>final
            <span class="_"> </span>completion.<span class="_ _18"> </span>The
            <span class="_"> </span>CM<span class="_ _f"> </span>shall
            <span class="_ _f"> </span>require<span class="_ _f"> </span>all
            <span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws5a">
            its<span class="_ _6"> </span>subcontractors
            <span class="_ _14"></span>to<span class="_ _6"> </span>likewise
            <span class="_"> </span>retain<span class="_"> </span>all
            <span class="_"> </span>of<span class="_"></span>their
            <span class="_"> </span>Project<span class="_"> </span>records
            <span class="_"> </span>and<span class="_"> </span>supporting
            <span class="_"> </span>documentation.<span class="_ _18"></span>The
            <span class="_"> </span>Owner<span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws120">
            and<span class="_ _12"> </span>any<span class="_ _12"> </span>duly
            <span class="_ _12"> </span>authorized<span class="_"> </span>agents
            <span class="_"> </span>or<span class="_"> </span>representatives
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _20"></span>,
            <span class="_"></span>shall<span class="_"> </span>be
            <span class="_"> </span>provided<span class="_"> </span>access
            <span class="_"> </span>to<span class="_"> </span>all
            <span class="_"> </span>such<span class="_"></span>records
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws15d">
            and<span class="_"> </span>supporting<span class="_"> </span>
            documentation<span class="_"> </span>during<span class="_"> </span>
            normal<span class="_"> </span>business<span class="_"> </span>hours
            <span class="_"> </span>upon<span class="_"> </span>reasonable
            <span class="_"> </span>request<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws5d">
            Further<span class="_ _1"></span>,<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>and<span class="_"></span>any
            <span class="_"> </span>duly<span class="_"> </span>authorized
            <span class="_"> </span>agents<span class="_"> </span>or
            <span class="_"> </span>representatives<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>,<span class="_"> </span>shall
            <span class="_"> </span>have<span class="_"></span>the
            <span class="_"> </span>right<span class="_ _f"> </span>to
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws3b">
            audit,<span class="_ _12"> </span>inspect<span class="_"> </span>and
            <span class="_"> </span>copy<span class="_"> </span>all
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"></span>and
            <span class="_"> </span>any<span class="_"> </span>contracto
            <span class="_ _0"></span>r<span class="_ _3"></span>’s
            <span class="_"> </span>Project<span class="_"> </span>records
            <span class="_"> </span>and<span class="_"> </span>documentation.
            <span class="_ _1c"> </span>The<span class="_"></span>access,
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
            inspection, copying and auditing rights shall survive the
            termination of this <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws1">
            7.5<span class="_ _e"> </span>Adjustments to the CM’s Compensation
          </div>
          <div class="t m0 x8 h3 y7c ff2 fs0 fc0 sc0 ls0 ws15e">
            The<span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_"> </span>notify<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>as
            <span class="_"> </span>specified<span class="_"> </span>in
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>when<span class="_"> </span>material
            <span class="_"> </span>changes<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>scope
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws32">
            the<span class="_"> </span>Project<span class="_"> </span>or
            <span class="_"></span>a<span class="_"> </span>part
            <span class="_"> </span>thereof<span class="_"></span>or
            <span class="_"> </span>when<span class="_"> </span>delays
            <span class="_"></span>caused<span class="_"> </span>in
            <span class="_"> </span>whole<span class="_"></span>or
            <span class="_"> </span>in<span class="_"> </span>part
            <span class="_"></span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>or
            <span class="_"> </span>Design<span class="_"> </span>Consultant
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws21">
            are<span class="_ _12"> </span>expected<span class="_ _12"> </span>
            to<span class="_ _12"> </span>increase<span class="_"> </span>or
            <span class="_"> </span>extend<span class="_"> </span>the
            <span class="_"></span>Project’s<span class="_"> </span>critical
            <span class="_"> </span>path<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"></span>scop
            <span class="_ _0"></span>e<span class="_"> </span>or
            <span class="_"></span>duration<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM’s
            <span class="_"> </span>services.<span class="_ _1c"> </span>If
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 wsc0">
            the<span class="_ _6"> </span>change<span class="_ _14"> </span>
            results<span class="_ _6"> </span>in<span class="_"> </span>a
            <span class="_"></span>delay<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>Project’s
            <span class="_"> </span>critical<span class="_"> </span>path
            <span class="_"> </span>or<span class="_"> </span>a
            <span class="_"></span>material<span class="_"> </span>increase
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>Project’s<span class="_"></span>scope,
            <span class="_"> </span>th<span class="_ _0"></span>e
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 wscf">
            CM<span class="_ _12"> </span>shall<span class="_ _12"> </span>be
            <span class="_ _12"> </span>entitled<span class="_ _12"> </span>to
            <span class="_ _12"> </span>receive<span class="_ _12"> </span>an
            <span class="_"> </span>increase<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>duration
            <span class="_"> </span>of<span class="_"></span>this
            <span class="_"> </span>Agreement<span class="_"> </span>and/or
            <span class="_"> </span>additional<span class="_"> </span>
            compensation
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
            for the change in accordance with this
            <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            7.6<span class="_ _e"> </span>Liquidated Damages
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 wsee">
            7.6.1<span class="_ _16"> </span>Should<span class="_ _12"> </span>
            the<span class="_ _12"> </span>CM<span class="_ _12"> </span>fail
            <span class="_ _12"> </span>to<span class="_ _12"> </span>
            substantially<span class="_ _12"> </span>complete
            <span class="_"></span>the<span class="_"> </span>Project
            <span class="_"> </span>or<span class="_"></span>phase
            <span class="_"> </span>on<span class="_"> </span>or
            <span class="_"></span>before<span class="_"> </span>the
            <span class="_"> </span>date<span class="_"></span>stipulated
            <span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws15f">
            substantial<span class="_ _6"> </span>completion
            <span class="_ _14"></span>of<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Project<span class="_ _6"> </span>(or
            <span class="_ _14"> </span>such<span class="_ _14"> </span>later
            <span class="_ _6"> </span>date<span class="_ _14"> </span>as
            <span class="_ _6"> </span>may<span class="_ _14"> </span>result
            <span class="_ _6"> </span>from<span class="_ _14"> </span>extension
            <span class="_ _14"></span>of<span class="_ _6"> </span>time
            <span class="_ _14"> </span>granted<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws18">
            Owner),<span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>pay
            <span class="_ _12"> </span>or<span class="_ _12"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>may
            <span class="_"></span>retain<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>funds
            <span class="_"> </span>otherwise<span class="_"> </span>to
            <span class="_"> </span>be<span class="_"> </span>paid
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>the
            <span class="_"> </span>sum<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws44">
            $F23_______<span class="_"> </span>as<span class="_"> </span>
            substantial<span class="_"> </span>completion<span class="_"></span>
            liquidated<span class="_"> </span>damages<span class="_"> </span>for
            <span class="_"> </span>each<span class="_"> </span>consecutive
            <span class="_"> </span>calendar<span class="_"> </span>day
            <span class="_"> </span>beyond<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws8c">
            date<span class="_"> </span>established<span class="_"> </span>in
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>that<span class="_"> </span>Project
            <span class="_ _6"> </span>fails<span class="_ _14"> </span>to
            <span class="_ _6"> </span>achieve<span class="_ _14"> </span>
            substantial<span class="_ _6"> </span>completion
            <span class="_ _14"></span>as<span class="_ _6"> </span>defined
            <span class="_ _14"> </span>in<span class="_ _14"> </span>this
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws4">
            Agreement,<span class="_ _6"> </span>which<span class="_"> </span>
            sum<span class="_"> </span>is<span class="_"> </span>agreed
            <span class="_"></span>upon<span class="_"> </span>as
            <span class="_"> </span>a<span class="_"></span>reasonable
            <span class="_"> </span>and<span class="_"> </span>proper
            <span class="_"> </span>measure<span class="_"> </span>of
            <span class="_"> </span>damages<span class="_"> </span>which
            <span class="_"></span>the<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 wsf7">
            will<span class="_ _12"> </span>sustain<span class="_ _12"> </span>
            per<span class="_"> </span>day<span class="_"> </span>by
            <span class="_"></span>failure<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>to<span class="_"> </span>complete
            <span class="_"></span>work<span class="_"> </span>within
            <span class="_"> </span>time<span class="_"></span>as
            <span class="_"> </span>stipulated;<span class="_"> </span>it
            <span class="_"> </span>being<span class="_"> </span>recognized
            <span class="_"> </span>by<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1a">
            Owner<span class="_ _6"> </span>and<span class="_ _14"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>that
            <span class="_"></span>the<span class="_"> </span>injury
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>which
            <span class="_"></span>could<span class="_"> </span>result
            <span class="_"> </span>from<span class="_"> </span>a
            <span class="_"> </span>failure<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>to<span class="_"> </span>complete
            <span class="_"> </span>on
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws26">
            schedule<span class="_"> </span>is<span class="_"> </span>uncertain
            <span class="_"> </span>and<span class="_"> </span>cannot
            <span class="_"> </span>be<span class="_"> </span>computed
            <span class="_"> </span>exactly<span class="_ _20"></span>.
            <span class="_ _18"> </span>This<span class="_"> </span>amount
            <span class="_"> </span>is<span class="_"> </span>the
            <span class="_"></span>minimum<span class="_"> </span>measure
            <span class="_"> </span>of<span class="_"> </span>damages
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1f">
            the<span class="_ _12"> </span>Owner<span class="_ _12"> </span>will
            <span class="_ _12"> </span>sustain<span class="_"> </span>due
            <span class="_"> </span>to<span class="_"> </span>delay
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>completion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>work,
            <span class="_"> </span>which<span class="_"></span>shall
            <span class="_"> </span>include<span class="_"> </span>but
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>limited<span class="_"> </span>to
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws42">
            loss<span class="_"> </span>of<span class="_"> </span>use
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>facilities,<span class="_"> </span>the
            <span class="_"> </span>relocation<span class="_"> </span>of
            <span class="_"> </span>students<span class="_"> </span>and
            <span class="_"> </span>services,<span class="_"> </span>the
            <span class="_"> </span>cost<span class="_ _f"> </span>of
            <span class="_ _f"> </span>Owner<span class="_ _3"></span>’s
            <span class="_ _f"> </span>time<span class="_ _f"> </span>and
            <span class="_ _f"> </span>resources,
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws66">
            damage<span class="_"> </span>to<span class="_"> </span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>reputation,
            <span class="_"> </span>and<span class="_"> </span>storage
            <span class="_"> </span>of<span class="_"></span>furniture
            <span class="_ _12"> </span>and<span class="_ _12"> </span>other
            <span class="_ _12"> </span>materials.<span class="_ _18"></span>The
            <span class="_ _12"> </span>inability<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>to
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1">
            quantify actual damages shall not prevent the recovery of liquidated
            damages.
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws160">
            7.6.2<span class="_ _16"> </span>For<span class="_ _12"> </span>each
            <span class="_ _12"> </span>consecutive<span class="_ _12"></span>
            calendar<span class="_ _12"> </span>day<span class="_ _12"> </span>
            that<span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>remains<span class="_ _12"> </span>
            incomplete<span class="_ _18"> </span>after
            <span class="_ _12"></span>the<span class="_"> </span>date
            <span class="_"> </span>established<span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws4">
            final<span class="_"> </span>completion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>Project,
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>pay
            <span class="_"> </span>or<span class="_"> </span>Owner
            <span class="_ _f"></span>will<span class="_ _f"> </span>retain
            <span class="_ _f"> </span>from<span class="_ _f"> </span>the
            <span class="_ _f"> </span>compensation<span class="_ _f"> </span>
            otherwise<span class="_ _f"></span>to<span class="_ _10"> </span>be
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws26">
            paid<span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>the
            <span class="_"> </span>sum<span class="_"></span>of
            <span class="_ _f"> </span>$F24______as<span class="_ _f"> </span>
            final<span class="_ _f"> </span>completion<span class="_ _f"></span>
            liquidated<span class="_ _f"> </span>damages.
            <span class="_ _1c"></span>This<span class="_ _10"> </span>amount
            <span class="_ _f"> </span>is<span class="_ _f"> </span>agreed
            <span class="_ _f"> </span>upon
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws21">
            as<span class="_"> </span>a<span class="_"> </span>reasonable
            <span class="_"></span>and<span class="_"> </span>proper
            <span class="_"> </span>measure<span class="_"> </span>of
            <span class="_"> </span>damages<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>will
            <span class="_"> </span>sustain<span class="_"> </span>due
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>delay<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>completion
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws91">
            all<span class="_ _19"> </span>remedial<span class="_ _19"> </span>
            work,<span class="_ _19"> </span>the<span class="_ _19"> </span>
            delay<span class="_ _19"> </span>in<span class="_ _19"> </span>the
            <span class="_ _19"> </span>correction<span class="_ _19"></span>of
            <span class="_ _19"> </span>the<span class="_ _19"> </span>deficient
            <span class="_"> </span>work,<span class="_"> </span>the
            <span class="_"> </span>disruption<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"> </span>school
            <span class="_"></span>and<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 wsd3">
            learning<span class="_ _19"> </span>environment,
            <span class="_ _19"></span>the<span class="_ _19"> </span>cost
            <span class="_ _19"> </span>of<span class="_ _19"> </span>Owner
            <span class="_ _3"></span>’s<span class="_ _19"> </span>time
            <span class="_ _19"> </span>and<span class="_ _19"> </span>
            resources,<span class="_ _19"></span>damage
            <span class="_ _19"> </span>to<span class="_ _19"> </span>Owner
            <span class="_ _3"></span>’s<span class="_ _5"> </span>reputation,
            <span class="_ _19"> </span>and<span class="_"> </span>the
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">37</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      <div id="pf26" class="pf w0 h0" data-page-no="26">
        <div class="pc pc26 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws26">
            inability<span class="_"> </span>to<span class="_"> </span>use
            <span class="_"></span>the<span class="_"> </span>facilities
            <span class="_"> </span>fully<span class="_ _20"></span>.
            <span class="_ _18"> </span>This<span class="_"> </span>amount
            <span class="_"> </span>is<span class="_"></span>in
            <span class="_"> </span>addition<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>liquidated
            <span class="_"> </span>damages<span class="_ _f"> </span>prescribed
            <span class="_ _f"></span>above<span class="_ _f"> </span>for
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            substantial completion.
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws20">
            7.6.3<span class="_ _16"> </span>The<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>liquidated
            <span class="_"> </span>damages<span class="_ _6"> </span>set
            <span class="_ _14"> </span>forth<span class="_ _6"> </span>in
            <span class="_ _14"> </span>Paragraphs<span class="_ _6"> </span>
            7.6.1<span class="_ _14"> </span>and<span class="_ _6"> </span>7.6.2
            <span class="_ _14"> </span>hereinabove<span class="_ _14"></span>
            shall<span class="_ _6"> </span>be
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws161">
            assessed<span class="_ _19"> </span>cumulatively
            <span class="_ _20"></span>.<span class="_ _19"> </span>The
            <span class="_ _19"> </span>items<span class="_ _19"> </span>of
            <span class="_"> </span>cost<span class="_"> </span>included
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>assessment<span class="_"> </span>of
            <span class="_"> </span>liquidated<span class="_"> </span>damages
            <span class="_"> </span>are<span class="_"> </span>defined
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws162">
            above.<span class="_ _1a"> </span>This<span class="_"> </span>
            provision<span class="_"> </span>of<span class="_"> </span>
            liquidated<span class="_"> </span>damages<span class="_"> </span>
            does<span class="_"> </span>not<span class="_"> </span>bar
            <span class="_"></span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>right<span class="_"></span>to
            <span class="_"> </span>enforce<span class="_"> </span>other
            <span class="_"></span>rights<span class="_"> </span>and
            <span class="_"> </span>remedies
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 wse">
            against<span class="_"> </span>CM,<span class="_"> </span>including
            <span class="_"> </span>but<span class="_"> </span>not
            <span class="_"> </span>limited<span class="_"> </span>to,
            <span class="_"></span>specific<span class="_"> </span>performance
            <span class="_"> </span>or<span class="_ _12"> </span>injunctive
            <span class="_ _12"> </span>relief.<span class="_ _12"> </span>In
            <span class="_ _12"> </span>no<span class="_ _12"> </span>way
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>costs
            <span class="_ _12"> </span>for
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            liquidated damages be construed as a penalty to the CM.
          </div>
          <div class="t m0 x3 h3 yb5 ff2 fs0 fc0 sc0 ls0 wsc">
            7.6.4<span class="_ _16"> </span>Notwithstanding
            <span class="_ _12"></span>any<span class="_ _12"> </span>other
            <span class="_ _12"> </span>provisions<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>Agreement,
            <span class="_"> </span>if<span class="_"> </span>there
            <span class="_"> </span>is<span class="_"></span>concurrent
            <span class="_"> </span>delay<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>completion
          </div>
          <div class="t m0 x3 h3 yb6 ff2 fs0 fc0 sc0 ls0 ws42">
            of<span class="_"> </span>the<span class="_"> </span>work,
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>liable<span class="_"> </span>for
            <span class="_"></span>liquidated<span class="_ _f"> </span>damages
            <span class="_ _f"></span>as<span class="_ _f"> </span>specified
            <span class="_ _f"> </span>in<span class="_ _f"> </span>this
            <span class="_ _f"> </span>Agreement<span class="_ _10"> </span>
            during<span class="_ _f"></span>such<span class="_ _f"> </span>
            period
          </div>
          <div class="t m0 x3 h3 yb7 ff2 fs0 fc0 sc0 ls0 ws42">
            of<span class="_"> </span>concurrent<span class="_"> </span>delay
            <span class="_ _20"></span>.<span class="_ _18"> </span>For
            <span class="_ _f"> </span>the<span class="_ _f"> </span>purpose
            <span class="_ _10"> </span>of<span class="_ _f"> </span>this
            <span class="_ _f"> </span>section<span class="_ _f"> </span>7.6,
            <span class="_ _f"> </span>concurrent<span class="_ _f"> </span>
            delay<span class="_ _10"> </span>means<span class="_ _f"> </span>(a)
            <span class="_ _f"> </span>a<span class="_ _f"> </span>delay
            <span class="_ _f"> </span>event<span class="_ _f"> </span>caused
            <span class="_ _10"> </span>in
          </div>
          <div class="t m0 x3 h3 yb8 ff2 fs0 fc0 sc0 ls0 ws14">
            part<span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_"> </span>or
            <span class="_"></span>its<span class="_"> </span>agent
            <span class="_"> </span>and<span class="_"></span>in
            <span class="_"> </span>part<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>or<span class="_"></span>its
            <span class="_"> </span>contractors,<span class="_"> </span>
            subcontractors,<span class="_"> </span>sub-subcontractos,
            <span class="_"></span>or
          </div>
          <div class="t m0 x3 h3 yb9 ff2 fs0 fc0 sc0 ls0 ws28">
            (b)<span class="_ _6"> </span>one<span class="_ _14"> </span>or
            <span class="_ _6"></span>more<span class="_ _14"> </span>delay
            <span class="_"> </span>event<span class="_"> </span>caused
            <span class="_"> </span>solely<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>its
            <span class="_"></span>agents,<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"></span>Design
            <span class="_"> </span>Consultant,<span class="_"> </span>and
            <span class="_"> </span>one<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 yba ff2 fs0 fc0 sc0 ls0 ws66">
            more<span class="_"> </span>delay<span class="_"> </span>event
            <span class="_"></span>caused<span class="_"> </span>in
            <span class="_"> </span>part<span class="_"></span>by
            <span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>subcontractors,<span class="_"> </span>
            sub-subcontractors<span class="_ _12"></span>or
            <span class="_ _12"> </span>agents,<span class="_ _12"> </span>each
            <span class="_ _12"> </span>of<span class="_ _12"> </span>which
          </div>
          <div class="t m0 x3 h3 ybb ff2 fs0 fc0 sc0 ls0 ws4">
            would<span class="_"> </span>have<span class="_"> </span>resulted
            <span class="_"> </span>in<span class="_"> </span>a
            <span class="_"></span>delay<span class="_"> </span>without
            <span class="_"> </span>the<span class="_"> </span>other
            <span class="_"> </span>and<span class="_"></span>which
            <span class="_"> </span>delays<span class="_"> </span>run
            <span class="_"></span>concurrently<span class="_ _20"></span>,
            <span class="_ _f"> </span>or<span class="_ _f"> </span>at
            <span class="_ _f"> </span>the<span class="_ _f"></span>same
            <span class="_ _10"> </span>time.<span class="_ _1c"> </span>In
          </div>
          <div class="t m0 x3 h3 ybc ff2 fs0 fc0 sc0 ls0 ws163">
            the<span class="_ _15"> </span>event<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"> </span>foregoing
            <span class="_"> </span>provision<span class="_"> </span>making
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>liable<span class="_"> </span>for
            <span class="_"> </span>liquidated<span class="_"> </span>damages
            <span class="_"> </span>during<span class="_"> </span>a
            <span class="_"> </span>period<span class="_"></span>of
          </div>
          <div class="t m0 x3 h3 ybd ff2 fs0 fc0 sc0 ls0 ws26">
            concurrent<span class="_"> </span>delay<span class="_"> </span>is
            <span class="_"> </span>found<span class="_"> </span>to
            <span class="_"></span>be<span class="_"> </span>unenforcable,
            <span class="_"> </span>then<span class="_"> </span>the
            <span class="_"> </span>parties<span class="_"></span>agree
            <span class="_"> </span>that<span class="_"> </span>in
            <span class="_"></span>the<span class="_ _f"> </span>event
            <span class="_ _f"> </span>of<span class="_ _f"> </span>a
            <span class="_ _f"> </span>concurrent<span class="_ _f"> </span>
            delay<span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y87 ff2 fs0 fc0 sc0 ls0 ws92">
            the<span class="_ _12"> </span>extent<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>delay
            <span class="_ _12"> </span>will<span class="_ _12"> </span>be
            <span class="_ _12"> </span>apportioned<span class="_ _12"></span>
            between<span class="_ _12"> </span>the<span class="_ _12"> </span>
            Owner<span class="_ _12"> </span>and<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM,<span class="_ _12"> </span>and
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>will<span class="_"> </span>be
            <span class="_"></span>responsible
          </div>
          <div class="t m0 x3 h3 y88 ff2 fs0 fc0 sc0 ls0 ws98">
            for<span class="_ _12"> </span>liquidated<span class="_"> </span>
            damages<span class="_"> </span>as<span class="_"> </span>set
            <span class="_"></span>forth<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>section
            <span class="_"> </span>7.6<span class="_"> </span>for
            <span class="_"></span>those<span class="_"> </span>portions
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>delay<span class="_ _1c"></span>which
            <span class="_"> </span>are<span class="_"> </span>apportioned
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y89 ff2 fs0 fc0 sc0 ls0 ws1">
            the CM, its subconctractors, sub-subcontractors, agents or material
            suppliers.
          </div>
          <div class="t m0 x3 h3 ybe ff2 fs0 fc0 sc0 ls0 wse">
            7.6.5<span class="_ _16"> </span>The<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>liquidated
            <span class="_"> </span>damages<span class="_"> </span>set
            <span class="_"> </span>forth<span class="_"> </span>in
            <span class="_"></span>Paragraphs<span class="_"> </span>7.6.1
            <span class="_"> </span>and<span class="_"> </span>7.6.2
            <span class="_"> </span>hereinabove<span class="_"> </span>shall
            <span class="_"> </span>not
          </div>
          <div class="t m0 x3 h3 ybf ff2 fs0 fc0 sc0 ls0 ws41">
            include<span class="_ _6"> </span>additional
            <span class="_ _14"></span>legal<span class="_"> </span>or
            <span class="_"> </span>design<span class="_"></span>professional
            <span class="_"> </span>costs<span class="_"> </span>that
            <span class="_"> </span>may<span class="_"> </span>result
            <span class="_"></span>from<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"></span>default.
            <span class="_ _18"> </span>If<span class="_"> </span>such
            <span class="_"> </span>legal<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 yc0 ff2 fs0 fc0 sc0 ls0 ws3a">
            design<span class="_"> </span>professional<span class="_"> </span>
            costs<span class="_"> </span>are<span class="_"> </span>incurred
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _20"></span>,
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>liable<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>for<span class="_"> </span>those
            <span class="_ _f"></span>costs<span class="_ _10"> </span>in
          </div>
          <div class="t m0 x3 h3 yc1 ff2 fs0 fc0 sc0 ls0 ws1">
            addition to the liquidated damages amount set forth hereinabove and
            in 7.7 Summary of Monetary <span class="_ _20"></span>Amounts.
          </div>
          <div class="t m0 x18 h3 yc2 ff2 fs0 fc0 sc0 ls0 ws10">
            7.7<span class="_ _2a"> </span>The<span class="_"> </span>following
            <span class="_"> </span>summary<span class="_"> </span>is
            <span class="_"> </span>intended<span class="_"> </span>to
            <span class="_"></span>provide<span class="_"> </span>a
            <span class="_"> </span>single<span class="_"></span>location
            <span class="_"> </span>for<span class="_"> </span>all
            <span class="_"></span>relevant<span class="_ _12"> </span>monetary
            <span class="_ _12"></span>amounts
          </div>
          <div class="t m0 x18 h3 yc3 ff2 fs0 fc0 sc0 ls0 ws1">
            included<span class="_ _19"> </span>in<span class="_ _19"> </span>
            this<span class="_ _19"> </span>Agreement<span class="_ _19"></span>
            as<span class="_ _19"> </span>of<span class="_ _19"> </span>the
            <span class="_ _19"> </span>date<span class="_ _19"> </span>of
            <span class="_ _19"> </span>execution<span class="_ _19"> </span>of
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Agreement.{" "}
            <span class="_ _14"> </span>The<span class="_ _6"></span>following
            <span class="_ _14"> </span>list<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>take
          </div>
          <div class="t m0 x18 h3 yc4 ff2 fs0 fc0 sc0 ls0 ws1">
            precedence<span class="_ _19"> </span>over
            <span class="_ _19"></span>any<span class="_ _19"> </span>
            inconsistencies<span class="_ _19"></span>in
            <span class="_ _19"> </span>the<span class="_ _19"> </span>amounts
            <span class="_ _19"> </span>otherwise<span class="_ _19"></span>
            incorporated<span class="_ _19"> </span>into
            <span class="_ _19"></span>this<span class="_ _19"> </span>
            Agreement.
            <span class="_ _19"> </span>The
          </div>
          <div class="t m0 x18 h3 yc5 ff2 fs0 fc0 sc0 ls0 ws1">
            amounts<span class="_ _12"> </span>in<span class="_ _12"> </span>
            this<span class="_ _12"> </span>Agreement<span class="_ _12"></span>
            shall<span class="_ _12"> </span>only<span class="_ _12"> </span>be
            <span class="_ _12"> </span>revised<span class="_ _12"> </span>by
            <span class="_ _12"> </span>written<span class="_ _12"> </span>
            agreement<span class="_ _12"> </span>between
            <span class="_ _12"></span>the<span class="_"> </span>parties.
            <span class="_"> </span>The<span class="_"> </span>monetary
          </div>
          <div class="t m0 x18 h3 yc6 ff2 fs0 fc0 sc0 ls0 ws1">
            amounts follow:
          </div>
          <div class="t m0 x8 h3 yc7 ff2 fs0 fc0 sc0 ls0 ws164">
            GMP<span class="_"> </span>$F25________
          </div>
          <div class="t m0 x8 h3 yc8 ff2 fs0 fc0 sc0 ls0 ws1">
            Cost of Work<span class="_ _2c"> </span>$ F26________
          </div>
          <div class="t m0 x8 h3 yc9 ff2 fs0 fc0 sc0 ls0 ws1">
            CM Preconstruction Fee<span class="_ _2d"> </span>$F27________
          </div>
          <div class="t m0 x8 h3 yca ff2 fs0 fc0 sc0 ls0 ws1">
            CM Construction Fee<span class="_ _2e"> </span>$F28________
          </div>
          <div class="t m0 x8 h3 ycb ff2 fs0 fc0 sc0 ls0 ws1">
            CM Construction Contingency<span class="_ _2f"> </span>$F29________
          </div>
          <div class="t m0 x8 h3 ycc ff2 fs0 fc0 sc0 ls0 ws1">
            Owner Contingency<span class="_ _30"> </span>$F30________
          </div>
          <div class="t m0 x8 h3 ycd ff2 fs0 fc0 sc0 ls0 ws1">
            General Conditions<span class="_ _31"> </span>$F31________
          </div>
          <div class="t m0 x8 h3 yce ff2 fs0 fc0 sc0 ls0 ws1">
            Liquidated Damages-Substantial<span class="_ _32"> </span>
            $F32______/Day
          </div>
          <div class="t m0 x8 h3 ycf ff2 fs0 fc0 sc0 ls0 ws1">
            Liquidated Damages – Final<span class="_ _33"> </span>$F33______/day
          </div>
          <div class="t m0 x6 h2 yd0 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 8</div>
          <div class="t m0 x19 h3 yd1 ff2 fs0 fc0 sc0 ls0 ws1">
            INSURANCE <span class="_ _1"></span>AND MUTUAL
            <span class="_ _1"></span>
            INDEMNITY
          </div>
          <div class="t m0 x7 h2 yd2 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 yd3 ff2 fs0 fc0 sc0 ls0 ws1">
            8.1<span class="_ _e"> </span>CM’s Liability Insurance
          </div>
          <div class="t m0 x3 h3 yd4 ff2 fs0 fc0 sc0 ls0 ws10">
            8.1.1<span class="_ _16"> </span>The<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>purchase
            <span class="_"> </span>at<span class="_"> </span>their
            <span class="_"> </span>own<span class="_"></span>expense
            <span class="_"> </span>and<span class="_"> </span>maintain
            <span class="_ _12"> </span>in<span class="_ _12"> </span>companies
            <span class="_ _12"> </span>properly<span class="_ _12"></span>
            licensed<span class="_ _12"> </span>by<span class="_ _12"> </span>
            the
          </div>
          <div class="t m0 x3 h3 yd5 ff2 fs0 fc0 sc0 ls0 ws26">
            department<span class="_"> </span>of<span class="_"> </span>
            insurance<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>State<span class="_"> </span>of
            <span class="_"> </span>North<span class="_"></span>Carolina
            <span class="_"> </span>and<span class="_"> </span>rated
            <span class="_"> </span>“a”<span class="_"> </span>or
            <span class="_"></span>better<span class="_"> </span>by
            <span class="_"> </span>a.m.<span class="_ _f"></span>best
            <span class="_ _f"> </span>company<span class="_ _f"> </span>as
            <span class="_ _f"> </span>will
          </div>
          <div class="t m0 x3 h3 yd6 ff2 fs0 fc0 sc0 ls0 ws3b">
            protect<span class="_"> </span>it,<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>the<span class="_"></span>Design
            <span class="_"> </span>Consultant<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>agents,
            <span class="_"> </span>representatives,<span class="_"></span>and
            <span class="_"> </span>employees<span class="_"> </span>from
            <span class="_"> </span>claims<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 yd7 ff2 fs0 fc0 sc0 ls0 ws21">
            set<span class="_"> </span>forth<span class="_"> </span>below
            <span class="_"></span>which<span class="_"> </span>may
            <span class="_"> </span>arise<span class="_"></span>out
            <span class="_"> </span>of<span class="_"> </span>or
            <span class="_"></span>result<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>CM’s
            <span class="_"> </span>ope<span class="_ _0"></span>rations
            <span class="_"> </span>under<span class="_"> </span>the
            <span class="_"> </span>Agreement,<span class="_"> </span>whether
            <span class="_"> </span>such
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">38</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      {/* <div id="pf27" class="pf w0 h0" data-page-no="27">
        <div class="pc pc27 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws165">
            operations<span class="_ _12"> </span>be<span class="_ _12"> </span>
            by<span class="_ _12"> </span>itself<span class="_ _12"> </span>or
            <span class="_ _12"> </span>by<span class="_ _12"> </span>any
            <span class="_ _12"> </span>contractor<span class="_ _12"></span>or
            <span class="_ _12"> </span>subcontractor<span class="_ _12"></span>
            or<span class="_ _12"> </span>by<span class="_ _12"> </span>anyone
            <span class="_ _12"> </span>directly<span class="_ _12"></span>or
            <span class="_"> </span>indirectly<span class="_"> </span>employed
            <span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            any of them, or by anyone for whose acts any of them may be legally
            liable:
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.1<span class="_ _1c"> </span>W<span class="_ _0"></span>orker
            <span class="_ _3"></span>’s compensation, including occupational
            disease and employer’s liability insurance.
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.1.1 Statutory coverage as required by the State of North
            Carolina worker’s compensation laws.
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws166">
            8.1.1.1.2<span class="_ _13"> </span>Employer’s
            <span class="_"></span>Liability<span class="_"> </span>-
            <span class="_"> </span>at<span class="_"></span>least
            <span class="_"> </span>$1,000,000<span class="_"> </span>each
            <span class="_"> </span>accident,<span class="_"> </span>$1,000,000
            <span class="_"> </span>disease<span class="_"> </span>-
            <span class="_"> </span>each<span class="_"> </span>employee,
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            $1,000,000 disease - policy limit (or suffi
            <span class="_ _0"></span>cient limits to meet the requirements of
            the umbrella insurance.
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws128">
            8.1.1.2<span class="_ _1c"> </span>Commercial
            <span class="_ _19"></span>General<span class="_ _19"> </span>
            Liability<span class="_ _19"></span>Insurance
            <span class="_"> </span>-<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>obtain<span class="_"></span>and
            <span class="_"> </span>maintain<span class="_"> </span>during
            <span class="_"> </span>the<span class="_"> </span>life
            <span class="_"></span>of<span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws21">
            Agreement<span class="_ _12"> </span>such
            <span class="_ _12"> </span>commercial<span class="_ _12"> </span>
            general<span class="_"></span>liability<span class="_"> </span>
            insurance<span class="_"> </span>as<span class="_"> </span>shall
            <span class="_"> </span>protect<span class="_"></span>it
            <span class="_"> </span>and<span class="_"> </span>any
            <span class="_"></span>contractor<span class="_"> </span>or
            <span class="_"> </span>subcontractor
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws139">
            performing<span class="_"> </span>work<span class="_"> </span>under
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>from<span class="_"> </span>claims
            <span class="_"> </span>for<span class="_"> </span>damages
            <span class="_"> </span>for<span class="_"> </span>bodily
            <span class="_ _f"> </span>injury<span class="_ _20"></span>,
            <span class="_ _f"> </span>including<span class="_ _f"> </span>
            accidental<span class="_ _f"> </span>death,
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 wsa6">
            as<span class="_"> </span>well<span class="_"> </span>as
            <span class="_"></span>from<span class="_"> </span>claims
            <span class="_"> </span>for<span class="_"></span>property
            <span class="_"> </span>damage<span class="_"> </span>which
            <span class="_"> </span>may<span class="_"> </span>arise
            <span class="_"></span>either<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>operations
            <span class="_ _f"> </span>or<span class="_ _f"> </span>from
            <span class="_ _f"> </span>a<span class="_ _f"> </span>contractor
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws79">
            or<span class="_"> </span>subcontractor<span class="_"> </span>or
            <span class="_"> </span>by<span class="_ _6"> </span>anyone
            <span class="_ _14"></span>directly<span class="_ _6"> </span>or
            <span class="_ _14"> </span>indirectly<span class="_ _6"> </span>
            employed<span class="_ _14"></span>by<span class="_ _14"> </span>
            them.<span class="_ _1d"> </span>The<span class="_ _14"> </span>CM
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>procure
            <span class="_ _14"> </span>insurance
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws161">
            coverage<span class="_ _19"> </span>for<span class="_ _19"> </span>
            direct<span class="_ _19"> </span>operations,
            <span class="_ _19"></span>sublet<span class="_ _19"> </span>work,
            <span class="_"> </span>elevators,<span class="_"> </span>
            contractual<span class="_"></span>liability<span class="_"> </span>
            and<span class="_"> </span>completed<span class="_"> </span>
            operations<span class="_"> </span>with
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws1">
            limits not less than those stated below:
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.2.1 Bodily Injury &amp; Property Damage Liability: $1,000,000
            each occurrence
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.2.2 Personal Injury &amp;
            <span class="_ _1"></span>Advertising Liability - $1,000,000 each
            occurrence
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.2.3 General <span class="_ _1"></span>Aggregate - $2,000,000
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.2.4 Products/completed operations aggregate - $2,000,000
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.2.5 <span class="_ _1"></span>Aggregate limits shall be
            endorsed to apply on a ‘per Project’<span class="_ _1"></span> basis
            as respects this <span class="_ _1"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws4">
            8.1.1.2.6<span class="_"> </span>Completed<span class="_"> </span>
            Operations<span class="_"> </span>Liability:
            <span class="_ _f"></span>continuous<span class="_ _f"> </span>
            coverage<span class="_ _f"></span>shall<span class="_ _f"> </span>be
            <span class="_ _f"> </span>maintained<span class="_ _f"> </span>in
            <span class="_ _10"> </span>force<span class="_ _f"> </span>for
            <span class="_ _f"> </span>a<span class="_ _f"> </span>period
            <span class="_ _f"> </span>of<span class="_ _f"> </span>six
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            (6) years following the date of final completion of the work.
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws150">
            8.1.1.3<span class="_ _23"> </span>Business
            <span class="_ _15"></span>Automobile<span class="_ _15"> </span>
            Liability<span class="_ _15"></span>Insurance,
            <span class="_ _15"> </span>including<span class="_ _15"></span>
            coverage<span class="_ _15"> </span>for<span class="_ _15"> </span>
            owned,<span class="_ _15"> </span>non-owned<span class="_"> </span>
            and<span class="_"> </span>hired
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
            vehicles (symbol 1) - with limits not less than those stated below:
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.3.1 Combined single limit for bodily injury &amp; property
            damage $1,000,000 each accident.
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.4<span class="_ _1c"> </span>Excess/Umbrella Liability
            Insurance: policy to “pay on behalf of the insured”
          </div>
          <div class="t m0 x8 h3 y4e ff2 fs0 fc0 sc0 ls0 ws1">
            Limits of liability: the following shall apply based upon the
            original Projected GMP:
          </div>
          <div class="t m0 xb h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            GMP: &lt; $25,000,000<span class="_ _34"> </span>$5,000,000
          </div>
          <div class="t m0 xb h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            GMP: &gt; $25,000,000<span class="_ _35"> </span>$10,000,000
          </div>
          <div class="t m0 x8 h3 y52 ff2 fs0 fc0 sc0 ls0 ws6a">
            Umbrella<span class="_"> </span>shall<span class="_"> </span>
            schedule<span class="_"> </span>as<span class="_"> </span>underlying
            <span class="_"> </span>coverage<span class="_"> </span>employer
            <span class="_ _3"></span>’s<span class="_ _5"> </span>liability
            <span class="_ _1"></span>,<span class="_ _19"> </span>business
            <span class="_ _19"> </span>auto<span class="_ _19"> </span>
            liability<span class="_ _20"></span>,<span class="_ _19"> </span>and
          </div>
          <div class="t m0 x8 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
            commercial general liability at limits required in Section 8.1.1
            above.
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.5<span class="_ _1c"> </span>Required limits may be met in
            total by any combination of primary and excess/umbrella limits.
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.6<span class="_ _1c"> </span>Contractor
            <span class="_ _3"></span>’s Pr<span class="_ _0"></span>ofessional
            Liability
          </div>
          <div class="t m0 x8 h3 y71 ff2 fs0 fc0 sc0 ls0 ws167">
            CM<span class="_ _6"> </span>shall<span class="_ _14"> </span>obtain
            <span class="_ _6"> </span>and<span class="_ _14"> </span>maintain
            <span class="_ _6"> </span>in<span class="_ _14"> </span>effect
            <span class="_ _6"> </span>during<span class="_ _14"> </span>the
            <span class="_ _6"> </span>term<span class="_"> </span>of
            <span class="_"></span>this<span class="_"> </span>Agreement
            <span class="_"> </span>contractor<span class="_ _3"></span>’s
            <span class="_"> </span>professional
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws168">
            liability<span class="_ _6"> </span>in<span class="_"> </span>the
            <span class="_"> </span>minimum<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>$2,000,000
            <span class="_"> </span>each<span class="_"> </span>claim,
            <span class="_"> </span>$2,000,000<span class="_"> </span>policy
            <span class="_"> </span>aggregate.<span class="_ _18"> </span>
            Coverage<span class="_"> </span>may<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws26">
            placed<span class="_"> </span>via<span class="_"> </span>combined
            <span class="_"> </span>contractor<span class="_ _3"></span>’s
            <span class="_"> </span>professional<span class="_"> </span>and
            <span class="_"> </span>pollution<span class="_"> </span>liability
            <span class="_"> </span>policy<span class="_ _f"> </span>or
            <span class="_ _f"> </span>by<span class="_ _f"> </span>separate
            <span class="_ _f"> </span>policy<span class="_ _20"></span>.
            <span class="_ _1c"> </span>Continuous
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 wsc5">
            coverage<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>be<span class="_ _12"> </span>maintained
            <span class="_ _12"> </span>in<span class="_"> </span>force
            <span class="_"> </span>for<span class="_"></span>a
            <span class="_"> </span>period<span class="_"> </span>of
            <span class="_"></span>six<span class="_"> </span>(6)
            <span class="_"> </span>years<span class="_"></span>following
            <span class="_"> </span>the<span class="_"> </span>date
            <span class="_"> </span>of<span class="_"> </span>final
            <span class="_"></span>completion<span class="_"> </span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
            work. CM is responsible for any applicable deductible.
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws1">
            8.1.1.7<span class="_ _1c"> </span>Contractor
            <span class="_ _3"></span>’s Po<span class="_ _0"></span>llution
            Liability
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">39</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf28" class="pf w0 h0" data-page-no="28">
        <div class="pc pc28 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x8 h3 y80 ff2 fs0 fc0 sc0 ls0 wsc5">
            CM<span class="_ _12"> </span>shall<span class="_ _12"> </span>
            obtain<span class="_ _12"> </span>and<span class="_ _12"> </span>
            maintain<span class="_ _12"> </span>in<span class="_ _12"> </span>
            effect<span class="_ _12"> </span>during<span class="_ _12"> </span>
            the<span class="_ _12"> </span>term<span class="_ _12"> </span>of
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>a<span class="_"> </span>policy
            <span class="_"> </span>of<span class="_"> </span>pollution
            <span class="_"> </span>lia<span class="_ _0"></span>bility
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws169">
            in<span class="_ _15"> </span>the<span class="_ _15"> </span>minimum
            <span class="_ _15"> </span>amount<span class="_ _15"></span>of
            <span class="_ _15"> </span>$5,000,000<span class="_ _15"> </span>
            each<span class="_ _15"> </span>claim,<span class="_"> </span>
            $5,000,000<span class="_"> </span>policy<span class="_"> </span>
            pollution<span class="_"> </span>policy<span class="_"> </span>
            aggregate.<span class="_ _17"> </span>This
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws6a">
            coverage<span class="_"> </span>may<span class="_"> </span>be
            <span class="_"></span>placed<span class="_"> </span>via
            <span class="_"> </span>combined<span class="_"> </span>contractor
            <span class="_ _3"></span>’s<span class="_"> </span>professional
            <span class="_"> </span>and<span class="_"> </span>pollution
            <span class="_"> </span>liabi<span class="_ _0"></span>lity
            <span class="_"> </span>policy<span class="_ _20"></span>,
            <span class="_"> </span>separate
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws16a">
            contractor<span class="_ _3"></span>’s<span class="_ _5"> </span>
            pollution<span class="_ _19"> </span>liability
            <span class="_ _19"></span>policy<span class="_ _19"> </span>or
            <span class="_ _1c"> </span>by<span class="_ _5"> </span>use
            <span class="_ _19"> </span>of<span class="_ _19"></span>the
            <span class="_ _19"> </span>limited<span class="_ _19"> </span>
            jobsite<span class="_ _19"> </span>pollution
            <span class="_ _19"></span>liability<span class="_ _19"> </span>
            endorsement<span class="_"></span>to<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1c">
            commercial<span class="_"> </span>general<span class="_"> </span>
            liability<span class="_"> </span>policy<span class="_ _20"></span>.
            <span class="_ _18"> </span>Continuous<span class="_"> </span>
            coverage<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>maintained<span class="_"> </span>in
            <span class="_"></span>force<span class="_"> </span>for
            <span class="_"> </span>a<span class="_"></span>period
            <span class="_"> </span>of<span class="_"> </span>six
            <span class="_"></span>(6)
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws1">
            years following the date of final completion of the work. CM is
            responsible for any applicable deductible.
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws42">
            8.1.1.8<span class="_ _1c"> </span>If<span class="_"> </span>the
            <span class="_"> </span>Project<span class="_"> </span>includes
            <span class="_"> </span>any<span class="_"> </span>environmental
            <span class="_"> </span>abatement<span class="_"></span>or
            <span class="_"> </span>remediation<span class="_"> </span>work
            <span class="_"> </span>(e.g.<span class="_"> </span>asbestos,
            <span class="_ _f"> </span>mold,<span class="_ _f"> </span>lead
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws10">
            paint,<span class="_ _19"> </span>or<span class="_ _19"> </span>
            UST),<span class="_ _19"> </span>the<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>obtain
            <span class="_"> </span>and<span class="_"></span>maintain
            <span class="_"> </span>in<span class="_"> </span>effect
            <span class="_"> </span>during<span class="_"> </span>the
            <span class="_"> </span>term<span class="_"> </span>of
            <span class="_"></span>this<span class="_"> </span>Agreement
            <span class="_"> </span>policies<span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws6e">
            pollution<span class="_"> </span>liability<span class="_"> </span>
            covering<span class="_"> </span>this<span class="_"> </span>specific
            <span class="_ _6"> </span>type<span class="_ _14"> </span>of
            <span class="_ _6"> </span>work,<span class="_ _14"> </span>which
            <span class="_ _6"> </span>policies<span class="_ _14"> </span>shall
            <span class="_ _6"> </span>protect<span class="_ _14"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>and
            <span class="_ _14"> </span>CM<span class="_ _6"> </span>from
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws125">
            claims<span class="_ _12"> </span>in<span class="_ _12"> </span>an
            <span class="_ _12"> </span>amount<span class="_ _12"> </span>not
            <span class="_ _12"> </span>less<span class="_"> </span>than
            <span class="_"> </span>$5,000,000<span class="_"> </span>for
            <span class="_"> </span>each<span class="_"> </span>claim.
            <span class="_ _1c"></span>Coverage<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"></span>procured
            <span class="_"> </span>directly<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
            or through policy placed on behalf of the environmental abatement
            subcontractor<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws16b">
            8.1.2<span class="_ _16"> </span>CM’s<span class="_"> </span>
            business,<span class="_"> </span>auto,<span class="_"> </span>
            commercial<span class="_"> </span>general<span class="_"> </span>
            liability<span class="_ _4"></span>,<span class="_"> </span>builder
            <span class="_ _3"></span>’s<span class="_"> </span>risk
            <span class="_"> </span>and<span class="_"> </span>excess/umbrella
            <span class="_"> </span>policies<span class="_"></span>shall
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws110">
            include<span class="_ _6"> </span>an<span class="_ _14"> </span>
            endorsement<span class="_ _6"> </span>naming
            <span class="_ _14"></span>the<span class="_ _6"> </span>Owner
            <span class="_"> </span>as<span class="_"></span>additional
            <span class="_"> </span>insured.<span class="_ _18"></span>The
            <span class="_"> </span>additional<span class="_"> </span>insured
            <span class="_"> </span>endorsement<span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 wsd2">
            commercial<span class="_"> </span>liability<span class="_"> </span>
            shall<span class="_"> </span>specify<span class="_"> </span>coverage
            <span class="_"> </span>on<span class="_"> </span>a
            <span class="_"></span>primary<span class="_"> </span>and
            <span class="_"> </span>non-contributory<span class="_"> </span>
            basis<span class="_"></span>and<span class="_"> </span>included
            <span class="_"> </span>completed
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 wsce">
            operations.<span class="_ _18"> </span>All
            <span class="_ _12"></span>insurance<span class="_ _12"> </span>
            policies<span class="_ _12"></span>shall<span class="_ _12"> </span>
            be<span class="_ _12"> </span>endorsed<span class="_ _12"> </span>to
            <span class="_ _12"> </span>provide<span class="_ _12"> </span>for
            <span class="_ _12"> </span>waiver<span class="_ _12"> </span>of
            <span class="_ _12"> </span>subrogation<span class="_ _12"> </span>
            in<span class="_ _12"></span>favor<span class="_ _12"> </span>of
            <span class="_"> </span>Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws36">
            All<span class="_ _6"> </span>insurance<span class="_ _14"> </span>
            policies<span class="_ _6"> </span>shall<span class="_ _14"> </span>
            contain<span class="_ _6"> </span>an<span class="_"> </span>
            endorsement<span class="_"> </span>providing<span class="_"> </span>
            the<span class="_"> </span>coverage<span class="_"> </span>afforded
            <span class="_"> </span>under<span class="_"> </span>the
            <span class="_"> </span>policies<span class="_"> </span>will
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws16c">
            not<span class="_ _21"> </span>be<span class="_ _21"> </span>
            canceled<span class="_ _21"> </span>until<span class="_ _21"></span>
            at<span class="_"> </span>least<span class="_"> </span>thirty
            <span class="_"></span>(30)<span class="_"> </span>days’
            <span class="_"> </span>prior<span class="_"></span>written
            <span class="_"> </span>notice<span class="_"> </span>has
            <span class="_"> </span>been<span class="_"> </span>given
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            Endorsements above may be provided on a Project specific or blanket
            basis as required by written contract.
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws24">
            8.1.3<span class="_ _16"> </span>Certificates
            <span class="_ _19"></span>of<span class="_ _19"> </span>insurance
            <span class="_"> </span>acceptable<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>filed<span class="_"> </span>with
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>by<span class="_"></span>the
            <span class="_"> </span>start<span class="_"> </span>date
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws8c">
            established<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>master<span class="_"> </span>schedule
            <span class="_"> </span>and<span class="_"> </span>thereafter
            <span class="_"> </span>on<span class="_ _6"> </span>renewal
            <span class="_ _14"> </span>or<span class="_ _6"> </span>replacement
            <span class="_ _14"> </span>of<span class="_ _6"> </span>each
            <span class="_ _14"> </span>required<span class="_ _6"> </span>
            policy<span class="_ _14"> </span>of
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws10">
            insurance.<span class="_ _13"> </span>The<span class="_"> </span>
            certificate<span class="_"> </span>of<span class="_"> </span>
            insurance<span class="_"> </span>shall<span class="_"> </span>
            certify<span class="_"> </span>the<span class="_"> </span>existence
            <span class="_"> </span>of<span class="_"> </span>all
            <span class="_ _12"></span>require<span class="_ _0"></span>d
            <span class="_ _12"> </span>policies<span class="_ _12"> </span>
            which<span class="_ _12"></span>satisfy<span class="_ _12"> </span>
            the
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws13">
            requirements<span class="_ _19"> </span>listed
            <span class="_ _19"></span>in<span class="_ _19"> </span>Section
            <span class="_ _19"> </span>8.1<span class="_ _19"> </span>above.
            <span class="_ _17"> </span>The<span class="_"> </span>following
            <span class="_"> </span>language<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>typed
            <span class="_"> </span>into<span class="_"></span>the
            <span class="_"> </span>section<span class="_"> </span>of
            <span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws16">
            certificate<span class="_"> </span>of<span class="_"> </span>
            insurance<span class="_"> </span>labeled<span class="_"> </span>
            description<span class="_"> </span>of<span class="_"> </span>
            operations/locations/vehicles/special<span class="_"> </span>items:
            <span class="_"> </span>“policies<span class="_"> </span>certified
            <span class="_"> </span>on
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws66">
            this<span class="_"> </span>certificate<span class="_"> </span>have
            <span class="_"> </span>been<span class="_"> </span>amended
            <span class="_"> </span>by<span class="_"> </span>specific
            <span class="_"> </span>or<span class="_"> </span>blanket
            <span class="_"> </span>endorsement<span class="_"> </span>to
            <span class="_"> </span>provide<span class="_"> </span>30
            <span class="_"></span>days<span class="_ _12"> </span>prior
            <span class="_ _12"> </span>notice<span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws4">
            cancellation<span class="_"> </span>to<span class="_"> </span>Owner
            <span class="_ _1"></span>.”<span class="_ _18"> </span>Updated
            <span class="_"> </span>certificates<span class="_"> </span>of
            <span class="_"> </span>insurance<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_ _f"> </span>maintained
            <span class="_ _f"> </span>on<span class="_ _f"> </span>file
            <span class="_ _f"> </span>with<span class="_ _f"> </span>Owner
            <span class="_ _f"> </span>and<span class="_ _10"> </span>by
            <span class="_ _f"> </span>CM
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            throughout the term of the work and for a period of six (6) years
            from the date of final completion of the work.
          </div>
          <div class="t m0 x8 h3 y69 ff2 fs0 fc0 sc0 ls0 wsc1">
            Notwithstanding<span class="_ _6"> </span>any
            <span class="_ _14"></span>provision<span class="_ _6"> </span>
            above,<span class="_ _14"></span>contractor<span class="_"> </span>
            shall<span class="_"> </span>provide<span class="_"> </span>at
            <span class="_"> </span>least<span class="_"></span>five
            <span class="_"> </span>(5)<span class="_"> </span>business
            <span class="_"> </span>days<span class="_"> </span>direct
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws66">
            prior<span class="_ _19"> </span>notice<span class="_"> </span>to
            <span class="_"> </span>Owner<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>cancellation,
            <span class="_"> </span>non-renewal<span class="_"> </span>(without
            <span class="_"> </span>replacement),<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"> </span>material
            <span class="_"> </span>reduction<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws1d">
            coverage<span class="_"> </span>or<span class="_"> </span>limits
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>policy<span class="_"> </span>of
            <span class="_"> </span>insurance<span class="_"> </span>required
            <span class="_"> </span>by<span class="_"> </span>Section
            <span class="_"> </span>8.1.1<span class="_"></span>above
            <span class="_"> </span>and<span class="_"> </span>for
            <span class="_ _f"></span>a<span class="_ _f"> </span>term
            <span class="_ _f"> </span>of<span class="_ _f"></span>six
            <span class="_ _f"> </span>(6)<span class="_ _f"> </span>years
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            following the date of final completion of the work.
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws8d">
            8.1.4<span class="_ _16"> </span>The<span class="_ _6"> </span>CM
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>not
            <span class="_ _14"> </span>allow<span class="_ _14"> </span>any
            <span class="_ _6"> </span>contractor<span class="_ _14"> </span>or
            <span class="_ _6"> </span>subcontractor<span class="_"> </span>to
            <span class="_"> </span>commence<span class="_"> </span>work
            <span class="_"></span>on<span class="_"> </span>its
            <span class="_"> </span>contract<span class="_"></span>until
            <span class="_"> </span>all
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws121">
            similar<span class="_ _15"> </span>insurance<span class="_"> </span>
            required<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>contractor<span class="_"> </span>or
            <span class="_"> </span>subcontractor<span class="_"> </span>has
            <span class="_"> </span>been<span class="_"> </span>so
            <span class="_"> </span>obtained<span class="_"></span>and
            <span class="_"> </span>a<span class="_"> </span>certificate
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws6a">
            insurance<span class="_"> </span>has<span class="_"> </span>been
            <span class="_"> </span>filed<span class="_"> </span>with
            <span class="_"></span>the<span class="_"> </span>CM.
            <span class="_ _23"> </span>CM<span class="_"></span>shall
            <span class="_ _19"> </span>determine<span class="_ _19"></span>and
            <span class="_ _19"> </span>approve<span class="_ _19"> </span>the
            <span class="_ _19"> </span>excess/umbrella
            <span class="_ _19"></span>liability
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws167">
            insurance<span class="_ _6"> </span>requirements
            <span class="_ _14"></span>and<span class="_ _6"> </span>the
            <span class="_ _14"> </span>term<span class="_"> </span>for
            <span class="_"> </span>certification<span class="_"> </span>of
            <span class="_"> </span>completed<span class="_"> </span>operations
            <span class="_"> </span>liability<span class="_"> </span>(following
            <span class="_"> </span>the<span class="_"> </span>date
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws16d">
            final<span class="_"> </span>completion)<span class="_"> </span>for
            <span class="_"> </span>all<span class="_"> </span>contractors
            <span class="_"> </span>and<span class="_"> </span>subcontractors.
            <span class="_ _1d"> </span>Approval<span class="_ _12"></span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>insurance
            <span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>not
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1a">
            relieve<span class="_ _6"> </span>or<span class="_ _14"> </span>
            decrease<span class="_ _6"> </span>the<span class="_ _14"> </span>
            liability<span class="_ _6"> </span>of<span class="_ _14"> </span>
            the<span class="_ _14"> </span>CM<span class="_ _6"> </span>
            hereunder<span class="_ _1"></span>.<span class="_ _14"> </span>
            Failure<span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM<span class="_"> </span>to
            <span class="_"></span>provide<span class="_"> </span>all
            <span class="_"> </span>required<span class="_"> </span>certificates
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws89">
            could<span class="_ _6"> </span>delay<span class="_ _14"> </span>the
            <span class="_ _6"> </span>issuance<span class="_ _14"> </span>of
            <span class="_ _6"> </span>notice<span class="_ _14"> </span>to
            <span class="_"> </span>proceed.<span class="_ _18"> </span>Such
            <span class="_"> </span>delay<span class="_"> </span>shall
            <span class="_"></span>not<span class="_"> </span>entitle
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>to<span class="_"> </span>an
            <span class="_"></span>extension<span class="_"> </span>of
            <span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
            milestone or completion dates required by the master schedule.
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1">
            8.2<span class="_ _e"> </span>Builder<span class="_ _3"></span>’s
            Risk Insurance
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws4">
            8.2.1<span class="_ _16"> </span>The<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>purchase
            <span class="_"> </span>and<span class="_"> </span>at
            <span class="_"> </span>all<span class="_"></span>times
            <span class="_"> </span>maintain<span class="_"> </span>such
            <span class="_"> </span>insurance<span class="_"> </span>as
            <span class="_"> </span>will<span class="_"> </span>protect
            <span class="_"></span>the<span class="_ _f"> </span>CM,
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1d">
            the<span class="_"> </span>Owner<span class="_ _3"></span>’s
            <span class="_"></span>representatives,<span class="_"> </span>
            agents<span class="_"></span>and<span class="_"> </span>employees,
            <span class="_"> </span>the<span class="_ _f"> </span>Design
            <span class="_ _f"> </span>Consultant,<span class="_ _f"> </span>
            contractors<span class="_ _f"></span>and<span class="_ _f"> </span>
            subcontractors
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws4">
            from<span class="_"> </span>loss<span class="_"> </span>or
            <span class="_"></span>damage<span class="_"> </span>to
            <span class="_"> </span>work<span class="_"></span>or
            <span class="_"> </span>property<span class="_ _f"> </span>in
            <span class="_ _f"> </span>the<span class="_ _f"> </span>course
            <span class="_ _f"> </span>of<span class="_ _f"> </span>
            construction,<span class="_ _f"> </span>including
            <span class="_ _10"></span>all<span class="_ _f"> </span>machinery
            <span class="_ _20"></span>,<span class="_ _f"> </span>materials
            <span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws66">
            supplies<span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>premises,<span class="_"> </span>in
            <span class="_"> </span>storage<span class="_ _12"> </span>or
            <span class="_ _12"> </span>in<span class="_ _12"> </span>transit
            <span class="_ _18"> </span>and<span class="_ _12"> </span>intended
            <span class="_ _12"> </span>to<span class="_ _12"> </span>become
            <span class="_ _12"> </span>a<span class="_ _12"> </span>part
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>finished<span class="_ _12"> </span>work
            <span class="_ _12"> </span>until
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws13a">
            final<span class="_"> </span>payment<span class="_"> </span>has
            <span class="_"></span>been<span class="_"> </span>made
            <span class="_"> </span>or<span class="_"></span>until
            <span class="_"> </span>no<span class="_"> </span>person
            <span class="_"></span>or<span class="_"> </span>entity
            <span class="_"> </span>other<span class="_"></span>than
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>has<span class="_"> </span>an
            <span class="_"> </span>insurable<span class="_"></span>interest
            <span class="_ _f"> </span>in
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws66">
            the<span class="_"> </span>property<span class="_"> </span>to
            <span class="_"></span>be<span class="_"> </span>covered
            <span class="_"> </span>by<span class="_"></span>this
            <span class="_"> </span>insurance,<span class="_"> </span>whichever
            <span class="_"> </span>is<span class="_"> </span>sooner
            <span class="_ _20"></span>.<span class="_ _1d"> </span>This
            <span class="_ _12"> </span>insurance<span class="_ _12"></span>
            shall<span class="_ _12"> </span>be<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_ _12"> </span>form
            <span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws16a">
            &quot;builder<span class="_ _3"></span>’s<span class="_ _5"> </span>
            risk&quot;<span class="_ _19"> </span>policy
            <span class="_ _19"></span>insuring<span class="_ _19"> </span>
            “risks<span class="_ _1c"></span>of<span class="_ _5"> </span>direct
            <span class="_ _19"> </span>physical<span class="_ _19"> </span>loss
            <span class="_ _19"> </span>except<span class="_ _19"> </span>those
            <span class="_ _19"> </span>as<span class="_ _19"> </span>
            specifically<span class="_ _19"></span>excluded
            <span class="_"> </span>by<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws16e">
            policy”,<span class="_ _6"> </span>or<span class="_ _14"> </span>
            equivalent.<span class="_ _13"> </span>The<span class="_ _6"></span>
            policy<span class="_ _6"> </span>shall<span class="_ _14"> </span>
            not<span class="_ _6"> </span>exclude<span class="_ _14"> </span>the
            <span class="_ _14"> </span>perils<span class="_ _6"> </span>of
            <span class="_ _14"> </span>fire,<span class="_ _6"> </span>
            lightning,<span class="_ _14"> </span>explosion,
            <span class="_"></span>windstorm,<span class="_"> </span>hail,
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws20">
            smoke,<span class="_"> </span>aircraft,<span class="_"> </span>
            vehicles,<span class="_"> </span>vandalism,<span class="_"> </span>
            theft,<span class="_"> </span>malicious<span class="_"> </span>
            mischief,<span class="_"> </span>riot,<span class="_ _6"> </span>
            debris<span class="_ _6"> </span>removal,<span class="_ _14"></span>
            flood,<span class="_ _14"> </span>water<span class="_ _6"> </span>
            damage,
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">40</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
    </>
  );
};

export default PreviewPart4;
