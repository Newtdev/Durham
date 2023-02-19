import React from "react";
import "./PreviewPages.css";

const PreviewPart5 = () => {
  return (
    <>
      {/* <div id="pf29" class="pf w0 h0" data-page-no="29">
        <div class="pc pc29 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws13a">
            earthquake,<span class="_"> </span>earth<span class="_"> </span>
            movement,<span class="_"> </span>testing,<span class="_"> </span>
            architect’s<span class="_"> </span>a<span class="_ _0"></span>nd
            <span class="_"> </span>engineering<span class="_"> </span>fees,
            <span class="_"> </span>mechanical<span class="_"> </span>or
            <span class="_"> </span>electrical<span class="_"> </span>breakdown,
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws167">
            collapse<span class="_"> </span>however<span class="_"> </span>
            caused,<span class="_"> </span>and/or<span class="_"> </span>damage
            <span class="_"> </span>resulting<span class="_"> </span>from
            <span class="_"> </span>defective<span class="_"> </span>design,
            <span class="_"> </span>workmanship<span class="_"> </span>or
            <span class="_"> </span>material.<span class="_ _18"> </span>Limits
          </div>
          <div class="t m0 x3 h3 y20 ff2 fs0 fc0 sc0 ls0 ws6f">
            shall<span class="_ _15"> </span>be<span class="_ _15"> </span>
            written<span class="_ _15"> </span>for<span class="_ _15"> </span>
            the<span class="_ _15"> </span>value<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>GMP
            <span class="_"> </span>and<span class="_"></span>insure
            <span class="_"> </span>the<span class="_"> </span>full
            <span class="_"></span>cost<span class="_"> </span>of
            <span class="_"> </span>replacement<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"> </span>time
            <span class="_"> </span>of<span class="_"></span>loss.
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws16f">
            Sub-limits<span class="_"> </span>for<span class="_"> </span>flood
            <span class="_"> </span>or<span class="_"> </span>earthquake
            <span class="_"> </span>are<span class="_"> </span>subject
            <span class="_"> </span>to<span class="_"> </span>approval
            <span class="_"> </span>by<span class="_"> </span>Owner
            <span class="_ _20"></span>.<span class="_ _13"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>cause<span class="_"> </span>such
            <span class="_ _12"> </span>policy<span class="_ _12"> </span>or
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws170">
            policies<span class="_ _6"> </span>of<span class="_ _14"> </span>
            insurance<span class="_ _6"> </span>required
            <span class="_ _14"></span>under<span class="_ _6"> </span>this
            <span class="_ _14"> </span>subparagraph<span class="_"> </span>to
            <span class="_"> </span>be<span class="_"> </span>endorsed
            <span class="_"> </span>so<span class="_"></span>as
            <span class="_"> </span>to<span class="_"> </span>provide
            <span class="_"></span>that<span class="_"> </span>the
            <span class="_"> </span>insurer<span class="_"></span>or
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws162">
            insurers<span class="_"> </span>waive<span class="_"> </span>any
            <span class="_"> </span>right<span class="_"> </span>of
            <span class="_"></span>subrogation<span class="_"> </span>against
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>.<span class="_ _15"></span>
            Notwithstanding<span class="_"> </span>any<span class="_"> </span>
            deductible<span class="_"> </span>provision,<span class="_"> </span>
            the<span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y4 ff2 fs0 fc0 sc0 ls0 ws171">
            shall<span class="_ _12"> </span>remain<span class="_ _12"> </span>
            solely<span class="_ _12"> </span>liable<span class="_ _12"> </span>
            for<span class="_ _12"> </span>the<span class="_ _12"> </span>full
            <span class="_ _12"> </span>replacement<span class="_ _12"></span>
            cost<span class="_ _12"> </span>of<span class="_ _12"> </span>any
            <span class="_ _12"> </span>item<span class="_ _12"> </span>covered
            <span class="_ _12"> </span>by<span class="_ _12"> </span>such
            <span class="_"> </span>insurance,<span class="_"> </span>including
            <span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws8d">
            applicable<span class="_"> </span>deductible<span class="_"> </span>
            or<span class="_"> </span>co-insurance<span class="_"> </span>
            penalty<span class="_ _20"></span>.<span class="_ _26"> </span>Prior
            <span class="_"> </span>to<span class="_"> </span>commencement
            <span class="_"> </span>of<span class="_ _f"> </span>work,
            <span class="_ _f"> </span>CM<span class="_ _f"> </span>shall
            <span class="_ _f"> </span>provide<span class="_ _f"> </span>to
            <span class="_ _f"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            a copy of the builder<span class="_ _3"></span>’s risk policy
            obtained in compliance with S<span class="_ _0"></span>ection 8.2.1.
          </div>
          <div class="t m0 x3 h3 y13 ff2 fs0 fc0 sc0 ls0 ws172">
            8.2.2<span class="_ _16"> </span>All<span class="_ _12"> </span>
            insurance<span class="_ _12"> </span>companies
            <span class="_ _12"></span>providing<span class="_"> </span>the
            <span class="_"> </span>above<span class="_"> </span>insurance
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>properly<span class="_"> </span>licensed
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>department
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1">
            of insurance of the State of North Carolina and rated “a” or better
            by a.m. best company<span class="_ _4"></span>.
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws173">
            8.2.3<span class="_ _16"> </span>Any<span class="_ _6"> </span>loss
            <span class="_ _14"> </span>insured<span class="_"> </span>under
            <span class="_"> </span>subparagraph<span class="_"> </span>8.2.1
            <span class="_"> </span>is<span class="_"> </span>to
            <span class="_"></span>be<span class="_"> </span>adjusted
            <span class="_"> </span>with<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"></span>made<span class="_"> </span>payable
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y8 ff2 fs0 fc0 sc0 ls0 ws174">
            the<span class="_"> </span>Owner<span class="_"> </span>as
            <span class="_"></span>trustee<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>insured,
            <span class="_"> </span>as<span class="_"> </span>their
            <span class="_"> </span>interests<span class="_ _6"> </span>may
            <span class="_ _14"> </span>appear<span class="_ _1"></span>,
            <span class="_ _6"> </span>subject<span class="_ _14"> </span>to
            <span class="_ _6"> </span>the<span class="_ _14"> </span>
            requirements<span class="_ _6"> </span>of<span class="_ _14"></span>
            any
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 wsae">
            applicable<span class="_"> </span>mortgagee<span class="_"> </span>
            clause<span class="_"> </span>and<span class="_"> </span>of
            <span class="_"></span>subparagraph<span class="_ _1c"> </span>
            8.2.5.<span class="_ _36"></span>The<span class="_ _15"> </span>CM
            <span class="_ _15"> </span>shall<span class="_ _15"> </span>pay
            <span class="_ _15"> </span>each<span class="_ _15"> </span>
            contractor<span class="_ _15"></span>and/or
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws175">
            subcontractor<span class="_ _6"> </span>a
            <span class="_ _14"> </span>just<span class="_ _6"> </span>share
            <span class="_ _14"> </span>of<span class="_ _6"> </span>any
            <span class="_ _14"> </span>insurance<span class="_ _14"> </span>
            moneys<span class="_ _6"></span>received<span class="_ _14"> </span>
            by<span class="_ _6"> </span>the<span class="_ _14"> </span>CM,
            <span class="_ _6"> </span>and<span class="_ _14"> </span>by
            <span class="_ _14"> </span>appropriate<span class="_"> </span>
            agreement,
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1f">
            written<span class="_ _12"> </span>where<span class="_ _12"> </span>
            legally<span class="_ _12"> </span>required
            <span class="_ _12"></span>for<span class="_"> </span>validity
            <span class="_ _20"></span>,<span class="_"> </span>shall
            <span class="_"> </span>require<span class="_"></span>each
            <span class="_"> </span>contractor<span class="_"> </span>or
            <span class="_"> </span>subcontractor<span class="_"> </span>to
            <span class="_"> </span>make<span class="_"> </span>payments
            <span class="_"></span>in
          </div>
          <div class="t m0 x3 h3 ya ff2 fs0 fc0 sc0 ls0 ws1">
            similar manner<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws4">
            8.2.4<span class="_ _16"> </span>The<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"> </span>CM
            <span class="_"></span>waive<span class="_"> </span>all
            <span class="_"> </span>rights<span class="_"></span>against
            <span class="_"> </span>each<span class="_"> </span>other
            <span class="_ _f"> </span>for<span class="_ _f"> </span>damages
            <span class="_ _f"> </span>caused<span class="_ _f"> </span>by
            <span class="_ _f"> </span>fire<span class="_ _f"> </span>or
            <span class="_ _10"></span>other<span class="_ _f"> </span>perils
            <span class="_ _f"> </span>to
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws66">
            the<span class="_"> </span>extent<span class="_"> </span>covered
            <span class="_"> </span>by<span class="_"> </span>insurance
            <span class="_"> </span>obtained<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>this
            <span class="_ _12"></span>Paragraph<span class="_ _12"> </span>8.2,
            <span class="_ _12"></span>or<span class="_ _12"> </span>any
            <span class="_ _12"> </span>other<span class="_ _12"> </span>
            property<span class="_ _12"></span>insurance
          </div>
          <div class="t m0 x3 h3 yc ff2 fs0 fc0 sc0 ls0 ws4">
            applicable<span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>work,<span class="_"> </span>except
            <span class="_"> </span>such<span class="_"> </span>rights
            <span class="_"> </span>as<span class="_"></span>they
            <span class="_"> </span>may<span class="_"> </span>have
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>proceeds<span class="_"></span>of
            <span class="_"> </span>such<span class="_"> </span>insurance
            <span class="_"> </span>held<span class="_"> </span>by
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws176">
            Owner<span class="_ _15"> </span>as<span class="_"> </span>trustee.
            <span class="_ _17"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>require,
            <span class="_"> </span>by<span class="_"> </span>appropriate
            <span class="_"> </span>agreement,<span class="_"></span>written
            <span class="_"> </span>where<span class="_"> </span>legally
            <span class="_"> </span>required<span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 wsdd">
            validity<span class="_ _20"></span>,<span class="_ _12"> </span>
            similar<span class="_ _12"> </span>waivers
            <span class="_ _12"></span>in<span class="_ _12"> </span>favor
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>by<span class="_"></span>contractors
            <span class="_"> </span>and<span class="_"> </span>subcontractors.
            <span class="_ _1c"> </span>With<span class="_"></span>respect
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 wsd8">
            the<span class="_"> </span>waiver<span class="_"> </span>of
            <span class="_"></span>rights<span class="_"> </span>of
            <span class="_"> </span>recovery<span class="_ _20"></span>,
            <span class="_"> </span>the<span class="_"> </span>term
            <span class="_"> </span>Owner<span class="_"></span>shall
            <span class="_"> </span>be<span class="_"> </span>deemed
            <span class="_"></span>to<span class="_"> </span>include,
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_ _6"> </span>extent<span class="_ _14"> </span>covered
            <span class="_ _6"> </span>by
          </div>
          <div class="t m0 x3 h3 y18 ff2 fs0 fc0 sc0 ls0 ws177">
            property<span class="_ _12"> </span>insurance
            <span class="_ _12"></span>applicable<span class="_ _12"> </span>
            thereto,<span class="_ _12"></span>its<span class="_ _12"> </span>
            consultants,<span class="_ _12"></span>employees,
            <span class="_ _12"> </span>and<span class="_"> </span>agents
            <span class="_"> </span>and<span class="_"> </span>representatives.
            <span class="_ _1c"> </span>The<span class="_"></span>CM
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws139">
            waives<span class="_"> </span>as<span class="_"> </span>against
            <span class="_"></span>any<span class="_"> </span>separate
            <span class="_"> </span>contractor<span class="_"> </span>all
            <span class="_"> </span>rights<span class="_"> </span>for
            <span class="_"> </span>damages<span class="_"> </span>caused
            <span class="_"> </span>by<span class="_"> </span>fire
            <span class="_"> </span>or<span class="_"></span>other
            <span class="_"> </span>perils<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>same
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws178">
            manner<span class="_ _6"> </span>as<span class="_ _14"> </span>is
            <span class="_ _6"> </span>provided<span class="_ _14"> </span>above
            <span class="_ _6"> </span>as<span class="_ _14"> </span>against
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Owner
            <span class="_ _1"></span>.<span class="_ _13"> </span>The
            <span class="_"> </span>Owner<span class="_"> </span>shall
            <span class="_"></span>require,<span class="_"> </span>by
            <span class="_"> </span>appropriate<span class="_"> </span>
            agreement,
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws3a">
            written<span class="_"> </span>where<span class="_"> </span>legally
            <span class="_"> </span>required<span class="_"> </span>for
            <span class="_"> </span>validity<span class="_ _20"></span>,
            <span class="_"> </span>similar<span class="_"> </span>waivers
            <span class="_"> </span>in<span class="_"> </span>favor
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>by
            <span class="_"> </span>any<span class="_"> </span>separate
            <span class="_"></span>contractor<span class="_ _f"> </span>and
          </div>
          <div class="t m0 x3 h3 y1b ff2 fs0 fc0 sc0 ls0 ws1">
            its subcontractors.
          </div>
          <div class="t m0 x3 h3 y1d ff2 fs0 fc0 sc0 ls0 wsee">
            8.2.5<span class="_ _16"> </span>If<span class="_ _12"> </span>
            required<span class="_ _12"> </span>in<span class="_ _12"> </span>
            writing<span class="_ _12"> </span>by<span class="_ _12"> </span>any
            <span class="_ _12"> </span>party<span class="_ _12"> </span>in
            <span class="_ _12"> </span>interest,<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>as
            <span class="_ _12"> </span>trustee<span class="_ _12"> </span>
            shall,<span class="_ _12"> </span>upon<span class="_ _12"> </span>
            the<span class="_ _12"> </span>occurrence<span class="_"> </span>of
            <span class="_"> </span>an
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 wsb5">
            insured<span class="_ _6"> </span>loss,<span class="_"> </span>give
            <span class="_"> </span>bond<span class="_"> </span>for
            <span class="_"></span>the<span class="_"> </span>proper
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>its<span class="_"> </span>duties.
            <span class="_ _18"> </span>It<span class="_"> </span>shall
            <span class="_"> </span>deposit<span class="_"></span>in
            <span class="_"> </span>a<span class="_"> </span>separate
            <span class="_"></span>account<span class="_"> </span>any
          </div>
          <div class="t m0 x3 h3 y4b ff2 fs0 fc0 sc0 ls0 wsc">
            money<span class="_ _12"> </span>so<span class="_ _12"> </span>
            received,<span class="_ _12"> </span>and<span class="_ _12"> </span>
            it<span class="_"> </span>shall<span class="_"> </span>distribute
            <span class="_"> </span>it<span class="_"> </span>in
            <span class="_"></span>accordance<span class="_"> </span>with
            <span class="_"> </span>such<span class="_"> </span>agreement
            <span class="_"> </span>as<span class="_"> </span>the
            <span class="_"> </span>parties<span class="_"></span>in
            <span class="_"> </span>interest<span class="_"> </span>may
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws179">
            reach,<span class="_ _12"> </span>or<span class="_ _12"> </span>in
            <span class="_ _12"> </span>accordance<span class="_ _12"> </span>
            with<span class="_ _12"> </span>a<span class="_ _12"> </span>court
            <span class="_ _12"> </span>order<span class="_ _12"> </span>or
            <span class="_ _12"> </span>award.<span class="_ _18"> </span>If
            <span class="_ _12"> </span>after<span class="_ _12"> </span>such
            <span class="_ _12"> </span>loss<span class="_"> </span>no
            <span class="_"></span>other<span class="_"> </span>special
            <span class="_"> </span>agreement<span class="_"> </span>is
            <span class="_"> </span>made,
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws1">
            replacement of damaged work shall be covered by an appropriate
            change order<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y4e ff2 fs0 fc0 sc0 ls0 ws98">
            8.2.6<span class="_ _16"> </span>The<span class="_ _12"> </span>
            Owner<span class="_ _12"> </span>as<span class="_ _12"> </span>
            trustee<span class="_ _12"> </span>shall<span class="_ _12"> </span>
            have<span class="_ _12"> </span>power<span class="_ _12"> </span>to
            <span class="_ _12"> </span>adjust<span class="_ _12"> </span>and
            <span class="_ _12"> </span>settle<span class="_ _12"> </span>any
            <span class="_"> </span>loss<span class="_"> </span>with
            <span class="_"></span>the<span class="_"> </span>insurers
            <span class="_"> </span>unless<span class="_"> </span>one
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 wsa9">
            the<span class="_ _6"> </span>parties<span class="_ _14"> </span>in
            <span class="_ _6"> </span>interest<span class="_ _14"> </span>shall
            <span class="_ _14"> </span>object<span class="_"> </span>in
            <span class="_"> </span>writing<span class="_"> </span>within
            <span class="_"> </span>five<span class="_"> </span>(5)
            <span class="_"></span>days<span class="_"> </span>after
            <span class="_"> </span>the<span class="_"></span>occurrence
            <span class="_"> </span>of<span class="_"> </span>loss
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>Owner’s
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws17a">
            exercise<span class="_ _6"> </span>of<span class="_ _14"> </span>
            this<span class="_ _6"> </span>power<span class="_ _1"></span>,
            <span class="_ _14"> </span>and<span class="_ _14"> </span>if
            <span class="_ _6"></span>such<span class="_"> </span>objection
            <span class="_"> </span>is<span class="_"> </span>made,
            <span class="_"> </span>the<span class="_"></span>matter
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"></span>decided<span class="_"> </span>by
            <span class="_"> </span>a<span class="_"></span>court
            <span class="_"> </span>of<span class="_"> </span>competent
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws17b">
            jurisdiction<span class="_ _6"> </span>or
            <span class="_ _14"> </span>as<span class="_ _6"> </span>the
            <span class="_ _14"> </span>parties<span class="_ _6"> </span>in
            <span class="_ _14"> </span>interest<span class="_ _14"> </span>
            otherwise<span class="_ _6"></span>agree.
            <span class="_ _13"> </span>The<span class="_ _6"> </span>Owner
            <span class="_ _14"> </span>as<span class="_ _6"> </span>trustee
            <span class="_ _14"> </span>shall,<span class="_ _6"> </span>in
            <span class="_ _14"> </span>that<span class="_"> </span>case,
            <span class="_"> </span>make
          </div>
          <div class="t m0 x3 h3 y52 ff2 fs0 fc0 sc0 ls0 wsee">
            settlement<span class="_ _12"> </span>with
            <span class="_ _12"></span>the<span class="_ _12"> </span>insurers
            <span class="_ _12"> </span>in<span class="_ _12"> </span>accordance
            <span class="_ _12"> </span>with<span class="_ _12"> </span>the
            <span class="_ _12"> </span>orders<span class="_ _12"> </span>of
            <span class="_"> </span>the<span class="_"> </span>court
            <span class="_"> </span>or<span class="_"></span>as
            <span class="_"> </span>otherwise<span class="_"> </span>agreed
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>parties
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws1">in interest.</div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws1d">
            8.2.7<span class="_ _16"> </span>If<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>finds
            <span class="_"> </span>it<span class="_"></span>necessary
            <span class="_"> </span>to<span class="_"> </span>occupy
            <span class="_"> </span>or<span class="_"> </span>use
            <span class="_"></span>a<span class="_ _f"> </span>portion
            <span class="_ _f"> </span>or<span class="_ _f"> </span>portions
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>work<span class="_ _10"> </span>prior
            <span class="_ _f"> </span>to<span class="_ _f"> </span>substantial
          </div>
          <div class="t m0 x3 h3 y56 ff2 fs0 fc0 sc0 ls0 ws7">
            completion<span class="_ _6"> </span>thereof,
            <span class="_ _14"></span>such<span class="_ _6"> </span>occupancy
            <span class="_ _14"> </span>or<span class="_ _6"> </span>use
            <span class="_ _14"> </span>shall<span class="_ _14"> </span>not
            <span class="_ _6"> </span>commence<span class="_ _14"> </span>prior
            <span class="_ _6"> </span>to<span class="_ _14"> </span>a
            <span class="_ _6"> </span>time<span class="_"></span>mutually
            <span class="_"> </span>agreed<span class="_"> </span>to
            <span class="_"> </span>by<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 ws66">
            Owner<span class="_"> </span>and<span class="_"> </span>CM
            <span class="_"></span>and<span class="_"> </span>to
            <span class="_"> </span>which<span class="_"></span>the
            <span class="_"> </span>insurance<span class="_"> </span>company
            <span class="_ _12"> </span>or<span class="_ _12"> </span>companies
            <span class="_ _12"> </span>providing<span class="_ _12"></span>the
            <span class="_ _12"> </span>property<span class="_ _12"> </span>
            insurance<span class="_ _12"> </span>have
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws17c">
            consented<span class="_ _19"> </span>by<span class="_ _19"> </span>
            endorsement<span class="_ _19"> </span>to<span class="_ _19"></span>
            the<span class="_ _19"> </span>policy<span class="_ _19"> </span>or
            <span class="_"> </span>policies.<span class="_ _13"> </span>This
            <span class="_"> </span>insurance<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>canceled<span class="_"> </span>or
            <span class="_"> </span>lapsed<span class="_"> </span>on
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws5d">
            account<span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>partial<span class="_"> </span>occupancy
            <span class="_"> </span>or<span class="_"> </span>use.
            <span class="_ _18"> </span>Consent<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>and<span class="_"> </span>of
            <span class="_ _f"></span>the<span class="_ _f"> </span>insurance
            <span class="_ _f"> </span>company<span class="_ _f"> </span>or
            <span class="_ _f"> </span>companies
          </div>
          <div class="t m0 x3 h3 y5a ff2 fs0 fc0 sc0 ls0 ws1">
            to such occupancy or use shall not be unreasonably withheld.
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 wsde">
            8.3<span class="_"> </span>Indemnity
          </div>
          <div class="t m0 x3 h3 y66 ff2 fs0 fc0 sc0 ls0 wsdd">
            8.3.1<span class="_ _16"> </span>T<span class="_ _4"></span>o
            <span class="_ _12"></span>the<span class="_ _12"> </span>fullest
            <span class="_ _12"> </span>extent<span class="_ _12"> </span>
            permitted<span class="_ _12"></span>by<span class="_ _12"> </span>
            law<span class="_ _1"></span>,<span class="_ _12"></span>the
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>shall,
            <span class="_ _12"> </span>at<span class="_ _12"> </span>its
            <span class="_"> </span>sole<span class="_"> </span>cost
            <span class="_"></span>and<span class="_"> </span>expense,
            <span class="_"> </span>indemnify<span class="_ _20"></span>,
            <span class="_"> </span>defend,
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws5">
            and<span class="_ _12"> </span>hold<span class="_ _12"> </span>
            harmless<span class="_ _12"> </span>the<span class="_ _12"> </span>
            Owner<span class="_"> </span>and<span class="_"> </span>Design
            <span class="_"></span>Consultant<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>agents,
            <span class="_"> </span>representatives,<span class="_"> </span>and
            <span class="_"> </span>employees<span class="_"> </span>from
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">41</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2a" class="pf w0 h0" data-page-no="2a">
        <div class="pc pc2a w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws17d">
            and<span class="_ _15"> </span>against<span class="_ _15"> </span>
            all<span class="_ _15"> </span>claims,<span class="_ _15"> </span>
            actions,<span class="_ _15"> </span>judgments,
            <span class="_ _15"></span>costs,<span class="_"> </span>
            liabilities,<span class="_"> </span>penalties,
            <span class="_"> </span>damages,<span class="_"> </span>losses
            <span class="_"> </span>and<span class="_"> </span>expenses,
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws21">
            including<span class="_ _12"> </span>but<span class="_"> </span>not
            <span class="_"> </span>limited<span class="_"> </span>to
            <span class="_"></span>attorneys’<span class="_"> </span>fees,
            <span class="_"> </span>arising<span class="_"> </span>out
            <span class="_"> </span>of<span class="_"></span>and/or
            <span class="_"> </span>resulting<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"> </span>performance
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 yd8 ff2 fs0 fc0 sc0 ls0 ws17e">
            the<span class="_ _12"> </span>CM,<span class="_ _12"> </span>any
            <span class="_ _12"> </span>contractor<span class="_ _12"></span>or
            <span class="_ _12"> </span>subcontractor<span class="_ _1"></span>,
            <span class="_"> </span>anyone<span class="_"> </span>directly
            <span class="_"> </span>or<span class="_"> </span>indirectly
            <span class="_"> </span>employed<span class="_"> </span>by
            <span class="_"> </span>any<span class="_"> </span>of
            <span class="_"></span>them<span class="_"> </span>or
            <span class="_"> </span>anyone<span class="_"></span>for
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws113">
            whose<span class="_ _19"> </span>acts<span class="_ _19"> </span>any
            <span class="_ _19"> </span>of<span class="_ _19"> </span>them
            <span class="_ _19"> </span>may<span class="_ _19"> </span>be
            <span class="_ _19"> </span>legally<span class="_ _19"> </span>
            liable.<span class="_ _17"> </span>The<span class="_ _19"> </span>
            above<span class="_"> </span>obligation<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"></span>construed<span class="_"> </span>to
            <span class="_"> </span>negate,
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws3d">
            abridge,<span class="_ _12"> </span>or<span class="_ _12"> </span>
            otherwise<span class="_ _12"> </span>reduce
            <span class="_ _12"></span>any<span class="_ _12"> </span>other
            <span class="_ _12"> </span>right<span class="_ _12"> </span>or
            <span class="_"> </span>obligation<span class="_"> </span>of
            <span class="_"> </span>indemnity<span class="_"> </span>which
            <span class="_"> </span>would<span class="_"> </span>otherwise
            <span class="_"> </span>exist<span class="_"> </span>as
            <span class="_"> </span>to<span class="_"></span>any
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws10">
            party<span class="_"> </span>or<span class="_"> </span>person
            <span class="_"></span>described<span class="_"> </span>in
            <span class="_"> </span>this<span class="_"> </span>Paragraph
            <span class="_"> </span>8.3.1.<span class="_"> </span>The
            <span class="_"> </span>parties<span class="_ _12"> </span>agree
            <span class="_ _12"> </span>that<span class="_ _12"> </span>this
            <span class="_ _12"> </span>indemnification
            <span class="_ _12"> </span>clause<span class="_ _12"></span>is
            <span class="_ _12"> </span>an
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws1">
            “evidence<span class="_ _21"> </span>of<span class="_ _21"> </span>
            indebtedness”<span class="_ _21"> </span>for
            <span class="_ _21"></span>purpose<span class="_ _21"> </span>of
            <span class="_ _21"> </span>N.C.<span class="_ _1f"> </span>Gen.
            <span class="_ _1f"> </span>Stat.<span class="_ _1f"> </span>§
            <span class="_ _1f"> </span>6-21.2. <span class="_ _1f"> </span>The
            <span class="_ _1f"> </span>parties<span class="_ _1f"> </span>also
            <span class="_ _1f"> </span>specifically
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws8d">
            acknowledge<span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>is
            <span class="_"></span>a<span class="_"> </span>public
            <span class="_"> </span>body<span class="_"></span>and
            <span class="_"> </span>it<span class="_"> </span>is
            <span class="_"></span>the<span class="_"> </span>intent
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>parties<span class="_"> </span>that
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_ _f"> </span>not<span class="_ _f"></span>incur
            <span class="_ _f"> </span>any
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            expenses when the contractor is solely responsible for the claims.
          </div>
          <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws17f">
            8.3.2<span class="_ _16"> </span>In<span class="_ _1f"> </span>any
            <span class="_ _1f"> </span>and<span class="_ _1f"> </span>all
            <span class="_ _1f"> </span>claims<span class="_ _1f"> </span>
            against<span class="_ _1f"> </span>the<span class="_ _1f"> </span>
            Owner<span class="_ _1f"> </span>or<span class="_ _1f"> </span>the
            <span class="_ _1f"> </span>Design<span class="_ _1f"> </span>
            Consultant<span class="_ _1f"> </span>or<span class="_ _1f"> </span>
            any<span class="_ _1f"> </span>of<span class="_ _1f"> </span>their
            <span class="_"> </span>agents,
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 wsea">
            representatives,<span class="_ _12"> </span>or
            <span class="_ _12"></span>employees<span class="_ _12"> </span>by
            <span class="_ _12"> </span>any<span class="_ _12"> </span>employee
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>CM,<span class="_ _12"> </span>any
            <span class="_ _12"> </span>contractor<span class="_"> </span>or
            <span class="_"> </span>subcontractor<span class="_ _20"></span>,
            <span class="_"> </span>anyone<span class="_"> </span>directly
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws180">
            or<span class="_"> </span>indirectly<span class="_"> </span>employed
            <span class="_"> </span>by<span class="_"> </span>any
            <span class="_"></span>of<span class="_"> </span>them
            <span class="_"> </span>or<span class="_"></span>anyone
            <span class="_"> </span>for<span class="_"> </span>whose
            <span class="_"></span>acts<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"></span>them
            <span class="_"> </span>may<span class="_"> </span>be
            <span class="_ _1c"></span>liable,<span class="_ _15"> </span>the
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws181">
            indemnification<span class="_ _19"> </span>obligation
            <span class="_ _19"></span>under<span class="_ _19"> </span>
            Paragraph<span class="_"> </span>8.3.1<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"></span>be
            <span class="_"> </span>limited<span class="_"> </span>in
            <span class="_"></span>any<span class="_"> </span>way
            <span class="_"> </span>by<span class="_"></span>any
            <span class="_"> </span>limitation<span class="_"> </span>on
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 ydb ff2 fs0 fc0 sc0 ls0 ws182">
            amount<span class="_ _15"> </span>or<span class="_ _15"> </span>type
            <span class="_ _15"> </span>of<span class="_ _15"> </span>damages,
            <span class="_"> </span>compensation<span class="_"> </span>or
            <span class="_"> </span>benefits<span class="_"> </span>payable
            <span class="_"> </span>by<span class="_"> </span>or
            <span class="_"></span>for<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>or
            <span class="_"> </span>any<span class="_"> </span>contractor
            <span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws1">
            subcontractor from any of the insurance coverage required in Section
            8.1 herein.
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws183">
            8.3.3<span class="_ _1e"> </span>The<span class="_ _1f"> </span>
            Owner<span class="_ _1f"> </span>hereby<span class="_ _1f"> </span>
            indemnifies<span class="_ _1f"> </span>and
            <span class="_ _1f"></span>holds<span class="_ _1f"> </span>harmless
            <span class="_ _1f"></span>the<span class="_ _1f"> </span>CM
            <span class="_"> </span>and<span class="_"></span>its
            <span class="_"> </span>employees,<span class="_"> </span>agents,
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 ydc ff2 fs0 fc0 sc0 ls0 ws9a">
            representatives<span class="_ _19"> </span>from
            <span class="_ _19"></span>and<span class="_ _19"> </span>against
            <span class="_ _19"> </span>any<span class="_ _19"> </span>and
            <span class="_ _19"> </span>all<span class="_ _19"> </span>claims,
            <span class="_ _19"> </span>demands,<span class="_"> </span>suits
            <span class="_"> </span>and<span class="_"> </span>damages
            <span class="_"> </span>for<span class="_"></span>bodily
            <span class="_"> </span>injury<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws4">
            property<span class="_"> </span>damage<span class="_"> </span>caused
            <span class="_"> </span>solely<span class="_"> </span>by
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_ _f"> </span>that<span class="_ _f"> </span>arise
            <span class="_ _f"> </span>out<span class="_ _f"> </span>of
            <span class="_ _f"> </span>or<span class="_ _f"></span>result
            <span class="_ _10"> </span>solely<span class="_ _f"> </span>from
            <span class="_ _f"> </span>breach<span class="_ _f"> </span>of
            <span class="_ _f"> </span>this<span class="_ _10"> </span>Agreement
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            or from negligent acts, errors or omissions of the Owner
            <span class="_ _20"></span>, and its employees.
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws7">
            8.3.4<span class="_ _29"> </span>The<span class="_ _6"> </span>CM
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>cause
            <span class="_ _14"> </span>each<span class="_ _6"> </span>
            contractor<span class="_ _14"> </span>and<span class="_ _14"></span>
            subcontractor<span class="_"> </span>to<span class="_"> </span>
            indemnify<span class="_"> </span>and<span class="_"> </span>hold
            <span class="_"> </span>harmless<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _20"></span>,
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 wse">
            CM,<span class="_"> </span>and<span class="_"> </span>Design
            <span class="_"></span>Consultant<span class="_"> </span>from
            <span class="_ _12"> </span>and<span class="_ _12"> </span>against
            <span class="_ _12"> </span>any<span class="_ _12"> </span>and
            <span class="_ _12"> </span>all<span class="_ _12"> </span>claims,
            <span class="_ _12"> </span>demands,<span class="_ _12"> </span>
            suits,<span class="_ _18"></span>damages<span class="_ _12"> </span>
            resulting<span class="_ _12"></span>from
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 wsb5">
            bodily<span class="_ _6"> </span>injury<span class="_ _1"></span>,
            <span class="_ _6"> </span>personal<span class="_ _14"> </span>
            injury<span class="_ _20"></span>,<span class="_ _14"> </span>damage
            <span class="_"> </span>to<span class="_"> </span>tangible
            <span class="_"> </span>property<span class="_"> </span>(including
            <span class="_"> </span>loss<span class="_"> </span>of
            <span class="_"> </span>use),<span class="_"> </span>costs,
            <span class="_"></span>and<span class="_"> </span>expenses
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws5">
            fees<span class="_ _12"> </span>that<span class="_ _12"> </span>are
            <span class="_ _12"> </span>asserted<span class="_ _12"> </span>
            against<span class="_ _12"> </span>the<span class="_ _12"> </span>
            Owner<span class="_ _1"></span>,<span class="_"> </span>CM,
            <span class="_"></span>and<span class="_"> </span>the
            <span class="_"> </span>Design<span class="_"></span>Consultant
            <span class="_"> </span>and<span class="_"> </span>that
            <span class="_"> </span>arise<span class="_"> </span>out
            <span class="_"></span>of<span class="_"> </span>or
            <span class="_"> </span>result<span class="_"></span>from
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws29">
            negligent<span class="_"> </span>acts,<span class="_"> </span>errors
            <span class="_"> </span>or<span class="_"> </span>omissions
            <span class="_"> </span>or<span class="_"> </span>the
            <span class="_"></span>breach<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>construction
            <span class="_"> </span>contract<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>contractor
            <span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            subcontractor<span class="_ _1"></span>, its employees, agents, and
            representatives in performing the work.
          </div>
          <div class="t m0 x3 h3 ydf ff2 fs0 fc0 sc0 ls0 ws1">
            8.4<span class="_ _2a"> </span>Performance and Payment Bonds
          </div>
          <div class="t m0 x3 h3 ye0 ff2 fs0 fc0 sc0 ls0 ws8c">
            8.4.1<span class="_ _29"> </span>Within<span class="_"> </span>10
            <span class="_"> </span>days<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>establishment
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>final<span class="_"></span>GMP
            <span class="_"> </span>via<span class="_"> </span>change
            <span class="_"></span>order<span class="_ _20"></span>,
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>shall<span class="_ _14"> </span>provide
            <span class="_ _6"> </span>a
          </div>
          <div class="t m0 x3 h3 ye1 ff2 fs0 fc0 sc0 ls0 ws4">
            performance<span class="_"> </span>bond<span class="_"> </span>and
            <span class="_"> </span>payment<span class="_"> </span>bond
            <span class="_"></span>each<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>amount
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>GMP<span class="_ _2b"></span>,
            <span class="_ _10"></span>minus<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _3"></span>’s
            <span class="_ _f"> </span>contingency<span class="_ _f"> </span>if
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 ye2 ff2 fs0 fc0 sc0 ls0 ws3a">
            Owner<span class="_ _3"></span>’s<span class="_"> </span>contingency
            <span class="_"> </span>is<span class="_"> </span>included
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>GMP<span class="_ _2b"></span>.
            <span class="_ _18"> </span>The<span class="_"></span>amount
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>performance<span class="_"> </span>and
            <span class="_"> </span>payment<span class="_"> </span>bonds
            <span class="_"> </span>may<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 ye3 ff2 fs0 fc0 sc0 ls0 ws1">
            adjusted if the Guaranteed Maximum Price is reduced after the bids
            are received.
          </div>
          <div class="t m0 x3 h3 ye4 ff2 fs0 fc0 sc0 ls0 ws184">
            8.4.2<span class="_ _29"> </span>All<span class="_"> </span>
            insurance<span class="_"> </span>companies<span class="_"> </span>
            providing<span class="_"> </span>the<span class="_"> </span>above
            <span class="_"> </span>bonds<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>properly
            <span class="_"> </span>licensed<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Department
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 ye5 ff2 fs0 fc0 sc0 ls0 ws160">
            Insurance<span class="_ _12"> </span>of<span class="_ _12"> </span>
            the<span class="_"> </span>State<span class="_"> </span>of
            <span class="_"></span>North<span class="_"> </span>Carolina
            <span class="_"> </span>and<span class="_"> </span>rated
            <span class="_"> </span>“A”<span class="_"></span>or
            <span class="_"> </span>better<span class="_"> </span>by
            <span class="_"></span>a.m.<span class="_"> </span>best
            <span class="_"> </span>company<span class="_ _20"></span>.
            <span class="_ _1c"> </span>The<span class="_"> </span>bonds
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 ye6 ff2 fs0 fc0 sc0 ls0 ws1">
            the form approved by the Owner and attached hereto as
            <span class="_ _20"></span>Appendix F<span class="_ _4"></span>.
          </div>
          <div class="t m0 x1a h2 ye7 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 9</div>
          <div class="t m0 x1b h3 ye8 ff2 fs0 fc0 sc0 ls0 ws0">SUSPENSION</div>
          <div class="t m0 x1c h2 ye9 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 yea ff2 fs0 fc0 sc0 ls0 wsde">
            9.2<span class="_"> </span>Suspension
          </div>
          <div class="t m0 x3 h3 yeb ff2 fs0 fc0 sc0 ls0 ws185">
            9.2.1<span class="_ _16"> </span>The<span class="_ _6"> </span>Owner
            <span class="_ _14"> </span>may<span class="_ _6"> </span>order
            <span class="_ _1"></span>,<span class="_ _14"> </span>in
            <span class="_ _14"></span>writing,<span class="_ _6"> </span>the
            <span class="_ _14"> </span>CM<span class="_ _6"> </span>to
            <span class="_ _14"> </span>suspend<span class="_ _6"> </span>all
            <span class="_ _14"> </span>or<span class="_ _14"> </span>any
            <span class="_ _6"> </span>part<span class="_ _14"> </span>of
            <span class="_ _6"> </span>the<span class="_ _14"> </span>CM’s
            <span class="_ _6"> </span>services<span class="_ _6"> </span>for
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 yec ff2 fs0 fc0 sc0 ls0 ws43">
            Project<span class="_ _12"> </span>for<span class="_ _12"> </span>
            the<span class="_"> </span>convenience<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>or<span class="_"> </span>for
            <span class="_"> </span>work<span class="_"></span>stoppage
            <span class="_"> </span>beyond<span class="_"> </span>the
            <span class="_"> </span>control<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>or<span class="_"></span>the
            <span class="_"> </span>CM.<span class="_ _1c"> </span>If
          </div>
          <div class="t m0 x3 h3 yed ff2 fs0 fc0 sc0 ls0 ws124">
            the<span class="_ _19"> </span>performance
            <span class="_ _19"></span>of<span class="_"> </span>all
            <span class="_"> </span>or<span class="_"></span>any
            <span class="_"> </span>part<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>services
            <span class="_"> </span>for<span class="_"></span>the
            <span class="_"> </span>Project<span class="_"> </span>is
            <span class="_"></span>suspended,<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"> </span>CM<span class="_"></span>may
          </div>
          <div class="t m0 x3 h3 yee ff2 fs0 fc0 sc0 ls0 ws67">
            negotiate<span class="_ _6"> </span>an<span class="_ _14"> </span>
            adjustment<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"> </span>compensation
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>CM’<span class="_ _1"></span>s
            <span class="_"></span>performance<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>caused<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 yef ff2 fs0 fc0 sc0 ls0 ws1">
            such suspension and this <span class="_ _1"></span>Agreement may be
            modified in writing accordingly<span class="_ _4"></span>.
          </div>
          <div class="t m0 x3 h3 yf0 ff2 fs0 fc0 sc0 ls0 wsd9">
            9.2.2<span class="_ _16"> </span>In<span class="_"> </span>the
            <span class="_"></span>event<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"></span>services
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>Project<span class="_"> </span>are
            <span class="_"> </span>suspende<span class="_ _0"></span>d,
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>reimburse
            <span class="_ _10"></span>the<span class="_ _f"> </span>CM
            <span class="_ _f"> </span>for
          </div>
          <div class="t m0 x3 h3 yf1 ff2 fs0 fc0 sc0 ls0 ws15">
            all<span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>costs<span class="_"> </span>of
            <span class="_"></span>its<span class="_"> </span>construction
            <span class="_"> </span>site<span class="_"> </span>staff,
            <span class="_"> </span>assigned<span class="_"> </span>Project
            <span class="_"> </span>home<span class="_"> </span>of
            <span class="_ _1"></span>fice<span class="_"></span>staff
            <span class="_"> </span>and<span class="_"> </span>other
            <span class="_"></span>costs<span class="_"> </span>provided
            <span class="_"> </span>for<span class="_"> </span>by
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">42</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2b" class="pf w0 h0" data-page-no="2b">
        <div class="pc pc2b w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 wsba">
            this<span class="_ _19"> </span>Agreement
            <span class="_ _19"> </span>for<span class="_ _19"> </span>the
            <span class="_"> </span>first<span class="_"> </span>seven
            <span class="_"> </span>(7)<span class="_"></span>days
            <span class="_"> </span>of<span class="_"> </span>such
            <span class="_"></span>suspension.<span class="_ _13"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"> </span>reassign<span class="_"> </span>the
            <span class="_"> </span>staf<span class="_ _1"></span>f
            <span class="_"> </span>for<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws13">
            remainder<span class="_ _19"> </span>of<span class="_ _19"> </span>
            the<span class="_ _19"> </span>suspension<span class="_ _19"></span>
            period<span class="_ _19"> </span>unless<span class="_ _19"> </span>
            directed<span class="_ _19"> </span>otherwise<span class="_"></span>
            by<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>in<span class="_"> </span>writing
            <span class="_"> </span>and<span class="_"></span>if
            <span class="_"> </span>the<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 yd8 ff2 fs0 fc0 sc0 ls0 ws24">
            directs<span class="_ _19"> </span>the<span class="_ _19"> </span>CM
            <span class="_"> </span>to<span class="_"> </span>maintain
            <span class="_"></span>all<span class="_"> </span>or
            <span class="_"> </span>part<span class="_"></span>of
            <span class="_"> </span>its<span class="_"> </span>staff,
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>shall<span class="_"></span>reimburse
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>for<span class="_"> </span>all
            <span class="_"> </span>costs<span class="_"></span>of
            <span class="_"> </span>staf<span class="_ _1"></span>f
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws15">
            remaining<span class="_ _12"> </span>dedicated
            <span class="_ _12"></span>to<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Project.<span class="_ _1a"> </span>Upon
            <span class="_"> </span>cessation<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>suspension,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>restore
            <span class="_"></span>the<span class="_"> </span>construction
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
            site and home office staf<span class="_ _1"></span>f to its former
            size.
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws1f">
            9.2.3<span class="_ _16"> </span>Persons<span class="_ _12"> </span>
            assigned<span class="_ _12"> </span>to<span class="_ _12"> </span>
            another<span class="_ _12"> </span>Project
            <span class="_ _12"></span>during<span class="_ _12"> </span>such
            <span class="_ _12"> </span>suspension<span class="_"> </span>or
            <span class="_"> </span>period<span class="_"> </span>and
            <span class="_"> </span>not<span class="_"></span>available
            <span class="_"> </span>to<span class="_"> </span>return
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1e">
            this<span class="_"> </span>Project<span class="_"> </span>upon
            <span class="_"></span>cessation<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>suspension
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>replaced.<span class="_ _1d"> </span>The
            <span class="_"> </span>Owner<span class="_"> </span>shall
            <span class="_"></span>reimburse<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>for
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            costs incurred in relocating staff persons<span class="_ _0"></span>
            returning to the Project or new persons assigned to the Project.
          </div>
          <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws20">
            9.2.4<span class="_ _16"> </span>If<span class="_"> </span>the
            <span class="_"></span>Project<span class="_"> </span>is
            <span class="_"> </span>resumed<span class="_"> </span>after
            <span class="_"> </span>being<span class="_"> </span>suspended,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_ _6"></span>have
            <span class="_ _14"> </span>the<span class="_ _6"> </span>right
            <span class="_ _14"> </span>to<span class="_ _6"> </span>request
            <span class="_ _14"> </span>that<span class="_ _6"> </span>its
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws186">
            compensation,<span class="_"> </span>including
            <span class="_"></span>rates<span class="_"> </span>and
            <span class="_"> </span>fees,<span class="_"></span>be
            <span class="_"> </span>renegotiated.<span class="_ _1c"> </span>
            Subject<span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>provisions<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"> </span>Agreement
            <span class="_"> </span>relating
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws1">
            to termination, a delay or suspension of the Project does not void
            this <span class="_ _20"></span>Agreement.
          </div>
          <div class="t m0 x6 h2 y78 ff1 fs0 fc0 sc0 ls0 ws1">ARTICLE 10</div>
          <div class="t m0 x1d h3 y9 ff2 fs0 fc0 sc0 ls0 ws0">
            TERMINA<span class="_ _20"></span>TION
          </div>
          <div class="t m0 x1c h2 y82 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            10.1<span class="_ _27"> </span>T<span class="_ _4"></span>
            ermination by the CM
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws1d">
            10.1.1<span class="_ _1d"> </span>If<span class="_"> </span>the
            <span class="_"></span>work<span class="_"> </span>is
            <span class="_"> </span>stopped<span class="_"></span>for
            <span class="_"> </span>a<span class="_"> </span>period
            <span class="_"></span>of<span class="_"> </span>one
            <span class="_ _f"> </span>hundred<span class="_ _f"> </span>eighty
            <span class="_ _f"> </span>(180)<span class="_ _f"> </span>days
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _10"> </span>or
            <span class="_ _f"> </span>under<span class="_ _f"> </span>an
            <span class="_ _f"> </span>order
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws187">
            of<span class="_ _6"> </span>any<span class="_ _14"> </span>court
            <span class="_ _6"> </span>or<span class="_ _14"> </span>other
            <span class="_ _14"> </span>public<span class="_ _6"> </span>
            authority<span class="_ _14"> </span>having
            <span class="_ _6"></span>jurisdiction,<span class="_"> </span>or
            <span class="_"> </span>as<span class="_"> </span>a
            <span class="_"> </span>result<span class="_"></span>of
            <span class="_"> </span>an<span class="_"> </span>act
            <span class="_"></span>of<span class="_"> </span>government,
            <span class="_"> </span>such<span class="_"> </span>as
            <span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws5b">
            declaration<span class="_ _12"> </span>of<span class="_"> </span>a
            <span class="_"> </span>national<span class="_"> </span>emergency
            <span class="_"> </span>making<span class="_"> </span>materials
            <span class="_"> </span>unavailable,<span class="_"></span>and
            <span class="_"> </span>through<span class="_"> </span>no
            <span class="_"></span>act<span class="_"> </span>or
            <span class="_"> </span>fault<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_ _1c"></span>or<span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws188">
            contractor<span class="_ _6"> </span>or<span class="_ _14"> </span>
            their<span class="_ _6"> </span>agents<span class="_ _14"> </span>or
            <span class="_ _6"> </span>employees<span class="_ _14"> </span>or
            <span class="_"> </span>any<span class="_"> </span>other
            <span class="_"></span>persons<span class="_"> </span>performing
            <span class="_"> </span>any<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>under<span class="_"> </span>a
            <span class="_"></span>contract
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws26">
            with<span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>then<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_ _18"></span>may
            <span class="_ _20"></span>,<span class="_"> </span>upon
            <span class="_"></span>seven<span class="_"> </span>(7)
            <span class="_"> </span>additional<span class="_"> </span>days&apos;
            <span class="_"> </span>written<span class="_"> </span>notice
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _f"></span>and
            <span class="_ _f"> </span>the<span class="_ _10"> </span>design
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws14">
            consultant,<span class="_ _12"> </span>terminate
            <span class="_ _12"></span>the<span class="_ _12"> </span>contract
            <span class="_ _12"> </span>and<span class="_ _12"> </span>recover
            <span class="_ _12"> </span>from<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>payment
            <span class="_"> </span>for<span class="_"> </span>all
            <span class="_"></span>work<span class="_"> </span>executed.
            <span class="_ _1c"> </span>The<span class="_"> </span>CM
            <span class="_"> </span>shall
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws66">
            not<span class="_"> </span>be<span class="_"> </span>entitled
            <span class="_"></span>to<span class="_"> </span>collect
            <span class="_"> </span>and<span class="_"></span>hereby
            <span class="_ _12"> </span>expressly<span class="_ _12"></span>
            waives<span class="_ _12"> </span>any<span class="_ _12"> </span>
            profit<span class="_ _12"> </span>on<span class="_ _12"> </span>work
            <span class="_ _12"> </span>not<span class="_ _12"> </span>performed
            <span class="_ _12"> </span>and<span class="_ _12"> </span>any
            <span class="_ _12"> </span>damages
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            related to that portion of the contract which has been terminated.
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            10.2<span class="_ _27"> </span>T<span class="_ _4"></span>
            ermination for Convenience of the Owner
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws36">
            10.2.1<span class="_ _1d"> </span>The<span class="_ _6"> </span>
            Owner<span class="_ _14"> </span>may<span class="_ _20"></span>,
            <span class="_ _14"> </span>at<span class="_ _6"> </span>any
            <span class="_"></span>time<span class="_"> </span>upon
            <span class="_"> </span>ten<span class="_"></span>(10)
            <span class="_"> </span>days&apos;<span class="_"> </span>written
            <span class="_"> </span>notice<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_ _18"></span>and<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>CM&apos;s
            <span class="_"> </span>surety<span class="_ _20"></span>,
          </div>
          <div class="t m0 x3 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws66">
            which<span class="_"> </span>notice<span class="_"> </span>shall
            <span class="_ _12"> </span>specify<span class="_ _12"> </span>that
            <span class="_ _12"> </span>portion<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>to<span class="_ _12"> </span>be
            <span class="_ _12"> </span>terminated<span class="_ _12"> </span>
            and<span class="_ _12"> </span>the<span class="_ _12"> </span>date
            <span class="_ _12"> </span>said<span class="_ _12"> </span>
            termination<span class="_ _12"> </span>is<span class="_ _12"></span>
            to<span class="_ _12"> </span>take
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws8d">
            effect,<span class="_"> </span>terminate<span class="_"> </span>
            (without<span class="_"> </span>prejudice<span class="_"> </span>to
            <span class="_"> </span>any<span class="_"> </span>right
            <span class="_"></span>or<span class="_ _f"> </span>remedy
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner)<span class="_ _f"> </span>the
            <span class="_ _f"> </span>whole<span class="_ _f"> </span>or
            <span class="_ _f"> </span>any<span class="_ _f"> </span>portion
            <span class="_ _f"> </span>of<span class="_ _10"> </span>the
            <span class="_ _f"> </span>work
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws189">
            for<span class="_ _19"> </span>the<span class="_ _19"> </span>
            convenience<span class="_ _19"> </span>of<span class="_ _19"></span>
            the<span class="_ _19"> </span>Owner<span class="_ _1"></span>.
            <span class="_ _17"> </span>The<span class="_"> </span>CM&apos;s
            <span class="_"> </span>sole<span class="_"> </span>remedy
            <span class="_ _20"></span>,<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>event
            <span class="_"> </span>of<span class="_"></span>such
            <span class="_"> </span>termination,<span class="_"> </span>will
            <span class="_"> </span>be<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws35">
            allowable<span class="_ _6"> </span>termination
            <span class="_ _14"></span>costs<span class="_ _6"> </span>permitted
            <span class="_ _14"></span>by<span class="_ _6"> </span>Paragraph
            <span class="_ _14"> </span>10.4.<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>include
            <span class="_"> </span>termination<span class="_"> </span>clauses
            <span class="_"> </span>identical<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 yf3 ff2 fs0 fc0 sc0 ls0 ws1">
            Article 10 in each of his subcontracts.
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 ws1">
            10.3<span class="_ _27"> </span>Default T<span class="_ _2b"></span>
            ermination
          </div>
          <div class="t m0 x3 h3 yf4 ff2 fs0 fc0 sc0 ls0 ws13">
            10.3.1<span class="_ _17"> </span>T<span class="_ _4"></span>en
            <span class="_ _19"></span>(10)<span class="_ _19"> </span>
            days&apos;<span class="_ _19"></span>after<span class="_"> </span>
            written<span class="_"> </span>notice<span class="_"> </span>is
            <span class="_"> </span>mailed<span class="_"></span>to
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_ _13"></span>and<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>CM&apos;s
            <span class="_"> </span>surety<span class="_ _4"></span>,
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>may
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws8d">
            terminate<span class="_"> </span>(without<span class="_"> </span>
            prejudice<span class="_"> </span>to<span class="_"> </span>any
            <span class="_"></span>right<span class="_"> </span>or
            <span class="_"> </span>remedy<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>or<span class="_"> </span>any
            <span class="_"> </span>subsequent<span class="_"> </span>buyer
            <span class="_"> </span>of<span class="_"> </span>any
            <span class="_ _f"> </span>portion<span class="_ _f"> </span>of
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws66">
            the<span class="_"> </span>work)<span class="_"> </span>the
            <span class="_"></span>employment<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_ _1b"> </span>and<span class="_ _12"></span>his
            <span class="_ _12"> </span>right<span class="_ _12"> </span>to
            <span class="_ _12"> </span>proceed<span class="_ _12"> </span>
            either<span class="_ _12"> </span>as<span class="_ _12"> </span>to
            <span class="_ _12"> </span>the<span class="_ _12"> </span>whole
            <span class="_ _12"> </span>or<span class="_ _12"> </span>any
            <span class="_ _12"> </span>portion<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws18a">
            work<span class="_ _6"> </span>required<span class="_ _14"> </span>
            by<span class="_ _6"> </span>the<span class="_ _14"> </span>contract
            <span class="_ _6"> </span>documents<span class="_ _14"></span>and
            <span class="_"> </span>may<span class="_"> </span>take
            <span class="_"></span>possession<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>and<span class="_"></span>complete
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 yf5 ff2 fs0 fc0 sc0 ls0 ws1">
            contract or otherwise in any one of the following circumstances:
          </div>
          <div class="t m0 x8 h3 y58 ff2 fs0 fc0 sc0 ls0 wsdc">
            .1<span class="_ _2"> </span>If<span class="_ _6"> </span>the
            <span class="_ _14"></span>CM<span class="_"> </span>or
            <span class="_"> </span>its<span class="_"></span>surety
            <span class="_"> </span>refuses<span class="_"> </span>or
            <span class="_"> </span>fails<span class="_"> </span>to
            <span class="_"></span>prosecute<span class="_"> </span>the
            <span class="_"> </span>work<span class="_"> </span>or
            <span class="_"> </span>any<span class="_"></span>separable
            <span class="_"> </span>part<span class="_"> </span>thereof
            <span class="_"> </span>with
          </div>
          <div class="t m0 xe h3 y71 ff2 fs0 fc0 sc0 ls0 ws36">
            such<span class="_ _6"> </span>diligence<span class="_"> </span>as
            <span class="_"> </span>will<span class="_"> </span>ensure
            <span class="_"></span>the<span class="_"> </span>substantial
            <span class="_"> </span>or<span class="_"> </span>final
            <span class="_ _18"> </span>completion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>within<span class="_"></span>the
            <span class="_"> </span>contract
          </div>
          <div class="t m0 xe h3 yf6 ff2 fs0 fc0 sc0 ls0 ws1">
            time or fails to complete the work or remedy a default within said
            period;
          </div>
          <div class="t m0 x8 h3 y61 ff2 fs0 fc0 sc0 ls0 ws11">
            .2<span class="_ _2"> </span>If<span class="_ _12"> </span>the
            <span class="_ _12"></span>CM<span class="_"> </span>is
            <span class="_"> </span>in<span class="_"></span>material
            <span class="_"> </span>default<span class="_"> </span>in
            <span class="_"> </span>carrying<span class="_"> </span>out
            <span class="_"></span>any<span class="_"> </span>provisions
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"></span>for
            <span class="_"> </span>a<span class="_"> </span>cause
            <span class="_"></span>within<span class="_"> </span>his
          </div>
          <div class="t m0 xe h3 y72 ff2 fs0 fc0 sc0 ls0 ws0">control;</div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">43</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2c" class="pf w0 h0" data-page-no="2c">
        <div class="pc pc2c w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x8 h3 y1 ff2 fs0 fc0 sc0 ls0 wsa6">
            .3<span class="_ _2"> </span>If<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>fails
            <span class="_"> </span>to<span class="_"></span>supply
            <span class="_"> </span>a<span class="_"> </span>sufficient
            <span class="_"> </span>number<span class="_"> </span>of
            <span class="_"> </span>properly<span class="_"> </span>skille
            <span class="_ _0"></span>d<span class="_"> </span>workmen
            <span class="_ _f"> </span>or<span class="_ _f"> </span>proper
            <span class="_ _f"> </span>equipment<span class="_ _f"></span>or
          </div>
          <div class="t m0 xe h3 y80 ff2 fs0 fc0 sc0 ls0 ws0">materials;</div>
          <div class="t m0 x8 h3 y73 ff2 fs0 fc0 sc0 ls0 ws37">
            .4<span class="_ _2"> </span>If<span class="_ _12"> </span>the
            <span class="_ _12"></span>CM<span class="_ _12"> </span>fails
            <span class="_ _12"> </span>to<span class="_ _12"> </span>make
            <span class="_ _12"> </span>payment<span class="_ _12"> </span>to
            <span class="_ _12"> </span>the<span class="_ _12"> </span>
            contractors<span class="_"> </span>or<span class="_"> </span>for
            <span class="_"> </span>materials<span class="_"></span>or
            <span class="_"> </span>labor<span class="_"> </span>when
            <span class="_"></span>due,<span class="_"> </span>unless
            <span class="_"> </span>he
          </div>
          <div class="t m0 xe h3 y10 ff2 fs0 fc0 sc0 ls0 ws18b">
            otherwise<span class="_ _6"> </span>provides
            <span class="_ _14"></span>the<span class="_ _6"> </span>Owner
            <span class="_ _14"> </span>reasonable<span class="_"> </span>
            evidence<span class="_"> </span>that<span class="_"> </span>payment
            <span class="_"> </span>is<span class="_"></span>not
            <span class="_"> </span>legally<span class="_"> </span>or
            <span class="_"></span>contractually
          </div>
          <div class="t m0 xe h3 y81 ff2 fs0 fc0 sc0 ls0 ws0">due;</div>
          <div class="t m0 x8 h3 y74 ff2 fs0 fc0 sc0 ls0 ws18c">
            .5<span class="_ _2"> </span>If<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>disregards
            <span class="_"> </span>laws,<span class="_"> </span>permits,
            <span class="_"> </span>ordinances,<span class="_"> </span>rules,
            <span class="_"> </span>regulations<span class="_"> </span>or
            <span class="_"> </span>orders<span class="_"> </span>of
            <span class="_"> </span>any<span class="_"></span>public
          </div>
          <div class="t m0 xe h3 y12 ff2 fs0 fc0 sc0 ls0 ws1">
            authority having jurisdiction, or fails to follow the reasonable
            instructions of the Owner;
          </div>
          <div class="t m0 x8 h3 yda ff2 fs0 fc0 sc0 ls0 ws1">
            .6<span class="_ _2"> </span>If the CM substantially violates any
            provisions of the contract documents; or
          </div>
          <div class="t m0 x8 h3 y14 ff2 fs0 fc0 sc0 ls0 ws18d">
            .7<span class="_ _17"> </span>If<span class="_ _19"> </span>the
            <span class="_ _19"></span>CM<span class="_ _17"> </span>refuses
            <span class="_ _19"> </span>or<span class="_ _19"> </span>fails
            <span class="_ _19"> </span>to<span class="_ _19"> </span>properly
            <span class="_ _19"> </span>schedule,<span class="_ _19"> </span>
            plan,<span class="_ _19"></span>coordinate
            <span class="_ _19"> </span>and<span class="_"> </span>execute
            <span class="_"> </span>the<span class="_"> </span>work,
            <span class="_"> </span>as
          </div>
          <div class="t m0 xe h3 y77 ff2 fs0 fc0 sc0 ls0 wsea">
            specified<span class="_ _12"> </span>herein,
            <span class="_ _12"></span>so<span class="_ _12"> </span>as
            <span class="_ _12"> </span>to<span class="_ _12"></span>perform
            <span class="_ _12"> </span>the<span class="_ _12"> </span>work
            <span class="_ _12"> </span>within<span class="_"> </span>the
            <span class="_"> </span>specified<span class="_"> </span>milestone
            <span class="_"> </span>and<span class="_"> </span>completion
            <span class="_"> </span>dates,
          </div>
          <div class="t m0 xe h3 ydb ff2 fs0 fc0 sc0 ls0 wscb">
            or<span class="_ _12"> </span>to<span class="_"> </span>provide
            <span class="_"></span>scheduling<span class="_"> </span>or
            <span class="_"> </span>related<span class="_"> </span>information,
            <span class="_"> </span>revisions<span class="_"> </span>and
            <span class="_"> </span>updates<span class="_"> </span>as
            <span class="_"> </span>required<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>contract
          </div>
          <div class="t m0 xe h3 y78 ff2 fs0 fc0 sc0 ls0 ws0">documents.</div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws4">
            10.3.2<span class="_ _1d"> </span>The<span class="_"> </span>right
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>CM<span class="_ _18"> </span>to
            <span class="_"> </span>proceed<span class="_ _f"> </span>shall
            <span class="_ _f"> </span>not<span class="_ _f"> </span>be
            <span class="_ _f"> </span>so<span class="_ _f"></span>terminated
            <span class="_ _f"> </span>under<span class="_ _10"></span>this
            <span class="_ _f"> </span>Paragraph<span class="_ _f"> </span>10.3
            <span class="_ _f"> </span>if<span class="_ _f"> </span>the
            <span class="_ _f"> </span>delays<span class="_ _10"> </span>in
          </div>
          <div class="t m0 x3 h3 ydc ff2 fs0 fc0 sc0 ls0 ws4">
            the<span class="_"> </span>completion<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>are<span class="_"></span>due
            <span class="_"> </span>to<span class="_"> </span>causes
            <span class="_"></span>beyond<span class="_"> </span>the
            <span class="_"> </span>control<span class="_"> </span>and
            <span class="_"> </span>without<span class="_"> </span>the
            <span class="_"> </span>fault<span class="_"> </span>or
            <span class="_ _1a"> </span>negligence<span class="_ _f"> </span>of
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws1">
            CM or the contractors.
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws18e">
            10.3.3<span class="_ _1d"> </span>If,<span class="_ _6"> </span>
            after<span class="_ _14"> </span>the<span class="_ _6"> </span>CM
            <span class="_ _13"> </span>has<span class="_ _6"> </span>been
            <span class="_ _14"> </span>terminated<span class="_ _6"></span>for
            <span class="_"> </span>default<span class="_"> </span>pursuant
            <span class="_"> </span>to<span class="_"> </span>Paragraph
            <span class="_"> </span>10.3,<span class="_"> </span>it
            <span class="_"> </span>is<span class="_"> </span>determined
            <span class="_"></span>that
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 wsc3">
            none<span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _6"> </span>circumstances<span class="_"> </span>set
            <span class="_"> </span>forth<span class="_"> </span>in
            <span class="_"></span>Paragraph<span class="_"> </span>10.3.1
            <span class="_"> </span>exist,<span class="_"> </span>then
            <span class="_"> </span>such<span class="_"></span>termination
            <span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>considered<span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws16b">
            termination<span class="_"> </span>for<span class="_"> </span>
            convenience<span class="_"> </span>pursuant<span class="_"> </span>
            to<span class="_"> </span>Paragraph<span class="_"> </span>10.2.
            <span class="_ _1d"> </span>In<span class="_"> </span>such
            <span class="_"> </span>case,<span class="_"> </span>the
            <span class="_ _12"></span>CM&apos;s<span class="_ _12"> </span>sole
            <span class="_ _12"></span>remedy<span class="_ _12"> </span>will
            <span class="_ _12"> </span>be<span class="_ _12"> </span>the
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws1">
            costs permitted by Paragraph 10.4.
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws66">
            10.3.4<span class="_ _1d"> </span>If<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>so
            <span class="_"> </span>terminates<span class="_"> </span>the
            <span class="_ _12"> </span>employment<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM,
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>not
            <span class="_ _12"> </span>be<span class="_ _12"> </span>entitled
            <span class="_ _12"> </span>to<span class="_ _12"> </span>receive
            <span class="_ _12"> </span>any
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws3a">
            further<span class="_"> </span>payment<span class="_"> </span>until
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>is<span class="_"> </span>finished.
            <span class="_ _18"> </span>If<span class="_"> </span>the
            <span class="_"> </span>unpaid<span class="_"></span>balance
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>compensation<span class="_"> </span>that
            <span class="_ _f"> </span>would<span class="_ _f"> </span>have
            <span class="_ _f"> </span>been
          </div>
          <div class="t m0 x3 h3 y19 ff2 fs0 fc0 sc0 ls0 ws66">
            paid<span class="_ _19"> </span>to<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>actual
            <span class="_"> </span>work<span class="_"> </span>completed,
            <span class="_"> </span>excluding<span class="_"> </span>the
            <span class="_"> </span>CM’s<span class="_"> </span>unused
            <span class="_"></span>co<span class="_ _0"></span>ntingency
            <span class="_ _20"></span>,<span class="_"> </span>shall
            <span class="_"> </span>exceed<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws18f">
            expense<span class="_ _1f"> </span>of<span class="_ _1f"> </span>so
            <span class="_ _1f"> </span>completing<span class="_ _1f"> </span>
            the<span class="_ _1f"> </span>work<span class="_"> </span>
            (including<span class="_"> </span>compensation
            <span class="_"></span>for<span class="_"> </span>additional
            <span class="_"> </span>construction<span class="_"> </span>
            management,
          </div>
          <div class="t m0 x3 h3 yf7 ff2 fs0 fc0 sc0 ls0 ws87">
            managerial,<span class="_ _19"> </span>administrative,
            <span class="_ _19"></span>consultant,<span class="_"> </span>legal,
            <span class="_"> </span>design<span class="_"> </span>and
            <span class="_"> </span>inspection<span class="_"> </span>services
            <span class="_"> </span>and<span class="_"> </span>any
            <span class="_"> </span>damages<span class="_"></span>for
            <span class="_"> </span>delay)
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            such excess shall be paid to the CM.
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 wsd2">
            10.3.5<span class="_ _1d"> </span>If<span class="_ _6"> </span>such
            <span class="_ _14"> </span>expenses<span class="_ _6"> </span>shall
            <span class="_ _14"> </span>exceed<span class="_ _6"> </span>the
            <span class="_ _14"> </span>unpaid<span class="_ _6"> </span>
            balance,<span class="_ _14"> </span>the<span class="_ _14"> </span>
            CM<span class="_ _1b"> </span>and<span class="_"> </span>his
            <span class="_"></span>sureties<span class="_"> </span>shall
            <span class="_"> </span>be<span class="_"> </span>liable
            <span class="_"> </span>to<span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws99">
            Owner<span class="_ _6"> </span>for<span class="_ _14"> </span>such
            <span class="_ _6"> </span>excess.<span class="_ _18"> </span>If
            <span class="_"> </span>the<span class="_"> </span>right
            <span class="_"></span>of<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_ _21"></span>to
            <span class="_"> </span>proceed<span class="_"> </span>with
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>is<span class="_"></span>partially
            <span class="_"> </span>or<span class="_"> </span>fully
            <span class="_"> </span>terminated,<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 wsa0">
            Owner<span class="_ _12"> </span>may<span class="_ _12"> </span>take
            <span class="_ _12"> </span>possession<span class="_ _12"></span>of
            <span class="_ _12"> </span>and<span class="_ _12"> </span>utilize
            <span class="_ _12"> </span>in<span class="_"> </span>completing
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"> </span>such<span class="_"> </span>materials,
            <span class="_"> </span>appliances,<span class="_"></span>supplies,
            <span class="_"> </span>plant
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws18">
            and<span class="_ _12"> </span>equipment<span class="_ _12"> </span>
            as<span class="_ _12"> </span>may<span class="_ _12"> </span>be
            <span class="_ _12"> </span>on<span class="_ _12"> </span>the
            <span class="_ _12"> </span>site<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>terminated
            <span class="_"> </span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>and<span class="_"> </span>necessary
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"> </span>completion
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1a">
            of<span class="_"> </span>the<span class="_"> </span>work.
            <span class="_ _18"></span>If<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>does
            <span class="_"> </span>not<span class="_"> </span>fully
            <span class="_"></span>terminate<span class="_"> </span>the
            <span class="_"> </span>right<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>to<span class="_"> </span>proceed,
            <span class="_"></span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>continue
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 yf3 ff2 fs0 fc0 sc0 ls0 ws1">
            perform the part of the work that is not terminated.
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 wsa9">
            10.3.6<span class="_ _1d"> </span>If<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>
            terminates<span class="_ _14"> </span>the<span class="_ _6"> </span>
            whole<span class="_ _14"> </span>or<span class="_ _6"> </span>any
            <span class="_"> </span>part<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"> </span>Paragraph<span class="_"> </span>10.3,
            <span class="_"> </span>the<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws8c">
            may<span class="_ _15"> </span>procure,<span class="_ _15"> </span>
            upon<span class="_"> </span>such<span class="_"> </span>terms
            <span class="_"></span>and<span class="_"> </span>in
            <span class="_"> </span>such<span class="_"></span>manner
            <span class="_"> </span>as<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>may
            <span class="_"> </span>deem<span class="_"></span>appropriate,
            <span class="_"> </span>supplies<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 yf4 ff2 fs0 fc0 sc0 ls0 ws77">
            services<span class="_"> </span>similar<span class="_"> </span>to
            <span class="_"> </span>those<span class="_"> </span>so
            <span class="_"></span>terminated,<span class="_"> </span>and
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"></span>be
            <span class="_"> </span>liable<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>Owner
            <span class="_"> </span>for<span class="_"></span>any
            <span class="_"> </span>excess<span class="_"> </span>costs
            <span class="_"></span>for<span class="_"> </span>such
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws7d">
            similar<span class="_ _15"> </span>supplies<span class="_"> </span>
            or<span class="_"> </span>services.<span class="_ _17"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>continue<span class="_"> </span>the
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>extent<span class="_"> </span>not
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws1">
            terminated hereunder<span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 yf5 ff2 fs0 fc0 sc0 ls0 ws1">
            10.4<span class="_ _27"> </span>Allowable termination costs
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws7">
            10.4.1<span class="_ _1d"> </span>If<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>
            terminates<span class="_"> </span>the<span class="_"> </span>whole
            <span class="_"> </span>or<span class="_"> </span>any
            <span class="_"></span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"></span>Paragraph<span class="_"> </span>10.2,
            <span class="_"> </span>then<span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws26">
            Owner<span class="_"> </span>shall<span class="_"> </span>only
            <span class="_"></span>be<span class="_"> </span>liable
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>CM<span class="_ _18"> </span>for
            <span class="_ _f"></span>those<span class="_ _f"> </span>costs
            <span class="_ _f"> </span>reimbursable<span class="_ _f"> </span>to
            <span class="_ _f"> </span>the<span class="_ _10"> </span>CM
            <span class="_ _1c"> </span>in<span class="_ _f"> </span>accordance
            <span class="_ _f"> </span>with<span class="_ _f"> </span>Paragraph
          </div>
          <div class="t m0 x3 h3 yf6 ff2 fs0 fc0 sc0 ls0 ws42">
            10.4.2,<span class="_"> </span>plus<span class="_"> </span>a
            <span class="_"></span>markup<span class="_"> </span>of
            <span class="_"> </span>ten<span class="_"></span>percent
            <span class="_"> </span>for<span class="_"> </span>profit
            <span class="_"> </span>and<span class="_"> </span>overhead
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>actual<span class="_"> </span>fully
            <span class="_"> </span>accounted<span class="_ _f"> </span>costs
            <span class="_ _f"> </span>paid<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws6d">
            Owner<span class="_ _12"> </span>under<span class="_ _12"> </span>
            10.4.2;<span class="_ _12"> </span>provided<span class="_"> </span>
            however<span class="_ _1"></span>,<span class="_"> </span>that
            <span class="_"></span>if<span class="_"> </span>there
            <span class="_"> </span>is<span class="_"></span>evidence
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_ _1c"> </span>would
            <span class="_"></span>have<span class="_"> </span>sustained
            <span class="_"> </span>a<span class="_"></span>loss
            <span class="_"> </span>on
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws20">
            the<span class="_"> </span>entire<span class="_"> </span>contract
            <span class="_"> </span>had<span class="_"> </span>it
            <span class="_"></span>been<span class="_"> </span>completed,
            <span class="_ _6"> </span>no<span class="_ _14"> </span>profit
            <span class="_ _6"> </span>shall<span class="_ _14"> </span>be
            <span class="_ _6"> </span>included<span class="_ _14"> </span>or
            <span class="_ _6"> </span>allowed<span class="_ _14"> </span>
            hereunder<span class="_ _14"></span>for<span class="_ _6"> </span>
            the<span class="_ _14"> </span>work
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws190">
            performed<span class="_ _12"> </span>and<span class="_ _12"> </span>
            an<span class="_ _12"> </span>appropriate<span class="_ _12"></span>
            adjustment<span class="_ _12"> </span>shall
            <span class="_ _12"></span>be<span class="_"> </span>made
            <span class="_"> </span>reducing<span class="_"></span>the
            <span class="_"> </span>amount<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>settlement
            <span class="_"> </span>to<span class="_"> </span>reflect
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 yf8 ff2 fs0 fc0 sc0 ls0 ws4">
            indicated<span class="_"> </span>rate<span class="_"> </span>of
            <span class="_"></span>loss.<span class="_ _18"> </span>Under
            <span class="_"> </span>no<span class="_"> </span>circumstances
            <span class="_"> </span>shall<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>be
            <span class="_"> </span>entitled<span class="_ _f"> </span>to
            <span class="_ _f"> </span>any<span class="_ _f"> </span>loss
            <span class="_ _f"> </span>profit<span class="_ _f"> </span>or
            <span class="_ _10"> </span>fee<span class="_ _f"> </span>on
            <span class="_ _f"></span>the<span class="_ _f"> </span>work
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws1">
            terminated pursuant to section 10.2.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">44</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2d" class="pf w0 h0" data-page-no="2d">
        <div class="pc pc2d w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws23">
            10.4.1.1<span class="_ _37"> </span>After
            <span class="_ _12"> </span>receipt<span class="_ _12"> </span>of
            <span class="_"> </span>a<span class="_"></span>notice
            <span class="_"> </span>of<span class="_"> </span>termination,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>shall<span class="_"> </span>submit
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>his
            <span class="_"> </span>termination<span class="_"> </span>claim,
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 yd8 ff2 fs0 fc0 sc0 ls0 ws8d">
            the<span class="_ _6"> </span>form<span class="_ _14"> </span>and
            <span class="_ _6"> </span>with<span class="_"> </span>certification
            <span class="_"> </span>prescribed<span class="_"></span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>.<span class="_ _18"> </span>Such
            <span class="_"> </span>claim<span class="_"></span>shall
            <span class="_"> </span>be<span class="_"> </span>submitted
            <span class="_"> </span>promptly<span class="_ _1"></span>,
            <span class="_"> </span>but<span class="_"> </span>in
            <span class="_"></span>no
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws80">
            event<span class="_ _19"> </span>later<span class="_ _19"> </span>
            than<span class="_"> </span>thirty<span class="_"> </span>(30)
            <span class="_"></span>days<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>effective
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"> </span>termination,<span class="_"> </span>unless
            <span class="_"> </span>one<span class="_ _6"> </span>or
            <span class="_"></span>more<span class="_"> </span>extensions
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws21">
            writing<span class="_ _12"> </span>are<span class="_ _12"> </span>
            granted<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>upon
            <span class="_"> </span>request<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>made<span class="_"> </span>in
            <span class="_"></span>writing<span class="_"> </span>within
            <span class="_"> </span>such<span class="_"> </span>thirty
            <span class="_"> </span>(30)<span class="_"></span>day
            <span class="_"> </span>period<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 ws191">
            authorized<span class="_ _6"> </span>extension
            <span class="_ _14"></span>thereof.<span class="_ _13"> </span>
            However<span class="_ _20"></span>,<span class="_ _14"> </span>if
            <span class="_ _6"> </span>the<span class="_ _14"></span>Owner
            <span class="_"> </span>determines<span class="_"> </span>that
            <span class="_"> </span>the<span class="_"> </span>facts
            <span class="_"></span>justify<span class="_"> </span>such
            <span class="_"> </span>action,<span class="_"> </span>he
            <span class="_"> </span>may
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws135">
            receive<span class="_"> </span>and<span class="_"> </span>evaluate
            <span class="_"> </span>any<span class="_"> </span>such
            <span class="_"> </span>termination<span class="_"> </span>claim
            <span class="_"> </span>at<span class="_"> </span>any
            <span class="_"></span>time<span class="_"> </span>after
            <span class="_"> </span>such<span class="_"></span>thirty
            <span class="_"> </span>(30)<span class="_"> </span>day
            <span class="_"></span>period<span class="_"> </span>or
            <span class="_"> </span>any<span class="_"></span>extension
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 wsc7">
            thereof.<span class="_ _17"> </span>Upon<span class="_"> </span>
            failure<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>to
            <span class="_"> </span>submit<span class="_"></span>his
            <span class="_"> </span>termination<span class="_"> </span>claim
            <span class="_"> </span>within<span class="_"> </span>the
            <span class="_"></span>time<span class="_"> </span>allowed,
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>may
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws3a">
            determine,<span class="_ _6"> </span>on<span class="_"> </span>the
            <span class="_"> </span>basis<span class="_"> </span>of
            <span class="_"></span>information<span class="_"> </span>available
            <span class="_"> </span>to<span class="_"> </span>him,
            <span class="_"> </span>the<span class="_"></span>amount,
            <span class="_"> </span>if<span class="_"> </span>any
            <span class="_ _20"></span>,<span class="_"> </span>due
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>CM<span class="_"> </span>by
            <span class="_"></span>reason<span class="_"> </span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws0">termination.</div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws7">
            10.4.2<span class="_ _1d"> </span>If<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>
            terminates<span class="_ _14"> </span>the<span class="_ _6"> </span>
            whole<span class="_"> </span>or<span class="_"> </span>any
            <span class="_"></span>portion<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>work
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"></span>section<span class="_ _18"> </span>10.2,
            <span class="_"> </span>the<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws192">
            shall<span class="_ _19"> </span>pay<span class="_ _19"> </span>the
            <span class="_ _19"> </span>CM<span class="_ _19"> </span>an
            <span class="_ _19"> </span>amount<span class="_ _19"> </span>for
            <span class="_"> </span>supplies,<span class="_"> </span>services,
            <span class="_"> </span>or<span class="_"> </span>property
            <span class="_"> </span>accepted<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>and
            <span class="_"> </span>which<span class="_"></span>is
            <span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws66">
            accordance<span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>contract<span class="_"> </span>documents,
            <span class="_"> </span>in<span class="_"> </span>an
            <span class="_"></span>amount<span class="_"> </span>as
            <span class="_"> </span>if<span class="_"></span>the
            <span class="_"> </span>Agreement<span class="_"> </span>had
            <span class="_"> </span>not<span class="_ _12"> </span>been
            <span class="_ _12"></span>terminated.<span class="_ _18"> </span>In
          </div>
          <div class="t m0 x3 h3 ydb ff2 fs0 fc0 sc0 ls0 ws4">
            addition,<span class="_"> </span>in<span class="_"> </span>such
            <span class="_"></span>event,<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>shall
            <span class="_"> </span>pay<span class="_"> </span>to
            <span class="_"></span>CM<span class="_"> </span>an
            <span class="_"> </span>amount<span class="_ _f"></span>representing
            <span class="_ _f"> </span>CM’s<span class="_ _f"></span>actual
            <span class="_ _f"> </span>cost,<span class="_ _f"> </span>excluding
            <span class="_ _f"> </span>any
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 ws8d">
            overhead<span class="_"> </span>and<span class="_"> </span>profit
            <span class="_"> </span>for<span class="_"> </span>the
            <span class="_"></span>items<span class="_"> </span>and
            <span class="_"> </span>things<span class="_"></span>specified
            <span class="_"> </span>in<span class="_"> </span>subparagraph
            <span class="_"> </span>10.5.1.6<span class="_"> </span>and
            <span class="_"> </span>not<span class="_"> </span>heretofore
            <span class="_ _f"> </span>paid<span class="_ _f"> </span>for
            <span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws23">
            appropriately<span class="_ _12"> </span>adjusted
            <span class="_ _12"></span>for<span class="_ _12"> </span>any
            <span class="_ _12"> </span>saving<span class="_ _12"> </span>of
            <span class="_ _12"> </span>freight<span class="_ _12"> </span>or
            <span class="_ _12"> </span>other<span class="_ _12"> </span>
            charges.<span class="_ _18"></span>Under<span class="_ _12"> </span>
            no<span class="_ _12"> </span>circumstances,
            <span class="_ _12"> </span>shall<span class="_"></span>the
            <span class="_"> </span>CM<span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            entitled to any loss profit or fee on the work terminated pursuant
            to section 10.2.
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 wsc2">
            10.4.2.1<span class="_ _13"> </span>The<span class="_ _6"> </span>CM
            <span class="_ _6"> </span>agrees<span class="_ _14"> </span>that
            <span class="_ _6"> </span>neither<span class="_ _14"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>nor
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Design
            <span class="_ _14"> </span>Consultant<span class="_ _6"></span>will
            <span class="_"> </span>be<span class="_"> </span>liable
            <span class="_"></span>for<span class="_"> </span>payments
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws140">
            contractors<span class="_ _19"> </span>or
            <span class="_ _19"> </span>subcontractors<span class="_"> </span>
            pursuant<span class="_"></span>to<span class="_"> </span>Paragraph
            <span class="_"> </span>10.4.2<span class="_"> </span>unless
            <span class="_"> </span>each<span class="_"> </span>contract
            <span class="_"> </span>or<span class="_"></span>subcontract
            <span class="_"> </span>contains
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 wsf3">
            termination<span class="_ _12"> </span>provisions
            <span class="_ _12"></span>identical<span class="_ _12"> </span>to
            <span class="_ _12"> </span>those<span class="_ _12"> </span>set
            <span class="_"> </span>forth<span class="_"> </span>in
            <span class="_"> </span>this<span class="_"></span>Article
            <span class="_"> </span>10.<span class="_ _1c"> </span>The
            <span class="_"> </span>Owner<span class="_"> </span>and
            <span class="_"></span>the<span class="_"> </span>design
            <span class="_"> </span>consultant<span class="_"> </span>will
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws77">
            not<span class="_ _12"> </span>be<span class="_"> </span>liable
            <span class="_"></span>to<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>or
            <span class="_"> </span>any<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>contractors
            <span class="_"> </span>or<span class="_"> </span>subcontractors
            <span class="_"> </span>for<span class="_"> </span>any
            <span class="_"> </span>costs<span class="_"></span>associated
            <span class="_"> </span>with<span class="_"> </span>termination
            <span class="_"> </span>if
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
            the contract or subcontract of the party involved does not include
            the required termination language.
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws8c">
            10.4.3<span class="_ _1d"> </span>In<span class="_"> </span>arriving
            <span class="_"> </span>at<span class="_"> </span>any
            <span class="_"></span>amount<span class="_"> </span>due
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_ _6"></span>Paragraph<span class="_ _6"> </span>10.4,
            <span class="_ _14"></span>there<span class="_ _14"> </span>shall
            <span class="_ _6"> </span>be<span class="_ _14"> </span>deducted
            <span class="_ _6"> </span>the
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws0">following:</div>
          <div class="t m0 x8 h3 y19 ff2 fs0 fc0 sc0 ls0 wsac">
            .1<span class="_ _2"> </span>All<span class="_ _12"> </span>
            unliquidated<span class="_"> </span>advance<span class="_"> </span>
            or<span class="_"> </span>other<span class="_"> </span>payments
            <span class="_"> </span>on<span class="_"> </span>account
            <span class="_"> </span>theretofore<span class="_"> </span>made
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>applicable
            <span class="_"> </span>to
          </div>
          <div class="t m0 xe h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            the terminated portion of the contract;
          </div>
          <div class="t m0 x8 h3 y69 ff2 fs0 fc0 sc0 ls0 ws3a">
            .2<span class="_ _2"> </span>Any<span class="_"> </span>amount
            <span class="_"></span>which<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>reasonably
            <span class="_"> </span>believes<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"> </span>or
            <span class="_ _f"></span>any<span class="_ _f"> </span>of
            <span class="_ _f"> </span>the<span class="_ _f"></span>contractors
            <span class="_ _f"> </span>owes<span class="_ _f"></span>to
            <span class="_ _10"> </span>the
          </div>
          <div class="t m0 xe h3 y1d ff2 fs0 fc0 sc0 ls0 ws0">Owner;</div>
          <div class="t m0 x8 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws7d">
            .3<span class="_ _2"> </span>Such<span class="_ _15"> </span>amount
            <span class="_"> </span>as<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>determines
            <span class="_"> </span>to<span class="_"> </span>be
            <span class="_"> </span>necessary<span class="_"></span>to
            <span class="_"> </span>protect<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>against
            <span class="_"> </span>loss
          </div>
          <div class="t m0 xe h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            because of outstanding or potential liens or claims; and
          </div>
          <div class="t m0 x8 h3 y6b ff2 fs0 fc0 sc0 ls0 ws156">
            .4<span class="_ _2"> </span>The<span class="_ _12"> </span>agreed
            <span class="_ _12"> </span>price<span class="_ _12"> </span>for
            <span class="_ _1"></span>,<span class="_ _12"> </span>or
            <span class="_ _12"></span>the<span class="_ _12"> </span>proceeds
            <span class="_ _12"> </span>of<span class="_"> </span>sale
            <span class="_"> </span>of,<span class="_"></span>any
            <span class="_"> </span>materials,<span class="_"> </span>supplies
            <span class="_"> </span>or<span class="_"> </span>other
            <span class="_"> </span>things<span class="_"> </span>acquired
          </div>
          <div class="t m0 xe h3 yf3 ff2 fs0 fc0 sc0 ls0 ws17d">
            by<span class="_ _15"> </span>the<span class="_ _15"> </span>CM
            <span class="_ _23"></span>or<span class="_ _15"> </span>sold,
            <span class="_ _15"> </span>pursuant<span class="_ _15"> </span>to
            <span class="_ _15"> </span>the<span class="_ _15"> </span>
            provisions<span class="_ _15"></span>of<span class="_ _15"> </span>
            Paragraph<span class="_ _15"> </span>10.5.1.7,
            <span class="_"> </span>and<span class="_"> </span>not
            <span class="_"> </span>otherwise
          </div>
          <div class="t m0 xe h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            recovered by or credited to the Owner<span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws193">
            10.4.4<span class="_ _13"> </span>The<span class="_"> </span>total
            <span class="_"> </span>sum<span class="_"> </span>to
            <span class="_"></span>be<span class="_"> </span>paid
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>CM<span class="_"> </span>under
            <span class="_"></span>Paragraph<span class="_"> </span>10.4
            <span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"> </span>exceed<span class="_"></span>the
            <span class="_"> </span>c<span class="_ _0"></span>ontract
            <span class="_"></span>sum<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 yf4 ff2 fs0 fc0 sc0 ls0 ws190">
            reduced<span class="_ _12"> </span>by<span class="_ _12"> </span>the
            <span class="_"> </span>amount<span class="_"> </span>of
            <span class="_"></span>payments<span class="_"> </span>otherwise
            <span class="_"> </span>made<span class="_"> </span>or
            <span class="_"> </span>to<span class="_"></span>be
            <span class="_"> </span>made<span class="_"> </span>for
            <span class="_"></span>work<span class="_"> </span>not
            <span class="_"> </span>terminated<span class="_"> </span>and
            <span class="_"> </span>as<span class="_"> </span>otherwise
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 ws36">
            permitted<span class="_ _6"> </span>by<span class="_ _14"> </span>
            the<span class="_ _6"> </span>contract.<span class="_ _13"> </span>
            Except<span class="_"> </span>for<span class="_"> </span>normal
            <span class="_"> </span>spoilage,<span class="_"> </span>and
            <span class="_"> </span>except<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>extent
            <span class="_"> </span>that<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>shall
            <span class="_"></span>have
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws56">
            otherwise<span class="_ _12"> </span>expressly
            <span class="_ _12"></span>assumed<span class="_ _12"> </span>the
            <span class="_ _12"> </span>risk<span class="_ _12"> </span>of
            <span class="_ _12"> </span>loss,<span class="_ _12"> </span>there
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>be
            <span class="_ _12"> </span>excluded<span class="_ _12"> </span>from
            <span class="_ _12"> </span>the<span class="_"> </span>amounts
            <span class="_"> </span>payable<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>CM,
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 ws6a">
            as<span class="_"> </span>provided<span class="_"> </span>in
            <span class="_"></span>Paragraph<span class="_"> </span>10.4.2,
            <span class="_"> </span>the<span class="_"> </span>replacement
            <span class="_"> </span>cost<span class="_"> </span>of
            <span class="_"> </span>property<span class="_ _19"></span>which
            <span class="_ _19"> </span>is<span class="_ _19"> </span>destroyed,
            <span class="_ _19"> </span>lost,<span class="_ _19"></span>stolen
            <span class="_ _19"> </span>or
          </div>
          <div class="t m0 x3 h3 yf5 ff2 fs0 fc0 sc0 ls0 ws1">
            damaged so as to become undeliverable to the Owner
            <span class="_ _20"></span>, or to a buyer pursuant to Paragraph
            10.5.1.7.
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws1">
            10.5<span class="_ _27"> </span>General T<span class="_ _2b"></span>
            ermination Provisions
          </div>
          <div class="t m0 x3 h3 yf6 ff2 fs0 fc0 sc0 ls0 ws24">
            10.5.1<span class="_ _1d"> </span>After<span class="_ _19"> </span>
            receipt<span class="_ _19"> </span>of<span class="_"> </span>a
            <span class="_"></span>notice<span class="_"> </span>of
            <span class="_"> </span>termination<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>,<span class="_"></span>pursuant
            <span class="_"> </span>to<span class="_"> </span>Paragraph
            <span class="_"> </span>10.2<span class="_"> </span>or
            <span class="_"> </span>10.3,<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws1">
            except as otherwise directed by the Owner<span class="_ _20"></span>
            , the CM shall:
          </div>
          <div class="t m0 x8 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
            .1<span class="_ _2"> </span>Stop work under the contract on the
            date and to the extent specified in the notice of termination;
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">45</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2e" class="pf w0 h0" data-page-no="2e">
        <div class="pc pc2e w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x8 h3 y1 ff2 fs0 fc0 sc0 ls0 ws66">
            .2<span class="_ _2"> </span>Place<span class="_"> </span>no
            <span class="_"></span>further<span class="_"> </span>orders
            <span class="_"> </span>or<span class="_"> </span>subcontracts
            <span class="_"> </span>for<span class="_"> </span>materials,
            <span class="_"> </span>services<span class="_"> </span>or
            <span class="_"> </span>facilities,<span class="_"> </span>except
            <span class="_"> </span>as<span class="_"> </span>may
            <span class="_"> </span>be
          </div>
          <div class="t m0 xe h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            necessary for completion of such portion of the work under the
            contract as is not terminated;
          </div>
          <div class="t m0 x8 h3 y73 ff2 fs0 fc0 sc0 ls0 ws7">
            .3<span class="_ _2"> </span>T<span class="_ _4"></span>erminate
            <span class="_ _6"> </span>all<span class="_ _14"> </span>orders
            <span class="_"> </span>and<span class="_"> </span>subcontracts
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"> </span>extent<span class="_"> </span>that
            <span class="_"></span>they<span class="_"> </span>relate
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>performance<span class="_"> </span>of
            <span class="_"> </span>work
          </div>
          <div class="t m0 xe h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
            terminated by the notice of termination;
          </div>
          <div class="t m0 x8 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws7">
            .4<span class="_ _2"> </span>At<span class="_ _6"> </span>the
            <span class="_ _14"></span>option<span class="_ _6"> </span>of
            <span class="_ _14"> </span>the<span class="_ _14"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _6"> </span>assign
            <span class="_ _14"> </span>to<span class="_ _6"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>in
            <span class="_"> </span>the<span class="_"> </span>manner
            <span class="_ _1"></span>,<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"></span>times
            <span class="_"> </span>and<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>extent
          </div>
          <div class="t m0 xe h3 y74 ff2 fs0 fc0 sc0 ls0 ws3a">
            directed<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>all<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>rights
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>contracts<span class="_"></span>so
            <span class="_"> </span>terminated,<span class="_"> </span>in
            <span class="_"> </span>which<span class="_"> </span>case
            <span class="_"></span>the<span class="_ _f"> </span>Owner
          </div>
          <div class="t m0 xe h3 y12 ff2 fs0 fc0 sc0 ls0 ws194">
            shall<span class="_ _15"> </span>have<span class="_ _15"> </span>the
            <span class="_ _15"> </span>right,<span class="_ _15"> </span>at
            <span class="_ _15"> </span>his<span class="_ _15"> </span>
            discretion,<span class="_ _15"> </span>to<span class="_ _15"></span>
            settle<span class="_"> </span>or<span class="_"> </span>pay
            <span class="_"></span>any<span class="_"> </span>or
            <span class="_"> </span>all<span class="_"></span>claims
            <span class="_"> </span>arising<span class="_"> </span>out
            <span class="_"> </span>of<span class="_"> </span>the
          </div>
          <div class="t m0 xe h3 y75 ff2 fs0 fc0 sc0 ls0 ws1">
            termination of such orders and subcontracts;
          </div>
          <div class="t m0 x8 h3 y76 ff2 fs0 fc0 sc0 ls0 ws195">
            .5<span class="_ _2"> </span>Settle<span class="_ _15"> </span>all
            <span class="_ _15"> </span>outstanding<span class="_"> </span>
            liabilities<span class="_"> </span>and<span class="_"> </span>all
            <span class="_"> </span>claims<span class="_"> </span>arising
            <span class="_"> </span>out<span class="_"> </span>of
            <span class="_"></span>such<span class="_"> </span>termination
            <span class="_"> </span>or<span class="_"> </span>orders
            <span class="_"> </span>and
          </div>
          <div class="t m0 xe h3 y14 ff2 fs0 fc0 sc0 ls0 ws9e">
            subcontracts,<span class="_ _12"> </span>with
            <span class="_ _12"></span>the<span class="_ _12"> </span>approval
            <span class="_ _12"> </span>or<span class="_ _12"> </span>
            ratification<span class="_ _12"></span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _12"> </span>to
            <span class="_ _12"></span>the<span class="_ _12"> </span>extent
            <span class="_ _12"> </span>he<span class="_ _12"> </span>may
            <span class="_"> </span>require,<span class="_"> </span>which
          </div>
          <div class="t m0 xe h3 y77 ff2 fs0 fc0 sc0 ls0 ws1">
            approval or ratification shall be final for all the purposes of this
            article;
          </div>
          <div class="t m0 x8 h3 y78 ff2 fs0 fc0 sc0 ls0 ws18">
            .6<span class="_ _2"> </span>T<span class="_ _1"></span>ransfer
            <span class="_ _12"></span>title<span class="_ _12"> </span>and
            <span class="_ _12"> </span>deliver<span class="_ _12"> </span>to
            <span class="_ _12"> </span>the<span class="_ _12"> </span>entity
            <span class="_ _12"> </span>or<span class="_ _12"> </span>entities
            <span class="_ _12"> </span>designated<span class="_ _12"> </span>by
            <span class="_ _12"> </span>the<span class="_ _12"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_"></span>manner
            <span class="_ _1"></span>,<span class="_"> </span>at
            <span class="_"></span>the
          </div>
          <div class="t m0 xe h3 y9 ff2 fs0 fc0 sc0 ls0 ws4">
            times<span class="_"> </span>and<span class="_"> </span>to
            <span class="_"></span>the<span class="_"> </span>extent
            <span class="_"> </span>directed<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"></span>Owner
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>extent<span class="_"> </span>specifically
            <span class="_"> </span>produced<span class="_"> </span>or
            <span class="_ _f"> </span>specifically
          </div>
          <div class="t m0 xe h3 y82 ff2 fs0 fc0 sc0 ls0 wsb5">
            acquired<span class="_ _6"> </span>by<span class="_ _14"> </span>the
            <span class="_"> </span>CM<span class="_ _18"> </span>for
            <span class="_"></span>the<span class="_ _18"> </span>performance
            <span class="_"> </span>of<span class="_"> </span>such
            <span class="_"> </span>portion<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>work
            <span class="_"></span>as<span class="_"> </span>had
            <span class="_"> </span>been<span class="_"></span>terminated,
          </div>
          <div class="t m0 xe h3 ydc ff2 fs0 fc0 sc0 ls0 ws1">
            the following:
          </div>
          <div class="t m0 xe h3 yb ff2 fs0 fc0 sc0 ls0 ws50">
            (1)<span class="_ _38"> </span>The<span class="_ _19"> </span>
            fabricated<span class="_ _19"> </span>or<span class="_ _19"> </span>
            unfabricated<span class="_ _19"> </span>parts,
            <span class="_"></span>work<span class="_"> </span>in
            <span class="_"> </span>process,<span class="_"></span>partially
            <span class="_"> </span>completed<span class="_"> </span>supplies
            <span class="_"> </span>and
          </div>
          <div class="t m0 x1e h3 y7a ff2 fs0 fc0 sc0 ls0 wsd2">
            equipment,<span class="_ _6"> </span>materials,
            <span class="_ _14"></span>parts,<span class="_ _6"> </span>tools,
            <span class="_ _14"> </span>dies,<span class="_"> </span>jigs
            <span class="_"> </span>and<span class="_"></span>other
            <span class="_"> </span>fixtures,<span class="_"> </span>completed
            <span class="_"> </span>work,<span class="_"> </span>supplies
          </div>
          <div class="t m0 x1e h3 ydd ff2 fs0 fc0 sc0 ls0 wsc">
            and<span class="_ _12"> </span>other<span class="_ _12"> </span>
            material<span class="_ _12"> </span>produced
            <span class="_ _12"></span>as<span class="_ _12"> </span>part
            <span class="_ _12"> </span>of,<span class="_"> </span>or
            <span class="_"> </span>acquired<span class="_"></span>in
            <span class="_"> </span>connection<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"> </span>performance
            <span class="_"> </span>of,
          </div>
          <div class="t m0 x1e h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
            the work terminated by the notice of termination; and
          </div>
          <div class="t m0 xe h3 y7b ff2 fs0 fc0 sc0 ls0 ws196">
            (2)<span class="_ _38"> </span>The<span class="_ _12"> </span>
            completed<span class="_ _12"> </span>or<span class="_ _12"> </span>
            partially<span class="_ _12"> </span>completed
            <span class="_ _12"></span>plans,<span class="_"> </span>drawings,
            <span class="_"> </span>information,<span class="_"> </span>
            releases,<span class="_"></span>manuals<span class="_"> </span>and
          </div>
          <div class="t m0 x1e h3 yde ff2 fs0 fc0 sc0 ls0 wsa9">
            other<span class="_ _6"> </span>property<span class="_ _14"> </span>
            related<span class="_ _6"> </span>to<span class="_ _14"> </span>the
            <span class="_ _6"> </span>work<span class="_ _14"> </span>and
            <span class="_ _14"> </span>which,<span class="_"> </span>if
            <span class="_"> </span>the<span class="_"> </span>contract
            <span class="_"></span>had<span class="_"> </span>been
            <span class="_"> </span>completed,<span class="_"> </span>would
          </div>
          <div class="t m0 x1e h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            have been required to be furnished to the Owner;
          </div>
          <div class="t m0 x8 h3 y68 ff2 fs0 fc0 sc0 ls0 ws77">
            .7<span class="_ _2"> </span>Use<span class="_ _12"> </span>
            commercially<span class="_ _12"> </span>reasonable
            <span class="_ _18"></span>efforts<span class="_ _12"> </span>to
            <span class="_"> </span>sell,<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>manner
            <span class="_ _20"></span>,<span class="_"> </span>at
            <span class="_"></span>the<span class="_"> </span>times,
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>extent<span class="_"> </span>and
            <span class="_"></span>at<span class="_"> </span>the
          </div>
          <div class="t m0 xe h3 yf7 ff2 fs0 fc0 sc0 ls0 ws8c">
            price<span class="_"> </span>or<span class="_"> </span>prices
            <span class="_"></span>directed<span class="_"> </span>or
            <span class="_"> </span>authorized<span class="_"> </span>by
            <span class="_"> </span>the<span class="_ _6"> </span>Owner
            <span class="_ _1"></span>,<span class="_ _14"></span>any
            <span class="_ _6"> </span>property<span class="_ _14"> </span>of
            <span class="_ _6"> </span>the<span class="_ _14"> </span>types
            <span class="_ _6"> </span>referred<span class="_ _14"> </span>to
            <span class="_ _14"> </span>in
          </div>
          <div class="t m0 xe h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            Paragraph 10.5.1.6; provided, however<span class="_ _20"></span>,
            that the CM:
          </div>
          <div class="t m0 xe h3 y6a ff2 fs0 fc0 sc0 ls0 ws1">
            (1)<span class="_ _39"> </span>Shall not be required to extend
            credit to any buyer<span class="_ _20"></span>, and
          </div>
          <div class="t m0 xe h3 y7d ff2 fs0 fc0 sc0 ls0 ws1d">
            (2)<span class="_ _38"> </span>May<span class="_"> </span>acquire
            <span class="_"> </span>any<span class="_"> </span>such
            <span class="_"></span>property<span class="_"> </span>under
            <span class="_"> </span>the<span class="_ _f"> </span>conditions
            <span class="_ _f"> </span>prescribed<span class="_ _f"> </span>by
            <span class="_ _f"> </span>and<span class="_ _f"> </span>at
            <span class="_ _f"> </span>a<span class="_ _10"></span>price
            <span class="_ _f"> </span>or<span class="_ _f"> </span>prices
          </div>
          <div class="t m0 x1e h3 y4c ff2 fs0 fc0 sc0 ls0 ws24">
            approved<span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner;<span class="_"> </span>and
            <span class="_"> </span>provided<span class="_"> </span>further
            <span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>proceeds<span class="_"> </span>of
            <span class="_"> </span>any<span class="_"></span>such
            <span class="_ _12"> </span>transfer<span class="_ _12"> </span>or
          </div>
          <div class="t m0 x1e h3 y6b ff2 fs0 fc0 sc0 ls0 wsd9">
            disposition<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>applied<span class="_"> </span>in
            <span class="_"></span>reduction<span class="_"> </span>of
            <span class="_"> </span>any<span class="_"></span>payments
            <span class="_"> </span>to<span class="_"> </span>be
            <span class="_"></span>made<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>Owner
            <span class="_ _f"> </span>to<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x1e h3 yf3 ff2 fs0 fc0 sc0 ls0 ws12b">
            CM<span class="_ _18"> </span>under<span class="_ _12"> </span>the
            <span class="_ _12"> </span>contract<span class="_ _12"> </span>or
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>
            otherwise<span class="_ _12"> </span>be<span class="_ _12"> </span>
            credited<span class="_ _12"> </span>to<span class="_ _12"> </span>
            the<span class="_ _12"> </span>contract<span class="_ _12"> </span>
            sum<span class="_ _12"> </span>covered<span class="_"> </span>by
            <span class="_"> </span>the
          </div>
          <div class="t m0 x1e h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            contract or paid in such other manner as the Owner may direct;
          </div>
          <div class="t m0 x8 h3 y6d ff2 fs0 fc0 sc0 ls0 ws99">
            .8<span class="_ _2"> </span>Complete<span class="_"> </span>
            performance<span class="_"> </span>of<span class="_"> </span>such
            <span class="_"> </span>part<span class="_"> </span>of
            <span class="_"></span>the<span class="_"> </span>work
            <span class="_"> </span>as<span class="_"></span>shall
            <span class="_"> </span>not<span class="_ _f"> </span>have
            <span class="_ _f"> </span>been<span class="_ _f"> </span>terminated
            <span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>notice
          </div>
          <div class="t m0 xe h3 yf4 ff2 fs0 fc0 sc0 ls0 ws1">
            of termination; and
          </div>
          <div class="t m0 x8 h3 y54 ff2 fs0 fc0 sc0 ls0 ws13">
            .9<span class="_ _17"> </span>T<span class="_ _4"></span>ake
            <span class="_ _19"></span>such<span class="_ _19"> </span>action
            <span class="_ _19"> </span>as<span class="_ _19"> </span>may
            <span class="_ _19"> </span>be<span class="_ _19"> </span>necessary
            <span class="_ _20"></span>,<span class="_ _19"> </span>or
            <span class="_ _1c"> </span>as<span class="_ _5"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>may
            <span class="_"></span>direct,<span class="_"> </span>for
            <span class="_"> </span>the<span class="_"></span>protection
            <span class="_"> </span>and
          </div>
          <div class="t m0 xe h3 y6f ff2 fs0 fc0 sc0 ls0 ws8d">
            preservation<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>property<span class="_"> </span>related
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>contract<span class="_"> </span>which
            <span class="_"> </span>is<span class="_"> </span>in
            <span class="_"> </span>the<span class="_"></span>possession
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>CM<span class="_ _1c"> </span>and
            <span class="_ _f"> </span>in
          </div>
          <div class="t m0 xe h3 yf5 ff2 fs0 fc0 sc0 ls0 ws1">
            which the Owner has or may acquire an interest.
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws3a">
            10.5.2<span class="_ _1d"> </span>The<span class="_"> </span>CM
            <span class="_ _18"></span>shall,<span class="_"> </span>from
            <span class="_"> </span>the<span class="_"></span>effective
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"> </span>termin<span class="_ _0"></span>ation
            <span class="_"> </span>until<span class="_"> </span>the
            <span class="_"></span>expiration<span class="_"> </span>of
            <span class="_ _f"> </span>three<span class="_ _f"> </span>(3)
            <span class="_ _f"> </span>years<span class="_ _f"> </span>after
            <span class="_ _f"> </span>final
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws56">
            settlement<span class="_"> </span>under<span class="_"> </span>the
            <span class="_"> </span>contract,<span class="_"> </span>preserve
            <span class="_"> </span>and<span class="_"> </span>make
            <span class="_"> </span>available<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>,<span class="_"> </span>at
            <span class="_"> </span>all<span class="_"></span>reasonable
            <span class="_"> </span>times<span class="_"> </span>at
            <span class="_"> </span>the<span class="_"> </span>office
          </div>
          <div class="t m0 x3 h3 yf6 ff2 fs0 fc0 sc0 ls0 ws197">
            of<span class="_"> </span>the<span class="_"> </span>CM,
            <span class="_"></span>but<span class="_"> </span>without
            <span class="_"> </span>direct<span class="_"> </span>charge
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_ _20"></span>,
            <span class="_"></span>all<span class="_"> </span>his
            <span class="_"> </span>books,<span class="_"></span>records,
            <span class="_"> </span>documents<span class="_ _12"></span>and
            <span class="_ _12"> </span>other<span class="_ _12"> </span>
            evidence
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws6e">
            bearing<span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>costs<span class="_"> </span>and
            <span class="_"> </span>expenses<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>CM
            <span class="_ _17"> </span>under<span class="_"> </span>the
            <span class="_"></span>contract<span class="_"> </span>and
            <span class="_"> </span>relating<span class="_"> </span>to
            <span class="_ _6"> </span>the<span class="_ _14"> </span>work
            <span class="_ _6"> </span>terminated
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws20">
            hereunder<span class="_ _1"></span>,<span class="_"> </span>or
            <span class="_ _1"></span>,<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>extent
            <span class="_"> </span>approved<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _20"></span>,<span class="_ _14"> </span>photographs,
            <span class="_ _14"></span>micro-photographs
            <span class="_ _6"> </span>or<span class="_ _14"></span>other
            <span class="_ _6"> </span>authentic
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws1">
            reproductions thereof.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">46</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf2f" class="pf w0 h0" data-page-no="2f">
        <div class="pc pc2f w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws198">
            10.5.3<span class="_ _1d"> </span>If<span class="_ _12"> </span>the
            <span class="_ _12"> </span>termination,<span class="_"> </span>
            pursuant<span class="_"> </span>to<span class="_"> </span>Paragraph
            <span class="_"> </span>10.2,<span class="_"> </span>be
            <span class="_"> </span>partial,<span class="_"> </span>the
            <span class="_"></span>CM<span class="_ _1c"> </span>may
            <span class="_"> </span>file<span class="_"></span>with
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"></span>a<span class="_"> </span>claim
            <span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws5a">
            an<span class="_"> </span>equitable<span class="_"> </span>
            adjustment<span class="_"> </span>of<span class="_"> </span>the
            <span class="_"> </span>price<span class="_"> </span>or
            <span class="_ _f"></span>prices<span class="_ _f"> </span>specified
            <span class="_ _f"></span>in<span class="_ _f"> </span>the
            <span class="_ _f"> </span>contract<span class="_ _f"> </span>
            relating<span class="_ _10"></span>to<span class="_ _f"> </span>the
            <span class="_ _f"> </span>continued<span class="_ _f"> </span>
            portion<span class="_ _f"></span>of<span class="_ _f"> </span>the
          </div>
          <div class="t m0 x3 h3 yd8 ff2 fs0 fc0 sc0 ls0 ws4">
            contract<span class="_"> </span>(the<span class="_"> </span>portion
            <span class="_"> </span>not<span class="_"> </span>terminated
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>notice<span class="_"> </span>of
            <span class="_"></span>termination),<span class="_"> </span>and
            <span class="_"> </span>such<span class="_"> </span>equitable
            <span class="_"> </span>adjustment<span class="_"> </span>as
            <span class="_ _f"> </span>may<span class="_ _f"> </span>be
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws4">
            agreed<span class="_"> </span>upon<span class="_"> </span>shall
            <span class="_"></span>be<span class="_"> </span>made
            <span class="_"> </span>in<span class="_"></span>such
            <span class="_"> </span>price<span class="_"> </span>or
            <span class="_"></span>prices.<span class="_ _18"> </span>Any
            <span class="_"> </span>claim<span class="_ _f"> </span>by
            <span class="_ _f"> </span>the<span class="_ _f"> </span>CM
            <span class="_ _f"> </span>for<span class="_ _f"></span>an
            <span class="_ _10"> </span>equitable<span class="_ _f"> </span>
            adjustment<span class="_ _f"> </span>under
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1">
            this Paragraph must be asserted within six (6) months from the ef
            <span class="_ _0"></span>fective date of the notice of termination.
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws24">
            10.5.4<span class="_ _1d"> </span>The<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>refund
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>any
            <span class="_"></span>amounts<span class="_"> </span>paid
            <span class="_"> </span>by<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>to
            <span class="_ _12"></span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>in<span class="_ _12"> </span>excess
            <span class="_ _12"> </span>of<span class="_ _12"> </span>costs
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 ws1">
            reimbursable under Paragraph 10.4.
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws41">
            10.5.5<span class="_ _1d"> </span>The<span class="_ _6"> </span>CM
            <span class="_ _14"> </span>shall<span class="_ _6"> </span>be
            <span class="_ _14"> </span>entitled<span class="_ _6"> </span>to
            <span class="_ _14"> </span>only<span class="_ _6"> </span>those
            <span class="_ _14"> </span>damages<span class="_ _14"> </span>and
            <span class="_ _6"> </span>that<span class="_ _14"> </span>relief
            <span class="_"> </span>from<span class="_"> </span>termination
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>as
          </div>
          <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws1">
            specifically provided in <span class="_ _1"></span>Article 10.
          </div>
          <div class="t m0 x6 h2 y77 ff1 fs0 fc0 sc0 ls0 ws1">
            ARTICLE 1<span class="_ _1"></span>1
          </div>
          <div class="t m0 x1f h3 ydb ff2 fs0 fc0 sc0 ls0 ws1">
            ADDITIONAL<span class="_ _1"></span> PROVISIONS
          </div>
          <div class="t m0 x1c h2 y78 ff1 fs0 fc0 sc0 ls0 ws0">
            ____________________________
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.1<span class="_ _2a"> </span>
            Limitation and <span class="_ _1"></span>Assignment
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws199">
            1<span class="_ _20"></span>1.1.1<span class="_ _25"> </span>The
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>and
            <span class="_ _12"> </span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>each<span class="_ _12"> </span>bind
            <span class="_ _12"> </span>itself,<span class="_ _12"> </span>its
            <span class="_ _12"> </span>successors,<span class="_"> </span>
            assigns,<span class="_"> </span>insurers,<span class="_"> </span>and
            <span class="_"> </span>legal<span class="_"> </span>representatives
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            to the terms of this <span class="_ _1"></span>Agreement.
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws2a">
            1<span class="_ _20"></span>1.1.2<span class="_ _25"> </span>Neither
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>nor<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>shall
            <span class="_"> </span>assign<span class="_"></span>or
            <span class="_"> </span>transfer<span class="_ _f"> </span>its
            <span class="_ _f"> </span>rights<span class="_ _f"> </span>or
            <span class="_ _f"> </span>interest<span class="_ _10"> </span>in
            <span class="_ _f"> </span>this<span class="_ _f"> </span>Agreement
            <span class="_ _f"> </span>without
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws8d">
            the<span class="_ _6"> </span>written<span class="_"> </span>consent
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>other<span class="_ _1"></span>,
            <span class="_"> </span>except<span class="_"></span>that
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>may<span class="_"> </span>assign
            <span class="_"> </span>accounts<span class="_"> </span>receivable
            <span class="_"> </span>to<span class="_"> </span>a
            <span class="_"> </span>commercial<span class="_"></span>bank
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws13">
            for<span class="_ _19"> </span>securing<span class="_ _19"> </span>
            loans<span class="_"> </span>without<span class="_"> </span>approval
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _1"></span>,
            <span class="_"> </span>and<span class="_"></span>the
            <span class="_"> </span>Owner<span class="_"> </span>may
            <span class="_"></span>assign<span class="_"> </span>the
            <span class="_"> </span>Agreement<span class="_"> </span>to
            <span class="_"> </span>Durham
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 wsa8">
            County<span class="_"> </span>for<span class="_"> </span>any
            <span class="_"></span>reason<span class="_"> </span>without
            <span class="_"> </span>the<span class="_"> </span>consent
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>CM.<span class="_ _1d"> </span>However
            <span class="_ _1"></span>,<span class="_ _12"> </span>nothing
            <span class="_ _12"> </span>contained<span class="_ _12"></span>in
            <span class="_ _12"> </span>this<span class="_ _12"> </span>
            paragraph<span class="_ _12"> </span>can
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws119">
            prevent<span class="_ _6"> </span>the<span class="_ _14"> </span>CM
            <span class="_ _6"> </span>from<span class="_ _14"> </span>employing
            <span class="_ _6"> </span>contractors<span class="_ _14"></span>or
            <span class="_ _14"> </span>such<span class="_ _6"> </span>
            consultants,<span class="_ _14"> </span>associates
            <span class="_ _6"></span>or<span class="_ _14"> </span>
            subcontractors<span class="_ _6"></span>as
            <span class="_ _14"> </span>the<span class="_"> </span>CM
          </div>
          <div class="t m0 x3 h3 y7c ff2 fs0 fc0 sc0 ls0 ws1">
            may deem appropriate to assist in performance of the services and of
            the W<span class="_ _1"></span>ork hereunder
            <span class="_ _1"></span>.
          </div>
          <div class="t m0 x3 h3 y68 ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.2<span class="_ _2a"> </span>Governing
            Law
          </div>
          <div class="t m0 x3 h3 y69 ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.2.1<span class="_ _25"> </span>This
            <span class="_ _1"></span>Agreement shall be governed by the laws of
            the State of North Carolina.
          </div>
          <div class="t m0 x3 h3 y6a ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.2.2<span class="_ _25"> </span>CM
            <span class="_ _12"></span>shall<span class="_"> </span>comply
            <span class="_"> </span>with<span class="_"> </span>all
            <span class="_"> </span>applicable<span class="_"> </span>laws
            <span class="_"> </span>and<span class="_"> </span>regulations
            <span class="_"> </span>in<span class="_"> </span>providing
            <span class="_"> </span>services<span class="_"> </span>under
            <span class="_"> </span>this<span class="_"> </span>Agreement.
          </div>
          <div class="t m0 x3 h3 yf2 ff2 fs0 fc0 sc0 ls0 ws1d">
            CM<span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"></span>employ<span class="_"> </span>any
            <span class="_"> </span>individuals<span class="_"> </span>to
            <span class="_"> </span>provide<span class="_"> </span>services
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _f"></span>who
            <span class="_ _f"> </span>are<span class="_ _f"> </span>not
            <span class="_ _f"> </span>authorized<span class="_ _f"> </span>by
            <span class="_ _f"> </span>federal<span class="_ _f"> </span>law
          </div>
          <div class="t m0 x3 h3 y7d ff2 fs0 fc0 sc0 ls0 ws1">
            to<span class="_ _12"> </span>work<span class="_"> </span>in
            <span class="_"></span>the<span class="_"> </span>United
            <span class="_"> </span>States.
            <span class="_"> </span>CM<span class="_"> </span>represents
            <span class="_"></span>that<span class="_"> </span>it
            <span class="_"> </span>is<span class="_"></span>aware
            <span class="_"> </span>of<span class="_"> </span>and
            <span class="_"></span>in<span class="_"> </span>compliance
            <span class="_"> </span>with<span class="_"> </span>the
            <span class="_"> </span>immigration<span class="_"> </span>reform
          </div>
          <div class="t m0 x3 h3 y4c ff2 fs0 fc0 sc0 ls0 ws19a">
            and<span class="_ _19"> </span>control<span class="_ _19"> </span>
            act<span class="_ _19"> </span>and<span class="_ _19"> </span>North
            <span class="_ _19"> </span>Carolina<span class="_ _19"></span>law
            <span class="_ _19"> </span>(Article<span class="_ _19"> </span>2
            <span class="_ _19"> </span>of<span class="_"> </span>chapter
            <span class="_"></span>64<span class="_"> </span>of
            <span class="_"> </span>the<span class="_"></span>North
            <span class="_"> </span>Carolina<span class="_"> </span>General
            <span class="_"> </span>Statutes)
          </div>
          <div class="t m0 x3 h3 y6b ff2 fs0 fc0 sc0 ls0 ws1">
            requiring<span class="_ _15"> </span>use<span class="_ _15"> </span>
            of<span class="_ _15"> </span>the<span class="_ _15"> </span>
            e-verify<span class="_ _15"> </span>system.
            <span class="_ _15"> </span>CM<span class="_ _19"> </span>further
            <span class="_ _19"> </span>warrants<span class="_ _19"></span>that
            <span class="_ _19"> </span>it<span class="_ _19"> </span>will
            <span class="_ _19"> </span>use<span class="_ _19"> </span>the
            <span class="_ _19"> </span>e-verify<span class="_ _19"> </span>
            system<span class="_ _19"> </span>to<span class="_ _19"> </span>
            verify
          </div>
          <div class="t m0 x3 h3 yf3 ff2 fs0 fc0 sc0 ls0 ws167">
            employment<span class="_ _6"> </span>eligibility
            <span class="_ _14"></span>of<span class="_ _6"> </span>all
            <span class="_ _14"> </span>its<span class="_ _6"> </span>employees
            <span class="_ _14"> </span>throughout<span class="_ _14"> </span>
            the<span class="_"> </span>term<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"></span>Agreement,
            <span class="_"> </span>and<span class="_"> </span>that
            <span class="_"> </span>it<span class="_"> </span>will
            <span class="_"></span>remain<span class="_"> </span>in
          </div>
          <div class="t m0 x3 h3 y6c ff2 fs0 fc0 sc0 ls0 ws1">
            compliance<span class="_ _6"> </span>with
            <span class="_ _12"> </span>all i-9<span class="_ _12"> </span>
            requirements<span class="_ _12"></span>throughout
            <span class="_ _12"> </span>the<span class="_ _12"></span>term
            <span class="_ _12"> </span>of<span class="_ _12"> </span>this
            <span class="_ _12"> </span>Agreement.
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_ _12"></span>also<span class="_ _12"> </span>ensure
            <span class="_ _12"> </span>that<span class="_ _12"> </span>any
          </div>
          <div class="t m0 x3 h3 y50 ff2 fs0 fc0 sc0 ls0 wsc">
            subcontractors<span class="_ _12"> </span>use
            <span class="_ _12"></span>the<span class="_ _12"> </span>e-verify
            <span class="_ _12"> </span>system<span class="_ _12"> </span>at
            <span class="_ _12"> </span>all<span class="_"> </span>times
            <span class="_"> </span>while<span class="_"></span>providing
            <span class="_"> </span>subcontracted<span class="_"></span>services
            <span class="_"> </span>in<span class="_"> </span>connection
            <span class="_"> </span>with
          </div>
          <div class="t m0 x3 h3 y6d ff2 fs0 fc0 sc0 ls0 ws1">
            this <span class="_ _1"></span>Agreement<span class="_ _3"></span>.
          </div>
          <div class="t m0 x3 h3 y6e ff2 fs0 fc0 sc0 ls0 wse5">
            1<span class="_ _20"></span>1.2.3<span class="_ _25"> </span>
            Lunsford<span class="_ _12"> </span>Act/Criminal
            <span class="_ _12"></span>Background<span class="_ _12"> </span>
            Checks.<span class="_ _18"></span>The<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>shall<span class="_ _12"> </span>conduct
            <span class="_ _12"> </span>or<span class="_ _12"> </span>arrange
            <span class="_ _12"> </span>to<span class="_ _12"> </span>have
            <span class="_"> </span>conducted<span class="_"> </span>at
          </div>
          <div class="t m0 x3 h3 y54 ff2 fs0 fc0 sc0 ls0 ws77">
            its<span class="_ _12"> </span>own<span class="_ _12"> </span>
            expense<span class="_ _12"> </span>sexual<span class="_ _12"></span>
            offender<span class="_ _12"> </span>registry
            <span class="_ _12"></span>checks<span class="_ _12"> </span>on
            <span class="_ _12"> </span>each<span class="_ _12"> </span>of
            <span class="_ _12"> </span>its<span class="_ _12"> </span>
            employees,<span class="_ _12"></span>agents,<span class="_"> </span>
            ownership<span class="_"> </span>pers<span class="_ _0"></span>
            onnel,<span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y6f ff2 fs0 fc0 sc0 ls0 wsd8">
            contractors<span class="_ _15"> </span>(“contractual
            <span class="_ _15"></span>personnel”)<span class="_ _1c"> </span>
            who<span class="_"> </span>will<span class="_"> </span>engage
            <span class="_"> </span>in<span class="_"></span>any
            <span class="_"> </span>service<span class="_"> </span>on
            <span class="_"></span>or<span class="_"> </span>delivery
            <span class="_"> </span>of<span class="_"></span>goods
            <span class="_"> </span>to<span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 yf5 ff2 fs0 fc0 sc0 ls0 ws5b">
            property<span class="_ _12"> </span>or<span class="_ _12"> </span>at
            <span class="_ _12"> </span>a<span class="_ _12"> </span>
            school-system<span class="_ _12"> </span>sponsored
            <span class="_ _12"></span>event,<span class="_ _12"> </span>except
            <span class="_ _12"> </span>checks<span class="_ _12"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"> </span>required<span class="_"></span>for
            <span class="_"> </span>individuals<span class="_"> </span>who
            <span class="_"> </span>are
          </div>
          <div class="t m0 x3 h3 y70 ff2 fs0 fc0 sc0 ls0 wsa9">
            solely<span class="_ _6"> </span>delivering
            <span class="_ _14"></span>or<span class="_ _6"> </span>picking
            <span class="_ _14"> </span>up<span class="_ _6"> </span>equipment,
            <span class="_ _14"> </span>materials,<span class="_ _14"> </span>or
            <span class="_ _6"> </span>supplies<span class="_ _14"> </span>at:
            <span class="_ _6"> </span>(1)<span class="_"> </span>the
            <span class="_"> </span>administrative<span class="_"> </span>office
            <span class="_"> </span>or<span class="_"> </span>loading
          </div>
          <div class="t m0 x3 h3 y58 ff2 fs0 fc0 sc0 ls0 ws17e">
            dock<span class="_"> </span>of<span class="_"> </span>a
            <span class="_"></span>school;<span class="_"> </span>(2)
            <span class="_"> </span>non-school<span class="_"> </span>sites;
            <span class="_"> </span>(3)<span class="_"> </span>schools
            <span class="_"> </span>closed<span class="_"> </span>for
            <span class="_"> </span>renovation;<span class="_"> </span>or
            <span class="_"> </span>(4)<span class="_"> </span>school
            <span class="_"> </span>construction<span class="_"> </span>sites.
            <span class="_ _1c"></span>The
          </div>
          <div class="t m0 x3 h3 y71 ff2 fs0 fc0 sc0 ls0 ws142">
            checks<span class="_ _15"> </span>shall<span class="_ _15"> </span>
            include<span class="_ _15"> </span>at<span class="_ _15"> </span>a
            <span class="_ _15"> </span>minimum<span class="_ _15"> </span>
            checks<span class="_ _15"> </span>of<span class="_"> </span>the
            <span class="_"> </span>state<span class="_"> </span>sex
            <span class="_"></span>offender<span class="_"> </span>and
            <span class="_"> </span>public<span class="_"> </span>protection
            <span class="_"> </span>registration
          </div>
          <div class="t m0 x3 h3 yf6 ff2 fs0 fc0 sc0 ls0 ws26">
            program,<span class="_"> </span>the<span class="_"> </span>state
            <span class="_"> </span>sexually<span class="_"> </span>violent
            <span class="_"> </span>predator<span class="_"> </span>registration
            <span class="_"> </span>program,<span class="_ _f"></span>and
            <span class="_ _f"> </span>the<span class="_ _f"> </span>national
            <span class="_ _f"> </span>sex<span class="_ _f"> </span>offender
            <span class="_ _f"> </span>registry<span class="_ _f"></span>(“the
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 wsa0">
            registries”).<span class="_ _18"> </span>For
            <span class="_ _12"></span>the<span class="_ _12"> </span>CM’s
            <span class="_ _12"> </span>convenience<span class="_ _12"> </span>
            only<span class="_ _4"></span>,<span class="_ _12"> </span>all
            <span class="_ _12"> </span>of<span class="_ _12"></span>the
            <span class="_ _12"> </span>required<span class="_"> </span>registry
            <span class="_"> </span>checks<span class="_"> </span>may
            <span class="_"> </span>be<span class="_"> </span>completed
            <span class="_"></span>at<span class="_"> </span>no
            <span class="_"> </span>cost
          </div>
          <div class="t m0 x3 h3 y61 ff2 fs0 fc0 sc0 ls0 ws10">
            by<span class="_"> </span>accessing<span class="_"> </span>the
            <span class="_"></span>united<span class="_"> </span>states
            <span class="_"> </span>department<span class="_ _12"> </span>of
            <span class="_ _12"> </span>justice<span class="_ _12"> </span>sex
            <span class="_ _12"> </span>offender<span class="_ _12"> </span>
            public<span class="_ _12"></span>webs<span class="_ _0"></span>ite
            <span class="_ _12"> </span>at<span class="_ _12"> </span>
            <span class="fc1 ws0">
              http://www<span class="_ _1"></span>.nsopw
              <span class="_ _1"></span>.gov/<span class="fc0">.</span>
            </span>
          </div>
          <div class="t m0 x3 h3 y72 ff2 fs0 fc0 sc0 ls0 ws38">
            The<span class="_"> </span>CM<span class="_"> </span>shall
            <span class="_"></span>provide<span class="_"> </span>certification
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"> </span>sexual<span class="_"></span>offender
            <span class="_"> </span>registr<span class="_ _0"></span>y
            <span class="_"> </span>check<span class="_"> </span>certification
            <span class="_"> </span>form<span class="_"> </span>(Appendix
            <span class="_"> </span>G)<span class="_"> </span>that
          </div>
          <div class="t m0 x3 h3 yf8 ff2 fs0 fc0 sc0 ls0 ws6e">
            the<span class="_"> </span>registry<span class="_"> </span>checks
            <span class="_"> </span>were<span class="_"> </span>conducted
            <span class="_"> </span>on<span class="_ _6"> </span>each
            <span class="_ _14"> </span>of<span class="_ _6"> </span>its
            <span class="_ _14"> </span>contractual<span class="_ _6"></span>
            personnel<span class="_ _14"> </span>providing
            <span class="_ _6"></span>services<span class="_ _14"> </span>or
            <span class="_ _14"> </span>delivering
          </div>
          <div class="t m0 x3 h3 y7f ff2 fs0 fc0 sc0 ls0 ws19b">
            goods<span class="_ _12"> </span>under<span class="_ _12"> </span>
            this<span class="_"> </span>Agreement<span class="_"> </span>prior
            <span class="_"> </span>to<span class="_"> </span>the
            <span class="_"></span>commencement<span class="_"> </span>of
            <span class="_"> </span>such<span class="_"> </span>services
            <span class="_"> </span>or<span class="_"></span>the
            <span class="_"> </span>delivery<span class="_"> </span>of
            <span class="_"></span>such<span class="_"> </span>goods.
            <span class="_ _1c"> </span>The
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">47</div>
          </div>
          <a class="l" href="http://sexoffender.ncdoj.gov/">
            <div
              class="d m1"
              style="
                border-style: none;
                position: absolute;
                left: 444.85144px;
                bottom: 110.551758px;
                width: 98.90149px;
                height: 11.499023px;
                background-color: rgba(255, 255, 255, 0.000001);
              "
            ></div>
          </a>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      {/* <div id="pf30" class="pf w0 h0" data-page-no="30">
        <div class="pc pc30 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws18">
            CM<span class="_ _12"> </span>shall<span class="_ _12"> </span>
            conduct<span class="_ _12"> </span>a<span class="_"> </span>current
            <span class="_"> </span>initial<span class="_"> </span>check
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>registries<span class="_"> </span>(a
            <span class="_"> </span>check<span class="_"> </span>done
            <span class="_"> </span>more<span class="_"></span>than
            <span class="_"> </span>30<span class="_"> </span>days
            <span class="_"></span>prior<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>date
            <span class="_"> </span>of
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws80">
            this<span class="_"> </span>Agreement<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>satisfy
            <span class="_ _12"> </span>this<span class="_ _12"> </span>
            contractual<span class="_ _12"> </span>obligation).
            <span class="_ _18"></span>In<span class="_ _12"> </span>addition,
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>agrees
            <span class="_ _12"> </span>to<span class="_ _12"> </span>conduct
            <span class="_ _12"> </span>the<span class="_ _12"> </span>registry
          </div>
          <div class="t m0 x3 h3 yd8 ff2 fs0 fc0 sc0 ls0 wsbc">
            checks<span class="_ _12"> </span>and<span class="_ _12"> </span>
            provide<span class="_ _12"> </span>a<span class="_"> </span>
            supplemental<span class="_"> </span>certification
            <span class="_"></span>form<span class="_"> </span>before
            <span class="_"> </span>any<span class="_"></span>additional
            <span class="_"> </span>contractual<span class="_"></span>personnel
            <span class="_"> </span>are<span class="_"> </span>used
            <span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws19c">
            deliver<span class="_"> </span>goods<span class="_"> </span>or
            <span class="_"></span>provide<span class="_"> </span>services
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"> </span>this<span class="_"></span>Agreement.
            <span class="_ _1a"> </span>CM<span class="_ _f"> </span>further
            <span class="_ _f"> </span>agrees<span class="_ _f"> </span>to
            <span class="_ _f"> </span>conduct<span class="_ _f"> </span>annual
            <span class="_ _10"> </span>registry
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws19d">
            checks<span class="_ _15"> </span>of<span class="_ _15"> </span>all
            <span class="_ _15"> </span>contractual<span class="_ _15"></span>
            personnel<span class="_ _15"> </span>and<span class="_ _15"> </span>
            provide<span class="_ _15"> </span>annual<span class="_ _15"></span>
            certifications<span class="_ _15"> </span>at
            <span class="_ _15"></span>each<span class="_ _15"> </span>
            anniversary<span class="_ _15"></span>date<span class="_"> </span>of
            <span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 wsd8">
            Agreement.<span class="_ _23"> </span>CM<span class="_ _15"> </span>
            shall<span class="_ _15"> </span>not<span class="_ _15"> </span>
            assign<span class="_ _15"> </span>any<span class="_ _15"> </span>
            individual<span class="_ _15"> </span>to<span class="_ _15"> </span>
            deliver<span class="_"> </span>goods<span class="_"> </span>or
            <span class="_"></span>provide<span class="_"> </span>services
            <span class="_"> </span>pursuant<span class="_"> </span>to
            <span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws23">
            Agreement<span class="_"> </span>if<span class="_"> </span>said
            <span class="_"></span>individual<span class="_"> </span>appears
            <span class="_"> </span>on<span class="_"> </span>any
            <span class="_"> </span>of<span class="_"></span>the
            <span class="_"> </span>listed<span class="_"> </span>registries.
            <span class="_ _1c"> </span>CM<span class="_"> </span>agrees
            <span class="_"> </span>that<span class="_"> </span>it
            <span class="_"></span>will<span class="_"> </span>maintain
            <span class="_"> </span>all<span class="_"> </span>records
          </div>
          <div class="t m0 x3 h3 y74 ff2 fs0 fc0 sc0 ls0 wse5">
            and<span class="_ _12"> </span>documents<span class="_ _12"> </span>
            necessary<span class="_"> </span>to<span class="_"> </span>
            demonstrate<span class="_"> </span>that<span class="_"> </span>it
            <span class="_"> </span>has<span class="_"> </span>conducted
            <span class="_"></span>a<span class="_"> </span>thorough
            <span class="_"> </span>check<span class="_"></span>of
            <span class="_"> </span>the<span class="_"> </span>registries
            <span class="_"> </span>as<span class="_"> </span>to
            <span class="_"></span>each
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws116">
            contractual<span class="_ _12"> </span>personnel,
            <span class="_ _12"></span>and<span class="_ _12"> </span>agrees
            <span class="_ _12"> </span>to<span class="_ _12"> </span>provide
            <span class="_ _12"> </span>such<span class="_ _12"> </span>records
            <span class="_ _12"> </span>and<span class="_ _12"> </span>documents
            <span class="_ _12"> </span>to<span class="_ _12"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>upon
            <span class="_"> </span>request.<span class="_ _1c"> </span>CM
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 wsac">
            specifically<span class="_ _12"> </span>acknowledges
            <span class="_ _12"></span>that<span class="_ _12"> </span>the
            <span class="_ _12"> </span>Owner<span class="_ _12"> </span>retains
            <span class="_ _12"> </span>the<span class="_ _12"> </span>right
            <span class="_ _12"> </span>to<span class="_ _12"> </span>audit
            <span class="_ _12"> </span>these<span class="_ _12"> </span>records
            <span class="_ _12"> </span>to<span class="_ _12"> </span>ensure
            <span class="_ _12"> </span>compliance<span class="_"> </span>with
          </div>
          <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws162">
            this<span class="_ _12"> </span>section<span class="_ _12"> </span>
            at<span class="_"> </span>any<span class="_"> </span>time
            <span class="_"></span>in<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>sole<span class="_"> </span>discretion.
            <span class="_ _1c"> </span>Failure<span class="_"></span>to
            <span class="_"> </span>comply<span class="_"> </span>with
            <span class="_"></span>the<span class="_"> </span>terms
            <span class="_"> </span>of<span class="_"></span>this
            <span class="_"> </span>provision<span class="_"> </span>shall
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws6e">
            be<span class="_"> </span>deemed<span class="_"> </span>a
            <span class="_ _6"></span>material<span class="_ _14"> </span>breach
            <span class="_ _6"></span>of<span class="_ _14"> </span>the
            <span class="_ _6"> </span>agreement.<span class="_ _13"> </span>In
            <span class="_ _6"> </span>addition,<span class="_ _14"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"> </span>may
            <span class="_ _14"> </span>conduct<span class="_ _6"> </span>
            additional<span class="_ _14"></span>criminal
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 ws12f">
            records<span class="_"> </span>checks<span class="_"> </span>at
            <span class="_"></span>the<span class="_"> </span>school
            <span class="_"> </span>system’s<span class="_"> </span>expense.
            <span class="_ _2"> </span>If<span class="_"> </span>the
            <span class="_ _14"> </span>Owner<span class="_ _6"></span>exercises
            <span class="_ _14"> </span>this<span class="_ _6"> </span>right
            <span class="_ _14"> </span>to<span class="_ _14"> </span>conduct
            <span class="_ _6"> </span>additional
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws19e">
            criminal<span class="_ _12"> </span>records
            <span class="_ _12"></span>checks,<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>agrees<span class="_ _12"> </span>to
            <span class="_ _12"> </span>provide<span class="_ _12"> </span>
            within<span class="_ _12"></span>seven<span class="_ _12"> </span>
            (7)<span class="_ _12"> </span>days<span class="_ _12"> </span>of
            <span class="_ _12"> </span>request<span class="_ _12"> </span>the
            <span class="_ _12"> </span>full<span class="_ _12"> </span>name,
            <span class="_"> </span>date<span class="_"> </span>of
            <span class="_"> </span>birth,
          </div>
          <div class="t m0 x3 h3 ydb ff2 fs0 fc0 sc0 ls0 ws19f">
            state<span class="_ _19"> </span>of<span class="_ _19"> </span>
            residency<span class="_ _19"> </span>for<span class="_ _19"> </span>
            the<span class="_ _19"> </span>past<span class="_ _19"> </span>ten
            <span class="_ _19"> </span>years,<span class="_ _19"> </span>and
            <span class="_"> </span>any<span class="_"> </span>additional
            <span class="_"> </span>information<span class="_"></span>requested
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_"> </span>for
            <span class="_"> </span>all
          </div>
          <div class="t m0 x3 h3 y78 ff2 fs0 fc0 sc0 ls0 wsbf">
            contractual<span class="_ _12"> </span>personnel
            <span class="_ _12"></span>who<span class="_ _12"> </span>may
            <span class="_ _12"> </span>deliver<span class="_ _12"> </span>goods
            <span class="_ _12"> </span>or<span class="_ _12"> </span>perform
            <span class="_ _12"> </span>services<span class="_"> </span>under
            <span class="_"> </span>this<span class="_"> </span>Agreement.
            <span class="_ _1c"> </span>CM<span class="_"> </span>further
            <span class="_"> </span>agrees
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 ws4">
            that<span class="_"> </span>it<span class="_"> </span>has
            <span class="_"></span>an<span class="_"> </span>ongoing
            <span class="_"> </span>obligation<span class="_"> </span>to
            <span class="_"> </span>provide<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>with
            <span class="_"> </span>the<span class="_"></span>name
            <span class="_"> </span>of<span class="_ _f"> </span>any
            <span class="_ _f"></span>new<span class="_ _f"> </span>contractual
            <span class="_ _f"> </span>personnel<span class="_ _f"> </span>who
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1a0">
            may<span class="_"> </span>deliver<span class="_"> </span>goods
            <span class="_"></span>or<span class="_"> </span>provide
            <span class="_"> </span>services<span class="_"> </span>under
            <span class="_"> </span>the<span class="_"> </span>Agreement.
            <span class="_ _17"> </span>Owner<span class="_"> </span>reserves
            <span class="_"> </span>the<span class="_"> </span>right
            <span class="_"> </span>to<span class="_ _6"></span>prohibit
            <span class="_ _14"> </span>any
          </div>
          <div class="t m0 x3 h3 ydc ff2 fs0 fc0 sc0 ls0 ws128">
            contractual<span class="_ _19"> </span>personnel
            <span class="_ _19"></span>of<span class="_ _19"> </span>CM
            <span class="_ _19"> </span>from<span class="_ _19"> </span>
            delivering<span class="_ _19"></span>goods<span class="_"> </span>or
            <span class="_"> </span>providing<span class="_"> </span>services
            <span class="_"> </span>under<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>if
            <span class="_"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y79 ff2 fs0 fc0 sc0 ls0 ws6a">
            determines,<span class="_"> </span>in<span class="_"> </span>its
            <span class="_"> </span>sole<span class="_"> </span>discretion,
            <span class="_"> </span>that<span class="_"> </span>such
            <span class="_"> </span>contractual<span class="_"> </span>personnel
            <span class="_"> </span>may<span class="_"> </span>pose
            <span class="_ _19"> </span>a<span class="_ _19"> </span>threat
            <span class="_ _19"> </span>to<span class="_ _19"> </span>the
            <span class="_ _19"> </span>safety<span class="_ _19"> </span>or
          </div>
          <div class="t m0 x3 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            well-being of students, school personnel or others.
          </div>
          <div class="t m0 x3 h3 ydd ff2 fs0 fc0 sc0 ls0 ws75">
            1<span class="_ _20"></span>1.2.4<span class="_ _25"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>represents
            <span class="_"> </span>that<span class="_"> </span>as
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>date<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"></span>Agreement,
            <span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"> </span>is<span class="_"> </span>not
            <span class="_"></span>included<span class="_"> </span>on
            <span class="_"> </span>the<span class="_"></span>final
          </div>
          <div class="t m0 x3 h3 y83 ff2 fs0 fc0 sc0 ls0 ws1">
            divestment<span class="_ _12"> </span>list
            <span class="_ _12"></span>created<span class="_ _12"> </span>by
            <span class="_ _12"> </span>the<span class="_ _12"> </span>North
            <span class="_ _12"> </span>Carolina<span class="_ _12"> </span>
            state<span class="_ _12"></span>treasurer
            <span class="_ _12"> </span>pursuant<span class="_ _12"></span>to
            <span class="_ _12"> </span>N.C.<span class="_ _12"> </span>Gen.
            <span class="_ _12"> </span>Stat.<span class="_ _12"> </span>§
            <span class="_"> </span>147-86.58. <span class="_"> </span> T
            <span class="_ _0"></span>he
          </div>
          <div class="t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws36">
            CM<span class="_ _6"> </span>also<span class="_ _14"> </span>
            represents<span class="_ _6"> </span>that<span class="_ _14"></span>
            as<span class="_ _6"> </span>of<span class="_ _14"> </span>the
            <span class="_ _14"></span>date<span class="_ _6"> </span>of
            <span class="_ _14"> </span>this<span class="_ _6"> </span>
            Agreement,<span class="_ _14"></span>the<span class="_ _6"> </span>
            CM<span class="_ _14"> </span>is<span class="_ _14"></span>not
            <span class="_ _6"> </span>included<span class="_"> </span>on
            <span class="_"> </span>the<span class="_"> </span>list
            <span class="_"></span>of<span class="_"> </span>restricted
          </div>
          <div class="t m0 x3 h3 y7b ff2 fs0 fc0 sc0 ls0 ws10">
            companies<span class="_"> </span>determined<span class="_"> </span>
            to<span class="_"> </span>be<span class="_"> </span>engaged
            <span class="_"></span>in<span class="_"> </span>a
            <span class="_"> </span>boycott<span class="_"></span>of
            <span class="_"> </span>Israel<span class="_"> </span>created
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"></span>North<span class="_ _12"> </span>Carolina
            <span class="_ _12"></span>state<span class="_ _12"> </span>
            treasurer
          </div>
          <div class="t m0 x3 h3 yde ff2 fs0 fc0 sc0 ls0 ws1">
            pursuant to N.C. Gen. Stat. § 147-86.81.
          </div>
          <div class="t m0 x3 h3 yf9 ff2 fs0 fc0 sc0 ls0 ws91">
            1<span class="_ _20"></span>1.2.5<span class="_ _25"> </span>
            Anti-Nepotism.<span class="_ _17"> </span>The
            <span class="_ _19"></span>CM<span class="_ _19"> </span>warrants
            <span class="_ _19"> </span>that,<span class="_ _19"> </span>to
            <span class="_ _19"> </span>the<span class="_ _19"> </span>best
            <span class="_ _19"> </span>of<span class="_ _19"> </span>its
            <span class="_ _19"> </span>knowledge<span class="_ _19"> </span>and
            <span class="_"> </span>in<span class="_"> </span>the
            <span class="_"> </span>exercise<span class="_"></span>of
            <span class="_"> </span>due
          </div>
          <div class="t m0 x3 h3 yfa ff2 fs0 fc0 sc0 ls0 wse">
            diligence,<span class="_"> </span>none<span class="_"> </span>of
            <span class="_"> </span>its<span class="_"> </span>corporate
            <span class="_"></span>officers,<span class="_"> </span>directors
            <span class="_ _0"></span>,<span class="_"> </span>or
            <span class="_"> </span>trustees<span class="_"></span>and
            <span class="_"> </span>none<span class="_"> </span>of
            <span class="_"></span>its<span class="_"> </span>employees
            <span class="_"> </span>who<span class="_ _12"> </span>will
            <span class="_ _12"> </span>directly
          </div>
          <div class="t m0 x3 h3 yfb ff2 fs0 fc0 sc0 ls0 ws56">
            provide<span class="_ _12"> </span>services
            <span class="_ _12"></span>under<span class="_ _12"> </span>this
            <span class="_ _12"> </span>Agreement<span class="_ _12"> </span>are
            <span class="_ _12"> </span>immediate<span class="_ _12"> </span>
            family<span class="_ _12"></span>members<span class="_"> </span>of
            <span class="_"> </span>any<span class="_"></span>member
            <span class="_"> </span>of<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>Board
          </div>
          <div class="t m0 x3 h3 yfc ff2 fs0 fc0 sc0 ls0 ws42">
            of<span class="_"> </span>Education<span class="_"> </span>or
            <span class="_"></span>of<span class="_"> </span>any
            <span class="_"> </span>principal<span class="_"></span>or
            <span class="_"> </span>central<span class="_"> </span>office
            <span class="_ _f"> </span>staf<span class="_ _1"></span>f
            <span class="_ _f"> </span>administrator<span class="_ _10"></span>
            employed<span class="_ _f"> </span>by<span class="_ _f"> </span>the
            <span class="_ _f"> </span>Owner<span class="_ _1"></span>.
            <span class="_ _1c"></span>For<span class="_ _f"> </span>purposes
            <span class="_ _10"> </span>of
          </div>
          <div class="t m0 x3 h3 yfd ff2 fs0 fc0 sc0 ls0 ws1a1">
            this<span class="_"> </span>provision,<span class="_"> </span>
            “immediate<span class="_"> </span>family”<span class="_"> </span>
            means<span class="_"> </span>spouse,<span class="_"> </span>parent,
            <span class="_"> </span>child,<span class="_"> </span>brother
            <span class="_ _20"></span>,<span class="_"> </span>sister
            <span class="_ _1"></span>,<span class="_"> </span>grandparent,
            <span class="_"> </span>or<span class="_ _12"> </span>grandchild,
          </div>
          <div class="t m0 x3 h3 yfe ff2 fs0 fc0 sc0 ls0 ws1">
            and<span class="_ _6"> </span>includes<span class="_ _14"> </span>
            step,<span class="_ _6"> </span>half,<span class="_ _14"> </span>and
            <span class="_ _6"> </span>in-law<span class="_ _14"> </span>
            relationships. <span class="_ _14"> </span>Should
            <span class="_ _6"></span>the<span class="_ _12"> </span>CM
            <span class="_ _12"> </span>become<span class="_ _12"> </span>aware
            <span class="_ _12"> </span>of<span class="_ _12"> </span>any
            <span class="_ _12"> </span>family<span class="_ _12"> </span>
            relationship
          </div>
          <div class="t m0 x3 h3 yff ff2 fs0 fc0 sc0 ls0 ws6e">
            covered<span class="_"> </span>by<span class="_"> </span>this
            <span class="_"></span>provision<span class="_"> </span>or
            <span class="_"> </span>should<span class="_"> </span>such
            <span class="_"> </span>a<span class="_"></span>family
            <span class="_"> </span>relationship<span class="_"> </span>arise
            <span class="_"> </span>at<span class="_"> </span>any
            <span class="_"></span>time<span class="_"> </span>during
            <span class="_ _6"> </span>the<span class="_ _14"> </span>term
            <span class="_ _6"> </span>of<span class="_ _14"> </span>this
          </div>
          <div class="t m0 x3 h3 y100 ff2 fs0 fc0 sc0 ls0 ws1">
            Agreement,<span class="_"> </span>the<span class="_"> </span>CM
            <span class="_"></span>shall<span class="_"> </span>immediately
            <span class="_"> </span>disclose<span class="_"> </span>the
            <span class="_"> </span>family<span class="_"> </span>relationship
            <span class="_"> </span>in<span class="_"> </span>writing
            <span class="_"> </span>to<span class="_"></span>the
            <span class="_"> </span>superintendent.
            <span class="_"> </span>Unless
          </div>
          <div class="t m0 x3 h3 y101 ff2 fs0 fc0 sc0 ls0 ws1a2">
            formally<span class="_"> </span>waived<span class="_"> </span>by
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _1"></span>,<span class="_"> </span>the
            <span class="_"> </span>existence<span class="_"></span>of
            <span class="_"> </span>a<span class="_"> </span>family
            <span class="_"></span>relationship<span class="_"> </span>covered
            <span class="_"> </span>by<span class="_"> </span>this
            <span class="_"> </span>Agreement<span class="_"> </span>is
            <span class="_"> </span>grounds<span class="_"> </span>for
          </div>
          <div class="t m0 x3 h3 y102 ff2 fs0 fc0 sc0 ls0 ws1">
            immediate termination by Owner without further financial liability
            to the CM.
          </div>
          <div class="t m0 x3 h3 y97 ff2 fs0 fc0 sc0 ls0 ws10">
            1<span class="_ _20"></span>1.2.6<span class="_ _25"> </span>Sales
            <span class="_"> </span>and<span class="_"> </span>Use
            <span class="_"></span>T<span class="_ _4"></span>ax.
            <span class="_"> </span>CM<span class="_"></span>shall
            <span class="_"> </span>be<span class="_"> </span>responsible
            <span class="_"> </span>for<span class="_"> </span>complying
            <span class="_"> </span>with<span class="_"> </span>any
            <span class="_ _12"> </span>applicable<span class="_ _12"></span>
            sales<span class="_ _12"> </span>and<span class="_ _12"> </span>use
            <span class="_ _12"> </span>tax
          </div>
          <div class="t m0 x3 h3 y103 ff2 fs0 fc0 sc0 ls0 ws1">
            obligations<span class="_ _12"> </span>imposed
            <span class="_ _12"></span>by<span class="_ _12"> </span>chapter
            <span class="_ _12"> </span>105,<span class="_ _12"> </span>Article
            <span class="_ _12"> </span>5<span class="_ _12"> </span>of
            <span class="_ _12"> </span>the<span class="_ _12"></span>North
            <span class="_ _12"> </span>Carolina<span class="_ _12"></span>
            General<span class="_ _12"> </span>Statutes.
            <span class="_ _12"></span>
            Where<span class="_ _12"> </span>CM<span class="_"> </span>has
            <span class="_"></span>been
          </div>
          <div class="t m0 x3 h3 y104 ff2 fs0 fc0 sc0 ls0 ws26">
            contracted<span class="_"> </span>with<span class="_"> </span>to
            <span class="_"> </span>oversee<span class="_"> </span>“new
            <span class="_ _f"></span>construction”<span class="_ _f"> </span>or
            <span class="_ _f"></span>“reconstruction”
            <span class="_ _f"> </span>as<span class="_ _f"></span>defined
            <span class="_ _f"> </span>in<span class="_ _10"> </span>G.S.
            <span class="_ _f"> </span>105-164.4h,<span class="_ _f"></span>CM
            <span class="_ _f"> </span>shall<span class="_ _f"> </span>be
          </div>
          <div class="t m0 x3 h3 y99 ff2 fs0 fc0 sc0 ls0 ws1">
            responsible for issuing and maintaining an “af
            <span class="_ _0"></span>fidavit of capital improvement.
          </div>
          <div class="t m0 x3 h3 ycf ff2 fs0 fc0 sc0 ls0 wsc7">
            1<span class="_ _20"></span>1.2.7<span class="_ _25"> </span>The
            <span class="_ _19"> </span>CM<span class="_ _19"> </span>shall
            <span class="_ _19"> </span>comply<span class="_ _19"> </span>with
            <span class="_ _19"> </span>the<span class="_ _19"> </span>above
            <span class="_ _19"> </span>listed<span class="_ _19"> </span>and
            <span class="_ _19"> </span>all<span class="_ _19"> </span>
            applicable<span class="_ _19"> </span>laws
            <span class="_ _19"></span>and<span class="_"> </span>regulations
            <span class="_"> </span>in<span class="_"> </span>providing
          </div>
          <div class="t m0 x3 h3 y105 ff2 fs0 fc0 sc0 ls0 ws1">
            services under this <span class="_ _1"></span>Agreement
            <span class="_ _3"></span>.
          </div>
          <div class="t m0 x3 h3 y106 ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.3<span class="_ _2a"> </span>Extent of
            <span class="_ _1"></span>Agreement
          </div>
          <div class="t m0 x3 h3 y107 ff2 fs0 fc0 sc0 ls0 ws190">
            1<span class="_ _20"></span>1.3.1<span class="_ _25"> </span>This
            <span class="_ _12"> </span>Agreement<span class="_"> </span>
            represents<span class="_"> </span>the<span class="_"> </span>entire
            <span class="_"> </span>and<span class="_"> </span>integrated
            <span class="_"> </span>agreement<span class="_"> </span>between
            <span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_"> </span>and<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 y108 ff2 fs0 fc0 sc0 ls0 ws1a3">
            supersedes<span class="_ _12"> </span>all
            <span class="_ _12"> </span>prior<span class="_ _12"> </span>
            negotiations,<span class="_"></span>representations
            <span class="_"> </span>or<span class="_"> </span>agreements,
            <span class="_"> </span>either<span class="_"> </span>written
            <span class="_"> </span>or<span class="_"> </span>oral.
            <span class="_ _1c"></span>This<span class="_"> </span>Agreement
            <span class="_"> </span>may
          </div>
          <div class="t m0 x3 h3 y109 ff2 fs0 fc0 sc0 ls0 ws6a">
            be<span class="_"> </span>modified<span class="_"> </span>or
            <span class="_"></span>amended<span class="_"> </span>only
            <span class="_"> </span>by<span class="_"></span>written
            <span class="_"> </span>instrument<span class="_"> </span>signed
            <span class="_ _19"> </span>by<span class="_ _19"> </span>both
            <span class="_ _19"> </span>the<span class="_ _19"> </span>Owner
            <span class="_ _19"> </span>and<span class="_ _19"> </span>the
            <span class="_ _19"> </span>CM.<span class="_ _17"> </span>Nothing
          </div>
          <div class="t m0 x3 h3 y10a ff2 fs0 fc0 sc0 ls0 ws139">
            contained<span class="_ _6"> </span>in<span class="_ _14"> </span>
            this<span class="_"> </span>Agreement<span class="_"> </span>is
            <span class="_"> </span>intended<span class="_"> </span>to
            <span class="_"></span>benefit<span class="_"> </span>any
            <span class="_"> </span>third<span class="_"> </span>party
            <span class="_ _20"></span>.<span class="_ _18"></span>The
            <span class="_"> </span>Contractors<span class="_"> </span>and
            <span class="_"> </span>Design<span class="_"> </span>Consultant
          </div>
          <div class="t m0 x3 h3 y10b ff2 fs0 fc0 sc0 ls0 wscc">
            are<span class="_ _6"> </span>not<span class="_ _14"> </span>
            intended<span class="_ _6"> </span>third<span class="_ _14"> </span>
            party<span class="_ _6"> </span>beneficiaries
            <span class="_ _14"></span>of<span class="_ _14"> </span>this
            <span class="_"> </span>Agreement.<span class="_ _18"> </span>This
            <span class="_"> </span>Agreement<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>be
            <span class="_"> </span>construed<span class="_"></span>more
          </div>
          <div class="t m0 x3 h3 y10c ff2 fs0 fc0 sc0 ls0 ws1a4">
            strictly<span class="_ _12"> </span>against
            <span class="_ _12"></span>one<span class="_ _12"> </span>party
            <span class="_ _12"> </span>than<span class="_ _12"> </span>the
            <span class="_ _12"> </span>other<span class="_ _12"> </span>merely
            <span class="_ _12"> </span>by<span class="_ _12"> </span>virtue
            <span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>fact<span class="_ _12"> </span>that
            <span class="_ _12"> </span>it<span class="_ _12"> </span>has
            <span class="_ _12"> </span>been<span class="_ _12"> </span>prepared
            <span class="_"> </span>initially<span class="_"> </span>by
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y10d ff2 fs0 fc0 sc0 ls0 ws42">
            Owner<span class="_ _1"></span>,<span class="_"> </span>it
            <span class="_"></span>being<span class="_"> </span>recognized
            <span class="_"> </span>that<span class="_"> </span>both
            <span class="_"> </span>parties<span class="_"> </span>and
            <span class="_"> </span>their<span class="_ _f"> </span>respective
            <span class="_ _f"></span>counsel<span class="_ _f"> </span>have
            <span class="_ _f"> </span>had<span class="_ _f"> </span>a
            <span class="_ _f"> </span>full<span class="_ _10"></span>and
            <span class="_ _f"> </span>fair<span class="_ _f"> </span>
            opportunity
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">48</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      <div id="pf31" class="pf w0 h0" data-page-no="31">
        <div class="pc pc31 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfbUlEQVR42uzZwWlgMRBEwe1F+afcTsBg+INAQlUh9O3NpO0/AAAAGPhvAgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAbWkCAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAABtaQIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAG1pAgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAbWkCAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAIDnLROcIIkRYKu2RgAA2MffEgAAgKm45QMAADDkbwkAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAPDNMsEJkhiBZ7U1AgDA7fwtAQAAmIqPAQAAAEP+lgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAAt1omOEESI/CstkYAALidvyUAAABT8TEAAABgyN8SAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAADgm2WCEyQxAs9qawQAgNv5WwIAADAVHwMAAACG/C0BAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA+MsywQmSGAG2amsEAIB9/C0BAACYils+AAAAQ/6WAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA3ywTnCCJEXhWWyMAANzO3xIAAICp+BgAAAAw5G8JAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAHCrZYITJDECz2prBACA2/lbAgAAMBUfAwAAAIb8LQEAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAL5ZJjhBEiPwrLZGAAC4nb8lAAAAU/ExAAAAYMjfEgAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA+M0ywQmSGAG2amsEAIB9/C0BAACYils+AAAAQ/6WAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAAC3WiY4QRIj8Ky2RgAAuJ2/JQAAAFPxMQAAAGDI3xIAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAOCbZYITJDECz2prBACA2/lbAgAAMBUfAwAAAIb8LQEAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAbrVMcIIkRuBZbY0AAHA7f0sAAACm4mMAAADAkL8lAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoy5/265gGAACGYZjCn/RA7KpkQ8gXAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAATKhEAAAA4OsA1vNXSA7BvzoAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws66">
            to<span class="_"> </span>negotiate<span class="_"> </span>and
            <span class="_"></span>review<span class="_"> </span>the
            <span class="_"> </span>terms<span class="_"></span>and
            <span class="_ _12"> </span>provisions<span class="_ _12"></span>of
            <span class="_ _12"> </span>this<span class="_ _12"> </span>
            Agreement<span class="_ _12"> </span>and<span class="_ _12"> </span>
            to<span class="_ _12"> </span>contribute<span class="_ _12"> </span>
            to<span class="_ _12"> </span>its<span class="_ _12"> </span>
            substance<span class="_ _12"> </span>and
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws0">form.</div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1a5">
            1<span class="_ _20"></span>1.4<span class="_"> </span>Severability
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
            of T<span class="_ _2b"></span>erms
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
            <span class="_ _f"> </span>the<span class="_ _f"> </span>individual
            <span class="_ _f"> </span>or<span class="_ _f"> </span>to
            <span class="_ _f"> </span>a<span class="_ _10"></span>member
            <span class="_ _f"> </span>of<span class="_ _f"> </span>the
            <span class="_ _f"> </span>firm<span class="_ _f"> </span>or
            <span class="_ _10"> </span>to<span class="_ _f"> </span>an
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1a7">
            officer<span class="_ _12"> </span>of<span class="_ _12"> </span>the
            <span class="_ _12"> </span>corporation<span class="_ _12"></span>
            for<span class="_"> </span>whom<span class="_"> </span>it
            <span class="_"></span>is<span class="_"> </span>intended
            <span class="_"> </span>or<span class="_"></span>if
            <span class="_"> </span>delivered<span class="_"> </span>or
            <span class="_"></span>sent<span class="_"> </span>by
            <span class="_"> </span>r<span class="_ _0"></span>egistered
            <span class="_"> </span>or<span class="_"> </span>certified
            <span class="_"> </span>mail,<span class="_"> </span>postage
          </div>
          <div class="t m0 x3 h3 ydc ff2 fs0 fc0 sc0 ls0 ws1">
            prepaid, or by facsimile, addressed as follows:
          </div>
          <div class="t m0 x18 h3 yb ff2 fs0 fc0 sc0 ls0 ws1">
            T<span class="_ _4"></span>o the Owner:
          </div>
          <div class="t m0 x3 h3 y7a ff2 fs0 fc0 sc0 ls0 ws0">
            F34_______________________
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
            F35_______________________
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
            F36_______________________
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
            acknowledges<span class="_"> </span>that<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _3"></span>’s
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
                In<span class="_ _14"> </span>addition<span class="_ _6"></span>
                to<span class="_"> </span>complying<span class="_"> </span>with
                <span class="_"> </span>the<span class="_"> </span>Owner
                <span class="_ _3"></span>’s
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
            concealed,<span class="_ _6"> </span>any<span class="_ _14"> </span>
            gun,<span class="_"> </span>rifle,<span class="_"> </span>pistol,
            <span class="_"> </span>or<span class="_"> </span>explosive
            <span class="_"> </span>on<span class="_"> </span>any
            <span class="_"></span>property<span class="_"> </span>owned
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_ _1"></span>.
            <span class="_ _18"> </span>This<span class="_"> </span>includes
            <span class="_"> </span>firearms
          </div>
          <div class="t m0 x3 h3 y7e ff2 fs0 fc0 sc0 ls0 ws26">
            locked<span class="_"> </span>in<span class="_"> </span>containers,
            <span class="_"> </span>vehicles<span class="_"> </span>or
            <span class="_"> </span>firearm<span class="_"> </span>racks
            <span class="_"></span>within<span class="_"> </span>vehicles.
            <span class="_"> </span>The<span class="_ _f"> </span>CM,
            <span class="_ _f"> </span>the<span class="_ _f"> </span>contractors
            <span class="_ _f"> </span>and<span class="_ _f"> </span>their
            <span class="_ _f"> </span>employees
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
      {/* <div id="pf32" class="pf w0 h0" data-page-no="32">
        <div class="pc pc32 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAezklEQVR42uzXMQEAAAjDMMC/500EbyKhXzfJAAAAwMNJAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAADgLSUAAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAPCWEgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsJAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAAC8pQQAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN5SAgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAbykBAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAIC3lAAAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFtKAAAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWALT9OqYBAIBhGKbwJz0QuyrZEPIFAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAAG8pAQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAt5QAAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAMBbSgAAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAA4C0lAAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAAWFKJAAAAwNcB48YPYFpCnZYAAAAASUVORK5CYII="
          />
          <div class="t m0 x3 h3 y1 ff2 fs0 fc0 sc0 ls0 ws1ac">
            1<span class="_ _20"></span>1.7.3<span class="_ _25"> </span>The
            <span class="_"> </span>CM,<span class="_"> </span>the
            <span class="_"></span>contractors<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>employees,
            <span class="_"> </span>are<span class="_"> </span>prohibited
            <span class="_"> </span>from<span class="_"> </span>profane,
            <span class="_"> </span>lewd,<span class="_"> </span>obscene
            <span class="_"> </span>or
          </div>
          <div class="t m0 x3 h3 y80 ff2 fs0 fc0 sc0 ls0 ws1">
            offensive conduct or language, including<span class="_ _0"></span>
            engaging in sexual harassment.
          </div>
          <div class="t m0 x3 h3 y73 ff2 fs0 fc0 sc0 ls0 ws1ad">
            1<span class="_ _20"></span>1.7.4<span class="_ _25"> </span>The
            <span class="_ _12"> </span>CM<span class="_"> </span>and
            <span class="_"></span>the<span class="_"> </span>contractors
            <span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"> </span>manufacture,<span class="_"> </span>
            transmit,<span class="_"></span>conspire<span class="_"> </span>to
            <span class="_"> </span>transmit,<span class="_"> </span>possess,
            <span class="_"> </span>use<span class="_"> </span>or
            <span class="_"> </span>be
          </div>
          <div class="t m0 x3 h3 y10 ff2 fs0 fc0 sc0 ls0 ws1ae">
            under<span class="_ _15"> </span>the<span class="_ _15"> </span>
            influence<span class="_ _15"> </span>of<span class="_ _15"> </span>
            any<span class="_ _15"> </span>alcoholic<span class="_"> </span>or
            <span class="_"> </span>other<span class="_"> </span>intoxicating
            <span class="_"> </span>beverage,<span class="_"></span>narcotic
            <span class="_"> </span>drug,<span class="_"> </span>hallucinogenic
            <span class="_"> </span>drug,
          </div>
          <div class="t m0 x3 h3 y81 ff2 fs0 fc0 sc0 ls0 wsdc">
            amphetamine,<span class="_ _6"> </span>barbiturate,
            <span class="_ _14"></span>marijuana<span class="_"> </span>or
            <span class="_"> </span>anabolic<span class="_"> </span>steroids,
            <span class="_"> </span>or<span class="_"> </span>possess,
            <span class="_"> </span>use,<span class="_"></span>transmit
            <span class="_"> </span>or<span class="_"> </span>conspire
            <span class="_"> </span>to<span class="_"> </span>transmit
          </div>
          <div class="t m0 x3 h3 yd9 ff2 fs0 fc0 sc0 ls0 ws1">
            drug paraphernalia on any property owned by the Owner
            <span class="_ _20"></span>.
          </div>
          <div class="t m0 x3 h3 y12 ff2 fs0 fc0 sc0 ls0 ws8c">
            1<span class="_ _20"></span>1.7.5<span class="_ _25"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>and
            <span class="_"></span>the<span class="_"> </span>contractors
            <span class="_"> </span>may<span class="_"> </span>not
            <span class="_"> </span>at<span class="_"></span>any
            <span class="_"> </span>time<span class="_"> </span>use
            <span class="_"></span>or<span class="_"> </span>display
            <span class="_"> </span>tobacco<span class="_ _6"> </span>or
            <span class="_ _14"> </span>nicotine-containing
          </div>
          <div class="t m0 x3 h3 y75 ff2 fs0 fc0 sc0 ls0 ws14a">
            products,<span class="_ _12"> </span>including
            <span class="_ _12"></span>but<span class="_ _12"> </span>not
            <span class="_"> </span>limited<span class="_"> </span>to
            <span class="_"> </span>electronic<span class="_"> </span>cigarettes
            <span class="_"> </span>(e-cigarettes),<span class="_"> </span>on
            <span class="_"> </span>school<span class="_"> </span>premises,
            <span class="_"> </span>both<span class="_"> </span>indoor
            <span class="_"> </span>and
          </div>
          <div class="t m0 x3 h3 yda ff2 fs0 fc0 sc0 ls0 ws21">
            outdoor<span class="_ _1"></span>.<span class="_ _12"> </span>The
            <span class="_ _12"> </span>prohibition<span class="_ _12"></span>of
            <span class="_ _12"> </span>the<span class="_ _12"> </span>display
            <span class="_"> </span>of<span class="_"> </span>tobacco
            <span class="_"> </span>or<span class="_"> </span>nicotine
            <span class="_"> </span>products<span class="_"> </span>shall
            <span class="_"> </span>not<span class="_"> </span>extend
            <span class="_"></span>to<span class="_"> </span>a
            <span class="_"> </span>display<span class="_"></span>that
            <span class="_"> </span>has<span class="_"> </span>a
          </div>
          <div class="t m0 x3 h3 y76 ff2 fs0 fc0 sc0 ls0 ws1af">
            legitimate<span class="_ _15"> </span>instructional
            <span class="_ _15"></span>or<span class="_ _15"> </span>pedagogical
            <span class="_ _15"></span>purpose.<span class="_ _23"> </span>For
            <span class="_ _15"> </span>purposes<span class="_"> </span>of
            <span class="_"> </span>this<span class="_"></span>Agreement,
            <span class="_"> </span>“tobacco<span class="_"> </span>product”
            <span class="_"> </span>is
          </div>
          <div class="t m0 x3 h3 y14 ff2 fs0 fc0 sc0 ls0 wsbe">
            defined<span class="_"> </span>to<span class="_"> </span>include
            <span class="_"> </span>cigarettes,<span class="_"> </span>cigars,
            <span class="_"> </span>blunts,<span class="_"> </span>bidis,
            <span class="_"> </span>pipes,<span class="_"> </span>chewing
            <span class="_ _19"> </span>tobacco,<span class="_ _19"></span>
            snuff,<span class="_ _5"> </span>and<span class="_ _19"> </span>any
            <span class="_ _19"> </span>other<span class="_ _19"> </span>items
          </div>
          <div class="t m0 x3 h3 y77 ff2 fs0 fc0 sc0 ls0 ws1b0">
            containing<span class="_"> </span>or<span class="_"> </span>
            reasonably<span class="_"> </span>resembling<span class="_"> </span>
            tobacco,<span class="_"> </span>tobacco<span class="_"> </span>
            products,<span class="_"> </span>or<span class="_"> </span>any
            <span class="_"></span>facsimile<span class="_ _6"> </span>thereof.
            <span class="_ _6"></span>“T<span class="_ _4"></span>obacco
            <span class="_ _14"> </span>use”
          </div>
          <div class="t m0 x3 h3 ydb ff2 fs0 fc0 sc0 ls0 ws1">
            includes smoking, chewing, dipping, or any other use of tobacco
            products.
          </div>
          <div class="t m0 x3 h3 y9 ff2 fs0 fc0 sc0 ls0 wsdc">
            1<span class="_ _20"></span>1.7.6<span class="_ _25"> </span>The
            <span class="_"> </span>CM,<span class="_"> </span>the
            <span class="_"></span>contractors<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>employees
            <span class="_"> </span>shall<span class="_"> </span>not
            <span class="_"> </span>solicit<span class="_"> </span>from
            <span class="_"> </span>or<span class="_"></span>sell
            <span class="_"> </span>to<span class="_"> </span>students
            <span class="_"></span>or<span class="_"> </span>staff
            <span class="_"> </span>within
          </div>
          <div class="t m0 x3 h3 y82 ff2 fs0 fc0 sc0 ls0 ws1">
            the Owner<span class="_ _3"></span>’s facilities or campuses, and
            shall not give gifts of an<span class="_ _0"></span>y value to
            school system employees.
          </div>
          <div class="t m0 x3 h3 y10e ff2 fs0 fc0 sc0 ls0 ws1b1">
            1<span class="_ _20"></span>1.7.7<span class="_ _25"> </span>
            Operators<span class="_ _15"> </span>of<span class="_ _15"> </span>
            all<span class="_"> </span>commercial<span class="_"> </span>
            vehicles<span class="_"> </span>on<span class="_"> </span>any
            <span class="_"></span>property<span class="_"> </span>owned
            <span class="_"> </span>by<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"></span>shall
            <span class="_"> </span>be<span class="_"> </span>subject
            <span class="_"></span>to
          </div>
          <div class="t m0 x3 h3 y10f ff2 fs0 fc0 sc0 ls0 ws1">
            post-accident, random, reasonable suspicion and follow-up testing
            for drugs and alcohol.
          </div>
          <div class="t m0 x3 h3 y110 ff2 fs0 fc0 sc0 ls0 wsbc">
            1<span class="_ _20"></span>1.7.8<span class="_ _25"> </span>The
            <span class="_"> </span>CM,<span class="_"> </span>the
            <span class="_"></span>contractors<span class="_"> </span>and
            <span class="_"> </span>their<span class="_"> </span>employees
            <span class="_"> </span>are<span class="_"> </span>prohibited
            <span class="_"> </span>from<span class="_"> </span>using
            <span class="_"> </span>access<span class="_"> </span>to
            <span class="_"> </span>the<span class="_"></span>site
            <span class="_"> </span>pursuant<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y111 ff2 fs0 fc0 sc0 ls0 wsdc">
            this<span class="_ _6"> </span>Agreement<span class="_ _14"> </span>
            as<span class="_ _6"> </span>a<span class="_ _14"> </span>means
            <span class="_ _6"> </span>to<span class="_ _14"> </span>date,
            <span class="_ _14"> </span>court,<span class="_"> </span>or
            <span class="_"> </span>enter<span class="_"> </span>into
            <span class="_"></span>a<span class="_"> </span>romantic
            <span class="_"> </span>or<span class="_"></span>sexual
            <span class="_"> </span>relationship<span class="_"> </span>with
            <span class="_"> </span>any<span class="_"> </span>student
          </div>
          <div class="t m0 x3 h3 y112 ff2 fs0 fc0 sc0 ls0 ws61">
            enrolled<span class="_"> </span>in<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>schools.<span class="_ _2"> </span>The
            <span class="_"> </span>CM<span class="_ _14"> </span>agrees
            <span class="_ _6"> </span>to<span class="_ _14"> </span>indemnify
            <span class="_ _14"> </span>the<span class="_ _6"> </span>Owner
            <span class="_ _14"> </span>for<span class="_ _6"> </span>claims
            <span class="_ _14"> </span>against<span class="_ _6"> </span>the
            <span class="_ _14"> </span>Owner
          </div>
          <div class="t m0 x3 h3 y113 ff2 fs0 fc0 sc0 ls0 ws28">
            resulting<span class="_ _6"> </span>from<span class="_ _14"> </span>
            relationships<span class="_ _6"> </span>which
            <span class="_ _14"></span>have<span class="_ _6"> </span>occurred
            <span class="_"> </span>or<span class="_"> </span>may
            <span class="_"> </span>occur<span class="_"></span>between
            <span class="_"> </span>a<span class="_"> </span>student
            <span class="_"> </span>and<span class="_"> </span>an
            <span class="_"></span>employee<span class="_"> </span>of
            <span class="_"> </span>the
          </div>
          <div class="t m0 x3 h3 y114 ff2 fs0 fc0 sc0 ls0 ws1">
            CM or the contractors.
          </div>
          <div class="t m0 x3 h3 y115 ff2 fs0 fc0 sc0 ls0 ws32">
            1<span class="_ _20"></span>1.7.9<span class="_ _25"> </span>The
            <span class="_ _14"> </span>CM,<span class="_ _6"> </span>the
            <span class="_ _14"> </span>contractors<span class="_ _6"></span>and
            <span class="_ _14"> </span>their<span class="_ _6"> </span>
            employees<span class="_ _14"> </span>shall<span class="_ _6"></span>
            not<span class="_ _14"> </span>interact<span class="_"> </span>with
            <span class="_"> </span>any<span class="_"> </span>students.
            <span class="_ _18"> </span>Nothing<span class="_"> </span>in
            <span class="_"> </span>this
          </div>
          <div class="t m0 x3 h3 y116 ff2 fs0 fc0 sc0 ls0 ws4">
            Paragraph<span class="_"> </span>shall<span class="_"> </span>be
            <span class="_"> </span>construed<span class="_"> </span>to
            <span class="_"></span>prevent<span class="_"> </span>the
            <span class="_ _f"> </span>CM,<span class="_ _f"> </span>the
            <span class="_ _f"> </span>contractors<span class="_ _f"> </span>and
            <span class="_ _f"> </span>their<span class="_ _f"> </span>employees
            <span class="_ _10"></span>from<span class="_ _f"> </span>taking
            <span class="_ _f"> </span>necessary
          </div>
          <div class="t m0 x3 h3 y117 ff2 fs0 fc0 sc0 ls0 ws1">
            measures to protect students, staff or oth<span class="_ _0"></span>
            er employees.
          </div>
          <div class="t m0 x3 h3 y118 ff2 fs0 fc0 sc0 ls0 ws5">
            1<span class="_ _20"></span>1.7.10<span class="_ _12"> </span>The
            <span class="_ _12"> </span>CM<span class="_ _12"> </span>shall
            <span class="_ _12"> </span>at<span class="_ _12"> </span>all
            <span class="_ _12"> </span>times<span class="_ _12"> </span>enforce
            <span class="_ _12"> </span>strict<span class="_"> </span>discipline
            <span class="_"> </span>and<span class="_"> </span>good
            <span class="_"> </span>order<span class="_"> </span>among
            <span class="_"></span>its<span class="_"> </span>employees
            <span class="_"> </span>and<span class="_"> </span>shall
            <span class="_"> </span>not
          </div>
          <div class="t m0 x3 h3 y119 ff2 fs0 fc0 sc0 ls0 ws92">
            employ<span class="_ _12"> </span>any<span class="_ _12"> </span>
            unfit<span class="_ _12"> </span>person<span class="_ _12"> </span>
            or<span class="_ _12"> </span>anyone<span class="_ _12"> </span>not
            <span class="_ _12"> </span>skilled<span class="_ _12"> </span>in
            <span class="_ _12"> </span>the<span class="_ _12"> </span>task
            <span class="_ _12"> </span>assigned<span class="_ _12"> </span>to
            <span class="_ _12"> </span>it.<span class="_ _18"> </span>The
            <span class="_ _12"> </span>Owner<span class="_"> </span>may
            <span class="_"> </span>require<span class="_"> </span>the
            <span class="_"></span>CM<span class="_"> </span>to
          </div>
          <div class="t m0 x3 h3 y11a ff2 fs0 fc0 sc0 ls0 ws12e">
            remove<span class="_ _19"> </span>any<span class="_ _19"> </span>
            employee,<span class="_"> </span>contractor<span class="_"> </span>
            or<span class="_"> </span>subcontractor<span class="_"> </span>the
            <span class="_"> </span>Owner<span class="_"> </span>deems
            <span class="_"></span>incompetent,<span class="_"> </span>careless
            <span class="_"> </span>or<span class="_"> </span>otherwise
          </div>
          <div class="t m0 x3 h3 y11b ff2 fs0 fc0 sc0 ls0 ws0">
            objectionable.
          </div>
          <div class="t m0 x3 h3 y11c ff2 fs0 fc0 sc0 ls0 ws89">
            1<span class="_ _20"></span>1.7.1<span class="_ _20"></span>1
            <span class="_ _14"></span>All<span class="_ _6"> </span>agents
            <span class="_ _14"> </span>and<span class="_ _6"> </span>workers
            <span class="_ _14"> </span>of<span class="_"> </span>the
            <span class="_"> </span>CM<span class="_"></span>and
            <span class="_"> </span>the<span class="_"> </span>contractors
            <span class="_"> </span>shall<span class="_"> </span>wear
            <span class="_"> </span>identification<span class="_"> </span>badges
            <span class="_"> </span>provided<span class="_"> </span>by
          </div>
          <div class="t m0 x3 h3 y11d ff2 fs0 fc0 sc0 ls0 wsa6">
            the<span class="_"> </span>CM<span class="_"> </span>at
            <span class="_"></span>all<span class="_"> </span>times
            <span class="_"> </span>they<span class="_"></span>are
            <span class="_"> </span>on<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>property<span class="_ _4"></span>.
            <span class="_ _18"> </span>The<span class="_"> </span>
            identification<span class="_"> </span>badges<span class="_"> </span>
            shall<span class="_"> </span>at<span class="_ _f"></span>a
            <span class="_ _10"> </span>minimum<span class="_ _f"> </span>
            display
          </div>
          <div class="t m0 x3 h3 y11e ff2 fs0 fc0 sc0 ls0 ws65">
            the<span class="_ _6"> </span>company<span class="_ _14"> </span>
            name,<span class="_ _6"> </span>telephone<span class="_ _14"></span>
            number<span class="_ _1"></span>,<span class="_ _6"> </span>employee
            <span class="_ _14"> </span>name<span class="_ _14"> </span>and
            <span class="_ _6"> </span>a<span class="_ _14"> </span>picture
            <span class="_ _6"> </span>of<span class="_"> </span>the
            <span class="_"> </span>employee.<span class="_ _18"> </span>The
            <span class="_"> </span>CM<span class="_"> </span>and
            <span class="_"></span>the
          </div>
          <div class="t m0 x3 h3 y11f ff2 fs0 fc0 sc0 ls0 ws1b2">
            contractors<span class="_"> </span>shall<span class="_"> </span>
            comply<span class="_"> </span>with<span class="_"> </span>the
            <span class="_"></span>Owner<span class="_ _3"></span>’s
            <span class="_"> </span>site<span class="_ _12"></span>or
            <span class="_ _12"> </span>school<span class="_ _12"> </span>
            building<span class="_ _12"> </span>access
            <span class="_ _12"></span>procedures<span class="_ _12"> </span>
            when<span class="_ _12"></span>working<span class="_ _12"> </span>on
            <span class="_ _12"> </span>any
          </div>
          <div class="t m0 x3 h3 y120 ff2 fs0 fc0 sc0 ls0 ws1">
            existing school campus.
          </div>
          <div class="t m0 x3 h3 y121 ff2 fs0 fc0 sc0 ls0 ws1">
            1<span class="_ _20"></span>1.8<span class="_ _2a"> </span>
            Construction Project Policies
          </div>
          <div class="t m0 x8 h3 y122 ff2 fs0 fc0 sc0 ls0 ws88">
            The<span class="_ _6"> </span>CM<span class="_ _14"> </span>
            acknowledges<span class="_"> </span>the<span class="_"> </span>Owner
            <span class="_ _3"></span>’s<span class="_"> </span>dispute
            <span class="_"> </span>resolution<span class="_"> </span>policy
            <span class="_ _4"></span>,<span class="_"> </span>minority
            <span class="_"> </span>business<span class="_"> </span>
            participation<span class="_"> </span>policy
            <span class="_ _1"></span>,
          </div>
          <div class="t m0 x3 h3 y123 ff2 fs0 fc0 sc0 ls0 wsa0">
            and<span class="_ _12"> </span>prequalification
            <span class="_ _12"></span>of<span class="_ _12"> </span>bidders
            <span class="_ _12"> </span>for<span class="_ _12"> </span>
            construction<span class="_"> </span>Projects,
            <span class="_"> </span>including<span class="_"> </span>their
            <span class="_"> </span>regulations<span class="_"> </span>and
            <span class="_"> </span>procedures,<span class="_"> </span>attached
          </div>
          <div class="t m0 x3 h3 y124 ff2 fs0 fc0 sc0 ls0 ws1">
            as <span class="_ _1"></span>Appendixes H, I and Jbe incorporated
            into this <span class="_ _20"></span>Agreement
            <span class="_ _3a"></span>.
          </div>
          <div class="c x0 y1e w0 h4">
            <div class="t m0 xc h5 ya7 ff2 fs1 fc0 sc0 ls0">50</div>
          </div>
        </div>
        <div
          class="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div> */}
      <div id="pf33" class="pf w0 h0" data-page-no="33">
        <div class="pc pc33 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAfCklEQVR42uzZQQoCQRAEQUvm/y8eKO+iwjKXXox4Qt2yO20fAAAAcOBpAgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAbWkCAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAABtaQIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAxlomAIA5khgB4E1bI8znbwkAU+y9jQDATcUNAAAAgEP+lgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAwCfLBAAwRxIjMFZbIwDf+FsCwBR7byMAcFNxfwIAAOCQvyUAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABct0wwQRIjMFZbIwAA8Ju/JQAAAKfiIwEAAMAhf0sAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAADgXywTTJDECFzS1ggAAMzhbwkAAMCp+H4AAABwyN8SAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAB4tV/HRAAAMBDCDv+mK6LjJxLYAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAgDGVCAAAAHwdtjYtQEzfwxYAAAAASUVORK5CYII="
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
              _________________F38
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
              been<span class="_ _1d"> </span>pre-audited<span class="_"></span>
              in<span class="_"> </span>the
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
              F37_____________ _
            </div>
            <div class="t m0 x22 h3 y127 ff2 fs0 fc0 sc0 ls0 ws0">
              _______________________________________
            </div>
            <div class="t m0 x22 h3 y128 ff2 fs0 fc0 sc0 ls0 ws1">
              ________________F39_, President
            </div>
            <div class="t m0 x22 h3 y129 ff2 fs0 fc0 sc0 ls0 ws0">Attest:</div>
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
    </>
  );
};

export default PreviewPart5;
