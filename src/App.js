import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Part from "./components/Part";
// import Gallery from "./components/Gallery";
import vrHeadset from "./assets/vrHeadset.jpg";
function App() {
  return (
    <>
      <Header />
      <div className="h-60vh flex justify-center items-center bg-VR bg-no-repeat bg-center bg-cover">
        <div className="h-max w-max text-center p-4 bg-lime-950">
          <p className="text-5xl font-bold capitalize text-white">
            SAE 402 : Concevoir un dispositif interactif
          </p>
        </div>
      </div>

      <div className="flex flex-col h-80vh">
        <p className="text-4xl font-bold text-green-950 pl-7 pt-7 uppercase mb-10">
          Concept
        </p>
        <div className="px-10 pb-10 flex flex-row h-fit gap-10">
          <img src={vrHeadset} className="w-50%" />
          <p className="w-40%">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <p className="px-10 leading-loose">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
      <div className="flex flex-col h-70vh bg-green-950">
        <p className="text-4xl font-bold text-wite pl-7 pt-7 uppercase mb-10 text-white">
          Développement
        </p>
        <div className="px-10 pb-10 flex flex-row h-fit justify-around">
          <div className="w-500">
            <Gallery />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">Une découverte</h3>
            <p className=" text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
        <h3 className="text-white text-2xl font-bold mb-3 px-10">Épreuve de créativité</h3>

        <p className="px-10 text-white leading-loose">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </>
  );
}

export default App;
