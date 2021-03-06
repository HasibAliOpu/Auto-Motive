import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [processing, setProcessing] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      (async () => {
        const { data } = await axios.get(
          `https://cryptic-ridge-95940.herokuapp.com/admin/${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setAdmin(data.admin);
        setProcessing(false);
      })();
    }
  }, [user]);
  return [admin, processing];
};

export default useAdmin;
