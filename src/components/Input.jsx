/* eslint-disable react/prop-types */
export default function Input({ type = 'text', ...props }) {
    return (
        <input
            {...props}
            className={
                'transition duration-300 w-full focus-outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
            }
            type={type}
        />
    );
}
