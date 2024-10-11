import { FormEvent, useRef, useState } from "react";
import Button from "./Button";

type postType = "employee" | "employer";
type CardProps = {
  post: postType;
  changeInput: (post: postType, wage: number) => void;
};

const Card = ({ post, changeInput }: CardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) {
      return;
    }

    changeInput(post, Number(inputRef.current.value));
    setIsInputDisabled(true);
  };

  return (
    <div className="bg-foreground rounded-xl px-6 py-4 sm:px-8 sm:max-w-[29rem] min-h-56 flex flex-col items-center justify-around md:w-1/2 shadow-lg">
      <p className="text-center sm:text-lg">
        {post === "employer"
          ? "Zaměstnavatel zadá, kolik je ochoten maximálně zaplatit"
          : "Zaměstnanec zadá, kolik očekává, že mu bude zaplaceno minimálně"}
      </p>
      <div className="flex  items-center h-fit min-h-20 justify-center">
        {!isInputDisabled ? (
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 flex-col items-center h-fit   justify-center lg:gap-3"
          >
            <input
              ref={inputRef}
              type="number"
              className="bg-input placeholder:text-foreground p-1 rounded-md sm:p-1.5 outline-none"
              placeholder="32000 Kč"
            />
            <Button type="submit">Uložit</Button>
          </form>
        ) : (
          <p className="font-semibold underline sm:text-lg">Částka uložena</p>
        )}
      </div>
    </div>
  );
};

export default Card;
