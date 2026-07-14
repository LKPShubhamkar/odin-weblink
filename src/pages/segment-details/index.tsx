import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { commonApi } from "../../services";

interface SegmentData {
  clientCode: string;
  nseEquity: string;
  bseEquity: string;
  nseFutOpt: string;
  bseFutOpt: string;
  nseCurrency: string;
  mcxCommodity: string;
  nseCommodity: string;
  nseslbm: string;
  mutualFund: string;
}

const Segments = () => {
  const [data, setData] = useState<SegmentData | null>(null);

  useEffect(() => {
    const fetchSegments = async () => {
      try {
        const response = await commonApi("AppLink/GetClientSegments", {
          clientCode: "mQrPkoR6Hlq6nRefctWDvA==",
        });

        setData(response?.data || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSegments();
  }, []);

  if (!data) {
    return null;
  }

  const segments = [
    {
      label: "NSE Equity",
      value: data.nseEquity,
    },
    {
      label: "BSE Equity",
      value: data.bseEquity,
    },
    {
      label: "NSE Future and Options",
      value: data.nseFutOpt,
    },
    {
      label: "BSE Future and Options",
      value: data.bseFutOpt,
    },
    {
      label: "NSE Currency",
      value: data.nseCurrency,
    },
    {
      label: "NSE Commodity",
      value: data.nseCommodity,
    },
    {
      label: "MCX Commodity",
      value: data.mcxCommodity,
    },
    {
      label: "NSE SLBM",
      value: data.nseslbm,
    },
    {
      label: "Mutual Fund",
      value: data.mutualFund,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: {
          xs: 1,
          md: 4,
        },
      }}
    >
      {segments.map((item) => {
        const active = Boolean(item.value);

        return (
          <Box key={item.label}>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                py: {
                  xs: 2,
                  md: 2.5,
                },
              }}
            >
              <Typography
                sx={{
                  flex: 1,
                  minWidth: 0,
                  fontSize: {
                    xs: 15,
                    md: 18,
                  },
                  color: "#222",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {item.label}
              </Typography>

              <Chip
                label={active ? "Active" : "Inactive"}
                size="small"
                sx={{
                  flexShrink: 0,
                  minWidth: {
                    xs: 74,
                    md: 84,
                  },
                  height: {
                    xs: 28,
                    md: 30,
                  },
                  borderRadius: "8px",
                  fontSize: {
                    xs: 12,
                    md: 14,
                  },
                  fontWeight: 500,
                  bgcolor: active ? "#E6F5ED" : "#FCEAEA",
                  color: active ? "#1FA971" : "#E53935",
                }}
              />
            </Stack>

            {item.label !== "Mutual Fund" && <Divider />}
          </Box>
        );
      })}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: {
            xs: 4,
            md: 5,
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
        >
          Manage Segments
        </Button>
      </Box>
    </Box>
  );
};

export default Segments;
