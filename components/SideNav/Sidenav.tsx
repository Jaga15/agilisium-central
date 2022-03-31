import classes from './SideNav.module.css'

const SideNav = () => {
  const fields = ['Scoop', 'Monthly Digest', 'Daily Bytes']

  return (
    <div className={`${classes.bluegradient}  h-screen`}>
      <p className={`${classes.blue} text-center text-lg py-4`}>
        Internal Communication
      </p>
      <hr className="border-white pb-3" />
      {fields.map((ele) => (
        <a key={ele} className="pl-6 py-3 text-sm block" href={`#${ele}`}>
          {ele}
        </a>
      ))}
    </div>
  )
}
export default SideNav
