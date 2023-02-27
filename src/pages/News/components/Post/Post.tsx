import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { truncate } from "../../utils/truncate";

interface PostProps {
  title: string;
  body: string;
}

export const Post: FC<PostProps> = ({ title, body }) => {
  return (
    <Grid item sm={1}>
      <Card className="post">
        <CardActionArea>
          <Box height={140} className="post-image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {truncate(body, 25)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncate(body, 200)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
