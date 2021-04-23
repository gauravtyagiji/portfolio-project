import React from 'react';
import Sky from '../images/sky.jpg'
import Alone from '../images/alonecar.jpg'
import John from '../images/johnwick.jpg'
import Drake from '../images/drake.jpg'
import Joker from '../images/joker.jpg'
import Bike from '../images/bike.jpg'
import Laxman from '../images/laxmanjhula.jpg'
import Kesari from '../images/kesari.jpg'
import Breakingbad from '../images/breakingbad.jpg'
import Sunset from '../images/sunset.jpg'
import Kedar1 from '../images/kedar1.JPG'
import Kedar2 from '../images/kedar2.JPG'
import Kedar3 from '../images/kedar3.JPG'
import Kedar4 from '../images/kedar4.JPG'
import Kuari1 from '../images/kuari1.JPG'
import Kuari2 from '../images/kuari2.JPG'
import Kuari3 from '../images/kuari3.JPG'
import Kuari4 from '../images/kuari4.JPG'
import Kuari5 from '../images/kuari5.JPG'
import Badri1 from '../images/badri1.JPG'
import Badri2 from '../images/badri2.JPG'
import Badri3 from '../images/badri3.JPG'
import Badri4 from '../images/badri4.JPG'
import Badri5 from '../images/badri5.JPG'


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

                            <a href={Kedar3} className="fancybox" data-fancybox="gallery1">
                                <img src={Kedar3} alt="kedarnaath" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kedar4} className="fancybox" data-fancybox="gallery1">
                                <img src={Kedar4} alt="kedarnaath" />
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

                            <a href={Badri3} className="fancybox" data-fancybox="gallery1">
                                <img src={Badri3} alt="badrinaath" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Badri4} className="fancybox" data-fancybox="gallery1">
                                <img src={Badri4} alt="badrinaath" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Badri5} className="fancybox" data-fancybox="gallery1">
                                <img src={Badri5} alt="badrinaath" />
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
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari2} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari2} alt="kuaripass" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari3} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari3} alt="kuaripass" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari4} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari4} alt="kuaripass" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kuari5} className="fancybox" data-fancybox="gallery1">
                                <img src={Kuari5} alt="kuaripass" />
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

                            <a href={Alone} className="fancybox" data-fancybox="gallery1">
                                <img src={Alone} alt="alonecar" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Breakingbad} className="fancybox" data-fancybox="gallery1">
                                <img src={Breakingbad} alt="breakingbad" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Joker} className="fancybox" data-fancybox="gallery1">
                                <img src={Joker} alt="joker" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Drake} className="fancybox" data-fancybox="gallery1">
                                <img src={Drake} alt="drake" />
                            </a>

                        </div>
                        <div className="item col-md-4 col-sm-6 mb-3">

                            <a href={Kesari} className="fancybox" data-fancybox="gallery1">
                                <img src={Kesari} alt="bike" />
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