import CarouselLayout from '../../components/CarouselLayout/CarouselLayout'
import GradientTitle from '../../components/GradientTitle/GradientTitle'
import SideNav from '../../components/SideNav/Sidenav'
import WhatsNewCard from '../../components/WhatsNewCard/WhatsNewCard'
// import classes from '../../styles/InternalCommunication.module.css'
const InternalCommunication = () => {
  return (
    <div className="flex justify-between">
      <div className={` w-1/5`}>
        <SideNav />
      </div>
      <div className={`w-3/6 `}>
        <GradientTitle name="Fun Space" />
        <CarouselLayout image="../../assets/images/image1.png" />
        <GradientTitle name="Scoop" />
        <CarouselLayout image="../../assets/images/image 5.png" />
        <GradientTitle name="Monthly Digest" />
        <CarouselLayout image="../../assets/images/image 6.png" />
      </div>
      <div className={`w-1/5 mr-10`}>
        <WhatsNewCard
          image="../../assets/images/l1.png"
          title="Build Application Modernization Practice with AWS (Technical)"
          description="Whatever the agency, organization or institution, our customers want to become Whatever the agency, organization or institution, our customers want to becomeWhatever the agency, organization or institution, our customers want to become"
        />
      </div>
    </div>
  )
}

export default InternalCommunication
