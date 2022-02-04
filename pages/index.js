import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Icon,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SlideShow } from "../components/slide-show";
import Locator from "../components/locator";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [h, setH] = useState(0);

  useEffect(() => {
    setH(screen.height);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="relative">
      <Box id="D" className="">
        <SlideShow />
        <Container maxW="container.xl">
          <Box className="mt-20"></Box>
        </Container>
      </Box>
      <Box id="dehaat" pt={5} className="">
        <Container maxW="container.xl">
          <Heading as="h1" variant="page-title">
            Dehaat
          </Heading>
          <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
            <Box className="tracking-wider flex-1">
              <Text
                className="font-bold text-2xl"
                maxW="container.sm"
                borderRadius="lg"
                bg="whiteAlpha.200"
                my={6}
                p={5}
              >
                From Seed to Market
              </Text>
              <Text className="" maxW={720}>
                Among its multiple services, DeHaat App provides frequent crop
                reminder notification voice calls in local language to the
                farmer specific to their crop requirements. Thus, Farmers were
                informed about the right dosage of input as well as the best
                available crop consultation. It also provide the farmers with
                the flexibility to order input through our App and even sell
                their output directly to Dehaat through the app, removing
                middleman at mandi price. They even start getting customized
                advisory services through automated messages and voice calls
                based on real-time information.
              </Text>
            </Box>
            <Box className="flex justify-evenly mt-14">
              <Box className="w-96 px-24 ">
                <Image
                  src="/images/app.png"
                  alt="logo"
                  width="256"
                  height="480"
                />
              </Box>
            </Box>
          </Box>
          <Container
            maxW="container.sm"
            borderRadius="lg"
            bg="whiteAlpha.200"
            //mb={6}
            //p={10}
            align="center"
            className="mt-16"
          >
            <Image src="/images/logo.png" alt="logo" width="240" height="240" />
          </Container>
        </Container>
      </Box>
      <Box id="features" pt={14} className="">
        <Container maxW="container.xl">
          <Heading as="h1" variant="page-title">
            Features
          </Heading>
          {/* -------------------------------------------- */}
          <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Helpline
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Helpline
                </Heading>
                <Text className="" maxW={720} my={12}>
                  What crop to grow? How best to grow it? What seed/fertilizer
                  to use and when? Answers to these questions have never been
                  more critical and relevant today with billions of mouths to
                  feed while pursuing sustainable agriculture and dealing with
                  climate change. Traditionally crop advisory for farmers has
                  come from other farmers and from local “historical
                  experience”. While that may be useful in limited ways, that
                  mechanism does not incorporate proper scientific know-how and
                  advances in agri technology and processes.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/helpline/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/helpline/2.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/helpline/3.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box>
          {/* -------------------------------------------- */}
          <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Buy Input
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Buy Input
                </Heading>
                <Text className="" maxW={720} my={12}>
                  Input material at the beginning of farming cycle is the most
                  important aspect that determines the quality and volume of the
                  output - hence the income and livelihood of the farmer.
                  Serious gaps in the agri-input value chain exist due to demand
                  and supply mismatch, substandard locally manufactured
                  products, duplication, adulteration, and black-marketing of
                  key products. Farmers are often misguided about the variety,
                  solution, and dosage of Seed, Fertilizer and Pesticide they
                  should be using. Our objective is to provide agri input of
                  right Kind of right Quality at right Price and at right Time.
                  Our robust technology solutions for supply chain management
                  enables us to provide direct cost saving to the farmer up to
                  15%, delivery of input at farmers’ doorstep and post-sales
                  support with advisory on usage and monitoring Health & Growth
                  of the crop as the cropping season wears on.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/buy_input/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/buy_input/2.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/buy_input/3.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box>
          {/* -------------------------------------------- */}
          <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Sell Produce
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Sell Produce
                </Heading>
                <Text className="" maxW={720} my={12}>
                  Agri Output is cumulative result of nature’s bounty and
                  farmers ingenuity and hard work even so, unfortunately that
                  does not always translate to deserving monetary rewards for
                  the farmer. Variety of “middlemen” and logistical hurdles
                  become serious impediments between Farmers and high-paying
                  Institutional Buyers, resulting in lack of price transparency
                  for farmer, price increase at both ends due to multiple
                  handling, as well as post-harvest losses. In this process
                  farmers do not receive good farm gate prices for their
                  produce. There is tremendous scope of technology-enabled
                  disruption and development in this sector. DeHaat Technology
                  Solution has been designed to create a transparent marketplace
                  to provide direct market access to farmers and a reliable
                  supply chain for large institutional buyers. With our “last
                  mile connection” with the farmers and their farms, we continue
                  direct on-field monitoring over quantity and quality over the
                  produce growth cycle and provide full logistical support for
                  harvesting and transportation, storage at conveniently located
                  DeHaat Collection Centers – thus eliminating distress selling
                  and the meddling middlemen that has been affecting Farmers in
                  India for generations. This has resulted an increment of up to
                  20% gate prices for the farmer.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/sell_produce/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/sell_produce/2.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/sell_produce/3.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box>
          {/* -------------------------------------------- */}
          <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Soil Testing
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Soil Testing
                </Heading>
                <Text className="" maxW={720} my={12}>
                  Knowing the Soil is where it all starts – the nutrient content
                  and chemical composition of the soil defines how fertile the
                  soil is and what level of plant life it can support and
                  sustain on a consistent basis. We help our farmers get the
                  soil test done at our testing labs or bring in their existing
                  soil health cards. Soil composition data points provide
                  foundations for selecting the right kind of Agri Input
                  (seed/fertilizer) and to generate advanced analytics e.g.
                  yield predictions and Personalized Advisory.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade controls={false} interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/soil_testing/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box>
          {/* -------------------------------------------- */}
          <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Disease Detection
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Disease Detection
                </Heading>
                <Text className="" maxW={720} my={12}>
                  What crop to grow? How best to grow it? What seed/fertilizer
                  to use and when? Answers to these questions have never been
                  more critical and relevant today with billions of mouths to
                  feed while pursuing sustainable agriculture and dealing with
                  climate change. Traditionally crop advisory for farmers has
                  come from other farmers and from local “historical
                  experience”. While that may be useful in limited ways, that
                  mechanism does not incorporate proper scientific know-how and
                  advances in agri technology and processes.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/disease_detection/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/disease_detection/2.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/disease_detection/3.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box>
          {/* -------------------------------------------- */}
          {/* <Box>
            <Heading
              as="h3"
              variant="section-title"
              className="md:hidden inline-block"
              mt={12}
            >
              Helpline
            </Heading>
            <Box className="flex flex-col-reverse md:flex-row justify-evenly items-center">
              <Box className="tracking-wider flex-1">
                <Heading
                  as="h3"
                  variant="section-title"
                  className="hidden md:inline-block"
                  mt={12}
                >
                  Helpline
                </Heading>
                <Text className="" maxW={720} my={12}>
                  What crop to grow? How best to grow it? What seed/fertilizer
                  to use and when? Answers to these questions have never been
                  more critical and relevant today with billions of mouths to
                  feed while pursuing sustainable agriculture and dealing with
                  climate change. Traditionally crop advisory for farmers has
                  come from other farmers and from local “historical
                  experience”. While that may be useful in limited ways, that
                  mechanism does not incorporate proper scientific know-how and
                  advances in agri technology and processes.
                </Text>
              </Box>
              <Box className="flex justify-evenly mt-14 w-96 px-24">
                <Carousel fade interval={3000} variant="dark">
                  <Carousel.Item>
                    <Box
                    // className="w-96 px-24 "
                    >
                      <Image
                        src="/images/helpline/1.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/helpline/2.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Box>
                      <Image
                        src="/images/helpline/3.png"
                        alt="logo"
                        width="256"
                        height="480"
                      />
                    </Box>
                  </Carousel.Item>
                </Carousel>
              </Box>
            </Box>
          </Box> */}
        </Container>
      </Box>
      <Box id="contact" pt={14} className="h-screen">
        <Container maxW="container.xl">
          <Heading as="h2" variant="page-title">
            Drop An Equiry
          </Heading>
          <Box className="text-white p-10 rounded-lg">
            {/* <h1 className="text-4xl font-semibold mb-5">Drop An Equiry</h1> */}
            <FormControl className="flex flex-col md:flex-row">
              <Box className="flex flex-col flex-grow">
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="border-2 border-gray-500 mx-2 mb-2 p-3 focus:border-green-600 outline-none text-xs"
                  bg="whiteAlpha.200"
                />
                <Input
                  autoComplete="off"
                  type="number"
                  name="name"
                  placeholder="Phone Number"
                  className="border-2 border-gray-500 mx-2 mb-2 p-3 focus:border-green-600 outline-none text-xs"
                  bg="whiteAlpha.200"
                />
                <Textarea
                  autoComplete="off"
                  className="border-2 border-gray-500 mx-2 mb-2 p-3 focus:border-green-600 outline-none text-xs"
                  bg="whiteAlpha.200"
                  name=""
                  id=""
                  placeholder="Message Here"
                  cols="10"
                  rows="5"
                />
                <Box className="items-center mt-2 hidden mx-2 md:flex">
                  {/* <FiArrowRight className="ml-2 bg-green-600 rounded-l-sm" />
                  <Input
                    type="submit"
                    value="Submit"
                    className="text-white bg-green-600 pr-2 rounded-r-sm"
                  /> */}
                  <Button
                    type="submit"
                    bg="glassGreen"
                    colorScheme="green"
                    className=""
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box className="flex flex-col md:mx-2 flex-grow">
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Enter Email ID"
                  className="border-2 border-gray-500 mx-2 mb-2 p-3 focus:border-green-600 outline-none text-xs"
                  bg="whiteAlpha.200"
                />
                <Select
                  className="border-2 border-gray-500 mx-2 mb-2 p-3 focus:border-green-600 outline-none text-xs"
                  bg="whiteAlpha.200"
                  placeholder="Select Equiry Type"
                >
                  {/* <option
                    className="bg-white text-black my-2"
                    selected
                    value="grapefruit"
                  >
                    Select Equiry Type
                  </option> */}
                  <option className="bg-white text-black my-2" value="farmer">
                    Farmer
                  </option>
                  <option
                    className="bg-white text-black my-2"
                    value="dehaat-business-partner"
                  >
                    Dehaat Business Partner
                  </option>
                  <option
                    className="bg-white text-black my-2"
                    value="institutional-buyer"
                  >
                    Institutional Buyer
                  </option>
                  <option
                    className="bg-white text-black my-2"
                    value="agri-input-supplier"
                  >
                    Agri Input Supplier
                  </option>
                </Select>
              </Box>
              <Box className="flex items-center ml-2 mt-2 md:hidden">
                <Button
                  type="submit"
                  bg="glassGreen"
                  colorScheme="green"
                  className=""
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Box>
      <Locator scrollY={scrollY} h={h} />
    </Box>
  );
}
