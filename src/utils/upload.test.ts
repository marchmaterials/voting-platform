import { checkImageDimensions } from "./upload";

type MockFile = File & { _mockWidth: number; _mockHeight: number };
type MockWindow = Window & { _mockWidth: number; _mockHeight: number };
type MockHTMLElement = HTMLElement & {
  src: string;
  width: number;
  height: number;
};

function createMockFile(width: number, height: number): File {
  const file = new File(["fake-url"], "test.png", {
    type: "image/png",
  }) as MockFile;
  file._mockWidth = width;
  file._mockHeight = height;
  return file;
}

describe("checkImageDimensions", () => {
  let originalCreateElement: typeof document.createElement;

  beforeAll(() => {
    // Mock document.createElement to control image width/height
    originalCreateElement = document.createElement;
    document.createElement = (tag: string): MockHTMLElement => {
      if (tag === "img") {
        return {
          set src(_url: string) {},
          addEventListener: (event: string, listener: (ev: Event) => void) => {
            if (event === "load") {
              setTimeout(() => listener(new Event("load")), 0); // simulate async load
            }
          },
          get width() {
            return (window as unknown as MockWindow)._mockWidth || 1;
          },
          get height() {
            return (window as unknown as MockWindow)._mockHeight || 1;
          },
        } as unknown as MockHTMLElement;
      }
      return originalCreateElement.call(
        document,
        tag
      ) as unknown as MockHTMLElement;
    };
  });

  afterAll(() => {
    document.createElement = originalCreateElement;
  });

  it("returns true when file is less than 25mp", async () => {
    const file = createMockFile(4000, 4000);
    window._mockWidth = 4000;
    window._mockHeight = 4000;
    await expect(checkImageDimensions(file)).resolves.toBe(true);
  });

  it("returns false when file is greater than 25mp", async () => {
    const file = createMockFile(6000, 5000);
    window._mockWidth = 6000;
    window._mockHeight = 5000;
    await expect(checkImageDimensions(file)).resolves.toBe(false);
  });
});
