//galleries/animal-portaits

import Gallery from "@/app/components/Gallery";

const images = [
  { address: "/assets/animal-portraits/Animal_Portrait_1.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_2.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_3.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_4.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_5.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_6.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_7.jpg" },
  { address: "/assets/animal-portraits/Animal_Portrait_8.jpg" },
];

export default function AnimalPortraits() {
  return (
    <section className="flex flex-col items-center py-24">
      <h3 className="text-xl font-semibold pb-36">Animal Portraits</h3>
      <Gallery images={images} />
    </section>
  );
}
