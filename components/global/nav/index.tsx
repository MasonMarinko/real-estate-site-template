
const NavBar = () => {
return (
    <div className="bg-gradient-to-b from-blue-800 to-transparent">
        <div className="max-w-[720px] h-[5rem] mx-auto">
            <div className="grid grid-cols-h-[7rem]">
                    <a className="absolute top-[-2rem] left-[25rem] max-w-[10rem]"><img src="https://i.imgur.com/wxzsWXr.png" title="source: imgur.com" /></a>
                    <nav className="flex relative gap-10 justify-end">
                        <a className="text-lg">Search</a>
                        <a className="text-lg">About Me</a>
                        <a className="text-lg">Contact Me</a>
                        <a className="text-lg">Listings</a>
                    </nav>
            </div>
        </div>
    </div>
)
}

export default NavBar