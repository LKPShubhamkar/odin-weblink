import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { commonApi } from "../../services";

interface RMDetailsData {
  clientCode: string;
  rmName: string;
  telephone: string;
  mobile: string;
  rmAddress: string;
  rmEmail: string;
  address: string;
}

const RmDetails = () => {
  const [data, setData] = useState<RMDetailsData | null>(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const fetchBankDetails = async () => {
      const params = new URLSearchParams(window.location.search);
      const clientCode = params.get("clientcode")?.replace(/ /g, "+");
      try {
        const response = await commonApi("AppLink/GetClientRMDetails", {
          clientCode,
        });
        console.log(response, "AppLink/GetClientRMDetails");

        setData(response?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBankDetails();
  }, []);
  const details = [
    {
      label: "Relation Manager",
      value: data?.rmName ?? "-",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      label: "Dealing Office Address",
      value: data?.address || data?.rmAddress || "-",
      icon: <HomeOutlinedIcon />,
    },
    {
      label: "Dealing Desk Number",
      value: data?.telephone ?? "-",
      subText: "(Available from 9.30 am to 3.30 pm)",
      icon: <PhoneAndroidOutlinedIcon />,
    },
    {
      label: "RM Mobile Number",
      value: data?.mobile ?? "-",
      icon: <PhoneAndroidOutlinedIcon />,
    },
    {
      label: "RM Email ID",
      value: data?.rmEmail ?? "-",
      icon: <AlternateEmailOutlinedIcon />,
    },
  ];
  return (
    <>
      <Header
        title="Relation Manager Details"
        showBack
        onBack={() => navigate(`/${search}`)}
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
