/* eslint-disable @next/next/no-img-element */
import { Timeline } from "@/components/ui/timeline";
import { RevealOnScroll } from "./RevealOnScroll";
import { Lens } from "@/components/magicui/lens";

export const About = () => {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-6 text-xs font-semibold text-neutral-300 md:text-sm dark:text-neutral-200">
            Started higher education at Arkansas State University to obtain
            degree in Computer Science
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/IMG_5762.jpg"
                alt=""
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/IMG_5763.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-xs font-semibold text-neutral-300 md:text-sm dark:text-neutral-200">
            Worked on the operations team for Tech Friends in Jonesboro, AR.
          </p>
          <div className="mb-8 text-xs  text-neutral-300 md:text-sm dark:text-neutral-200">
            <ol className="pl-8 list-disc list-outside marker:text-blue-400 w-full">
              <li>
                Tracked progress of open tickets, providing updates as needed
                throughout resolution process
              </li>
              <li>
                Provided technical support to customers via phone, email, and
                chat, resolving custom inquiries troubleshooting website issues
              </li>
              <li>
                Demonstrated excellent custom support skills by reasoning
                quickly to customer requests and building relationships with
                clients
              </li>
            </ol>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/TF.png"
              alt="techfriends"
              width={300}
              height={300}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-6 text-xs font-semibold text-neutral-300 md:text-sm dark:text-neutral-200">
            Obtained Bachelor&apos;s in Computer Science with Minor in
            Mathematics from Arkansas State University
          </p>
          <div className="mb-8 text-xs  text-neutral-300 md:text-sm dark:text-neutral-200">
            <ol>
              <li className="mb-4">
                <span className="text-blue-400">GPA:</span> 3.94{" "}
                <span className="font-light">| Magna Cum Laude</span>
              </li>
              <li>President of the Association of Computing Machinery</li>
              <li>Arkansas State Student Philanthropy Council</li>
              <li>
                Department of Mathematics & Computer Science Diversity Committee
              </li>
              <li>
                Student Tutor for Structured Programming, Concepts of
                Programming, and Arkansas State University Coding Camp
              </li>
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/IMG_5765.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/IMG_5766.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </Lens>
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-semibold text-neutral-300 md:text-sm dark:text-neutral-200">
            Software Developer at Tech Friends
          </p>
          <div className="mb-8 text-xs  text-neutral-300 md:text-sm dark:text-neutral-200">
            <ol className="pl-8 list-disc list-outside marker:text-blue-400 w-full">
              <li>
                Utilized object-oriented programming techniques to develop web
                application components
              </li>
              <li>
                Implemented new features enhancing monitoring capabilities for
                officers in jails and prison
              </li>
              <li>
                Resolved the highest number of tickets on the team in the first
                year, showcasing strong debugging and problem-solving abilities
                with a focus on quality and efficiency.
              </li>
            </ol>
            <div className="w-full h-[2px] bg-blue-400 mt-2"></div>
            <div className="mt-4 font-semibold text-[1rem]">
              <p>
                As a Software Developer at Tech Friends, I work on the
                development and maintenance of TeamResponse.com, a web-based
                platform designed to support jail administration and
                correctional facility operations. My role involves building and
                enhancing user-facing features using{" "}
                <span className="text-blue-400">React</span> for the frontend,
                while leveraging <span className="text-blue-400">.NET</span> and{" "}
                <span className="text-blue-400">C#</span> on the backend to
                ensure secure and efficient processing of data. I also utilize
                <span className="text-blue-400"> Redux</span> for state
                management to provide a responsive and consistent user
                experience. The platform is tailored to assist correctional
                staff in managing communication, monitoring activity, and
                streamlining daily administrative tasks within facilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/TF.png"
              alt="techfriends"
              width={300}
              height={300}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </RevealOnScroll>
    </section>
  );
};
