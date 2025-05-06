import prisma from "@/lib/prisma";
import { Image, Prisma, Project } from "@prisma/client";
import { Card } from "@/ui/Card";

export default async function Page() {
  // type ProjectWithImages = Prisma.PromiseReturnType<typeof getProjects>;
  type ProjectWithImages = Project & {
    images: Array<Image>;
  };
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

  console.log("FINDMANY projects !");
  const projects: ProjectWithImages[] = await getProjects();
  console.log("PROJECTS ??", projects);
  return (
    <div>
      <h2>Dashboard page</h2>
      <div>
        {projects.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
