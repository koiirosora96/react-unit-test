import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Greeting } from "./Greeting";

describe('Greeting component',() => {
    test("test rendering Hello World in text", () => {
        // Arange
        render(<Greeting />)
    
        // Act
        // ... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello, world!', { exact: true})
        expect(helloWorldElement).toBeInTheDocument();
    });
    
    test('when change text is true', () => {
        render(<Greeting/>)
    
        const changedTextTrue = screen.getByText("i'ts good to see you!")
        expect(changedTextTrue).toBeInTheDocument();
    })
    
    test('when change text is false', () => {
        //arrange
        render(<Greeting/>)
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //assert
        expect(screen.getByText('text changed')).toBeInTheDocument();
    })
})

