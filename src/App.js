import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Part from "./components/Part";
import Part2 from "./components/Part2";
import vrHeadset from "./assets/vrHeadset.jpg";
import Textes from "./assets/Data.js";

function App() {
  let data = [
    "L'objectif de la SAE était de créer une application web promouvant un geste éco-responsable à l aide de technos 3D, AR (Augmented Reality) ou VR (Virtual Reality). Cette SAE réalisée en binôme nous a fait nous adapter à un environnement inconnu même si la base de code était connue. Il a fallu être créatif afin de concevoir un environnement de jeu inventif mais simple, tout en restant original.  ",
    'Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage, and goingthrough the cites of the word in classical literature, discovered theundoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good andEvil) by Cicero, written in 45 BC. This book is a treatise on thetheory of ethics, very popular during the Renaissance. The first lineof Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line insection 1.10.32.',
  ];
  return (
    <>
      <Header />
      <div className="h-60vh flex justify-center items-center bg-VR bg-no-repeat bg-center bg-cover">
        <div className="h-max w-max text-center p-4 bg-green-950">
          <p className="text-5xl font-bold capitalize text-white">
            SAE 402 : Concevoir un dispositif interactif
          </p>
        </div>
      </div>

      <Part
        text1={Textes[0].text1}
        text2={Textes[0].text2}
        name={Textes[0].nom}
        img={Textes[0].img}
      />
      <Part2
        text1={Textes[1].text1}
        text2={Textes[1].text2}
        name={Textes[1].nom}
      />
      <div className="h-70vh flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-8">
          <a href="https://github.com/NathanCarlini/SAE402/">
            <div className="bg-green-950 rounded-full py-1 px-2 text-white opacity-70 text-lg">Code de l'application</div>
          </a>
          <a href="https://github.com/NathanCarlini/sae402-site/">
            <div className="bg-green-950 rounded-full py-1 px-2 text-white opacity-70 text-lg">Code du site React</div>
          </a>
        </div>
        <a href="https://mmi.unilim.fr/~meunier49/SAE402-1/" className="mt-32">
          <div className="bg-green-950 rounded-full py-3 px-6 text-white opacity-70 text-5xl font-bold">Jouer</div>
        </a>
      </div>
    </>
  );
}

export default App;
