import { useState } from "react";
import { dataForCalculation, dataForCalculationType } from "../constants";

const Modal = ({ isSucces }: { isSucces: boolean }) => {
  const [selectedRegion, setSelectedRegion] = useState({
    selectedRegion: dataForCalculation[0].region,
    averagegrossWage: dataForCalculation[0].averagegrossWage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = dataForCalculation.find(
      (item) => item.region === e.target.value
    );

    if (selectedItem) {
      setSelectedRegion({
        selectedRegion: selectedItem.region,
        averagegrossWage: selectedItem.averagegrossWage,
      });
    }
  };

  return (
    <div className=" inset-0 fixed z-10 bg-gray-500/20 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
      <div
        className={`w-[80%] max-w-[42rem] h-14 rounded-xl flex items-center justify-center  text-white  sm:text-xl ${
          isSucces ? "bg-success" : "bg-failure"
        }`}
      >
        {isSucces ? <p>Úspěch!</p> : <p>Neúspěch!</p>}
      </div>
      <div className="w-[80%] max-w-[42rem] p-4 sm:py-6 text-black rounded-xl flex flex-col items-center justify-center bg-background text-center gap-4 ">
        <p className="font-medium ">
          Zjistěte průměrnou mzdu pro oblast IT podle regionu
        </p>

        <select
          name="region"
          onChange={handleChange}
          className="rounded-md h-8 px-2 outline-none"
        >
          {dataForCalculation.map((item: dataForCalculationType) => {
            return (
              <option key={item.region} value={item.region}>
                {item.region}
              </option>
            );
          })}
        </select>
        <p className="text-3xl">
          {selectedRegion.averagegrossWage.toLocaleString("cs-CZ")} Kč
        </p>
      </div>
      <button
        className="w-8 aspect-square sm:w-9 "
        onClick={() => window.location.reload()}
      >
        <img src="/reset-sm.svg" alt="" />
      </button>
    </div>
  );
};

export default Modal;
