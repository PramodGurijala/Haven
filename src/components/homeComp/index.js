import React, { useEffect } from "react";
import "./styles.css";
import {HomeData} from './HomeScreenData';
import { useNavigate } from "react-router-dom";


export default function HomeComp() {
    const data = HomeData;
    console.log("Manish", data);
    const navigate = useNavigate();


    return (
        <div className="mainContainer">
            {data.map((item, index, key) => {
                return (
                    <div className={index % 2 === 0 ? "subContainer" : "subContainerReverse"}  >
                        <div className="article">
                            <div className="subArticle">
                                <h2 className="header">{item.title}</h2>
                                <p className="paragraph">{item.paragraph}</p>
                                <button className="btn">{item.btnText}</button>
                            </div>
                        </div>
                        <div className="ImgBox">
                            <img src={item.img_url} width='100%' />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

