import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container h-screen flex items-center">
      <div className="w-full flex">
        <div className="flex-1"></div>
        <div className="flex-1 px-6 space-y-3">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">Get in touch</h1>
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
          <form action="" className="w-full grid gap-2">
            <Input type="text" placeholder="Email" className="ring-2" />
            <Input type="text" placeholder="Subject" className="ring-2" />
            <Textarea placeholder="Your Message" rows={10} className="ring-2" />
            <Button className="text-base font-normal py-5">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
