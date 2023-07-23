import { render } from "@testing-library/react";
import Card from "./Card";

it('renders the Card component', () => {
    render(<Card />)
})

it('Should create a card with the given parameters', () => {
    const {asFragment} = render(<Card caption='Hello' src="http://localhost:3000/static/media/image1.08e1519e765278b10548.jpg"/>)
    expect(asFragment()).toMatchSnapshot();
})