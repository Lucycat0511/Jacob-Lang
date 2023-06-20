import Link from "next/link";
import Gallery from "./components/Gallery";
import Button from "./components/button/Button";
import ContactFormContainer from "./components/ContactFormContainer";

const images = [
  { address: "/assets/animal-portraits/Animal_Portrait_7.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_3.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_6.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_5.jpg" },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-36 py-24">
        <h2 className="self-center text-3xl font-semibold text-center leading-relaxed mx-64">
          Jacob Lang is an acrylic painter and ink illustrator
          <br />
          based in Hyde Park, NY.
        </h2>
        <section className="flex flex-col gap-16 items-center">
          <Gallery images={images} />
          <Link
            className="dark:hover:text-white hover:text-black"
            href="/galleries/animal-portraits"
          >
            <Button>See More</Button>
          </Link>
        </section>
        <ContactFormContainer />
      </main>
    </>
  );
}
