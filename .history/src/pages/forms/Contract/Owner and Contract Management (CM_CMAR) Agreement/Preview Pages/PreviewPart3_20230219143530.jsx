import React from "react";
import "./PreviewPages.css";

const PreviewPart3 = () => {
  return (
    <>
      {/* <div id="pf15" class="pf w0 h0" data-page-no="15">
        <div class="pc pc15 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x8 h3 y1 ff2 fs0 fc0 sc0 ls0 wse6">
            .4<span class="_ _2"> </span>that<span class="_ _19"> </span>the
            <span class="_ _19"> </span>work,<span class="_ _19"> </span>
            including<span class="_ _19"> </span>but<span class="_ _19"> </span>
            not<span class="_ _19"> </span>limited<span class="_ _19"> </span>
            to,<span class="_ _19"> </span>mechanical<span class="_ _19"></span>
            and<span class="_ _19"> </span>electrical<span class="_ _19"></span>
            machines,<span class="_"> </span>devices<span class="_"> </span>and
          </div>
          <div class="t m0 xe h3 y2 ff2 fs0 fc0 sc0 ls0 wsd9">
            equipment,<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>fit<span class="_"> </span>and
            <span class="_"></span>fully<span class="_"> </span>usable
            <span class="_"> </span>for<span class="_"></span>its
            <span class="_"> </span>intended<span class="_"> </span>and
            <span class="_"></span>specified<span class="_"> </span>purpose
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_ _f"> </span>operate
          </div>
          <div class="t m0 xe h3 y20 ff2 fs0 fc0 sc0 ls0 ws1">
            satisfactorily with ordinary care;
          </div>
          <div class="t m0 x8 h3 y10 ff2 fs0 fc0 sc0 ls0 ws20">
            .5<span class="_ _1f"> </span>that<span class="_"> </span>consistent
            <span class="_"> </span>with<span class="_"> </span>requirements
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"> </span>documents,
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_ _6"></span>installed<span class="_ _14"> </span>and
          </div>
          <div class="t m0 xe h3 y3 ff2 fs0 fc0 sc0 ls0 ws4">
            oriented<span class="_"> </span>in<span class="_"> </span>such
            <span class="_"></span>a<span class="_"> </span>manner
            <span class="_"> </span>as<span class="_"></span>to
            <span class="_ _f"> </span>facilitate<span class="_ _f"> </span>
            unrestricted<span class="_ _f"> </span>access
            <span class="_ _f"></span>for<span class="_ _f"> </span>the
            <span class="_ _f"> </span>operation<span class="_ _10"> </span>and
            <span class="_ _f"> </span>maintenance
          </div>
          <div class="t m0 xe h3 y4 ff2 fs0 fc0 sc0 ls0 ws1">
            of fixed equipment;
          </div>
          <div class="t m0 x8 h3 y12 ff2 fs0 fc0 sc0 ls0 wse7">
            .6<span class="_ _2"> </span>that<span class="_ _6"> </span>the
            <span class="_ _14"></span>work<span class="_ _6"> </span>will
            <span class="_ _14"> </span>be<span class="_ _14"> </span>free
            <span class="_ _6"> </span>of<span class="_ _14"> </span>abnormal
            <span class="_ _6"> </span>or<span class="_ _14"> </span>unusual
            <span class="_ _6"> </span>deterioration<span class="_ _14"> </span>
            which<span class="_ _6"></span>occurs<span class="_ _14"> </span>
            because<span class="_ _14"></span>of<span class="_"> </span>poor
          </div>
          <div class="t m0 xe h3 y5 ff2 fs0 fc0 sc0 ls0 ws1">
            quality materials, workmanship or unsuitable storage; and
          </div>
          <div class="t m0 x8 h3 y6 ff2 fs0 fc0 sc0 ls0 ws1">
            .7<span class="_ _2"> </span>that the products or materials
            incorporated in the work will not contain asbestos.
          </div>
          <div class="t m0 x3 h3 y7 ff2 fs0 fc0 sc0 ls0 ws18">
            3.8.5<span class="_ _16"> </span>All<span class="_ _12"> </span>work
            <span class="_ _12"> </span>not<span class="_ _12"> </span>
            conforming<span class="_ _12"> </span>to<span class="_ _12"> </span>
            guarantees<span class="_ _12"> </span>and<span class="_ _12"></span>
            warranties<span class="_"> </span>specified<span class="_"> </span>
            in<span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"></span>documents,<span class="_"> </span>including
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1d">
            substitutions<span class="_"> </span>not<span class="_"> </span>
            properly<span class="_"> </span>approved<span class="_"> </span>and
            <span class="_"> </span>authorized,<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"> </span>considered
            <span class="_"> </span>defective.<span class="_ _1a"></span>If
            <span class="_ _f"> </span>required<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Design
          </div>
          <div class="t m0 x3 h3 y15 ff2 fs0 fc0 sc0 ls0 wse8">
            Consultant<span class="_ _6"> </span>or<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>furnish<span class="_"></span>satisfactory
            <span class="_"> </span>evidence<span class="_"> </span>as
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>kind<span class="_"> </span>and
            <span class="_"> </span>quality<span class="_"></span>of
            <span class="_"> </span>materials<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws0">equipment.</div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws56">
            3.8.5.1<span class="_ _1c"> </span>The<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>will<span class="_ _12"> </span>submit
            <span class="_ _12"> </span>a<span class="_ _12"> </span>written
            <span class="_ _12"> </span>af<span class="_ _0"></span>fidavit
            <span class="_ _12"> </span>certifying<span class="_ _12"></span>
            that<span class="_"> </span>none<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>materials
            <span class="_"> </span>incorporated<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>Project
          </div>
          <div class="t m0 x3 h3 y5e ff2 fs0 fc0 sc0 ls0 ws1">
            contain asbestos.
          </div>
          <div class="t m0 x3 h3 y4a ff2 fs0 fc0 sc0 ls0 ws80">
            3.8.6<span class="_ _16"> </span>If,<span class="_ _19"> </span>
            within<span class="_ _19"> </span>one<span class="_ _19"> </span>(1)
            <span class="_ _19"> </span>year<span class="_ _19"> </span>after
            <span class="_ _19"> </span>the<span class="_ _19"> </span>date
            <span class="_ _19"> </span>of<span class="_"> </span>substantial
            <span class="_"> </span>completion<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>or<span class="_"> </span>designated
            <span class="_"> </span>portion
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws26">
            thereof<span class="_ _18"> </span>or<span class="_"> </span>within
            <span class="_"> </span>such<span class="_"> </span>longer
            <span class="_"> </span>period<span class="_"> </span>of
            <span class="_"></span>time<span class="_"> </span>as
            <span class="_"> </span>may<span class="_"></span>be
            <span class="_"> </span>prescribed<span class="_"> </span>by
            <span class="_"></span>law<span class="_"> </span>or
            <span class="_"> </span>by<span class="_"></span>the
            <span class="_"> </span>terms<span class="_ _f"> </span>of
            <span class="_ _f"></span>any<span class="_ _f"> </span>applicable
          </div>
          <div class="t m0 x3 h3 yd ff2 fs0 fc0 sc0 ls0 wse9">
            special<span class="_ _15"> </span>warranty
            <span class="_ _15"></span>required<span class="_ _15"> </span>by
            <span class="_ _15"> </span>the<span class="_"> </span>contract
            <span class="_"> </span>documents,<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"></span>is
            <span class="_"> </span>found<span class="_"> </span>to
            <span class="_"></span>be<span class="_"> </span>defective,
            <span class="_"> </span>not<span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws26">
            accordance<span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"> </span>documents,
            <span class="_"> </span>or<span class="_"> </span>not
            <span class="_"> </span>in<span class="_"> </span>accordance
            <span class="_"> </span>with<span class="_ _f"> </span>the
            <span class="_ _f"> </span>guarantees<span class="_ _f"> </span>and
            <span class="_ _f"> </span>warranties<span class="_ _f"> </span>
            specified
          </div>
          <div class="t m0 x3 h3 y17 ff2 fs0 fc0 sc0 ls0 ws6e">
            in<span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"></span>documents,<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>correct<span class="_"></span>it
            <span class="_"> </span>within<span class="_"> </span>five
            <span class="_"></span>(5)<span class="_"> </span>working
            <span class="_"> </span>days<span class="_"></span>or
            <span class="_ _6"> </span>such<span class="_ _14"> </span>other
            <span class="_ _6"> </span>period<span class="_ _14"> </span>as
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws58">
            mutually<span class="_ _6"> </span>agreed,
            <span class="_ _14"></span>after<span class="_ _6"> </span>receipt
            <span class="_ _14"> </span>of<span class="_ _6"> </span>notice
            <span class="_ _14"> </span>from<span class="_ _14"> </span>the
            <span class="_ _6"> </span>Owner<span class="_ _14"> </span>to
            <span class="_ _6"> </span>do<span class="_ _14"> </span>so.
            <span class="_ _13"> </span>The<span class="_ _6"> </span>Owner
            <span class="_ _6"> </span>shall<span class="_"> </span>give
            <span class="_"> </span>such<span class="_"></span>notice
            <span class="_"> </span>with
          </div>
          <div class="t m0 x3 h3 yf ff2 fs0 fc0 sc0 ls0 wsea">
            reasonable<span class="_ _12"> </span>promptness
            <span class="_ _12"></span>after<span class="_ _12"> </span>
            discovery<span class="_ _12"></span>of<span class="_ _12"> </span>
            the<span class="_ _12"> </span>condition.
            <span class="_ _1c"> </span>For<span class="_"> </span>items
            <span class="_"> </span>that<span class="_"> </span>remain
            <span class="_"> </span>incomplete<span class="_"> </span>or
            <span class="_"> </span>uncorrected<span class="_"> </span>on
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws15">
            the<span class="_ _12"> </span>date<span class="_ _12"> </span>of
            <span class="_"> </span>substantial<span class="_"> </span>
            completion,<span class="_"> </span>the<span class="_"> </span>one
            <span class="_"> </span>(1)<span class="_"> </span>year
            <span class="_"></span>warranty<span class="_"> </span>shall
            <span class="_"> </span>begin<span class="_"> </span>on
            <span class="_"> </span>the<span class="_"></span>date
            <span class="_"> </span>of<span class="_"> </span>final
            <span class="_"></span>completion<span class="_"> </span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            work or upon correction of the defective work.
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1d">
            3.8.7<span class="_ _16"> </span>If<span class="_"> </span>at
            <span class="_"></span>any<span class="_"> </span>time
            <span class="_"> </span>deficiencies<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>are<span class="_"></span>discovered
            <span class="_ _f"> </span>which<span class="_ _f"></span>are
            <span class="_ _f"> </span>found<span class="_ _f"> </span>to
            <span class="_ _f"> </span>have<span class="_ _f"> </span>resulted
            <span class="_ _10"> </span>from<span class="_ _f"> </span>fraud
            <span class="_ _f"> </span>or
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws77">
            misrepresentation,<span class="_"> </span>or<span class="_"> </span>
            an<span class="_"> </span>intent<span class="_"> </span>or
            <span class="_"></span>attempt<span class="_"> </span>to
            <span class="_"> </span>or<span class="_"></span>conspiracy
            <span class="_"> </span>to<span class="_"> </span>defraud
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM,<span class="_"> </span>any
            <span class="_"> </span>contractor<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 wsdd">
            supplier<span class="_ _1"></span>,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>will
            <span class="_"> </span>be<span class="_"> </span>liable
            <span class="_"></span>for<span class="_"> </span>replacement
            <span class="_"> </span>or<span class="_"> </span>correction
            <span class="_"> </span>of<span class="_"></span>such
            <span class="_"> </span>work<span class="_"> </span>and
            <span class="_"></span>any<span class="_"> </span>damages
            <span class="_"> </span>which<span class="_"> </span>Owner
            <span class="_"> </span>has
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            incurred related thereto, regardless of the time limit of any
            guarantee or warranty<span class="_ _4"></span>.
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 wsa6">
            3.8.8<span class="_ _16"> </span>Any<span class="_"> </span>
            materials<span class="_"> </span>or<span class="_"> </span>other
            <span class="_"> </span>portions<span class="_"> </span>of
            <span class="_"> </span>the<span class="_ _f"> </span>work,
            <span class="_ _f"></span>installed,<span class="_ _f"> </span>
            furnished<span class="_ _f"></span>or<span class="_ _f"> </span>
            stored<span class="_ _f"> </span>on<span class="_ _10"> </span>site
            <span class="_ _f"> </span>which<span class="_ _f"> </span>are
            <span class="_ _f"> </span>not<span class="_ _f"> </span>of
            <span class="_ _10"> </span>the
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws2a">
            character<span class="_"> </span>or<span class="_"> </span>quality
            <span class="_"> </span>required<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>specifications,
            <span class="_"> </span>or<span class="_"> </span>are
            <span class="_"> </span>otherwise<span class="_"> </span>not
            <span class="_ _f"> </span>acceptable<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Design
            <span class="_ _f"> </span>Consultant
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws6e">
            or<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>immediately
            <span class="_"> </span>removed<span class="_"> </span>and
            <span class="_"> </span>replaced<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>satisfaction<span class="_ _6"> </span>of
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Design
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            Consultant and Owner<span class="_ _1"></span>, when notified to do
            so by the Design Consultant or Owner<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 wsdc">
            3.8.9<span class="_ _16"> </span>If<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>fails
            <span class="_"> </span>to<span class="_"></span>correct
            <span class="_"> </span>defective<span class="_"> </span>or
            <span class="_"> </span>non<span class="_"> </span>conforming
            <span class="_"> </span>work<span class="_"> </span>as
            <span class="_"> </span>required,<span class="_"> </span>or
            <span class="_"></span>if<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>fails
            <span class="_ _f"> </span>to<span class="_ _f"> </span>remove
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 wseb">
            defective<span class="_ _12"> </span>or<span class="_ _12"> </span>
            non<span class="_ _12"> </span>conforming<span class="_ _12"></span>
            work<span class="_ _12"> </span>from<span class="_ _12"> </span>the
            <span class="_ _12"> </span>site,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>may
            <span class="_ _12"> </span>elect<span class="_ _12"> </span>to
            <span class="_ _12"> </span>either<span class="_ _12"> </span>
            correct<span class="_ _12"> </span>such<span class="_ _12"> </span>
            work<span class="_"> </span>or<span class="_"> </span>remove
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 wsba">
            and<span class="_ _19"> </span>store<span class="_"> </span>
            materials<span class="_"> </span>and<span class="_"> </span>
            equipment<span class="_"> </span>at<span class="_"> </span>the
            <span class="_"></span>expense<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM.
            <span class="_ _1d"> </span>If<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>does
            <span class="_"> </span>not<span class="_"></span>pay
            <span class="_"> </span>the<span class="_"> </span>cost
            <span class="_"></span>of<span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 wsec">
            removal<span class="_ _6"> </span>and<span class="_ _14"> </span>
            storage<span class="_ _6"> </span>within<span class="_ _14"> </span>
            ten<span class="_ _6"> </span>(10)<span class="_ _14"> </span>days
            <span class="_ _14"> </span>thereafter<span class="_ _1"></span>,
            <span class="_ _6"> </span>the<span class="_ _14"> </span>Owner
            <span class="_ _6"> </span>may<span class="_"> </span>upon
            <span class="_"> </span>ten<span class="_"> </span>(10)
            <span class="_"></span>additional<span class="_"> </span>days
            <span class="_"> </span>written
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 wsed">
            notice,<span class="_ _19"> </span>sell<span class="_ _19"> </span>
            such<span class="_ _19"> </span>work<span class="_ _19"> </span>at
            <span class="_ _19"> </span>auction<span class="_ _19"> </span>or
            <span class="_ _19"> </span>at<span class="_"> </span>private
            <span class="_"> </span>sale<span class="_"> </span>and
            <span class="_"></span>shall<span class="_"> </span>account
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>net<span class="_"></span>proceeds
            <span class="_"> </span>thereof,<span class="_"> </span>after
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws61">
            deducting<span class="_"> </span>all<span class="_"> </span>the
            <span class="_"></span>costs<span class="_"> </span>that
            <span class="_"> </span>should<span class="_"> </span>have
            <span class="_"> </span>been<span class="_"></span>borne
            <span class="_ _6"> </span>by<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM,<span class="_ _14"> </span>including
            <span class="_ _6"> </span>compensation<span class="_ _14"></span>
            for<span class="_ _6"> </span>the<span class="_ _14"> </span>Design
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws88">
            Consultant&apos;s<span class="_ _6"> </span>additional
            <span class="_ _14"></span>services<span class="_ _6"> </span>and
            <span class="_ _14"> </span>Owner<span class="_ _3"></span>’s
            <span class="_ _6"> </span>reasonable<span class="_ _6"> </span>
            attorney’s<span class="_"></span>fees<span class="_"> </span>made
            <span class="_"> </span>necessary<span class="_"> </span>thereby
            <span class="_ _20"></span>.<span class="_ _18"> </span>If
            <span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 wsee">
            proceeds<span class="_ _12"> </span>of<span class="_ _12"> </span>
            sale<span class="_ _12"> </span>do<span class="_ _12"> </span>not
            <span class="_ _12"> </span>cover<span class="_ _12"> </span>all
            <span class="_ _12"> </span>costs,<span class="_ _12"> </span>which
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>should<span class="_"> </span>have
            <span class="_"></span>borne,<span class="_"> </span>the
            <span class="_"> </span>difference<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>char
            <span class="_ _0"></span>ged<span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws4">
            the<span class="_"> </span>CM<span class="_"> </span>and
            <span class="_"></span>an<span class="_"> </span>appropriate
            <span class="_"> </span>change<span class="_"> </span>order
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
            <span class="_ _f"> </span>issued.<span class="_ _1c"> </span>If
            <span class="_ _f"> </span>the<span class="_ _f"> </span>payments
            <span class="_ _10"> </span>then<span class="_ _f"> </span>or
            <span class="_ _f"> </span>thereafter<span class="_ _f"> </span>due
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _10"> </span>are
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws1">
            not sufficient to cover such amount, the C<span class="_ _0"></span>
            M shall pay the difference to the Owner<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws24">
            3.8.10<span class="_ _1d"> </span>The<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>bear
            <span class="_"> </span>the<span class="_"></span>cost
            <span class="_"> </span>of<span class="_"> </span>making
            <span class="_"></span>good<span class="_"> </span>all
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>work<span class="_"> </span>of
            <span class="_ _12"></span>the<span class="_ _12"> </span>Owner
            <span class="_ _20"></span>,<span class="_ _12"> </span>separate
            <span class="_ _12"> </span>contractors<span class="_ _12"> </span>
            or
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 wsc">
            others,<span class="_ _12"> </span>destroyed
            <span class="_ _12"></span>or<span class="_ _12"> </span>damaged
            <span class="_ _12"> </span>by<span class="_ _12"> </span>such
            <span class="_ _12"> </span>correction<span class="_ _12"> </span>or
            <span class="_ _12"> </span>removal<span class="_ _12"> </span>
            required<span class="_"> </span>under<span class="_"> </span>this
            <span class="_"> </span>section<span class="_"> </span>or
            <span class="_"> </span>elsewhere<span class="_"> </span>in
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws1">
            contract documents.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">21</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      <div id="pf16" class="pf w0 h0" data-page-no="16">
        <div class="pc pc16 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x6 h2 y20 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 4</div>
          <div class="t m0 xf h3 y73 ff2 fs0 fc0 sc0 ls0 ws1">
            DURA<span class="_ _20"></span>TION OF THE CONSTRUCTION MANAGER’S
            SER<span class="_ _1"></span>VICES
          </div>
          <div class="t m0 x7 h2 y10 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws6a">
            4.1<span class="_ _e"> </span>The<span class="_"> </span>duration
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>CM’s<span class="_"> </span>Basic
            <span class="_"> </span>services<span class="_"> </span>under
            <span class="_"> </span>this<span class="_"> </span>Agreem
            <span class="_ _0"></span>ent<span class="_"> </span>shall
            <span class="_ _19"> </span>be<span class="_ _19"></span>from
            <span class="_ _19"> </span>the<span class="_ _19"> </span>date
            <span class="_ _19"> </span>of<span class="_ _19"> </span>this
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws92">
            Agreement<span class="_ _12"> </span>through
            <span class="_ _12"></span>the<span class="_ _12"> </span>issuance
            <span class="_ _12"> </span>of<span class="_ _12"> </span>final
            <span class="_ _12"> </span>payment.<span class="_ _18"> </span>The
            <span class="_ _12"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>provide<span class="_"></span>any
            <span class="_"> </span>warranty<span class="_"> </span>phase
            <span class="_"> </span>services<span class="_"> </span>at
            <span class="_"> </span>no
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws1">
            additional cost to the Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws52">
            4.1.1<span class="_ _16"> </span>The<span class="_ _1f"> </span>
            commencement<span class="_"> </span>date<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"> </span>CM’s
            <span class="_"></span>Basic<span class="_"> </span>Services
            <span class="_"> </span>sha<span class="_ _0"></span>ll
            <span class="_"> </span>be<span class="_"></span>the
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"></span>execution<span class="_"> </span>of
            <span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws96">
            Agreement<span class="_ _19"> </span>by<span class="_ _19"> </span>
            the<span class="_ _19"> </span>Owner<span class="_ _19"> </span>as
            <span class="_ _19"> </span>stated<span class="_ _19"> </span>herein
            <span class="_ _19"> </span>or<span class="_ _19"> </span>the
            <span class="_ _19"> </span>date<span class="_ _19"> </span>on
            <span class="_ _19"> </span>which<span class="_ _19"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>issues
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>a
            <span class="_"> </span>written
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws1">
            instruction to proceed with Basic Services, whichever is earlier
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws36">
            4.1.2<span class="_ _16"> </span>The<span class="_"> </span>CM’s
            <span class="_"> </span>Basic<span class="_"> </span>Services
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>performed<span class="_"> </span>for
            <span class="_"></span>the<span class="_"> </span>period
            <span class="_ _0"></span>s<span class="_"></span>of
            <span class="_"> </span>time<span class="_"> </span>indicated
            <span class="_"> </span>in<span class="_"> </span>this
            <span class="_"> </span>Agreement.<span class="_ _18"> </span>If
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws1">
            portions of design and construction occur simultaneously
            <span class="_ _20"></span>, some of the phase durations may
            overlap.
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws10">
            4.1.2.1<span class="_ _1c"> </span>The<span class="_"> </span>CM’
            <span class="_ _0"></span>s<span class="_"> </span>Basic
            <span class="_"></span>Services<span class="_"> </span>during
            <span class="_"> </span>the<span class="_"> </span>Pre-Design
            <span class="_"> </span>Phase<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>performed
            <span class="_"> </span>as<span class="_ _12"> </span>required
            <span class="_ _12"> </span>during<span class="_ _12"></span>the
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws1">
            pre-design phase.
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws4">
            4.1.2.2<span class="_ _1c"> </span>The<span class="_"> </span>CM’
            <span class="_ _0"></span>s<span class="_"> </span>Basic
            <span class="_"></span>Services<span class="_"> </span>during
            <span class="_"> </span>the<span class="_"> </span>Design
            <span class="_"> </span>Phase<span class="_ _f"></span>shall
            <span class="_ _f"> </span>be<span class="_ _f"> </span>performed
            <span class="_ _f"> </span>as<span class="_ _f"> </span>required
            <span class="_ _f"> </span>during<span class="_ _10"></span>the
            <span class="_ _f"> </span>design
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws0">phase.</div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 wsef">
            4.1.2.3<span class="_ _1c"> </span>The<span class="_ _6"> </span>
            CM’s<span class="_"> </span>Basic<span class="_"> </span>Services
            <span class="_"> </span>during<span class="_"> </span>the
            <span class="_"> </span>Procurement<span class="_"> </span>Phase
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>performed<span class="_"> </span>as
            <span class="_"> </span>required<span class="_"> </span>during
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws1">
            procurement phase.
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 wsc1">
            4.1.2.4<span class="_ _1c"> </span>The<span class="_ _6"> </span>
            CM’s<span class="_ _6"> </span>Basic<span class="_"> </span>Services
            <span class="_"> </span>during<span class="_"> </span>the
            <span class="_"> </span>Construction<span class="_"> </span>Phase
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>performed<span class="_"> </span>as
            <span class="_"> </span>required<span class="_"> </span>during
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1">
            construction phase.
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 wsb0">
            4.1.3<span class="_ _16"> </span>The<span class="_ _12"> </span>CM’s
            <span class="_ _12"> </span>Basic<span class="_ _12"> </span>
            Services<span class="_ _12"> </span>during
            <span class="_ _12"></span>the<span class="_ _12"> </span>
            Post-Construction<span class="_ _12"></span>Phase
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>perform<span class="_ _0"></span>ed
            <span class="_"> </span>as<span class="_"></span>required
            <span class="_"> </span>during
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            the post-construction phase.
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 wsf0">
            4.1.4.<span class="_ _26"> </span>The<span class="_ _19"> </span>CM
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>achieve
            <span class="_ _19"> </span>substantial<span class="_ _19"></span>
            completion<span class="_ _19"> </span>of<span class="_ _1c"> </span>
            the<span class="_ _5"> </span>Project<span class="_ _19"> </span>on
            <span class="_ _19"> </span>or<span class="_ _19"> </span>before
            <span class="_ _19"> </span>F10_____,<span class="_ _19"></span>
            unless<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws16">
            Owner<span class="_ _12"> </span>and<span class="_"> </span>CM
            <span class="_"></span>agree<span class="_"> </span>to
            <span class="_"> </span>a<span class="_"></span>different
            <span class="_"> </span>date<span class="_"> </span>in
            <span class="_"> </span>writing.<span class="_ _1c"> </span>The
            <span class="_"> </span>date<span class="_"> </span>for
            <span class="_"></span>final<span class="_"> </span>completion
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>thirty<span class="_"></span>(30)
            <span class="_"> </span>days<span class="_"> </span>after
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            substantial completion.
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
            4.2<span class="_ _e"> </span>Delays and Extensions of T
            <span class="_ _1"></span>ime
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws43">
            4.2.1<span class="_ _16"> </span>The<span class="_ _12"> </span>time
            <span class="_ _12"> </span>during<span class="_ _12"> </span>which
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>or<span class="_"> </span>any
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>contractors<span class="_"> </span>is
            <span class="_"> </span>delayed<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>performance
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws80">
            the<span class="_ _19"> </span>issuance<span class="_ _19"> </span>
            of<span class="_ _19"> </span>any<span class="_ _19"> </span>
            required<span class="_"> </span>permits,<span class="_"> </span>acts
            <span class="_"> </span>of<span class="_"> </span>god,
            <span class="_"></span>excessive<span class="_"> </span>inclement
            <span class="_"> </span>weather<span class="_ _1"></span>,
            <span class="_"> </span>fires,<span class="_"> </span>floods,
            <span class="_"> </span>epidemics,
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 wsdc">
            quarantine<span class="_ _6"> </span>restrictions,
            <span class="_ _14"></span>strikes,<span class="_"> </span>riots,
            <span class="_"> </span>civil<span class="_"> </span>commotions
            <span class="_"> </span>or<span class="_"> </span>freight
            <span class="_"> </span>embargoes,<span class="_"> </span>or
            <span class="_"> </span>other<span class="_"> </span>conditions
            <span class="_"> </span>beyond<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws23">
            CM’s<span class="_"> </span>or<span class="_"> </span>the
            <span class="_"></span>contractors’<span class="_"> </span>control
            <span class="_"> </span>and<span class="_"> </span>which
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>or<span class="_"> </span>the
            <span class="_"></span>contractors<span class="_"> </span>co
            <span class="_ _0"></span>uld<span class="_"> </span>not
            <span class="_"> </span>reasonably<span class="_"> </span>have
            <span class="_"> </span>foreseen<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws42">
            provided<span class="_"> </span>against,<span class="_"> </span>
            except<span class="_"> </span>for<span class="_ _f"> </span>delays
            <span class="_ _f"> </span>caused<span class="_ _f"> </span>solely
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _1"></span>,
            <span class="_ _10"></span>Design<span class="_ _f"> </span>
            Consultant<span class="_ _f"></span>or<span class="_ _f"> </span>
            their<span class="_ _f"> </span>consultants,
            <span class="_ _f"> </span>shall
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws26">
            be<span class="_"> </span>added<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>time
            <span class="_"> </span>for<span class="_"></span>completion
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"> </span>stated
            <span class="_ _f"></span>in<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Agreement.<span class="_ _1c"> </span>
            Neither<span class="_ _f"></span>the<span class="_ _f"> </span>Owner
            <span class="_ _10"> </span>nor<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Design
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 wsdc">
            Consultant<span class="_ _6"> </span>shall
            <span class="_ _14"></span>be<span class="_ _6"> </span>obligated
            <span class="_ _14"> </span>or<span class="_"> </span>liable
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>CM<span class="_"> </span>or
            <span class="_"></span>the<span class="_"> </span>contractors
            <span class="_"> </span>for<span class="_"> </span>indirect
            <span class="_"> </span>or<span class="_"></span>direct
            <span class="_"> </span>damages,<span class="_"> </span>costs
            <span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws1d">
            expenses<span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>nature<span class="_"> </span>which
            <span class="_"> </span>the<span class="_"></span>CM,
            <span class="_"> </span>the<span class="_"> </span>contractors,
            <span class="_"> </span>or<span class="_"> </span>any
            <span class="_"> </span>other<span class="_"> </span>person
            <span class="_"></span>may<span class="_"> </span>incur
            <span class="_"> </span>as<span class="_"></span>a
            <span class="_"> </span>result<span class="_"> </span>of
            <span class="_"></span>any<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 wscf">
            the<span class="_ _12"> </span>delays,<span class="_ _12"> </span>
            interferences,<span class="_ _12"> </span>or
            <span class="_ _12"></span>changes<span class="_ _12"> </span>in
            <span class="_ _12"> </span>sequence<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>included<span class="_"> </span>in
            <span class="_"></span>this<span class="_"> </span>section
            <span class="_"> </span>4.2.1.<span class="_ _1c"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>hereby
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 wsa8">
            expressly<span class="_"> </span>waives<span class="_"> </span>any
            <span class="_"> </span>claims<span class="_"> </span>against
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>Design<span class="_"> </span>Consultant
            <span class="_"> </span>on<span class="_"> </span>account
            <span class="_"> </span>of<span class="_"></span>any
            <span class="_"> </span>indirect<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 wse">
            direct<span class="_"> </span>damages,<span class="_"> </span>lost
            <span class="_"> </span>profits,<span class="_"> </span>costs
            <span class="_"> </span>or<span class="_"> </span>expenses
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>nature<span class="_"> </span>which
            <span class="_"> </span>the<span class="_"></span>CM,
            <span class="_"> </span>the<span class="_"> </span>contractors
            <span class="_"> </span>or<span class="_ _12"> </span>any
            <span class="_ _12"> </span>other
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws6a">
            person<span class="_"> </span>may<span class="_"> </span>incur
            <span class="_"></span>as<span class="_"> </span>a
            <span class="_"> </span>result<span class="_"></span>of
            <span class="_ _19"> </span>any<span class="_ _19"> </span>delays,
            <span class="_ _19"> </span>interferences,
            <span class="_ _19"></span>changes<span class="_ _19"> </span>in
            <span class="_ _19"> </span>sequence<span class="_ _19"> </span>or
            <span class="_ _19"> </span>the<span class="_ _19"> </span>like,
            <span class="_ _19"> </span>and<span class="_ _19"> </span>it
            <span class="_ _19"> </span>is
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws4">
            understood<span class="_"> </span>and<span class="_"> </span>agreed
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_ _f"></span>CM’s<span class="_ _f"> </span>sole
            <span class="_ _f"> </span>and<span class="_ _f"> </span>exclusive
            <span class="_ _f"> </span>remedy<span class="_ _f"> </span>in
            <span class="_ _f"> </span>any<span class="_ _f"> </span>such
            <span class="_ _f"> </span>events<span class="_ _f"> </span>shall
            <span class="_ _10"> </span>be<span class="_ _f"> </span>an
            <span class="_ _f"> </span>extension<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws1">
            the contract time in accordance with the contract documents
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 wsf1">
            4.2.2<span class="_ _16"> </span>In<span class="_ _12"> </span>the
            <span class="_ _12"> </span>event<span class="_ _12"> </span>Project
            <span class="_ _12"> </span>delays<span class="_ _12"></span>arise
            <span class="_ _12"> </span>from<span class="_ _12"> </span>or
            <span class="_ _12"> </span>out<span class="_"> </span>of
            <span class="_"></span>any<span class="_"> </span>act
            <span class="_"> </span>or<span class="_"></span>omission
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>Design<span class="_"></span>Consultant
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 wsa9">
            or<span class="_ _6"> </span>their<span class="_ _14"> </span>
            consultants,<span class="_ _6"> </span>the<span class="_"> </span>
            time<span class="_"> </span>during<span class="_"> </span>which
            <span class="_"> </span>the<span class="_"> </span>Project
            <span class="_"> </span>is<span class="_"> </span>delayed
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>added<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>Agreement
            <span class="_"> </span>and<span class="_"> </span>the
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">22</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      {/* <div id="pf17" class="pf w0 h0" data-page-no="17">
        <div class="pc pc17 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws44">
            CM<span class="_ _6"> </span>may<span class="_ _14"> </span>be
            <span class="_ _6"></span>reimbursed<span class="_ _14"> </span>for
            <span class="_ _6"> </span>its<span class="_ _14"> </span>direct
            <span class="_ _14"> </span>Project<span class="_ _6"> </span>
            damages,<span class="_ _14"></span>excluding<span class="_"> </span>
            general<span class="_"> </span>overhead<span class="_"> </span>
            expenses<span class="_"> </span>and<span class="_"> </span>indirect
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 wsa9">
            costs,<span class="_ _6"> </span>if<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM<span class="_ _14"> </span>strictly
            <span class="_ _14"> </span>complies<span class="_"> </span>with
            <span class="_"> </span>this<span class="_"> </span>Article
            <span class="_"> </span>4.2.<span class="_ _18"> </span>
            Notwithstanding<span class="_"> </span>the<span class="_"> </span>
            previous<span class="_"> </span>sentence,<span class="_"> </span>if
            <span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>a
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 wsa9">
            contractor<span class="_ _6"> </span>and/or
            <span class="_ _14"></span>subcontractor<span class="_"> </span>in
            <span class="_"> </span>any<span class="_"> </span>way
            <span class="_"> </span>shares<span class="_"></span>in
            <span class="_"> </span>responsibility<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"> </span>delay
            <span class="_ _20"></span>,<span class="_"> </span>neither
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>nor<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 wsdc">
            Design<span class="_ _6"> </span>Consultant
            <span class="_ _14"></span>shall<span class="_ _6"> </span>be
            <span class="_ _14"> </span>obligated<span class="_ _6"> </span>or
            <span class="_ _14"> </span>liable<span class="_ _14"> </span>to
            <span class="_ _6"> </span>the<span class="_ _14"> </span>CM
            <span class="_ _6"> </span>or<span class="_"></span>the
            <span class="_"> </span>contractors<span class="_"> </span>for
            <span class="_"> </span>indirect<span class="_"> </span>or
            <span class="_"></span>direct<span class="_"> </span>damages,
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 wsf2">
            costs<span class="_"> </span>or<span class="_"> </span>expenses
            <span class="_"></span>of<span class="_"> </span>any
            <span class="_"> </span>nature<span class="_"></span>which
            <span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>the<span class="_ _f"> </span>contractors,
            <span class="_ _f"></span>or<span class="_ _f"> </span>any
            <span class="_ _f"> </span>other<span class="_ _f"> </span>person
            <span class="_ _f"> </span>may<span class="_ _10"> </span>incur
            <span class="_ _f"> </span>as<span class="_ _f"> </span>a
            <span class="_ _f"> </span>result<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 wsf3">
            any<span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>delays,<span class="_"> </span>
            interferences,<span class="_"> </span>changes<span class="_"></span>
            in<span class="_"> </span>sequence<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work,
            <span class="_"> </span>and<span class="_"></span>the
            <span class="_"> </span>CM’<span class="_ _0"></span>s
            <span class="_"></span>sole<span class="_"> </span>remedy
            <span class="_ _20"></span>,<span class="_"></span>if
            <span class="_"> </span>any<span class="_ _20"></span>,
            <span class="_"></span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws1">
            an extension of the contract time.
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 wsa9">
            4.2.3<span class="_ _16"> </span>In<span class="_ _6"> </span>the
            <span class="_ _14"> </span>event<span class="_ _6"> </span>Project
            <span class="_ _14"> </span>delays<span class="_ _6"> </span>arise
            <span class="_ _14"> </span>solely<span class="_ _14"> </span>from
            <span class="_ _6"> </span>or<span class="_ _14"> </span>out
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>act<span class="_"> </span>or
            <span class="_"> </span>omission<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>contractors,
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 wsb5">
            subcontractors<span class="_ _6"> </span>or
            <span class="_ _14"></span>their<span class="_ _6"> </span>agents,
            <span class="_ _14"> </span>the<span class="_ _6"> </span>CM
            <span class="_ _14"> </span>shall<span class="_ _14"> </span>not
            <span class="_ _6"> </span>be<span class="_ _14"> </span>entitled
            <span class="_ _6"> </span>to<span class="_ _14"> </span>extension
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"></span>time
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_"></span>be
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws1">
            subject to the payment of liquidated damages as provided in this
            <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 wsf4">
            4.2.4<span class="_ _1e"> </span>The<span class="_ _1f"> </span>
            contract<span class="_ _1f"> </span>time<span class="_"> </span>
            shall<span class="_"> </span>be<span class="_"> </span>adjusted
            <span class="_"> </span>only<span class="_"> </span>for
            <span class="_"> </span>changes<span class="_"> </span>authorized
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"> </span>this<span class="_"> </span>Agreement,
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws18">
            suspension<span class="_"> </span>or<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>and
            <span class="_"></span>excusable<span class="_"> </span>delays
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"> </span>section<span class="_"> </span>4.2.4.2.
            <span class="_ _1c"> </span>In<span class="_"> </span>the
            <span class="_"> </span>event<span class="_"></span>the
            <span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 wsf5">
            requests<span class="_ _6"> </span>an<span class="_"> </span>
            extension<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>contract<span class="_"> </span>time
            <span class="_"> </span>or<span class="_"></span>files
            <span class="_"> </span>a<span class="_"> </span>claim
            <span class="_"></span>related<span class="_"> </span>to
            <span class="_"> </span>any<span class="_"></span>form
            <span class="_"> </span>of<span class="_"> </span>delay
            <span class="_ _20"></span>,<span class="_"> </span>it
            <span class="_"> </span>shall<span class="_"></span>furnish
            <span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws10">
            justification<span class="_"> </span>and<span class="_"> </span>
            supporting<span class="_"> </span>evidence
            <span class="_ _12"></span>as<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>may
            <span class="_ _12"> </span>deem<span class="_ _12"> </span>
            necessary<span class="_ _12"></span>for<span class="_ _12"> </span>a
            <span class="_ _12"> </span>determination
            <span class="_ _12"> </span>of<span class="_ _12"></span>whether
            <span class="_ _12"> </span>or
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws21">
            not<span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>is<span class="_"> </span>entitled
            <span class="_"> </span>to<span class="_"></span>an
            <span class="_"> </span>extension<span class="_"> </span>of
            <span class="_"></span>time<span class="_"> </span>under
            <span class="_"> </span>the<span class="_"></span>provisions
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>contract,<span class="_"> </span>and
            <span class="_"> </span>shall<span class="_"> </span>further
            <span class="_"> </span>outline<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws26">
            alleged<span class="_"> </span>impact<span class="_"> </span>on
            <span class="_"></span>the<span class="_"> </span>schedule’s
            <span class="_"> </span>critical<span class="_"> </span>path.
            <span class="_ _1a"> </span>The<span class="_ _f"> </span>burden
            <span class="_ _f"> </span>of<span class="_ _f"> </span>proof
            <span class="_ _f"> </span>to<span class="_ _f"> </span>substantiate
            <span class="_ _f"> </span>a<span class="_ _f"> </span>claim
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>rest
            <span class="_ _10"> </span>with<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws26">
            CM,<span class="_"> </span>including<span class="_"> </span>evidence
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>cause<span class="_"> </span>was
            <span class="_"></span>beyond<span class="_"> </span>its
            <span class="_"> </span>control.<span class="_ _1c"> </span>The
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>shall
            <span class="_ _f"> </span>base<span class="_ _f"> </span>its
            <span class="_ _f"> </span>findings<span class="_ _10"> </span>of
            <span class="_ _f"> </span>fact<span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws16">
            decision<span class="_"> </span>on<span class="_"> </span>such
            <span class="_"></span>justification<span class="_"> </span>and
            <span class="_"> </span>supporting<span class="_"> </span>evidence,
            <span class="_"> </span>including<span class="_"> </span>a
            <span class="_"> </span>finding<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"></span>alleged
            <span class="_"> </span>delay<span class="_"> </span>impacted
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws98">
            Project’s<span class="_ _12"> </span>critical
            <span class="_ _12"></span>path,<span class="_ _12"> </span>and
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>advise
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_"> </span>in<span class="_"></span>writing
            <span class="_"> </span>thereof.<span class="_ _1c"> </span>If
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>finds<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>is<span class="_"> </span>entitled
            <span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 wsc5">
            any<span class="_ _12"> </span>extension<span class="_ _12"> </span>
            of<span class="_ _12"> </span>the<span class="_ _12"> </span>
            contract<span class="_ _12"> </span>time,<span class="_ _12"></span>
            the<span class="_ _12"> </span>Owner<span class="_ _3"></span>’s
            <span class="_ _12"> </span>determination<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>total
            <span class="_"></span>number<span class="_"> </span>of
            <span class="_"> </span>days<span class="_"></span>extension
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 wsa9">
            based<span class="_ _6"> </span>upon<span class="_"> </span>the
            <span class="_"></span>currently<span class="_"> </span>approved
            <span class="_"> </span>progress<span class="_"> </span>schedule
            <span class="_"> </span>and<span class="_"> </span>on
            <span class="_"> </span>all<span class="_"></span>data
            <span class="_"> </span>relevant<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>extension.
            <span class="_"> </span>Such<span class="_"> </span>data
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws16">
            will<span class="_ _12"> </span>be<span class="_"> </span>
            incorporated<span class="_"> </span>into<span class="_"> </span>the
            <span class="_"> </span>schedule<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>form
            <span class="_"> </span>of<span class="_"></span>a
            <span class="_"> </span>revision<span class="_"> </span>thereto,
            <span class="_"> </span>accomplished<span class="_"> </span>in
            <span class="_"> </span>a<span class="_"> </span>timely
            <span class="_"></span>manner<span class="_ _20"></span>.
            <span class="_ _1c"> </span>The
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 wsf6">
            CM<span class="_ _6"> </span>acknowledges
            <span class="_ _14"> </span>and<span class="_ _6"> </span>agrees
            <span class="_ _14"> </span>that<span class="_ _6"> </span>actual
            <span class="_ _14"> </span>delays<span class="_ _14"> </span>(due
            <span class="_ _6"> </span>to<span class="_ _14"> </span>said
            <span class="_ _6"> </span>changes,<span class="_ _14"> </span>
            suspension<span class="_ _6"></span>of<span class="_ _14"> </span>
            work<span class="_"> </span>or<span class="_"></span>excusable
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws3a">
            delays)<span class="_"> </span>in<span class="_"> </span>activities
            <span class="_"> </span>which,<span class="_"> </span>according
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>schedule,<span class="_"> </span>do
            <span class="_"> </span>not<span class="_"></span>af
            <span class="_ _0"></span>fect<span class="_"> </span>the
            <span class="_"></span>contract<span class="_"> </span>time,
            <span class="_ _f"> </span>do<span class="_ _f"> </span>not
            <span class="_ _f"> </span>have<span class="_ _f"> </span>any
            <span class="_ _10"> </span>effect
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws26">
            upon<span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"></span>time<span class="_"> </span>and
            <span class="_"> </span>therefore<span class="_"> </span>will
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"> </span>the<span class="_"></span>basis
            <span class="_"> </span>for<span class="_"> </span>a
            <span class="_"></span>change<span class="_"> </span>therein.
            <span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>acknowledges<span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 wsa9">
            agrees<span class="_ _6"> </span>that<span class="_ _14"> </span>
            time<span class="_ _6"> </span>extensions<span class="_ _14"></span>
            will<span class="_ _6"> </span>be<span class="_ _14"> </span>granted
            <span class="_ _14"> </span>only<span class="_ _6"> </span>to
            <span class="_ _14"> </span>the<span class="_ _6"> </span>extent
            <span class="_ _14"> </span>that<span class="_ _6"> </span>excusable
            <span class="_"> </span>delays<span class="_"> </span>exceed
            <span class="_"> </span>the<span class="_"> </span>available
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1">
            float in the critical path activities in the currently approved
            schedule.
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws98">
            4.2.4.1<span class="_ _1c"> </span>Extensions
            <span class="_ _12"></span>in<span class="_ _12"> </span>the
            <span class="_"> </span>contract<span class="_"> </span>time
            <span class="_"> </span>by<span class="_"></span>change
            <span class="_"> </span>orders<span class="_"> </span>are
            <span class="_"> </span>subject<span class="_"> </span>to
            <span class="_"></span>extension-in-time<span class="_"> </span>
            audit<span class="_"></span>by<span class="_"> </span>the
            <span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">as follows:</div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 wsf7">
            4.2.4.1.1<span class="_ _12"> </span>The<span class="_ _12"> </span>
            CM<span class="_ _12"> </span>agrees<span class="_ _12"> </span>
            that,<span class="_ _12"> </span>even<span class="_ _12"> </span>
            though<span class="_ _12"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>CM
            <span class="_"></span>and<span class="_"> </span>Design
            <span class="_"> </span>Consultant<span class="_"> </span>have
            <span class="_"> </span>previously<span class="_"> </span>signed
            <span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 wsf6">
            change<span class="_ _6"> </span>order<span class="_ _14"> </span>
            containing<span class="_ _6"> </span>an<span class="_ _14"> </span>
            extension-in-time<span class="_ _6"> </span>resulting
            <span class="_ _14"></span>from<span class="_ _14"> </span>a
            <span class="_ _6"> </span>change<span class="_ _14"> </span>in
            <span class="_ _6"> </span>or<span class="_ _14"> </span>addition
            <span class="_ _6"> </span>to<span class="_ _14"> </span>the
            <span class="_ _14"> </span>work<span class="_"> </span>that
            <span class="_"> </span>said
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 wsf8">
            extension<span class="_ _12"> </span>in<span class="_ _12"> </span>
            the<span class="_ _12"> </span>contract<span class="_ _12"> </span>
            time<span class="_ _12"> </span>may<span class="_ _12"> </span>be
            <span class="_ _12"> </span>adjusted<span class="_ _12"> </span>by
            <span class="_ _12"> </span>an<span class="_"> </span>audit
            <span class="_"></span>after<span class="_"> </span>the
            <span class="_"> </span>fact<span class="_"></span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>.<span class="_ _15"> </span>If
            <span class="_"> </span>such<span class="_"></span>an
            <span class="_"> </span>audit<span class="_"> </span>is
            <span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws26">
            be<span class="_"> </span>made,<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>must
            <span class="_"> </span>undertake<span class="_"> </span>the
            <span class="_"> </span>audit<span class="_"> </span>and
            <span class="_"> </span>make<span class="_"></span>a
            <span class="_"> </span>ruling<span class="_"> </span>within
            <span class="_"></span>30<span class="_"> </span>days
            <span class="_"> </span>after<span class="_"></span>the
            <span class="_ _f"> </span>completion<span class="_ _f"> </span>of
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
            work under the change order<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 wsce">
            4.2.4.1.2<span class="_ _1a"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>agrees<span class="_"> </span>that
            <span class="_"></span>any<span class="_"> </span>extension
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>contract<span class="_"> </span>time
            <span class="_"> </span>to<span class="_"> </span>which
            <span class="_"></span>it<span class="_"> </span>is
            <span class="_"> </span>entitled<span class="_"></span>arising
            <span class="_"> </span>out<span class="_"> </span>of
            <span class="_"></span>a<span class="_"> </span>change
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 wsf9">
            order<span class="_ _1d"> </span>und<span class="_ _0"></span>
            ertaken<span class="_ _1d"> </span>on<span class="_ _1b"> </span>a
            <span class="_ _1d"> </span>force<span class="_ _1b"> </span>
            accounting<span class="_"> </span>(labor<span class="_"> </span>and
            <span class="_"> </span>materials)<span class="_"> </span>basis,
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>determined<span class="_"> </span>by
            <span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws98">
            extension-in-time<span class="_ _12"> </span>audit
            <span class="_ _12"></span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>after
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_"> </span>change<span class="_"> </span>order
            <span class="_"> </span>is<span class="_"></span>completed.
            <span class="_ _1c"> </span>Such<span class="_"> </span>rulings
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws26">
            made<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _f"> </span>within
            <span class="_ _f"> </span>30<span class="_ _f"> </span>days
            <span class="_ _f"> </span>after<span class="_ _f"> </span>a
            <span class="_ _10"> </span>request<span class="_ _f"> </span>for
            <span class="_ _f"> </span>same<span class="_ _f"> </span>is
            <span class="_ _f"> </span>made<span class="_ _f"> </span>by
            <span class="_ _10"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"> </span>or<span class="_ _f"></span>Design
            <span class="_ _f"> </span>Consultant,<span class="_ _f"></span>
            except
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
            said 30 days will not start until the work under the change order is
            completed.
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws21">
            4.2.4.1.3<span class="_ _18"> </span>Should<span class="_"> </span>a
            <span class="_"> </span>time<span class="_"> </span>extension
            <span class="_"></span>be<span class="_"> </span>granted
            <span class="_"> </span>for<span class="_"></span>substantial
            <span class="_"> </span>completion<span class="_"></span>the
            <span class="_"> </span>date<span class="_"> </span>for
            <span class="_"></span>final<span class="_"> </span>completion
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws1">
            appropriately adjusted unless specifically stated otherwise.
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1a">
            4.2.4.2<span class="_ _1c"> </span>Subject
            <span class="_ _6"> </span>to<span class="_ _14"> </span>other
            <span class="_ _6"> </span>provisions<span class="_ _14"> </span>of
            <span class="_ _6"> </span>the<span class="_ _14"> </span>contract,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>may<span class="_"></span>be
            <span class="_"> </span>entitled<span class="_"> </span>to
            <span class="_"></span>an<span class="_"> </span>extension
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>contract
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 wsfa">
            time<span class="_ _19"> </span>(but<span class="_ _19"> </span>no
            <span class="_ _19"> </span>increase<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>GMP)
            <span class="_"></span>for<span class="_"> </span>delays
            <span class="_"> </span>arising<span class="_"> </span>from
            <span class="_"> </span>unforeseeable<span class="_"> </span>causes
            <span class="_"> </span>beyond<span class="_"> </span>the
            <span class="_"> </span>control<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws1">
            without the fault or negligence of the CM, the contractors or
            suppliers as follows:
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 wsfb">
            4.2.4.2.1<span class="_ _18"> </span>Labor
            <span class="_ _12"></span>disputes<span class="_ _12"> </span>and
            <span class="_ _12"> </span>strikes<span class="_"> </span>
            (including<span class="_"> </span>strikes<span class="_"> </span>
            affecting<span class="_"> </span>transportation),
            <span class="_"> </span>that<span class="_"> </span>do,
            <span class="_"> </span>in<span class="_"> </span>fact,
            <span class="_"></span>directly<span class="_"> </span>d
            <span class="_ _0"></span>elay
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws20">
            the<span class="_"> </span>progress<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>on<span class="_"></span>the
            <span class="_"> </span>critical<span class="_"> </span>path;
            <span class="_"> </span>however<span class="_ _20"></span>,
            <span class="_"> </span>an<span class="_"> </span>extension
            <span class="_"></span>of<span class="_"> </span>contract
            <span class="_"> </span>time<span class="_"></span>on
            <span class="_ _14"> </span>account<span class="_ _6"> </span>of
            <span class="_ _14"> </span>an
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws1">
            individual labor strike shall not exceed the number of days of said
            strike;
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">23</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf18" class="pf w0 h0" data-page-no="18">
        <div class="pc pc18 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 wsa0">
            4.2.4.2.2<span class="_ _18"> </span>Acts
            <span class="_ _12"> </span>of<span class="_ _12"> </span>god:
            <span class="_ _12"> </span>tornado,<span class="_ _12"> </span>
            fire,<span class="_"> </span>hurricane,<span class="_"> </span>
            blizzard,<span class="_"> </span>earthquake,<span class="_"> </span>
            or<span class="_"> </span>flood<span class="_"> </span>that
            <span class="_"> </span>damage<span class="_"> </span>completed
            <span class="_"> </span>work<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            stored materials and affecting the critical
            <span class="_ _0"></span>
            path;
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws7">
            4.2.4.2.3<span class="_ _13"> </span>Excessive
            <span class="_"></span>inclement<span class="_"> </span>weather;
            <span class="_"> </span>however<span class="_ _20"></span>,
            <span class="_"> </span>the<span class="_"></span>contract
            <span class="_"> </span>time<span class="_"> </span>will
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>extended<span class="_"> </span>due
            <span class="_"> </span>to<span class="_"></span>reasonably
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws59">
            anticipated<span class="_ _12"> </span>inclement
            <span class="_ _12"></span>weather<span class="_ _12"> </span>or
            <span class="_ _12"> </span>for<span class="_ _12"> </span>delays
            <span class="_ _12"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>aftermath<span class="_ _12"> </span>of
            <span class="_ _12"> </span>inclement<span class="_ _12"> </span>
            weather<span class="_ _1"></span>,<span class="_"> </span>reasonably
            <span class="_"> </span>anticipated<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws6d">
            excessive.<span class="_ _18"> </span>The
            <span class="_ _12"> </span>time<span class="_ _12"> </span>for
            <span class="_ _12"> </span>performance<span class="_ _12"> </span>
            of<span class="_ _12"></span>this<span class="_"> </span>contract,
            <span class="_"> </span>as<span class="_"> </span>stated
            <span class="_"> </span>in<span class="_"></span>this
            <span class="_"> </span>Agreement,<span class="_"> </span>includes
            <span class="_"> </span>an<span class="_"> </span>allowance
            <span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 wsfc">
            calendar<span class="_ _12"> </span>days<span class="_ _12"> </span>
            which<span class="_ _12"> </span>may<span class="_ _12"> </span>not
            <span class="_ _12"> </span>be<span class="_ _12"> </span>available
            <span class="_"> </span>for<span class="_"> </span>construction
            <span class="_"> </span>out-of-doors;<span class="_"></span>for
            <span class="_"> </span>the<span class="_"> </span>purposes
            <span class="_"></span>of<span class="_"> </span>this
            <span class="_"> </span>contract,<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 wsfd">
            CM<span class="_ _19"> </span>agrees<span class="_ _19"> </span>that
            <span class="_ _19"> </span>the<span class="_ _19"> </span>number
            <span class="_ _19"> </span>of<span class="_ _19"> </span>calendar
            <span class="_ _19"> </span>days<span class="_ _19"> </span>per
            <span class="_ _19"> </span>month<span class="_ _19"> </span>stated
            <span class="_ _19"> </span>below<span class="_"> </span>are
            <span class="_"> </span>to<span class="_"> </span>be
            <span class="_"></span>considered<span class="_"> </span>reasonably
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws14">
            anticipated<span class="_ _12"> </span>inclement
            <span class="_ _12"></span>weather<span class="_"> </span>and
            <span class="_"> </span>planned<span class="_"> </span>for
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>construction<span class="_"> </span>
            schedule.<span class="_ _1c"> </span>Unless<span class="_"> </span>
            the<span class="_"> </span>CM<span class="_"> </span>can
            <span class="_"></span>substantiate
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws66">
            to<span class="_"> </span>the<span class="_"> </span>satisfaction
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>that
            <span class="_"></span>there<span class="_"> </span>was
            <span class="_"> </span>greater<span class="_"> </span>than
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            reasonably<span class="_ _12"></span>anticipated
            <span class="_ _12"> </span>inclement<span class="_ _12"></span>
            weather
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws10">
            considering<span class="_"> </span>the<span class="_"> </span>time
            <span class="_"> </span>from<span class="_"> </span>the
            <span class="_"></span>notice-to-proceed<span class="_"> </span>
            until<span class="_"></span>the<span class="_"> </span>building
            <span class="_"> </span>is<span class="_"></span>enclosed
            <span class="_ _12"> </span>using<span class="_ _12"></span>data
            <span class="_ _12"> </span>from<span class="_ _12"> </span>the
            <span class="_ _12"> </span>national
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1f">
            weather<span class="_ _12"> </span>service
            <span class="_ _12"></span>station<span class="_ _12"> </span>at
            <span class="_ _12"> </span>Raleigh<span class="_ _12"> </span>
            Durham<span class="_ _12"></span>Airport<span class="_ _12"> </span>
            (RDU)<span class="_ _12"> </span>or<span class="_ _12"> </span>a
            <span class="_ _12"> </span>weather<span class="_ _12"> </span>
            station<span class="_ _12"></span>acceptable<span class="_"> </span>
            to<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 wsbe">
            that<span class="_"> </span>such<span class="_"> </span>alleged
            <span class="_"></span>greater<span class="_"> </span>than
            <span class="_"> </span>reasonably<span class="_"> </span>
            anticipated<span class="_"></span>inclement<span class="_"> </span>
            weather<span class="_"> </span>actually<span class="_ _19"> </span>
            delayed<span class="_ _19"></span>the<span class="_ _19"> </span>
            work<span class="_ _19"> </span>or
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws88">
            portions<span class="_"> </span>thereof<span class="_"> </span>which
            <span class="_"> </span>had<span class="_"> </span>an
            <span class="_"></span>effect<span class="_"> </span>upon
            <span class="_"> </span>the<span class="_"></span>contract
            <span class="_"> </span>tim<span class="_ _0"></span>e,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>not
            <span class="_"> </span>be<span class="_"></span>entitled
            <span class="_"> </span>to<span class="_"> </span>an
            <span class="_"></span>extension<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws0">time.</div>
          <div class="t m0 x8 h3 y9 ff2 fs0 fc0 sc0 ls0 wsdd">
            For<span class="_ _12"> </span>the<span class="_ _12"> </span>
            purpose<span class="_ _12"> </span>of<span class="_ _12"> </span>
            this<span class="_ _12"> </span>contract,<span class="_ _12"></span>
            the<span class="_ _12"> </span>CM<span class="_ _12"> </span>agrees
            <span class="_ _12"> </span>to<span class="_ _12"> </span>anticipate
            <span class="_ _12"> </span>and<span class="_ _12"></span>plan
            <span class="_"> </span>for<span class="_"> </span>inclement
            <span class="_"> </span>weather<span class="_"> </span>for
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            number of calendar days in accordance with the following table:
          </div>
          <div class="t m0 x10 h3 y79 ff2 fs0 fc0 sc0 ls0 ws1">
            Planned Days/Month
          </div>
          <div class="t m0 xb h3 yb ff2 fs0 fc0 sc0 ls0 wsfe">
            Jan<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 y7a ff2 fs0 fc0 sc0 ls0 wsff">
            Feb<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 yc ff2 fs0 fc0 sc0 ls0 ws100">
            Mar<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 y83 ff2 fs0 fc0 sc0 ls0 ws101">
            Apr<span class="_"> </span>7
          </div>
          <div class="t m0 xb h3 ye ff2 fs0 fc0 sc0 ls0 ws102">
            May<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 y7b ff2 fs0 fc0 sc0 ls0 wsfe">
            Jun<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 y18 ff2 fs0 fc0 sc0 ls0 ws103">
            Jul<span class="_"> </span>10
          </div>
          <div class="t m0 xb h3 y7c ff2 fs0 fc0 sc0 ls0 ws104">
            Aug<span class="_"> </span>9
          </div>
          <div class="t m0 xb h3 y19 ff2 fs0 fc0 sc0 ls0 ws104">
            Sep<span class="_"> </span>8
          </div>
          <div class="t m0 xb h3 y68 ff2 fs0 fc0 sc0 ls0 ws105">
            Oct<span class="_"> </span>6
          </div>
          <div class="t m0 xb h3 y1b ff2 fs0 fc0 sc0 ls0 ws106">
            Nov<span class="_"> </span>7
          </div>
          <div class="t m0 xb h3 y69 ff2 fs0 fc0 sc0 ls0 ws106">
            Dec<span class="_"> </span>8
          </div>
          <div class="t m0 x8 h3 y6a ff2 fs0 fc0 sc0 ls0 ws107">
            Also<span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>agrees<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            calculation<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>number<span class="_"> </span>of
            <span class="_"></span>excessive<span class="_"> </span>inclement
            <span class="_"> </span>weather<span class="_"> </span>days
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws6e">
            the<span class="_"> </span>number<span class="_"> </span>of
            <span class="_"></span>days<span class="_"> </span>in
            <span class="_"> </span>excess<span class="_"></span>of
            <span class="_"> </span>those<span class="_ _6"> </span>shown
            <span class="_ _14"> </span>for<span class="_ _6"> </span>each
            <span class="_ _14"> </span>month<span class="_ _6"> </span>in
            <span class="_ _14"> </span>the<span class="_ _14"> </span>table
            <span class="_ _6"> </span>above,<span class="_ _14"> </span>in
            <span class="_ _6"> </span>which<span class="_ _14"> </span>
            precipitation
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws8c">
            exceeded<span class="_"> </span>.10<span class="_"> </span>inch,
            <span class="_"> </span>or<span class="_"> </span>in
            <span class="_"></span>which<span class="_"> </span>the
            <span class="_"> </span>highest<span class="_"> </span>temperature
            <span class="_"> </span>was<span class="_"> </span>32
            <span class="_"> </span>degrees<span class="_"></span>F
            <span class="_ _4"></span>.<span class="_"> </span>Or
            <span class="_"></span>less<span class="_ _6"> </span>as
            <span class="_ _14"> </span>recorded<span class="_ _6"> </span>at
            <span class="_ _14"> </span>the
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws108">
            approved<span class="_ _19"> </span>weather
            <span class="_ _19"></span>station.<span class="_ _17"> </span>Rain
            <span class="_ _19"> </span>days<span class="_ _19"> </span>from
            <span class="_ _19"> </span>hurricanes<span class="_ _19"> </span>
            not<span class="_ _19"></span>causing<span class="_ _19"> </span>
            damage<span class="_ _19"></span>in<span class="_ _19"> </span>
            Durham<span class="_"> </span>County<span class="_"> </span>shall
            <span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
            deemed inclement weather days.
          </div>
          <div class="t m0 x8 h3 y6c ff2 fs0 fc0 sc0 ls0 ws109">
            If<span class="_ _19"> </span>the<span class="_ _19"> </span>total
            <span class="_ _19"> </span>accumulated<span class="_ _19"></span>
            number<span class="_ _19"> </span>of<span class="_ _19"> </span>
            calendar<span class="_ _19"> </span>days<span class="_ _19"> </span>
            lost<span class="_ _19"> </span>to<span class="_ _19"> </span>
            excessive<span class="_"> </span>inclement<span class="_"> </span>
            weather<span class="_ _1"></span>,<span class="_"> </span>from
            <span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws13">
            notice-to-proceed<span class="_ _19"> </span>until
            <span class="_ _19"></span>the<span class="_ _19"> </span>building
            <span class="_ _19"> </span>is<span class="_"> </span>enclosed,
            <span class="_"> </span>exceeds<span class="_"> </span>the
            <span class="_"> </span>total<span class="_"> </span>accumulated
            <span class="_"> </span>number<span class="_"> </span>to
            <span class="_"> </span>be<span class="_"></span>reasonably
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws4">
            anticipated<span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>same<span class="_"> </span>period
            <span class="_"></span>from<span class="_"> </span>the
            <span class="_"> </span>table<span class="_"></span>above,
            <span class="_"> </span>time<span class="_"> </span>for
            <span class="_"></span>completion<span class="_ _f"> </span>will
            <span class="_ _f"> </span>be<span class="_ _f"> </span>extended
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>number<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws10">
            calendar<span class="_"> </span>days<span class="_"> </span>needed
            <span class="_"> </span>to<span class="_"> </span>include
            <span class="_"> </span>the<span class="_"> </span>excess
            <span class="_"> </span>number<span class="_"> </span>of
            <span class="_"></span>calendar<span class="_"> </span>days
            <span class="_"> </span>lost.<span class="_ _1d"> </span>No
            <span class="_"> </span>extension<span class="_"> </span>of
            <span class="_"> </span>time<span class="_"> </span>will
            <span class="_ _12"> </span>be
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws26">
            made<span class="_"> </span>for<span class="_"> </span>days
            <span class="_"></span>due<span class="_"> </span>to
            <span class="_"> </span>excessive<span class="_"></span>inclement
            <span class="_"> </span>weather<span class="_ _f"> </span>occurring
            <span class="_ _f"> </span>after<span class="_ _f"> </span>the
            <span class="_ _f"> </span>building<span class="_ _f"> </span>is
            <span class="_ _f"> </span>enclosed.<span class="_ _15"> </span>For
            <span class="_ _f"> </span>the<span class="_ _f"> </span>purpose
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws10a">
            of<span class="_ _6"> </span>this<span class="_ _14"> </span>
            contract,<span class="_ _6"> </span>the<span class="_ _14"> </span>
            term<span class="_"> </span>“enclosed”<span class="_"> </span>is
            <span class="_"> </span>defined<span class="_"> </span>to
            <span class="_"></span>mean<span class="_"> </span>when
            <span class="_"> </span>the<span class="_"></span>building
            <span class="_"> </span>is<span class="_"> </span>sufficiently
            <span class="_"> </span>roofed<span class="_"> </span>and
            <span class="_"> </span>sealed,
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws5">
            either<span class="_ _12"> </span>temporarily
            <span class="_ _12"></span>or<span class="_ _12"> </span>permanently
            <span class="_ _20"></span>,<span class="_ _12"> </span>to
            <span class="_ _12"> </span>permit<span class="_ _12"> </span>the
            <span class="_ _12"> </span>structure<span class="_"> </span>to
            <span class="_"> </span>be<span class="_"></span>heated
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>plastering<span class="_"> </span>and
            <span class="_"> </span>dry-wall<span class="_"> </span>trades
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws98">
            to<span class="_ _12"> </span>work.<span class="_ _1c"> </span>The
            <span class="_"> </span>Design<span class="_"> </span>Consultant
            <span class="_"> </span>shall<span class="_"> </span>determine
            <span class="_"> </span>when<span class="_"> </span>the
            <span class="_"> </span>structure<span class="_"> </span>is
            <span class="_"></span>“enclosed”.<span class="_ _1c"> </span>Upon
            <span class="_"> </span>the<span class="_"> </span>request
            <span class="_"> </span>of<span class="_"></span>either
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 wse">
            party<span class="_ _20"></span>,<span class="_"> </span>the
            <span class="_"></span>Design<span class="_"> </span>Consultant
            <span class="_"> </span>shall<span class="_"> </span>issue
            <span class="_ _12"> </span>a<span class="_ _12"> </span>letter
            <span class="_ _12"> </span>certifying<span class="_ _12"> </span>to
            <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _12"> </span>with
            <span class="_ _12"> </span>a<span class="_ _12"></span>copy
            <span class="_ _12"> </span>to<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM,<span class="_ _12"> </span>stating
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws10b">
            date<span class="_ _12"> </span>the<span class="_ _12"> </span>
            building<span class="_ _12"> </span>became<span class="_"> </span>
            enclosed.<span class="_ _1c"> </span>No<span class="_"> </span>
            change<span class="_"> </span>in<span class="_"> </span>GMP
            <span class="_"></span>will<span class="_"> </span>be
            <span class="_"> </span>authorized<span class="_"> </span>because
            <span class="_"> </span>of<span class="_"> </span>adjustment
            <span class="_"> </span>of<span class="_"></span>contract
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws1">
            time due to excessive inclement weather; and
          </div>
          <div class="t m0 x3 h3 y84 ff2 fs0 fc0 sc0 ls0 ws4">
            4.2.4.2.4<span class="_"> </span>Delays<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>issuance
            <span class="_"></span>of<span class="_"> </span>a
            <span class="_"> </span>required<span class="_"></span>permit,
            <span class="_"> </span>acts<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>public
            <span class="_"> </span>enemy<span class="_ _20"></span>,
            <span class="_"> </span>acts<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>state,
            <span class="_"> </span>federal<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y85 ff2 fs0 fc0 sc0 ls0 wsc0">
            local<span class="_ _6"> </span>government
            <span class="_ _14"></span>in<span class="_ _6"> </span>its
            <span class="_ _14"> </span>sovereign<span class="_ _6"> </span>
            capacity<span class="_ _1"></span>,<span class="_"> </span>and
            <span class="_"> </span>acts<span class="_"></span>of
            <span class="_"> </span>another<span class="_"> </span>contractor
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>a<span class="_"> </span>contract
          </div>
          <div class="t m0 x3 h3 y86 ff2 fs0 fc0 sc0 ls0 ws1">
            with the Owner relating to the Project.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">24</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf19" class="pf w0 h0" data-page-no="19">
        <div class="pc pc19 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws36">
            4.2.5<span class="_ _16"> </span>If<span class="_ _6"> </span>the
            <span class="_ _14"> </span>CM<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>neglect,<span class="_ _14"></span>fail
            <span class="_ _6"> </span>or<span class="_ _14"> </span>refuse
            <span class="_"> </span>to<span class="_"> </span>complete
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>within<span class="_"> </span>the
            <span class="_"></span>time<span class="_"> </span>herein
            <span class="_"> </span>specified,<span class="_"> </span>or
            <span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws10c">
            proper<span class="_ _12"> </span>extension
            <span class="_ _12"></span>thereof<span class="_ _12"> </span>
            granted<span class="_ _12"></span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _1"></span>,
            <span class="_ _12"> </span>then<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>does
            <span class="_ _12"> </span>hereby<span class="_"> </span>agree,
            <span class="_"> </span>as<span class="_"></span>a
            <span class="_"> </span>part<span class="_"> </span>consideration
            <span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 wsc">
            the<span class="_ _12"> </span>awarding<span class="_ _12"> </span>
            of<span class="_ _12"> </span>this<span class="_ _12"> </span>
            contract,<span class="_ _12"> </span>to<span class="_ _12"> </span>
            pay<span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>the<span class="_ _12"> </span>amount
            <span class="_ _12"> </span>specified<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>contract,
            <span class="_"></span>not<span class="_"> </span>as
            <span class="_"> </span>a<span class="_"></span>penalty
            <span class="_"> </span>but<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 wsdd">
            liquidated<span class="_ _12"> </span>damages
            <span class="_ _12"></span>for<span class="_ _12"> </span>such
            <span class="_ _12"> </span>breach<span class="_ _12"> </span>of
            <span class="_"> </span>contract<span class="_"> </span>as
            <span class="_"> </span>hereinafter<span class="_"> </span>set
            <span class="_"> </span>forth,<span class="_"> </span>for
            <span class="_"> </span>each<span class="_"></span>and
            <span class="_"> </span>every<span class="_"> </span>calendar
            <span class="_"> </span>day<span class="_"> </span>that
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws26">
            the<span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>be<span class="_"> </span>in
            <span class="_"> </span>default<span class="_"></span>after
            <span class="_"> </span>the<span class="_"> </span>time
            <span class="_"></span>stipulated<span class="_"> </span>in
            <span class="_"> </span>the<span class="_ _f"> </span>contract
            <span class="_ _f"> </span>for<span class="_ _f"> </span>completing
            <span class="_ _f"> </span>the<span class="_ _f"> </span>work.
            <span class="_ _1c"> </span>The<span class="_ _10"> </span>said
            <span class="_ _f"> </span>amount
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws21">
            is<span class="_ _12"> </span>fixed<span class="_"> </span>and
            <span class="_"></span>agreed<span class="_"> </span>upon
            <span class="_"> </span>by<span class="_"></span>and
            <span class="_"> </span>between<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>because<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>impracticability
            <span class="_"> </span>and<span class="_"> </span>extreme
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws10">
            difficulty<span class="_ _5"> </span>of<span class="_ _19"> </span>
            fixing<span class="_"> </span>and<span class="_"> </span>
            ascertaining<span class="_"> </span>the<span class="_"> </span>
            actual<span class="_"> </span>damages<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>would
            <span class="_"></span>in<span class="_"> </span>such
            <span class="_"> </span>event<span class="_"></span>sustain,
            <span class="_"> </span>and<span class="_"> </span>said
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws10d">
            amount<span class="_ _6"> </span>is<span class="_ _14"> </span>
            agreed<span class="_ _6"> </span>to<span class="_ _14"> </span>be
            <span class="_ _14"> </span>the<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>damages
            <span class="_"> </span>which<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>would
            <span class="_"></span>sustain<span class="_"> </span>and
            <span class="_"> </span>said<span class="_"></span>amount
            <span class="_"> </span>shall<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            retained from time to time by the Owner from current periodical
            estimates.
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws10">
            4.2.6<span class="_ _16"> </span>The<span class="_"> </span>CM
            <span class="_"></span>and<span class="_"> </span>the
            <span class="_"> </span>contractors<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"> </span>entitled<span class="_"></span>to
            <span class="_"> </span>and<span class="_"> </span>hereby
            <span class="_ _12"></span>expressly<span class="_ _12"> </span>
            waive<span class="_ _12"></span>any<span class="_ _12"> </span>
            extension<span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws32">
            time<span class="_"> </span>resulting<span class="_"> </span>from
            <span class="_"> </span>any<span class="_"> </span>condition
            <span class="_"> </span>or<span class="_"> </span>cause
            <span class="_"> </span>unless<span class="_"> </span>said
            <span class="_"> </span>claim<span class="_"> </span>for
            <span class="_"></span>extensions<span class="_"> </span>of
            <span class="_"> </span>time<span class="_"> </span>is
            <span class="_"> </span>made<span class="_"></span>in
            <span class="_"> </span>writing<span class="_ _f"> </span>to
            <span class="_ _f"></span>the
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws8d">
            Owner<span class="_ _6"> </span>within<span class="_ _14"> </span>
            ten<span class="_"> </span>(10)<span class="_"> </span>days
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>first<span class="_"></span>instance
            <span class="_"> </span>of<span class="_"> </span>delay
            <span class="_"> </span>for<span class="_"> </span>all
            <span class="_"></span>delays,<span class="_"> </span>except
            <span class="_"> </span>excessive<span class="_"> </span>inclement
            <span class="_"> </span>weather
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws15">
            which<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>made<span class="_"> </span>in
            <span class="_"> </span>writing<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>within<span class="_"> </span>forty-five
            <span class="_"> </span>(45)<span class="_"> </span>days
            <span class="_"> </span>after<span class="_"></span>the
            <span class="_"> </span>date<span class="_"> </span>the
            <span class="_"></span>structure<span class="_"> </span>is
            <span class="_"> </span>enclosed.
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws10e">
            Circumstances<span class="_ _12"> </span>and
            <span class="_ _12"></span>activities<span class="_ _12"> </span>
            leading<span class="_ _12"></span>to<span class="_ _12"> </span>such
            <span class="_ _12"> </span>claim<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>be<span class="_"> </span>indicated
            <span class="_"> </span>or<span class="_"></span>referenced
            <span class="_"> </span>in<span class="_"> </span>a
            <span class="_"></span>daily<span class="_"> </span>field
            <span class="_"> </span>inspection
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws1">
            report for the day(s) affected. In every su
            <span class="_ _0"></span>ch written claim, the CM shall provide the
            following information:
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.6.1 Nature of the delay;
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.6.2<span class="_ _1c"> </span>Date (or anticipated date) of
            commencement of delay;
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws26">
            4.2.6.3<span class="_ _18"> </span>Activities
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"> </span>progress<span class="_"></span>schedule
            <span class="_"> </span>affected<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>delay
            <span class="_ _4"></span>,<span class="_"> </span>and/or
            <span class="_ _f"> </span>new<span class="_ _10"></span>activities
            <span class="_ _f"> </span>created<span class="_ _f"></span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>delay
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
            and their relationship with existing activities;
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.6.4<span class="_ _1c"> </span>Identification of person(s) or
            organization(s) or event(s) responsible for the delay;
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.6.5 <span class="_ _1"></span>Anticipated extent of the delay;
            and
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.6.6<span class="_ _1c"> </span>Recommended action to avoid or
            minimize the delay<span class="_ _4"></span>.
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws66">
            4.2.7<span class="_ _16"> </span>If<span class="_"> </span>no
            <span class="_"></span>schedule<span class="_"> </span>or
            <span class="_"> </span>agreement<span class="_"> </span>is
            <span class="_"> </span>made<span class="_"> </span>stating
            <span class="_"> </span>the<span class="_"></span>dates
            <span class="_"> </span>upon<span class="_ _12"> </span>which
            <span class="_ _12"> </span>written<span class="_ _12"> </span>
            interpretations<span class="_ _12"> </span>shall
            <span class="_ _12"></span>be
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws4">
            furnished,<span class="_"> </span>then<span class="_"> </span>no
            <span class="_"> </span>claim<span class="_"> </span>for
            <span class="_"></span>delay<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>allowed
            <span class="_"> </span>on<span class="_"> </span>account
            <span class="_"> </span>of<span class="_"> </span>failure
            <span class="_"> </span>to<span class="_"> </span>furnish
            <span class="_"> </span>such<span class="_"> </span>interpretations
            <span class="_"> </span>until
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
            twenty (20) days after request is made for them, and not then unless
            such claim is reasonable.
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            4.2.8<span class="_ _16"> </span>No claim by the CM for an extension
            of time for delays will be considered unless made in strict
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            compliance with the requirements of this
            <span class="_ _20"></span>Article. <span class="_ _1"></span>All
            claims not filed in accordance with this Paragraph shall
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws1">
            be waived by the CM.
          </div>
          <div class="t m0 x6 h2 y4e ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 5</div>
          <div class="t m0 x11 h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            CHANGES IN THE CONSTRUCTION M<span class="_ _0"></span>ANAGER’S
            BASIC SERVICES <span class="_ _20"></span>AND
            <span class="_ _1"></span>ADDITIONAL
          </div>
          <div class="t m0 x12 h3 y50 ff2 fs0 fc0 sc0 ls0 ws0">
            COMPENSA<span class="_ _20"></span>TION
          </div>
          <div class="t m0 x7 h2 y6d ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
            5.1<span class="_ _e"> </span>Changes - Preconstruction Basic
            Services
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws91">
            5.1.1<span class="_ _16"> </span>The<span class="_ _19"> </span>
            Owner<span class="_ _1"></span>,<span class="_ _19"> </span>without
            <span class="_ _19"> </span>invalidating<span class="_ _19"></span>
            this<span class="_ _19"> </span>Agreement,
            <span class="_ _19"></span>may<span class="_"> </span>make
            <span class="_"> </span>changes<span class="_"></span>in
            <span class="_"> </span>the<span class="_"> </span>CM’s
            <span class="_"></span>Basic<span class="_"> </span>Services
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws10f">
            specified<span class="_ _19"> </span>in<span class="_ _19"> </span>
            Paragraphs<span class="_ _19"> </span>3.2,<span class="_"> </span>
            3.3<span class="_"> </span>and<span class="_"> </span>3.4
            <span class="_"></span>of<span class="_"> </span>this
            <span class="_"> </span>Agreement.<span class="_ _13"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>promptly<span class="_"> </span>notify
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws3a">
            changes<span class="_ _6"> </span>which<span class="_ _14"> </span>
            increase<span class="_ _6"> </span>or<span class="_ _14"> </span>
            decrease<span class="_ _6"> </span>the<span class="_ _14"> </span>
            CM’s<span class="_ _6"> </span>compensation,
            <span class="_ _6"></span>the<span class="_ _14"> </span>duration
            <span class="_ _14"> </span>of<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"></span>Basic
            <span class="_"> </span>Services,<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws0">both.</div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws1">
            5.1.2<span class="_ _16"> </span>Additional Compensation and
            Extended Duration
          </div>
          <div class="t m0 x8 h3 y61 ff2 fs0 fc0 sc0 ls0 ws110">
            The<span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>be<span class="_"> </span>entitled
            <span class="_"> </span>to<span class="_"></span>receive
            <span class="_"> </span>additional<span class="_"> </span>
            compensation<span class="_"> </span>and<span class="_"> </span>
            additional<span class="_"> </span>time<span class="_"> </span>when
            <span class="_"> </span>the<span class="_"> </span>scope
            <span class="_"></span>of
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws21">
            Paragraphs<span class="_ _12"> </span>3.2,
            <span class="_ _12"></span>3.3<span class="_ _12"> </span>and
            <span class="_"> </span>3.4<span class="_"></span>is
            <span class="_"> </span>increased<span class="_"> </span>or
            <span class="_"></span>extended<span class="_"> </span>through
            <span class="_"> </span>no<span class="_"> </span>fault
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>CM.<span class="_ _1c"> </span>If
            <span class="_"></span>the<span class="_"> </span>scope
            <span class="_"> </span>of<span class="_"></span>these
            <span class="_"> </span>Basic
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws91">
            Services<span class="_ _19"> </span>is<span class="_ _19"> </span>
            increased<span class="_ _19"> </span>or<span class="_ _19"> </span>
            the<span class="_ _19"> </span>duration<span class="_ _19"> </span>
            of<span class="_ _19"> </span>these<span class="_ _19"> </span>Basic
            <span class="_ _19"> </span>Services<span class="_ _19"></span>is
            <span class="_ _19"> </span>extended<span class="_ _19"> </span>or
            <span class="_ _19"> </span>the<span class="_ _19"> </span>duration
            <span class="_ _19"> </span>of<span class="_ _19"> </span>the
            <span class="_"> </span>Basic
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws4">
            Services<span class="_"> </span>to<span class="_"> </span>be
            <span class="_"></span>performed<span class="_"> </span>within
            <span class="_"> </span>a<span class="_"> </span>phase
            <span class="_"> </span>duration<span class="_"></span>specified
            <span class="_"> </span>in<span class="_"> </span>Article
            <span class="_"> </span>4<span class="_"> </span>is
            <span class="_ _f"></span>extended,<span class="_ _f"> </span>the
            <span class="_ _f"> </span>CM<span class="_ _f"> </span>shall
            <span class="_ _f"> </span>be<span class="_ _f"> </span>entitled
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">25</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf1a" class="pf w0 h0" data-page-no="1a">
        <div class="pc pc1a w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws4">
            to<span class="_"> </span>receive<span class="_"> </span>additional
            <span class="_"> </span>compensation,<span class="_"></span>and
            <span class="_"> </span>the<span class="_"> </span>duration
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>Agreement<span class="_"></span>shall
            <span class="_"> </span>be<span class="_"> </span>extended.
            <span class="_ _f"> </span>A<span class="_ _f"> </span>written
            <span class="_ _f"> </span>request
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws98">
            for<span class="_ _12"> </span>additional
            <span class="_ _12"> </span>compensation<span class="_ _12"> </span>
            shall<span class="_ _12"></span>be<span class="_ _12"> </span>given
            <span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>to
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>within<span class="_"> </span>ten
            <span class="_"></span>(10)<span class="_"> </span>days
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>occurrence<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws4">
            the<span class="_"> </span>event<span class="_"> </span>giving
            <span class="_"></span>rise<span class="_"> </span>to
            <span class="_"> </span>such<span class="_"></span>request.
            <span class="_ _18"> </span>The<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>additional
            <span class="_ _f"> </span>compensation<span class="_ _f"></span>to
            <span class="_ _f"> </span>be<span class="_ _f"> </span>paid
            <span class="_ _f"></span>and<span class="_ _10"> </span>the
            <span class="_ _f"> </span>amount<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws4">
            extension<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>duration<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"></span>Agreement
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>determined<span class="_"> </span>on
            <span class="_"></span>the<span class="_"> </span>basis
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_ _f"> </span>CM’s<span class="_ _f"> </span>cost,
            <span class="_ _f"> </span>a<span class="_ _f"> </span>customary
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws111">
            and<span class="_"> </span>reasonable<span class="_"> </span>
            adjustment<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"> </span>fixed
            <span class="_"></span>or<span class="_"> </span>lump
            <span class="_"> </span>sum<span class="_"></span>fe
            <span class="_ _0"></span>e<span class="_"> </span>consistent
            <span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>provisions<span class="_"> </span>of
            <span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1">
            Agreement, and a determination of the length of the extensions of
            the duration of this <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            5.1.3<span class="_ _27"> </span>Changes in the CM’s Basic Services
          </div>
          <div class="t m0 x8 h3 y75 ff2 fs0 fc0 sc0 ls0 ws7">
            Changes<span class="_ _6"> </span>in<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM’s<span class="_ _6"> </span>Basic
            <span class="_ _14"> </span>Services<span class="_ _6"> </span>in
            <span class="_ _14"> </span>Paragraphs<span class="_ _14"> </span>
            3.2,<span class="_ _6"> </span>3.3<span class="_ _14"> </span>and
            <span class="_ _6"> </span>3.4<span class="_ _14"> </span>and
            <span class="_"> </span>entitlement<span class="_"> </span>to
            <span class="_"> </span>additional
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws66">
            compensation<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>made<span class="_"> </span>by
            <span class="_"></span>a<span class="_ _12"> </span>written
            <span class="_ _12"> </span>change<span class="_ _12"> </span>order
            <span class="_ _12"> </span>to<span class="_ _12"> </span>this
            <span class="_ _12"> </span>Agreement<span class="_ _12"> </span>
            executed<span class="_ _12"></span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>and
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws10">
            CM.<span class="_ _13"> </span>The<span class="_"> </span>change
            <span class="_"> </span>order<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>executed
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>and
            <span class="_"> </span>CM<span class="_ _12"></span>prior
            <span class="_ _12"> </span>to<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>performing
            <span class="_ _12"> </span>the<span class="_ _12"></span>services
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws4">
            required<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>change<span class="_"> </span>order
            <span class="_ _1"></span>.<span class="_ _18"></span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>proceed<span class="_"> </span>to
            <span class="_"> </span>perform<span class="_"> </span>the
            <span class="_"> </span>services<span class="_"> </span>required
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>change<span class="_ _f"></span>order
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws66">
            only<span class="_"> </span>after<span class="_"> </span>receiving
            <span class="_"> </span>notice<span class="_"> </span>directing
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>to<span class="_"> </span>proceed.
            <span class="_ _18"> </span>The<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>not
            <span class="_ _12"> </span>be<span class="_ _12"> </span>entitled
            <span class="_ _12"> </span>to<span class="_ _12"> </span>
            compensation<span class="_ _12"></span>for
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
            work performed without a written change order
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws1">
            5.1.4<span class="_ _16"> </span>Payment of
            <span class="_ _1"></span>Additional Compensation
          </div>
          <div class="t m0 x8 h3 ya ff2 fs0 fc0 sc0 ls0 ws112">
            The<span class="_ _19"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>submit<span class="_"> </span>invoices
            <span class="_"> </span>for<span class="_"> </span>additional
            <span class="_"> </span>compensation<span class="_"> </span>with
            <span class="_"> </span>its<span class="_"> </span>invoice
            <span class="_"> </span>for<span class="_"></span>Basic
            <span class="_"> </span>Services<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws1">
            payment shall be made pursuant to the provisions of
            <span class="_ _20"></span>Article 7 of this
            <span class="_ _1"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws1">
            5.2<span class="_ _1e"> </span>Changes to the Work or Construction
            Phase Basic Services
          </div>
          <div class="t m0 x8 h3 y83 ff2 fs0 fc0 sc0 ls0 ws7">
            The<span class="_ _6"> </span>Owner<span class="_ _14"> </span>may
            <span class="_ _20"></span>,<span class="_ _14"> </span>at
            <span class="_ _6"></span>any<span class="_ _14"> </span>time,
            <span class="_"> </span>by<span class="_"></span>written
            <span class="_"> </span>order<span class="_"> </span>designated
            <span class="_"> </span>or<span class="_"> </span>indicated
            <span class="_"> </span>to<span class="_"> </span>be
            <span class="_"></span>a<span class="_"> </span>change
            <span class="_"> </span>order<span class="_ _1"></span>,
            <span class="_"> </span>make
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws15">
            any<span class="_ _12"> </span>change<span class="_ _12"> </span>or
            <span class="_ _12"> </span>modification<span class="_ _12"></span>
            in<span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_"> </span>or<span class="_"> </span>add
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"></span>within
            <span class="_"> </span>the<span class="_"> </span>general
            <span class="_"> </span>scope<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>contract,
            <span class="_"> </span>including,
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 wsdc">
            but<span class="_ _6"> </span>not<span class="_ _14"> </span>limited
            <span class="_ _6"> </span>to<span class="_ _14"> </span>changes:
            <span class="_"> </span>(1)<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>specifications
            <span class="_"> </span>or<span class="_"> </span>drawings;
            <span class="_"> </span>(2)<span class="_"></span>in
            <span class="_"> </span>the<span class="_"> </span>sequence,
            <span class="_"></span>method<span class="_"> </span>or
            <span class="_"> </span>manner<span class="_"></span>of
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws44">
            performance<span class="_ _6"> </span>of<span class="_ _14"> </span>
            the<span class="_ _6"> </span>work;<span class="_ _14"> </span>(3)
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>Owner-furnished<span class="_"> </span>
            facilities,<span class="_"></span>equipment,<span class="_"> </span>
            materials,<span class="_"> </span>services<span class="_"> </span>or
            <span class="_"> </span>site;<span class="_"> </span>or
            <span class="_"> </span>(4)
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            directing acceleration in the performance of the work.
          </div>
          <div class="t m0 x8 h3 y68 ff2 fs0 fc0 sc0 ls0 ws113">
            The<span class="_"> </span>parties<span class="_"> </span>agree
            <span class="_"></span>that<span class="_"> </span>notwithstanding
            <span class="_"> </span>any<span class="_"> </span>language
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>contrary<span class="_"> </span>in
            <span class="_"></span>Paragraphs<span class="_"> </span>5.2.1
            <span class="_"> </span>through
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws26">
            5.2.4,<span class="_"> </span>the<span class="_"> </span>CM’s
            <span class="_"></span>fee<span class="_"> </span>on
            <span class="_"> </span>any<span class="_"></span>additional
            <span class="_"> </span>work<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"> </span>fee
            <span class="_"></span>reducti<span class="_ _0"></span>on
            <span class="_"> </span>for<span class="_"></span>any
            <span class="_"> </span>work<span class="_"> </span>or
            <span class="_"></span>allowances<span class="_"> </span>removed
            <span class="_"> </span>from
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws26">
            the<span class="_"> </span>scope<span class="_"> </span>of
            <span class="_"></span>work<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>based
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>same<span class="_"> </span>percentage
            <span class="_"> </span>fee<span class="_"> </span>specified
            <span class="_"> </span>in<span class="_"></span>Paragraph
            <span class="_"> </span>7.4.1,<span class="_"> </span>unless
            <span class="_"> </span>the<span class="_ _f"> </span>CM
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws66">
            performs<span class="_ _19"> </span>the<span class="_"> </span>work
            <span class="_"> </span>with<span class="_"> </span>its
            <span class="_"></span>own<span class="_"> </span>forces
            <span class="_"> </span>as<span class="_"></span>allowed
            <span class="_"> </span>in<span class="_"> </span>this
            <span class="_"></span>Agreement.<span class="_ _1d"> </span>The
            <span class="_"> </span>parties<span class="_"> </span>agree
            <span class="_"> </span>that<span class="_"> </span>Paragraphs
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws61">
            5.2.1.1<span class="_ _15"> </span>through
            <span class="_ _15"></span>5.2.1.3<span class="_"> </span>are
            <span class="_"> </span>intended<span class="_"> </span>to
            <span class="_"> </span>govern<span class="_"> </span>payment
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"> </span>contractors<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>subcontractors
            <span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws114">
            performing<span class="_ _12"> </span>work
            <span class="_ _12"></span>associated<span class="_ _12"> </span>
            with<span class="_ _12"></span>a<span class="_ _12"> </span>change,
            <span class="_ _12"> </span>unless<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>performs
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>with<span class="_"> </span>its
            <span class="_"> </span>own<span class="_"></span>forces
            <span class="_"> </span>as<span class="_"> </span>allowed
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws115">
            in<span class="_"> </span>this<span class="_"> </span>Agreement.
            <span class="_ _18"> </span>If<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>performs
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>with<span class="_"></span>its
            <span class="_"> </span>own<span class="_"> </span>forces,
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>also
            <span class="_"> </span>be<span class="_ _f"> </span>referred
            <span class="_ _f"> </span>to<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 wsfb">
            term<span class="_ _12"> </span>“contractor”
            <span class="_ _12"></span>in<span class="_ _12"> </span>Paragraphs
            <span class="_ _12"> </span>5.2.1.1<span class="_ _12"> </span>
            through<span class="_"> </span>5.2.1.3.<span class="_"> </span>The
            <span class="_"> </span>parties<span class="_"> </span>specifically
            <span class="_"> </span>agree<span class="_"> </span>that
            <span class="_"> </span>any<span class="_"></span>adjustment
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws116">
            the<span class="_ _12"> </span>amount<span class="_ _12"> </span>
            that<span class="_ _12"> </span>could<span class="_ _12"> </span>be
            <span class="_ _12"> </span>reimbursed<span class="_ _12"> </span>
            for<span class="_"> </span>general<span class="_"> </span>
            conditions,<span class="_"> </span>if<span class="_"> </span>any
            <span class="_ _20"></span>,<span class="_"> </span>shall
            <span class="_"></span>be<span class="_"> </span>negotiated
            <span class="_"> </span>in<span class="_"></span>good
            <span class="_"> </span>faith<span class="_"> </span>between
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws71">
            the<span class="_ _6"> </span>parties<span class="_ _14"> </span>
            based<span class="_ _6"> </span>upon<span class="_ _14"> </span>the
            <span class="_ _6"> </span>additional<span class="_ _14"> </span>
            work<span class="_ _14"> </span>actually<span class="_"> </span>
            required<span class="_"> </span>to<span class="_"> </span>be
            <span class="_"></span>performed<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>as<span class="_"> </span>a
            <span class="_"></span>result<span class="_"> </span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws0">change.</div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1">
            5.2.1<span class="_ _5"> </span>Owner Directed Changes to the Work
            Requiring an Increase in GMP
          </div>
          <div class="t m0 x8 h3 y6e ff2 fs0 fc0 sc0 ls0 ws4">
            If<span class="_"> </span>the<span class="_"> </span>change
            <span class="_"></span>in<span class="_"> </span>or
            <span class="_"> </span>addition<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>will<span class="_"> </span>result
            <span class="_"> </span>in<span class="_"></span>an
            <span class="_"> </span>increase<span class="_"> </span>in
            <span class="_ _f"></span>the<span class="_ _f"> </span>Guaranteed
            <span class="_ _f"> </span>Maximum<span class="_ _f"> </span>Price,
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws77">
            the<span class="_"> </span>Owner<span class="_"> </span>shall
            <span class="_"></span>have<span class="_"> </span>the
            <span class="_"> </span>right<span class="_"></span>to
            <span class="_"> </span>require<span class="_"> </span>the
            <span class="_"></span>performance<span class="_"> </span>thereof
            <span class="_"> </span>on<span class="_"> </span>a
            <span class="_"> </span>lump<span class="_"></span>sum
            <span class="_"> </span>basis,<span class="_"> </span>a
            <span class="_"></span>unit<span class="_"> </span>price
            <span class="_"> </span>basis<span class="_"></span>or
            <span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws117">
            time<span class="_ _6"> </span>and<span class="_ _14"> </span>
            material<span class="_ _6"> </span>basis,<span class="_ _14"></span>
            all<span class="_ _6"> </span>as<span class="_ _14"> </span>
            hereinafter<span class="_ _14"> </span>more<span class="_"> </span>
            particularly<span class="_"> </span>described<span class="_"></span>
            (the<span class="_"> </span>right<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>as<span class="_"></span>aforesaid
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws1">
            shall apply with respect to each such change in the work).
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws85">
            5.2.1.1<span class="_ _1c"> </span>If<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>elects
            <span class="_ _12"> </span>to<span class="_ _12"> </span>have
            <span class="_ _12"> </span>the<span class="_"> </span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>performed
            <span class="_"> </span>on<span class="_"> </span>a
            <span class="_"> </span>lump<span class="_"></span>sum
            <span class="_"> </span>basis,<span class="_"> </span>its
            <span class="_"></span>election<span class="_"> </span>shall
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws8d">
            be<span class="_"> </span>based<span class="_"> </span>on
            <span class="_"></span>a<span class="_"> </span>lump
            <span class="_"> </span>sum<span class="_"></span>proposal
            <span class="_"> </span>which<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>submitted
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>to
            <span class="_ _f"> </span>the<span class="_ _f"></span>Owner
            <span class="_ _f"> </span>within<span class="_ _f"> </span>ten
            <span class="_ _f"> </span>(10)<span class="_ _f"> </span>days
            <span class="_ _10"> </span>of
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws118">
            the<span class="_ _12"> </span>CM&apos;s<span class="_ _12"> </span>
            receipt<span class="_ _12"> </span>of<span class="_"> </span>a
            <span class="_"></span>request<span class="_"> </span>therefor
            <span class="_"> </span>(but<span class="_"> </span>the
            <span class="_"> </span>Owner&apos;s<span class="_"> </span>request
            <span class="_"> </span>for<span class="_"> </span>a
            <span class="_"> </span>lump<span class="_"></span>sum
            <span class="_"> </span>proposal<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>deemed
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws24">
            an<span class="_ _19"> </span>election<span class="_ _19"> </span>by
            <span class="_ _19"> </span>the<span class="_ _19"> </span>Owner
            <span class="_ _19"> </span>to<span class="_ _19"> </span>have
            <span class="_ _19"> </span>the<span class="_"> </span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>performed
            <span class="_"> </span>on<span class="_"> </span>a
            <span class="_"> </span>lump<span class="_"></span>sum
            <span class="_"> </span>basis).<span class="_ _13"> </span>The
            <span class="_"> </span>CM&apos;s
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws26">
            proposal<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>itemized<span class="_"> </span>and
            <span class="_"> </span>segregated<span class="_"> </span>by
            <span class="_"> </span>labor<span class="_"> </span>and
            <span class="_ _f"> </span>materials<span class="_ _f"> </span>for
            <span class="_ _f"> </span>the<span class="_ _f"> </span>various
            <span class="_ _f"> </span>components<span class="_ _f"> </span>of
            <span class="_ _10"> </span>the<span class="_ _f"> </span>change
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws4">
            in<span class="_"> </span>or<span class="_"> </span>addition
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"></span>(no
            <span class="_"> </span>aggregate<span class="_"> </span>labor
            <span class="_"> </span>total<span class="_"> </span>will
            <span class="_"></span>be<span class="_"> </span>acceptable)
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>accompanied
            <span class="_ _f"> </span>by<span class="_ _f"> </span>signed
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws119">
            proposals<span class="_ _6"> </span>of<span class="_ _14"> </span>
            any<span class="_ _6"> </span>contractors<span class="_ _14"></span>
            who<span class="_ _6"> </span>will<span class="_"> </span>perform
            <span class="_"> </span>any<span class="_"> </span>portion
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>change<span class="_"> </span>in,
            <span class="_"> </span>or<span class="_"></span>addition
            <span class="_"> </span>to,<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>and
            <span class="_"> </span>of
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">26</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf1b" class="pf w0 h0" data-page-no="1b">
        <div class="pc pc1b w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws11a">
            any<span class="_ _19"> </span>persons<span class="_ _19"> </span>
            who<span class="_ _19"> </span>will<span class="_ _19"> </span>
            furnish<span class="_ _19"> </span>materials
            <span class="_ _19"></span>or<span class="_ _19"> </span>equipment
            <span class="_ _19"> </span>for<span class="_ _19"> </span>
            incorporation<span class="_ _19"></span>therein.
            <span class="_ _17"> </span>The<span class="_ _19"> </span>proposal
            <span class="_ _19"> </span>shall<span class="_"> </span>also
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            include the CM&apos;s estimate of the time required to perform said
            changes or additional work.
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws8d">
            5.2.1.1.1<span class="_ _6"> </span>The<span class="_ _14"> </span>
            portion<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>proposal<span class="_"> </span>relating
            <span class="_"> </span>to<span class="_"> </span>labor
            <span class="_ _1"></span>,<span class="_"></span>by
            <span class="_"> </span>the<span class="_"> </span>forces
            <span class="_"></span>of<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>contractors,<span class="_"> </span>may
            <span class="_"> </span>include:
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws11b">
            reasonably<span class="_ _6"> </span>anticipated
            <span class="_"></span>gross<span class="_"> </span>wages
            <span class="_"> </span>of<span class="_"></span>job
            <span class="_"> </span>site<span class="_"> </span>labor
            <span class="_ _1"></span>,<span class="_"> </span>including
            <span class="_"> </span>foremen,<span class="_"> </span>who
            <span class="_"> </span>will<span class="_"> </span>be
            <span class="_"> </span>directly<span class="_"></span>involved
            <span class="_"> </span>in<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws8c">
            change<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>(for
            <span class="_"> </span>such<span class="_"></span>time
            <span class="_"> </span>as<span class="_"> </span>they
            <span class="_"></span>will<span class="_"> </span>be
            <span class="_"> </span>so<span class="_ _6"></span>involved),
            <span class="_ _14"> </span>plus<span class="_ _6"></span>premium
            <span class="_ _14"> </span>costs<span class="_ _6"> </span>of
            <span class="_ _14"> </span>overtime<span class="_ _6"> </span>time,
            <span class="_ _14"> </span>if
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws11c">
            overtime<span class="_ _6"> </span>is<span class="_ _14"> </span>
            anticipated;<span class="_ _6"> </span>a<span class="_"> </span>
            maximum<span class="_"> </span>labor<span class="_"> </span>burden
            <span class="_"> </span>of<span class="_"> </span>thirty
            <span class="_"></span>nine<span class="_"> </span>percent
            <span class="_"> </span>(39%)<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>actual
            <span class="_"> </span>cost<span class="_"> </span>of
            <span class="_"></span>labor<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws11d">
            any<span class="_ _12"> </span>such<span class="_ _12"> </span>
            contractor<span class="_ _12"> </span>in<span class="_ _12"> </span>
            connection<span class="_ _12"> </span>with
            <span class="_ _12"></span>such<span class="_ _12"> </span>labor;
            <span class="_ _12"> </span>and<span class="_ _12"> </span>up
            <span class="_ _12"> </span>to<span class="_"> </span>fifteen
            <span class="_"> </span>percent<span class="_"> </span>(15%)
            <span class="_"> </span>of<span class="_"></span>such
            <span class="_"> </span>anticipated<span class="_"> </span>gross
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws11e">
            wages,<span class="_ _12"> </span>as<span class="_ _12"> </span>
            overhead<span class="_ _12"> </span>and<span class="_ _12"> </span>
            profit<span class="_ _12"> </span>for<span class="_ _12"> </span>any
            <span class="_ _12"> </span>such<span class="_ _12"> </span>
            contractor<span class="_ _1"></span>,<span class="_ _12"> </span>as
            <span class="_ _12"> </span>applicable<span class="_ _12"> </span>
            (said<span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"> </span>profit<span class="_"> </span>to
            <span class="_"></span>include<span class="_"> </span>all
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws1">
            extended general conditions and supervision, but it shall not
            include the labor burden).
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws113">
            5.2.1.1.2<span class="_ _17"> </span>The<span class="_ _19"> </span>
            portion<span class="_ _19"> </span>of<span class="_"> </span>the
            <span class="_"> </span>proposal<span class="_"> </span>relating
            <span class="_"> </span>to<span class="_"> </span>materials
            <span class="_"> </span>may<span class="_"> </span>include
            <span class="_"> </span>the<span class="_"> </span>reasonably
            <span class="_"> </span>anticipated<span class="_"></span>direct
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws66">
            costs<span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>contractor<span class="_"> </span>or
            <span class="_"> </span>to<span class="_"></span>any
            <span class="_"> </span>of<span class="_ _12"> </span>its
            <span class="_ _12"></span>subcontractors
            <span class="_ _12"> </span>of<span class="_ _12"></span>materials
            <span class="_ _12"> </span>to<span class="_ _12"> </span>be
            <span class="_ _12"> </span>purchased<span class="_ _12"> </span>for
            <span class="_ _12"> </span>incorporation<span class="_ _12"></span>
            in<span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws5">
            change<span class="_ _12"> </span>in<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>plus
            <span class="_"> </span>transportation<span class="_"> </span>and
            <span class="_"> </span>applicable<span class="_"> </span>sales
            <span class="_"> </span>and<span class="_"> </span>use
            <span class="_"> </span>taxes<span class="_"></span>and
            <span class="_"> </span>up<span class="_"> </span>to
            <span class="_"></span>fifteen<span class="_"> </span>percent
            <span class="_"> </span>(15%)<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 wsac">
            said<span class="_"> </span>direct<span class="_"> </span>material
            <span class="_"> </span>costs<span class="_"> </span>as
            <span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"></span>profit<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>contractor
            <span class="_"> </span>or<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"> </span>its
            <span class="_"></span>subcontractors<span class="_"> </span>(said
            <span class="_"> </span>overhead
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws115">
            and<span class="_ _6"> </span>profit<span class="_ _14"> </span>to
            <span class="_ _6"> </span>include<span class="_"> </span>all
            <span class="_"> </span>small<span class="_"> </span>tools),
            <span class="_"> </span>and<span class="_"> </span>may
            <span class="_"></span>further<span class="_"> </span>include
            <span class="_"> </span>the<span class="_"> </span>contractor
            <span class="_ _3"></span>’s<span class="_"> </span>and
            <span class="_"> </span>any<span class="_"></span>of
            <span class="_"> </span>its<span class="_"> </span>
            subcontractor&apos;s
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws11f">
            reasonably<span class="_ _6"> </span>anticipated
            <span class="_ _14"></span>rental<span class="_ _6"> </span>costs
            <span class="_ _14"> </span>in<span class="_ _6"> </span>connection
            <span class="_ _14"> </span>with<span class="_ _14"> </span>the
            <span class="_ _6"> </span>change<span class="_ _14"> </span>in
            <span class="_ _6"> </span>the<span class="_ _14"> </span>work
            <span class="_"> </span>(either<span class="_"> </span>actual
            <span class="_"> </span>or<span class="_"> </span>discounted
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws98">
            local<span class="_ _12"> </span>published
            <span class="_ _12"></span>rates),<span class="_ _12"> </span>plus
            <span class="_"> </span>up<span class="_"> </span>to
            <span class="_"> </span>eight<span class="_"></span>percent
            <span class="_"> </span>(8%)<span class="_"> </span>thereof
            <span class="_"> </span>as<span class="_"> </span>overhead
            <span class="_"> </span>and<span class="_"> </span>profit
            <span class="_"> </span>for<span class="_"> </span>any
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>contractors,
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws4">
            as<span class="_"> </span>applicable<span class="_"> </span>(said
            <span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"> </span>profit<span class="_"> </span>to
            <span class="_"></span>include<span class="_"> </span>all
            <span class="_"> </span>extended<span class="_"> </span>general
            <span class="_"> </span>conditions<span class="_ _f"> </span>and
            <span class="_ _f"> </span>supervision,<span class="_ _f"> </span>
            except<span class="_ _f"></span>it
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws26">
            shall<span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>applied<span class="_"> </span>to
            <span class="_"> </span>any<span class="_"></span>sales
            <span class="_"> </span>tax<span class="_"> </span>paid
            <span class="_"></span>for<span class="_"> </span>any
            <span class="_ _f"> </span>purpose<span class="_ _f"> </span>or
            <span class="_ _f"> </span>shipping<span class="_ _f"> </span>costs
            <span class="_ _f"> </span>incurred<span class="_ _f"> </span>by
            <span class="_ _10"> </span>the<span class="_ _f"> </span>contra
            <span class="_ _f"> </span>tor<span class="_ _f"> </span>or
            <span class="_ _f"> </span>any
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws120">
            subcontractor).<span class="_ _18"> </span>If
            <span class="_ _12"></span>any<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>items
            <span class="_"> </span>included<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>lump
            <span class="_"></span>sum<span class="_"> </span>proposal
            <span class="_"> </span>are<span class="_"></span>covered
            <span class="_"> </span>by<span class="_"> </span>unit
            <span class="_"></span>prices<span class="_"> </span>contained
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws43">
            the<span class="_ _12"> </span>contract<span class="_ _12"> </span>
            documents,<span class="_ _12"> </span>the<span class="_ _12"></span>
            Owner<span class="_"> </span>may<span class="_ _20"></span>,
            <span class="_"></span>if<span class="_"> </span>it
            <span class="_"> </span>requires<span class="_"></span>the
            <span class="_"> </span>change<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>to<span class="_"></span>be
            <span class="_"> </span>performed<span class="_"> </span>on
            <span class="_"></span>a<span class="_"> </span>lump
            <span class="_"> </span>sum
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws4">
            basis,<span class="_"> </span>elect<span class="_"> </span>to
            <span class="_"></span>use<span class="_"> </span>these
            <span class="_"> </span>unit<span class="_"></span>prices
            <span class="_"> </span>in<span class="_"> </span>lieu
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>similar<span class="_"></span>items
            <span class="_"> </span>included<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>lump
            <span class="_"></span>sum<span class="_"> </span>proposal,
            <span class="_"> </span>in<span class="_"></span>which
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 wsd9">
            event<span class="_"> </span>an<span class="_"> </span>appropriate
            <span class="_"> </span>deduction<span class="_"> </span>will
            <span class="_"> </span>be<span class="_"> </span>made
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>lump<span class="_"></span>sum
            <span class="_"> </span>amount<span class="_ _f"> </span>prior
            <span class="_ _f"> </span>to<span class="_ _f"> </span>the
            <span class="_ _f"> </span>application<span class="_ _f"> </span>of
            <span class="_ _f"> </span>any<span class="_ _10"> </span>allowed
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            overhead and profit percentages. No overhead and profit shall be
            applied to any unit prices.
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws121">
            5.2.1.1.3<span class="_"> </span>The<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>provide
            <span class="_"> </span>any<span class="_"> </span>documentation
            <span class="_"> </span>that<span class="_"> </span>may
            <span class="_ _6"> </span>be<span class="_ _14"></span>requested
            <span class="_ _6"> </span>by<span class="_ _14"> </span>the
            <span class="_ _6"> </span>Owner<span class="_ _14"> </span>to
            <span class="_ _6"> </span>support<span class="_ _14"> </span>the
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws4">
            change<span class="_"> </span>proposal<span class="_"> </span>
            including<span class="_"> </span>payroll<span class="_"> </span>
            records,<span class="_"> </span>insurance<span class="_"> </span>
            rates,<span class="_"> </span>material<span class="_"> </span>quotes
            <span class="_"> </span>or<span class="_"> </span>rental
            <span class="_"></span>quotes.<span class="_ _18"> </span>The
            <span class="_"> </span>CM<span class="_ _f"> </span>shall
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 wsa0">
            also<span class="_ _12"> </span>provide<span class="_ _12"> </span>
            an<span class="_ _12"> </span>itemized<span class="_ _12"> </span>
            breakdown<span class="_ _12"> </span>of<span class="_ _12"> </span>
            all<span class="_ _12"> </span>transportation
            <span class="_ _12"></span>and<span class="_ _12"> </span>shipping
            <span class="_"> </span>costs,<span class="_"> </span>including
            <span class="_"> </span>receipts<span class="_"> </span>documenting
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            the expenses.
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws119">
            5.2.1.1.4<span class="_ _6"> </span>The<span class="_ _14"> </span>
            lump<span class="_"> </span>sum<span class="_"> </span>proposal
            <span class="_"> </span>may<span class="_"> </span>include
            <span class="_"> </span>up<span class="_"> </span>to
            <span class="_"></span>eight<span class="_"> </span>percent
            <span class="_"> </span>(8%)<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>amount
            <span class="_"> </span>which<span class="_"> </span>the
            <span class="_"></span>contractor
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws122">
            will<span class="_ _19"> </span>pay<span class="_ _19"> </span>to
            <span class="_ _19"> </span>any<span class="_ _19"> </span>of
            <span class="_ _19"> </span>its<span class="_ _19"> </span>
            subcontractors<span class="_ _19"> </span>for
            <span class="_ _19"></span>the<span class="_"> </span>change
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>work<span class="_"> </span>as
            <span class="_"></span>a<span class="_"> </span>commission
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>contractor<span class="_ _1"></span>.
            <span class="_"> </span>The
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws91">
            change<span class="_ _19"> </span>proposal
            <span class="_ _19"></span>form<span class="_ _19"> </span>attached
            <span class="_ _19"> </span>to<span class="_ _19"> </span>this
            <span class="_ _19"> </span>Agreement<span class="_ _19"> </span>as
            <span class="_"> </span>Appendix<span class="_"> </span>D-1
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>used<span class="_"></span>to
            <span class="_"> </span>submit<span class="_"> </span>the
            <span class="_"></span>change
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
            proposal to the Owner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws26">
            5.2.1.1.5<span class="_"> </span>In<span class="_"> </span>the
            <span class="_"></span>event<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>fails<span class="_"> </span>to
            <span class="_"></span>submit<span class="_"> </span>his
            <span class="_"> </span>proposal<span class="_"> </span>within
            <span class="_"> </span>the<span class="_"> </span>designated
            <span class="_"> </span>period,<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _f"> </span>may
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws88">
            order<span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>to<span class="_"> </span>proceed
            <span class="_"> </span>with<span class="_"></span>the
            <span class="_"> </span>change<span class="_"> </span>or
            <span class="_"></span>addition<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_ _f"> </span>so<span class="_ _f"></span>proceed.
            <span class="_ _1c"> </span>The<span class="_ _f"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws123">
            shall<span class="_ _21"> </span>unilaterally
            <span class="_ _21"></span>determine<span class="_ _21"> </span>the
            <span class="_ _21"> </span>reasonable<span class="_ _21"> </span>
            cost<span class="_ _21"></span>and<span class="_ _21"> </span>time
            <span class="_ _21"> </span>to<span class="_ _21"> </span>perform
            <span class="_ _21"> </span>the<span class="_ _21"> </span>work
            <span class="_ _21"> </span>in<span class="_"> </span>question,
            <span class="_"> </span>which
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            determination shall be final and binding upon the CM.
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1f">
            5.2.1.1.6<span class="_ _12"> </span>In<span class="_ _12"> </span>
            the<span class="_ _12"> </span>event<span class="_ _12"> </span>that
            <span class="_ _12"> </span>the<span class="_ _12"> </span>parties
            <span class="_ _12"> </span>are<span class="_ _12"> </span>unable
            <span class="_ _12"> </span>to<span class="_ _12"> </span>agree
            <span class="_ _12"> </span>as<span class="_ _12"> </span>to
            <span class="_"> </span>the<span class="_"> </span>reasonable
            <span class="_"> </span>cost<span class="_"> </span>and
            <span class="_"> </span>time<span class="_"> </span>to
            <span class="_"></span>perform<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws4">
            change<span class="_"> </span>in<span class="_"> </span>or
            <span class="_"></span>addition<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>based<span class="_"> </span>upon
            <span class="_"></span>the<span class="_"> </span>CM&apos;s
            <span class="_"> </span>proposal<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>does<span class="_"> </span>not
            <span class="_"></span>elect<span class="_"> </span>to
            <span class="_"> </span>have<span class="_ _f"></span>the
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws11">
            change<span class="_ _12"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>work<span class="_ _12"> </span>
            performed<span class="_ _12"> </span>on<span class="_"> </span>a
            <span class="_"> </span>time<span class="_"> </span>and
            <span class="_"></span>material<span class="_"> </span>basis,
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>may<span class="_"></span>choose
            <span class="_"> </span>to<span class="_"> </span>make
            <span class="_"></span>a<span class="_"> </span>determination
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws58">
            of<span class="_ _6"> </span>the<span class="_ _14"> </span>
            reasonable<span class="_ _6"> </span>cost<span class="_ _14"></span>
            and<span class="_ _6"> </span>time<span class="_ _14"> </span>to
            <span class="_ _14"> </span>perform<span class="_ _6"> </span>the
            <span class="_ _14"> </span>change<span class="_ _6"> </span>in
            <span class="_ _14"> </span>the<span class="_ _6"> </span>work,
            <span class="_ _14"> </span>based<span class="_ _14"> </span>upon
            <span class="_ _6"> </span>their<span class="_"> </span>own
            <span class="_"> </span>estimates,<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws66">
            CM&apos;s<span class="_"> </span>submission<span class="_"> </span>
            or<span class="_"> </span>a<span class="_"> </span>combination
            <span class="_ _12"></span>thereof,<span class="_ _12"> </span>
            except<span class="_ _12"></span>for<span class="_ _12"> </span>a
            <span class="_ _12"> </span>change<span class="_ _12"> </span>order
            <span class="_ _12"> </span>initially<span class="_ _12"> </span>
            establishing<span class="_ _12"></span>the
            <span class="_ _12"> </span>GMP<span class="_ _12"> </span>for
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 wsfb">
            Project<span class="_ _12"> </span>or<span class="_ _12"> </span>
            initially<span class="_ _12"> </span>establishing
            <span class="_ _12"></span>a<span class="_ _12"> </span>partial
            <span class="_ _12"> </span>GMP<span class="_ _12"> </span>for
            <span class="_ _12"> </span>a<span class="_ _12"> </span>portion
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>work<span class="_ _12"> </span>included
            <span class="_ _12"> </span>in<span class="_"> </span>the
            <span class="_"> </span>original<span class="_"></span>Project
            <span class="_"> </span>scope.
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws4">
            A<span class="_"> </span>change<span class="_"> </span>order
            <span class="_"></span>shall<span class="_"> </span>be
            <span class="_"> </span>issued<span class="_"></span>in
            <span class="_"> </span>this<span class="_"> </span>case
            <span class="_"></span>for<span class="_"> </span>the
            <span class="_"> </span>amounts<span class="_"></span>of
            <span class="_"> </span>cost<span class="_"> </span>and
            <span class="_"></span>time<span class="_"> </span>determined
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws94">
            shall<span class="_ _12"> </span>become<span class="_ _12"> </span>
            binding<span class="_ _12"> </span>upon<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>unless
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>submits<span class="_"></span>its
            <span class="_"> </span>protest<span class="_"> </span>in
            <span class="_"></span>writing<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>within<span class="_"> </span>thirty
            <span class="_"> </span>(30)
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 wse">
            days<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>issuance<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>change
            <span class="_"> </span>order<span class="_ _1"></span>.
            <span class="_ _1d"></span>Owner<span class="_"> </span>has
            <span class="_"> </span>the<span class="_"></span>right
            <span class="_"> </span>to<span class="_ _12"> </span>direct
            <span class="_ _12"> </span>in<span class="_ _12"> </span>writing
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>to<span class="_ _12"> </span>perform
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws10">
            change<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>which
            <span class="_"> </span>is<span class="_"></span>the
            <span class="_"> </span>subject<span class="_"> </span>of
            <span class="_"></span>such<span class="_ _12"> </span>change
            <span class="_ _12"> </span>order<span class="_ _20"></span>.
            <span class="_ _21"> </span>Failure<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>parties
            <span class="_ _12"> </span>to<span class="_ _12"> </span>reach
            <span class="_ _12"> </span>agreement
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws3a">
            regarding<span class="_ _6"> </span>the<span class="_ _14"> </span>
            cost<span class="_"> </span>and<span class="_"> </span>time
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>performing<span class="_"> </span>the
            <span class="_"> </span>change<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>and/or<span class="_"> </span>any
            <span class="_"></span>pending<span class="_"> </span>protest,
            <span class="_"> </span>shall<span class="_"> </span>not
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws1">
            relieve the CM from performing the change in the work promptly and
            expeditiously<span class="_ _4"></span>.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">27</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf1c" class="pf w0 h0" data-page-no="1c">
        <div class="pc pc1c w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws88">
            5.2.1.1.7<span class="_"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>reserves<span class="_"> </span>the
            <span class="_"> </span>right<span class="_"> </span>to
            <span class="_"></span>reject<span class="_"> </span>the
            <span class="_"> </span>CM&apos;s<span class="_"> </span>proposal
            <span class="_"> </span>for<span class="_"> </span>a
            <span class="_"> </span>change<span class="_"></span>in
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>and<span class="_"> </span>to
            <span class="_"> </span>elect<span class="_ _f"></span>to
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws124">
            perform<span class="_ _19"> </span>said<span class="_ _19"> </span>
            work<span class="_ _19"> </span>using<span class="_ _19"> </span>a
            <span class="_ _19"> </span>separate<span class="_"> </span>
            contractor<span class="_ _1"></span>.<span class="_ _13"> </span>
            Under<span class="_"> </span>such<span class="_"> </span>
            circumstances,<span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>coordinate
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws1">
            performance of the work.
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 wscf">
            5.2.1.2<span class="_ _1c"> </span>If<span class="_ _12"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>elects
            <span class="_"></span>to<span class="_"> </span>have
            <span class="_"> </span>the<span class="_"></span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>performed
            <span class="_"> </span>on<span class="_"> </span>a
            <span class="_"> </span>time<span class="_"></span>and
            <span class="_"> </span>material<span class="_"> </span>basis,
            <span class="_"> </span>the<span class="_"> </span>same
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws18">
            shall<span class="_ _12"> </span>be<span class="_ _12"> </span>
            performed,<span class="_ _12"> </span>by<span class="_ _12"> </span>
            the<span class="_ _12"> </span>forces<span class="_ _12"> </span>of
            <span class="_"> </span>any<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>contractors,
            <span class="_"> </span>at<span class="_"> </span>actual
            <span class="_"> </span>cost<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>entity
            <span class="_"></span>performing<span class="_"> </span>the
            <span class="_"> </span>change
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws4">
            in<span class="_"> </span>the<span class="_"> </span>work.
            <span class="_ _18"></span>The<span class="_"> </span>change
            <span class="_"> </span>proposal<span class="_"> </span>form
            <span class="_"> </span>attached<span class="_"> </span>as
            <span class="_"> </span>Appendix<span class="_"> </span>D-2
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
            <span class="_ _f"> </span>used<span class="_ _f"> </span>to
            <span class="_ _f"> </span>submit<span class="_ _10"> </span>the
            <span class="_ _f"> </span>initial<span class="_ _f"> </span>change
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws14">
            proposal<span class="_ _12"> </span>to<span class="_ _12"> </span>
            the<span class="_ _12"> </span>Owner<span class="_ _12"> </span>for
            <span class="_ _12"> </span>approval<span class="_ _12"> </span>to
            <span class="_ _12"> </span>proceed.<span class="_ _18"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>maintain<span class="_"> </span>records
            <span class="_"> </span>to<span class="_"> </span>submit
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws18">
            as<span class="_ _12"> </span>daily<span class="_"> </span>time
            <span class="_"></span>and<span class="_"> </span>material
            <span class="_"> </span>tickets,<span class="_"> </span>to
            <span class="_"> </span>include<span class="_"> </span>the
            <span class="_"> </span>identification<span class="_"> </span>number
            <span class="_"> </span>assigned<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws24">
            location<span class="_ _19"> </span>and<span class="_ _19"> </span>
            description<span class="_ _19"> </span>of<span class="_"> </span>the
            <span class="_"> </span>change<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>work,
            <span class="_"> </span>the<span class="_"></span>classification
            <span class="_"> </span>of<span class="_"> </span>labor
            <span class="_"> </span>employed<span class="_"> </span>(and
            <span class="_"> </span>names<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws125">
            employee<span class="_ _12"> </span>numbers),
            <span class="_ _12"></span>the<span class="_ _12"> </span>materials
            <span class="_"> </span>used,<span class="_"> </span>the
            <span class="_"> </span>equipment<span class="_"> </span>rented
            <span class="_"> </span>(not<span class="_"> </span>tools)
            <span class="_"> </span>and<span class="_"></span>such
            <span class="_"> </span>other<span class="_"> </span>evidence
            <span class="_"> </span>of<span class="_"> </span>cost
            <span class="_"></span>as
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws5">
            the<span class="_ _12"> </span>Owner<span class="_ _12"> </span>may
            <span class="_ _12"> </span>require.<span class="_ _18"> </span>The
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>may
            <span class="_ _12"> </span>require<span class="_ _12"> </span>
            authentication<span class="_ _12"> </span>of
            <span class="_ _12"></span>all<span class="_ _12"> </span>time
            <span class="_"> </span>and<span class="_"></span>material
            <span class="_"> </span>tickets<span class="_"> </span>and
            <span class="_"> </span>invoices
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws126">
            by<span class="_"> </span>persons<span class="_"> </span>designated
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>for
            <span class="_"></span>such<span class="_"> </span>purpose.
            <span class="_ _17"> </span>The<span class="_"> </span>failure
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>CM<span class="_"> </span>to
            <span class="_ _6"></span>secure<span class="_ _14"> </span>any
            <span class="_ _6"> </span>required
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws4">
            authentication<span class="_"> </span>shall,<span class="_"> </span>
            if<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>elects<span class="_"> </span>to
            <span class="_"> </span>treat<span class="_ _f"></span>it
            <span class="_ _f"> </span>as<span class="_ _f"> </span>such,
            <span class="_ _f"> </span>constitute<span class="_ _f"></span>a
            <span class="_ _f"> </span>waiver<span class="_ _10"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"></span>of<span class="_ _f"> </span>any
            <span class="_ _10"> </span>claim<span class="_ _f"> </span>for
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 wse">
            cost<span class="_"> </span>of<span class="_"> </span>that
            <span class="_"></span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>covered
            <span class="_"> </span>by<span class="_"></span>a
            <span class="_"> </span>non-authenticated<span class="_"> </span>
            ticket<span class="_"> </span>or<span class="_ _12"> </span>invoice;
            <span class="_ _12"> </span>provided,
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws127">
            however<span class="_ _1"></span>,<span class="_ _1f"> </span>that
            <span class="_ _1f"> </span>the<span class="_ _1f"> </span>
            authentication<span class="_ _1f"> </span>of
            <span class="_ _1f"></span>any<span class="_ _1f"> </span>such
            <span class="_ _1f"> </span>ticket<span class="_"> </span>or
            <span class="_"> </span>invoice<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"></span>constitute<span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws1">
            acknowledgment by the Owner that the items thereon were reasonably
            required for the change in the work.
          </div>
          <div class="t m0 x8 h3 ya ff2 fs0 fc0 sc0 ls0 ws8c">
            The<span class="_"> </span>change<span class="_"> </span>proposal
            <span class="_"> </span>form<span class="_"> </span>attached
            <span class="_"> </span>as<span class="_"> </span>Appendix
            <span class="_"> </span>D-1<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>used
            <span class="_"></span>to<span class="_"> </span>submit
            <span class="_"> </span>the<span class="_"></span>final
            <span class="_ _6"> </span>change
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws11b">
            proposal<span class="_ _6"> </span>to<span class="_ _14"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>after
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>is<span class="_"></span>complete.
            <span class="_ _18"> </span>The<span class="_"> </span>final
            <span class="_"> </span>change<span class="_"> </span>proposal
            <span class="_"> </span>shall<span class="_"> </span>document
            <span class="_"> </span>all<span class="_"> </span>costs
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws10d">
            expenses.<span class="_ _18"> </span>Appendix
            <span class="_"> </span>D-1<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"></span>filled
            <span class="_"> </span>out<span class="_"> </span>in
            <span class="_"></span>accordance<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>instructions
            <span class="_ _f"> </span>in<span class="_ _f"> </span>Paragraph
            <span class="_ _f"> </span>5.2.1.1,<span class="_ _f"> </span>and
            <span class="_ _f"> </span>its
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws0">
            subparagraphs.
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws91">
            5.2.1.3<span class="_ _17"> </span>Changes
            <span class="_ _19"></span>in<span class="_ _19"> </span>the
            <span class="_ _19"> </span>work<span class="_ _19"> </span>to
            <span class="_ _19"> </span>be<span class="_ _19"> </span>completed
            <span class="_ _19"> </span>on<span class="_ _19"> </span>a
            <span class="_ _19"> </span>unit<span class="_ _19"> </span>price
            <span class="_ _19"> </span>basis<span class="_ _19"> </span>shall
            <span class="_ _19"> </span>be<span class="_ _19"> </span>quantified
            <span class="_ _19"> </span>by<span class="_ _19"> </span>the
            <span class="_"> </span>Design
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 wse5">
            Consultant<span class="_ _12"> </span>or<span class="_ _12"> </span>
            an<span class="_ _12"> </span>independent<span class="_"> </span>
            third<span class="_"> </span>party<span class="_"> </span>and
            <span class="_"></span>shall<span class="_"> </span>be
            <span class="_"> </span>completed<span class="_"> </span>at
            <span class="_"> </span>an<span class="_"></span>all
            <span class="_"> </span>inclusive<span class="_"> </span>rate
            <span class="_"> </span>established<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>bid
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws4">
            proposal,<span class="_"> </span>unless<span class="_"> </span>a
            <span class="_"> </span>mutually<span class="_"> </span>agreed
            <span class="_"> </span>upon<span class="_"> </span>price
            <span class="_"> </span>is<span class="_"> </span>established
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"> </span>and
            <span class="_ _f"> </span>CM.<span class="_ _1c"> </span>The
            <span class="_ _10"> </span>unit<span class="_ _f"> </span>prices
            <span class="_ _f"> </span>include
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws40">
            the<span class="_ _21"> </span>cost<span class="_ _21"> </span>of
            <span class="_ _21"> </span>all<span class="_"> </span>materials,
            <span class="_"> </span>taxes,<span class="_"> </span>shipping
            <span class="_"> </span>and<span class="_"> </span>delivery
            <span class="_"> </span>charges,<span class="_"> </span>labor
            <span class="_"> </span>and<span class="_"> </span>labor
            <span class="_"></span>burden,<span class="_"> </span>insurance,
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws5b">
            supervision,<span class="_ _12"> </span>overhead
            <span class="_ _12"></span>and<span class="_ _12"> </span>profit.
            <span class="_ _18"> </span>T<span class="_ _1"></span>ime
            <span class="_ _12"> </span>to<span class="_ _12"></span>complete
            <span class="_ _12"> </span>any<span class="_ _12"> </span>work
            <span class="_ _12"> </span>done<span class="_"> </span>on
            <span class="_"></span>a<span class="_"> </span>unit
            <span class="_"> </span>price<span class="_"></span>basis
            <span class="_"> </span>for<span class="_"> </span>quantities
            <span class="_"> </span>within
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 wsbe">
            the<span class="_"> </span>base<span class="_"> </span>bid
            <span class="_"></span>allowance<span class="_"> </span>amount
            <span class="_"> </span>is<span class="_"> </span>included
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>base<span class="_"> </span>bid.
            <span class="_ _23"></span>The<span class="_ _19"> </span>unit
            <span class="_ _19"> </span>price<span class="_ _19"> </span>does
            <span class="_ _19"> </span>not<span class="_ _19"> </span>include
            <span class="_ _19"> </span>bonds.
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws28">
            Procedures<span class="_ _6"> </span>for<span class="_ _14"> </span>
            quantifying<span class="_ _6"> </span>units
            <span class="_ _14"></span>of<span class="_"> </span>measure
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>proposed<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>Design
            <span class="_"> </span>Consultant<span class="_"> </span>and
            <span class="_"> </span>agreed<span class="_"> </span>to
            <span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws24">
            the<span class="_"> </span>CM<span class="_"> </span>and
            <span class="_"></span>Owner<span class="_"> </span>prior
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>commencement<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>to<span class="_"> </span>be
            <span class="_"> </span>completed<span class="_"></span>on
            <span class="_"> </span>a<span class="_ _12"> </span>unit
            <span class="_ _12"></span>base<span class="_ _12"> </span>price.
            <span class="_ _18"> </span>Work
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws114">
            performed<span class="_ _12"> </span>without
            <span class="_ _12"></span>such<span class="_"> </span>agreement
            <span class="_"> </span>in<span class="_"> </span>place
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>deemed<span class="_"> </span>to
            <span class="_"></span>have<span class="_"> </span>been
            <span class="_"> </span>done<span class="_"></span>at
            <span class="_"> </span>the<span class="_"> </span>sole
            <span class="_"></span>risk<span class="_"> </span>and
            <span class="_"> </span>expense
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 wsaa">
            of<span class="_ _12"> </span>the<span class="_ _12"> </span>CM.
            <span class="_ _18"> </span>T<span class="_ _1"></span>ime
            <span class="_ _12"></span>for<span class="_"> </span>quantities
            <span class="_"> </span>exceeding<span class="_"> </span>the
            <span class="_"> </span>base<span class="_"> </span>bid
            <span class="_"> </span>allowance<span class="_"> </span>will
            <span class="_"> </span>be<span class="_"> </span>evaluated
            <span class="_"> </span>based<span class="_"> </span>on
            <span class="_"> </span>the<span class="_"></span>effect
            <span class="_"> </span>of<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws1">
            change in the work on the critical path of the Project.
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws32">
            5.2.1.3.1<span class="_ _6"> </span>No<span class="_ _14"> </span>
            overhead<span class="_ _6"> </span>and<span class="_ _14"> </span>
            profit<span class="_ _6"> </span>will<span class="_ _14"> </span>be
            <span class="_ _14"> </span>paid<span class="_ _6"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>on<span class="_"> </span>account
            <span class="_"> </span>of<span class="_"></span>a
            <span class="_"> </span>change<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>except<span class="_"></span>as
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws128">
            specifically<span class="_ _19"> </span>provided
            <span class="_"></span>in<span class="_"> </span>this
            <span class="_"> </span>section.<span class="_ _13"></span>Overhead
            <span class="_"> </span>and<span class="_"> </span>profit,
            <span class="_"> </span>as<span class="_"> </span>allowed
            <span class="_"> </span>in<span class="_"> </span>this
            <span class="_"></span>section,<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>d
            <span class="_ _0"></span>eemed<span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws32">
            include<span class="_ _6"> </span>all<span class="_ _14"> </span>
            costs<span class="_ _6"> </span>and<span class="_ _14"> </span>
            expenses<span class="_ _6"> </span>which<span class="_ _14"> </span>
            the<span class="_ _14"> </span>CM<span class="_ _6"> </span>or
            <span class="_ _14"></span>any<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>contractors
            <span class="_"> </span>may<span class="_"> </span>incur
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>performance<span class="_"> </span>of
            <span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws1">
            change in the work and which are not otherwise specifically
            recoverable by them pursuant to this section.
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws10f">
            5.2.1.4<span class="_ _1c"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>may<span class="_"> </span>direct
            <span class="_"></span>in<span class="_"> </span>writing
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>to<span class="_"> </span>begin
            <span class="_"></span>changes<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>prior<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>issuance
            <span class="_"> </span>of<span class="_"></span>a
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws32">
            formal<span class="_ _6"> </span>change<span class="_ _14"> </span>
            order<span class="_ _1"></span>.<span class="_ _13"> </span>The
            <span class="_ _6"> </span>CM<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>promptly<span class="_"> </span>perform
            <span class="_"> </span>the<span class="_"> </span>changes
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>directed
            <span class="_"> </span>by<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>in
            <span class="_"></span>a
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws1">
            manner that shall result in minimum impact on the critical path.
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws1">
            5.2.2<span class="_ _16"> </span>CM Notice of Change
          </div>
          <div class="t m0 x8 h3 y56 ff2 fs0 fc0 sc0 ls0 ws42">
            If<span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>or<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>contractors<span class="_"> </span>asserts
            <span class="_"> </span>that<span class="_"> </span>any
            <span class="_"></span>event<span class="_"> </span>or
            <span class="_"> </span>occurrence<span class="_"> </span>has
            <span class="_ _f"> </span>caused<span class="_ _f"> </span>a
            <span class="_ _f"> </span>change<span class="_ _f"> </span>in
            <span class="_ _f"> </span>or
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws8d">
            addition<span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>which
            <span class="_"> </span>change<span class="_"> </span>causes
            <span class="_"> </span>an<span class="_"></span>increase
            <span class="_"> </span>or<span class="_"> </span>decrease
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>GMP<span class="_"> </span>or
            <span class="_"> </span>the<span class="_"></span>time
            <span class="_"> </span>required<span class="_"> </span>for
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 wsa9">
            performance<span class="_ _6"> </span>of<span class="_ _14"> </span>
            any<span class="_"> </span>part<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>under<span class="_"></span>the
            <span class="_"> </span>contract,<span class="_"> </span>including
            <span class="_"> </span>work<span class="_"> </span>not
            <span class="_"> </span>affected<span class="_"> </span>directly
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>chan<span class="_ _0"></span>ge,
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws66">
            the<span class="_"> </span>CM<span class="_"> </span>shall,
            <span class="_"></span>within<span class="_"> </span>ten
            <span class="_"> </span>(10)<span class="_"></span>days
            <span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>event<span class="_"> </span>unless
            <span class="_"> </span>such<span class="_ _12"> </span>event
            <span class="_ _12"> </span>was<span class="_ _12"> </span>not
            <span class="_ _12"> </span>discovered<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_ _12"> </span>exercise
            <span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws4">
            reasonable<span class="_"> </span>diligence,<span class="_"> </span>
            in<span class="_"> </span>which<span class="_"> </span>event
            <span class="_"></span>the<span class="_"> </span>ten
            <span class="_"> </span>(10)<span class="_ _f"></span>day
            <span class="_ _f"> </span>notice<span class="_ _f"> </span>period
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>commence
            <span class="_ _f"> </span>upon<span class="_ _10"> </span>discovery
            <span class="_ _f"> </span>or<span class="_ _f"> </span>when
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws129">
            the<span class="_ _6"> </span>CM<span class="_ _14"> </span>should
            <span class="_ _6"> </span>have<span class="_"> </span>discovered
            <span class="_"> </span>such<span class="_"> </span>event,
            <span class="_"> </span>give<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>written
            <span class="_"> </span>notice<span class="_"> </span>as
            <span class="_"> </span>herein<span class="_"></span>required.
            <span class="_ _18"> </span>Said<span class="_"> </span>notice
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws98">
            shall<span class="_ _12"> </span>include<span class="_ _12"> </span>
            the<span class="_ _12"> </span>instructions
            <span class="_ _12"></span>or<span class="_ _12"> </span>
            circumstances<span class="_ _12"></span>that
            <span class="_ _12"> </span>are<span class="_ _12"> </span>the
            <span class="_ _12"> </span>basis<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>claim
            <span class="_ _12"> </span>and<span class="_ _12"> </span>the
            <span class="_"> </span>CM&apos;s<span class="_"> </span>best
            <span class="_"> </span>estimate<span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
            the cost and time involved.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">28</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf1d" class="pf w0 h0" data-page-no="1d">
        <div class="pc pc1d w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x8 h3 y1 ff2 fs0 fc0 sc0 ls0 ws6e">
            If<span class="_ _15"> </span>the<span class="_"> </span>CM
            <span class="_"></span>intends<span class="_"> </span>to
            <span class="_"> </span>assert<span class="_"> </span>a
            <span class="_"> </span>claim<span class="_"></span>under
            <span class="_"> </span>this<span class="_"> </span>section,
            <span class="_"> </span>he<span class="_"> </span>must,
            <span class="_"> </span>within<span class="_"> </span>ten
            <span class="_"></span>(10)<span class="_"> </span>days
            <span class="_"> </span>after<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws10">
            furnishing<span class="_"> </span>of<span class="_"> </span>a
            <span class="_"></span>written<span class="_"> </span>notice
            <span class="_"> </span>as<span class="_"> </span>outlined
            <span class="_"> </span>above,<span class="_"> </span>submit
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>a
            <span class="_"></span>written<span class="_ _12"> </span>statement
            <span class="_ _12"></span>setting<span class="_ _12"> </span>forth
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws12a">
            specific<span class="_ _15"> </span>nature
            <span class="_ _15"></span>and<span class="_ _15"> </span>
            anticipated<span class="_"> </span>cost<span class="_"> </span>of
            <span class="_"> </span>such<span class="_"></span>claim,
            <span class="_"> </span>unless<span class="_"> </span>this
            <span class="_"> </span>period<span class="_"> </span>is
            <span class="_"></span>extended<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_ _20"></span>.<span class="_ _28"> </span>The
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 wse">
            statement<span class="_"> </span>of<span class="_"> </span>claim
            <span class="_"> </span>hereunder<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"> </span>included
            <span class="_"></span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>notice<span class="_ _12"> </span>
            required<span class="_ _12"></span>above.
            <span class="_ _18"> </span>The<span class="_ _12"> </span>statement
            <span class="_ _12"> </span>of<span class="_ _12"> </span>claim
            <span class="_ _12"> </span>shall
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws12b">
            include<span class="_ _12"> </span>all<span class="_ _12"> </span>
            direct,<span class="_ _12"> </span>indirect
            <span class="_ _12"></span>and<span class="_ _12"> </span>impact
            <span class="_ _12"> </span>costs<span class="_ _12"> </span>
            associated<span class="_ _12"></span>with
            <span class="_ _12"> </span>the<span class="_ _12"> </span>change,
            <span class="_ _12"> </span>as<span class="_ _12"> </span>well
            <span class="_ _12"> </span>as<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM&apos;s<span class="_ _12"> </span>
            estimate<span class="_"> </span>of<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws14">
            schedule<span class="_ _12"> </span>impact
            <span class="_ _12"></span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>change,<span class="_ _12"> </span>if
            <span class="_ _12"> </span>any<span class="_ _20"></span>.
            <span class="_ _1c"> </span>The<span class="_"></span>CM
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>contractors<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"> </span>entitled<span class="_"></span>to
            <span class="_"> </span>reimbursement<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws26">
            an<span class="_"> </span>increase<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>GMP
            <span class="_ _f"> </span>for<span class="_ _f"></span>any
            <span class="_ _f"> </span>claims<span class="_ _f"> </span>that
            <span class="_ _f"> </span>are<span class="_ _10"> </span>not
            <span class="_ _f"> </span>filed<span class="_ _f"> </span>in
            <span class="_ _f"> </span>strict<span class="_ _f"> </span>
            conformance<span class="_ _f"> </span>with
            <span class="_ _10"></span>this<span class="_ _f"> </span>section.
            <span class="_ _1c"> </span>The<span class="_ _f"> </span>CM
            <span class="_ _f"> </span>shall
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws4">
            indemnify<span class="_"> </span>and<span class="_"> </span>hold
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>harmless<span class="_"> </span>against
            <span class="_"> </span>any<span class="_"> </span>claims
            <span class="_ _f"> </span>by<span class="_ _f"></span>the
            <span class="_ _f"> </span>contractors<span class="_ _f"> </span>
            that<span class="_ _f"> </span>are<span class="_ _f"> </span>waived
            <span class="_ _10"> </span>because<span class="_ _f"> </span>they
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            are not filed in strict conformance with this section.
          </div>
          <div class="t m0 x8 h3 y13 ff2 fs0 fc0 sc0 ls0 ws113">
            If<span class="_"> </span>the<span class="_"> </span>parties
            <span class="_"></span>are<span class="_"> </span>unable
            <span class="_"> </span>to<span class="_"></span>agree
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>reasonable<span class="_"> </span>cost
            <span class="_"> </span>and<span class="_"> </span>time
            <span class="_"> </span>to<span class="_"></span>perform
            <span class="_"> </span>the<span class="_"> </span>change,
            <span class="_"> </span>or<span class="_"> </span>are
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws6e">
            unable<span class="_"> </span>to<span class="_"> </span>agree
            <span class="_"></span>as<span class="_"> </span>to
            <span class="_"> </span>whether<span class="_"></span>a
            <span class="_"> </span>change<span class="_"> </span>occurred,
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>shall<span class="_"> </span>make
            <span class="_"></span>a<span class="_ _6"> </span>unilateral
            <span class="_ _14"> </span>determination<span class="_ _6"> </span>
            as
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
            described in this section. The CM shall p<span class="_ _0"></span>
            roceed with the work pursuant to the provisions of this section.
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
            5.2.3<span class="_ _16"> </span>General Provisions Related to
            Changes
          </div>
          <div class="t m0 x8 h3 y9 ff2 fs0 fc0 sc0 ls0 ws73">
            The<span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>not<span class="_ _12"> </span>be
            <span class="_ _12"> </span>entitled<span class="_ _12"> </span>to
            <span class="_ _12"> </span>any<span class="_ _12"> </span>amount
            <span class="_ _12"> </span>for<span class="_ _12"> </span>indirect
            <span class="_ _12"> </span>costs,<span class="_ _12"></span>damages
            <span class="_ _12"> </span>or<span class="_ _12"> </span>expenses
            <span class="_ _12"> </span>of<span class="_ _12"> </span>any
            <span class="_"> </span>nature,
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws12c">
            including,<span class="_ _6"> </span>but<span class="_ _14"> </span>
            not<span class="_ _6"> </span>limited<span class="_"> </span>to,
            <span class="_"> </span>so-called<span class="_"> </span>
            &quot;impact&quot;<span class="_"> </span>costs,
            <span class="_"></span>labor<span class="_"> </span>inefficiency
            <span class="_ _20"></span>,<span class="_"> </span>wage,
            <span class="_"> </span>material<span class="_"></span>or
            <span class="_"> </span>other<span class="_"> </span>escalations
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws7">
            beyond<span class="_ _6"> </span>the<span class="_ _14"> </span>
            prices<span class="_ _6"> </span>upon<span class="_"> </span>which
            <span class="_"> </span>the<span class="_"> </span>proposal
            <span class="_"> </span>is<span class="_"> </span>based
            <span class="_"> </span>and<span class="_"> </span>to
            <span class="_"></span>which<span class="_"> </span>the
            <span class="_"> </span>parties<span class="_"> </span>have
            <span class="_"> </span>agreed<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 wse">
            provisions<span class="_"> </span>of<span class="_"> </span>this
            <span class="_"> </span>section,<span class="_"> </span>and
            <span class="_"> </span>which<span class="_"> </span>the
            <span class="_"></span>CM,<span class="_"> </span>the
            <span class="_ _12"> </span>contractors<span class="_ _12"> </span>
            or<span class="_ _12"></span>any<span class="_ _12"> </span>other
            <span class="_ _12"> </span>person<span class="_ _12"> </span>may
            <span class="_ _12"> </span>incur<span class="_ _12"> </span>as
            <span class="_ _12"> </span>a<span class="_ _12"> </span>result
            <span class="_ _12"> </span>of
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws12d">
            delays,<span class="_"> </span>interferences,
            <span class="_"> </span>suspensions,<span class="_"> </span>changes
            <span class="_"> </span>in<span class="_"> </span>sequence
            <span class="_"> </span>or<span class="_"></span>the
            <span class="_"> </span>like,<span class="_"> </span>for
            <span class="_ _1a"></span>whatever<span class="_ _1f"> </span>
            cause,<span class="_ _1f"></span>whether
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws12e">
            reasonable<span class="_ _19"> </span>or<span class="_"> </span>
            unreasonable,<span class="_"> </span>foreseeable
            <span class="_"></span>or<span class="_"> </span>unforeseeable,
            <span class="_"> </span>or<span class="_"> </span>avoidable
            <span class="_"> </span>or<span class="_"></span>unavoidable,
            <span class="_"> </span>arising<span class="_"> </span>from
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws12f">
            performance<span class="_"> </span>of<span class="_"> </span>any
            <span class="_"> </span>and<span class="_"> </span>all
            <span class="_"></span>changes<span class="_"> </span>in
            <span class="_ _6"> </span>the<span class="_ _14"> </span>work
            <span class="_ _6"> </span>performed<span class="_ _14"> </span>
            pursuant<span class="_ _6"></span>to<span class="_ _14"> </span>this
            <span class="_ _6"> </span>section,<span class="_ _14"> </span>
            unless<span class="_ _14"></span>the<span class="_ _6"> </span>delay
            <span class="_ _14"> </span>is
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws12f">
            caused<span class="_"> </span>solely<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>or<span class="_"></span>Design
            <span class="_"> </span>Consultant.<span class="_ _17"></span>It
            <span class="_"> </span>is<span class="_"> </span>understood
            <span class="_ _6"></span>and<span class="_ _14"> </span>agreed
            <span class="_ _6"> </span>that<span class="_ _14"> </span>the
            <span class="_ _6"> </span>CM&apos;s<span class="_ _14"> </span>and
            <span class="_ _14"> </span>the
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws130">
            contractors’<span class="_ _19"> </span>sole
            <span class="_ _19"></span>and<span class="_ _19"> </span>exclusive
            <span class="_ _19"> </span>remedy<span class="_ _19"> </span>in
            <span class="_ _19"> </span>such<span class="_ _19"> </span>event
            <span class="_ _19"> </span>shall<span class="_ _19"> </span>be
            <span class="_ _19"> </span>recovery<span class="_"> </span>of
            <span class="_"> </span>direct<span class="_"> </span>costs
            <span class="_"> </span>as<span class="_"></span>compensable
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 wsa9">
            hereunder<span class="_"> </span>and<span class="_"> </span>an
            <span class="_"></span>extension<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>contract
            <span class="_"> </span>time,<span class="_"> </span>but
            <span class="_"> </span>only<span class="_"> </span>in
            <span class="_"></span>accordance<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>provisions
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>contract
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws131">
            documents.<span class="_ _a"> </span>No<span class="_ _15"> </span>
            claim<span class="_ _15"> </span>by<span class="_ _15"> </span>the
            <span class="_ _15"> </span>CM<span class="_ _1a"> </span>hereunder
            <span class="_ _1c"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>allowed<span class="_"> </span>if
            <span class="_"></span>asserted<span class="_"> </span>after
            <span class="_"> </span>final<span class="_"> </span>payment
            <span class="_"> </span>for<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws41">
            construction<span class="_ _6"> </span>or
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Project
            <span class="_ _14"> </span>under<span class="_ _6"> </span>this
            <span class="_ _14"> </span>Agreement.<span class="_ _18"> </span>No
            <span class="_"> </span>claim<span class="_"> </span>relating
            <span class="_"> </span>to<span class="_"> </span>or
            <span class="_"> </span>flowing<span class="_"></span>from
            <span class="_"> </span>a<span class="_"> </span>particular
            <span class="_"> </span>change
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws120">
            shall<span class="_ _12"> </span>be<span class="_ _12"> </span>
            allowed<span class="_ _12"> </span>after<span class="_"> </span>
            execution<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>change<span class="_"> </span>order
            <span class="_"> </span>relating<span class="_"> </span>to
            <span class="_"> </span>that<span class="_"></span>change
            <span class="_"> </span>or<span class="_"> </span>commencement
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>change
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            by the CM, except as specifically provided in this section.
          </div>
          <div class="t m0 x8 h3 y69 ff2 fs0 fc0 sc0 ls0 ws18">
            If<span class="_ _12"> </span>any<span class="_ _12"> </span>dispute
            <span class="_ _12"> </span>should<span class="_ _12"></span>arise
            <span class="_ _12"> </span>between<span class="_ _12"> </span>the
            <span class="_ _12"> </span>parties<span class="_ _12"> </span>with
            <span class="_ _12"> </span>respect<span class="_ _12"> </span>to
            <span class="_ _12"> </span>an<span class="_ _12"> </span>increase
            <span class="_ _12"> </span>or<span class="_"> </span>decrease
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>GMP
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws132">
            or<span class="_"> </span>an<span class="_"> </span>expansion
            <span class="_"></span>or<span class="_"> </span>contraction
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"></span>time
            <span class="_"> </span>as<span class="_"> </span>a
            <span class="_"></span>result<span class="_"> </span>of
            <span class="_"> </span>a<span class="_"></span>change
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_ _12"></span>work,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>not
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws4">
            suspend<span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>a<span class="_"> </span>change
            <span class="_ _f"></span>in<span class="_ _f"> </span>the
            <span class="_ _f"> </span>work<span class="_ _f"> </span>or
            <span class="_ _f"> </span>the<span class="_ _10"> </span>work
            <span class="_ _f"> </span>itself<span class="_ _f"> </span>unless
            <span class="_ _f"> </span>otherwise<span class="_ _f"> </span>so
            <span class="_ _f"> </span>ordered<span class="_ _10"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _f"> </span>in
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws133">
            writing.<span class="_ _29"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>shall,<span class="_"> </span>however
            <span class="_ _1"></span>,<span class="_"> </span>pay
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>up
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>Owner&apos;s<span class="_"> </span>
            reasonable<span class="_"></span>estimated<span class="_"> </span>
            value<span class="_"> </span>of<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws4">
            change<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work,<span class="_ _f"> </span>regardless
            <span class="_ _f"></span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>dispute,<span class="_ _f"> </span>if
            <span class="_ _10"> </span>said<span class="_ _f"> </span>change
            <span class="_ _f"> </span>in<span class="_ _f"> </span>the
            <span class="_ _f"> </span>work<span class="_ _f"> </span>results
            <span class="_ _10"> </span>in<span class="_ _f"> </span>an
            <span class="_ _f"> </span>increase<span class="_ _f"> </span>in
            <span class="_ _f"> </span>the<span class="_ _f"> </span>contract
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws134">
            sum;<span class="_ _15"> </span>and<span class="_ _15"> </span>the
            <span class="_ _15"> </span>Owner<span class="_"> </span>shall
            <span class="_"> </span>have<span class="_"> </span>the
            <span class="_"></span>right<span class="_"> </span>to
            <span class="_"> </span>decrease<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"> </span>sum
            <span class="_"> </span>up<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>Owner&apos;s
            <span class="_"> </span>reasonable
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws4">
            estimated<span class="_"> </span>value<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>change
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>work,<span class="_"></span>regardless
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>dispute,<span class="_"> </span>if
            <span class="_"></span>said<span class="_"> </span>change
            <span class="_"> </span>in<span class="_"></span>the
            <span class="_"> </span>work<span class="_ _f"> </span>results
            <span class="_ _f"> </span>in<span class="_ _f"> </span>a
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws21">
            decrease<span class="_ _12"> </span>in<span class="_ _12"> </span>
            the<span class="_"> </span>contract<span class="_"> </span>sum.
            <span class="_ _1c"> </span>The<span class="_"> </span>CM’s
            <span class="_"> </span>acceptance<span class="_"> </span>of
            <span class="_"> </span>payment<span class="_"> </span>following
            <span class="_"> </span>a<span class="_"> </span>unilateral
            <span class="_"> </span>decision<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Own
            <span class="_ _0"></span>er
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws4">
            shall<span class="_"> </span>not<span class="_"> </span>constitute
            <span class="_"> </span>a<span class="_"> </span>waiver
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>claim<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>may
            <span class="_"> </span>have<span class="_"> </span>for
            <span class="_"></span>additional<span class="_"> </span>
            compensation<span class="_"></span>or<span class="_"> </span>time.
            <span class="_ _18"> </span>However<span class="_ _20"></span>,
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            any claim the CM may have shall be filed in strict conformance with
            the contract documents.
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws8c">
            5.2.4.1<span class="_ _1c"> </span>If<span class="_"> </span>the
            <span class="_"> </span>change<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>will<span class="_"></span>result
            <span class="_"> </span>in<span class="_"> </span>a
            <span class="_"></span>decrease<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>contract
            <span class="_ _6"> </span>sum,<span class="_ _6"> </span>the
            <span class="_ _14"> </span>CM<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>provide<span class="_ _14"> </span>a
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws10">
            quotation<span class="_"> </span>detailing<span class="_"> </span>
            the<span class="_"> </span>proposed<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>decrease.<span class="_ _1d"> </span>The
            <span class="_"> </span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>proposal
            <span class="_"> </span>relating<span class="_"> </span>to
            <span class="_ _12"> </span>labor<span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws135">
            whether<span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM&apos;s<span class="_"> </span>forces
            <span class="_"> </span>or<span class="_"> </span>the
            <span class="_"></span>forces<span class="_"> </span>of
            <span class="_"> </span>any<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>contractors,
            <span class="_"> </span>shall<span class="_"> </span>include
            <span class="_"> </span>reasonably<span class="_"> </span>
            anticipated<span class="_"> </span>gross
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws135">
            wages<span class="_ _12"> </span>of<span class="_ _12"> </span>job
            <span class="_ _12"> </span>site<span class="_ _12"> </span>labor
            <span class="_ _1"></span>,<span class="_ _12"> </span>including
            <span class="_ _12"> </span>foremen,<span class="_ _12"></span>who
            <span class="_"> </span>would<span class="_"> </span>have
            <span class="_"></span>been<span class="_ _1c"> </span>directly
            <span class="_"> </span>involved<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>that<span class="_"> </span>has
            <span class="_"></span>been
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws2b">
            deleted<span class="_ _12"> </span>from<span class="_ _12"> </span>
            the<span class="_ _12"> </span>contract<span class="_ _12"> </span>
            (for<span class="_ _12"> </span>such<span class="_ _12"> </span>time
            <span class="_ _12"> </span>as<span class="_ _12"> </span>they
            <span class="_ _12"> </span>would<span class="_ _12"> </span>have
            <span class="_ _12"> </span>been<span class="_ _12"> </span>so
            <span class="_ _12"> </span>involved),<span class="_ _12"> </span>
            plus<span class="_"> </span>payroll<span class="_"> </span>costs
            <span class="_"> </span>(including
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws136">
            premium<span class="_ _6"> </span>costs<span class="_ _14"> </span>
            of<span class="_"> </span>overtime<span class="_"> </span>time,
            <span class="_"> </span>if<span class="_"> </span>overtime
            <span class="_"> </span>was<span class="_"> </span>anticipated,
            <span class="_"> </span>social<span class="_"> </span>security
            <span class="_ _20"></span>,<span class="_"> </span>federal
            <span class="_"> </span>or<span class="_"> </span>state
            <span class="_"></span>unemployment
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws6a">
            insurance<span class="_"> </span>taxes<span class="_"> </span>and
            <span class="_"> </span>fringe<span class="_"> </span>benefits
            <span class="_"> </span>required<span class="_"> </span>by
            <span class="_"> </span>collective<span class="_"> </span>bargaining
            <span class="_"> </span>Agreements<span class="_"> </span>entered
            <span class="_"> </span>into<span class="_"> </span>by
            <span class="_ _5"></span>the
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws44">
            contractor<span class="_ _6"> </span>or<span class="_ _14"> </span>
            any<span class="_ _6"> </span>subcontractor
            <span class="_ _14"></span>in<span class="_"> </span>connection
            <span class="_"> </span>with<span class="_"> </span>such
            <span class="_"> </span>labor)<span class="_"></span>and
            <span class="_"> </span>seven<span class="_"> </span>percent
            <span class="_"> </span>(7%)<span class="_"> </span>of
            <span class="_"></span>such<span class="_"> </span>anticipated
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws137">
            gross<span class="_ _6"> </span>wages,<span class="_ _14"> </span>
            but<span class="_ _6"> </span>not<span class="_ _14"> </span>payroll
            <span class="_ _6"> </span>costs,<span class="_"> </span>as
            <span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"></span>profit<span class="_"> </span>not
            <span class="_"> </span>incurred<span class="_"> </span>or
            <span class="_"> </span>earned<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>contractor
            <span class="_"> </span>or<span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 wse3">
            subcontractor<span class="_ _1"></span>,<span class="_ _1f"> </span>
            as<span class="_ _1f"> </span>applicable<span class="_ _1f"> </span>
            (said<span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"> </span>profit<span class="_"> </span>to
            <span class="_"></span>include<span class="_"> </span>all
            <span class="_"> </span>supervision<span class="_"> </span>except
            <span class="_"> </span>foremen).<span class="_ _23"> </span>If
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws72">
            applicable,<span class="_ _6"> </span>the
            <span class="_ _14"> </span>fee<span class="_ _6"> </span>percentage
            <span class="_ _14"> </span>to<span class="_ _6"> </span>be
            <span class="_ _14"> </span>applied<span class="_ _14"> </span>to
            <span class="_ _6"> </span>the<span class="_ _14"> </span>CM’s
            <span class="_ _6"> </span>forces<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>be<span class="_ _6"> </span>the
            <span class="_ _14"> </span>percentage<span class="_"> </span>stated
            <span class="_"> </span>in<span class="_"> </span>section
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws0">7.4.1.</div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">29</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf1e" class="pf w0 h0" data-page-no="1e">
        <div class="pc pc1e w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws4">
            5.2.4.2<span class="_ _1c"> </span>The<span class="_"> </span>
            portion<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>proposal<span class="_"> </span>relating
            <span class="_"> </span>to<span class="_"> </span>materials
            <span class="_"> </span>shall<span class="_ _f"> </span>include
            <span class="_ _f"> </span>the<span class="_ _f"> </span>reasonably
            <span class="_ _f"> </span>anticipated<span class="_ _f"> </span>
            direct<span class="_ _f"></span>costs
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws4">
            which<span class="_ _6"> </span>would<span class="_"> </span>have
            <span class="_"> </span>been<span class="_"> </span>incurred
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>contractor<span class="_"> </span>or
            <span class="_"> </span>to<span class="_"></span>any
            <span class="_"> </span>subcontractors<span class="_"> </span>for
            <span class="_"> </span>materials<span class="_"> </span>which
            <span class="_"> </span>would<span class="_"> </span>have
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws4f">
            been<span class="_"> </span>purchased<span class="_"> </span>or
            <span class="_"></span>incorporation<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_ _1a"> </span>but<span class="_ _1f"></span>which
            <span class="_ _1f"> </span>has<span class="_ _1f"> </span>been
            <span class="_ _1f"> </span>deleted<span class="_ _1f"> </span>from
            <span class="_ _1f"> </span>the<span class="_ _1f"> </span>contract,
            <span class="_ _1f"> </span>plus
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws10">
            transportation<span class="_"> </span>and<span class="_"> </span>
            applicable<span class="_"> </span>sales<span class="_"> </span>and
            <span class="_"> </span>use<span class="_"> </span>taxes
            <span class="_"></span>which<span class="_"> </span>will
            <span class="_"> </span>be<span class="_"></span>avoided,
            <span class="_"> </span>and<span class="_"> </span>seven
            <span class="_"> </span>percent<span class="_ _12"> </span>(7%)
            <span class="_ _12"> </span>of<span class="_ _12"> </span>said
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws5">
            direct<span class="_ _12"> </span>material
            <span class="_ _12"></span>costs<span class="_ _12"> </span>incurred
            <span class="_ _12"></span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>contractor<span class="_ _12"> </span>or
            <span class="_ _12"> </span>subcontractor<span class="_"> </span>
            (excluding<span class="_"></span>transportation
            <span class="_"> </span>and<span class="_"> </span>sales
            <span class="_"> </span>and<span class="_"> </span>use
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1f">
            taxes)<span class="_ _12"> </span>as<span class="_ _12"> </span>
            overhead<span class="_ _12"> </span>and<span class="_ _12"> </span>
            profit<span class="_ _12"> </span>not<span class="_ _12"> </span>
            incurred<span class="_ _12"> </span>or<span class="_ _12"> </span>
            earned<span class="_ _18"> </span>by<span class="_ _12"> </span>the
            <span class="_"> </span>contractor<span class="_"> </span>or
            <span class="_"> </span>any<span class="_"> </span>subcontractor
            <span class="_"> </span>(said<span class="_"> </span>overhead
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 wsee">
            and<span class="_ _12"> </span>profit<span class="_ _12"> </span>to
            <span class="_ _12"> </span>include<span class="_"> </span>all
            <span class="_"> </span>small<span class="_"> </span>tools),
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_ _1c"> </span>further<span class="_"> </span>include
            <span class="_"> </span>the<span class="_"> </span>contractor&apos;s
            <span class="_"> </span>and<span class="_"> </span>
            subcontractor&apos;s<span class="_"> </span>reasonably
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws138">
            anticipated<span class="_"> </span>rental<span class="_"> </span>
            costs<span class="_"> </span>which<span class="_"> </span>will
            <span class="_"></span>be<span class="_"> </span>avoided
            <span class="_"> </span>(either<span class="_"> </span>actual
            <span class="_"> </span>or<span class="_"> </span>discounted
            <span class="_"> </span>local<span class="_"> </span>published
            <span class="_ _12"> </span>rates),<span class="_ _12"> </span>plus
            <span class="_ _12"> </span>five
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 wse">
            percent<span class="_"> </span>(5%)<span class="_"> </span>thereof
            <span class="_"> </span>as<span class="_"> </span>overhead
            <span class="_"> </span>and<span class="_"> </span>profit
            <span class="_"> </span>not<span class="_"> </span>incurred
            <span class="_"> </span>or<span class="_"> </span>earned
            <span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_ _12"> </span>contractor<span class="_ _12"></span>or
            <span class="_ _12"> </span>subcontractor<span class="_ _20"></span>
            ,<span class="_ _12"> </span>as
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 wsfc">
            applicable.<span class="_ _18"> </span>If
            <span class="_ _12"> </span>any<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>items
            <span class="_"> </span>included<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>lump
            <span class="_"> </span>sum<span class="_"> </span>proposal
            <span class="_"> </span>are<span class="_"> </span>covered
            <span class="_"> </span>by<span class="_"> </span>unit
            <span class="_"></span>prices<span class="_"> </span>contained
            <span class="_"> </span>in<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 wsbb">
            contract<span class="_ _12"> </span>documents,
            <span class="_ _12"></span>the<span class="_ _12"> </span>Owner
            <span class="_ _12"> </span>may<span class="_ _12"> </span>elect
            <span class="_ _12"> </span>to<span class="_ _12"> </span>use
            <span class="_ _12"> </span>these<span class="_ _12"> </span>unit
            <span class="_ _12"> </span>prices<span class="_"> </span>in
            <span class="_"> </span>determining<span class="_"> </span>the
            <span class="_"> </span>amount<span class="_"> </span>of
            <span class="_"> </span>reduction<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws4">
            the<span class="_"> </span>GMP<span class="_"> </span>as
            <span class="_"></span>a<span class="_"> </span>result
            <span class="_"> </span>of<span class="_"></span>a
            <span class="_"> </span>deletion<span class="_"> </span>of
            <span class="_"></span>work<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>contract.
            <span class="_ _18"> </span>No<span class="_"> </span>overhead
            <span class="_ _f"> </span>and<span class="_ _f"> </span>profit
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
            <span class="_ _f"> </span>applied<span class="_ _10"> </span>to
            <span class="_ _f"> </span>any
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws139">
            unit<span class="_"> </span>prices<span class="_"> </span>for
            <span class="_"></span>purposes<span class="_"> </span>of
            <span class="_"> </span>calculation<span class="_"> </span>such
            <span class="_"> </span>reduction<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>contract
            <span class="_"> </span>sum.<span class="_ _18"> </span>The
            <span class="_"> </span>lump<span class="_"> </span>sum
            <span class="_ _f"></span>proposal<span class="_ _f"> </span>for
            <span class="_ _f"> </span>work
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws4">
            which<span class="_"> </span>would<span class="_"> </span>have
            <span class="_"></span>been<span class="_"> </span>performed
            <span class="_"> </span>by<span class="_"> </span>any
            <span class="_"> </span>subcontractors<span class="_"> </span>shall
            <span class="_"> </span>include<span class="_"> </span>four
            <span class="_"> </span>percent<span class="_"> </span>(4%)
            <span class="_"> </span>of<span class="_"></span>that
            <span class="_"> </span>amount<span class="_ _f"> </span>as
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws26">
            an<span class="_"> </span>estimate<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>contractor
            <span class="_ _3"></span>’s<span class="_"> </span>overhead
            <span class="_"> </span>and<span class="_"></span>profit
            <span class="_"> </span>that<span class="_"> </span>will
            <span class="_ _f"></span>not<span class="_ _f"> </span>be
            <span class="_ _f"> </span>earned<span class="_ _f"> </span>by
            <span class="_ _f"> </span>contractor<span class="_ _f"> </span>due
            <span class="_ _f"> </span>to<span class="_ _f"> </span>the
            <span class="_ _f"> </span>decrease
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws4">
            in<span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"></span>sum.<span class="_ _18"> </span>In
            <span class="_"> </span>the<span class="_"></span>event
            <span class="_"> </span>the<span class="_ _f"> </span>construction
            <span class="_ _f"> </span>work<span class="_ _f"></span>would
            <span class="_ _f"> </span>have<span class="_ _f"> </span>been
            <span class="_ _10"> </span>performed<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"></span>in<span class="_ _f"> </span>the
            <span class="_ _10"> </span>limited
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws3d">
            circumstances<span class="_ _12"> </span>allowed
            <span class="_ _12"></span>in<span class="_ _12"> </span>this
            <span class="_ _12"> </span>contract,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>fee<span class="_ _12"> </span>
            percentages<span class="_ _12"></span>stated<span class="_"> </span>
            in<span class="_"> </span>this<span class="_"></span>section
            <span class="_"> </span>shall<span class="_"> </span>apply
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>that
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            would have been performed by the CM as the contractor and its
            subcontractors.
          </div>
          <div class="t m0 x3 h3 y87 ff2 fs0 fc0 sc0 ls0 ws18">
            5.2.4.3<span class="_ _1c"> </span>The<span class="_ _12"> </span>
            CM&apos;s<span class="_"> </span>quotation<span class="_"> </span>
            shall<span class="_"> </span>be<span class="_"> </span>forwarded
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>within
            <span class="_"> </span>ten<span class="_"></span>(10)
            <span class="_"> </span>days<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>Owner&apos;s
            <span class="_"> </span>request<span class="_"> </span>and,
          </div>
          <div class="t m0 x3 h3 y88 ff2 fs0 fc0 sc0 ls0 ws42">
            if<span class="_"> </span>acceptable<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"></span>shall
            <span class="_ _f"> </span>be<span class="_ _f"> </span>incorporated
            <span class="_ _f"> </span>in<span class="_ _f"> </span>a
            <span class="_ _f"> </span>change<span class="_ _f"> </span>order
            <span class="_ _1"></span>.<span class="_ _15"> </span>If
            <span class="_ _f"></span>not<span class="_ _f"> </span>acceptable,
            <span class="_ _f"> </span>the<span class="_ _f"> </span>parties
            <span class="_ _10"> </span>shall<span class="_ _f"> </span>make
          </div>
          <div class="t m0 x3 h3 y89 ff2 fs0 fc0 sc0 ls0 ws10">
            every<span class="_"> </span>reasonable<span class="_"> </span>
            effort<span class="_"> </span>to<span class="_"> </span>agree
            <span class="_"></span>as<span class="_"> </span>to
            <span class="_"> </span>the<span class="_ _12"></span>amount
            <span class="_ _12"> </span>of<span class="_ _12"> </span>such
            <span class="_ _12"> </span>decrease,<span class="_ _12"></span>
            which<span class="_ _12"> </span>may<span class="_ _12"> </span>be
            <span class="_ _12"> </span>based<span class="_ _12"> </span>on
            <span class="_ _12"> </span>a<span class="_ _12"> </span>lump
            <span class="_ _12"> </span>sum
          </div>
          <div class="t m0 x3 h3 y8a ff2 fs0 fc0 sc0 ls0 ws18">
            properly<span class="_ _12"> </span>itemized,
            <span class="_ _12"></span>on<span class="_ _12"> </span>unit
            <span class="_ _12"> </span>prices<span class="_ _12"> </span>stated
            <span class="_ _12"> </span>in<span class="_ _12"> </span>the
            <span class="_ _12"> </span>contract<span class="_ _12"> </span>
            documents<span class="_ _12"></span>and/or
            <span class="_ _12"> </span>on<span class="_ _12"> </span>such
            <span class="_ _12"> </span>other<span class="_ _12"> </span>basis
            <span class="_"> </span>as<span class="_"> </span>the
            <span class="_"></span>parties
          </div>
          <div class="t m0 x3 h3 y8b ff2 fs0 fc0 sc0 ls0 ws10e">
            may<span class="_"> </span>mutually<span class="_"> </span>
            determine.<span class="_ _1c"> </span>If<span class="_"> </span>the
            <span class="_"> </span>parties<span class="_"> </span>are
            <span class="_"></span>unable<span class="_"> </span>to
            <span class="_"> </span>so<span class="_"></span>agree,
            <span class="_"> </span>the<span class="_"> </span>amount
            <span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>decrease<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>the
            <span class="_"> </span>total
          </div>
          <div class="t m0 x3 h3 y8c ff2 fs0 fc0 sc0 ls0 ws21">
            of<span class="_ _12"> </span>the<span class="_"> </span>estimated
            <span class="_"> </span>reduction<span class="_"> </span>in
            <span class="_"> </span>actual<span class="_"> </span>cost
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>work,<span class="_"></span>as
            <span class="_"> </span>determined<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>in<span class="_"></span>its
            <span class="_"> </span>reasonable<span class="_"> </span>judgment,
          </div>
          <div class="t m0 x3 h3 y8d ff2 fs0 fc0 sc0 ls0 ws13a">
            plus<span class="_"> </span>overhead<span class="_"> </span>and
            <span class="_"></span>profit<span class="_"> </span>as
            <span class="_"> </span>stated<span class="_"></span>above
            <span class="_"> </span>the<span class="_"> </span>CM’s
            <span class="_"></span>accept<span class="_ _0"></span>ance
            <span class="_ _f"> </span>of<span class="_ _f"> </span>payment
            <span class="_ _f"> </span>following<span class="_ _f"> </span>a
            <span class="_ _10"> </span>unilateral<span class="_ _f"> </span>
            decision<span class="_ _f"></span>by
          </div>
          <div class="t m0 x3 h3 y8e ff2 fs0 fc0 sc0 ls0 ws93">
            the<span class="_ _15"> </span>Owner<span class="_ _23"> </span>
            shall<span class="_ _15"> </span>not<span class="_ _15"> </span>
            constitute<span class="_ _15"> </span>a<span class="_"> </span>
            waiver<span class="_"> </span>of<span class="_"> </span>any
            <span class="_"></span>claim<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>may
            <span class="_"> </span>have<span class="_"> </span>for
            <span class="_"></span>additional<span class="_"> </span>
            compensation.
          </div>
          <div class="t m0 x3 h3 y8f ff2 fs0 fc0 sc0 ls0 ws1">
            However<span class="_ _1"></span>, any claim the CM may have shall
            be filed in strict conformance with the contract documents.
          </div>
          <div class="t m0 x3 h3 y90 ff2 fs0 fc0 sc0 ls0 ws1">
            5.2.5.<span class="_ _26"> </span>Minor Changes in the Work
          </div>
          <div class="t m0 x8 h3 y91 ff2 fs0 fc0 sc0 ls0 wsfb">
            The<span class="_"> </span>Owner<span class="_"> </span>shall
            <span class="_"></span>have<span class="_"> </span>authority
            <span class="_"> </span>to<span class="_"> </span>order
            <span class="_"> </span>minor<span class="_"></span>changes
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>not
            <span class="_"> </span>involving<span class="_"> </span>an
            <span class="_"> </span>adjustment<span class="_"> </span>in
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y92 ff2 fs0 fc0 sc0 ls0 ws75">
            contract<span class="_ _15"> </span>sum<span class="_ _15"> </span>
            or<span class="_ _15"> </span>an<span class="_ _15"> </span>
            extension<span class="_ _15"> </span>of<span class="_ _15"> </span>
            the<span class="_ _15"> </span>contract<span class="_"> </span>time
            <span class="_"> </span>and<span class="_"> </span>not
            <span class="_"></span>inconsistent<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>intent
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>contract
          </div>
          <div class="t m0 x3 h3 y93 ff2 fs0 fc0 sc0 ls0 ws13b">
            documents.<span class="_ _1a"> </span>Such<span class="_"> </span>
            changes<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>effected<span class="_"> </span>by
            <span class="_"> </span>written<span class="_"> </span>order
            <span class="_ _20"></span>,<span class="_"> </span>and
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>binding<span class="_"> </span>on
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"></span>the
            <span class="_"> </span>CM.
          </div>
          <div class="t m0 x3 h3 y94 ff2 fs0 fc0 sc0 ls0 ws1">
            The CM shall carry out such written orders promptly
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x8 h3 y95 ff2 fs0 fc0 sc0 ls0 ws13c">
            The<span class="_ _19"> </span>CM<span class="_ _19"> </span>shall
            <span class="_ _19"> </span>not<span class="_ _19"> </span>perform
            <span class="_ _19"> </span>any<span class="_ _19"> </span>changes
            <span class="_ _19"> </span>in<span class="_ _19"> </span>the
            <span class="_ _19"> </span>work<span class="_ _19"> </span>unless
            <span class="_ _19"> </span>authorized<span class="_ _19"></span>in
            <span class="_ _19"> </span>writing<span class="_ _19"> </span>by
            <span class="_ _19"> </span>the<span class="_"> </span>Design
          </div>
          <div class="t m0 x3 h3 y96 ff2 fs0 fc0 sc0 ls0 ws1f">
            Consultant<span class="_ _12"> </span>or<span class="_"> </span>
            Owner<span class="_ _1"></span>.<span class="_ _1c"> </span>The
            <span class="_"> </span>CM’s<span class="_"> </span>performance
            <span class="_"> </span>of<span class="_"> </span>minor
            <span class="_"> </span>changes<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>this
            <span class="_"></span>Section<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>consti
            <span class="_ _0"></span>tute<span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y97 ff2 fs0 fc0 sc0 ls0 ws14">
            waiver<span class="_ _12"> </span>of<span class="_ _12"> </span>any
            <span class="_ _12"> </span>claim<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>may
            <span class="_ _12"> </span>have<span class="_ _12"> </span>for
            <span class="_"> </span>additional<span class="_"> </span>
            compensation<span class="_"> </span>or<span class="_"> </span>time.
            <span class="_ _1c"> </span>However<span class="_ _1"></span>,
            <span class="_"> </span>any<span class="_"> </span>claim
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>may
          </div>
          <div class="t m0 x3 h3 y98 ff2 fs0 fc0 sc0 ls0 ws1">
            have shall be filed in strict conformance with the contract
            documents.
          </div>
          <div class="t m0 x3 h3 y99 ff2 fs0 fc0 sc0 ls0 ws1">
            5.2.6<span class="_ _16"> </span>Differing Site Conditions
          </div>
          <div class="t m0 x8 h3 y9a ff2 fs0 fc0 sc0 ls0 ws13d">
            Should<span class="_ _19"> </span>the<span class="_ _19"> </span>CM
            <span class="_ _19"> </span>encounter<span class="_ _19"> </span>
            subsurface<span class="_"> </span>and/or<span class="_"> </span>
            latent<span class="_"> </span>conditions<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"> </span>site
            <span class="_"></span>materially<span class="_"> </span>differing
            <span class="_"> </span>from
          </div>
          <div class="t m0 x3 h3 y9b ff2 fs0 fc0 sc0 ls0 ws10">
            those<span class="_"> </span>shown<span class="_"> </span>on
            <span class="_"></span>the<span class="_"> </span>drawings
            <span class="_"> </span>or<span class="_"></span>indicated
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>specifications<span class="_"> </span>or
            <span class="_"> </span>dif<span class="_ _0"></span>fering
            <span class="_ _12"> </span>materially<span class="_ _12"> </span>
            from<span class="_ _12"></span>those<span class="_ _12"> </span>
            ordinarily
          </div>
          <div class="t m0 x3 h3 y9c ff2 fs0 fc0 sc0 ls0 ws32">
            encountered<span class="_ _6"> </span>and
            <span class="_ _14"> </span>generally<span class="_"> </span>
            recognized<span class="_"> </span>as<span class="_"> </span>inherent
            <span class="_"> </span>in<span class="_"></span>work
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>character<span class="_"> </span>provided
            <span class="_"> </span>for<span class="_"> </span>in
            <span class="_"> </span>this<span class="_"></span>contract,
            <span class="_"> </span>he
          </div>
          <div class="t m0 x3 h3 y9d ff2 fs0 fc0 sc0 ls0 ws120">
            shall<span class="_ _12"> </span>immediately
            <span class="_ _12"></span>give<span class="_ _12"> </span>notice
            <span class="_ _12"> </span>to<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_"> </span>of
            <span class="_"> </span>such<span class="_"></span>conditions
            <span class="_"> </span>before<span class="_"> </span>they
            <span class="_"> </span>are<span class="_"> </span>disturbed.
            <span class="_ _1c"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y9e ff2 fs0 fc0 sc0 ls0 ws3c">
            Design<span class="_ _6"> </span>Consultant
            <span class="_ _14"></span>shall<span class="_ _6"> </span>thereupon
            <span class="_ _14"></span>promptly<span class="_ _6"> </span>
            investigate<span class="_ _14"></span>the
            <span class="_ _14"> </span>conditions<span class="_ _6"> </span>and
            <span class="_ _14"> </span>if<span class="_ _6"> </span>they
            <span class="_ _14"> </span>find<span class="_"> </span>that
            <span class="_"> </span>they<span class="_"> </span>materially
          </div>
          <div class="t m0 x3 h3 y9f ff2 fs0 fc0 sc0 ls0 ws66">
            differ<span class="_ _5"> </span>from<span class="_"> </span>those
            <span class="_"> </span>shown<span class="_"> </span>on
            <span class="_"></span>the<span class="_"> </span>drawings
            <span class="_"> </span>or<span class="_"></span>indicated
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>specifications,<span class="_"> </span>they
            <span class="_"> </span>shall<span class="_"> </span>at
            <span class="_"> </span>once<span class="_"></span>make
            <span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 ya0 ff2 fs0 fc0 sc0 ls0 ws4">
            changes<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>drawings<span class="_"> </span>and/or
            <span class="_ _f"> </span>specifications<span class="_ _f"> </span>
            as<span class="_ _f"></span>they<span class="_ _f"> </span>may
            <span class="_ _f"> </span>find<span class="_ _f"> </span>necessary
            <span class="_ _1"></span>.<span class="_ _1c"> </span>Any
            <span class="_ _f"> </span>increase<span class="_ _f"> </span>or
            <span class="_ _f"> </span>decrease<span class="_ _10"> </span>of
            <span class="_ _f"> </span>cost
          </div>
          <div class="t m0 x3 h3 ya1 ff2 fs0 fc0 sc0 ls0 ws13e">
            resulting<span class="_ _6"> </span>from<span class="_ _14"> </span>
            such<span class="_ _6"> </span>changes<span class="_ _14"> </span>
            shall<span class="_ _6"> </span>be<span class="_ _14"> </span>
            adjusted<span class="_ _14"> </span>in<span class="_ _6"> </span>the
            <span class="_ _14"> </span>manner<span class="_ _6"> </span>
            provided<span class="_ _14"> </span>herein<span class="_ _6"></span>
            for<span class="_ _14"> </span>adjustments<span class="_ _6"></span>
            as<span class="_ _14"> </span>to<span class="_"> </span>extra
          </div>
          <div class="t m0 x3 h3 ya2 ff2 fs0 fc0 sc0 ls0 wsaa">
            and/or<span class="_ _12"> </span>additional
            <span class="_ _12"></span>work<span class="_ _12"> </span>and
            <span class="_ _12"> </span>changes.<span class="_ _18"> </span>
            However<span class="_ _1"></span>,<span class="_ _12"> </span>
            neither<span class="_ _12"> </span>the<span class="_ _12"> </span>
            Owner<span class="_ _12"> </span>nor<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Design<span class="_ _12"> </span>
            Consultant<span class="_ _12"></span>shall<span class="_"> </span>be
            <span class="_"> </span>liable
          </div>
          <div class="t m0 x3 h3 ya3 ff2 fs0 fc0 sc0 ls0 ws2c">
            or<span class="_"> </span>responsible<span class="_"> </span>for
            <span class="_"> </span>additional<span class="_ _f"> </span>work,
            <span class="_ _f"> </span>costs<span class="_ _f"> </span>or
            <span class="_ _f"> </span>changes<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _10"> </span>work
            <span class="_ _f"> </span>that<span class="_ _f"> </span>could
            <span class="_ _f"> </span>have<span class="_ _f"> </span>been
            <span class="_ _10"> </span>reasonably<span class="_ _f"></span>
            determined
          </div>
          <div class="t m0 x3 h3 ya4 ff2 fs0 fc0 sc0 ls0 ws1d">
            from<span class="_"> </span>any<span class="_"> </span>geotechnical,
            <span class="_"> </span>soils<span class="_"> </span>and
            <span class="_"> </span>other<span class="_"> </span>reports,
            <span class="_"> </span>surveys<span class="_"> </span>and
            <span class="_"> </span>analyses<span class="_"> </span>made
            <span class="_"> </span>available<span class="_ _f"> </span>for
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM&apos;s
            <span class="_ _f"> </span>review<span class="_ _f"></span>or
          </div>
          <div class="t m0 x3 h3 ya5 ff2 fs0 fc0 sc0 ls0 ws6a">
            that<span class="_"> </span>could<span class="_"> </span>of
            <span class="_"></span>been<span class="_"> </span>discovered
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>through
            <span class="_"> </span>the<span class="_"> </span>performance
            <span class="_"> </span>of<span class="_"> </span>its
            <span class="_ _19"> </span>obligations<span class="_ _19"></span>
            pursuant<span class="_ _19"> </span>to<span class="_ _19"> </span>
            this
          </div>
          <div class="t m0 x3 h3 ya6 ff2 fs0 fc0 sc0 ls0 ws0">Agreement.</div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 y67 ff2 fs1 fc0 sc0 ls0">30</div>
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

export default PreviewPart3;
