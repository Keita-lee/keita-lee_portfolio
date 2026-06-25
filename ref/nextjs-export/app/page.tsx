import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Keita Lee Willmott — Product · UX · Software",
  description:
    "Portfolio of Keita Lee Willmott — product, UX, and software professional building WhatsApp automation systems and Flutter apps in South Africa.",
};

export default function Home() {
  return <Portfolio />;
}
