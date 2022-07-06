export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
