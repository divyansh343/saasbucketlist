import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout