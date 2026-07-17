import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

interface Attachment {
  id: string;
  name: string;
}

interface Ticket {
  id: string;
  ticketNumber: string;
  subject: string;
  status: string;
  createdDate: string;
  loading?: boolean;
}

interface TicketDetail {
  description: string;
  modifiedDate: string;
  attachments: Attachment[];
  resolution: string | null;
}

interface TicketCardProps {
  ticket: Ticket & {
    details?: TicketDetail;
  };

  onLoadDetails: (ticketId: string) => Promise<void>;
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <Stack
    sx={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      py: 1,
      gap: 2,
    }}
  >
    <Typography
      sx={{
        fontSize: 13,
        color: "#8E8E8E",
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        fontSize: 14,
        color: "#222",
        textAlign: "right",
        fontWeight: 500,
      }}
    >
      {value}
    </Typography>
  </Stack>
);

const TicketCard = ({ ticket, onLoadDetails }: TicketCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        border: "1px solid #E5E5E5",
        borderRadius: 3,
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              gap: 1.5,
              flex: 1,
            }}
          >
            <ReportGmailerrorredOutlinedIcon
              sx={{
                color: "#0054A6",
              }}
            />
            {/* <Box> */}
            <Typography
              sx={{
                fontSize: 18,
                color: "#0054A6",
                fontWeight: 600,
              }}
            >
              {ticket.subject}
            </Typography>
            {/* </Box> */}
          </Stack>
          <IconButton
            size="small"
            disabled={ticket.loading}
            onClick={() => {
              setExpanded((prev) => !prev);

              if (!expanded && !ticket.details && !ticket.loading) {
                onLoadDetails(ticket.id);
              }
            }}
          >
            {expanded ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )}
          </IconButton>
        </Stack>

        <Collapse in={expanded}>
          {ticket.loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: 3,
              }}
            >
              <CircularProgress size={24} />
            </Box>
          ) : (
            <>
              <Divider sx={{ my: 2 }} />

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Description
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
                  color: "#444",
                }}
              >
                {ticket.details?.description || "-"}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Ticket Details
              </Typography>

              <Row label="Submitted on" value={ticket.createdDate || "-"} />

              <Row
                label="Ticket Number"
                value={`#${ticket.ticketNumber ?? "-"}`}
              />

              {/* <Row
            label="Attachments"
            value={
              ticket.details?.attachments?.length
                ? ticket.attachments.map((a) => a.name).join(", ")
                : "No attachment found"
            }
          /> */}

              {ticket.details?.resolution && (
                <>
                  <Divider sx={{ my: 1 }} />

                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Resolution
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#444",
                    }}
                  >
                    {ticket.details?.resolution}
                  </Typography>
                </>
              )}
            </>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default TicketCard;
