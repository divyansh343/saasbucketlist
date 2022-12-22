import Navbar from "./layout/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout