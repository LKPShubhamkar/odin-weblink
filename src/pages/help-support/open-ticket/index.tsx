import { Box, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import TicketCard from "../../../components/TicketCard/TicketCard";
import { commonApi } from "../../../services";

// Sample List API Response

const OpenTicket = () => {
  const [tickets, setTickets] = useState<any[]>([]);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const getTickets = async () => {
      const params = new URLSearchParams(window.location.search);
      const clientCode = params.get("clientcode")?.replace(/ /g, "+");
      try {
        const response = await commonApi("Zoho/GetTickets_Internal", {
          clientCode,
          ticketType: 1, // Open tickets
        });

        setTickets(
          (response ?? []).map((item: any) => ({
            ...item,
            loading: false,
          })),
        );
      } catch (err) {
        console.error(err);
      }
    };

    getTickets();
  }, []);

  const handleLoadDetails = async (ticketId: string) => {
    setTickets((prev) =>
      prev.map((item) =>
        item.id === ticketId
          ? {
              ...item,
              loading: true,
            }
          : item,
      ),
    );
    try {
      const response = await commonApi("Zoho/GetTicketDetailsById_Internal", {
        ticketId,
      });

      setTickets((prev) =>
        prev.map((item) =>
          item.id === ticketId
            ? {
                ...item,
                details: response,
                loading: false,
              }
            : item,
        ),
      );
    } catch (err) {
      console.error(err);
      setTickets((prev) =>
        prev.map((item) =>
          item.id === ticketId
            ? {
                ...item,
                loading: false,
              }
            : item,
        ),
      );
    }
  };
  return (
    <>
      <Header
        title="Open Ticket"
        showBack
        onBack={() => navigate(`/help-support${search}`)}
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

export default OpenTicket;
