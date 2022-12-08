import User from "../../../../assets/Avatar.svg";
import Logo from "../../../../assets/logo.svg";
import ChevronDown from "../../../../assets/chevronDown.svg";
import PenEdit from "../../../../assets/penEdit.svg";
// import Delete from "../../../../assets/delete.svg";
// import Edit from "../../../../assets/edit.svg";
// import SortIcon from "../../../../assets/sortIcon.svg";
// import SearchIcon from "../../../../assets/searchIcon.svg";
import { InputContainer } from "../../../authentications/component";
import { useFormik } from "formik";
import { Button } from "../../../../ui";
import { ButtonWhiteBG } from "../../../../ui";
// import { ButtonRedBG } from "../../../../ui";
import { SuccessPopup } from "../../../../ui";
// import { DeletePopup } from "../../../../ui";

const Settings = () => {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        check: false,
      },
    });

  const props = {
    email: {
      name: "Email Address",
      id: "email",
      placeholder: "johndoe@email.com",
      value: values.email,
      onChange: handleChange,
      error: errors.email,
      touched: touched.email,
    },
    officer: {
      name: "Chief Finance Officer",
      id: "officer",
      placeholder: "John Doe",
      value: values.officer,
      onChange: handleChange,
      error: errors.officer,
      touched: touched.officer,
    },
  };

  return (
    <section>
      {/* NavBar */}
      <article>
        {/* <!-- Navbar --> */}
        <nav className='bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4'>
          <div className='container flex flex-wrap items-center justify-between mx-auto'>
            <a href='/' className='w-32 mr-8'>
              <img src={Logo} className='w-full' alt='Durham Logo' />
            </a>
            <div className='flex items-center md:order-2'>
              <button
                type='button'
                className='flex items-center gap-2 '
                id='user-menu-button'
                aria-expanded='false'
                data-dropdown-toggle='user-dropdown'
                data-dropdown-placement='bottom'
              >
                <img className='w-8 h-8 rounded-full' src={User} alt='user' />
                <img className='w-2' src={ChevronDown} alt='dropdown button' />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow'
                id='user-dropdown'
              >
                <div className='px-4 py-3'>
                  <span className='block text-sm text-gray-900 dark:text-white'>
                    Bonnie Green
                  </span>
                  <span className='block text-sm font-medium text-gray-500 truncate dark:text-gray-400'>
                    name@flowbite.com
                  </span>
                </div>
                <ul className='py-1' aria-labelledby='user-menu-button'>
                  <li>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle='mobile-menu-2'
                type='button'
                className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                aria-controls='mobile-menu-2'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            {/* Main menu list */}
            <div
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='mobile-menu-2'
            >
              <ul className='flex gap-8'>
                <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                    aria-current='page'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                  >
                    Forms
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                  >
                    Project Managers
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                  >
                    Vendors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </article>

      {/* Settings */}
      <article className='hidden pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='mb-6'>
            <h1 className='text-gray-900 font-semibold text-3xl'>Settings</h1>
          </div>

          {/* Cards */}
          <div className='flex items-center gap-6'>
            <div className='w-[264px] p-4 bg-white border border-gray-200 rounded-lg shadow-md'>
              <div className='h-6 w-6 bg-gray-300'></div>

              <p className='text-gray-900 font-bold my-4 cursor-pointer'>
                My Profile Details
              </p>

              <p className='font-normal text-gray-900'>
                Card Sub text line, This is a brief description of the content.
              </p>
            </div>

            <div className='w-[264px] p-4 bg-white border border-gray-200 rounded-lg shadow-md'>
              <div className='h-6 w-6 bg-gray-300'></div>

              <p className='text-gray-900 font-bold my-4 cursor-pointer'>
                Durham Details
              </p>

              <p className='font-normal text-gray-900'>
                Card Sub text line, This is a brief description of the content.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Profile Settings */}
      <article className='hidden pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='mb-6'>
            <p className='mb-4 text-gray-900'>
              Settings &#62;
              <span className='font-bold'> Profile Details</span>
            </p>
            <h1 className='text-gray-900 font-semibold text-3xl'>
              Profile Details
            </h1>

            <div className='mt-6 relative w-12 h-12 rounded-full'>
              <img className='w-full' src={User} alt='user' />
              <img className='absolute top-8 left-6' src={PenEdit} alt='edit' />
            </div>
          </div>

          {/* Details */}
          <div className='w-full lg:w-[552px]'>
            <div className='mt-12 mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Full Name</p>
                <p className='font-semibold text-[#3B6979]'>Jane Cooper</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Email</p>
                <p className='hidden font-semibold text-[#3B6979]'>
                  johndoe@email.com
                </p>

                {/* Editting */}
                <div className='mt-4'>
                  <InputContainer {...props.email} />
                </div>

                <div className='mt-2 flex gap-4 justify-items-start'>
                  <Button name='save changes' />
                  <ButtonWhiteBG name='cancel' />
                </div>
              </div>
              <p className='hidden uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Phone Number</p>
                <p className='font-semibold text-[#3B6979]'>+61 412 345 678</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Password</p>
                <p className='font-semibold text-[#3B6979]'>*********</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Durham Info */}
      <article className='hidden pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='mb-6'>
            <p className='mb-4 text-gray-900'>
              Settings &#62;
              <span className='font-bold'> Durham Information</span>
            </p>
            <h1 className='text-gray-900 font-semibold text-3xl'>
              Durham Information
            </h1>
          </div>

          {/* Details */}
          <div className='w-full lg:w-[552px]'>
            <div className='mt-12 mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Chair,DPS Board of Education
                </p>
                <p className='font-semibold text-[#3B6979]'>Jane Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Chief Finance Officer</p>
                <p className='font-semibold text-[#3B6979]'>John Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>Chief Finance Officer</p>
                <p className='hidden font-semibold text-[#3B6979]'>John Doe</p>

                {/* Editting */}
                <div className='mt-4'>
                  <InputContainer {...props.officer} />
                </div>

                <div className='mt-2 flex gap-4 justify-items-start'>
                  <Button name='save changes' />
                  <ButtonWhiteBG name='cancel' />
                </div>
              </div>
              <p className='hidden uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Construction & Capital Planning Business Manager
                </p>
                <p className='font-semibold text-[#3B6979]'>Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Construction & Capital Planning Project Manager
                </p>
                <p className='font-semibold text-[#3B6979]'>Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Director of Construction and Sustainability
                </p>
                <p className='font-semibold text-[#3B6979]'>Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Director of Design and Construction
                </p>
                <p className='font-semibold text-[#3B6979]'>Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
            <div className='mb-12 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='font-bold text-gray-900'>
                  Executive Director Durham Public Schools Building Services
                </p>
                <p className='font-semibold text-[#3B6979]'>Doe</p>
              </div>
              <p className='uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end'>
                Edit
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* PM added successfully */}
      <article>
        <div
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-2'>
            <SuccessPopup text='New user added successfully' />
          </div>
        </div>
      </article>

      {/* Info added successfully */}
      <article>
        <div
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-2'>
            <SuccessPopup text='Information saved successfully' />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Settings;
