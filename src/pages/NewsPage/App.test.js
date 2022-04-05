import { render, screen } from "@testing-library/react";
import AddNews from "../../components/News/index";

test("renders learn react link", () => {
  render(<AddNews />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
