"use client";

import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/lib/store";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" onClick={decrement}>-</Button>
      <span className="text-2xl font-bold">{count}</span>
      <Button variant="outline" onClick={increment}>+</Button>
    </div>
  );
}