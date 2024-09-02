"use server";

import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const data = {
    creator: formData.get("creator"),
    creator_email: formData.get("creator-email"),
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  await saveMeal(data);
}
