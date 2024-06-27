export const validateEmail = (email: string) => {
  const emailRegex = /^[\w+.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validateNumber = (number: string) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };
