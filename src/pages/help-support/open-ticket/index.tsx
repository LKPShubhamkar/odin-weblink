import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import TicketCard from "../../../components/TicketCard/TicketCard";
import { commonApi } from "../../../services";

// Sample List API Response

const OpenTicket = () => {
  const [tickets, setTickets] = useState<any[]>([]);
  const navigate = useNavigate();

  // const tickets = useMemo(() => {
  //   return ticketList
  //     .filter((ticket) => ticket.status === "Open")
  //     .map((ticket) => {
  //       const detail = ticketDetails.find(
  //         (item) => item.ticketId === ticket.id,
  //       );

  //       return {
  //         ...ticket,
  //         description: detail?.description ?? "",
  //         attachments: detail?.attachments ?? [],
  //         resolution: detail?.resolution ?? "",
  //         modifiedDate: detail?.modifiedDate ?? "",
  //       };
  //     });
  // }, []);
  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await commonApi("LKPZoho/GetTickets", {
          clientCode: "PP000474",
          ticketType: 1, // Open tickets
        });

        setTickets(response?.data ?? []);
      } catch (err) {
        console.error(err);
      }
    };

    getTickets();
  }, []);
  const handleLoadDetails = async (ticketId: string) => {
    try {
      const response = await commonApi("LKPZoho/GetTicketDetailsById", {
        ticketId,
      });

      setTickets((prev) =>
        prev.map((item) =>
          item.id === ticketId
            ? {
                ...item,
                details: response.data,
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
