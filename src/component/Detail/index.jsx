import CarouselCard from "./CarouselCard";
import AccordionItem from "./AccordionItem";
import { Container, Box } from "@mui/system";
// import About from "./About";
function DetailCard() {
  return (
    <Box id="Package">
      <Box
        sx={{
          backgroundImage: `url("/img/Destination1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "90vh",
        }}
      ></Box>
      <Container sx={{top:"20%"}}>
        <CarouselCard />
        <AccordionItem />
      </Container>
    </Box>
  );
}

export default DetailCard;
