export const isAuthenticated = () => {
    const token = localStorage.getItem("Token");
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode token payload
      const isExpired = payload.exp * 1000 < Date.now(); // Cek expired token JWT
      
      return isExpired ? localStorage.removeItem("Token") : true;
    } catch (err) { 
      return false;
    }
  };
  