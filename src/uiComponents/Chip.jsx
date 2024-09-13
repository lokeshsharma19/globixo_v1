import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Chip
        sx={{
          color: "rgba(91, 91, 91, 1)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
          },
        }}
        label="Contact Manufacturing"
        variant="outlined"
        onClick={handleClick}
      />
      <Chip
        sx={{
          color: "rgba(91, 91, 91, 1)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
          },
        }}
        label="Export"
        variant="outlined"
        onClick={handleClick}
      />
      <Chip
        sx={{
          color: "rgba(91, 91, 91, 1)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
          },
        }}
        label="White Level Brands"
        variant="outlined"
        onClick={handleClick}
      />
    </Stack>
  );
}
