import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { UsernameDisplay } from "../component/usernameDisplay";

describe('UsernameDisplay', () => {
    it('Should render username', () => {
        const result = render(<UsernameDisplay/>);
        expect(result.container).toMatchSnapshot();
    });
});