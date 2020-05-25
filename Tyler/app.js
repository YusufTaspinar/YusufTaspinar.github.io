var firebaseConfig = {
    apiKey: "AIzaSyDCe6WdA33qyrtHXOoAPhh6ZxVXdBa06sw",
    authDomain: "tyler-6dc97.firebaseapp.com",
    databaseURL: "https://tyler-6dc97.firebaseio.com",
    projectId: "tyler-6dc97",
    storageBucket: "tyler-6dc97.appspot.com",
    messagingSenderId: "103671807099",
    appId: "1:103671807099:web:b557fa9916b7512bf7f6de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let db=firebase.database();
let kjøp=db.ref("kjøp")

function submit_data(){
    var title_In=document.getElementById("txtTitle").value
    var st_In=document.getElementById("txtSt").value
    var nm_In=document.getElementById("dtNm").value
    var cvc_In=document.getElementById("dtCVC").value
    var ad_In=document.getElementById("txtAd").value
    
    let new_object=kjøp.child(title_In)
    new_object.set({
        Navn:title_In, Størelse:st_In, Kortnummer:nm_In, CVC2:cvc_In, Adresse:ad_In
    });
}