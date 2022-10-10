import React from "react";
import { BaseStyles, Flex, Heading } from "@primer/components";

export const Container = ({ children }) => (
  <BaseStyles>
    <Flex mt={3} alignItems="center" justifyContent="center" height="100vh">
      <Heading>{children}</Heading>
    </Flex>
  </BaseStyles>
);

export const calculateCountdownFromNow = (nextDate) => {
  const now = new Date().getTime();

  const distance = new Date(nextDate).getTime() - now;

  if (distance < 0) {
    return {
      expired: true,
      values: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  return {
    expired: false,
    values: {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    },
  };
};
