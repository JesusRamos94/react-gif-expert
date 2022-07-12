import { getGifs } from "../src/helpers/getGifs";

describe("getGifs function", () => {
  it("should return an array of gifs", async () => {
    const gifs = await getGifs("one Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.anything(String),
      title: expect.anything(String),
      url: expect.anything(String),
    });
  });
});
