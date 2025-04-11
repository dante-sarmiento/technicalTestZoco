export const translate = (text)=> {
  const translations = {
    street: "Calle",
    number: "Número",
    country: "País",
    state: "Provincia",
    city: "Ciudad",
    university: "Universidad",
    career: "Carrera"
  };

  return translations[text] || text;
};