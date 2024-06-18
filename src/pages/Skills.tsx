import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import data from "@/json/Skills.json";

type datatype = {
  name: string;
  logo: string;
};

export default function Skills() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-2xl font-bold">My Skills & Experiences</span>
      </div>
      <Tabs defaultValue="skills">
        <div className="w-full grid justify-center">
          <TabsList>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="certifications">Certificates</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="skills">
          <div className="w-full h-[40rem] grid grid-cols-2">
            <div className="grid place-content-center gap-4">
              <p className="text-center text-lg font-bold">
                FrontEnd Technologies
              </p>
              <div className="max-w-80 grid grid-cols-5 place-content-center gap-5">
                {data.frontend.map((item: datatype, index: number) => (
                  <div key={index}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid place-content-center gap-4">
              <p className="text-center text-lg font-bold">
                FrontEnd Technologies
              </p>
              <div className="max-w-80 grid grid-cols-5 place-content-center gap-5">
                {data.frontend.map((item: datatype, index: number) => (
                  <div key={index}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid place-content-center gap-4">
              <p className="text-center text-lg font-bold">Graphics</p>
              <div className="max-w-80 grid grid-cols-5 place-content-center gap-5">
                {data.Graphics.map((item: datatype, index: number) => (
                  <div key={index}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid place-content-center gap-4">
              <p className="text-center text-lg font-bold">Frameworks</p>
              <div className="max-w-80 grid grid-cols-5 place-content-center gap-5">
                {data.Frameworks.map((item: datatype, index: number) => (
                  <div key={index}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="experience"></TabsContent>
        <TabsContent value="certifications">
          <TooltipProvider>
            <div className="w-full h-[40rem] grid grid-cols-3 place-content-center gap-6">
              {[
                {
                  title: "Html",
                  url: "https://drive.google.com/file/d/1zFEutteHSyVEDxHIzMdTTDoMWLY3jI2u/view?usp=drive_link",
                  issuedBy: "LinkedIn",
                },
                {
                  title: "Css",
                  url: "https://drive.google.com/file/d/1D2N7qmMfvx-Zt9xQyBD1YdfOaB5uQdrK/view?usp=drive_link",
                  issuedBy: "LinkedIn",
                },
                {
                  title: "Javascript",
                  url: "https://drive.google.com/file/d/1WzC9PfQv1mkfi-D3qR4Fa-x52P14vNpr/view?usp=drive_link",
                  issuedBy: "LinkedIn",
                },
                {
                  title: "Javascript",
                  url: "https://drive.google.com/file/d/1SZtVDRRvoeSWUo4oSJDd2zTNyUYwfkeB/view?usp=drive_link",
                  issuedBy: "Let's Upgrade",
                },
                {
                  title: "React",
                  url: "https://drive.google.com/file/d/1_HXQSCzNEkF-uo5hOKFL1C-gS1lyYis_/view?usp=drive_link",
                  issuedBy: "LinkedIn",
                },
                {
                  title: "AWS Cloud Practitioner",
                  url: "https://drive.google.com/file/d/1kcTryZlT4gkcdXnYi1UZTEsPuoqAzJ6u/view?usp=drive_link",
                  issuedBy: "AWS",
                },
              ].map((item, index: number) => (
                <div
                  key={index}
                  className="w-full h-full grid place-content-center text-center"
                >
                  <img
                    src="/certificate.svg"
                    width={200}
                    height={200}
                    alt={`${item.title} certificate`}
                    className="w-80 object-contain aspect-video"
                  />
                  <div className="flex justify-center gap-2 items-center">
                    <span className="text-lg font-bold">{item.title}</span>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                      >
                        <path
                          d="M10 17.55L8.23002 19.27C7.76589 19.7341 7.1364 19.9949 6.48002 19.9949C5.82364 19.9949 5.19415 19.7341 4.73002 19.27C4.26589 18.8059 4.00515 18.1764 4.00515 17.52C4.00515 16.8636 4.26589 16.2341 4.73002 15.77L9.27002 11.22C9.71563 10.7729 10.316 10.5143 10.947 10.4975C11.578 10.4808 12.1913 10.7072 12.66 11.13L12.78 11.23C12.9696 11.4157 13.2253 11.5184 13.4906 11.5156C13.756 11.5127 14.0094 11.4046 14.195 11.215C14.3807 11.0254 14.4834 10.7698 14.4806 10.5044C14.4778 10.239 14.3697 9.98565 14.18 9.8C14.1236 9.72703 14.0635 9.65694 14 9.59C13.1464 8.84732 12.0424 8.45685 10.9116 8.4977C9.78082 8.53855 8.70785 9.00766 7.91002 9.81L3.31002 14.36C2.52838 15.2108 2.10564 16.3307 2.13009 17.4858C2.15455 18.6408 2.6243 19.7418 3.44125 20.5588C4.2582 21.3757 5.35918 21.8455 6.51427 21.8699C7.66935 21.8944 8.78923 21.4716 9.64002 20.69L11.37 19C11.5408 18.8137 11.6347 18.5695 11.6328 18.3167C11.6309 18.064 11.5333 17.8213 11.3597 17.6375C11.1861 17.4538 10.9494 17.3426 10.6971 17.3264C10.4448 17.3101 10.1958 17.39 10 17.55V17.55ZM20.69 3.31C19.8488 2.47401 18.711 2.00479 17.525 2.00479C16.339 2.00479 15.2012 2.47401 14.36 3.31L12.63 5C12.4592 5.18635 12.3653 5.43048 12.3672 5.68327C12.3691 5.93606 12.4667 6.17874 12.6403 6.36249C12.8139 6.54624 13.0507 6.65742 13.303 6.67365C13.5552 6.68989 13.8043 6.60998 14 6.45L15.73 4.73C16.1941 4.26587 16.8236 4.00513 17.48 4.00513C18.1364 4.00513 18.7659 4.26587 19.23 4.73C19.6941 5.19413 19.9549 5.82363 19.9549 6.48C19.9549 7.13638 19.6941 7.76587 19.23 8.23L14.69 12.78C14.2444 13.2271 13.644 13.4857 13.013 13.5025C12.382 13.5192 11.7687 13.2928 11.3 12.87L11.18 12.77C10.9904 12.5844 10.7348 12.4816 10.4694 12.4844C10.204 12.4873 9.95067 12.5954 9.76502 12.785C9.57937 12.9746 9.47665 13.2302 9.47946 13.4956C9.48228 13.761 9.59039 14.0144 9.78002 14.2C9.85266 14.2743 9.92945 14.3444 10.01 14.41C10.8647 15.1505 11.9682 15.5395 13.0983 15.4986C14.2284 15.4578 15.301 14.9902 16.1 14.19L20.65 9.64C21.4913 8.80408 21.9678 7.66923 21.9753 6.48325C21.9828 5.29727 21.5207 4.15649 20.69 3.31V3.31Z"
                          className="fill-black dark:fill-white transition-all delay-1000"
                        />
                      </svg>
                    </a>
                    <Tooltip>
                      <TooltipTrigger>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                        >
                          <path
                            d="M12 14C11.7348 14 11.4804 14.1054 11.2929 14.2929C11.1054 14.4804 11 14.7348 11 15V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V15C13 14.7348 12.8946 14.4804 12.7071 14.2929C12.5196 14.1054 12.2652 14 12 14ZM12.38 11.08C12.199 10.9961 11.997 10.9682 11.8 11L11.62 11.06L11.44 11.15L11.29 11.27C11.1949 11.3658 11.1202 11.4799 11.0703 11.6053C11.0205 11.7308 10.9966 11.865 11 12C10.9992 12.1316 11.0245 12.2621 11.0742 12.3839C11.124 12.5057 11.1973 12.6166 11.29 12.71C11.3851 12.801 11.4972 12.8724 11.62 12.92C11.7387 12.976 11.8688 13.0034 12 13C12.1316 13.0008 12.2621 12.9755 12.3839 12.9258C12.5057 12.876 12.6166 12.8027 12.71 12.71C12.8027 12.6166 12.876 12.5057 12.9258 12.3839C12.9755 12.2621 13.0008 12.1316 13 12C13.0008 11.8684 12.9755 11.7379 12.9258 11.6161C12.876 11.4943 12.8027 11.3834 12.71 11.29C12.6128 11.2017 12.5012 11.1306 12.38 11.08ZM20 8.94C19.9896 8.84813 19.9695 8.75763 19.94 8.67V8.58C19.8919 8.47718 19.8278 8.38267 19.75 8.3V8.3L13.75 2.3C13.6673 2.22222 13.5728 2.15808 13.47 2.11H13.37C13.2728 2.058 13.1683 2.02092 13.06 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V9C20 9 20 9 20 8.94ZM14 5.41L16.59 8H15C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7V5.41ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H12V7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10H18V19Z"
                            className="fill-black dark:fill-white transition-all delay-1000"
                          />
                        </svg>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        align="end"
                        className="max-w-72"
                      >
                        <div className="grid grid-cols-2 text-start gap-3">
                          <span>Certificate Name :</span>
                          <span>{item.title}</span>
                          <span>Issued By :</span>
                          <span>{item.issuedBy}</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </TabsContent>
      </Tabs>
    </div>
  );
}
