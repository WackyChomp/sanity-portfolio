import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/container/Header/Header";

export default function Home() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <h1 className="text-xl font-bold">Home Page</h1>
      <br />
      <Header/>
      <br />
      <p>Sections</p>
      <p>Work</p>
      <p>Skills</p>
      <p>Testimonial</p>
      <p>Footer</p>
    </main>
  );
}
