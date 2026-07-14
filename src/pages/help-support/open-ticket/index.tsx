import Header from "../../../components/Header";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OpenTicket = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Open Ticket"
        showBack
        onBack={() => navigate("/help-support")}
      />

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 2, md: 4 },
          width: {
            xs: "100%",
            md: 700,
          },
          px: {
            xs: 2,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            minHeight: "calc(100vh - 150px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Pending
        </Box>
      </Container>
    </>
  );
};

export default OpenTicket;
