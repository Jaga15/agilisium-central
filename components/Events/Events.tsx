import classes from './Events.module.css'
import EventCard from '../EventCard/EventCard'
import { useState } from 'react'

interface event {
  image: string
  desgination: string
  name: string
  likes: number
}

interface Eventtype {
  birthday: Array<event>
  WorkAnniversary: Array<event>
  NewJoiners: Array<event>
  NewBorn: Array<event>
}

const Events = (props: Eventtype) => {
  const [data, setdata] = useState<Array<event>>(props.birthday)

  const changedata = (name: string) => {
    const id = ['birthday', 'WorkAnniversary', 'NewJoiners', 'NewBorn']
    id.map(
      (ele) =>
        (document.getElementById(
          ele
        )!.className = `whitespace-nowrap text-sm mr-4 hover:cursor-pointer`)
    )
    document.getElementById(
      name
    )!.className = `${classes.active} whitespace-nowrap text-sm mr-4 hover:cursor-pointer`
    setdata(props[name as keyof Eventtype])
  }

  return (
    <div className="p-6 rounded bg-gray-100 ">
      <div className="flex flex-row overflow-auto">
        <p
          className={`${classes.active} whitespace-nowrap text-sm mr-4 hover:cursor-pointer`}
          id="birthday"
          onClick={() => changedata('birthday')}
        >
          Birthday
        </p>
        <p
          className="whitespace-nowrap text-sm mr-4 hover:cursor-pointer"
          id="WorkAnniversary"
          onClick={() => changedata('WorkAnniversary')}
        >
          Work Anniversary
        </p>
        <p
          className="whitespace-nowrap text-sm mr-4 hover:cursor-pointer"
          id="NewJoiners"
          onClick={() => changedata('NewJoiners')}
        >
          New Joiners
        </p>
        <p
          className="whitespace-nowrap text-sm mr-4 hover:cursor-pointer"
          id="NewBorn"
          onClick={() => changedata('NewBorn')}
        >
          New Born
        </p>
      </div>
      <div className="flex mt-6 overflow-auto">
        {data.map((ele, index) => (
          <EventCard
            key={index}
            image={ele.image}
            desgination={ele.desgination}
            name={ele.name}
            likes={ele.likes}
          />
        ))}

        {/* <EventCard
          image="assets/images/l2.png"
          desgination="Analyst - Software Engineer"
          name="Santhiya Viswanathan"
          likes={12}
        /> */}
      </div>
    </div>
  )
}

export default Events
