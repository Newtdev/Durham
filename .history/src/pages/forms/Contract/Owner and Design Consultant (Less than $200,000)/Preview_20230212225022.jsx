import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import PageOne from "./Preview Pages/Page1";
import PageSix from "./Preview Pages/Page6";
import PageTwo from "./Preview Pages/Page2";
import PageThree from "./Preview Pages/Page3";
import PageFour from "./Preview Pages/Page4";
import PageFive from "./Preview Pages/Page5";
import PageSeven from "./Preview Pages/Page7";
import PageEight from "./Preview Pages/Page8";
import PageNine from "./Preview Pages/Page9";
import PageTen from "./Preview Pages/Page10";
import Page
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../../Lundsford/Download";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
  return <div></div>;
};

export default Preview;