// import { SignIn } from "@clerk/nextjs"

// export default function SignInPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <SignIn 
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
//   )
// }
// import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <SignIn 
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

import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn />
}

export default SignInPage