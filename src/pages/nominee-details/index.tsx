import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { commonApi } from "../../services";

const Row = ({ label, value }: { label: string; value: string }) => (
  <>
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: 13,
            md: 14,
          },
          color: "#8E8E8E",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: 15,
            md: 16,
          },
          color: "#222",
          fontWeight: 500,
          textAlign: "right",
          wordBreak: "break-word",
        }}
      >
        {value || "-"}
      </Typography>
    </Stack>

    <Divider />
  </>
);

const NomineeDetails = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchNomineeDetails = async () => {
      const params = new URLSearchParams(window.location.search);
      const clientCode = params.get("clientcode")?.replace(/ /g, "+");
      try {
        const response = await commonApi("AppLink/GetClientNominee", {
          clientCode,
        });

        setData(response?.data || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNomineeDetails();
  }, []);

  if (!data) {
    return null; // or CircularProgress
  }

  const nominees = [
    {
      title: "Nominee 1",
      name: data.nominee1Name,
      relation: data.nominee1Relation,
      share: data.nomine1Share,
    },
    {
      title: "Nominee 2",
      name: data.nominee2Name,
      relation: data.nominee2Relation,
      share: data.nomine2Share,
    },
  ];

  const handleEdit = async () => {
    const params = new URLSearchParams(window.location.search);
    const clientCode = params.get("clientcode")?.replace(/ /g, "+");
    try {
      const response = await commonApi("ReKyc/GetReKycURL_internal", {
        clientCode,
        apiType: "Nominee",
      });

      if (response?.data?.deeplink) {
        window.open(response.data.deeplink, "_blank");
      } else {
        alert(response?.message || "Unable to generate link");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: {
            xs: 20,
            md: 24,
          },
          fontWeight: 600,
          color: "#222",
          mb: {
            xs: 3,
            md: 4,
          },
        }}
      >
        Nominee List
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2,1fr)",
          },
          gap: {
            xs: 3,
            md: 4,
          },
        }}
      >
        {nominees.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              px: {
                xs: 0,
                md: 4,
              },
              pb: {
                xs: 2,
                md: 0,
              },
              borderRight: {
                md: index === 0 ? "1px solid #E8E8E8" : "none",
              },
              borderBottom: {
                xs:
                  index !== nominees.length - 1 ? "1px solid #E8E8E8" : "none",
                md: "none",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  md: 20,
                },
                fontWeight: 600,
                color: "#222",
                mb: 2,
              }}
            >
              {item.title}
            </Typography>

            <Row label="Name" value={item.name} />

            <Row label="Relation" value={item.relation} />

            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1.5,
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 13,
                    md: 14,
                  },
                  color: "#8E8E8E",
                }}
              >
                Share
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    md: 16,
                  },
                  fontWeight: 500,
                  textAlign: "right",
                }}
              >
                {item.share || "-"}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: {
              xs: "100%",
              sm: 320,
              md: 320,
            },
            maxWidth: 360,
            height: {
              xs: 48,
              md: 54,
            },
            bgcolor: "#0054A6",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: {
              xs: 16,
              md: 18,
            },
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#00458A",
            },
          }}
          onClick={() => {
            handleEdit();
          }}
        >
          Add Nominee
        </Button>
      </Box>
    </Box>
  );
};

export default NomineeDetails;
