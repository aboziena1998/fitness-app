import { useEffect, useState } from "react";
// import Pagination from "@mui/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { options, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const exercisesPerPage = 9;
// eslint-disable-next-line react/prop-types, no-unused-vars
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexofLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexofLastExercise - exercisesPerPage;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [setExercises, bodyPart]);

  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexofLastExercise
  );
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
