import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen container flex items-center">
      <div className="flex justify-between">
        <div className="relative flex-1 space-y-6">
          <div className="flex gap-4 text-5xl font-black">
            <p className="first-letter:text-blue-600">I&apos;m</p>
            <p className="text-blue-600">Shreyansh</p>
            <p>Awadhiya</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              cupiditate ipsam consequatur dicta voluptas quisquam possimus
              nobis error vitae. Eos illum cupiditate facilis ratione assumenda
              nobis consectetur id, commodi animi veniam deserunt? Et odio quis
              tenetur laudantium iure quas debitis.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {[
              "/html5.svg",
              "/css3.svg",
              "/js.svg",
              "/nodejs.svg",
              "/reactjs.svg",
              "/nextjs2.svg",
            ].map((item: string) => {
              return (
                <img
                  src={item}
                  alt={item}
                  width={100}
                  height={100}
                  className="size-10"
                />
              );
            })}
          </div>
          <div>
            <Button
              className="w-60 py-6 text-lg rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              style={{
                boxShadow:
                  "-4px 4px 4px 0px rgba(255, 255, 255, 0.15) inset, 2px 3px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Know More
            </Button>
          </div>
          <div className="absolute -right-16 -top-20">
            <img
              src="/lable.png"
              alt="img1"
              width={200}
              height={200}
              className="w-60"
            />
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
