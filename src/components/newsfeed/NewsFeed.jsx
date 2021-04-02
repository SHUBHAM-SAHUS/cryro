import React from 'react';
import './newsfeed.scss';
import newsimg from  "../../../src/assets/images/news-img.jpg";
 export const NewsFeed = () => {
    return (
        <div className="news-page">
            <div className="row mt-5 mb-5">
                <div class="col-md-4 col-lg-4 col-sm-12">
                    <div className="news-box">
                        <img src={newsimg}/>
                        <div className="hover-box">
                            <h4>Coinbase to pay $6.5 million to the CFTC over Wash Trading and data reporting Allegations</h4>
                            <span className="date">21 minutes ago</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12">
                 <div className="news-box">
                 <img src={newsimg}/>
                 <div className="hover-box">
                     <h4>Coinbase to pay $6.5 million to the CFTC over Wash Trading and data reporting Allegations</h4>
                     <span className="date">21 minutes ago</span>
                 </div>
                </div>
             </div>
                 <div class="col-md-4 col-lg-4 col-sm-12">
                    <div className="news-box">
                        <img src={newsimg}/>
                        <div className="hover-box">
                            <h4>Coinbase to pay $6.5 million to the CFTC over Wash Trading and data reporting Allegations</h4>
                            <span className="date">21 minutes ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-item">
                <h3><a href="#">NFT with Fleetwood Mac’s “Dreams” Nixed by Stevie Nicks</a></h3>
                <h6>BeInCrypto <span>(about 1 hour ago)</span></h6>
                <p>Apodaca’s representative told TMZ that the now-famous skateboarder and cranberry juice drinker wanted to make an NFT of his viral video. However, the rights to ‘Dreams”, which he listened to in the clip, belong to Warner Music Group. He needed permission from Fleetwood Mac’s singer Stevie Nicks <a href="">Read More</a></p>
            </div>
            <div className="news-item">
                <h3><a href="#">NFT with Fleetwood Mac’s “Dreams” Nixed by Stevie Nicks</a></h3>
                <h6>BeInCrypto <span>(about 1 hour ago)</span></h6>
                <p>Apodaca’s representative told TMZ that the now-famous skateboarder and cranberry juice drinker wanted to make an NFT of his viral video. However, the rights to ‘Dreams”, which he listened to in the clip, belong to Warner Music Group. He needed permission from Fleetwood Mac’s singer Stevie Nicks <a href="">Read More</a></p>
            </div>
        </div>
    )
}