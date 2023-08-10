// layouts/register.tsx
import SideBar from '../components/SideBar'



export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
          <div className='flex w-screen'>
            <div className='w-64'>
              <SideBar/>
            </div>
            <div className="flex-1">
              {children}
            </div>
          </div>
      </div>
    )
  }