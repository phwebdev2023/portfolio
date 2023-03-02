const Navbar = () => {
  return (
    <nav className="bg-indigo-900 py-6 text-center text-purple-200">
      <ul className="flex justify-between">
        <li>
          <a href="/">BrandLogo</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/gh-repo">GithubRepo</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
