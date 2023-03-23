import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 flex flex-row items-center transition duration-500 bg-zinc-900/90">
        <img className="h-28 lg:h-36" src="/images/logo_transp.svg" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
        <NavbarItem label="Home"/>
        <NavbarItem label="Genre"/>
        <NavbarItem label="Multiplayer"/>
        <NavbarItem label="New & Popular"/>
        <NavbarItem label="My List"/>
        <NavbarItem label="Browse by Console"/>
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;