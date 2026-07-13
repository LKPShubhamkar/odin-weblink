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
      <Toolbar sx={{ minHeight: "56px" }}>
        {showBack && (
          <IconButton
            onClick={onBack}
            edge="start"
            sx={{
              mr: 1,
              color: "#1F4C8F",
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
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
