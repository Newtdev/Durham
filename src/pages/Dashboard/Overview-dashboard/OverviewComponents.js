import { useFormik } from "formik";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { Label, Error, Textarea } from "../../../ui";
import { AddUsersSchema } from "../../../yup";
import { SelectContainer } from "../Components";

export const OverviewTableHeader = [
  "Project Name",
  "Awardee",
  "Company Rep",
  "Project Manager",
  "Date",
  "",
];

export const OverviewContent = [
  {
    id: 1,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 2,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 3,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 4,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 5,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 6,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 7,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 8,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
  {
    id: 9,
    projectName: "Burton Elementary School - Boiler Replacement",
    awardee: "John Doe",
    companyRep: "John Doe",
    projectManager: "John Doe",
    date: "12/08/22",
  },
];

export function OverviewTableBody({ dataArray, onDelete, onEdit }) {
  return (
    <tbody className='text-xs text-[#000000] bg-white font-medium'>
      {dataArray.map(
        ({ id, projectName, awardee, companyRep, projectManager, date }) => {
          const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";

          return (
            <tr key={id} className={`${strip} border-b`}>
              <td className='py-3 px-4 font-normal text-gray-900 whitespace-nowrap'>
                {projectName}
              </td>
              <td className='py-3 px-4'>{awardee}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{companyRep}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{projectManager}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{date}</td>
              <td className='py-3 px-4 flex items-center justify-start gap-3'>
                <span className='w-4 cursor-pointer' onClick={onDelete}>
                  <img className='w-full' src={Delete} alt='delete' />
                </span>
                <span className='w-4 cursor-pointer' onClick={onEdit}>
                  <img className='w-full' src={Edit} alt='edit' />
                </span>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}

export function OverviewTitleCard() {
  return (
    <div className='bg-white rounded-lg border border-[#d8e1e4] flex flex-col items-center justify-center h-[104px]'>
      <small className='text-gray-900 text-xs block'>Title</small>
      <p className='text-[#3b6979] text-lg font-bold'>Amount</p>
    </div>
  );
}

export function Input(props) {
  const { placeholder, id, onChange, values } = props;
  return (
    <input
      className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
      name={id}
      placeholder={placeholder}
      type='text'
      value={values}
      onChange={onChange}
    />
  );
}

export function OverviewInput(props) {
  const { name, error, touched } = props;
  return (
    <div className='mb-4'>
      <Label
        name={name}
        styles='block mb-2 text-sm font-medium text-gray-900'
      />
      <Input {...props} />
      {error && touched && <Error message={error} />}
    </div>
  );
}

export function OverviewTextarea(props) {
  const { name, error, touched } = props;
  return (
    <div className='mb-4'>
      <Label
        name={name}
        styles='block mb-2 text-sm font-medium text-gray-900'
      />
      <Textarea {...props} />
      {error && touched && <Error message={error} />}
    </div>
  );
}

export function ProjectInfo() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      projectName: "",
      projectNumber: "",
      projectDescription: "",
      selectProjectManager: "",
    },
    validateOnChange: true,
    validationSchema: AddUsersSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = {
    projectName: {
      name: "Project Name",
      id: "projectName",
      placeholder: "Enter Project Name",
      value: values.projectName,
      onChange: handleChange,
      error: errors.projectName,
      touched: touched.projectName,
    },
    projectNumber: {
      name: "Project Number",
      id: "projectNumber",
      placeholder: "Enter Project Number",
      value: values.projectNumber,
      onChange: handleChange,
      error: errors.projectNumber,
      touched: touched.projectNumber,
    },
    projectDescription: {
      name: "Project Description",
      id: "projectDescription",
      placeholder: "Enter Project Description",
      value: values.projectDescription,
      onChange: handleChange,
      error: errors.projectDescription,
      touched: touched.projectDescription,
    },
    selectProjectManager: {
      name: "Select Project Manager",
      id: "selectProjectManager",
      placeholder: "Enter Project Name",
      value: values.selectProjectManager,
      onChange: handleChange,
      error: errors.selectProjectManager,
      touched: touched.selectProjectManager,
    },
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className='w-full overflow-auto'>
            <div>
              <OverviewInput {...props.projectName} />
            </div>
            <div>
              <OverviewInput {...props.projectNumber} />
            </div>
            <div>
              <OverviewTextarea {...props.projectDescription} />
            </div>
            <div>
              <SelectContainer {...props.selectProjectManager} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AwardeeInfo() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      selectAwardee: "",
      selectDesign: "",
      consultantName: "",
      consultantAddress: "",
      corporatePresident: "",
      corporateSecretary: "",
      name: "",
      title: "",
    },
    validateOnChange: true,
    validationSchema: AddUsersSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = {
    selectAwardee: {
      name: "Select Awardee involved in this project",
      id: "selectAwardee",
      placeholder: "Select Awardee",
      value: values.selectAwardee,
      onChange: handleChange,
      error: errors.selectAwardee,
      touched: touched.selectAwardee,
    },
    selectDesign: {
      name: "Select Design Consultant",
      id: "selectDesign",
      placeholder: "Select Design Consultant",
      value: values.selectDesign,
      onChange: handleChange,
      error: errors.selectDesign,
      touched: touched.selectDesign,
    },
    consultantName: {
      name: "Consultant Name",
      id: "consultantName",
      placeholder: "John Doe",
      value: values.consultantName,
      onChange: handleChange,
      error: errors.consultantName,
      touched: touched.consultantName,
    },
    consultantAddress: {
      name: "Consultant Address",
      id: "consultantAddress",
      placeholder: "Somewhere Somewhere",
      value: values.consultantAddress,
      onChange: handleChange,
      error: errors.consultantAddress,
      touched: touched.consultantAddress,
    },
    corporatePresident: {
      name: "Corporate President/VP",
      id: "corporatePresident",
      placeholder: "John Doe President",
      value: values.corporatePresident,
      onChange: handleChange,
      error: errors.corporatePresident,
      touched: touched.corporatePresident,
    },
    corporateSecretary: {
      name: "Corporate Secretary",
      id: "corporateSecretary",
      placeholder: "John Doe Secretary",
      value: values.corporateSecretary,
      onChange: handleChange,
      error: errors.corporateSecretary,
      touched: touched.corporateSecretary,
    },
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className='w-full overflow-auto'>
            <div>
              <SelectContainer {...props.selectAwardee} />
            </div>
            <div>
              <OverviewInput {...props.selectDesign} />
            </div>
            <div>
              <OverviewInput {...props.consultantName} />
            </div>
            <div>
              <OverviewInput {...props.consultantAddress} />
            </div>
            <div>
              <OverviewTextarea {...props.corporatePresident} />
            </div>
            <div>
              <OverviewInput {...props.corporateSecretary} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function CompanyRep() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      title: "",
    },
    validateOnChange: true,
    validationSchema: AddUsersSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = {
    name: {
      name: "Name",
      id: "name",
      placeholder: "John Doe",
      value: values.name,
      onChange: handleChange,
      error: errors.name,
      touched: touched.name,
    },
    title: {
      name: "Title",
      id: "title",
      placeholder: "John Doe",
      value: values.title,
      onChange: handleChange,
      error: errors.title,
      touched: touched.title,
    },
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className='w-full overflow-auto'>
            <div>
              <OverviewInput {...props.name} />
            </div>
            <div>
              <OverviewInput {...props.title} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
