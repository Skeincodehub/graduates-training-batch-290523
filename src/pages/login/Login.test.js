
// import { render , screen } from "@testing-library/react";
// import { Await, useNavigate } from "react-router-dom";
// import { Login } from "./Login";
// import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
// import { LoginCredientials } from "./LoginCredientials";

// // describe('login check',()=>{
// // test('render login page',()=>{
// //    render(<Login/>);
// //    const helloworldCheck= screen.getByText(/Hello There!/i);
// //    expect(helloworldCheck).toBeInTheDocument();


// // }) 
// // test('render pet',()=>{
// //     render(<Login/>);
// //     const petCheck= screen.getByText(/Pet/);
// //     expect(petCheck).toBeInTheDocument();
// // }) 
// // test('render sale',()=>{
// //     render(<Login/>);
// //     const saleCheck= screen.getByText(/Sales/);
// //     expect(saleCheck).toBeInTheDocument();
// // }) 
// // test('Checked rendering  or not',()=>{
// //     render(<Login />)
// //     const mockUseNavigate = jest.fn();
// //     jest.requireActual('react-router-dom'),
// //     useNavigate()=>mockUseNavigate,
// // })

// // // test('render Welcome back dear friend',()=>{
// // //     render(<Login/>);
// // //     const welcomeCheck= screen.getByText(/Welcome back dear friend! Please login and enjoy our services/);
// // //     expect(welcomeCheck).toBeInTheDocument();
// // // })

// // })


// const mockNavigate = jest.fn();

// jest.mock("react-router-dom",()=>({
//     ...(jest.requireActual("react-router-dom") ),
//     useNavigate:()=>mockNavigate
// }))
// describe("Login",()=>{

// test('render login page',()=>{
//    render(<Login/>);
//    const helloworldCheck= screen.getByText(/Hello There!/i);
//    expect(helloworldCheck).toBeInTheDocument();
// });
// test('render pet',()=>{
//     render(<Login/>);
//     const petCheck= screen.getByText(/Pet/);
//     expect(petCheck).toBeInTheDocument();
// });
// test('render Welcome back dear friend',()=>{
//     render(<Login/>);
//     const welcomeCheck= screen.findByText(/Welcome back dear friend! Please login and enjoy our services/i);
//     expect(welcomeCheck).toBeVisible();
// });

//     it("has  a button and not navigate",async()=>{
//         render(
//             <BrowserRouter>
//             <Login/>
//             </BrowserRouter>
//         );
//         expect(
//             screen.getByText("LOGIN")
//         ).toBeInTheDocument();
//         await userEvent.click(screen.getByText("LOGIN"));
//         expect(mockNavigate).toHaveBeenCalledWith('/home');
//     })
// })
