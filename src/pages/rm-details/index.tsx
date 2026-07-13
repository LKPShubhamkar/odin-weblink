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
      <Header title="RM Details" showBack onBack={() => navigate("/")} />

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
          {details.map((item, index) => (
            <Box key={item.label}>
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: 2,
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    color: "#0054A6",
                    mt: 0.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#9B9B9B",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#212121",
                      mt: 0.3,
                    }}
                  >
                    {item.value}
                  </Typography>

                  {item.subText && (
                    <Typography
                      sx={{
                        fontSize: 11,
                        color: "#9B9B9B",
                        mt: 0.3,
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
