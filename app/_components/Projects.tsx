import { RevealOnScroll } from "./RevealOnScroll";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const Projects = () => {
  return (
    <section id="projects">
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto px-4">
          <h2 className="text-lg md:text-4xl mb-4 text-gray-100 font-bold underline decoration-blue-400 text-center">
            PROJECTS
          </h2>

          {/* First project: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-50 mb-15">
            <HeroVideoDialog
              className="w-150 block dark:hidden"
              animationStyle="top-in-bottom-out"
              videoSrc="/TopPerformance.mov"
              thumbnailSrc="/TopPerformance.png"
              thumbnailAlt="Top Performance"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Top Performance</h2>
              <p className="text-gray-300">Fitness calculator</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-50">
            <HeroVideoDialog
              className="w-150 block dark:hidden"
              animationStyle="top-in-bottom-out"
              videoSrc="/MusicRec.mp4"
              thumbnailSrc="/MusicRec.png"
              thumbnailAlt="Music Rec"
            />
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">Music Recommendations</h2>
              <p className="text-gray-300">
                Uploading songs, like songs, and algorithm will feed back music
                you like!
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
