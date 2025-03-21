import React, { useState, useEffect } from "react";

interface Champion {
  champion_name: string;
  cost: string;
  trait: string[];
  image_url: string;
}

interface Trait {
  Trait_Name: string;
  Trait_Image_URL: string;
}

const championData = [
  {
    champion_name: "Alistar",
    cost: "1 cost",
    trait: ["Golden Ox", "Bruiser"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Alistar.jpg?w=290",
  },
  {
    champion_name: "Dr. Mundo",
    cost: "1 cost",
    trait: ["Street Demon", "Bruiser", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_DrMundo.jpg?w=290",
  },
  {
    champion_name: "Jax",
    cost: "1 cost",
    trait: ["Exotech", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Jax.jpg?w=290",
  },
  {
    champion_name: "Kindred",
    cost: "1 cost",
    trait: ["Nitro", "Rapidfire", "Marksman"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Kindred.jpg?w=290",
  },
  {
    champion_name: "Kog'Maw",
    cost: "1 cost",
    trait: ["BoomBot", "Rapidfire"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_KogMaw.jpg?w=290",
  },
  {
    champion_name: "Morgana",
    cost: "1 cost",
    trait: ["Divinicorp", "Dynamo"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Morgana.jpg?w=290",
  },
  {
    champion_name: "Nidalee",
    cost: "1 cost",
    trait: ["Nitro", "A.M.P."],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_NidaleeCougar.jpg?w=290",
  },
  {
    champion_name: "Poppy",
    cost: "1 cost",
    trait: ["Cyberboss", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Poppy.jpg?w=290",
  },
  {
    champion_name: "Seraphine",
    cost: "1 cost",
    trait: ["Anima Squad", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Seraphine.jpg?w=290",
  },
  {
    champion_name: "Shaco",
    cost: "1 cost",
    trait: ["Syndicate", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Shaco.jpg?w=290",
  },
  {
    champion_name: "Sylas",
    cost: "1 cost",
    trait: ["Anima Squad", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Sylas.jpg?w=290",
  },
  {
    champion_name: "Vi",
    cost: "1 cost",
    trait: ["Cypher", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Vi.jpg?w=290",
  },
  {
    champion_name: "Zyra",
    cost: "1 cost",
    trait: ["Street Demon", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Zyra.jpg?w=290",
  },
  {
    champion_name: "Darius",
    cost: "2 cost",
    trait: ["Syndicate", "Bruiser"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Darius.jpg?w=290",
  },
  {
    champion_name: "Ekko",
    cost: "2 cost",
    trait: ["Street Demon", "Strategist"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Ekko.jpg?w=290",
  },
  {
    champion_name: "Graves",
    cost: "2 cost",
    trait: ["Golden Ox", "Executioner"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Graves.jpg?w=290",
  },
  {
    champion_name: "Illaoi",
    cost: "2 cost",
    trait: ["Anima Squad", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Illaoi.jpg?w=290",
  },
  {
    champion_name: "Jhin",
    cost: "2 cost",
    trait: ["Exotech", "Marksman", "Dynamo"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Jhin.jpg?w=290",
  },
  {
    champion_name: "LeBlanc",
    cost: "2 cost",
    trait: ["Cypher", "Strategist"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_LeBlanc.jpg?w=290",
  },
  {
    champion_name: "Naafiri",
    cost: "2 cost",
    trait: ["Exotech", "A.M.P."],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Naafiri.jpg?w=290",
  },
  {
    champion_name: "Rhaast",
    cost: "2 cost",
    trait: ["Divinicorp", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Rhaast.jpg?w=290",
  },
  {
    champion_name: "Shyvana",
    cost: "2 cost",
    trait: ["Nitro", "Bastion", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Shyvana.jpg?w=290",
  },
  {
    champion_name: "Skarner",
    cost: "2 cost",
    trait: ["BoomBot", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Skarner.jpg?w=290",
  },
  {
    champion_name: "Twisted Fate",
    cost: "2 cost",
    trait: ["Syndicate", "Rapidfire"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_TwistedFate.jpg?w=290",
  },
  {
    champion_name: "Vayne",
    cost: "2 cost",
    trait: ["Anima Squad", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Vayne.jpg?w=290",
  },
  {
    champion_name: "Veigar",
    cost: "2 cost",
    trait: ["Cyberboss", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Veigar.jpg?w=290",
  },
  {
    champion_name: "Braum",
    cost: "3 cost",
    trait: ["Syndicate", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Braum.jpg?w=290",
  },
  {
    champion_name: "Draven",
    cost: "3 cost",
    trait: ["Cypher", "Rapidfire"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Draven.jpg?w=290",
  },
  {
    champion_name: "Elise",
    cost: "3 cost",
    trait: ["Nitro", "Dynamo"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Elise.jpg?w=290",
  },
  {
    champion_name: "Fiddlesticks",
    cost: "3 cost",
    trait: ["BoomBot", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Fiddlesticks.jpg?w=290",
  },
  {
    champion_name: "Galio",
    cost: "3 cost",
    trait: ["Cypher", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Galio.jpg?w=290",
  },
  {
    champion_name: "Gragas",
    cost: "3 cost",
    trait: ["Divinicorp", "Bruiser"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Gragas.jpg?w=290",
  },
  {
    champion_name: "Jarvan IV",
    cost: "3 cost",
    trait: ["Golden Ox", "Vanguard", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Jarvan.jpg?w=290",
  },
  {
    champion_name: "Jinx",
    cost: "3 cost",
    trait: ["Street Demon", "Marksman"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Jinx.jpg?w=290",
  },
  {
    champion_name: "Mordekaiser",
    cost: "3 cost",
    trait: ["Exotech", "Bruiser", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Mordekaiser.jpg?w=290",
  },
  {
    champion_name: "Rengar",
    cost: "3 cost",
    trait: ["Street Demon", "Executioner"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Rengar.jpg?w=290",
  },
  {
    champion_name: "Senna",
    cost: "3 cost",
    trait: ["Divinicorp", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Senna.jpg?w=290",
  },
  {
    champion_name: "Varus",
    cost: "3 cost",
    trait: ["Exotech", "Executioner"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Varus.jpg?w=290",
  },
  {
    champion_name: "Yuumi",
    cost: "3 cost",
    trait: ["Anima Squad", "A.M.P.", "Strategist"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Yuumi.jpg?w=290",
  },
  {
    champion_name: "Annie",
    cost: "4 cost",
    trait: ["Golden Ox", "A.M.P."],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Annie.jpg?w=290",
  },
  {
    champion_name: "Aphelios",
    cost: "4 cost",
    trait: ["Golden Ox", "Marksman"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Aphelios.jpg?w=290",
  },
  {
    champion_name: "Brand",
    cost: "4 cost",
    trait: ["Street Demon", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Brand.jpg?w=290",
  },
  {
    champion_name: "Cho'Gath",
    cost: "4 cost",
    trait: ["BoomBot", "Bruiser"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Chogath.jpg?w=290",
  },
  {
    champion_name: "Leona",
    cost: "4 cost",
    trait: ["Anima Squad", "Vanguard"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Leona.jpg?w=290",
  },
  {
    champion_name: "Miss Fortune",
    cost: "4 cost",
    trait: ["Syndicate", "Dynamo"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_MissFortune.jpg?w=290",
  },
  {
    champion_name: "Neeko",
    cost: "4 cost",
    trait: ["Street Demon", "Strategist"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Neeko.jpg?w=290",
  },
  {
    champion_name: "Sejuani",
    cost: "4 cost",
    trait: ["Exotech", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Sejuani.jpg?w=290",
  },
  {
    champion_name: "Vex",
    cost: "4 cost",
    trait: ["Divinicorp", "Executioner"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Vex.jpg?w=290",
  },
  {
    champion_name: "Xayah",
    cost: "4 cost",
    trait: ["Anima Squad", "Marksman"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Xayah.jpg?w=290",
  },
  {
    champion_name: "Zed",
    cost: "4 cost",
    trait: ["Cypher", "Slayer"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Zed.jpg?w=290",
  },
  {
    champion_name: "Zeri",
    cost: "4 cost",
    trait: ["Exotech", "Rapidfire"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Zeri.jpg?w=290",
  },
  {
    champion_name: "Ziggs",
    cost: "4 cost",
    trait: ["Cyberboss", "Strategist"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Ziggs.jpg?w=290",
  },
  {
    champion_name: "Aurora",
    cost: "5 cost",
    trait: ["Anima Squad", "Dynamo"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Aurora.jpg?w=290",
  },
  {
    champion_name: "Garen",
    cost: "5 cost",
    trait: ["God of the Net"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Garen.jpg?w=290",
  },
  {
    champion_name: "Kobuko",
    cost: "5 cost",
    trait: ["Cyberboss", "Bruiser"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Kobuko.jpg?w=290",
  },
  {
    champion_name: "Renekton",
    cost: "5 cost",
    trait: ["Overlord", "Divinicorp", "Bastion"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Renekton.jpg?w=290",
  },
  {
    champion_name: "Samira",
    cost: "5 cost",
    trait: ["Street Demon", "A.M.P."],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Samira.jpg?w=290",
  },
  {
    champion_name: "Urgot",
    cost: "5 cost",
    trait: ["BoomBot", "Executioner"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Urgot.jpg?w=290",
  },
  {
    champion_name: "Viego",
    cost: "5 cost",
    trait: ["Soul Killer", "Golden Ox", "Techie"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Viego.jpg?w=290",
  },
  {
    champion_name: "Zac",
    cost: "5 cost",
    trait: ["Virus"],
    image_url:
      "https://ap.tft.tools/img/cd14/face_full_ultrawide/TFT14_Zac.jpg?w=290",
  },
];

const traitData = [
  {
    Trait_Name: "Anima Squad",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_animasquad_w.svg",
  },
  {
    Trait_Name: "BoomBot",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_ballistek_w.svg",
  },
  {
    Trait_Name: "Cyberboss",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_cyberboss_w.svg",
  },
  {
    Trait_Name: "Cypher",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_suits_w.svg",
  },
  {
    Trait_Name: "Divinicorp",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_divinicorp_w.svg",
  },
  {
    Trait_Name: "Exotech",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_edgerunner_w.svg",
  },
  {
    Trait_Name: "God of the Net",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_netgod_w.svg",
  },
  {
    Trait_Name: "Golden Ox",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_immortal_w.svg",
  },
  {
    Trait_Name: "Nitro",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_hotrod_w.svg",
  },
  {
    Trait_Name: "Overlord",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_overlord_w.svg",
  },
  {
    Trait_Name: "Soul Killer",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_viegouniquetrait_w.svg",
  },
  {
    Trait_Name: "Street Demon",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_streetdemon_w.svg",
  },
  {
    Trait_Name: "Syndicate",
    Trait_Image_URL: "https://ap.tft.tools/static/trait-icons/tft14_mob_w.svg",
  },
  {
    Trait_Name: "Virus",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_virus_w.svg",
  },
  {
    Trait_Name: "A.M.P.",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_supercharge_w.svg",
  },
  {
    Trait_Name: "Bastion",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_armorclad_w.svg",
  },
  {
    Trait_Name: "Bruiser",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_bruiser_w.svg",
  },
  {
    Trait_Name: "Dynamo",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_thirsty_w.svg",
  },
  {
    Trait_Name: "Executioner",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_cutter_w.svg",
  },
  {
    Trait_Name: "Marksman",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_marksman_w.svg",
  },
  {
    Trait_Name: "Rapidfire",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_swift_w.svg",
  },
  {
    Trait_Name: "Slayer",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_strong_w.svg",
  },
  {
    Trait_Name: "Strategist",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_controller_w.svg",
  },
  {
    Trait_Name: "Techie",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_techie_w.svg",
  },
  {
    Trait_Name: "Vanguard",
    Trait_Image_URL:
      "https://ap.tft.tools/static/trait-icons/tft14_vanguard_w.svg",
  },
];

const borderColors: { [key: string]: string } = {
  "1 cost": "border-gray-500",
  "2 cost": "border-green-500",
  "3 cost": "border-blue-500",
  "4 cost": "border-purple-500",
  "5 cost": "border-yellow-500",
};

const TFTQuiz: React.FC = () => {
  const [champion, setChampion] = useState<Champion>(
    championData[Math.floor(Math.random() * championData.length)]
  );
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [results, setResults] = useState<{ [key: string]: string } | null>(
    null
  );
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setChampion(championData[Math.floor(Math.random() * championData.length)]);
    setSelectedTraits([]);
    setResults(null);
  }, []);

  const handleTraitSelect = (traitName: string) => {
    setSelectedTraits((prevTraits) => {
      if (prevTraits.includes(traitName)) {
        return prevTraits.filter((trait) => trait !== traitName);
      } else {
        if (prevTraits.length < 3) {
          return [...prevTraits, traitName];
        }
        return prevTraits; // Limit to 3 selected traits
      }
    });
  };

  const handleSubmit = () => {
    const correctTraits = champion.trait;
    const result: { [key: string]: string } = {};
    let points = 0;

    selectedTraits.forEach((trait) => {
      if (correctTraits.includes(trait)) {
        result[trait] = "correct";
        points += 10;
      } else {
        result[trait] = "incorrect";
        points -= 10;
      }
    });

    setScore((prev) => prev + points);
    setResults(result);
  };

  const handleNextChampion = () => {
    setChampion(championData[Math.floor(Math.random() * championData.length)]);
    setSelectedTraits([]);
    setResults(null);
  };

  const costColor = borderColors[champion.cost] || "border-gray-500";

  const allTraits = traitData.map((trait) => trait.Trait_Name).sort();

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        TFT Trait Guesser
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Score: {score}
      </h2>

      <div className="bg-white rounded-xl shadow-md p-4 mb-4">
        <div className="flex flex-col items-center">
          <div
            className={`border-4 ${costColor} rounded-xl overflow-hidden mb-2`}
          >
            <img
              src={champion.image_url}
              alt={champion.champion_name}
              className="object-cover w-full h-48"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">
            {champion.champion_name} ({champion.cost})
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Select up to 3 Traits:
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {allTraits.map((traitName) => {
            const trait = traitData.find((t) => t.Trait_Name === traitName);
            const isSelected = selectedTraits.includes(traitName);
            const backgroundColor = isSelected ? "bg-blue-200" : "bg-gray-100";
            const textColor = isSelected ? "text-blue-700" : "text-gray-700";

            return (
              <button
                key={traitName}
                className={`flex items-center justify-start rounded-md p-2 ${backgroundColor} ${textColor} hover:bg-blue-300 transition-colors duration-200`}
                onClick={() => handleTraitSelect(traitName)}
                disabled={selectedTraits.length >= 3 && !isSelected}
              >
                {trait && (
                  <img
                    src={trait.Trait_Image_URL}
                    alt={traitName}
                    className="w-6 h-6 mr-2"
                  />
                )}
                {traitName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={selectedTraits.length === 0 || results !== null}
        >
          Guess!
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextChampion}
        >
          Next Champion
        </button>
      </div>

      {results && (
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Your Guesses:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {selectedTraits.map((trait) => {
              let backgroundColor = "bg-gray-200";
              let textColor = "text-gray-700";

              if (results[trait] === "correct") {
                backgroundColor = "bg-green-200";
                textColor = "text-green-700";
              } else if (results[trait] === "incorrect") {
                backgroundColor = "bg-red-200";
                textColor = "text-red-700";
              }

              const traitDataEntry = traitData.find(
                (t) => t.Trait_Name === trait
              );

              return (
                <div
                  key={trait}
                  className={`flex items-center justify-start rounded-md p-2 ${backgroundColor} ${textColor}`}
                >
                  {traitDataEntry && (
                    <img
                      src={traitDataEntry.Trait_Image_URL}
                      alt={trait}
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  {trait}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {results && (
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Correct Traits:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {champion.trait.map((trait) => {
              const traitDataEntry = traitData.find(
                (t) => t.Trait_Name === trait
              );
              return (
                <div
                  key={trait}
                  className="flex items-center justify-start rounded-md p-2 bg-green-200 text-green-700"
                >
                  {traitDataEntry && (
                    <img
                      src={traitDataEntry.Trait_Image_URL}
                      alt={trait}
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  {trait}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TFTQuiz;
