export const hideCard = () => {
  if (typeof window !== 'undefined') {
    document.getElementById('card')?.classList.add('hidden');
  }
};

export const showCard = () => {
  if (typeof window !== 'undefined') {
    document.getElementById('card')?.classList.remove('hidden');
    // document.getElementById("children")?.classList.add("mt-60");
  }
};
