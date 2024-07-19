import Navbar from "./navBar";
import CentralImage from "./CentralImage";
import Divider from "./Divider";
import TextImageSquare from "./TextImageSquare";
import DividerAlt from "./DividerAlt"
import TextText from "./TextText";
import Profile from "./Profile";
import Contacts from "./Contacts";


function App() {

  return (
    <div className="container custom-body">
      < Navbar />
      <div className="d-flex align-items-center my-1 flex-column">
      <CentralImage />
      <Divider />
      <TextImageSquare />
      <DividerAlt />
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
