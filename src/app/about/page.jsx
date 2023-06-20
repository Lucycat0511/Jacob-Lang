// /about

import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flex gap-8 py-24 ">
        <div className="w-2/5">
          <Image
            className="w-full aspect-square"
            src="/assets/mock-image.jpg"
            height={500}
            width={500}
            alt="image of Jacob Lang"
          />
        </div>
        <div className="flex flex-col gap-4 leading-relaxed w-1/2">
          <h1 className="text-3xl">Jacob Lang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Etiam non quam
            lacus suspendisse faucibus interdum posuere. Mauris cursus mattis
            molestie a. In pellentesque massa placerat duis. Ligula ullamcorper
            malesuada proin libero nunc. Quis imperdiet massa tincidunt nunc
          </p>
          <p>
            Arcu non sodales neque sodales ut. Quam pellentesque nec nam aliquam
            sem et tortor consequat id. Non tellus orci ac auctor augue mauris
            augue. Sed pulvinar proin gravida hendrerit lectus a. Interdum
            varius sit amet mattis vulputate. Ante in nibh mauris cursus mattis
            molestie a iaculis. Nam libero justo laoreet sit amet cursus sit
            amet. Habitant morbi tristique senectus et netus et malesuada fames.
            A pellentesque sit amet porttitor eget dolor. Mauris pharetra et
          </p>
          <h2 className="text-2xl">Awards</h2>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </section>
    </>
  );
}
