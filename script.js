/* 
THREE E' LA VARIBILE CREATA DA three.js

console.log(THREE)
*/

/*
La scena ha effetto CONTAINER, contiene tutto. Effetto <div> per intenderci

CREAZIONE DELLA FORMA FISICA:
-GEOMETRIA FORMA: Creazione punti, "logica dei triangoli".
-MATERIALE: In sto caso il colore, interazione con agenti quali luce o altri...
-MESH: Relazione e unione della geometria con il materiale.

-Per finire: aggiungere mesh alla scena.

*/

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "red" })
// oppure 
//  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) -> classe colore di THREE.JS

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)


//Sizes

const sizes = {
    width: 800,
    height: 600
}


//Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //Il valore "75" sarebbe la FOV - Field of View; il secondo invece è il RATEO, quindi una divisione.
camera.position.z = 3
scene.add(camera)


//Renderer

const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)