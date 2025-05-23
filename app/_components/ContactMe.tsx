import { ContactMeForm } from "@/components/ContactMeForm";
import { RevealOnScroll } from "./RevealOnScroll";

export const ContactMe = () => {
  return (
    <section>
      <RevealOnScroll>
        <div
          className="flex flex-col items-center gap-16 max-w-7xl mx-auto px-4 mt-[15rem]"
          id="contact"
        >
          <h2 className="text-lg md:text-4xl mb-4 text-gray-100 font-bold underline decoration-blue-400 text-center">
            CONTACT ME
          </h2>

          <ContactMeForm />
        </div>
      </RevealOnScroll>
    </section>
  );
};
