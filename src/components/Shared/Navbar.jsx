import logo from '../../assets/logo.png';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-indigo-900 py-1 font-bold text-purple-200">
        <a href="/">
          <img src={logo} alt="Logo" className="h-20 w-40" />
        </a>
        <ul className="flex h-6 space-x-8">
          <NavbarLink name="Home" url="/" />
          <NavbarLink name="About" url="/about" />
          <NavbarLink name="Projects" url="/projects" />
          <NavbarLink name="Resume" url="/resume" />
          <NavbarLink name="Github Repo" url="/github-repo" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
