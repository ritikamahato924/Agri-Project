import React from 'react';

function Solution() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-5 me-3 '>
                    <div className="card problem" style={{ width: "80%", height: "80%" }}>
                        <img src="/media/images/problemfarm.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><b>Share Your Farming Problem</b></h5>
                            <p className="card-text">Facing low crop yield or irrigation issues? Tell us your challenge and get expert-backed solutions for free.</p>
                            <form method='GET' action={"/new"}>
                                <button className='btn btn-primary'>Report Problem</button>
                            </form>
                            
                        </div>
                    </div>
                </div>

                 <div className='col-5 me-3'>
                    <div className="card solution" style={{ width: "80%", height: "80%" }}>
                        <img src="/media/images/solutionfarm.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><b>See How Problems Were Solved</b></h5>
                            <p className="card-text">Explore real farming challenges and how modern technology and guidance helped farmers overcome them.</p>
                            <form method='GET' action={"/solution"}>
                                <button className='btn btn-primary'>View Solutions</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    );
}

export default Solution;