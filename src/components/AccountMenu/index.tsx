import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const menus = [
  {
    id: "profile",
    title: "Profile and Account Details",
    icon: <PersonOutlinedIcon />,
  },
  {
    id: "bank",
    title: "Bank Accounts",
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    id: "segments",
    title: "Manage Segments",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    id: "nominee",
    title: "Nominee Details",
    icon: <PersonAddAltOutlinedIcon />,
  },
  {
    id: "ddpi",
    title: "DDPI Status",
    icon: <DescriptionOutlinedIcon />,
    chip: "Active",
  },
];

interface AccountMenuProps {
  onMenuClick: (page: string) => void;
}

const AccountMenu = ({ onMenuClick }: AccountMenuProps) => {
  return (
    <Box
      sx={{
        // width: 600,
        bgcolor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
        mx: "auto",
      }}
    >
      <List disablePadding>
        {menus.map((item, index) => (
          <ListItemButton
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            sx={{
              height: 88,
              px: 3,
              borderBottom:
                index !== menus.length - 1 ? "1px solid #F2F2F2" : "none",

              "&:hover": {
                bgcolor: "#fafafa",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 56,
                color: "#1F4C8F",
                fontSize: "25px",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.title}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#292929",
                  },
                },
              }}
            />

            {item.chip && (
              <Chip
                label={item.chip}
                size="small"
                sx={{
                  mr: 2,
                  height: 22,
                  fontSize: 11,
                  bgcolor: "#E8F7EE",
                  color: "#27AE60",
                  fontWeight: 500,
                  borderRadius: "6px",
                }}
              />
            )}

            <ChevronRightIcon
              sx={{
                color: "#233A7D",
                fontSize: "22px",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
export default AccountMenu;
