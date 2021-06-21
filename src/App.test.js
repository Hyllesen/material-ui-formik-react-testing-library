import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Sign up component", () => {
  let signUpBtn,
    firstName,
    lastName,
    emailAddress,
    password,
    acceptTerms,
    alreadyAccountLink;

  beforeEach(() => {
    render(<App />);
    const signUpElements = screen.getAllByText(/sign up/i);
    signUpBtn = signUpElements[1];
    firstName = screen.getByText("First Name");
    lastName = screen.getByText("Last Name");
    emailAddress = screen.getByText("Email Address");
    password = screen.getByText("Password");
    acceptTerms = screen.getByText("I accept the terms and conditions");
    alreadyAccountLink = screen.getByText("Already have an account? Sign in");
  });

  test("Fill out form and submit", () => {
    userEvent.type(firstName, "Stefan");
    userEvent.type(lastName, "Hyltoft");
    userEvent.type(emailAddress, "stefanhyltoft@gmail.com");
    userEvent.type(password, "myPassw0rt");
    userEvent.click(acceptTerms);
    userEvent.click(signUpBtn);

    const confirmation = screen.getByText(
      "Thanks for signing up! Please check your email for activation link."
    );
  });
});
