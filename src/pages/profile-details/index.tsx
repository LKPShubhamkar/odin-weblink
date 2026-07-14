import { Box, IconButton, Stack, Typography } from "@mui/material";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const data = [
  {
    clientCode: "MT0600508",
    fullName: "Hareshkumar S Darji",
    mobile: "9819494550",
    email: "test@TextsmsTwoTone.com",
    address:
      "C-701 7TH FLOOR SUPREME LEGACY SHREE HARI NIWAS CHSL SAROJINI NAIDU NEAR BHURABHAI HALL KANDIVALI WEST MUMBAI 400067",
    pan: "ALAPD6986B",
    gender: "Male",
    dob: "18-01-1984",
    incomeRange: "Less Than One Lakhs",
    ckycno: "10012301677544",
    dematAccount: "1203000001123371",
    dpId: "12030000",
    depository: "CDSL",
  },
];
const profile = data[0];
const sections = [
  {
    title: "Profile Details",
    fields: [
      {
        label: "Full Name",
        value: profile.fullName,
        icon: <PersonOutlinedIcon />,
      },
      {
        label: "Mobile",
        value: profile.mobile,
        icon: <PhoneAndroidOutlinedIcon />,
        action: "edit",
      },
      {
        label: "Email",
        value: profile.email,
        icon: <AlternateEmailOutlinedIcon />,
        action: "edit",
      },
      {
        label: "Address",
        value: profile.address,
        icon: <HomeOutlinedIcon />,
        action: "edit",
      },
      {
        label: "PAN",
        value: profile.pan,
        icon: <CreditCardOutlinedIcon />,
      },
      {
        label: "Gender",
        value: profile.gender,
        icon: <WcOutlinedIcon />,
      },
      {
        label: "Date of Birth",
        value: profile.dob,
        icon: <CalendarMonthOutlinedIcon />,
      },
      {
        label: "Income Range",
        value: profile.incomeRange,
        icon: <CurrencyRupeeOutlinedIcon />,
        action: "edit",
      },
    ],
  },
  {
    title: "Trading Account Details",
    fields: [
      {
        label: "UCC / Client ID",
        value: profile.clientCode,
      },
      {
        label: "CKYC",
        value: profile.ckycno,
      },
    ],
  },
  {
    title: "Demat Account Details",
    fields: [
      {
        label: "Demat Account No / BO ID",
        value: profile.dematAccount,
        action: "copy",
      },
      {
        label: "DP ID",
        value: profile.dpId,
        action: "copy",
      },
      {
        label: "Depository",
        value: profile.depository,
        action: "copy",
      },
    ],
  },
];

const handleEdit = (field: string, value: string) => {
  console.log("Edit:", field, value);
};

const handleCopy = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    console.log("Copied:", value);
  } catch (err) {
    console.error("Failed to copy", err);
  }
};

const ProfileDetails = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: {
          xs: 1,
          md: 3,
        },
      }}
    >
      {sections.map((section) => (
        <Box
          key={section.title}
          sx={{
            mb: {
              xs: 3,
              md: 4,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 14,
                md: 15,
              },
              color: "#9B9B9B",
              mb: 1,
              fontWeight: 500,
            }}
          >
            {section.title}
          </Typography>

          {section.fields.map((field) => (
            <Stack
              key={field.label}
              sx={{
                py: 1.4,
                borderBottom: "1px solid #EEEEEE",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: {
                    xs: 1.5,
                    md: 2,
                  },
                  maxWidth: {
                    xs: "calc(100% - 36px)",
                    md: "80%",
                  },
                  minWidth: 0,
                  flex: 1,
                }}
              >
                {field.icon && (
                  <Box
                    sx={{
                      color: "#004AAD",
                      mt: 0.4,
                      width: {
                        xs: 20,
                        md: 22,
                      },
                      flexShrink: 0,

                      "& svg": {
                        fontSize: {
                          xs: 20,
                          md: 24,
                        },
                      },
                    }}
                  >
                    {field.icon}
                  </Box>
                )}

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 12,
                        md: 14,
                      },
                      color: "#999",
                    }}
                  >
                    {field.label}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.3,
                      fontSize: {
                        xs: 14,
                        md: 16,
                      },
                      lineHeight: 1.4,
                      color: "#222",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {field.value}
                  </Typography>
                </Box>
              </Stack>

              {field.action === "edit" && (
                <IconButton
                  size="small"
                  sx={{
                    ml: 1,
                    alignSelf: "center",
                  }}
                  onClick={() => handleEdit(field.label, field.value)}
                >
                  <EditOutlinedIcon
                    sx={{
                      color: "#2E2D72",
                      fontSize: {
                        xs: 20,
                        md: 18,
                      },
                    }}
                  />
                </IconButton>
              )}

              {field.action === "copy" && (
                <IconButton
                  size="small"
                  sx={{
                    ml: 1,
                    alignSelf: "center",
                  }}
                  onClick={() => handleCopy(field.value)}
                >
                  <ContentCopyOutlinedIcon
                    sx={{
                      color: "#2E2D72",
                      fontSize: {
                        xs: 20,
                        md: 18,
                      },
                    }}
                  />
                </IconButton>
              )}
            </Stack>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ProfileDetails;
