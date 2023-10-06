
import { fireEvent, getByTestId, render , screen, waitFor } from "@testing-library/react";
import { Await, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import userEvent from "@testing-library/user-event";
import { LoginCredientials } from "./LoginCredientials";
import { validate } from "@material-ui/pickers";
import { Button, Grid, TextField } from "@mui/material";
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Login.css';

import * as React from 'react';
// describe('login check',()=>{
// test('render login page',()=>{
//    render(<Login/>);
//    const helloworldCheck= screen.getByText(/Hello There!/i);
//    expect(helloworldCheck).toBeInTheDocument();


// }) 
// test('render pet',()=>{
//     render(<Login/>);
//     const petCheck= screen.getByText(/Pet/);
//     expect(petCheck).toBeInTheDocument();
// }) 
// test('render sale',()=>{
//     render(<Login/>);
//     const saleCheck= screen.getByText(/Sales/);
//     expect(saleCheck).toBeInTheDocument();
// }) 
// test('Checked rendering  or not',()=>{
//     render(<Login />)
//     const mockUseNavigate = jest.fn();
//     jest.requireActual('react-router-dom'),
//     useNavigate()=>mockUseNavigate,
// })

// // test('render Welcome back dear friend',()=>{
// //     render(<Login/>);
// //     const welcomeCheck= screen.getByText(/Welcome back dear friend! Please login and enjoy our services/);
// //     expect(welcomeCheck).toBeInTheDocument();
// // })

// })

const mockNavigate = jest.fn();

jest.mock("react-router-dom",()=>({
    ...(jest.requireActual("react-router-dom") ),
    useNavigate:()=>mockNavigate
}))
describe("Login",()=>{

test('render login page',()=>{
   render(<Login/>);
  
   const helloworldCheck= screen.getByText(/Hello There!/i);
   expect(helloworldCheck).toBeInTheDocument();
});

test('render pet',()=>{
    render(<Login/>);
    const petCheck= screen.getByText(/Pet/);
    expect(petCheck).toBeInTheDocument();
});

test('render Username',()=>{
    render(<Login/>);
    const usernameCheck= screen.getByText(/User Name/i);
    expect(usernameCheck).toBeInTheDocument();
 });
 test('render Password',()=>{
    render(<Login/>);
    const passwordCheck= screen.getByText(/Password/);
    expect(passwordCheck).toBeInTheDocument();
 });

test('render checkbox',()=>{
    render(<Login/>);

    const checkboxCheck = screen.getByText(/Remember Me/);
    
    expect(checkboxCheck).toBeInTheDocument();
})
test('render forgotpassword',()=>{
    render(<Login/>);
    const forgotPassword= screen.getByText(/Forgot password?/)
    expect(forgotPassword).toBeInTheDocument();
})

test('render pet',()=>{
    render(<Login/>);
    const SalesCheck= screen.getByText(/Sales/);
    expect(SalesCheck).toBeInTheDocument();
});
// test('render pass the valid username',()=>{
//     render(<Login/>);
//     const testEmail ="admin@gmail.com"
//     expect(Validity(testEmail)).not.toBe(true)
// });
// test('render username textfield ',()=>{
//     render(<Login/>);
//     const name= screen.getByTestId('user-name');
//     fireEvent.change(name,{target:{value:'admin@gmail.com'}});
//     expect(name.value).toBe("admin@gmail.com")
// })
// test('error msg on username',()=>{
//     render(<Login />);
//     const  name= screen.getByPlaceholderText('username');
//     const errMsg = screen.getByTestId("username_errmsg");
//     fireEvent.change(name,{target:{value:'admin@gmail.com'}});
//     expect(errMsg.textContent).toEqual('')
// })

// test('validating input length', () => {
//     const { getByRole } = render(<TextField />);
//     const input = getByRole('textbox');
  
//     fireEvent.change(input, { target: { value: 'Admin@123' } });
//     expect(input.value).toBe('');
//     expect(input.value.length).toBeLessThanOrEqual(9);
//   });

// test('validating password',()=>{
//     render(<Login/>);
//     const { getByRole } = render(<TextField />);
//     const  passwordChecking= getByRole('textbox');
//     fireEvent.change(passwordChecking,{target : {value:''}});
//     expect(passwordChecking.value).toBe('Admin@123');
// })

test('should update input values on change', () => {
    const { getByRole } = render(
      <div>
        <TextField label="username" />
        <TextField label="password" />
      </div>
    );

    const usernameInput = getByRole('textbox', { name: 'username' });
    const passwordInput = getByRole('textbox', { name: 'password' });

    fireEvent.change(usernameInput, { target: { value: 'admin@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Admin@123' } });

    expect(usernameInput.value).toBe('admin@gmail.com');
    expect(passwordInput.value).toBe('Admin@123');
  });
  
   // COMMENDED FOR ERROR CHECKING IN VALIDATION >>>> NEGATIVE FLOW

//   test('displays error message on invalid input', () => {
// render(<TextField pattern="\d+" />);
//     const textField = screen.getByRole('textbox');
//     fireEvent.change(textField, { target: { value: 'abc' } });
//     const error = screen.getByText('Invalid input');
//     expect(error).toBeInTheDocument();
//   });


// test('navigates to the home page', async () => {
//     // Mock the necessary objects and functions
//     const mockHistoryPush = jest.fn();
//     const mockLocation = { pathname: '/' };
//     const mockHistory = { push: mockHistoryPush, location: mockLocation };
//     const mockEvent = { preventDefault: jest.fn() };
  
//     // Call the navigation function
//     await mockNavigate(mockEvent, mockHistory);
  
//     // Assert that the necessary functions were called with the correct arguments
//     // expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
//     expect(mockHistoryPush).toHaveBeenCalledWith('/');
//   });



const mockNavigate = jest.fn();
// jest.spyOn(ReactDOM, 'useHistory').mockReturnValue(mockHistory);
test('navigates to the home page', async () => {
  // Mock the necessary objects and functions
 
  const mockHistoryPush = jest.fn();
  const mockLocation = { pathname: '/' };
  const mockHistory = { push: mockHistoryPush, location: mockLocation };
  const mockEvent = { preventDefault: jest.fn() };

  // Render the component and pass the mockNavigate function as a prop
  const { getByRole }=
  render(
    <div>
        <MemoryRouter>
       <TextField label="username" />
        <TextField label="password" />
    
  <Button onClick={mockNavigate} />
  </MemoryRouter>
  </div>);
  const usernameInput = screen.getByRole('textbox', { name: 'username' });
  const passwordInput =screen.getByRole('textbox', { name: 'password' });
const buttonInput = screen.getByRole('button')
  fireEvent.change(usernameInput, { target: { value: 'admin@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Admin@123' } });
  fireEvent.click(buttonInput);

 expect(usernameInput.value).toBe('admin@gmail.com');
  expect(passwordInput.value).toBe('Admin@123');
  console.log("mockHistoryPush",mockHistoryPush);
// expect(mockHistoryPush).toHaveCalledWith(expect.stringContaining("name"));
// expect(mockHistoryPush).toHaveBeenCalledWith("name");
});


// test('checks background image of the class', async () => {
//   const { container } = render(<Login/>);

//   const element = container.querySelector('.img-container'); 
//  await waitFor(()=>{
//   const imageCheck = window.getComputedStyle(element).getPropertyValue('background-image');
//   expect(imageCheck).toContain("url(./login_bg2.png)");
//  }); 

//  test("test on background image ",()=>{
//   render(<Login/>)
//   const backgroundImageCheck = screen.getByTestId('background');
//   expect(backgroundImageCheck).toContain("url('login_bg2.png')")
//  })

// test('Should attach background color if user', () => { 
// render(<Grid  data- 
//  testid="background"/>);
// //or can fetch the specific element from the component 
// const profile = screen.getByTestId('background');

// const profilePicElem = document.getElementsByClassName(
//   profile.className,
// );
// const style = window.getComputedStyle(profilePicElem[0]);

// //Assertion 
// expect(style.backgroundColor).toBe('Login_bg1.png');
// expect(getByTestId('background').style.backgroundImage).toEqual(`url(${props.Login_bg1.png})`)
// expect(getByTestId('background')).toHaveAttribute('style',`background-image: url(Login_bg1.png)`)
// });


// test('setting up background image',()=>{
//   render(<Grid data- 
//       testid="background" >
// </Grid>)
// const backgroundImage = screen.getByTestId('background')
// const profileElement= document.getElementsByClassName(backgroundImage.className)
// const style= window.getComputedStyle(profileElement[0]);
// expect(style.backgroundImage).toBe("url(Login_bg1.png");
// expect(getByTestId)
// })





















// // test('error msg on password',()=>{
// //     render(<Login />);
// //     const  name= screen.getByName('password');
// //     const errMsg = screen.getByTestId("password_errmsg");
// //     fireEvent.change(name,{target:{value:'Admin@123'}});
// //     expect(errMsg.textContent).toEqual('')
// // })

//     // test('error msg on password',()=>{
//     //     render(
//     //         <TextField variant="filled" 
//     //         className='input-username'
//     //         type="password"
//     //         name="password"
//     //         placeholder="password"
//     //         value={''}
//     // onChange={handleChange}
//     //         />
//     //     )
//     //     const passwordInput = screen.getByTestId('password');
//     //     fireEvent.change(passwordInput, { target: { value: 'Admin@123' } });
//     //     expect(handleChange).toHaveBeenCalledTimes(1);
//     //     expect(handleChange).toHaveBeenCalledWith(
//     //       expect.objectContaining({ target: { value: '' } })
//     //     );
//     // })


//     // it("has  a button and not navigate",async()=>{
//     //     render(
//     //         <BrowserRouter>
//     //         <Login/>
//     //         </BrowserRouter>
//     //     );
//     //     expect(screen.findByTitle("LOGIN")).toBe();
//     //     await userEvent.click(screen.getByText("LOGIN"));
//     //     expect(mockNavigate).toHaveBeenCalledWith('/home');
//     // })








// test('checks background image of the class', () => {
//   const backgroundImage = 'url("login_bg2.png")'; // Set the expected background image value
//   const getComputedStyleMock = jest.fn().mockReturnValue({
//     backgroundImage,
//   });
//   window.getComputedStyle = getComputedStyleMock;

//   const { container } = render(<Login />);

//   const element = container.querySelector('.img-container');

//   expect(element).toBeInTheDocument();
//   expect(getComputedStyleMock).toHaveCalledWith(element);
//   expect(getComputedStyleMock.mock.calls.length).toBe(1);
//   expect(getComputedStyleMock).toHaveReturnedWith({
//     backgroundImage,
//   });
// });

});  
