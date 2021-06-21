import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  test("Renders all fields", () => {
    render(<App />);
    const signUpElements = screen.getAllByText(/sign up/i);
    const signUpBtn = signUpElements[1];
    const firstName = screen.getByText("First Name");
    const lastName = screen.getByText("Last Name");
    const emailAddress = screen.getByText("Email Address");
    const password = screen.getByText("Password");
    const acceptTerms = screen.getByText("I accept the terms and conditions");
    const alreadyAccountLink = screen.getByText(
      "Already have an account? Sign in"
    );
  });
});
