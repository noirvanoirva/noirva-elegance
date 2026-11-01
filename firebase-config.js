window.noirvaFirebase = (() => {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyBDrOqIt5nL1BcBuTkvKI_lgzabKdzc81U",
    authDomain: "noirva-elegance-store.firebaseapp.com",
    projectId: "noirva-elegance-store",
    messagingSenderId: "640802616174",
    appId: "1:640802616174:web:653fd9e413ffc35266c77f"
  });

  return {
    auth: firebase.auth(app),
    firestore: firebase.firestore(app)
  };
})();
