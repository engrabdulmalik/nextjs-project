"use server";

export async function shareMeal (formData) {


  // Create the meal object from FormData
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    price: formData.get("price"),
    image: formData.get("image"),
  };

 console.log(meal)

  // Here you would typically send `formData` to your server
};