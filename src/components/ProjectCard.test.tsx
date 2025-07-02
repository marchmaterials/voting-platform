import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import { generateProject } from "@/tests/generators";
import { Project } from "@prisma/client";
import { ProjectMaterials, Images } from "@/types/dashboard";

const mockProject = {
  id: "1",
  title: "Test Project",
  images: [{ url: "/test1.jpg" }, { url: "/test2.jpg" }],
  projectMaterial: [],
};

jest.mock("./Lightbox", () => ({
  //   __esModule: true,
  //   default: (props: any) => (
  //     <div data-testid="lightbox" data-open={props.open}>
  //       Lightbox {props.open ? "open" : "closed"}
  //     </div>
  //   ),
}));

describe("ProjectCard", () => {
  let project: Project & Images & ProjectMaterials;

  beforeEach(() => {
    project = generateProject();
  });

  it("renders the project title", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByTestId()).toBeInTheDocument();
  });

  it("renders the first project image", () => {
    render(<ProjectCard project={mockProject as any} />);
    expect(
      screen.getByAltText(/image of architectural project titled/i)
    ).toBeInTheDocument();
  });

  it("does not open the lightbox if there are no images", () => {
    const projectNoImages = { ...mockProject, images: [] };
    render(<ProjectCard project={projectNoImages as any} />);
    fireEvent.click(screen.getByText("Test Project"));
    expect(screen.getByTestId("lightbox")).toHaveAttribute(
      "data-open",
      "false"
    );
  });

  it("opens the lightbox when the card is clicked and images exist", () => {
    render(<ProjectCard project={mockProject as any} />);
    fireEvent.click(screen.getByText("Test Project"));
    expect(screen.getByTestId("lightbox")).toHaveAttribute("data-open", "true");
  });
});
