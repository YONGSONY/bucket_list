import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
// firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyCLbZsY2eXcNZL0RN8WhNOmIEuf7TwBMRw",
  authDomain: "sparta-react-2a040.firebaseapp.com",
  projectId: "sparta-react-2a040",
  storageBucket: "sparta-react-2a040.appspot.com",
  messagingSenderId: "401984421311",
  appId: "1:401984421311:web:00666a0b66377ef80d350a",
  measurementId: "G-YKX47MF0SX"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };