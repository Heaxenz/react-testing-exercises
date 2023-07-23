import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

});


it('should render the Carousel component with cards ', () => {
  render(<Carousel photos={TEST_IMAGES} title="hello" />)
})

it('should match snapshot', () => {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES}/>)
  expect(asFragment()).toMatchSnapshot();
})



// left arrow works
it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // expect the first image to show when the 
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});


it('should be missing the left arrow when the first image is showing', () => {
  const { container } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
    />
  );
  expect.querySelector('img[alt="testing image 1"]').toBeInTheDocument();
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();
})


it('should be missing the right arrow when the last image is showing', () => {
  const { container } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
    />
  );
  expect.querySelector('img[alt="testing image 3"]').toBeInTheDocument();
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  expect(rightArrow).not.toBeInTheDocument();
})
