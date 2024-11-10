/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom"

const Index = () => {

    const MainIndex = () => {
        return (
          <>
              <nav>
                  <ul>
                     <NavLink to={"/"}> <li>User</li></NavLink>
                     <NavLink to={"/admin"}> <li>Admin</li></NavLink>
                  </ul>
              </nav>
          </>
        )
      }

  return (
    <>
        {/* <MainIndex/> */}
        <Outlet/>
    </>
  )
}

export default Index