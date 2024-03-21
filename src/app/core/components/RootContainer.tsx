
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const RootContainer = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className='container relative'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
