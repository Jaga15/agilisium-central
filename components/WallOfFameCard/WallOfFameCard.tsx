import classes from './WallOfFameCard.module.css'

const WallOfFameCard = () => {
  return (
    <div className="mt-9 mb-28">
      <p className={`${classes.blue} text-3xl text-center pb-3`}>
        Wall Of Fame
      </p>
      <div className="w-5/6 mx-auto relative flex flex-col shadow-2xl rounded-lg">
        <p className=" absolute top-0 left-36 bg-blue-400 p-2 text-white ">
          March 2022
        </p>
        <div className="flex p-5 mt-9 self-center">
          <p className={`${classes.active} mx-5`}>Go-Getter</p>
          <p className=" mx-5">Monthly Shining Star</p>
          <p className=" mx-5">Tanzanites</p>
          <p className=" mx-5">Alexandrites</p>
          <p className=" mx-5">Jaedites</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/12">
            <img src="assets/images/Group 68.svg" className="ml-2 w-10 h-10" />
          </div>

          <div className="flex justify-center items-center flex-col w-3/12">
            <img src="assets/images/annimg.png" className="w-4/5" />
            <p className={`${classes.blue} mt-6 mb-1 text-xl`}>
              Surya SivaKumar
            </p>
            <p className={`${classes.blue} text-xl`}> UMG </p>
          </div>

          <div className="w-7/12">
            <p className={`${classes.title} text-4xl pb-3`}>Go-Getter Award</p>
            <p className="text-sm text-left">
              raesent at dui tincidunt, accumsan purus et, auctor lorem. Nam
              vehicula lorem nec mauris commodo auctor. Vestibulum tellus arcu,
              porta at hendrerit vitae, pharetra ac libero. Vivamus hendrerit mi
              sem, vel maximus lorem accumsan at. Nam diam orci, luctus vel erat
              euismod, luctus venenatis justo. Nulla lacinia dui ut tortor
              maximus imperdiet. Mauris vel nulla vitae metus porta condimentum
              eget nec dui. Quisque nisl odio, pretium a tincidunt nec,
              ullamcorper quis est. Fusce quis metus a tortor dapibus commodo.
              Maecenas mattis lorem vel elementum commodo. Vestibulum purus
              nibh, lacinia maximus ante non, viverra posuere enim. Proin
              ultrices imperdiet ex, ac tincidunt Leo posuere eu. Nunc
              sollicitudin ligula id ligula laoreet consequat. Fusce vulputate
              vulputate diam suscipit suscipit. Mauris et justo elit. Vivamus
              sem elit, dignissim ac aliquam consequat, egestas quis mi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Morbi nec eros vitae lectus vestibulum blandit sed non risus.
            </p>
          </div>
          <div className="w-1/12 flex justify-end ">
            <img src="assets/images/Group 18.svg" className="w-10 h-10 mr-2" />
          </div>
        </div>

        <p className={`text-right p-8 ${classes.blue}`}>View All Archives</p>
      </div>
    </div>
  )
}

export default WallOfFameCard
