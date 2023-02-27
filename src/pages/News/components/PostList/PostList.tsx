import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Grid, Typography } from "@mui/material";

import { IPost } from "../../types/IPost";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../Post/Post";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";

import "../../styles/style.css";
import "@/shared/assets/colors.css";

export const PostList: FC = () => {
  const { posts, loading, buttonDisabled, error, offset, setOffset } =
    usePosts();
  const { t } = useTranslation();

  const showMorePosts = () => {
    setOffset((prevOffset) => prevOffset + 3);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        columns={4}
        rowGap={2}
        columnGap={2}
        className="grid-container"
      >
        {loading && <SkeletonLoader />}
        {error && <Typography>{error}</Typography>}
        {posts.slice(0, offset).map((item: IPost) => (
          <Post title={item.title} body={item.body} />
        ))}
        <Grid item sm={4} className="grid-item">
          <Button
            onClick={() => showMorePosts()}
            variant="outlined"
            disabled={buttonDisabled}
            className="green-main-text"
          >
            {t("news.button")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
