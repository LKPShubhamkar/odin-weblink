import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const data = [
  {
    clientCode: "23120368",
    bankAccountHolderName: "HIREN ARUNBHAI PATEL",
    bankAccno: "32151491328",
    ifsc: "SBIN0000344",
    bankName: "State Bank Of India",
    defaultBank: "N",
  },
  {
    clientCode: "23120368",
    bankAccountHolderName: "HIREN ARUNBHAI PATEL",
    bankAccno: "50100360881161",
    ifsc: "HDFC0001685",
    bankName: "HDFC Bank",
    defaultBank: "N",
  },
  {
    clientCode: "23120368",
    bankAccountHolderName: "HIREN ARUNBHAI PATEL",
    bankAccno: "50100470979422",
    ifsc: "HDFC0001685",
    bankName: "HDFC Bank",
    defaultBank: "Y",
  },
  {
    clientCode: "23120368",
    bankAccountHolderName: "HIREN ARUNBHAI PATEL",
    bankAccno: "919010007936263",
    ifsc: "UTIB0002638",
    bankName: "Axis Bank",
    defaultBank: "N",
  },
];

const Row = ({ label, value }: { label: string; value: string }) => (
  <>
    <Box
      sx={{
        py: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: 11,
          color: "#9B9B9B",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: 0.3,
          fontSize: 14,
          color: "#222",
        }}
      >
        {value}
      </Typography>
    </Box>

    <Divider />
  </>
);

const BankCard = ({ bank }: { bank: (typeof data)[0] }) => (
  <Box
    sx={{
      px: 2,
    }}
  >
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1,
        }}
      >
        <AccountBalanceIcon
          sx={{
            color: "#0054A6",
            fontSize: 24,
          }}
        />

        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            {bank.bankName}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#9B9B9B",
            }}
          >
            {bank.bankAccno}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#9B9B9B",
            }}
          >
            {bank.ifsc}
          </Typography>
        </Box>
      </Stack>

      {bank.defaultBank === "Y" && (
        <Chip
          label="Primary"
          size="small"
          sx={{
            bgcolor: "#2F80ED",
            color: "#fff",
            fontSize: 11,
            height: 22,
            borderRadius: "12px",
          }}
        />
      )}
    </Stack>

    <Row label="Bank Account Holder Name" value={bank.bankAccountHolderName} />

    <Row label="Bank Account Number" value={bank.bankAccno} />

    <Row label="IFSC Code" value={bank.ifsc} />

    <Stack
      sx={{
        mt: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <AccountBalanceIcon
        sx={{
          color: "#0054A6",
          fontSize: 20,
        }}
      />

      <Typography
        sx={{
          fontSize: 13,
          color: "#222",
        }}
      >
        {bank.bankName.toUpperCase()}
      </Typography>
    </Stack>
  </Box>
);

export default function BankDetails() {
  return (
    <Box
      sx={
        {
          // bgcolor: "#fff",
        }
      }
    >
      <Grid container spacing={4}>
        {data.map((bank, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 6 }}
            sx={{
              borderRight: {
                md: index % 2 === 0 ? "1px solid #E8E8E8" : "none",
              },
            }}
          >
            <BankCard bank={bank} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: 260,
            height: 44,
            bgcolor: "#0054A6",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: 16,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#00458A",
            },
          }}
        >
          Add New Bank
        </Button>
      </Box>
    </Box>
  );
}
