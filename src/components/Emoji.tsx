import BullEye from "../assets/bulls-eye.webp";
import Thumb from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const MapEmoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: Thumb, alt: "recommended", boxSize: "25px" },
    5: { src: BullEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...MapEmoji[rating]} />;
};

export default Emoji;
