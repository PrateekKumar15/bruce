import React from 'react'

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return <div className='w-full min-h-screenflex justify-center items-center'> {children} </div>;
};

export default Layout