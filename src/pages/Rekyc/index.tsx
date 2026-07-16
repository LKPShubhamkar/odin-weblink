import { useEffect } from "react";
import { commonApi } from "../../services";

const ReKyc = () => {
  useEffect(() => {
    const handleReKyc = async () => {
      const params = new URLSearchParams(window.location.search);
      const clientCode = params.get("clientcode")?.replace(/ /g, "+");
      try {
        const response = await commonApi("ReKyc/GetReKycURL_internal", {
          clientCode,
          apiType: "Rekyc",
        });

        if (response?.data?.deeplink) {
          window.location.href = response.data.deeplink;
        } else {
          alert(response?.message || "Unable to generate link");
        }
      } catch (err) {
        console.error(err);
      }
    };

    handleReKyc();
  }, []);
  return <div></div>;
};

export default ReKyc;
