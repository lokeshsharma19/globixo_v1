import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import img from "./assets/background.png";

function App() {
  return (
    <div className="w-full relative z-0 bg-bgColor overflow-hidden">
      <Navbar />
      <div className="absolute w-full  h-120 blurClass -z-10"></div>
      <div className="absolute w-full max-h-120 h-120 flex ">
        <img
          src={img}
          alt="background"
          className="  w-full h-full object-cover -z-20 flex-shrink-0 small-screen-mask"
          style={{
            minWidth: "1280px",
          }}
        />
      </div>
      {/* </div> */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;

//  style={
//             {
// WebkitMaskImage: "linear-gradient(black, black, transparent)",
// maskImage: "linear-gradient(black, black, transparent)",
// backdropFilter: "blur(8px)",
//               //             backgroundImage: -webkit-linear-gradient(top, rgba(248, 244, 243, 0)),
//               // backgroundImage: -ms-linear-gradient(top, rgba(248, 244, 243, 0)),
//               //   backgroundImage: linear-gradient(to bottom, rgba(2248, 244, 243, 0)  ),
//             }
//           }
