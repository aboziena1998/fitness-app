import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb="2rem">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", mb: "100px" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb="2rem">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", mb: "100px" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
