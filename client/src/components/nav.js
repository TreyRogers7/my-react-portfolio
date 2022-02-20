import {NavLink, 
    Nav,
    NavItem} from 'reactstrap';

const Navbar = () => {
    return (
        <div>
  <Nav tabs>
    <NavItem>
      <NavLink
        active
        href="/"
      >
        Home
      </NavLink>
    </NavItem>
    
    <NavItem>
      <NavLink href="/about">
        About
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/projects">
       Projects
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/contact"
      >
        Contact
      </NavLink>
    </NavItem>
  </Nav>
</div>
    );
};

export default Navbar