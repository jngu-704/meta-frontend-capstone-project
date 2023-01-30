import { render, screen } from "@testing-library/react";
import Main from './Main';

test('updateTimes and initializeTimes functions', () => {
    render(<Main />);
    const headingElement = screen.getby
    expect(headingElement).toBeInTheDocument();
})