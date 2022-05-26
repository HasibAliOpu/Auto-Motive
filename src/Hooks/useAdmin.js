import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      (async () => {
        const { data } = await axios.get(
          `http://localhost:5000/admin/${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setAdmin(data.admin);
      })();
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
