
import landingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Tuck into a takeaway today
        </h1>
        <span className="text-xl">Your next meal is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway on your palm!
          </span>
          <span >Download MERN Eats App for faster ordering and personalised recommendations</span>
        </div>
        <img src={appDownload} alt="Download" />
      </div>
    </div>
  )
}

export default HomePage
