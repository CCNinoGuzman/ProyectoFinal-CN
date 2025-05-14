import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../components/config/firebase_config"

export const getProducts = async ()=>{
    const prodCollection  = collection(db, 'ProductosAndroid')
    const productos = await getDocs(prodCollection)
    return productos.docs.map(doc=>({id: doc.id, ...doc.data()}))
}
export const getProductId = async (id)=>{
    const prodDoc  = doc(db, 'ProductosAndroid', id)
    const product = await getDoc(prodDoc)
    return {id: product.id, ...product.data()}
}

export const getProductsApple = async ()=>{
    const prodCollectionApple  = collection(db, 'productosApple')
    const productosApple = await getDocs(prodCollectionApple)
    return productosApple.docs.map(doc=>({id: doc.id, ...doc.data()}))
}

export const getProductIdApple = async (id)=>{
    const prodDocA  = doc(db, 'productosApple', id)
    const productA = await getDoc(prodDocA)
    return {id: productA.id, ...productA.data()}
}

