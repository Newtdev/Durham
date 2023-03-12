import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { selectToken } from "../features/auth";
import { htmlencode } from "../shared-component";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// import { useEffect, useState } from "react";
// import { containerClasses } from "@mui/system";

// const PrivateRoute = ({ children }) => {
// 	const navigate = useNavigate();
// 	const token = useSelector(selectToken);
// 	console.log(token)
// 	// useEffect(() => {
// 		// 	if (!token) {
// 			// 		navigate("/");
// 			// 	} else {
// 				// 		navigate("/dashboard", { replace: true });
// 				// 	}
// 				// }, [token, navigate]);

// 			 return !token ? <Navigate to="/dashboard" /> : children;
// 	return <>{children}</>;
// };

// export default PrivateRoute;

// const Resolved = () => {
// 	const [a, setA] = useState([]);
// 	useEffect(() => {
// 		let a = false;
// 		const fetchdata = async () => {
// 			const data = await fetch("data.json");
// 			if (!a) {
// 				const b = await data.json();
// 				setA(b);
// 				// console.log(await data.json());
// 			}
// 		};
// 		fetchdata();

// 		return () => {
// 			a = true;
// 		};
// 	}, []);

// 	const resolvedAllData = () => {

// 	return <div>{resolvedAllData()}</div>;
// };

// export default Resolved;

const RichTextComp = ({ text, setText }) => {
  const reactQuillRef = React.useRef();
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const checkCharacterCount = (event) => {
    const unprivilegedEditor = reactQuillRef.current.unprivilegedEditor;
    if (unprivilegedEditor.getLength() > 280 && event.key !== "Backspace")
      event.preventDefault();
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // console.log(htmlencode(text));
  return (
    <ReactQuill
      onKeyDown={checkCharacterCount}
      modules={modules}
      formats={formats}
      theme="snow"
      value={text}
      onChange={setText}
      style={{ height: "8rem" }}
    />
  );
};

export default RichTextComp;
