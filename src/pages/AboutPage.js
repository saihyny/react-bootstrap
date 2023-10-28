import { Container, Navbar, Button } from "react-bootstrap";
import Headder from "../Counter";
import Footer from "../Footer";
const AboutPage = props=>{
   
    return (
        <div style={{ backgroundColor: "orange", marginBottom:0 } }>
         <Navbar className="fixed-top" bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/Store">Store</Navbar.Brand>
          <Navbar.Brand href="/About">About</Navbar.Brand>
        </Container>
      </Navbar>

       <Headder></Headder>
    <h2 style={{textAlign:'center'}}>About</h2>
    <p>

Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.

Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.

Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.
    </p>
    <Footer></Footer>
    </div>
    )
    

}
export default AboutPage;