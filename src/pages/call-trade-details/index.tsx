import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const data = [
  {
    title: "Equity Call and Trade Desk",
    time: "(8.45 AM - 4.00 PM)",
    phone: "022-65651948",
  },
  {
    title: "Commodity Call and Trade Desk",
    time: "(8.45 AM - 11.59 PM)",
    phone: "022-65461948",
  },
];
const CallTradeDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title="Call & Trade Details"
        showBack
        onBack={() => navigate("/")}
      />

      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          width: 800,
        }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            px: 3,
          }}
        >
          {data.map((item, index) => (
            <Box key={index}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <LocalPhoneOutlinedIcon
                    sx={{
                      color: "#0054A6",
                      fontSize: 28,
                      mt: 0.5,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#212121",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#212121",
                      }}
                    >
                      {item.time}
                    </Typography>

                    <Stack
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: "#9E9E9E",
                        }}
                      >
                        {item.phone}
                      </Typography>

                      <IconButton
                        size="small"
                        onClick={() => window.open(`tel:${item.phone}`)}
                        sx={{
                          p: 0,
                          color: "#39B54A",
                        }}
                      >
                        <CallOutlinedIcon
                          sx={{
                            fontSize: 18,
                          }}
                        />
                      </IconButton>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>

              {index !== data.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CallTradeDetails;
