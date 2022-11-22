// REUSABLE INPUT COMP
export function Input(props) {
    const { placeholder } = props;
    return <input className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5" placeholder={placeholder} type='text' />
} 

// REUSABLE LABEL COMP

export function Label(props) {
    const { styles } = props;
    return <label className={styles}>{props.name }</label>
}
// REUSABLE BUTTON COMP

export function Button(props) {
    const { name } = props;
    return <button type="submit" className="text-white w-[344px] hover:bg-blue-800 focus:ring-4 bg-[#3B6979]  focus:outline-none focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-3 text-center">{name}</button>
}