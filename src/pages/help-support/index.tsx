import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const menus = ["Raise a Ticket", "Open Tickets", "Closed Tickets"];

const HelpSupport = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Help & Support" showBack onBack={() => navigate("/")} />

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
          <Box
            sx={{
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 11,
                color: "#9B9B9B",
              }}
            >
              Call Help Desk
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "#212121",
                mt: 0.3,
              }}
            >
              022-41507346
            </Typography>
          </Box>

          <Divider />

          <Box
            sx={{
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 11,
                color: "#9B9B9B",
              }}
            >
              Help Desk Email ID
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "#212121",
                mt: 0.3,
              }}
            >
              Helpdesk@lkpsec.com
            </Typography>
          </Box>

          <Divider />

          <List disablePadding>
            {menus.map((item) => (
              <Box key={item}>
                <ListItemButton
                  onClick={() => console.log(item)}
                  sx={{
                    px: 0,
                    py: 2,
                  }}
                >
                  <ListItemText
                    primary={item}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: 15,
                          color: "#212121",
                        },
                      },
                    }}
                  />

                  <ChevronRightIcon
                    sx={{
                      color: "#273C8F",
                    }}
                  />
                </ListItemButton>

                <Divider />
              </Box>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
};

export default HelpSupport;
