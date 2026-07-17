import Header from "../../../components/Header";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TicketCard from "../../../components/TicketCard/TicketCard";
import { commonApi } from "../../../services";

const CloseTicket = () => {
  const [tickets, setTickets] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await commonApi("Zoho/GetTickets_Internal", {
          clientCode: "PP000474",
          ticketType: 1, // Open tickets
        });

        setTickets(response ?? []);
      } catch (err) {
        console.error(err);
      }
    };

    getTickets();
  }, []);

  const handleLoadDetails = async (ticketId: string) => {
    try {
      const response = await commonApi("Zoho/GetTicketDetailsById_Internal", {
        ticketId,
      });
      console.log(response);

      setTickets((prev) =>
        prev.map((item) =>
          item.id === ticketId
            ? {
                ...item,
                details: response,
              }
            : item,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Header
        title="Close Ticket"
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
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: 4,
          }}
        >
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onLoadDetails={handleLoadDetails}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CloseTicket;
