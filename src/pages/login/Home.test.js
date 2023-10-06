// import { fireEvent, render , screen, waitFor } from "@testing-library/react";
// import {Home} from './Home' ;
// import { Navbar } from "./Navbar";




// const mockNavigate = jest.fn();

// jest.mock("react-router-dom",()=>({
//     ...(jest.requireActual("react-router-dom") ),
//     useNavigate:()=>mockNavigate
// }))

// describe("Home",()=>{



//     test('ChildComponent is rendered within ParentComponent', () => {
//         const { getByTestId } = render(
//         <Home>
//             <Navbar/>
//         </Home>
//           );
        
//          const childComponent = getByTestId('Navbar');

//         expect(childComponent).toBeInTheDocument();
//       });

//     // test('render child component',()=>{
//     //     render(<div>
//     //         <Navbar/>
//     //     </div>);
//     //     const childComponentCheck=screen.getByTestId('Navbar')
//     // })

//     //   test('renders Child component', () => {
//     //     const wrapper = shallow(<Home store={store} />);
//     //     expect(wrapper.find(Child).length).toEqual(1);
//     //    });
//     //  });


// // test("dashboard text check",()=>{
// //     render(<Home/>)
// //     const nameCheckDashboard = screen.getByText(/Dashboard/);
// //     expect(nameCheckDashboard).toBeInTheDocument()
// // });

// test("Pet sales text check",()=>{
//     render(<Home/>)
//     const nameCheckPetSales = screen.getByText(/Pet Sales/i);
//     expect(nameCheckPetSales).toBeInTheDocument();
// })
// test("settings text check",()=>{
//     render(<Home/>)
//     const nameCheckSettings = screen.getByText(/Settings/);
//     expect(nameCheckSettings).toBeInTheDocument();
// });
// test("chat text check",()=>{
//     render(<Home/>)
//     const nameCheckChat = screen.getByText(/Chat/i);
//     expect(nameCheckChat).toBeInTheDocument();
// })
// test('my profile text check',()=>{
//     render(<Home/>)
//     const nameCheckProfile= screen.getByText(/My Profile/i);
//     expect(nameCheckProfile).toBeInTheDocument();
// });
// test("notification text check",()=>{
//     render(<Home/>)
//     const nameCheckNotification = screen.getByText(/Notifications/i);
//     expect(nameCheckNotification).toBeInTheDocument();
// })





// })