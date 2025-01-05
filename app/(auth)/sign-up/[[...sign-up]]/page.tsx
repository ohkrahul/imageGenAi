// // import { SignUp } from "@clerk/nextjs"

// // export default function SignUpPage() {
// //   return (
// //     <div className="flex min-h-screen items-center justify-center">
// //       <SignUp 
// //         appearance={{
// //           variables: { colorPrimary: '#624cf5' },
// //           elements: {
// //             formButtonPrimary: 'bg-primary hover:bg-primary-600',
// //             rootBox: "mx-auto",
// //             card: "shadow-lg"
// //           }
// //         }}
// //       />
// //     </div>
// //   )
// // }

// import { SignUp } from "@clerk/nextjs";

// export default function SignUpPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <SignUp 
//         appearance={{
//           variables: { colorPrimary: '#624cf5' },
//           elements: {
//             formButtonPrimary: 'bg-primary hover:bg-primary-600',
//             rootBox: "mx-auto",
//             card: "shadow-lg"
//           }
//         }}
//       />
//     </div>
//   );
// }
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp />
}

export default SignUpPage