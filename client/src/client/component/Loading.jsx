const Loading = () => {
    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center flex-column position-absolute" style={{left: 0, top: 0}}>
            <div className="spinner-border" style={{width: "5rem", height: "5rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;