import { useFormik } from "formik";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { Button, ButtonWhiteBG } from "../../../ui";
import { AddVendorsSchema } from "../../../yup";
import {
  DashboardButton,
  DashboardInput,
  SelectContainer,
} from "../Components";

export const VendorsHeader = [
  "Representative",
  "Name",
  "Title",
  "Company Name",
  "Address",
  "President/Vp",
  "Secretary",
  "Profession",
  "",
];

export const VendorsContent = [
  {
    id: 1,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 2,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 3,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 4,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 5,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 6,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 7,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 8,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
  {
    id: 9,
    representative: "Kathryn Murphy",
    name: "John Doe Inc.",
    title: "MR.",
    companyName: "Big Kahuna Burger Ltd.",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    president: "Marvin McKinney",
    secretary: "Esther Howard",
    profession: "Design Consultant",
  },
];

export function VendorTableBody({ dataArray, onDelete, onEdit }) {
  return (
    <tbody className='text-xs bg-white font-medium'>
      {dataArray.map(
        ({
          id,
          representative,
          name,
          title,
          companyName,
          address,
          president,
          secretary,
          profession,
        }) => {
          const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";

          return (
            <tr key={id} className={`${strip} border-b`}>
              <td className='py-3 px-4 font-normal text-gray-900 whitespace-nowrap'>
                {representative}
              </td>
              <td className='py-3 px-4 font-normal text-gray-900 whitespace-nowrap'>
                {name}
              </td>
              <td className='py-3 px-4'>{title}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{companyName}</td>
              <td className='py-3 px-4 whitespace-wrap'>{address}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{president}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{secretary}</td>
              <td className='py-3 px-4 whitespace-nowrap'>{profession}</td>
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

export function AddVendor({ close }) {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      representive: "",
      firstName: "",
      lastName: "",
      companyName: "",
      address: "",
      president: "",
      secretary: "",
      industry: "",
    },
    validateOnChange: true,
    validationSchema: AddVendorsSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = {
    title: {
      name: "Representative Title",
      id: "repTitle",
      placeholder: "Representative Title",
      value: values.title,
      onChange: handleChange,
      error: errors.title,
      touched: touched.title,
      option: "together",
    },
    repFirstName: {
      name: "Representative First Name",
      id: "firstName",
      placeholder: "Representative First Name",
      value: values.firstName,
      onChange: handleChange,
      error: errors.firstName,
      touched: touched.firstName,
    },
    repLastName: {
      name: "Representative Last Name",
      id: "lastName",
      placeholder: "Representative Last Name",
      value: values.lastName,
      onChange: handleChange,
      error: errors.lastName,
      touched: touched.lastName,
    },
    companyName: {
      name: "Company Name",
      id: "companyName",
      placeholder: "Company Name",
      value: values.companyName,
      onChange: handleChange,
      error: errors.companyName,
      touched: touched.companyName,
    },
    companyAddress: {
      name: "Company Address",
      id: "address",
      placeholder: "Ccompany Address",
      value: values.address,
      onChange: handleChange,
      error: errors.address,
      touched: touched.address,
    },
    presidentVP: {
      name: "President/VP",
      id: "president",
      placeholder: "President/VP",
      value: values.president,
      onChange: handleChange,
      error: errors.president,
      touched: touched.president,
    },
    secretary: {
      name: "Secretary",
      id: "secretary",
      placeholder: "Secretary",
      value: values.secretary,
      onChange: handleChange,
      error: errors.secretary,
      touched: touched.secretary,
    },
    industry: {
      name: "Industry",
      id: "industry",
      placeholder: "Industry",
      value: values.industry,
      onChange: handleChange,
      error: errors.industry,
      touched: touched.industry,
    },
  };

  return (
    <div
      className='relative w-[490px] h-screen md:h-auto mx-auto mt-14'
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal content */}
      <div className='relative bg-white rounded-lg shadow pb-4 md:pb-0'>
        <div className='flex justify-between items-baseline px-6 py-3 rounded-t border-b'>
          <div>
            <h3 className='text-lg font-bold text-gray-900'>Add New Vendor</h3>
            <h4 className='text-gray-700'>Add Vendor's information</h4>
          </div>
          <button
            onClick={close}
            type='button'
            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
            data-modal-toggle='small-modal'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>
        <div className='py-3 px-6 lg:px-8'>
          <form className='space-y-6 ' onSubmit={handleSubmit}>
            <div className='h-[30rem] w-full overflow-auto'>
              <div>
                <SelectContainer {...props.title}>
                  <option value=''>Select Representative Title</option>

                  {["MR.", "MRS", "MISS"].map((cur, index) => (
                    <option key={index}>{cur}</option>
                  ))}
                </SelectContainer>
              </div>
              <div>
                <DashboardInput {...props.repFirstName} />
              </div>
              <div>
                <DashboardInput {...props.repLastName} />
              </div>
              <div>
                <DashboardInput {...props.companyName} />
              </div>
              <div>
                <DashboardInput {...props.companyAddress} />
              </div>
              <div>
                <DashboardInput {...props.presidentVP} />
              </div>
              <div>
                <DashboardInput {...props.secretary} />
              </div>
              <div>
                <SelectContainer {...props.industry}>
                  <option selected value=''>
                    Select Industry
                  </option>
                  {[
                    "Design Consultant",
                    "Contractor",
                    "Engineer",
                    "Construction Manager",
                  ].map((cur, index) => (
                    <option value={cur} key={index}>
                      {cur}
                    </option>
                  ))}
                </SelectContainer>
              </div>
            </div>

            {/* Buttons */}
            <div className='mt-24 flex gap-4 justify-end items-center'>
              <ButtonWhiteBG name='cancel' onClick={close} />
              <DashboardButton
                name='ADD VENDOR'
                hidden
                type='submit'
                width='w-[136px]'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
