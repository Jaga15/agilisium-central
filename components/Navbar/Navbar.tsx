import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav
      className={`${classes.nav} flex flex-row items-center justify-between`}
    >
      <div className="flex pl-3 ">
        <a
          className={`${classes.navitem} ${classes.active} mx-4 text-warning`}
          href="./index.html"
        >
          Home
        </a>
        <a className={`${classes.navitem} mx-4`} href="#">
          BU
        </a>
        <a className={`${classes.navitem} mx-4`} href="#">
          Policy Documents
        </a>
        <a className={`${classes.navitem} mx-4`} href="#">
          Current Openings
        </a>
        <a className={`${classes.navitem} mx-4`} href="#">
          Who’s MAD
        </a>
      </div>
      <div className="flex items-center">
        <div
          className={`${classes.navcheckinbtn} rounded-full text-white p-2 m-2 `}
        >
          <p className={`${classes.check} m-0 text-center`}>check</p>
          <p className={`${classes.in} m-0 text-center`}>IN</p>
        </div>
        <div>
          <button
            className={`${classes.navbtn} flex bg-gray-300 rounded mx-4 px-3 py-2 `}
          >
            Suggestion Box
            <img
              src="assets/images/Group 17.svg"
              className={classes.bellicon}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
