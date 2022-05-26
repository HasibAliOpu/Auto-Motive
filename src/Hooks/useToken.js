import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      (async () => {
        const { data } = await axios.put(
          `https://cryptic-ridge-95940.herokuapp.com/user/${email}`,
          currentUser
        );

        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      })();
    }
  }, [user]);
  return [token];
};

export default useToken;
