import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey", borderRadius: "100px" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  

  let arr = [
    "https://mobilecontent.costco.com/live/resource/img/25w02073/d_25w02073_hero_tisdale.jpg",
    "https://mobilecontent.costco.com/live/resource/img/24w13226/d_24w13226_oct_mvm_cover_hero_v2.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/25w01039/d_25w01039_hero_holiday_home.jpg",
    "https://mobilecontent.costco.com/live/resource/img/25w01141/d_25w01141_hero_oct_connection.jpg",
    "https://mobilecontent.costco.com/live/resource/img/25w02002/d_25w02002_hero_ge_laundry.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/25w02003/d_25w02003_hero_apparel_bmas.jpg",
    "https://mobilecontent.costco.com/live/resource/img/25w02040/d_25w02040_cat_hero_samsung_day1.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w11034/d_24w11034_hero_halloween.jpg",
    "https://mobilecontent.costco.com/live/resource/img/25w02081/d_25w02081_hero_metaquest_02.jpg",
    "https://mobilecontent.costco.com/live/resource/img/25w02038/d_25w02038_hero_oct_mvm_featured_values.jpg",
    "https://mobilecontent.costco.com/live/resource/img/20241007_MKT_LTD/20241007_MKT_LTD_US_DotComHero_D.jpg",
  ];

  return (
    <Box p={["7", "7", "10", "20"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Slider {...settings}>
        {arr.map((elem, i) => (
          <img src={elem} alt="slider" key={i} />
        ))}
      </Slider>
    </Box>
  );
}
