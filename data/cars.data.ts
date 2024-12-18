import { currentModelType } from "@/typings";

type CarDetails = {
  name: string;
  price: number;
  tag: currentModelType;
}[];

export const carDetails: CarDetails = [
  {
    name: "bugatti la voiture noir",
    price: 18000000,
    tag: "bugatti",
  },
  {
    name: "2015 audi q7",
    price: 28200,
    tag: "audi",
  },
  {
    name: "2016 ferrari f12 tdf",
    price: 1625000,
    tag: "ferrari",
  },
];

export const carsColor = [
  {
    color: "#ffffff",
    name: "white",
  },
  {
    color: "#520000",
    name: "red",
  },
  {
    color: "#e2e200",
    name: "yellow",
  },
  {
    color: "#523100",
    name: "brown",
  },
  {
    color: "#005200",
    name: "green",
  },
  {
    color: "#004d52",
    name: "cyan",
  },
  {
    color: "#000452",
    name: "blue",
  },
  {
    color: "#310052",
    name: "purple",
  },
  {
    color: "#52003c",
    name: "pink",
  },
  {
    color: "#000000",
    name: "black",
  },
];
