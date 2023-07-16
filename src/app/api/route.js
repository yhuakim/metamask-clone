import { db } from '../lib/firebase'
import { query, getDocs, collection } from 'firebase/firestore'

export const Portfolio = async (req, res) => {
    try {
        const portfolioSnapshot = await getDocs(collection(db, "portfolio"))
        const portfolioData = portfolioSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return res.status(200).json({ data: portfolioData })
    } catch (error) {
        console.log(error);
        return res.status(400)
    }
}