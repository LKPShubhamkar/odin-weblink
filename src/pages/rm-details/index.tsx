import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const rm = {
  name: "Ritik Patel",
  address: "Lorem ipsum dolor sit amet,",
  phone: "02265651948",
  email: "Lorem ipsum@gmail.com",
};

const details = [
  {
    label: "Relation Manager",
    value: rm.name,
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    label: "Dealing Office Address",
    value: rm.address,
    icon: <HomeOutlinedIcon />,
  },
  {
    label: "Dealing Desk Number",
    value: rm.phone,
    subText: "(Available from 9.30 am to 3.30 pm)",
    icon: <PhoneAndroidOutlinedIcon />,
  },
  {
    label: "RM Email ID",
    value: rm.email,
    icon: <AlternateEmailOutlinedIcon />,
  },
];

const RmDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title="Relation Manager Details"
        showBack
        onBack={() => navigate("/")}
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
            md: 3,
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
            py: {
              xs: 1,
              md: 0,
            },
          }}
        >
          {details.map((item, index) => (
            <Box key={item.label}>
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: {
                    xs: 1.5,
                    md: 2,
                  },
                  py: 1.5,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    color: "#0054A6",
                    mt: 0.5,
                    flexShrink: 0,

                    "& svg": {
                      fontSize: {
                        xs: 22,
                        md: 24,
                      },
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Box
                  sx={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 12,
                        md: 11,
                      },
                      color: "#9B9B9B",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.3,
                      fontSize: {
                        xs: 15,
                        md: 15,
                      },
                      color: "#212121",
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.value}
                  </Typography>

                  {item.subText && (
                    <Typography
                      sx={{
                        mt: 0.4,
                        fontSize: {
                          xs: 12,
                          md: 11,
                        },
                        color: "#9B9B9B",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.subText}
                    </Typography>
                  )}
                </Box>
              </Stack>

              {index !== details.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default RmDetails;
