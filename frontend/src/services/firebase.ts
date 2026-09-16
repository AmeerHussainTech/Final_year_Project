import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCyjQw9-oy4gulqi_2tYRllLLIqVXcedHU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "fyp-firebase-df1f6.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "fyp-firebase-df1f6",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "fyp-firebase-df1f6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "226547798919",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:226547798919:web:9fb5d255cfd7d099057922"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const isElectron = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    (navigator.userAgent.toLowerCase().includes('electron') || !!(window as any).electron)
  );
};

export const isFirebaseConfigured = (): boolean => {
  const key = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;
  return Boolean(key && key !== "AIzaSyDemoKeyPlaceholder" && !key.includes("Placeholder"));
};

/**
 * Maps raw Firebase auth error codes into friendly human-readable error messages.
 */
export const getFirebaseErrorMessage = (error: any): string => {
  const code = error?.code || '';
  switch (code) {
    case 'auth/unauthorized-domain':
      return 'This deployment domain is not authorized in Firebase Console. Go to Firebase Console > Authentication > Settings > Authorized Domains and add your Vercel / Render domain URL.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please sign up first.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Incorrect email or password. Please try again.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please log in instead.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed before completing authentication.';
    case 'auth/cancelled-popup-request':
      return 'Previous sign-in request was cancelled. Please try again.';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by browser. Please allow popups for this site.';
    case 'auth/network-request-failed':
      return 'Network connection error. Please check your connection and try again.';
    case 'auth/configuration-not-found':
    case 'auth/operation-not-allowed':
      return 'Firebase Authentication is not enabled in Firebase Console. Go to Firebase Console > Authentication > Sign-in method and enable Google and Email/Password.';
    default:
      return error?.message || 'Authentication failed. Please try again.';
  }
};
