import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <h1 className="text-xl font-bold">Home Page</h1>
      <br />
      <p>Sections</p>
      <p>About</p>
      <p>Work</p>
      <p>Skills</p>
      <p>Testimonial</p>
      <p>Footer</p>
    </main>
  );
}
