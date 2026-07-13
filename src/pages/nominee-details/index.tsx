import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const data = {
  clientCode: "98444",
  nominee1Name: "HITEN SHAILESH DIVECHA",
  nominee1Relation: "Spouse",
  nomine1Share: "",
  nominee2Name: "",
  nominee2Relation: "",
  nomine2Share: "",
};

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

const Row = ({ label, value }: { label: string; value: string }) => (
  <>
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          color: "#8E8E8E",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          color: "#222",
          fontWeight: 500,
        }}
      >
        {value || "-"}
      </Typography>
    </Stack>

    <Divider />
  </>
);

const NomineeDetails = () => {
  return (
    <Box sx={{}}>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          color: "#222",
          mb: 4,
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
          gap: 4,
        }}
      >
        {nominees.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              px: 4,
              borderRight: {
                md: index === 0 ? "1px solid #E8E8E8" : "none",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
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
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#8E8E8E",
                }}
              >
                Share
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
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
          mt: 6,
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
          Add Nominee
        </Button>
      </Box>
    </Box>
  );
};

export default NomineeDetails;
