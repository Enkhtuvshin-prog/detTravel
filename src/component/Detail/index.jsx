import CarouselCard from "./CarouselCard";
import AccordionItem from "./AccordionItem";
import { Container, Box } from "@mui/system";
// import About from "./About";
function DetailCard() {
  return (
    <Box id="Package">
      <Container>
        <CarouselCard />
        <AccordionItem />
      </Container>
    </Box>
  );
}

export default DetailCard;
