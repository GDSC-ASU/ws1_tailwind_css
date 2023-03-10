import React from 'react'

function Navbar() {
    return <nav className="bg-white shadow-lg mx-auto px-4 py-2 flex justify-between items-center">
        <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg"
            className="w-52" />
        <ul class="flex">
            <li className="px-3 py-2 rounded-md hover:text-gray-600 font-medium cursor-pointer">Home</li>
            <li className="px-3 py-2 rounded-md hover:text-gray-600 font-medium cursor-pointer">About</li>
            <li className="px-3 py-2 rounded-md hover:text-gray-600 font-medium cursor-pointer">Contact</li>
        </ul>
        <p className="rounded-md bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 cursor-pointer">Sign In</p>
    </nav>

}

export default Navbar