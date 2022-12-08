import User from "../../../assets/Avatar.svg";
import Logo from "../../../assets/logo.svg";
import ChevronDown from "../../../assets/chevronDown.svg";
import Plus from "../../../assets/Plus.svg";
import SortIcon from "../../../assets/sortIcon.svg";
import SearchIcon from "../../../assets/searchIcon.svg";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";

import { Link } from "react-router-dom";
import { ButtonWhiteBG, Error, Label, Select } from "../../../ui";

/***** DASHBOARD HEADER AND NAVIGATION ********/
export function DashboardNav() {
  function LinkList() {
    return (
      <ul className='flex gap-8'>
        {["Dashboard", "Forms", "Project Managers", "Vendors"].map(
          (name, id) => {
            return (
              <li key={id}>
                <Link
                  to={`/dashboard/${name}`}
                  className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                >
                  {name}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }

  function UserList() {
    return (
      <ul className='py-1' aria-labelledby='user-menu-button'>
        {["Settings", "Sign out"].map((name, id) => {
          return (
            <li key={id}>
              <Link
                to=''
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav className='bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4'>
      <div className='container flex flex-wrap items-center justify-start mx-auto'>
        <a href='/' className='w-20 mr-8'>
          <img src={Logo} className='w-full' alt='Durham Logo' />
        </a>
        <div className='flex items-center ml-auto md:order-2'>
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
            <UserList />
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
          <LinkList />
        </div>
      </div>
    </nav>
  );
}

export function OverviewNav() {
  function LinkList() {
    return (
      <ul className='flex gap-8'>
        {["Dashboard", "Project Managers", "Vendors", "Users"].map(
          (name, id) => {
            return (
              <li key={id}>
                <Link
                  to={`/dashboard/${name}`}
                  className='block py-2 pl-3 pr-4 text-gray-700 text-base font-bold md:bg-transparent md:p-0'
                >
                  {name}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }

  function UserList() {
    return (
      <ul className='py-1' aria-labelledby='user-menu-button'>
        {["Settings", "Sign out"].map((name, id) => {
          return (
            <li key={id}>
              <Link
                to=''
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav className='bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4'>
      <div className='container flex flex-wrap items-center justify-start mx-auto'>
        <a href='/' className='w-20 mr-8'>
          <img src={Logo} className='w-full' alt='Durham Logo' />
        </a>
        <div className='flex items-center ml-auto md:order-2'>
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
            <UserList />
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
          <LinkList />
        </div>
      </div>
    </nav>
  );
}

export function ProjectOverviewNav() {
  return (
    <nav className='bg-white border-b-2 border-[linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0) 100%)] px-6 py-4 sm:px-4 h-20'>
      <div className='container flex flex-wrap items-center justify-start mx-auto'>
        <a href='/' className='w-40 mr-6'>
          <img src={Logo} className='w-full' alt='Durham Logo' />
        </a>
      </div>
    </nav>
  );
}

/****************** DASHBOARD BUTTON *************/

export function DashboardButton({ name, width, hidden, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-white text-sm font-semibold ${width} hover:bg-blue-800 bg-[#3B6979] transition-all focus:outline-none text-center rounded px-4 h-10`}
      type={type}
    >
      {!hidden && <img src={Plus} alt='' className='mr-4' />}
      {name}
    </button>
  );
}

/**************SORT COMPONENTS**************/

export function Sort() {
  return (
    <div className='flex items-center justify-center'>
      <p className='mr-4 font-bold text-gray-700'>Sort By:</p>
      <div>
        <button
          className='inline-flex items-center text-gray-700 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979]'
          type='button'
        >
          <img className='mr-1' src={SortIcon} alt='sort' />
          Name (A-Z)
          <svg
            className='ml-2 w-3 h-3'
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Filter() {
  return (
    <div className='flex items-center justify-center'>
      <p className='mr-4 font-bold text-gray-700'>Filter By:</p>
      <div>
        <button
          className='inline-flex items-center text-gray-400 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979]'
          type='button'
        >
          Select Filter
          <svg
            className='ml-2 w-3 h-3'
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

/**********SEARCH COMPONENTS*************** */

export function Search() {
  return (
    <div className='flex flex-row justify-center items-center gap-4'>
      <div>
        <label for='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none'>
            <img src={SearchIcon} alt='search' />
          </div>
          <input
            type='text'
            id='table-search'
            className='block p-2 pl-8 w-72 text-sm text-gray-900 bg-white rounded border border-gray-400 focus:outline-[#3B6979]'
            placeholder='Search Project Manager'
          />
        </div>
      </div>
      <ButtonWhiteBG name='search' />
    </div>
  );
}

/*************DASHBOARD HEADER TABLE*********************/

export function TableHeader({ dataArray }) {
  return (
    <thead className='text-xs bg-white font-medium'>
      <tr>
        {dataArray.map((name, index) => {
          return (
            <th key={index} scope='col' className='py-2 px-4'>
              {name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

// export function Th({ dataArray }) {
// 	return dataArray.map((name, index) => {
// 		return (
// 			<th key={index} scope="col" className="py-2 px-4">
// 				{name}
// 			</th>
// 		);
// 	});
// }

// export function Td({ dataArray, onDelete, onEdit }) {
// 	return dataArray.map(({ id, name, email, phone }) => {
// 		return (
// 			<tr key={id} className="bg-gray-50 border-b">
// 				<th
// 					scope="row"
// 					className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
// 					{name}
// 				</th>
// 				<td className="py-3 px-4">{email}</td>
// 				<td className="py-3 px-4 whitespace-nowrap">{phone}</td>
// 				<td className="py-3 px-4 flex items-center justify-start gap-3">
// 					<span className="w-4 cursor-pointer" onClick={onDelete}>
// 						<img className="w-full" src={Delete} alt="delete" />
// 					</span>
// 					<span className="w-4 cursor-pointer" onClick={onEdit}>
// 						<img className="w-full" src={Edit} alt="edit" />
// 					</span>
// 				</td>
// 			</tr>
// 		);
// 	});
// }
/*************DASHBOARD HEADER TABLE*********************/

export function TableBody({ dataArray, onDelete, onEdit }) {
  return (
    <tbody className='text-xs bg-white font-medium'>
      {dataArray.map(({ id, name, email, phone }) => {
        return (
          <tr key={id} className='bg-gray-50 border-b'>
            <th
              scope='row'
              className='py-3 px-4 font-normal text-gray-900 whitespace-nowrap'
            >
              {name}
            </th>
            <td className='py-3 px-4'>{email}</td>
            <td className='py-3 px-4 whitespace-nowrap'>{phone}</td>
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

/*************PAGINATION***************/

export function Pagination() {
  return (
    <nav
      className='mt-4 mb-28 flex justify-center items-center pt-4'
      aria-label='Table navigation'
    >
      <ul className='inline-flex items-center -space-x-px gap-3'>
        <li>
          <a
            href='/'
            className='block py-2 px-3 ml-0 leading-tight text-[#3B6979] hover:text-gray-500'
          >
            <span className='sr-only'>Previous</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center bg-[#628794] rounded-full'>
          <a
            href='/'
            aria-current='page'
            className=' leading-tight text-white font-bold'
          >
            1
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            2
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            3
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            4
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            5
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            ...
          </a>
        </li>
        <li className='w-8 h-8 flex items-center justify-center'>
          <a
            href='/'
            className='leading-tight text-gray-900  hover:text-gray-500 '
          >
            30
          </a>
        </li>
        <li>
          <a
            href='/'
            className='block py-2 px-3 leading-tight text-[#3B6979] hover:text-gray-500'
          >
            <span className='sr-only'>Next</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function Input(props) {
  const { placeholder, id, onChange, values } = props;
  return (
    <input
      className='bg-white border border-gray-400 text-gray-500 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-[424px] p-2.5'
      name={id}
      placeholder={placeholder}
      type='text'
      value={values}
      onChange={onChange}
    />
  );
}

export function DashboardInput(props) {
  const { name, error, touched } = props;
  return (
    <div className='mb-4 w-[360px]'>
      <Label
        name={name}
        styles='block mb-2 text-sm font-medium text-gray-900'
      />
      <Input {...props} />
      {error && touched && <Error message={error} />}
    </div>
  );
}

export function PageHeader({ name }) {
  return <h1 className='text-[#0c1518] font-semibold text-3xl'>{name}</h1>;
}

export function SelectContainer(props) {
  const { name, error, touched } = props;
  return (
    <div className='mb-4 w-full'>
      <Label
        name={name}
        styles='block mb-2 text-sm font-medium text-gray-900'
      />
      <Select {...props} />
      {error && touched && <Error message={error} />}
    </div>
  );
}
