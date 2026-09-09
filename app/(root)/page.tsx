import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen">backgroundChecked</div>
      <Footer />
    </div>
  );
}
