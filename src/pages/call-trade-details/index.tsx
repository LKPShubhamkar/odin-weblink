import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../../components/Header";

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
  // const navigate = useNavigate();
  // const { search } = useLocation();

  return (
    <>
      {/* <Header
        title="Call & Trade Details"
        showBack
        onBack={() => navigate(`/${search}`)}
      /> */}

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
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            px: {
              xs: 2,
              md: 3,
            },
            borderRadius: {
              xs: 2,
              md: 0,
            },
          }}
        >
          {data.map((item, index) => (
            <Box key={index}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  py: {
                    xs: 2,
                    md: 2,
                  },
                  gap: 2,
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: {
                      xs: 1.5,
                      md: 2,
                    },
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <LocalPhoneOutlinedIcon
                    sx={{
                      color: "#0054A6",
                      fontSize: {
                        xs: 24,
                        md: 28,
                      },
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 15,
                          md: 14,
                        },
                        fontWeight: 600,
                        color: "#212121",
                        lineHeight: 1.4,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,
                        fontSize: {
                          xs: 12,
                          md: 12,
                        },
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
                          fontSize: {
                            xs: 15,
                            md: 14,
                          },
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
                            fontSize: {
                              xs: 20,
                              md: 18,
                            },
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
