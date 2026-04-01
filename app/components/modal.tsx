import Overlay from './overlay';

type ModalProps = {
    handleClose: () => void,
}

export default function Modal({ handleClose } : ModalProps) {
    return (
        <Overlay onClick={handleClose}> 
            <div
                className='modal'
                // prevents the click on modal propagating to the Overlay
                // component and causing handleClose to trigger
                onClick={(e) => e.stopPropagation()}
            >
                <iframe src="https://en.wikipedia.org/wiki/Po_(Kung_Fu_Panda)" title="Kung Fu Panda Wikipedia Page"> </iframe>
                <button onClick={handleClose}>Close</button>
            </div>
        </Overlay> 
    );
}