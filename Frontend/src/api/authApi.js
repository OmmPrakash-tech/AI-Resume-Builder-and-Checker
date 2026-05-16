import api from "./axios";


// REGISTER
export const registerUser = async (data) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};


// LOGIN
export const loginUser = async (data) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};


// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  const response = await api.post(
    "/auth/forgot-password",
    {
      email,
    }
  );

  return response.data;
};


// RESET PASSWORD
export const resetPassword = async (
  token,
  newPassword
) => {
  const response = await api.post(
    "/auth/reset-password",
    {
      token,
      new_password: newPassword,
    }
  );

  return response.data;
};


// LOGOUT
export const logoutUser = async () => {
  const response = await api.post(
    "/auth/logout"
  );

  // remove token
  localStorage.removeItem("token");

  return response.data;
};


// DELETE ACCOUNT
export const deleteAccount = async () => {
  const response = await api.delete(
    "/auth/delete-account"
  );

  // remove token
  localStorage.removeItem("token");

  return response.data;
};