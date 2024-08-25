import { Col, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Users } from 'src/components/users/users';

export function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{}}><Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Arya's Portal</Navbar.Brand>
          </Container>
        </Navbar></div>
        <div style={{ flexGrow: '1' }}>
          <div style={{ display: 'flex', flexDirection: 'row', height:'100%' }}>
            <div style={{ display: 'flex'}}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="users">Users</Link></Nav.Link>
                <Nav.Link><Link to="/nothing-here">Nothing</Link></Nav.Link>
              </Nav>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<><h1>Layout</h1></>}></Route>
                <Route path="/users" element={<Users></Users>}></Route>
                <Route path="*" element={<><h1>Not found</h1></>}></Route>
              </Routes>

            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
