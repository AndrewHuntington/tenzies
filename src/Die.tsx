import React from "react";

export default function Die({
  value,
  isHeld,
  id,
  holdDie,
}: {
  value: number;
  isHeld: boolean;
  id: number;
  holdDie: (id: number) => void;
}) {
  return (
    <div
      className={`${
        isHeld ? `bg-[#59E391]` : `bg-white`
      } h-9 w-9 flex items-center justify-center rounded shadow font-bold text-xl cursor-pointer`}
      onClick={() => holdDie(id)}
    >
      {value}
    </div>
  );
}
