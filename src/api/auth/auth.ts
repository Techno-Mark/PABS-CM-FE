import axios from "axios";

export const login = async (username:string, password:string) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/login`, {
        username: username,
        password: password
      }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
        return response.data;
    }
  } catch (error) {
    console.log(error)
  }
};

export const resetPassword = async (email:string) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/resetPassword`, {
        email: email,
      }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
        return response.data;
    }
  } catch (error) {
    console.log(error)
  }
};

export const passwordChange = async (newpassword:string,confirmPassword:string) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/newPassword`, {
        newPassword: newpassword,
        confirmPassword: confirmPassword
      }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
        return response.data;
    }
  } catch (error) {
    console.log(error)
  }
};
