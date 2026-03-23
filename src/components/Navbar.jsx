import { Phone, Mail } from "lucide-react"
// import { Facebook, Youtube, Instagram } from "lucide-react"

export default function Navbar() {
    return (
        <div className="grid grid-row-2 min-h-screen m-6">
            <div className="grid grid-cols-2  px-16 py-2 text-sm text-gray-600">
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
        </div>
    )
}

{/* <div className="bg-white flex items-start justify-between">
                <div className="w-32 h-28">
                    <img src="/src/assets/images/shia-logo-j (1).png" alt="w-full h-full" />
                </div>
            </div> */}