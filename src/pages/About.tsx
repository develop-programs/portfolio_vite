import Facebook from "@/components/social-Icons/Facebook";
import Github from "@/components/social-Icons/Github";
import Instagram from "@/components/social-Icons/Instagram";
import LinkedIn from "@/components/social-Icons/LinkedIn";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full flex justify-center items-center gap-44">
        <div className="w-80 h-80 bg-gradient-to-bl from-blue-400 to-sky-900 rounded-2xl shadow-inner" />
        <div className="min-w-96 max-w-[40rem] space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">About Me</span>
            <svg
              width="58"
              height="3"
              viewBox="0 0 58 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="56.5"
                y2="1.5"
                stroke="#2965F1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-dasharray="6 6"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              {
                name: "Name",
                value: "Shreyansh Awadhiya",
              },
              {
                name: "Email",
                value: "zRQp0@example.com",
              },
              {
                name: "Github",
                link: "https://github.com/ShreyanshAwadhiya",
              },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/shreyansh-awadhiya-0b0b3b1b5/",
              },
            ].map((item, index: number) => (
              <div key={index} className="space-x-4">
                <span className="text-base font-bold">{item.name} :</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold hover:underline hover:underline-offset-2"
                  >
                    {item.link}
                  </a>
                ) : (
                  <span className="text-base font-semibold">{item.value}</span>
                )}
              </div>
            ))}
          </div>
          <div>
            <span className="text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores nemo iusto eum maxime voluptatibus, iste illum incidunt
              dicta quis dignissimos minima cupiditate aspernatur, sunt earum
              doloremque vero id voluptatem doloribus?
            </span>
          </div>
          <div>
            <Button
              className="w-60 px-2 py-6 text-lg rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center gap-2"
              style={{
                boxShadow:
                  "-4px 4px 4px 0px rgba(255, 255, 255, 0.15) inset, 2px 3px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Download Resume
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path
                  d="M4 4.5C3.86739 4.5 3.74021 4.55268 3.64645 4.64645C3.55268 4.74021 3.5 4.86739 3.5 5C3.5 5.13261 3.55268 5.25979 3.64645 5.35355C3.74021 5.44732 3.86739 5.5 4 5.5H4.5C4.63261 5.5 4.75979 5.44732 4.85355 5.35355C4.94732 5.25979 5 5.13261 5 5C5 4.86739 4.94732 4.74021 4.85355 4.64645C4.75979 4.55268 4.63261 4.5 4.5 4.5H4ZM6.5 10.5H3C2.86739 10.5 2.74021 10.4473 2.64645 10.3536C2.55268 10.2598 2.5 10.1326 2.5 10V3C2.5 2.86739 2.55268 2.74021 2.64645 2.64645C2.74021 2.55268 2.86739 2.5 3 2.5H5.5V4C5.5 4.39782 5.65804 4.77936 5.93934 5.06066C6.22064 5.34196 6.60218 5.5 7 5.5H8.5V6.5C8.5 6.63261 8.55268 6.75979 8.64645 6.85355C8.74021 6.94732 8.86739 7 9 7C9.13261 7 9.25979 6.94732 9.35355 6.85355C9.44732 6.75979 9.5 6.63261 9.5 6.5V5C9.5 5 9.5 5 9.5 4.97C9.49479 4.92407 9.48474 4.87882 9.47 4.835V4.79C9.44596 4.73859 9.41389 4.69133 9.375 4.65L6.375 1.65C6.33367 1.61111 6.28641 1.57904 6.235 1.555C6.21846 1.5521 6.20154 1.5521 6.185 1.555C6.13638 1.529 6.08413 1.51046 6.03 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V10C1.5 10.3978 1.65804 10.7794 1.93934 11.0607C2.22064 11.342 2.60218 11.5 3 11.5H6.5C6.63261 11.5 6.75979 11.4473 6.85355 11.3536C6.94732 11.2598 7 11.1326 7 11C7 10.8674 6.94732 10.7402 6.85355 10.6464C6.75979 10.5527 6.63261 10.5 6.5 10.5ZM6.5 3.205L7.795 4.5H7C6.86739 4.5 6.74021 4.44732 6.64645 4.35355C6.55268 4.25979 6.5 4.13261 6.5 4V3.205ZM7 6.5H4C3.86739 6.5 3.74021 6.55268 3.64645 6.64645C3.55268 6.74021 3.5 6.86739 3.5 7C3.5 7.13261 3.55268 7.25979 3.64645 7.35355C3.74021 7.44732 3.86739 7.5 4 7.5H7C7.13261 7.5 7.25979 7.44732 7.35355 7.35355C7.44732 7.25979 7.5 7.13261 7.5 7C7.5 6.86739 7.44732 6.74021 7.35355 6.64645C7.25979 6.55268 7.13261 6.5 7 6.5ZM10.355 9.645C10.3085 9.59814 10.2532 9.56094 10.1923 9.53555C10.1314 9.51017 10.066 9.4971 10 9.4971C9.93399 9.4971 9.86864 9.51017 9.80771 9.53555C9.74678 9.56094 9.69148 9.59814 9.645 9.645L9.5 9.795V8.5C9.5 8.36739 9.44732 8.24021 9.35355 8.14645C9.25979 8.05268 9.13261 8 9 8C8.86739 8 8.74021 8.05268 8.64645 8.14645C8.55268 8.24021 8.5 8.36739 8.5 8.5V9.795L8.355 9.645C8.26085 9.55085 8.13315 9.49795 8 9.49795C7.86685 9.49795 7.73915 9.55085 7.645 9.645C7.55085 9.73915 7.49795 9.86685 7.49795 10C7.49795 10.1332 7.55085 10.2608 7.645 10.355L8.645 11.355C8.69255 11.4005 8.74862 11.4362 8.81 11.46C8.86985 11.4865 8.93456 11.5001 9 11.5001C9.06544 11.5001 9.13015 11.4865 9.19 11.46C9.25138 11.4362 9.30745 11.4005 9.355 11.355L10.355 10.355C10.4019 10.3085 10.4391 10.2532 10.4644 10.1923C10.4898 10.1314 10.5029 10.066 10.5029 10C10.5029 9.93399 10.4898 9.86864 10.4644 9.80771C10.4391 9.74678 10.4019 9.69148 10.355 9.645ZM6 9.5C6.13261 9.5 6.25979 9.44732 6.35355 9.35355C6.44732 9.25979 6.5 9.13261 6.5 9C6.5 8.86739 6.44732 8.74021 6.35355 8.64645C6.25979 8.55268 6.13261 8.5 6 8.5H4C3.86739 8.5 3.74021 8.55268 3.64645 8.64645C3.55268 8.74021 3.5 8.86739 3.5 9C3.5 9.13261 3.55268 9.25979 3.64645 9.35355C3.74021 9.44732 3.86739 9.5 4 9.5H6Z"
                  className="fill-white dark:fill-black delay-500 transition-all ease-linear"
                />
              </svg>
            </Button>
          </div>
          <div className="min-w-96 max-w-[10rem] gap-3">
            <span className="text-2xl font-bold">Also reach me out on</span>
            <div className="flex justify-start gap-2 items-center ms-8">
              <Facebook />
              <Github />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
