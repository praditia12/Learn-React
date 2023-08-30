/* eslint-disable react/prop-types */
import {
  IconBrandFacebook,
  IconBrandGitlab,
  IconBrandTiktok,
  IconBrandTwitter,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
  const type = 'submit';
  const onClick = () => console.log('Login with another style..');

  return (
    <div className={'bg-light-600 grid place-content-center min-h-screen'}>
      <div className='flex gap-x-2'>
        <Button type='submit'>
          <IconBrandFacebook />
          Register
        </Button>

        <Button {...{ type, onClick }}>
          <IconBrandTiktok />
          Register
        </Button>

        <Button className='bg-sky-600' onClick={() => console.log('Login')}>
          <IconBrandTwitter />
          Login
        </Button>

        <Button className='bg-black' type='reset'>
          <IconBrandGitlab />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { className = 'bg-blue-600', text, children, type = 'submit' } = props;

  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded',
      )}
    >
      {text || children}
    </button>
  );
}
