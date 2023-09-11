/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={
                'transition duration-300 w-full focus-outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
            }
            type={type}
        />
    );
});

Input.displayName = 'Input';

export default Input;
