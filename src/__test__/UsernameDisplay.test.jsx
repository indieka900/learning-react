import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../component/usernameDisplay";

describe('UsernameDisplay', () => {
    it('Should render username', () => {
        const result = render(<UsernameDisplay username="Joseph I"/>);
        //expect(result.container).toMatchSnapshot();
        screen.getByText(/joseph/)
    });
});