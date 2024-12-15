import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Hero from "@/components/pages/landing/Hero";
import Description from "@/components/pages/landing/Description";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <div>
        <Header />
      </div>
      <Hero />
      <Description />
      <Button variant={"outline"}>Button</Button>
      <Button color="white">
        <ChevronRight />
      </Button>
    </div>
  );
}
