import { ToastContainer, toast } from "react-toastify"
import { options } from "./Chartoptions"

const ToastDemo = () => {

    const showToastMessage = (messageType, message="This is a sample message") => {
        switch(messageType){
            case 'error': toast.error(message, {position:'bottom',autoClose:3000,hideProgressBar:false,theme:"light"})
                break;
            case 'info': toast.info(message, {position:'bottom',autoClose:3000,hideProgressBar:false,theme:"light"})
                break;
            case 'success': toast.success(message, {position:'bottom',autoClose:3000,hideProgressBar:false,theme:"light"})
                break;
            case 'warning': toast.warn(message, {position:'bottom',autoClose:3000,hideProgressBar:false,theme:"light"})
                break;
            default: toast(message, {position:'bottom',autoClose:3000,hideProgressBar:false,theme:"light"})
        }
    }

    return (
        <>
        <h1 className="d-flex j-content-center">Toast Demo</h1>
        <div className="d-flex">
            <p className="ml-5">
                <div className="big-text">Toast Error message</div>
                <div className="small-text">
                    <b className="pointer-cursor" onClick={() => showToastMessage('error')}>
                        Click here</b> for demo
                </div>
            </p>
            <p className="ml-5">
                <div className="big-text">Toast Info message</div>
                <div className="small-text">
                    <b className="pointer-cursor" onClick={() => showToastMessage('info')}>
                        Click here</b> for demo
                </div>
            </p>
            <p className="ml-5">
                <div className="big-text">Toast Success message</div>
                <div className="small-text">
                    <b className="pointer-cursor" onClick={() => showToastMessage('success')}>
                        Click here</b> for demo
                </div>
            </p>
            <p className="ml-5">
                <div className="big-text">Toast Warning message</div>
                <div className="small-text">
                    <b className="pointer-cursor" onClick={() => showToastMessage('warning')}>
                        Click here</b> for demo
                </div>
            </p>
        </div>
        <ToastContainer/>
        </>
    )
}

export default ToastDemo