import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Header from "../../../components/Header";

const RaiseTicket = () => {
  const navigate = useNavigate();

  const fileRef = useRef<HTMLInputElement>(null);

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5 MB");
      return;
    }

    setFileName(file.name);
  };

  return (
    <>
      <Header
        title="Raise a Ticket"
        showBack
        onBack={() => navigate("/help-support")}
      />

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 2, md: 4 },
          width: {
            xs: "100%",
            md: 700,
          },
          px: {
            xs: 2,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            minHeight: "calc(100vh - 150px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <TextField
              fullWidth
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              size="small"
            />

            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Box
              onClick={() => fileRef.current?.click()}
              sx={{
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                px: 2,
                py: 1.8,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <DescriptionOutlinedIcon
                  sx={{
                    color: "#666",
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 15,
                    color: fileName ? "#222" : "#8E8E8E",
                  }}
                >
                  {fileName || "Attached a File"}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8E8E8E",
                }}
              >
                Up to 5 MB
              </Typography>

              <input
                ref={fileRef}
                hidden
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileChange}
              />
            </Box>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                height: 48,
                borderRadius: "8px",
                textTransform: "none",
                bgcolor: "#0054A6",
                fontSize: 18,
                fontWeight: 600,
                width: {
                  xs: "100%",
                  sm: 280,
                  md: 160,
                },
              }}
              onClick={() => {
                console.log(subject, description, fileName);
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RaiseTicket;
