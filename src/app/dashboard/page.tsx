import prisma from "@/lib/prisma";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import {
  Project,
  Image as PrismaImage,
} from "../../../prisma/generated/client";

export default async function Page() {
  type ProjectsWithImages = Project & {
    images: Array<PrismaImage>;
  };
  const getProjects = async (): Promise<Array<ProjectsWithImages>> => {
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
      <div className="flex flex-row m-4 flex-wrap">
        {projects &&
          projects.map((p) => (
            <Card
              key={p.id}
              className="max-w-md m-4"
              isHoverable
              isPressable
              radius="lg"
              shadow="md"
            >
              <CardHeader>
                <h2>{p.title}</h2>
              </CardHeader>
              <CardBody>
                {Boolean(p.images.length) && (
                  <Image
                    src={p.images[0].url}
                    alt={`image of architectural project titled ${p.title}`}
                    width={400}
                  />
                )}
              </CardBody>
            </Card>
          ))}
      </div>
    </div>
  );
}
