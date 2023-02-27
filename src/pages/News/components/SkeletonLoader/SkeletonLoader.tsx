import { Grid, Skeleton } from "@mui/material";
import { FC } from "react";

export const SkeletonLoader: FC = () => {
  return (
    <>
      <Grid item sm={1}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item sm={1}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item sm={1}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
    </>
  );
};
