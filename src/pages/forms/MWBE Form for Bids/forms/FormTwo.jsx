import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
    const dispatch = useDispatch();
    const states = useSelector(getList);

    function CheckState(index) {
        if (!props.values.location[index].projectState) {
            return;
        }
        let stat = Object.values(states)?.find((state) => state.name === props.values.location[index].projectState);

        return Object.keys(stat.cities)?.map((cur, id) => {

            return <option key={id} value={cur}>{cur}</option>
        })
    };

    function CheckZipCode(index) {
        if (!props.values.location[index].projectCity) {
            return;
        }
        const city = Object.values(states)?.filter((state) => state.name === props.values.location[index].projectState)
        const zipcode = city?.find((cities) => cities);
        return zipcode.cities[props.values.location[index].projectCity]?.map((zipcode, index) => {
            return <option key={index} value={zipcode}>{zipcode}</option>
        })
    };

    const vendors = [
        { name: 'Vendor 1' },
        { name: 'Vendor 2' },
        { name: 'Vendor 3' },
        { name: 'Vendor 4' },
        { name: 'Vendor 5' },
        { name: 'Vendor 6' }
    ];

    const state = [
        { name: 'Alabama' },
        { name: 'Alaska' },
        { name: 'Arizona' },
        { name: 'Arkansas' },
        { name: 'California' },
        { name: 'Colorado' }
    ];

    const city = [
        { name: 'New York' },
        { name: 'Los Angeles' },
        { name: 'Chicago' },
        { name: 'Houston' },
        { name: 'Philadelphia' },
        { name: 'Phoenix' }
    ];

    const location = [
        { name: 'New York' },
        { name: 'Los Angeles' },
        { name: 'Chicago' },
        { name: 'Houston' },
        { name: 'Philadelphia' },
        { name: 'Phoenix' }
    ]

    return <div>
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}

            <form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                            CCP Requisition - MODIFIED 4-22-22FM
                        </h3>
                        <p className='text-base text-gray-700'>
                            Vendor and Shipping details
                        </p>
                    </div>
                    <button
                        onClick={() => dispatch(closeModal())}
                        type='button'
                        className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                        data-modal-toggle='small-modal'
                    >
                        <Close />
                    </button>
                </div>

                {/* Progress */}
                <div className='w-full bg-[#89A5AF] h-2.5 my-4'>
                    <div className='bg-[#2F5461] h-2.5 w-2/3'></div>
                </div>

                {/* form */}
                <div className='flex flex-col mx-6 mb-12'>
                    <FormSelect
                        value={props.values.vendor}
                        name='Select Vendor'
                        id='vendor'
                        error={props.errors.vendor}
                        touched={props.touched.vendor}
                        onChange={props.handleChange}>
                        <option value=''>Add New Vendor</option>
                        {
                            vendors?.map((vendor, index) => {
                                return <option key={index} value={vendor.name}>{vendor.name}</option>
                            })
                        }
                    </FormSelect>
                    <div className="pt-4">
                        <FormInputContainer name='Vendor ID.'>
                            <FormInputPlain type={"text"} onChange={props.handleChange} name="vendorId" placeholder={"Enter Vendor ID"} />
                            {props.errors.vendorId && props.touched.vendorId && <Error message={props.errors.vendorId} />}
                        </FormInputContainer>
                    </div>
                    <FormInputContainer name='Company Name'>
                        <FormInputPlain type={"text"} onChange={props.handleChange} name="companyName" placeholder={"Name"} />
                        {props.errors.companyName && props.touched.companyName && <Error message={props.errors.companyName} />}
                    </FormInputContainer>
                    <FormInputContainer name='Address'>
                        <FormInputPlain type={"text"} onChange={props.handleChange} name="addressStreet" placeholder={"Street"} />
                        {props.errors.addressStreet && props.touched.addressStreet && <Error message={props.errors.addressStreet} />}
                        <div className="flex gap-2 justify-center items-end">
                            <FormSelect
                                id='addressCity'
                                value={props.values.addressCity}
                                error={props.errors.addressCity}
                                touched={props.touched.addressCity}
                                onChange={props.handleChange}>
                                <option value=''>Select City</option>
                                {
                                    city?.map((city, index) => {
                                        return <option key={index} value={city.name}>{city.name}</option>
                                    })
                                }
                            </FormSelect>
                            <FormSelect
                                id='addressState'
                                value={props.values.addressState}
                                error={props.errors.addressState}
                                touched={props.touched.addressState}
                                onChange={props.handleChange}>
                                <option value=''>Select State</option>
                                {
                                    state?.map((state, index) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })
                                }
                            </FormSelect>
                            <div className="flex flex-col w-full">
                                <FormInputPlain type={"text"} onChange={props.handleChange} name="addressZipCode" placeholder={"Zip Code"} />
								{props.errors.addressZipCode && props.touched.addressZipCode && <Error message={props.errors.addressZipCode} />}
                            </div>
                        </div>
                    </FormInputContainer>
                    <FormInputContainer name='Enter the persons name for the ATTN field.'>
                        <FormInputPlain type={"text"} onChange={props.handleChange} name="name" placeholder={"Enter Name"} />
                        {props.errors.name && props.touched.name && <Error message={props.errors.name} />}
                    </FormInputContainer>
                    <FormInputContainer name='Enter the Shipping address.'>
                        <div className="flex flex-col">
                            <FormInputPlain type={"text"} onChange={props.handleChange} name="street" placeholder={"Street"} />
                            {props.errors.companyName && props.touched.street && <Error message={props.errors.street} />}
                        </div>
                        <div className="flex gap-2 justify-center items-end">
                            <FormSelect
                                value={props.values.vendor}
                                id='city'
                                error={props.errors.city}
                                touched={props.touched.city}
                                onChange={props.handleChange}>
                                <option value=''>Select City</option>
                                {
                                    city?.map((city, index) => {
                                        return <option key={index} value={city.name}>{city.name}</option>
                                    })
                                }
                            </FormSelect>
                            <FormSelect
                                value={props.values.vendor}
                                id='state'
                                error={props.errors.state}
                                touched={props.touched.state}
                                onChange={props.handleChange}>
                                <option value=''>Select State</option>
                                {
                                    state?.map((state, index) => {
                                        return <option key={index} value={state.name}>{state.name}</option>
                                    })
                                }
                            </FormSelect>
                            <div className="flex flex-col w-full">
                                <FormInputPlain type={"text"} onChange={props.handleChange} name="zipCode" placeholder={"Zip Code"} />
                                {props.errors.zipCode && props.touched.zipCode && <Error message={props.errors.zipCode} />}
                            </div>
                        </div>
                    </FormInputContainer>
                    <FormSelect
                        value={props.values.vendor}
                        id='location'
                        error={props.errors.location}
                        touched={props.touched.location}
                        name='Select Location'
                        onChange={props.handleChange}>
                        <option value=''>Select Location</option>
                        {
                            location?.map((location, index) => {
                                return <option key={index} value={location.name}>{location.name}</option>
                            })
                        }
                    </FormSelect>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(prevStep(1))} />
                    <DashboardButton
                        hidden
                        name='NEXT'
                        type='submit'
                        width='w-[77px]'
                    />
                </div>
            </form>
        </div>
    </div>
}


export default FormTwo;