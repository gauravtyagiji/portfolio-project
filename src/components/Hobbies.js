import React from 'react';
import Sky from '../images/sky.jpg'
import Alone from '../images/alonecar.jpg'
import John from '../images/johnwick.jpg'
import Laxman from '../images/laxmanjhula.jpg'
import Kesari from '../images/kesari.jpg'
import Breakingbad from '../images/breakingbad.jpg'
import Kedar1 from '../images/kedar1.JPG'
import Kedar2 from '../images/kedar2.JPG'
import Kuari1 from '../images/kuari1.JPG'
import Kuari2 from '../images/kuari2.JPG'
import Badri1 from '../images/badri1.JPG'
import Badri2 from '../images/badri2.JPG'



function Hobbies() {
    return (
        <>
            <div className="bg-green-50 min-h-screen p-12 mx-auto mb-5">
                <h1 className="text-5xl flex justify-center cursive">
                    My Hobbies Page
                </h1>
                <h2 className="text-lg text-gray-600 mt-2 flex justify-center mb-12">
                    Welcome to my page of hobbies
                </h2>
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Sky} alt="sky" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Alone} alt="alone" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Kesari} alt="kesari" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Laxman} alt="laxmanjhula" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div class="jumbotron">

                        <h1 class="display-4 mx-2">My Photography Section</h1>
                        <p class="lead mt-2">I like to sieze moments and take pictures of whatever feels good to my eyes 😊.</p>

                    </div>
                    <div className="row mb-3">

                        <div className="item col-md-4 col-sm-6 mb-3">
                            <a href={Kedar1} className="fancybox" data-fancybox="gallery1">
                                <img src={Kedar1} alt="kedarnaath" />
                            </a>
                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kedar2} className="fancybox" data-fancybox="gallery1">
                                <img src={Kedar2} alt="kedarnaath" />
                            </a>

                        </div>
                        
                       
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Badri1} className="fancybox" data-fancybox="gallery1">
                                <img src={Badri1} alt="badrinaath" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Badri2} className="fancybox" data-fancybox="gallery1">
                                <img src={Badri2} alt="badrinaath" />
                            </a>

                        </div>
                        
                        
                        
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari1} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari1} alt="kuaripass" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari2} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari2} alt="kuaripass" />
                            </a>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div class="jumbotron">
                        <div class="container">
                            <h1 class="display-4">My Sketch Section</h1>
                            <p class="lead mt-2">I like to do sketching in my free time here are some of my sketches hope you'll like it 😊.</p>
                        </div>
                    </div>
                    <div className="row mb-3 mt-5">

                        <div className="item col-md-4 col-sm-6 mb-3">
                            <a href={John} className="fancybox" data-fancybox="gallery1">
                                <img src={John} alt="johnwick" />
                            </a>
                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Breakingbad} className="fancybox" data-fancybox="gallery1">
                                <img src={Breakingbad} alt="breakingbad" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kesari} className="fancybox" data-fancybox="gallery1">
                                <img src={Kesari} alt="kesari" />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-2xl flex justify-center mt-5">
                        For more such pictures you can check out my instagram given below. Thank You ! 😊
                </h1>
                </div>
        </>

    )
}

export default Hobbies