function getProducts(){return firebase.database().ref("/products").once("value").then(function(e){var t=e.val();console.log(t)})}getProducts();