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
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const menus = [
  {
    title: "Raise a Ticket",
    path: "/help-support/raise-ticket",
  },
  {
    title: "Open Tickets",
    path: "/help-support/open-ticket",
  },
  {
    title: "Closed Tickets",
    path: "/help-support/close-ticket",
  },
];

const HelpSupport = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    <>
      <Header
        title="Help & Support"
        showBack
        onBack={() => navigate(`/${search}`)}
      />

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 2, md: 4 },
          width: {
            xs: "100%",
            md: 800,
          },
          px: {
            xs: 1,
            md: 0,
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
            borderRadius: {
              xs: 2,
              md: 0,
            },
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
              <Box key={item.title}>
                <ListItemButton
                  onClick={() => navigate(`${item.path}${search}`)}
                  sx={{
                    px: 0,
                    py: 2,
                  }}
                >
                  <ListItemText
                    primary={item.title}
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
