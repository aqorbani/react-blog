import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography flex={1} component="h1" variant="h5" fontWeight="bold">
            <AutoStoriesOutlinedIcon />
            وبلاگ
          </Typography>
          <BookOutlinedIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
