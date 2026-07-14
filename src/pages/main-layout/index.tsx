import Header from "../../components/Header";
import AccountMenu from "../../components/AccountMenu";
import ProfileDetails from "../profile-details";
import { Container } from "@mui/material";
import { useState } from "react";
import BankDetails from "../bank-details";
import Segments from "../segment-details";
import NomineeDetails from "../nominee-details";

const Main = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const pageTitles: Record<string, string> = {
    profile: "Profile Details",
    bank: "Bank Accounts",
    segments: "Manage Segments",
    nominee: "Nominee Details",
    ddpi: "DDPI Status",
  };

  const pages: Record<string, React.ReactNode> = {
    profile: <ProfileDetails />,
    bank: <BankDetails />,
    segments: <Segments />,
    nominee: <NomineeDetails />,
    ddpi: <div>DDPI Status Page</div>,
  };

  return (
    <>
      <Header
        title={selectedPage ? pageTitles[selectedPage] : "Account Details"}
        showBack={!!selectedPage}
        onBack={() => setSelectedPage(null)}
      />

      <Container
        maxWidth="lg"
        sx={{
          mt: {
            xs: 2,
            md: 4,
          },

          width: {
            xs: "100%",
            md: 800,
          },

          px: {
            xs: 2,
            sm: 3,
            md: 0,
          },
        }}
      >
        {selectedPage === null ? (
          <AccountMenu onMenuClick={setSelectedPage} />
        ) : (
          pages[selectedPage]
        )}
      </Container>
    </>
  );
};

export default Main;
