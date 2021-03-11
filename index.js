//   -------------------------Ready Data ---------------------------------------------

let NameT = document.getElementById("NameTbox");
let RollT = document.getElementById("RollTbox");
let SecT = document.getElementById("SecTbox");
let GenT = document.getElementById("GenTbox");

let nameV = NameT.value;
let rollV = RollT.value;
let secV = SecT.value;
let genV = GenT.value;
function Update(val, type) {
  if (type == "name") nameV = val;
  else if (type == "roll") rollV = val;
  else if (type == "sec") secV = val;
  else if (type == "gen") genV = val;
}
// ---------------------Config -------------------------------------------
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsTaENt_LnBsa7I5wcjd8d6F4wZ3bGkWs",
  authDomain: "fir-js-aab84.firebaseapp.com",
  projectId: "fir-js-aab84",
  storageBucket: "fir-js-aab84.appspot.com",
  messagingSenderId: "408336503580",
  appId: "1:408336503580:web:d8c2e5f2fabd0fe97a20d9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let cloudDB = firebase.firestore();
// -----------------------Button Events -------------------------------------
document.getElementById("insertBtn").onclick = function () {
  console.log(nameV, rollV, secV, genV);
  console.log("hello");
  Add_Doc_CustomID();
};
document.getElementById("selectBtn").onclick = function () {};
document.getElementById("updateBtn").onclick = function () {};
document.getElementById("deleteBtn").onclick = function () {};
// -----------------------Writing Data -----------------------------

//---Add Document with Auto Generated ID
function Add_Doc_WithAutoID() {
  // Collection is the table or collection of
  cloudDB
    .collection("Students")
    .add({
      //   This is creating a new entry in the DB
      NameOfStd: nameV,
      RollNo: Number(rollV),
      Section: secV,
      Gender: genV,
    })
    .then(function (docRef) {
      console.log("Document writeen with ID", docRef.id);
    })
    .catch(function (error) {
      console.eroor("Error adding document", error);
    });
}
// ----Add Document with custom ID
function Add_Doc_CustomID() {
  // Collection is the table or collection of
  cloudDB
    .collection("Students")
    .doc(rollV)
    .set({
      //   This is creating a new entry in the DB
      NameOfStd: nameV,
      RollNo: Number(rollV),
      Section: secV,
      Gender: genV,
    })
    .then(function () {
      console.log("Document writeen with ID", rollV);
    })
    .catch(function (error) {
      console.eroor("Error adding document", error);
    });
}
console.log("hiiii");
