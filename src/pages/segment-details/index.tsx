import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";

const data = {
  clientCode: "23120368",
  nseEquity: "NSE",
  bseEquity: "BSE",
  nseFutOpt: "",
  bseFutOpt: "",
  nseCurrency: "",
  mcxCommodity: "",
  nseCommodity: "",
  nseslbm: "",
  mutualFund: "",
};

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

const Segments = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 4,
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
                py: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#222",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Typography>

              <Chip
                label={active ? "Active" : "Inactive"}
                size="small"
                sx={{
                  minWidth: 84,
                  height: 30,
                  borderRadius: "8px",
                  fontSize: 14,
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
          mt: 5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: 320,
            height: 54,
            bgcolor: "#0054A6",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: 18,
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
