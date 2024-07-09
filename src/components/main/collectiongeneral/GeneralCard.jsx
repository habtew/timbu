import './generate.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function GeneralCard(){

    const notify = () => toast.warn("comming soon!")
    return (
        <div className='generalcard'>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>men</button>
            <button className='generalcard--item black' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <button className='generalcard--item' onClick={notify}>women</button>
            <ToastContainer />
        </div>
    )
}