import Navbar from "./navBar";
import CentralImage from "./CentralImage";
import Divider from "./Divider";
import TextImageSquare from "./TextImageSquare";
import TextText from "./TextText";
import Profile from "./Profile";
import Contacts from "./Contacts";


function App() {
  const customStyle = {
    backgroundColor: 'red',
    display: 'flex',
  }

  return (
    <div className="container">
      < Navbar />
      <div className="d-flex align-items-center my-1 flex-column">
      <CentralImage />
      <Divider />
      <TextImageSquare />
      <TextText />
      <Profile />
      <Contacts />
      </div>
    </div>
  );
}

// #DF9CA4 = Rosa
// #682683 = Roxo
// #F4E04D = Amarelo

export default App;
