/* eslint-disable react/prop-types */
import clsx from 'clsx';

export default function Button({ className = 'bg-black', text, children, type = 'submit', ...props }) {
    return (
        <button
            {...props} // by default atribut component
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-items-center items-center gap-x-2 text-white px-4 h-10 rounded',
            )}>
            {text || children}
        </button>
    );
}
