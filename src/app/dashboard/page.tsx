import prisma from "@/lib/prisma";
import { Card, CardBody } from "@heroui/card";

export default async function Page() {
  const getProjects = async () => {
    try {
      console.log("trying to fetch");
      return await prisma.project.findMany({
        include: { images: true },
      });
    } catch (err) {
      console.log("error getting projects", err);
      if (err instanceof Error) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
      } else {
        console.error(err);
      }
      throw err;
    }
  };

  const projects = await getProjects();
  return (
    <div className="m-2">
      <h2>All Projects</h2>
      <div className="flex flex-row m-4">
        {projects.map((p) => (
          <Card
            key={p.id}
            className="max-w-md"
            isHoverable
            isPressable
            radius="lg"
            shadow="md"
          >
            <CardBody>
              <h2>{p.title}</h2>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
