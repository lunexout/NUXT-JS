import firebase from 'firebase'

const firebaseApp = {
    apiKey: "AIzaSyAyMdcooEH_uAqG4to31gRPRf1mlKwoAAQ",
    authDomain: "social-media-f09c2.firebaseapp.com",
    projectId: "social-media-f09c2",
    storageBucket: "social-media-f09c2.appspot.com",
    messagingSenderId: "373194734779",
    appId: "1:373194734779:web:94129fbd262740ebba3d9e",
    measurementId: "G-RFQXEQDXCL"
}

// firebase.initializeApp(firebaseApp);
export default !firebase.apps.length ? firebase.initializeApp(firebaseApp) : firebase.app();
// const fb = firebase.firestore()

// export default fb