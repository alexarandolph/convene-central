import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';


function App(props) {
  return (
    <>
    <Nav className="Navbar" />

    <div className="container">
      <LocationForm />
    {/* <AttendeesList attendees={props.attendees} /> */}
    </div>
    </>
  );
}

export default App;
