import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardEL = ({ title, cover, slug, author }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}>
      <CardHeader
        avatar={
          <Avatar
            src={author.avatar.url}
            sx={{ marginLeft: 1, marginRight: "-20px" }}
          />
        }
        title={
          <Typography
            component="p"
            variant="P"
            color="text.secondary"
            fontSize="12px"
          >
            {author.name}
          </Typography>
        }
      />
      <CardMedia component="img" height="194" image={cover.url} alt={slug} />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        {/* <Link to={`/blogs/${slug}`}> */}
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%", borderRadius: 3 }}
        >
          مطالعه مقاله
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
};

export default CardEL;
