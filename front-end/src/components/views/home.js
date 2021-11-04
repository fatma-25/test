import React, { useEffect } from "react";
import axios from "axios";
export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/all")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{paddingTop:100}}>

      <img  src="https://e-communautes.cnfpt.fr/sites/all/themes/cnfpt/assets/images/ecommunaute-multi-plateforme.png" />
    </div>
  );
}

