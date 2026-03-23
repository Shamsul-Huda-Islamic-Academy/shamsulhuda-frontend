import { Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
// import { Facebook, Youtube, Instagram } from "lucide-react"

export default function Navbar() {
    return (
        <div className="grid grid-row-2 m-6">
            <div className="hidden md:grid grid-cols-2  px-16 py-2 text-sm text-gray-600">
                <div className="flex items-start gap-8">
                    <span className="flex items-center justify-center gap-2 font-semibold">
                        <Phone size={16} color="#4a9c59" />
                        +91 8606071078
                    </span>
                    <span className="flex items-center justify-center gap-2 font-semibold">
                        <Mail size={16} color="#4a9c59" />
                        shamsulhudaacademy@yahoo.com
                    </span>
                </div>

                <div className="flex items-center justify-end gap-4">
                    {/* <Facebook size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" />
                    <Youtube size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" />
                    <Instagram size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" /> */}
                </div>
            </div>
            <div className="flex items-center justify-between px-16 py-1">
                
                <div className="w-36">
                    <img src="/src/assets/images/shia-logo-j (1).png" alt="" />
                </div>

                <div className="md:flex justify-between gap-6 text-lg font-medium">
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">Home</Link>
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">Mission</Link>
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">Facilities</Link>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600 hover:text-[#4A9C59]">
                            Activities
                        </span>
                        <div className="absolute left-0 z-10 hidden bg-white border-gray-100 rounded-md shadow-md top-full min-w-max group-hover:block">
                            <Link to="/events" className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:text-[#4A9C59]">Events</Link>
                            <Link to="/activities" className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:text-[#4A9C59]">Activities</Link>
                        </div>
                    </div>
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">Faculties</Link>
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">Management</Link>
                    <Link to='/' className="text-gray-600 hover:text-[#4A9C59] transition-colors">About</Link>
                </div>

                <div className="">
                    <button
                        className="bg-[#4A9C59] px-6 py-2 rounded-lg text-white active:scale-95 hover:bg-green-600" 
                    >
                        Donate
                    </button>
                </div>
            </div>        
        </div>
    )
}

{/* <div className="bg-white flex items-start justify-between">
                <div className="w-32 h-28">
                    <img src="/src/assets/images/shia-logo-j (1).png" alt="w-full h-full" />
                </div>
            </div> */}