import CarouselCard from "./CarouselCard";
import AccordionItem from "./AccordionItem";
import { Container, Box } from "@mui/system";
// import About from "./About";
function DetailCard() {
  return (
    <Box id="Package">
      <Box
        sx={{
          backgroundImage: `url("/img/booking/654659.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 100px)",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          fill: "linearGradient rgba(255, 255, 255, 0)",
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
