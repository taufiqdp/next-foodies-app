"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function MealsFormLoading() {
  const { pending } = useFormStatus();

  return (
    <Button variant="secondary" disabled={pending}>
      {pending ? (
        <div className="border-neutral-800 h-5 w-5 animate-spin rounded-full border-2 border-t-rose-50" />
      ) : (
        "Share Meal"
      )}
    </Button>
  );
}
