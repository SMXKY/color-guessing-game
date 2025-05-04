export const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    values: {
      red,
      green,
      blue,
    },
    color: `rgb(${red}, ${green}, ${blue})`,
  };
};
