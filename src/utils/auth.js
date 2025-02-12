export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode token payload
      const isExpired = payload.exp * 1000 < Date.now(); // Cek expired
      return !isExpired;
    } catch (err) {
      return false;
    }
  };
  