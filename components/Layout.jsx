import Navbar from "./layout/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
      {/* <Info />
      <Cta />
      <Footer /> */}
    </div>
  )
}

export default Layout