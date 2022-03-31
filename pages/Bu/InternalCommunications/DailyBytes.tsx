import SideNav from '../../../components/SideNav/Sidenav'
import WriteToUS from '../../../components/WriteToUS/WriteToUS'

const fields = ['Scoop', 'Monthly Digest', '/Daily Bytes']

const DailyBytes = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className={` w-1/5`}>
          <SideNav name="Internal Communications" fields={fields} />
        </div>
      </div>
      <WriteToUS />
    </div>
  )
}

export default DailyBytes
