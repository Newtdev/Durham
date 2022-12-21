export const FormSelect = (props) => {
    // const { value, setFieldValue, name, } = props;
    // const [field] = useField(props)
    
    return <>
        <label className="bg-gray-50 border flex items-center justify-between border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979]  w-full pr-2">
            <select {...props} className='w-full p-2.5 bg-gray-50'
            >
                {props.children}
            </select>
        </label>
    </>
};