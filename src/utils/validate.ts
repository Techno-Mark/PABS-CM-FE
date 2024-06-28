export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};

export const validateNumber = (number: string) => {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(number);
};

export const validatePhone = (phone: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};
