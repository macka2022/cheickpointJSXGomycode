
import './App.css';
import Description from './Component/Description';
import Image from './Component/Image';
import Prix from './Component/Prix';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Name from './Component/Name';
function App() {
  return (
    <div className="App">
    <Card style={{ width: '20rem' , backgroundColor:'black',color:'white'}}>
        <Image />  
      <Card.Body>
        <Card.Title>Nom:<Name />. Prix:<Prix /></Card.Title>
        <Card.Text>
          < Description />
        </Card.Text>
       
      </Card.Body>
    </Card>
 
    </div>
  );
}

export default App;
