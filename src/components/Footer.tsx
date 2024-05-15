import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight hover:text-orange-100">
            <Link to='/'>
                MERN Eats
            </Link>
        </span>
        <span className="text-white tracking-tight font-bold flex gap-4">
                <span className="hover:text-black">Privacy Policy</span>
                <span className="hover:text-black">Terms of Service</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
