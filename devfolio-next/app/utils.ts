export const hideCard = (section: string) => {
  if (typeof window !== "undefined") {
    document.getElementById("card")?.classList.add("hidden");
    document.getElementById("children")?.classList.remove("mt-60");
    // const sectionElement = document.getElementById(section) as HTMLDivElement;
    // sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const showCard = () => {
  if (typeof window !== "undefined") {
    document.getElementById("card")?.classList.remove("hidden");
    document.getElementById("children")?.classList.add("mt-60");
  }
};
