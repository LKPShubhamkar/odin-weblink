import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { commonApi } from "../../../services";

const RaiseTicket = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const fileRef = useRef<HTMLInputElement>(null);

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5 MB");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
  };

  const convertToBase64 = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();

    let binary = "";
    const bytes = new Uint8Array(buffer);

    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
  };

  const handleSubmit = async () => {
    if (!subject.trim()) {
      alert("Please enter subject");
      return;
    }

    if (!description.trim()) {
      alert("Please enter description");
      return;
    }

    try {
      setLoading(true);

      const params = new URLSearchParams(window.location.search);
      const clientCode = params.get("clientcode")?.replace(/ /g, "+");

      const attachmentList: {
        attachmentName: string;
        attachmentContent: string;
      }[] = [];

      if (selectedFile) {
        const base64 = await convertToBase64(selectedFile);

        console.log("Base64 Preview:", base64.substring(0, 50));
        console.log("Base64 Length:", base64.length);

        attachmentList.push({
          attachmentName: selectedFile.name,
          attachmentContent: base64,
        });
      }

      const payload = {
        clientCode,
        subject,
        description,
        attachmentList,
      };

      console.log("Payload:", payload);

      const response = await commonApi("Zoho/InsertTicket_Internal", payload);

      console.log("Response:", response);

      alert("Ticket raised successfully.");

      setSubject("");
      setDescription("");
      setFileName("");
      setSelectedFile(null);

      if (fileRef.current) {
        fileRef.current.value = "";
      }

      navigate("/help-support");
    } catch (err) {
      console.error(err);
      alert("Unable to raise ticket.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        title="Raise a Ticket"
        showBack
        onBack={() => navigate(`/help-support${search}`)}
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
              size="small"
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
                  alignItems: "center",
                  gap: 1,
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
                  {fileName || "Attach a File"}
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
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
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
              disabled={loading}
              onClick={handleSubmit}
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
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RaiseTicket;
