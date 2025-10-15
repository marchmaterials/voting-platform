import "@testing-library/jest-dom";


if (typeof window !== "undefined") {
    // matchMedia (used by AntD breakpoints)
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),            // deprecated but AntD may call
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    // ResizeObserver (AntD Modal/Dialog uses it)
    class ResizeObserver {
        observe() { }
        unobserve() { }
        disconnect() { }
    }
    Object.defineProperty(window, "ResizeObserver", { value: ResizeObserver });
}