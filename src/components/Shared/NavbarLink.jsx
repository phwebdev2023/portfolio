const NavbarLink = (props) => {
  return (
    <li className="group">
      <a href={props.url}>{props.name}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </li>
  );
};

export default NavbarLink;
