import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import LoginModal from "../components/auth/loginModal";
import RegiterModal from "../components/auth/registerModal";
import { logoutHandler } from "../redux/action/auth-action";

export default function NavFct() {
  const user = useSelector(state => state.auth.user)
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const history=useHistory()
  const logoutUser=()=>{
dispatch(logoutHandler())

  }

  const authLinks = (
    <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
   
        {/* <Nav.Link> <Link to="/dashboard" style={{color:"white",textDecoration: 'none'}}>Dashboard </Link></Nav.Link> */}
     
 { user?.status === "admin" && <Nav.Link><Link to="/ApprouveUser" style={{color:"white",textDecoration: 'none'}}> Approuve User</Link></Nav.Link>} 
      {/* <Button onClick={logoutUser} > Logout  </Button> */}
      <Nav.Link style={{color:"white"}} onClick={logoutUser} >Logout</Nav.Link>
      </div>
    </>
  );
  const visitorLinks = (
    <>
      <div className="navBtns" >
        <LoginModal />
        <div style={{marginLeft:30}}>
        <RegiterModal />
        </div>
      </div>
    </>
  );

  return (
    <div className="Navbar" > 
      <Navbar bg="dark" variant="dark"  >
        <Container style={{display:"flex", 
        justifyContent: isAuth ? "flex-start" : "space-between"}}>
          <Navbar.Brand >
            <img
              src="../images/logo.png"
              // width="45"
              height="80"
              // className="d-inline-block align-top"
              // alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav >
 
{isAuth ? authLinks : visitorLinks  }

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
