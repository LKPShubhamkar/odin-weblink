import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

const Header = ({ title, showBack = false, onBack }: HeaderProps) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#212121",
        borderBottom: "1px solid #ECECEC",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "56px",
          position: "relative",
        }}
      >
        {showBack && (
          <IconButton
            onClick={onBack}
            edge="start"
            sx={{
              mr: 1,
              color: "#1F4C8F",
              zIndex: 1,
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            fontFamily: "Poppins",

            position: {
              xs: "absolute",
              md: "static",
            },
            left: {
              xs: "50%",
              md: "auto",
            },
            transform: {
              xs: "translateX(-50%)",
              md: "none",
            },
            width: {
              xs: "100%",
              md: "auto",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            pointerEvents: "none",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
