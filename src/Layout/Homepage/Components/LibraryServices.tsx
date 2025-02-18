export const LibrrayServices = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-item-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">
                        Can't find what are you looking for?
                    </h1>
                    <p className="lead">
                        If you cannot find what are looking for,
                        send our library admin a personal message!
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        <a href="#" className="btn main-color btn-lg text-white">
                            Sign up
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
            </div>
        </div>
    );
}