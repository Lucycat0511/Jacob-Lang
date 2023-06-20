// /contact

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col py-24 items-center gap-8">
      <h1 className="text-3xl font-semibold">Contact Form</h1>
      <div className="w-full px-64">
        <ContactForm />
      </div>
    </div>
  );
}
