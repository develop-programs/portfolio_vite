import Cards from "@/components/custom/Cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  return (
    <div className="w-full text-center pt-24 space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="h-[46rem] overflow-y-auto">
        <Tabs defaultValue="frontend">
          <TabsList>
            <TabsTrigger value="frontend">FrontEnd</TabsTrigger>
            <TabsTrigger value="backend">BackEnd</TabsTrigger>
            <TabsTrigger value="graphics">Graphics</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <div className="w-full grid grid-cols-3 gap-6 py-3">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <Cards key={index} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="w-full grid grid-cols-3 gap-6 py-3">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <Cards key={index} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="graphics">
            <div className="w-full grid grid-cols-3 gap-6 py-3">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Cards key={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
