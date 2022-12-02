import { useFormik } from "formik";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { Button, ButtonWhiteBG } from "../../../ui";
import { AddUsersSchema } from "../../../yup";
import { DashboardButton, DashboardInput } from "../Components";

export const UsersHeader = ["Full Name", "Email Address", "Phone Number", ""];

export const UsersContent = [
  {
    id: 1,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 2,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 3,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 4,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 5,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 6,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 7,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 8,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
  {
    id: 9,
    fullName: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "+1 625 724 8761",
  },
];

export function UsersTableBody({ dataArray, onDelete, onEdit }) {
  return (
    <tbody className='text-xs bg-white font-medium'>
      {dataArray.map(({ id, fullName, emailAddress, phoneNumber }) => {
        const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";

        return (
          <tr key={id} className={`${strip} border-b`}>
            <td className='py-3 px-4 font-normal text-gray-900 whitespace-nowrap'>
              {fullName}
            </td>
            <td className='py-3 px-4'>{emailAddress}</td>
            <td className='py-3 px-4 whitespace-nowrap'>{phoneNumber}</td>
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
      })}
    </tbody>
  );
}

export function AddUsers({ close }) {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validationSchema: AddUsersSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = {
    fullName: {
      name: "Full Name",
      id: "fullName",
      placeholder: "Full Name",
      value: values.fullName,
      onChange: handleChange,
      error: errors.fullName,
      touched: touched.fullName,
    },
    emailAddress: {
      name: "Email Address",
      id: "emailAddress",
      placeholder: "Email Address",
      value: values.emailAddress,
      onChange: handleChange,
      error: errors.emailAddress,
      touched: touched.emailAddress,
    },
    phoneNumber: {
      name: "Phone Number",
      id: "phoneNumber",
      placeholder: "412 345 678",
      value: values.phoneNumber,
      onChange: handleChange,
      error: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    password: {
      name: "Password",
      id: "password",
      placeholder: "Password",
      value: values.password,
      onChange: handleChange,
      error: errors.password,
      touched: touched.password,
    },
    confirmPassword: {
      name: "Confirm Password",
      id: "confirmPassword",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      onChange: handleChange,
      error: errors.confirmPassword,
      touched: touched.confirmPassword,
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
            <h3 className='text-lg font-bold text-gray-900'>Add New User</h3>
            <h4 className='text-gray-700'>Add user's information</h4>
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
                <DashboardInput {...props.fullName} />
              </div>
              <div>
                <DashboardInput {...props.emailAddress} />
              </div>
              <div>
                <DashboardInput {...props.phoneNumber} />
              </div>
              <div>
                <DashboardInput {...props.password} />
              </div>
              <div>
                <DashboardInput {...props.confirmPassword} />
              </div>
            </div>

            {/* Buttons */}
            <div className='mt-24 flex gap-4 justify-end items-center'>
              <ButtonWhiteBG name='cancel' onClick={close} />
              <DashboardButton
                name='ADD USER'
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
