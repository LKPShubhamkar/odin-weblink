import Header from "../../../components/Header";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ticketDetails, ticketList } from "../../../helper/commonData";
import { useMemo } from "react";
import TicketCard from "../open-ticket/TicketCard/TicketCard";

const CloseTicket = () => {
  const navigate = useNavigate();
  const tickets = useMemo(() => {
    return ticketList
      .filter((ticket) => ticket.status === "Closed")
      .map((ticket) => {
        const detail = ticketDetails.find(
          (item) => item.ticketId === ticket.id,
        );

        return {
          ...ticket,
          description: detail?.description ?? "",
          attachments: detail?.attachments ?? [],
          resolution: detail?.resolution ?? "",
          modifiedDate: detail?.modifiedDate ?? "",
        };
      });
  }, []);
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
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CloseTicket;
