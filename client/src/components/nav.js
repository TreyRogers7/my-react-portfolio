import {NavLink, 
    Nav,
    NavItem} from 'reactstrap';

const Navbar = () => {
    return (
        <div>
  <Nav tabs bg="dark">
    <NavItem>
      <NavLink
        active
        href="/"
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/projects">
       Projects
      </NavLink>
    </NavItem>
  </Nav>
</div>
    );
};

export default Navbar