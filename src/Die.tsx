import React from "react";

export default function Die({ value }: { value: number }) {
  return (
    <div className="bg-white h-9 w-9 flex items-center justify-center rounded shadow">
      {value}
    </div>
  );
}
