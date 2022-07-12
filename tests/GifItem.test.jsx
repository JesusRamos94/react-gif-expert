import { render, screen } from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";

describe("GitItem function", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  it("must match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  it("it must show the image with the indicated url and alt", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole('img').src).toBe(url)
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  it("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy()
  });
});
