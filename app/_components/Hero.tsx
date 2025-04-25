import { RevealOnScroll } from "./RevealOnScroll";

export const Hero = () => {
  return (
    <RevealOnScroll>
      <section
        className="flex flex-col items-center justify-center min-h-screen"
        id="home"
      >
        <figure className="diff aspect-16/9" tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <div className="bg-background text-primary-content grid place-content-center text-9xl font-black">
              KRE HOLLEY <br></br>{" "}
              <span className="text-2xl text-center text-blue-400">
                SOFTWARE DEVELOPER, FULL STACK
              </span>
            </div>
          </div>
          <div className="diff-item-2" role="img">
            <div className="bg-base-200 text-primary-content grid place-content-center text-9xl font-black">
              KRE HOLLEY <br></br>{" "}
              <span className="text-2xl text-center text-blue-400">
                SOFTWARE DEVELOPER, FULL STACK
              </span>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </figure>
      </section>
    </RevealOnScroll>
  );
};
