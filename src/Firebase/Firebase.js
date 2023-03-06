// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxJ13WsIjm94i6WCzZb0Wc-TaeF6ivMyk",
  authDomain: "space-cat-synths.firebaseapp.com",
  projectId: "space-cat-synths",
  storageBucket: "space-cat-synths.appspot.com",
  messagingSenderId: "421314848302",
  appId: "1:421314848302:web:c73351afc7951d4e8421bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

export const loadDB = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()
    products.forEach( async(prod) => {
            await addDoc(collection(db, "products"), {


                    categoryId: prod.categoryId,
                    model: prod.model,
                    brand: prod.brand,
                    type: prod.type,
                    price: prod.price,
                    stock: prod.stock,
                    img: prod.img,
                    features: prod.features


            })
    }) 

}

export const getProducts = async() => {
    const products = await getDocs(collection(db, "products"))
    const items = products.docs.map(prod =>{
            return{...prod.data(), id: prod.id}
    })
    return items
}

export const getProduct = async(id) => {
    const product = await getDoc(doc(db, "products", id))
    const item = {...product.data(), id: product.id}
    return item 
}

export const updateProduct = async(id, info) => {
    await updateDoc(doc(db, "products", id), info)
}

export const deleteProduct = async(id) => {
    await deleteDoc(doc(db, "products", id))
}

export const createOrder = async(client, products, totalPrice, date) => {
    const Order = await addDoc(collection(db, "order"), {
        clientData: client,
        products: products,
        totalPrice: totalPrice,
        date: date
    })
    return Order
}

export const getOrder = async(id) => {
    const order = await getDoc(doc(db, "order", id))
    const pOrder = {...order.data(), id: order.id}
    return pOrder 
}
