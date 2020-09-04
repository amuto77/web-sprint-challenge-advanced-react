import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});


test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, queryByText } = render(<CheckoutForm />);
    
    const firstInput = getByLabelText(/first name/i);
    const lastInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);

    fireEvent.change(firstInput, {target:{value:"firstName"}});
    fireEvent.change(lastInput, {target:{value:"lastName"}});
    fireEvent.change(addressInput, {target:{value:"address"}});


    const submit = getByText(/checkout$/i);

    fireEvent.click(submit);

    expect(queryByText(/You have ordered some plants! Woo-hoo!/i)).toBeTruthy();
});