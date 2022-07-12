import { render, screen } from '@testing-library/react';
import { GifGrid } from '../src/components/GifGrid';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs');
describe('GifGrid function', () => {
  const category = 'One Puch';

  it('should show loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  it('should display items when images are loaded useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saimata.jpg',
      },
      {
        id: '123',
        title: 'goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
