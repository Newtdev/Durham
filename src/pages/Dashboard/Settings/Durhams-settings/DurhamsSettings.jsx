import User from "../../../../assets/Avatar.svg";
import Logo from "../../../../assets/logo.svg";
import ChevronDown from "../../../../assets/chevronDown.svg";
import PenEdit from "../../../../assets/penEdit.svg";

// import { InputContainer } from "../../../../authentications/component";
import { useFormik } from "formik";
import { Button } from "../../../../ui";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardNav } from "../../Components";

/****
   * v
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
   * 
   * 
   * 
   * 
   */

const DurhamSettings = () => {
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
        <DashboardNav/>
        {/* <!-- Navbar --> */}
        
      </article>

      

      {/* Durham Info */}
      <article className=' pt-6'>
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
                  {/* <InputContainer {...props.officer} /> */}
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

      
    </section>
  );
};

export default DurhamSettings;
