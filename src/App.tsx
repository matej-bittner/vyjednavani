import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";

type postType = "employee" | "employer";

function App() {
  const [wages, setWages] = useState({ employee: 0, employer: 0 });
  const [isSucces, setIsSucces] = useState<boolean | undefined>();

  function changeInput(post: postType, wage: number) {
    if (post === "employee") {
      setWages({ ...wages, employee: wage });
    } else {
      setWages({ ...wages, employer: wage });
    }
  }

  useEffect(() => {
    if (wages.employee > 0 && wages.employer > 0) {
      if (wages.employee <= wages.employer) {
        setIsSucces(true);
      } else {
        setIsSucces(false);
      }
    }
  }, [wages]);

  return (
    <section className="w-full h-full min-h-[100svh]  px-4 py-6 lg:py-6 flex flex-col items-center gap-4 sm:gap-8 relative lg:gap-12 ">
      {isSucces !== undefined && <Modal isSucces={isSucces} />}
      <h1 className="text-3xl sm:text-4xl ">Vyjednávání</h1>
      <div className="flex max-md:flex-col gap-4 sm:gap-6 ">
        <Card post="employee" changeInput={changeInput} />
        <Card post="employer" changeInput={changeInput} />
      </div>
    </section>
  );
}

export default App;
