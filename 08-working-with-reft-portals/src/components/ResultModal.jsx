import { useRef, forwardRef, useImperativeHandle } from "react"


const ResultModal = forwardRef( function ResultModal ({ result, targetTime}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => {
    return {
        open(){
            dialog.current.showModal();

        }
    }
    });
    return <dialog className="result-modal" ref={dialog} open>
        <h2>Your {result}</h2>
        <p>The target was <strong>{targetTime} seconds</strong></p>
        <form action="" method="dialog">
            <button >Close</button>
        </form>
    </dialog>
})
export default ResultModal