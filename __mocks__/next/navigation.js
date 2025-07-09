export const useRouter = () => ({ push: jest.fn() });
export const useSearchParams = () => ({
  get: (param) => {
    if (param === "email") return "fake-email@email.com";
    if (param === "project") return "A Project Title";
    return null;
  },
});
