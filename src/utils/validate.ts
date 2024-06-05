export const validateEmail = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export const validateNumber = (number: string) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };
