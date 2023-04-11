import {FC} from 'react'

const Wrapper:FC<{children: React.ReactNode}> = ({children}) =>{
  return (
    <div className='max-w-screen-xl m-auto px-4'>{children}</div>
  )
}
export default Wrapper