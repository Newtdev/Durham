import React from "react";
import "./ShowPages.css";

const ShowPages = () => {
  return (
    <body>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <div id="pf1" class="pf w0 h0" data-page-no="1">
          <div class="pc pc1 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
            />
            <div class="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls0 ws1">
              Agreement Between
            </div>
            <div class="t m0 x2 h2 y2 ff1 fs0 fc0 sc0 ls0 ws1">
              Owner and Construction Manager at Risk
            </div>
            <div class="t m0 x3 h3 y3 ff2 fs0 fc0 sc0 ls0 ws0">AGREEMENT</div>
            <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws1">
              Made this ____ day of _______________ in the year of
              <span class="_ _0"></span>T<span class="_ _1"></span>wo Thousand
              and ____________.
            </div>
            <div class="t m0 x3 h3 y5 ff2 fs0 fc0 sc0 ls0 ws1">
              BETWEEN The Owner: Durham Public S<span class="_ _0"></span>chools
              Board of Education
            </div>
            <div class="t m0 x3 h3 y6 ff2 fs0 fc0 sc0 ls0 ws1">
              And the Construction Manager (hereinafter referred to as the
              “CM”): ___________________________
            </div>
            <div class="t m0 x3 h3 y7 ff2 fs0 fc0 sc0 ls0 ws1">
              For services in connection with the Project known as:
            </div>
            <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________________
            </div>
            <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws1">
              As further described in <span class="_ _1"></span>Article 2:
            </div>
            <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________________
            </div>
            <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
              Design Consultant:
            </div>
            <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________________
            </div>
            <div class="t m0 x3 h3 yd ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________________
            </div>
            <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________________
            </div>
            <div class="t m0 x3 h3 yf ff2 fs0 fc0 sc0 ls0 ws1">
              The Owner and CM, in consideration of their mutual covenants
              herein, agree as set forth below:
            </div>
          </div>
          <div
            class="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          ></div>
        </div>
        <div id="pf4" class="pf w0 h0" data-page-no="4">
          <div class="pc pc4 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
            />
            <div class="t m0 x6 h2 y2 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 2</div>
            <div class="t m0 x4 h3 y20 ff2 fs0 fc0 sc0 ls0 ws1">
              PROJECT DEFINITION
            </div>
            <div class="t m0 x7 h2 y49 ff1 fs0 fc0 sc0 ls0 ws0">
              ____________________________
            </div>
            <div class="t m0 x8 h3 y3 ff2 fs0 fc0 sc0 ls0 ws4">
              The<span class="_"> </span>term<span class="_"> </span>“Project”
              <span class="_"> </span>when<span class="_"> </span>used
              <span class="_"> </span>in<span class="_"> </span>the
              <span class="_"></span>Agreement<span class="_"> </span>shall
              <span class="_"> </span>mean<span class="_"> </span>the
              <span class="_ _f"> </span>total<span class="_ _f"> </span>
              construction<span class="_ _f"></span>of
              <span class="_ _f"> </span>which<span class="_ _f"> </span>the
              <span class="_ _f"> </span>Work
            </div>
            <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws10">
              may<span class="_"> </span>be<span class="_"> </span>a
              <span class="_"></span>whole<span class="_"> </span>or
              <span class="_"> </span>part<span class="_"></span>of
              <span class="_"> </span>the<span class="_"> </span>Project.
              <span class="_ _1b"></span>The<span class="_ _12"> </span>term
              <span class="_ _12"> </span>“Work”<span class="_ _12"> </span>
              required<span class="_ _12"></span>for<span class="_ _12"> </span>
              the<span class="_ _12"> </span>“Project”
              <span class="_ _12"> </span>used<span class="_ _12"></span>in
              <span class="_ _12"> </span>this<span class="_ _12"> </span>
              Agreement
            </div>
            <div class="t m0 x3 h3 y11 ff2 fs0 fc0 sc0 ls0 ws1">
              shall mean the various parts of total construction to be performed
              under this <span class="_ _1"></span>Agreement.
            </div>
            <div class="t m0 x8 h3 y5 ff2 fs0 fc0 sc0 ls0 ws1">
              The Project name and locations are as follows:
            </div>
            <div class="t m0 x8 h3 y13 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________
            </div>
            <div class="t m0 x8 h3 y6 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________
            </div>
            <div class="t m0 x8 h3 y14 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________
            </div>
            <div class="t m0 x8 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
              The Project is intended for use as:
            </div>
            <div class="t m0 x8 h3 y9 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________
            </div>
            <div class="t m0 x8 h3 y16 ff2 fs0 fc0 sc0 ls0 ws0">
              ________________________________________
            </div>
            <div class="t m0 x6 h2 y4a ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 3</div>
            <div class="t m0 xa h3 yc ff2 fs0 fc0 sc0 ls0 ws1">
              CONSTRUCTION MANAGER’S BASIC SER<span class="_ _0"></span>VICES
            </div>
            <div class="t m0 x7 h2 yd ff1 fs0 fc0 sc0 ls0 ws0">
              ____________________________
            </div>
            <div class="t m0 x3 h3 y17 ff2 fs0 fc0 sc0 ls0 ws1">
              3.1<span class="_ _e"> </span>CM Basic Services
            </div>
            <div class="t m0 x8 h3 yf ff2 fs0 fc0 sc0 ls0 ws17">
              The<span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
              <span class="_ _12"> </span>perform<span class="_ _12"> </span>the
              <span class="_ _12"> </span>Basic<span class="_"> </span>Services
              <span class="_"> </span>described<span class="_"> </span>herein.
              <span class="_ _1c"> </span>It<span class="_"> </span>is
              <span class="_"> </span>not<span class="_"> </span>required
              <span class="_"></span>that<span class="_"> </span>the
              <span class="_"> </span>Basic<span class="_"></span>Services
            </div>
            <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1">
              be performed in the sequence in which they are described.
            </div>
            <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws1">
              3.2<span class="_ _e"> </span>Design Phase – Project Management
            </div>
            <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
              3.2.1<span class="_ _16"> </span>Project Management
            </div>
            <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws1">
              3.2.1.1 Construction Management Plan
            </div>
            <div class="t m0 x8 h3 y4c ff2 fs0 fc0 sc0 ls0 ws13">
              The<span class="_ _19"> </span>CM<span class="_ _19"> </span>shall
              <span class="_ _19"> </span>prepare<span class="_ _19"> </span>a
              <span class="_ _19"> </span>Construction
              <span class="_ _19"></span>Management<span class="_ _19"> </span>
              Plan<span class="_ _19"></span>for<span class="_"> </span>the
              <span class="_"> </span>Project<span class="_"></span>within
              <span class="_"> </span>the<span class="_"> </span>time
              <span class="_"></span>mutually
            </div>
            <div class="t m0 x3 h3 y4d ff2 fs0 fc0 sc0 ls0 ws18">
              established<span class="_ _12"> </span>by
              <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
              <span class="_ _12"> </span>and<span class="_ _12"> </span>CM
              <span class="_ _12"> </span>and<span class="_ _12"> </span>shall
              <span class="_ _12"> </span>make<span class="_"> </span>
              recommendations<span class="_"> </span>for<span class="_"> </span>
              revisions<span class="_"> </span>to<span class="_"></span>the
              <span class="_"> </span>plan<span class="_"> </span>throughout
              <span class="_"> </span>the
            </div>
            <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws19">
              duration<span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>Project,<span class="_"> </span>as
              <span class="_"> </span>may<span class="_"></span>be
              <span class="_"> </span>appropriate.<span class="_ _13"> </span>In
              <span class="_"> </span>preparing<span class="_"> </span>the
              <span class="_ _12"></span>Construction
              <span class="_ _12"> </span>Mana<span class="_ _0"></span>gement
              <span class="_ _12"> </span>Plan,<span class="_ _12"> </span>the
              <span class="_ _12"> </span>CM
            </div>
            <div class="t m0 x3 h3 y4f ff2 fs0 fc0 sc0 ls0 ws1a">
              shall<span class="_ _6"> </span>consider
              <span class="_ _14"> </span>the<span class="_ _6"> </span>Owner
              <span class="_ _3"></span>’s<span class="_ _6"> </span>schedule,
              <span class="_ _14"> </span>budget,<span class="_"> </span>and
              <span class="_"> </span>design<span class="_"> </span>requirements
              <span class="_"> </span>for<span class="_"> </span>the
              <span class="_"> </span>Project.<span class="_ _18"></span>The
              <span class="_"> </span>CM<span class="_"> </span>shall
              <span class="_"></span>then
            </div>
            <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1b">
              develop<span class="_ _1b"> </span>various
              <span class="_ _1d"></span>alternatives
              <span class="_ _1b"> </span>for<span class="_"> </span>the
              <span class="_"> </span>sequencing<span class="_"> </span>and
              <span class="_"> </span>management<span class="_"> </span>of
              <span class="_"> </span>the<span class="_"> </span>Project
              <span class="_"></span>and<span class="_"> </span>shall
              <span class="_"> </span>make
            </div>
            <div class="t m0 x3 h3 y51 ff2 fs0 fc0 sc0 ls0 ws1c">
              recommendations<span class="_ _6"> </span>to
              <span class="_"> </span>the<span class="_"> </span>Owner
              <span class="_ _1"></span>.<span class="_"></span>The
              <span class="_"> </span>Construction<span class="_"> </span>
              Management<span class="_"> </span>Plan<span class="_"> </span>
              shall<span class="_"> </span>also<span class="_"> </span>include
              <span class="_"> </span>a<span class="_"> </span>description
              <span class="_"> </span>of<span class="_"> </span>the
            </div>
            <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws1d">
              various<span class="_"> </span>bid<span class="_"> </span>packages
              <span class="_"> </span>recommended<span class="_"> </span>for
              <span class="_"> </span>the<span class="_"> </span>Project.
              <span class="_"></span>The<span class="_"> </span>Construction
              <span class="_"> </span>Management<span class="_ _f"> </span>Plan
              <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
              <span class="_ _f"> </span>presented
            </div>
            <div class="t m0 x3 h3 y53 ff2 fs0 fc0 sc0 ls0 ws1e">
              to<span class="_ _19"> </span>the<span class="_ _19"> </span>Owner
              <span class="_ _19"> </span>for<span class="_ _19"> </span>
              acceptance.<span class="_ _17"> </span>The<span class="_"> </span>
              CM<span class="_"> </span>shall<span class="_"> </span>develop
              <span class="_"></span>a<span class="_"> </span>Master
              <span class="_"> </span>Schedule<span class="_"> </span>for
              <span class="_"> </span>the<span class="_"></span>Project.
              <span class="_ _13"> </span>The<span class="_"> </span>CM
              <span class="_"> </span>shall
            </div>
            <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws10">
              determine<span class="_"> </span>the<span class="_"> </span>
              appropriate<span class="_"> </span>bid<span class="_"> </span>
              packages<span class="_"> </span>based<span class="_"> </span>on
              <span class="_"> </span>the<span class="_"> </span>available
              <span class="_"></span>resources.<span class="_ _18"> </span>The
              <span class="_ _12"></span>CM<span class="_ _12"> </span>shall
              <span class="_ _12"> </span>familiarize
              <span class="_ _12"> </span>itself
            </div>
            <div class="t m0 x3 h3 y55 ff2 fs0 fc0 sc0 ls0 ws1f">
              with<span class="_ _12"> </span>all<span class="_ _12"> </span>
              available<span class="_"> </span>Project<span class="_"> </span>
              funding<span class="_"> </span>and<span class="_"> </span>work
              <span class="_"></span>with<span class="_"> </span>the
              <span class="_"> </span>Owner<span class="_"></span>and
              <span class="_"> </span>Design<span class="_"> </span>Consultant
              <span class="_"> </span>to<span class="_"> </span>maximize
              <span class="_"> </span>the<span class="_"> </span>scope
              <span class="_"> </span>and
            </div>
            <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws20">
              quality<span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>Project<span class="_"> </span>based
              <span class="_"> </span>upon<span class="_"> </span>the
              <span class="_"> </span>available<span class="_"> </span>funds.
              <span class="_"> </span>The<span class="_"> </span>CM
              <span class="_"> </span>shall<span class="_"></span>make
              <span class="_"> </span>recommendations<span class="_"> </span>
              regarding
            </div>
            <div class="t m0 x3 h3 y57 ff2 fs0 fc0 sc0 ls0 ws10">
              communication<span class="_"> </span>among<span class="_"> </span>
              the<span class="_"> </span>parties<span class="_"> </span>in
              <span class="_"></span>an<span class="_ _12"> </span>effort
              <span class="_ _12"> </span>to<span class="_ _12"> </span>ensure
              <span class="_ _12"> </span>the<span class="_ _12"> </span>prompt
              <span class="_ _12"> </span>and<span class="_ _12"> </span>proper
              <span class="_ _12"> </span>flow<span class="_ _12"> </span>of
              <span class="_ _12"> </span>Project<span class="_ _12"> </span>
              inform<span class="_ _0"></span>ation.
            </div>
            <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws21">
              The<span class="_"> </span>CM<span class="_"> </span>shall
              <span class="_"></span>outline<span class="_"> </span>its
              <span class="_"> </span>plan<span class="_"></span>for
              <span class="_"> </span>minority<span class="_"> </span>business
              <span class="_"> </span>enterprise<span class="_"> </span>
              participation<span class="_"> </span>goals<span class="_"> </span>
              required<span class="_"> </span>by<span class="_"> </span>state
              <span class="_"> </span>law<span class="_"> </span>and
              <span class="_"></span>the
            </div>
            <div class="t m0 x3 h3 y59 ff2 fs0 fc0 sc0 ls0 ws18">
              Owner<span class="_ _1"></span>,<span class="_ _12"> </span>
              including<span class="_ _12"> </span>reporting
              <span class="_ _12"></span>all<span class="_ _12"> </span>
              information<span class="_ _12"></span>required
              <span class="_ _12"> </span>by<span class="_ _12"> </span>state
              <span class="_ _12"> </span>law<span class="_ _12"> </span>on
              <span class="_"> </span>behalf<span class="_"> </span>of
              <span class="_"></span>the<span class="_"> </span>Owner
              <span class="_"> </span>to<span class="_"></span>the
              <span class="_"> </span>North<span class="_"> </span>Carolina
            </div>
            <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws22">
              Department<span class="_"> </span>of<span class="_"> </span>
              Administration,<span class="_"> </span>Office
              <span class="_"></span>of<span class="_"> </span>Historic
              <span class="_ _0"></span>ally<span class="_"> </span>
              Underutilized<span class="_"> </span>Businesses.
              <span class="_ _1c"> </span>The<span class="_"> </span>CM
              <span class="_"> </span>shall<span class="_"> </span>include
              <span class="_"></span>a<span class="_"> </span>Project
            </div>
            <div class="t m0 x3 h3 y5b ff2 fs0 fc0 sc0 ls0 ws1">
              safety plan covering all critical areas of the Project.
            </div>
            <div class="t m0 x3 h3 y5c ff2 fs0 fc0 sc0 ls0 ws1">
              3.2.2<span class="_ _16"> </span>T<span class="_ _1"></span>ime
              Management
            </div>
            <div class="t m0 x3 h3 y5d ff2 fs0 fc0 sc0 ls0 ws1">
              3.2.2.1 Master Schedule
            </div>
            <div class="c x0 y1e w0 h4">
              <div class="t m0 x5 h5 y1f ff2 fs1 fc0 sc0 ls0">4</div>
            </div>
          </div>
          <div
            class="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          ></div>
        </div>
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
              <span class="_ _12"> </span>payment.<span class="_ _18"> </span>
              The<span class="_ _12"> </span>CM<span class="_"> </span>shall
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
              commencement<span class="_"> </span>date<span class="_"> </span>
              for<span class="_"> </span>the<span class="_"> </span>CM’s
              <span class="_"></span>Basic<span class="_"> </span>Services
              <span class="_"> </span>sha<span class="_ _0"></span>ll
              <span class="_"> </span>be<span class="_"></span>the
              <span class="_"> </span>date<span class="_"> </span>of
              <span class="_"></span>execution<span class="_"> </span>of
              <span class="_"> </span>this
            </div>
            <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws96">
              Agreement<span class="_ _19"> </span>by
              <span class="_ _19"> </span>the<span class="_ _19"> </span>Owner
              <span class="_ _19"> </span>as<span class="_ _19"> </span>stated
              <span class="_ _19"> </span>herein<span class="_ _19"> </span>or
              <span class="_ _19"> </span>the<span class="_ _19"> </span>date
              <span class="_ _19"> </span>on<span class="_ _19"> </span>which
              <span class="_ _19"> </span>the<span class="_"> </span>Owner
              <span class="_"> </span>issues<span class="_"></span>to
              <span class="_"> </span>the<span class="_"> </span>CM
              <span class="_"></span>a<span class="_"> </span>written
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
              CM’s<span class="_ _6"> </span>Basic<span class="_"> </span>
              Services<span class="_"> </span>during<span class="_"> </span>the
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
              4.1.3<span class="_ _16"> </span>The<span class="_ _12"> </span>
              CM’s<span class="_ _12"> </span>Basic<span class="_ _12"> </span>
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
            <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws36">
              4.1.4.<span class="_ _26"> </span>The<span class="_ _14"> </span>
              CM<span class="_ _6"> </span>shall<span class="_ _14"> </span>
              achieve<span class="_ _14"> </span>substantial
              <span class="_ _6"></span>completion<span class="_ _14"> </span>of
              <span class="_"> </span>the<span class="_"> </span>Project
              <span class="_"> </span>on<span class="_"></span>or
              <span class="_"> </span>before<span class="_"> </span>_____,
              <span class="_"></span>unless<span class="_"> </span>the
              <span class="_"> </span>Owner
            </div>
            <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 ws6e">
              and<span class="_"> </span>CM<span class="_"> </span>agree
              <span class="_"></span>to<span class="_"> </span>a
              <span class="_ _6"> </span>different<span class="_ _6"> </span>
              date<span class="_ _14"> </span>in<span class="_ _6"> </span>
              writing.<span class="_ _13"> </span>The<span class="_ _6"> </span>
              date<span class="_ _14"> </span>for<span class="_ _6"> </span>
              final<span class="_ _14"> </span>completion
              <span class="_ _14"> </span>shall<span class="_ _6"></span>be
              <span class="_ _14"> </span>thirty<span class="_ _6"> </span>(30)
              <span class="_ _14"> </span>days<span class="_ _6"> </span>after
            </div>
            <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
              substantial completion.
            </div>
            <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
              4.2<span class="_ _e"> </span>Delays and Extensions of T
              <span class="_ _1"></span>ime
            </div>
            <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws43">
              4.2.1<span class="_ _16"> </span>The<span class="_ _12"> </span>
              time<span class="_ _12"> </span>during<span class="_ _12"> </span>
              which<span class="_ _12"> </span>the<span class="_ _12"> </span>CM
              <span class="_"> </span>or<span class="_"> </span>any
              <span class="_"></span>of<span class="_"> </span>the
              <span class="_"> </span>contractors<span class="_"> </span>is
              <span class="_"> </span>delayed<span class="_"> </span>in
              <span class="_"> </span>the<span class="_"></span>performance
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"> </span>work<span class="_"> </span>by
            </div>
            <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws80">
              the<span class="_ _19"> </span>issuance
              <span class="_ _19"> </span>of<span class="_ _19"> </span>any
              <span class="_ _19"> </span>required<span class="_"> </span>
              permits,<span class="_"> </span>acts<span class="_"> </span>of
              <span class="_"> </span>god,<span class="_"></span>excessive
              <span class="_"> </span>inclement<span class="_"> </span>weather
              <span class="_ _1"></span>,<span class="_"> </span>fires,
              <span class="_"> </span>floods,<span class="_"> </span>epidemics,
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
              Neither<span class="_ _f"></span>the<span class="_ _f"> </span>
              Owner<span class="_ _10"> </span>nor<span class="_ _f"> </span>the
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
              understood<span class="_"> </span>and<span class="_"> </span>
              agreed<span class="_"> </span>that<span class="_"> </span>the
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
            <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 wsf0">
              4.2.2<span class="_ _16"> </span>In<span class="_ _12"> </span>the
              <span class="_ _12"> </span>event<span class="_ _12"> </span>
              Project<span class="_ _12"> </span>delays
              <span class="_ _12"></span>arise<span class="_ _12"> </span>from
              <span class="_ _12"> </span>or<span class="_ _12"> </span>out
              <span class="_"> </span>of<span class="_"></span>any
              <span class="_"> </span>act<span class="_"> </span>or
              <span class="_"></span>omission<span class="_"> </span>of
              <span class="_"> </span>the<span class="_"></span>Owner
              <span class="_ _1"></span>,<span class="_"> </span>Design
              <span class="_"></span>Consultant
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
        <div id="pf20" class="pf w0 h0" data-page-no="20">
          <div class="pc pc20 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfYklEQVR42uza0QmAMBBEQU/sv+KD9SMdGDAaZkpYMPiMleQAAACACacJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAAtKUJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAAtKUJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALSlCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2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AAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAA/JHECAAAAJz6AQbxP2b4kFLxAAAAAElFTkSuQmCC"
            />
            <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws147">
              6.12<span class="_ _27"> </span>The<span class="_ _19"> </span>
              Owner<span class="_ _19"> </span>shall<span class="_ _19"> </span>
              furnish<span class="_ _19"> </span>evidence
              <span class="_ _19"></span>satisfactory
              <span class="_ _19"> </span>to<span class="_ _19"></span>the
              <span class="_ _19"> </span>CM<span class="_ _19"> </span>that
              <span class="_ _19"> </span>sufficient<span class="_ _19"></span>
              funds<span class="_ _19"> </span>are<span class="_ _19"> </span>
              available<span class="_"> </span>and
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
              the<span class="_ _6"> </span>Project<span class="_ _14"> </span>
              in<span class="_ _6"> </span>discrete<span class="_"> </span>
              phases<span class="_"> </span>if<span class="_"> </span>all
              <span class="_"></span>of<span class="_"> </span>the
              <span class="_"> </span>funds<span class="_"></span>required
              <span class="_"> </span>for<span class="_"> </span>the
              <span class="_"></span>entire<span class="_"> </span>Project
              <span class="_"> </span>are<span class="_"> </span>not
              <span class="_"> </span>identified<span class="_"> </span>at
              <span class="_"> </span>the<span class="_"> </span>time
            </div>
            <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
              this <span class="_ _1"></span>Agreement is executed by the
              parties.
            </div>
            <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws148">
              6.13<span class="_ _27"> </span>The<span class="_ _19"> </span>
              Owner<span class="_ _1"></span>,<span class="_ _19"> </span>its
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
            <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws149">
              6.15<span class="_ _27"> </span>The<span class="_ _12"> </span>
              Owner<span class="_ _12"> </span>shall<span class="_ _12"> </span>
              designate,<span class="_"> </span>in<span class="_"> </span>
              writing,<span class="_"> </span>an<span class="_"> </span>officer
              <span class="_ _20"></span>,<span class="_"> </span>employee
              <span class="_"> </span>or<span class="_"> </span>other
              <span class="_"> </span>authorized<span class="_"> </span>
              representatives<span class="_"> </span>to<span class="_"> </span>
              act
            </div>
            <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws77">
              in<span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
              <span class="_ _3"></span>’s<span class="_"> </span>behalf
              <span class="_"> </span>with<span class="_"> </span>respect
              <span class="_"> </span>to<span class="_"> </span>the
              <span class="_"></span>Project.<span class="_ _1c"> </span>This
              <span class="_"> </span>representative<span class="_"> </span>
              shall<span class="_"> </span>be<span class="_"> </span>available
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
              Education.<span class="_ _6"> </span>The
              <span class="_ _14"> </span>CM<span class="_ _6"> </span>shall
              <span class="_ _14"> </span>notify<span class="_ _6"> </span>the
              <span class="_ _14"> </span>Owner<span class="_ _14"> </span>in
              <span class="_ _6"> </span>writing<span class="_ _14"> </span>of
              <span class="_"> </span>any<span class="_"> </span>deadlines
              <span class="_"> </span>for<span class="_"> </span>responses
              <span class="_"> </span>and<span class="_"> </span>how
              <span class="_"> </span>the<span class="_"></span>Owner
              <span class="_ _3"></span>’s
            </div>
            <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
              failure to respond by the stated deadline will impact the Project
              schedule.
            </div>
            <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws89">
              6.16<span class="_ _27"> </span>The<span class="_ _6"> </span>
              Owner<span class="_ _14"> </span>shall<span class="_ _6"> </span>
              make<span class="_ _14"> </span>payments
              <span class="_ _6"> </span>to<span class="_ _14"> </span>the
              <span class="_"> </span>CM<span class="_"></span>on
              <span class="_"> </span>the<span class="_"> </span>basis
              <span class="_"></span>of<span class="_"> </span>the
              <span class="_"> </span>Contractors’<span class="_"> </span>
              payment<span class="_"> </span>applications
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
              pay<span class="_ _f"></span>applications
              <span class="_ _f"> </span>in
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
            <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 wsab">
              7.1.1<span class="_"> </span>The<span class="_ _2b"> </span>Owner
              <span class="_ _2b"> </span>and<span class="_ _2b"> </span>CM
              <span class="_ _2b"> </span>agree<span class="_ _2b"> </span>that
              <span class="_ _2b"> </span>the<span class="_ _2b"> </span>
              Guaranteed<span class="_ _2b"> </span>Maximum
              <span class="_ _2c"></span>Price<span class="_ _2c"> </span>shall
              <span class="_"> </span>be
            </div>
            <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
              _______________________<span class="_ _12"> </span>dollars
              <span class="_ _12"></span>($____________)
              <span class="_ _12"> </span>for<span class="_ _12"></span>this
              <span class="_ _12"> </span>Project.
              <span class="_ _12"> </span>The<span class="_ _12"> </span>parties
              <span class="_ _12"> </span>further<span class="_ _12"></span>
              agree<span class="_ _12"> </span>that<span class="_ _12"> </span>
              in<span class="_"> </span>the
            </div>
            <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 ws34">
              event<span class="_ _19"> </span>the<span class="_ _19"> </span>
              bids<span class="_ _19"> </span>received
              <span class="_ _19"> </span>by<span class="_ _19"> </span>the
              <span class="_ _19"> </span>CM<span class="_ _19"> </span>for
              <span class="_ _19"> </span>the<span class="_ _19"> </span>work,
              <span class="_ _19"> </span>including<span class="_ _19"> </span>
              all<span class="_ _19"> </span>of<span class="_"> </span>the
              <span class="_"> </span>alternates<span class="_"> </span>accepted
              <span class="_"> </span>by<span class="_"> </span>the
              <span class="_"> </span>Owner<span class="_ _1"></span>,
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
              alternatives<span class="_"> </span>accepted
              <span class="_"> </span>by<span class="_"> </span>the
              <span class="_"> </span>Owner<span class="_ _1"></span>,
              <span class="_"> </span>are<span class="_"> </span>less
              <span class="_"></span>than<span class="_"> </span>the
              <span class="_"> </span>line<span class="_"></span>item
              <span class="_"> </span>in<span class="_"> </span>the
              <span class="_"></span>GMP<span class="_"> </span>for
              <span class="_"> </span>the<span class="_"></span>cost
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>work,<span class="_"> </span>the
            </div>
            <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
              remaining<span class="_ _15"> </span>funds
              <span class="_ _15"></span>shall<span class="_ _15"> </span>be
              <span class="_ _15"> </span>added<span class="_ _15"> </span>to
              <span class="_ _15"> </span>the<span class="_ _15"> </span>Owner
              <span class="_ _3"></span>’s<span class="_ _1c"> </span>
              contingency<span class="_ _1"></span>.{" "}
              <span class="_ _1c"> </span>The<span class="_ _1a"> </span>scope
              <span class="_ _1c"> </span>of<span class="_ _15"> </span>work
              <span class="_ _15"> </span>included<span class="_ _15"> </span>in
              <span class="_ _15"> </span>the<span class="_ _19"> </span>bid
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
              <span class="_ _12"> </span>shall<span class="_ _12"> </span>
              consist<span class="_ _12"> </span>of<span class="_ _12"> </span>
              the<span class="_ _12"> </span>cost<span class="_ _12"> </span>of
              <span class="_ _12"> </span>the<span class="_ _12"> </span>work,
            </div>
            <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
              CM’s<span class="_ _12"> </span>contingency
              <span class="_ _4"></span>,<span class="_ _12"> </span>and
              <span class="_ _12"> </span>general<span class="_"> </span>
              conditions,<span class="_"> </span>CM’s<span class="_"> </span>
              fee. <span class="_"> </span>The<span class="_"></span>CM
              <span class="_"> </span>and<span class="_"> </span>Owner
              <span class="_"></span>further<span class="_"> </span>agree
              <span class="_"> </span>that<span class="_"> </span>the
              <span class="_"> </span>dollar<span class="_"></span>values
            </div>
            <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1">
              for the line items in the GMP stated abov
              <span class="_ _0"></span>e consist of the:
            </div>
            <div class="c x15 ya8 w2 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
                Cost of Work
              </div>
            </div>
            <div class="c x17 ya8 w3 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">
                $________
              </div>
            </div>
            <div class="c x15 yaa w2 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
                CM construction contingency
              </div>
            </div>
            <div class="c x17 yaa w3 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">
                $________
              </div>
            </div>
            <div class="c x15 yab w2 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
                General Conditions
              </div>
            </div>
            <div class="c x17 yab w3 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">
                $________
              </div>
            </div>
            <div class="c x15 yac w2 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
                CM’s fee for preconstruction services
              </div>
            </div>
            <div class="c x17 yac w3 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">
                $________
              </div>
            </div>
            <div class="c x15 yad w2 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws1">
                Construction and post-construction services
              </div>
            </div>
            <div class="c x17 yad w3 h6">
              <div class="t m0 x16 h3 ya9 ff2 fs0 fc0 sc0 ls0 ws0">
                $________
              </div>
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
              <span class="_ _12"> </span>fifteen<span class="_ _12"> </span>
              (15)<span class="_ _12"> </span>days<span class="_ _12"> </span>of
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
            <div class="t m0 x3 h3 yb3 ff2 fs0 fc0 sc0 ls0 ws14a">
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
        <div id="pf24" class="pf w0 h0" data-page-no="24">
          <div class="pc pc24 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
            />
            <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws41">
              7.1.3.3<span class="_ _1c"> </span>Should
              <span class="_ _6"> </span>concealed<span class="_ _6"> </span>or
              <span class="_ _14"> </span>unknown<span class="_ _14"> </span>
              physical<span class="_ _6"></span>conditions
              <span class="_ _14"> </span>be<span class="_"> </span>encountered
              <span class="_"> </span>that<span class="_"> </span>differ
              <span class="_"> </span>materially<span class="_"> </span>from
              <span class="_"> </span>those
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
              <span class="_ _12"> </span>involving<span class="_ _12"> </span>
              an<span class="_ _12"> </span>adjustment
              <span class="_ _12"> </span>in<span class="_ _12"> </span>the
              <span class="_ _12"> </span>Guaranteed<span class="_ _12"> </span>
              Maximum
            </div>
            <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws66">
              Price<span class="_"> </span>or<span class="_"> </span>change
              <span class="_"></span>of<span class="_"> </span>the
              <span class="_ _12"> </span>construction
              <span class="_ _12"> </span>completion<span class="_ _12"></span>
              date.<span class="_ _18"> </span>Such<span class="_ _12"> </span>
              changes<span class="_ _12"> </span>may<span class="_ _12"> </span>
              be<span class="_ _12"> </span>affected<span class="_ _12"> </span>
              by<span class="_ _12"> </span>written<span class="_ _12"> </span>
              order<span class="_ _12"> </span>only
            </div>
            <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
              and shall be signed by the Owner and the CM prior to the work
              being performed.
            </div>
            <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws18">
              7.1.3.5<span class="_ _1c"> </span>In<span class="_ _12"> </span>
              the<span class="_ _12"> </span>event<span class="_ _12"> </span>
              that<span class="_ _12"> </span>the<span class="_ _12"> </span>
              bids<span class="_ _12"> </span>for<span class="_ _12"> </span>the
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
              <span class="_ _12"> </span>savings.<span class="_ _18"> </span>
              The
            </div>
            <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
              parties agree that any savings based upon the receipt of bids
              shall be retained solely by the Owner<span class="_ _20"></span>.
            </div>
            <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws1">
              7.1.4<span class="_ _16"> </span>Unused Funds
            </div>
            <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 wsbd">
              7.1.4.1<span class="_ _1c"> </span>In<span class="_ _6"> </span>
              the<span class="_ _14"> </span>event<span class="_ _6"> </span>
              that<span class="_ _14"> </span>there<span class="_ _6"> </span>
              are<span class="_ _14"> </span>any<span class="_ _6"> </span>funds
              <span class="_ _14"> </span>remaining<span class="_ _14"></span>in
              <span class="_ _6"> </span>any<span class="_ _14"> </span>
              contingency<span class="_ _20"></span>,<span class="_"> </span>
              those<span class="_"> </span>funds<span class="_"> </span>shall
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
              7.1.4.3<span class="_ _1c"> </span>In<span class="_ _12"> </span>
              the<span class="_ _12"> </span>event<span class="_"> </span>that
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
            <div class="t m0 x8 h3 y6b ff2 fs0 fc0 sc0 ls0 ws159">
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
              sum<span class="_"> </span>in<span class="_"> </span>the
              <span class="_"></span>amount<span class="_"> </span>of
              <span class="_"> </span>________________________________________
              <span class="_ _18"> </span>dollars<span class="_ _12"> </span>
              ($________)<span class="_ _12"></span>that
              <span class="_ _12"> </span>shall<span class="_ _12"> </span>be
            </div>
            <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws15a">
              divided<span class="_ _12"> </span>by<span class="_ _12"> </span>
              the<span class="_ _12"> </span>number<span class="_ _12"> </span>
              of<span class="_"> </span>months<span class="_"> </span>scheduled
              <span class="_"> </span>for<span class="_"> </span>the
              <span class="_"> </span>basic<span class="_"> </span>services
              <span class="_"> </span>in<span class="_"> </span>Paragraphs
              <span class="_"> </span>3.2,<span class="_"> </span>3.3
              <span class="_"> </span>and<span class="_"> </span>3.4
              <span class="_"></span>and<span class="_"> </span>paid
              <span class="_"> </span>in
            </div>
            <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws12e">
              equal<span class="_"> </span>monthly<span class="_"> </span>
              installments<span class="_"> </span>as<span class="_ _6"> </span>
              the<span class="_ _14"> </span>services<span class="_ _6"> </span>
              are<span class="_ _14"> </span>performed.
              <span class="_ _6"> </span>The<span class="_ _14"> </span>CM
              <span class="_ _6"> </span>shall<span class="_ _14"> </span>be
              <span class="_ _14"> </span>compensated<span class="_ _6"> </span>
              for<span class="_ _14"></span>performing
            </div>
            <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 ws8d">
              basic<span class="_"> </span>services<span class="_"> </span>
              described<span class="_"> </span>in<span class="_"> </span>the
              <span class="_"></span>construction<span class="_"> </span>phase
              <span class="_"> </span>(Paragraph<span class="_ _f"> </span>3.5)
              <span class="_ _f"> </span>and<span class="_ _f"> </span>
              post-construction<span class="_ _f"></span>phase
              <span class="_ _f"> </span>(Paragraph
            </div>
            <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws15b">
              3.6)<span class="_ _19"> </span>for<span class="_ _19"> </span>a
              <span class="_ _19"> </span>total<span class="_ _19"> </span>lump
              <span class="_"> </span>sum<span class="_"> </span>in
              <span class="_"></span>the<span class="_"> </span>amount
              <span class="_"> </span>of<span class="_"></span>_____________
              <span class="_"> </span>dollars<span class="_"> </span>
              ($________).<span class="_ _13"> </span>In<span class="_"> </span>
              the<span class="_"> </span>event<span class="_"> </span>there
              <span class="_"></span>are
            </div>
            <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws75">
              changes<span class="_ _15"> </span>in<span class="_ _15"> </span>
              the<span class="_"> </span>work<span class="_"> </span>that
              <span class="_"></span>require<span class="_"> </span>an
              <span class="_"> </span>adjustment<span class="_"> </span>in
              <span class="_"> </span>the<span class="_"> </span>CM’s
              <span class="_"> </span>construction/post-c
              <span class="_ _0"></span>onstruction<span class="_"></span>fee,
              <span class="_"> </span>the<span class="_"> </span>fee
            </div>
            <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws22">
              adjustment<span class="_ _12"> </span>shall
              <span class="_ _12"></span>be<span class="_ _12"> </span>based
              <span class="_"> </span>upon<span class="_"> </span>______%
              <span class="_"> </span>of<span class="_"></span>the
              <span class="_"> </span>cost<span class="_"> </span>of
              <span class="_"></span>the<span class="_"> </span>work
              <span class="_"> </span>added<span class="_"></span>or
              <span class="_"> </span>deleted<span class="_"> </span>from
              <span class="_"></span>the<span class="_"> </span>Project.
              <span class="_ _1c"> </span>The<span class="_"> </span>fee
            </div>
            <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws34">
              for<span class="_"> </span>these<span class="_"> </span>phases
              <span class="_"></span>shall<span class="_"> </span>be
              <span class="_"> </span>paid<span class="_"></span>in
              <span class="_"> </span>proportion<span class="_"> </span>to
              <span class="_"></span>the<span class="_"> </span>percentage
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"> </span>actual<span class="_"></span>cost
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>work<span class="_"> </span>paid
              <span class="_ _12"> </span>by<span class="_ _12"></span>the
            </div>
            <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws10">
              Owner<span class="_ _1"></span>.<span class="_ _13"> </span>The
              <span class="_"></span>cost<span class="_"> </span>of
              <span class="_"> </span>the<span class="_"></span>work
              <span class="_"> </span>as<span class="_"> </span>used
              <span class="_"></span>in<span class="_"> </span>this
              <span class="_"> </span>section<span class="_"></span>shall
              <span class="_"> </span>be<span class="_"> </span>the
              <span class="_"></span>total<span class="_"> </span>dollar
              <span class="_"> </span>amount<span class="_"> </span>of
              <span class="_"> </span>the<span class="_"></span>co
              <span class="_ _0"></span>nstruction
            </div>
            <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws15">
              contracts<span class="_ _12"> </span>awarded
              <span class="_ _12"></span>by<span class="_ _12"> </span>the
              <span class="_ _12"> </span>CM<span class="_ _12"> </span>to
              <span class="_ _12"> </span>contractors
              <span class="_ _12"> </span>for<span class="_ _12"></span>the
              <span class="_ _12"> </span>performance<span class="_ _12"></span>
              of<span class="_ _12"> </span>the<span class="_"> </span>work,
              <span class="_"></span>minus<span class="_"> </span>any
              <span class="_"> </span>unused<span class="_"></span>allowances
            </div>
            <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws4">
              or<span class="_"> </span>other<span class="_"> </span>deductive
              <span class="_"> </span>change<span class="_"> </span>orders.
              <span class="_ _18"> </span>The<span class="_ _f"> </span>CM’s
              <span class="_ _f"> </span>contingency<span class="_ _f"></span>
              shall<span class="_ _f"> </span>not<span class="_ _f"> </span>be
              <span class="_ _f"> </span>included<span class="_ _f"> </span>in
              <span class="_ _f"> </span>the<span class="_ _f"> </span>
              calculation<span class="_ _10"> </span>or
              <span class="_ _f"> </span>payment
            </div>
            <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws18">
              of<span class="_ _12"> </span>the<span class="_ _12"> </span>CM’s
              <span class="_ _12"> </span>fee.<span class="_ _18"> </span>
              Progress<span class="_ _12"> </span>payments
              <span class="_ _12"></span>for<span class="_ _12"> </span>the
              <span class="_ _12"> </span>work<span class="_ _12"> </span>
              performed<span class="_ _12"></span>by<span class="_ _12"> </span>
              the<span class="_ _12"> </span>contractors
              <span class="_ _12"> </span>shall<span class="_ _12"></span>be
              <span class="_ _12"> </span>paid<span class="_"> </span>as
              <span class="_"></span>the<span class="_"> </span>work
              <span class="_"> </span>is
            </div>
            <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws4">
              performed<span class="_"> </span>and<span class="_"> </span>
              approved<span class="_ _f"> </span>in<span class="_ _f"> </span>
              accordance<span class="_ _f"> </span>with
              <span class="_ _f"> </span>this<span class="_ _f"> </span>
              Agreement.<span class="_ _f"> </span>The
              <span class="_ _10"> </span>CM<span class="_ _f"> </span>
              acknowledges<span class="_ _f"> </span>that
              <span class="_ _f"></span>the<span class="_ _f"> </span>Owner
              <span class="_ _f"> </span>only<span class="_ _10"> </span>has
            </div>
            <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws45">
              funds<span class="_ _12"> </span>for<span class="_ _12"> </span>
              the<span class="_"> </span>basic<span class="_"> </span>services
              <span class="_"> </span>in<span class="_"> </span>Paragraphs
              <span class="_"> </span>3.2,<span class="_"> </span>3.3,
              <span class="_"> </span>and<span class="_"> </span>3.4
              <span class="_"></span>at<span class="_"> </span>the
              <span class="_"> </span>time<span class="_"></span>this
              <span class="_"> </span>Agreement<span class="_"> </span>is
              <span class="_"> </span>being<span class="_"> </span>executed
              <span class="_"> </span>and
            </div>
            <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws39">
              that<span class="_ _6"> </span>the<span class="_"> </span>CM
              <span class="_"></span>is<span class="_"> </span>not
              <span class="_"> </span>authorized<span class="_"> </span>to
              <span class="_"> </span>perform<span class="_"> </span>any
              <span class="_"> </span>services<span class="_"> </span>in
              <span class="_"> </span>Paragraphs<span class="_"> </span>3.5
              <span class="_"> </span>and<span class="_"> </span>3.6
              <span class="_"> </span>or<span class="_"></span>any
              <span class="_"> </span>other<span class="_"> </span>provisions
              <span class="_"> </span>of
            </div>
            <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws1">
              this <span class="_ _1"></span>Agreement without the express
              written permission of the Owner<span class="_ _20"></span>.
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
            <div class="t m0 x8 h3 y20 ff2 fs0 fc0 sc0 ls0 ws139">
              Payments<span class="_ _6"> </span>to<span class="_ _14"> </span>
              the<span class="_ _6"> </span>CM<span class="_ _14"> </span>shall
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
              <span class="_"> </span>performing<span class="_"> </span>
              Additional<span class="_"> </span>Services<span class="_"> </span>
              in<span class="_"> </span>an
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
              general<span class="_"> </span>conditions,<span class="_"> </span>
              or<span class="_"> </span>other<span class="_"> </span>monies
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
              <span class="_"> </span>documentation.<span class="_ _18"></span>
              The<span class="_"> </span>Owner<span class="_ _1"></span>,
            </div>
            <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws11f">
              and<span class="_ _12"> </span>any<span class="_ _12"> </span>duly
              <span class="_ _12"> </span>authorized<span class="_"> </span>
              agents<span class="_"> </span>or<span class="_"> </span>
              representatives<span class="_"> </span>of<span class="_"> </span>
              the<span class="_"> </span>Owner<span class="_ _20"></span>,
              <span class="_"></span>shall<span class="_"> </span>be
              <span class="_"> </span>provided<span class="_"> </span>access
              <span class="_"> </span>to<span class="_"> </span>all
              <span class="_"> </span>such<span class="_"></span>records
            </div>
            <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws15d">
              and<span class="_"> </span>supporting<span class="_"> </span>
              documentation<span class="_"> </span>during
              <span class="_"> </span>normal<span class="_"> </span>business
              <span class="_"> </span>hours<span class="_"> </span>upon
              <span class="_"> </span>reasonable<span class="_"> </span>request
              <span class="_"> </span>by<span class="_"> </span>the
              <span class="_"> </span>Owner<span class="_ _20"></span>.
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
              audit,<span class="_ _12"> </span>inspect<span class="_"> </span>
              and<span class="_"> </span>copy<span class="_"> </span>all
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
              are<span class="_ _12"> </span>expected
              <span class="_ _12"> </span>to<span class="_ _12"> </span>increase
              <span class="_"> </span>or<span class="_"> </span>extend
              <span class="_"> </span>the<span class="_"></span>Project’s
              <span class="_"> </span>critical<span class="_"> </span>path
              <span class="_"> </span>or<span class="_"> </span>the
              <span class="_"></span>scop<span class="_ _0"></span>e
              <span class="_"> </span>or<span class="_"></span>duration
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>CM’s<span class="_"> </span>services.
              <span class="_ _1c"> </span>If
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
              7.6.1<span class="_ _16"> </span>Should
              <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
              <span class="_ _12"> </span>fail<span class="_ _12"> </span>to
              <span class="_ _12"> </span>substantially
              <span class="_ _12"> </span>complete<span class="_"></span>the
              <span class="_"> </span>Project<span class="_"> </span>or
              <span class="_"></span>phase<span class="_"> </span>on
              <span class="_"> </span>or<span class="_"></span>before
              <span class="_"> </span>the<span class="_"> </span>date
              <span class="_"></span>stipulated<span class="_"> </span>for
            </div>
            <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws15f">
              substantial<span class="_ _6"> </span>completion
              <span class="_ _14"></span>of<span class="_ _6"> </span>the
              <span class="_ _14"> </span>Project<span class="_ _6"> </span>(or
              <span class="_ _14"> </span>such<span class="_ _14"> </span>later
              <span class="_ _6"> </span>date<span class="_ _14"> </span>as
              <span class="_ _6"> </span>may<span class="_ _14"> </span>result
              <span class="_ _6"> </span>from<span class="_ _14"> </span>
              extension<span class="_ _14"></span>of<span class="_ _6"> </span>
              time<span class="_ _14"> </span>granted<span class="_"> </span>by
            </div>
            <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws18">
              Owner),<span class="_ _12"> </span>the<span class="_ _12"> </span>
              CM<span class="_ _12"> </span>shall<span class="_ _12"> </span>pay
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
            <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws18">
              $_______<span class="_ _12"> </span>as<span class="_ _12"> </span>
              substantial<span class="_ _12"> </span>completion
              <span class="_ _12"></span>liquidated<span class="_ _12"> </span>
              damages<span class="_"></span>for<span class="_"> </span>each
              <span class="_"> </span>consecutive<span class="_"> </span>
              calendar<span class="_"> </span>day<span class="_"> </span>beyond
              <span class="_"> </span>the<span class="_"></span>date
            </div>
            <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 wsae">
              established<span class="_"> </span>in<span class="_"> </span>this
              <span class="_"> </span>Agreement<span class="_"> </span>that
              <span class="_"> </span>Project<span class="_"> </span>fails
              <span class="_"> </span>to<span class="_"> </span>achieve
              <span class="_"></span>substantial<span class="_"> </span>
              completion<span class="_ _1c"></span>as
              <span class="_ _15"> </span>defined<span class="_ _15"> </span>in
              <span class="_ _15"> </span>this
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
            <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 wsf6">
              will<span class="_ _12"> </span>sustain
              <span class="_ _12"> </span>per<span class="_"> </span>day
              <span class="_"> </span>by<span class="_"></span>failure
              <span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>CM<span class="_"> </span>to
              <span class="_"> </span>complete<span class="_"></span>work
              <span class="_"> </span>within<span class="_"> </span>time
              <span class="_"></span>as<span class="_"> </span>stipulated;
              <span class="_"> </span>it<span class="_"> </span>being
              <span class="_"> </span>recognized<span class="_"> </span>by
              <span class="_"> </span>the
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
              schedule<span class="_"> </span>is<span class="_"> </span>
              uncertain<span class="_"> </span>and<span class="_"> </span>cannot
              <span class="_"> </span>be<span class="_"> </span>computed
              <span class="_"> </span>exactly<span class="_ _20"></span>.
              <span class="_ _18"> </span>This<span class="_"> </span>amount
              <span class="_"> </span>is<span class="_"> </span>the
              <span class="_"></span>minimum<span class="_"> </span>measure
              <span class="_"> </span>of<span class="_"> </span>damages
            </div>
            <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1f">
              the<span class="_ _12"> </span>Owner<span class="_ _12"> </span>
              will<span class="_ _12"> </span>sustain<span class="_"> </span>due
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
              <span class="_ _12"> </span>materials.<span class="_ _18"></span>
              The<span class="_ _12"> </span>inability
              <span class="_ _12"> </span>of<span class="_ _12"> </span>the
              <span class="_ _12"> </span>Owner<span class="_ _12"> </span>to
            </div>
            <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1">
              quantify actual damages shall not prevent the recovery of
              liquidated damages.
            </div>
            <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws160">
              7.6.2<span class="_ _16"> </span>For<span class="_ _12"> </span>
              each<span class="_ _12"> </span>consecutive
              <span class="_ _12"></span>calendar<span class="_ _12"> </span>day
              <span class="_ _12"> </span>that<span class="_ _12"> </span>the
              <span class="_ _12"> </span>work<span class="_ _12"> </span>
              remains<span class="_ _12"> </span>incomplete
              <span class="_ _18"> </span>after<span class="_ _12"></span>the
              <span class="_"> </span>date<span class="_"> </span>established
              <span class="_"> </span>for
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
              otherwise<span class="_ _f"></span>to<span class="_ _10"> </span>
              be
            </div>
            <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws16">
              paid<span class="_"> </span>to<span class="_"> </span>the
              <span class="_"></span>CM<span class="_"> </span>the
              <span class="_"> </span>sum<span class="_"></span>of
              <span class="_"> </span>$______as<span class="_"> </span>final
              <span class="_"> </span>completion<span class="_"> </span>
              liquidated<span class="_"> </span>damages.
              <span class="_ _1c"></span>This<span class="_"> </span>amount
              <span class="_"> </span>is<span class="_"></span>agreed
              <span class="_"> </span>upon<span class="_"> </span>as
              <span class="_"></span>a
            </div>
            <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws98">
              reasonable<span class="_ _12"> </span>and
              <span class="_ _12"> </span>proper<span class="_ _12"> </span>
              measure<span class="_ _12"></span>of<span class="_ _12"> </span>
              damages<span class="_ _12"> </span>the<span class="_ _12"> </span>
              Owner<span class="_ _12"> </span>will<span class="_ _12"> </span>
              sustain<span class="_ _12"> </span>due<span class="_ _12"> </span>
              to<span class="_"> </span>the<span class="_"></span>delay
              <span class="_"> </span>in<span class="_"> </span>the
              <span class="_"></span>completion<span class="_"> </span>of
              <span class="_"> </span>all
            </div>
            <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 ws18">
              remedial<span class="_ _12"> </span>work,
              <span class="_ _12"> </span>the<span class="_ _12"> </span>delay
              <span class="_ _12"> </span>in<span class="_ _12"> </span>the
              <span class="_ _12"> </span>correction<span class="_ _12"> </span>
              of<span class="_ _12"> </span>the<span class="_ _12"> </span>
              deficient<span class="_ _12"> </span>work,
              <span class="_ _12"> </span>the<span class="_"> </span>disruption
              <span class="_"> </span>to<span class="_"> </span>the
              <span class="_"> </span>school<span class="_"> </span>and
              <span class="_"></span>the<span class="_"> </span>learning
            </div>
            <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 wsdd">
              environment,<span class="_ _12"> </span>the
              <span class="_ _12"></span>cost<span class="_ _12"> </span>of
              <span class="_ _12"> </span>Owner<span class="_ _3"></span>’s
              <span class="_"> </span>time<span class="_"></span>and
              <span class="_"> </span>resources,<span class="_"> </span>damage
              <span class="_"> </span>to<span class="_"> </span>Owner’s
              <span class="_"> </span>reputation,<span class="_"> </span>and
              <span class="_"> </span>the<span class="_"> </span>inability
              <span class="_"> </span>to<span class="_"> </span>use
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
            <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 wsa8">
              the<span class="_ _19"> </span>facilities
              <span class="_ _19"> </span>fully<span class="_ _20"></span>.
              <span class="_ _29"> </span>This<span class="_"> </span>amount
              <span class="_"> </span>is<span class="_"></span>in
              <span class="_"> </span>addition<span class="_"> </span>to
              <span class="_"></span>the<span class="_"> </span>liquidated
              <span class="_"> </span>damages<span class="_"> </span>prescribed
              <span class="_"> </span>above<span class="_"> </span>for
              <span class="_"> </span>substantial
            </div>
            <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws0">
              completion.
            </div>
            <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws20">
              7.6.3<span class="_ _16"> </span>The<span class="_"> </span>amount
              <span class="_"> </span>of<span class="_"> </span>liquidated
              <span class="_"> </span>damages<span class="_ _6"> </span>set
              <span class="_ _14"> </span>forth<span class="_ _6"> </span>in
              <span class="_ _14"> </span>Paragraphs<span class="_ _6"> </span>
              7.6.1<span class="_ _14"> </span>and<span class="_ _6"> </span>
              7.6.2<span class="_ _14"> </span>hereinabove
              <span class="_ _14"></span>shall<span class="_ _6"> </span>be
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
              against<span class="_"> </span>CM,<span class="_"> </span>
              including<span class="_"> </span>but<span class="_"> </span>not
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
              <span class="_"></span>liquidated<span class="_ _f"> </span>
              damages<span class="_ _f"></span>as<span class="_ _f"> </span>
              specified<span class="_ _f"> </span>in<span class="_ _f"> </span>
              this<span class="_ _f"> </span>Agreement
              <span class="_ _10"> </span>during<span class="_ _f"></span>such
              <span class="_ _f"> </span>period
            </div>
            <div class="t m0 x3 h3 yb7 ff2 fs0 fc0 sc0 ls0 ws42">
              of<span class="_"> </span>concurrent<span class="_"> </span>delay
              <span class="_ _20"></span>.<span class="_ _18"> </span>For
              <span class="_ _f"> </span>the<span class="_ _f"> </span>purpose
              <span class="_ _10"> </span>of<span class="_ _f"> </span>this
              <span class="_ _f"> </span>section<span class="_ _f"> </span>7.6,
              <span class="_ _f"> </span>concurrent<span class="_ _f"> </span>
              delay<span class="_ _10"> </span>means<span class="_ _f"> </span>
              (a)<span class="_ _f"> </span>a<span class="_ _f"> </span>delay
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
              <span class="_ _12"> </span>agents,<span class="_ _12"> </span>
              each<span class="_ _12"> </span>of<span class="_ _12"> </span>
              which
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
              the<span class="_ _12"> </span>extent<span class="_ _12"> </span>
              of<span class="_ _12"> </span>the<span class="_ _12"> </span>delay
              <span class="_ _12"> </span>will<span class="_ _12"> </span>be
              <span class="_ _12"> </span>apportioned<span class="_ _12"></span>
              between<span class="_ _12"> </span>the<span class="_ _12"> </span>
              Owner<span class="_ _12"> </span>and<span class="_ _12"> </span>
              the<span class="_ _12"> </span>CM,<span class="_ _12"> </span>and
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
              the CM, its subconctractors, sub-subcontractors, agents or
              material suppliers.
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
              addition to the liquidated damages amount set forth hereinabove
              and in 7.7 Summary of Monetary <span class="_ _20"></span>Amounts.
            </div>
            <div class="t m0 x18 h3 yc2 ff2 fs0 fc0 sc0 ls0 ws10">
              7.7<span class="_ _2a"> </span>The<span class="_"> </span>
              following<span class="_"> </span>summary<span class="_"> </span>is
              <span class="_"> </span>intended<span class="_"> </span>to
              <span class="_"></span>provide<span class="_"> </span>a
              <span class="_"> </span>single<span class="_"></span>location
              <span class="_"> </span>for<span class="_"> </span>all
              <span class="_"></span>relevant<span class="_ _12"> </span>
              monetary<span class="_ _12"></span>amounts
            </div>
            <div class="t m0 x18 h3 yc3 ff2 fs0 fc0 sc0 ls0 ws1">
              included<span class="_ _19"> </span>in<span class="_ _19"> </span>
              this<span class="_ _19"> </span>Agreement
              <span class="_ _19"></span>as<span class="_ _19"> </span>of
              <span class="_ _19"> </span>the<span class="_ _19"> </span>date
              <span class="_ _19"> </span>of<span class="_ _19"> </span>
              execution<span class="_ _19"> </span>of
              <span class="_ _14"> </span>the<span class="_ _6"> </span>
              Agreement. <span class="_ _14"> </span>The
              <span class="_ _6"></span>following<span class="_ _14"> </span>
              list<span class="_ _6"> </span>shall<span class="_ _14"> </span>
              take
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
              this<span class="_ _12"> </span>Agreement
              <span class="_ _12"></span>shall<span class="_ _12"> </span>only
              <span class="_ _12"> </span>be<span class="_ _12"> </span>revised
              <span class="_ _12"> </span>by<span class="_ _12"> </span>written
              <span class="_ _12"> </span>agreement<span class="_ _12"> </span>
              between<span class="_ _12"></span>the<span class="_"> </span>
              parties.
              <span class="_"> </span>The<span class="_"> </span>monetary
            </div>
            <div class="t m0 x18 h3 yc6 ff2 fs0 fc0 sc0 ls0 ws1">
              amounts follow:
            </div>
            <div class="t m0 x8 h3 yc7 ff2 fs0 fc0 sc0 ls0 ws164">
              GMP<span class="_"> </span>$________
            </div>
            <div class="t m0 x8 h3 yc8 ff2 fs0 fc0 sc0 ls0 ws1">
              Cost of Work<span class="_ _2e"> </span>$ ________
            </div>
            <div class="t m0 x8 h3 yc9 ff2 fs0 fc0 sc0 ls0 ws1">
              CM Preconstruction Fee<span class="_ _2f"> </span>$________
            </div>
            <div class="t m0 x8 h3 yca ff2 fs0 fc0 sc0 ls0 ws1">
              CM Construction Fee<span class="_ _30"> </span>$________
            </div>
            <div class="t m0 x8 h3 ycb ff2 fs0 fc0 sc0 ls0 ws1">
              CM Construction Contingency<span class="_ _31"> </span>$________
            </div>
            <div class="t m0 x8 h3 ycc ff2 fs0 fc0 sc0 ls0 ws1">
              Owner Contingency<span class="_ _32"> </span>$________
            </div>
            <div class="t m0 x8 h3 ycd ff2 fs0 fc0 sc0 ls0 ws1">
              General Conditions<span class="_ _33"> </span>$________
            </div>
            <div class="t m0 x8 h3 yce ff2 fs0 fc0 sc0 ls0 ws1">
              Liquidated Damages-Substantial<span class="_ _34"> </span>
              $______/Day
            </div>
            <div class="t m0 x8 h3 ycf ff2 fs0 fc0 sc0 ls0 ws1">
              Liquidated Damages – Final<span class="_ _35"> </span>$______/day
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
              <span class="_ _12"> </span>in<span class="_ _12"> </span>
              companies<span class="_ _12"> </span>properly
              <span class="_ _12"></span>licensed<span class="_ _12"> </span>by
              <span class="_ _12"> </span>the
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
        <div id="pf31" class="pf w0 h0" data-page-no="31">
          <div class="pc pc31 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfZklEQVR42uzZwWlgQRBDwdUy+acsJ2Aw/L5MM1Uh6PZQ2v4DAACAgf8mAAAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAADQliYAAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAANCWJgAAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAA0JYmAAAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAADQliYAAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADa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3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAABMqEQAAADg6wBpmVdItZ3BZwAAAABJRU5ErkJggg=="
            />
            <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws66">
              to<span class="_"> </span>negotiate<span class="_"> </span>and
              <span class="_"></span>review<span class="_"> </span>the
              <span class="_"> </span>terms<span class="_"></span>and
              <span class="_ _12"> </span>provisions<span class="_ _12"></span>
              of<span class="_ _12"> </span>this<span class="_ _12"> </span>
              Agreement<span class="_ _12"> </span>and
              <span class="_ _12"> </span>to<span class="_ _12"> </span>
              contribute<span class="_ _12"> </span>to
              <span class="_ _12"> </span>its<span class="_ _12"> </span>
              substance<span class="_ _12"> </span>and
            </div>
            <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws0">form.</div>
            <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1a5">
              1<span class="_ _20"></span>1.4<span class="_"> </span>
              Severability
            </div>
            <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws1a6">
              1<span class="_ _20"></span>1.4.1<span class="_ _25"> </span>If
              <span class="_ _14"></span>any<span class="_ _6"> </span>provision
              <span class="_"> </span>of<span class="_"> </span>this
              <span class="_"> </span>Agreement<span class="_"> </span>is
              <span class="_"> </span>held<span class="_"> </span>as
              <span class="_"> </span>a<span class="_"></span>matter
              <span class="_"> </span>of<span class="_"> </span>law
              <span class="_"></span>to<span class="_"> </span>be
              <span class="_"> </span>unenforceable,<span class="_"> </span>the
              <span class="_"> </span>remainder<span class="_"> </span>of
            </div>
            <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws1">
              this <span class="_ _1"></span>Agreement shall be enforceable
              without such provision.
            </div>
            <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
              1<span class="_ _20"></span>1.5<span class="_ _2a"> </span>Meaning
              of T<span class="_ _2d"></span>erms
            </div>
            <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws18">
              1<span class="_ _20"></span>1.5.1<span class="_ _25"> </span>
              References<span class="_ _12"> </span>made
              <span class="_ _12"></span>in<span class="_"> </span>the
              <span class="_"> </span>singular<span class="_"></span>shall
              <span class="_"> </span>include<span class="_"> </span>the
              <span class="_"> </span>plural<span class="_"> </span>and
              <span class="_"></span>the<span class="_"> </span>masculine
              <span class="_"> </span>shall<span class="_"> </span>include
              <span class="_"> </span>the<span class="_"> </span>feminine
            </div>
            <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1">
              or neuter<span class="_ _1"></span>.
            </div>
            <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws1a5">
              1<span class="_ _20"></span>1.6<span class="_"> </span>Notices
            </div>
            <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws3a">
              1<span class="_ _20"></span>1.6.1<span class="_ _25"> </span>
              Whenever<span class="_ _6"> </span>any<span class="_"> </span>
              provision<span class="_"> </span>of<span class="_"> </span>the
              <span class="_"></span>Contract<span class="_"> </span>Documents
              <span class="_"> </span>requires<span class="_"> </span>the
              <span class="_"> </span>giving<span class="_"> </span>of
              <span class="_"> </span>written<span class="_"> </span>notice,
              <span class="_"> </span>it<span class="_"> </span>shall
              <span class="_"> </span>be
            </div>
            <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws4">
              deemed<span class="_"> </span>to<span class="_"> </span>have
              <span class="_"></span>been<span class="_"> </span>validly
              <span class="_"> </span>given<span class="_"> </span>if
              <span class="_"> </span>delivered<span class="_"> </span>in
              <span class="_"> </span>person<span class="_ _f"> </span>to
              <span class="_ _f"> </span>the<span class="_ _f"> </span>
              individual<span class="_ _f"> </span>or<span class="_ _f"> </span>
              to<span class="_ _f"> </span>a<span class="_ _10"></span>member
              <span class="_ _f"> </span>of<span class="_ _f"> </span>the
              <span class="_ _f"> </span>firm<span class="_ _f"> </span>or
              <span class="_ _10"> </span>to<span class="_ _f"> </span>an
            </div>
            <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1a7">
              officer<span class="_ _12"> </span>of<span class="_ _12"> </span>
              the<span class="_ _12"> </span>corporation
              <span class="_ _12"></span>for<span class="_"> </span>whom
              <span class="_"> </span>it<span class="_"></span>is
              <span class="_"> </span>intended<span class="_"> </span>or
              <span class="_"></span>if<span class="_"> </span>delivered
              <span class="_"> </span>or<span class="_"></span>sent
              <span class="_"> </span>by<span class="_"> </span>r
              <span class="_ _0"></span>egistered<span class="_"> </span>or
              <span class="_"> </span>certified<span class="_"> </span>mail,
              <span class="_"> </span>postage
            </div>
            <div class="t m0 x3 h3 ydc ff2 fs0 fc0 sc0 ls0 ws1">
              prepaid, or by facsimile, addressed as follows:
            </div>
            <div class="t m0 x18 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
              T<span class="_ _4"></span>o the Owner:
            </div>
            <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x20 h3 yde ff2 fs0 fc0 sc0 ls0 ws1">
              With a copy to:
            </div>
            <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 yf7 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x18 h3 y1d ff2 fs0 fc0 sc0 ls0 ws1">
              T<span class="_ _4"></span>o the CM:
            </div>
            <div class="t m0 x3 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________
            </div>
            <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">
              1<span class="_ _20"></span>1.7<span class="_ _2a"> </span>
              Compliance with Board Policies and Procedures
            </div>
            <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws24">
              1<span class="_ _20"></span>1.7.1<span class="_ _25"> </span>The
              <span class="_ _19"> </span>CM<span class="_ _19"> </span>
              acknowledges<span class="_"> </span>that<span class="_"> </span>
              the<span class="_"> </span>Owner<span class="_ _3"></span>’s
              <span class="_"></span>policies<span class="_"> </span>governing
              <span class="_"> </span>conduct<span class="_"> </span>on
              <span class="_"> </span>the<span class="_"></span>Owner’s
              <span class="_"> </span>property<span class="_"> </span>are
            </div>
            <div class="t m0 x3 h3 yf5 ff2 fs0 fc0 sc0 ls0 ws1a8">
              available<span class="_"> </span>for<span class="_"> </span>review
              <span class="_"> </span>on<span class="_"> </span>the
              <span class="_"></span>Owner<span class="_ _3"></span>’s
              <span class="_"> </span>website<span class="_"> </span>at
              <span class="_"> </span>
              <span class="fc1 ws1a9">
                www<span class="_ _20"></span>.dpsnc.net<span class="_"> </span>
                <span class="fc0 ws1aa">
                  In<span class="_ _14"> </span>addition
                  <span class="_ _6"></span>to<span class="_"> </span>complying
                  <span class="_"> </span>with<span class="_"> </span>the
                  <span class="_"> </span>Owner<span class="_ _3"></span>’s
                </span>
              </span>
            </div>
            <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws1">
              policies, the CM agrees to comply with the following:
            </div>
            <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws1ab">
              1<span class="_ _20"></span>1.7.2<span class="_ _25"> </span>The
              <span class="_ _1f"> </span>CM,<span class="_ _1f"> </span>the
              <span class="_ _1f"> </span>contractors<span class="_ _1f"></span>
              and<span class="_ _1f"> </span>their<span class="_"> </span>
              employees<span class="_"> </span>shall<span class="_"> </span>not
              <span class="_"> </span>possess<span class="_"> </span>or
              <span class="_"></span>carry<span class="_ _20"></span>,
              <span class="_"> </span>whether<span class="_"> </span>openly
              <span class="_"> </span>or
            </div>
            <div class="t m0 x3 h3 yf6 ff2 fs0 fc0 sc0 ls0 wsc2">
              concealed,<span class="_ _6"> </span>any
              <span class="_ _14"> </span>gun,<span class="_"> </span>rifle,
              <span class="_"> </span>pistol,<span class="_"> </span>or
              <span class="_"> </span>explosive<span class="_"> </span>on
              <span class="_"> </span>any<span class="_"></span>property
              <span class="_"> </span>owned<span class="_"> </span>by
              <span class="_"> </span>the<span class="_"> </span>Owner
              <span class="_ _1"></span>.<span class="_ _18"> </span>This
              <span class="_"> </span>includes<span class="_"> </span>firearms
            </div>
            <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws26">
              locked<span class="_"> </span>in<span class="_"> </span>
              containers,<span class="_"> </span>vehicles
              <span class="_"> </span>or<span class="_"> </span>firearm
              <span class="_"> </span>racks<span class="_"></span>within
              <span class="_"> </span>vehicles.<span class="_"> </span>The
              <span class="_ _f"> </span>CM,<span class="_ _f"> </span>the
              <span class="_ _f"> </span>contractors<span class="_ _f"> </span>
              and<span class="_ _f"> </span>their<span class="_ _f"> </span>
              employees
            </div>
            <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws19e">
              shall<span class="_ _12"> </span>not<span class="_ _12"> </span>
              cause,<span class="_ _12"> </span>encourage
              <span class="_ _12"></span>or<span class="_ _12"> </span>aid
              <span class="_ _12"> </span>a<span class="_ _12"></span>minor
              <span class="_ _1"></span>,<span class="_"> </span>who
              <span class="_"></span>is<span class="_"> </span>less
              <span class="_"> </span>than<span class="_"></span>18
              <span class="_"> </span>years<span class="_"> </span>old
              <span class="_"></span>to<span class="_"> </span>possess
              <span class="_"> </span>or<span class="_"></span>carry
              <span class="_ _20"></span>,<span class="_"> </span>whether
              <span class="_"> </span>openly
            </div>
            <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
              or concealed, any weapons on any property owned by the Owner
              <span class="_ _20"></span>.
            </div>
            <div class="c x0 y1e w0 h4">
              <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">49</div>
            </div>
          </div>
          <div
            class="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          ></div>
        </div>
        <div id="pf33" class="pf w0 h0" data-page-no="33">
          <div class="pc pc33 w0 h0">
            <img
              class="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfC0lEQVR42uzZMQ4CQRADQYz2/y9eyWREJMcGzImqJzjrmbR9AAAAwIGnCQAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAAtKUJAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0pQkAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAAGGuZAADmSGIEgLe2RrgLf0sAmGLvbQQAbiouAQAAABzytwQAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAD5ZJgCAOZIYgS+0NQLwW/6WADDF3tsIANxUXLkAAAA45G8JAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA1y0TTJDECFzS1ggAAMzhbwkAAMCp+H4AAABwyN8SAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA+BfLBBMkMQKXtDUCAABz+FsCAABwKr4fAAAAHPK3BAAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAXu3XMREAAAyEsMO/6Yro+IkENgDwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAGBMJQIAAABfBzvbLUCThWlMAAAAAElFTkSuQmCC"
            />
            <div class="t m0 x8 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
              This <span class="_ _1"></span>Agreement is executed the day and
              year first written above.
            </div>
            <div class="c x0 y1e w4 h0">
              <div class="t m0 x3 h2 y81 ff1 fs0 fc0 sc0 ls0 ws0">OWNER:</div>
              <div class="t m0 x3 h2 y12 ff1 fs0 fc0 sc0 ls0 ws1">
                DURHAM PUBLIC SCHOOLS BOARD OF
              </div>
              <div class="t m0 xd h2 y75 ff1 fs0 fc0 sc0 ls0 ws0">
                EDUCA<span class="_ _20"></span>TION
              </div>
              <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws0">
                _______________________________________
              </div>
              <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws0">
                _________________
              </div>
              <div class="t m0 x3 h3 ydb ff2 fs0 fc0 sc0 ls0 ws0">Chair</div>
              <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws0">Attest:</div>
              <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws0">
                _______________________________________
              </div>
              <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws0">
                _________________
              </div>
              <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
                [Corporate Seal]
              </div>
              <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws1b3">
                This<span class="_ _1d"> </span>instr<span class="_ _0"></span>
                ument<span class="_ _1d"> </span>has<span class="_ _1b"> </span>
                been<span class="_ _1d"> </span>pre-audited
                <span class="_"></span>in<span class="_"> </span>the
              </div>
              <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws4">
                manner<span class="_"> </span>required<span class="_"> </span>by
                <span class="_"> </span>the<span class="_"> </span>School
                <span class="_"></span>Budget<span class="_ _f"> </span>and
                <span class="_ _f"> </span>Fiscal
              </div>
              <div class="t m0 x3 h3 yf7 ff2 fs0 fc0 sc0 ls0 ws1">
                Control <span class="_ _1"></span>Act.
              </div>
              <div class="t m0 x3 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws0">
                ______________________________________
              </div>
              <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
                ___________________, Finance Officer
              </div>
            </div>
            <div class="c x21 y1e w5 h0">
              <div class="t m0 x22 h2 y125 ff1 fs0 fc0 sc0 ls0 ws1">
                CONSTRUCTION MANAGER:
              </div>
              <div class="t m0 x22 h3 y126 ff2 fs0 fc0 sc0 ls0 ws1">
                ________________ _
              </div>
              <div class="t m0 x22 h3 y127 ff2 fs0 fc0 sc0 ls0 ws0">
                _______________________________________
              </div>
              <div class="t m0 x22 h3 y128 ff2 fs0 fc0 sc0 ls0 ws1">
                _________________, President
              </div>
              <div class="t m0 x22 h3 y129 ff2 fs0 fc0 sc0 ls0 ws0">
                Attest:
              </div>
              <div class="t m0 x22 h3 y12a ff2 fs0 fc0 sc0 ls0 ws0">
                _______________________________________
              </div>
              <div class="t m0 x22 h3 y12b ff2 fs0 fc0 sc0 ls0 ws1">
                Corporate Secretary
              </div>
              <div class="t m0 x22 h3 y12c ff2 fs0 fc0 sc0 ls0 ws1">
                [Corporate Seal]
              </div>
            </div>
            <div class="c x0 y1e w0 h4">
              <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">51</div>
            </div>
          </div>
          <div
            class="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          ></div>
        </div>
      </div>
    </body>
  );
};

export default ShowPages;
