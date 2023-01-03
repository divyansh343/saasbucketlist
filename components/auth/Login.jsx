import { signInWithPopup, getRedirectResult, GoogleAuthProvider, TwitterAuthProvider, signInWithRedirect } from 'firebase/auth';
import { isMobile } from 'react-device-detect';
import React, { useEffect } from 'react'
import { auth, provider, twitterProvider } from '../../firebase-config';
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const signInWithGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result;
        console.log(user)

        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });

    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        // The signed-in user info.
        const user = result;
        console.log(user)
      }).catch((error) => {
        console.log(error)
      });

    // router.push("/saas")

  };

  const signInWithGoogleMobile = () => {

    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result;
        console.log(user)

        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });




    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        // The signed-in user info.
        const user = result;
        console.log(user)
      }).catch((error) => {
        console.log(error)
      });

    // router.push("/saas")

  };

  // const signInWithTwitter = () => {
  //   signInWithPopup(auth, twitterProvider)
  //     .then((result) => {
  //       // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //       // You can use these server side with your app's credentials to access the Twitter API.
  //       const credential = TwitterAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const secret = credential.secret;

  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(user)
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = TwitterAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //       // You can use these server side with your app's credentials to access the Twitter API.
  //       const credential = TwitterAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const secret = credential.secret;
  //       // ...

  //       // The signed-in user info.
  //       const user = result.user;
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = TwitterAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }


  if (session) {
    return (
      <>
        <div className='grid place-items-center theme-col h-[100vh]'>
          <div className='my-44'>
            <p className='text-[60px] text-center leading-snug px-5'>
              Welcome to
              <span className='secondary-col rounded ml-2 p-1 font-[Cuprum]'>
                Bucket List
              </span>
            </p>
          </div>
          <div className='mt-24 mb-32'>
            <button type="button" class="text-white bg-[#1971ff] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in with Google
            </button>
            <p>{session.user.email}</p>
            <button onClick={()=>signOut()}>sign out</button>

            {/* <button onClick={isMobile ? signInWithGoogleMobile : signInWithGoogle} type="button" class="text-white bg-[#1971ff] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Sign in with Google
          </button> */}
          </div>
        </div>
      </>
    )

  } else {
    return (
      <>
      <div>
        <p>you are not signed in</p>
        <button onClick={()=>signIn()}>sign in</button>
      </div>
      </>
    )
  }


}

export default Login