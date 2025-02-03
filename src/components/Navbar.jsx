import Avatar from "../assets/img/profile.png";

const Navbar = () => {
    return (
        <div className="flex justify-between  items-center bg-black text-white p-8">
            <div className="ml-30 font-bold text-xl max-sm:ml-5 max-sm:text-blue-600">
                <h1>Angkringan</h1>
            </div>
            <div className="flex justify-between items-center mr-30 max-sm:mr-5">
                <span className="mr-3">Admin</span>
                <img className="h-10 rounded-full" src={Avatar} alt="avatar-profile" />
            </div>
        </div>
    )
}

export default Navbar;