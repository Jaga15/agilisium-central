interface CarouselLayouttype {
  image: string
}
const CarouselLayout = (props: CarouselLayouttype) => {
  return (
    <div className="flex py-8 items-center justify-between mx-7">
      <img src="../assets/images/Group 68.svg" className="mr-2 w-6 h-6" />
      <img className="object-scale-down h-72 " src={props.image} />
      <img src="../assets/images/Group 18.svg" className="ml-2 w-6 h-6" />
    </div>
  )
}
export default CarouselLayout
