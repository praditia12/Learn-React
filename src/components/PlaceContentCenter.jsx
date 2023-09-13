/* eslint-disable react/prop-types */
export default function PlaceContentCenter({ children }) {
    return (
        <div className={'bg-white'}>
            <div className={'bg-slate-100 text-black min-h-screen flex items-center justify-center antialiased tracking-tight'}>
                <div className='max-w-lg w-full'>{children}</div>
            </div>
        </div>
    );
}
