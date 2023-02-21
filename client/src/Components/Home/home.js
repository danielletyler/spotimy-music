import React from "react";
import { Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import Chart from "./chart";

const Home = () => {
  return (
    <Flex justify="center" py={12} px={[8, 8, null]}>
      <Flex
        w={["100%", "100%", "75%", "75%", "50%"]}
        flexDir="column"
        rowGap={2}
      >
        <Heading py={4} fontSize={20}>
          Daily Song Charts
        </Heading>
        <SimpleGrid columns={[2, 2, 2, 3]} spacing={8}>
          <Chart
            id="37i9dQZEVXbMDoHDwVN2tF"
            title="Top 50 Global"
            initial={"G"}
          />
          <Chart
            id="37i9dQZEVXbLRQDuF5jeBp"
            title="Top 50 USA"
            initial={"US"}
          />

          <Chart id="37i9dQZEVXbLnolsZ8PSNw" title="Top 50 UK" initial={"UK"} />
          <Chart
            id="37i9dQZEVXbKj23U1GF4IR"
            title="Top 50 Canada"
            initial={"CA"}
          />
          <Chart
            id="37i9dQZEVXbO3qyFxbkOE1"
            title="Top 50 Mexico"
            initial={"MX"}
          />
          <Chart
            id="37i9dQZEVXbLwpL8TjsxOG"
            title="Top 50 Hong Kong"
            initial={"HK"}
          />
        </SimpleGrid>
        <Heading mt={8} py={4} fontSize={20}>
          Weekly Song Charts
        </Heading>
        <SimpleGrid columns={[2, 2, 2, 3]} spacing={8}>
          <Chart
            id="37i9dQZEVXbNG2KDcFcKOF"
            title="Top Songs Global"
            initial={"G"}
          />
          <Chart
            id="37i9dQZEVXbLp5XoPON0wI"
            title="Top Songs USA"
            initial={"US"}
          />
          <Chart
            id="37i9dQZEVXbMwmF30ppw50"
            title="Top Songs UK"
            initial={"UK"}
          />
          <Chart
            id="37i9dQZEVXbMda2apknTqH"
            title="Top Songs Canada"
            initial={"CA"}
          />
          <Chart
            id="37i9dQZEVXbKUoIkUXteF6"
            title="Top Songs Mexico"
            initial={"MX"}
          />
          <Chart
            id="37i9dQZEVXbMdvweCgpBAe"
            title="Top Songs Hong Kong"
            initial={"HK"}
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
