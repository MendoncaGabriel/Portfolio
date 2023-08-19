  const firebaseConfig = {
    apiKey: "AIzaSyDk-hthCN7zphEiIHyZteCrbRHbjlmzBeY",
    authDomain: "portfolio-c7b4f.firebaseapp.com",
    projectId: "portfolio-c7b4f",
    storageBucket: "portfolio-c7b4f.appspot.com",
    messagingSenderId: "540279822886",
    appId: "1:540279822886:web:6ea025395a77fb81a624e7",
    measurementId: "G-D3YHCD6CK4"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore()


  function impressao(){
    const docRef = db.collection('analise').doc('impressoes')
    docRef.get()
    .then((e)=>{
      
      let i = e.data().impressao+=1
      docRef.update({
        impressao: i
      })
    })

  }

  function visualizacao(){
    const docRef = db.collection('analise').doc('visualizacao')
    docRef.get()
    .then((e)=>{
      let i = e.data().visualizacao+=1
      docRef.update({
        visualizacao: i
      })
    })

  }



  setTimeout(() => {
    if(!localStorage.g){
      localStorage.g = true
      visualizacao()
    }
    impressao()
  }, 5000);